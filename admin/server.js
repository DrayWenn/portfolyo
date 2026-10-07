/* ==========================================================================
   PORTFOLYO YÖNETİM PANELİ — YEREL SUNUCU
   Harici paket gerektirmez. Çalıştırmak için: node admin/server.js
   (veya admin/baslat.bat dosyasına çift tıklayın)

   - Site ve panel:       http://localhost:4545/portfolyo/admin/
   - projects.js okuma / yazma (her kayıtta otomatik yedek alınır)
   - Video yükleme:       portfolyo/videos/ klasörüne kaydedilir
   - Video oynatma:       Range (ileri/geri sarma) destekli
   Güvenlik: Sunucu sadece bu bilgisayardan (127.0.0.1) erişilebilir.
   ========================================================================== */

const http = require('http');
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const vm = require('vm');
const { exec } = require('child_process');

const PORT = 4545;
const HOST = '127.0.0.1';

const SITE_DIR = path.resolve(__dirname, '..');                 // .../portfolyo
const ROOT_DIR = path.resolve(SITE_DIR, '..');                  // .../Masaüstü
const SITE_NAME = path.basename(SITE_DIR);                      // "portfolyo"
const PROJECTS_FILE = path.join(SITE_DIR, 'projects.js');
const BACKUP_DIR = path.join(__dirname, 'yedekler');
const VIDEO_DIR = path.join(SITE_DIR, 'videos');

// Statik olarak sunulmasına izin verilen klasörler (Masaüstünün tamamı açılmaz)
const ALLOWED_STATIC_DIRS = [
    SITE_DIR,
    path.join(ROOT_DIR, 'After Effects Projeleri')
];

const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov', '.m4v', '.ogg']);
const MAX_UPLOAD_BYTES = 2 * 1024 * 1024 * 1024; // 2 GB

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf',
    '.mp4': 'video/mp4',
    '.m4v': 'video/mp4',
    '.webm': 'video/webm',
    '.mov': 'video/quicktime',
    '.ogg': 'video/ogg'
};

const PROJECTS_HEADER = `/* ==========================================================================
   PORTFOLIO PROJECTS DATA (TR / EN Supported)
   Bu dosya Yönetim Paneli tarafından otomatik güncellenir.
   Panel: admin/baslat.bat  →  http://localhost:${PORT}/${SITE_NAME}/admin/
   Elle düzenleme de yapılabilir. Rehber için bkz: PROJE_EKLEME_REHBERI.md
   ========================================================================== */

`;

// --------------------------------------------------------------------------
// Yardımcılar
// --------------------------------------------------------------------------
function isInside(child, parent) {
    const rel = path.relative(parent, child);
    return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
}

function sendJSON(res, status, data) {
    const body = JSON.stringify(data);
    res.writeHead(status, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store'
    });
    res.end(body);
}

function readBody(req, limit = 10 * 1024 * 1024) {
    return new Promise((resolve, reject) => {
        let size = 0;
        const chunks = [];
        req.on('data', chunk => {
            size += chunk.length;
            if (size > limit) {
                reject(new Error('İstek gövdesi çok büyük'));
                req.destroy();
                return;
            }
            chunks.push(chunk);
        });
        req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        req.on('error', reject);
    });
}

function sanitizeFileName(name) {
    const ext = path.extname(name).toLowerCase();
    const base = path.basename(name, path.extname(name))
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')        // aksanları kaldır
        .replace(/ı/g, 'i').replace(/İ/g, 'I')
        .replace(/[^a-zA-Z0-9-_]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase() || 'video';
    return { base: base.slice(0, 60), ext };
}

async function uniquePath(dir, base, ext) {
    let candidate = path.join(dir, base + ext);
    let i = 1;
    while (true) {
        try {
            await fsp.access(candidate);
            candidate = path.join(dir, `${base}-${i++}${ext}`);
        } catch {
            return candidate;
        }
    }
}

// --------------------------------------------------------------------------
// projects.js okuma / yazma
// --------------------------------------------------------------------------
async function loadProjects() {
    const code = await fsp.readFile(PROJECTS_FILE, 'utf8');
    const sandbox = {};
    vm.runInNewContext(code + '\n;this.__data = PROJECTS_DATA;', sandbox, { timeout: 1000 });
    if (!Array.isArray(sandbox.__data)) throw new Error('projects.js içinde PROJECTS_DATA dizisi bulunamadı');
    return sandbox.__data;
}

function validateProjects(list) {
    if (!Array.isArray(list)) return 'Veri bir dizi olmalı';
    const ids = new Set();
    for (const [i, p] of list.entries()) {
        if (!p || typeof p !== 'object') return `${i + 1}. kayıt geçersiz`;
        if (typeof p.id !== 'number') return `${i + 1}. kaydın id değeri sayı olmalı`;
        if (ids.has(p.id)) return `Aynı id birden fazla kullanılmış: ${p.id}`;
        ids.add(p.id);
        if (!p.title || !(p.title.tr || p.title.en)) return `${i + 1}. kaydın başlığı boş`;
        if (!['web', 'ae'].includes(p.category)) return `${i + 1}. kaydın kategorisi "web" veya "ae" olmalı`;
    }
    return null;
}

async function saveProjects(list) {
    await fsp.mkdir(BACKUP_DIR, { recursive: true });
    // Yedek al
    try {
        const stamp = new Date().toISOString().replace(/[:.]/g, '-');
        await fsp.copyFile(PROJECTS_FILE, path.join(BACKUP_DIR, `projects-${stamp}.js`));
        // En fazla 30 yedek tut
        const backups = (await fsp.readdir(BACKUP_DIR)).filter(f => f.startsWith('projects-')).sort();
        for (const old of backups.slice(0, Math.max(0, backups.length - 30))) {
            await fsp.unlink(path.join(BACKUP_DIR, old)).catch(() => {});
        }
    } catch { /* ilk kayıtta dosya olmayabilir */ }

    const content = PROJECTS_HEADER + 'const PROJECTS_DATA = ' + JSON.stringify(list, null, 4) + ';\n';
    const tmp = PROJECTS_FILE + '.tmp';
    await fsp.writeFile(tmp, content, 'utf8');
    await fsp.rename(tmp, PROJECTS_FILE);
}

// --------------------------------------------------------------------------
// API
// --------------------------------------------------------------------------
async function handleApi(req, res, url) {
    try {
        // Projeleri getir
        if (url.pathname === '/api/projects' && req.method === 'GET') {
            return sendJSON(res, 200, await loadProjects());
        }

        // Projeleri kaydet
        if (url.pathname === '/api/projects' && req.method === 'PUT') {
            const list = JSON.parse(await readBody(req));
            const err = validateProjects(list);
            if (err) return sendJSON(res, 400, { error: err });
            await saveProjects(list);
            return sendJSON(res, 200, { ok: true, count: list.length });
        }

        // Video yükle (ham gövde, dosya adı başlıkta)
        if (url.pathname === '/api/upload' && req.method === 'POST') {
            const rawName = decodeURIComponent(req.headers['x-filename'] || 'video.mp4');
            const { base, ext } = sanitizeFileName(rawName);
            if (!VIDEO_EXT.has(ext)) {
                return sendJSON(res, 400, { error: `Desteklenmeyen dosya türü: ${ext || '(uzantısız)'}. İzin verilenler: ${[...VIDEO_EXT].join(', ')}` });
            }
            const length = Number(req.headers['content-length'] || 0);
            if (length > MAX_UPLOAD_BYTES) return sendJSON(res, 413, { error: 'Dosya 2 GB sınırını aşıyor' });

            await fsp.mkdir(VIDEO_DIR, { recursive: true });
            const target = await uniquePath(VIDEO_DIR, base, ext);
            const out = fs.createWriteStream(target);
            let failed = false;

            req.pipe(out);
            req.on('aborted', () => { failed = true; out.destroy(); fsp.unlink(target).catch(() => {}); });
            out.on('error', e => {
                failed = true;
                fsp.unlink(target).catch(() => {});
                sendJSON(res, 500, { error: 'Dosya yazılamadı: ' + e.message });
            });
            out.on('finish', () => {
                if (failed) return;
                const rel = path.relative(SITE_DIR, target).split(path.sep).join('/');
                sendJSON(res, 200, { ok: true, path: rel, name: path.basename(target) });
            });
            return;
        }

        // Yüklenmiş videoyu sil (sadece portfolyo/videos içindekiler)
        if (url.pathname === '/api/video' && req.method === 'DELETE') {
            const rel = url.searchParams.get('path') || '';
            const abs = path.resolve(SITE_DIR, rel);
            if (!isInside(abs, VIDEO_DIR) || abs === VIDEO_DIR) {
                return sendJSON(res, 400, { error: 'Sadece videos/ klasöründeki dosyalar silinebilir' });
            }
            await fsp.unlink(abs).catch(() => {});
            return sendJSON(res, 200, { ok: true });
        }

        // Video dosyası var mı?
        if (url.pathname === '/api/video-exists' && req.method === 'GET') {
            const rel = url.searchParams.get('path') || '';
            const abs = path.resolve(SITE_DIR, rel);
            const allowed = ALLOWED_STATIC_DIRS.some(d => isInside(abs, d));
            let exists = false, size = 0;
            if (allowed) {
                try { const st = await fsp.stat(abs); exists = st.isFile(); size = st.size; } catch {}
            }
            return sendJSON(res, 200, { exists, size });
        }

        sendJSON(res, 404, { error: 'Bilinmeyen API adresi' });
    } catch (e) {
        console.error(e);
        sendJSON(res, 500, { error: e.message || 'Sunucu hatası' });
    }
}

// --------------------------------------------------------------------------
// Statik dosyalar (Range destekli)
// --------------------------------------------------------------------------
async function serveStatic(req, res, url) {
    let pathname;
    try { pathname = decodeURIComponent(url.pathname); } catch { res.writeHead(400); return res.end(); }

    if (pathname === '/' || pathname === '') {
        res.writeHead(302, { Location: `/${encodeURIComponent(SITE_NAME)}/admin/` });
        return res.end();
    }

    let abs = path.resolve(ROOT_DIR, '.' + pathname);
    if (!ALLOWED_STATIC_DIRS.some(d => isInside(abs, d))) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Erişim izni yok');
    }

    let stat;
    try {
        stat = await fsp.stat(abs);
        if (stat.isDirectory()) {
            if (!pathname.endsWith('/')) {
                res.writeHead(301, { Location: url.pathname + '/' });
                return res.end();
            }
            abs = path.join(abs, 'index.html');
            stat = await fsp.stat(abs);
        }
    } catch {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Dosya bulunamadı');
    }

    const type = MIME[path.extname(abs).toLowerCase()] || 'application/octet-stream';
    const range = req.headers.range;

    if (range) {
        const m = /bytes=(\d*)-(\d*)/.exec(range);
        let start = m && m[1] ? parseInt(m[1], 10) : 0;
        let end = m && m[2] ? parseInt(m[2], 10) : stat.size - 1;
        if (m && !m[1] && m[2]) { start = stat.size - parseInt(m[2], 10); end = stat.size - 1; }
        if (start >= stat.size || end >= stat.size || start > end) {
            res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` });
            return res.end();
        }
        res.writeHead(206, {
            'Content-Type': type,
            'Content-Range': `bytes ${start}-${end}/${stat.size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': end - start + 1,
            'Cache-Control': 'no-cache'
        });
        return fs.createReadStream(abs, { start, end }).pipe(res);
    }

    res.writeHead(200, {
        'Content-Type': type,
        'Content-Length': stat.size,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache'
    });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(abs).pipe(res);
}

// --------------------------------------------------------------------------
// Sunucu
// --------------------------------------------------------------------------
const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (url.pathname.startsWith('/api/')) return handleApi(req, res, url);
    serveStatic(req, res, url);
});

server.requestTimeout = 0; // büyük video yüklemeleri için zaman aşımı yok

server.on('error', err => {
    if (err.code === 'EADDRINUSE') {
        console.log(`\n  Panel zaten çalışıyor olabilir → http://localhost:${PORT}/${SITE_NAME}/admin/\n`);
    } else {
        console.error(err);
    }
    process.exit(1);
});

server.listen(PORT, HOST, () => {
    const adminUrl = `http://localhost:${PORT}/${encodeURI(SITE_NAME)}/admin/`;
    console.log('\n  ✦ Portfolyo Yönetim Paneli çalışıyor');
    console.log(`  → Panel : ${adminUrl}`);
    console.log(`  → Site  : http://localhost:${PORT}/${encodeURI(SITE_NAME)}/index.html`);
    console.log('  Kapatmak için bu pencerede Ctrl + C\n');
    if (!process.argv.includes('--no-open')) {
        exec(`start "" "${adminUrl}"`);
    }
});
