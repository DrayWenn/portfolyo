(function () {
    'use strict';

    const POPULAR_ICONS = [
        'fa-clapperboard', 'fa-film', 'fa-video', 'fa-play', 'fa-wand-magic-sparkles',
        'fa-music', 'fa-camera', 'fa-mountain', 'fa-store', 'fa-cart-shopping',
        'fa-basket-shopping', 'fa-globe', 'fa-code', 'fa-laptop-code', 'fa-gears',
        'fa-database', 'fa-layer-group', 'fa-palette', 'fa-bolt', 'fa-fire'
    ];

    let projects = [];
    let initialProjectsJson = '[]';
    let activeFilter = 'all';
    let searchQuery = '';
    let editingId = null;
    let currentUploadXhr = null;
    let dragSrcIndex = null;

    const $ = (id) => document.getElementById(id);
    const grid = $('projectGrid');
    const emptyState = $('emptyState');
    const loadingState = $('loadingState');
    const serverError = $('serverError');
    const saveBar = $('saveBar');
    const saveBtn = $('saveBtn');
    const discardBtn = $('discardBtn');
    const newProjectBtn = $('newProjectBtn');
    const searchInput = $('searchInput');
    const filterTabs = $('filterTabs');

    const drawer = $('drawer');
    const drawerBackdrop = $('drawerBackdrop');
    const drawerClose = $('drawerClose');
    const drawerTitle = $('drawerTitle');
    const drawerKicker = $('drawerKicker');
    const applyEditBtn = $('applyEditBtn');
    const cancelEditBtn = $('cancelEditBtn');
    const deleteProjectBtn = $('deleteProjectBtn');

    const catAe = $('catAe');
    const catWeb = $('catWeb');
    const titleTr = $('titleTr');
    const titleEn = $('titleEn');
    const descTr = $('descTr');
    const descEn = $('descEn');
    const linkInput = $('linkInput');
    const instagramInput = $('instagramInput');
    const authorInput = $('authorInput');
    const videoSrcInput = $('videoSrcInput');
    const iconGrid = $('iconGrid');
    const tagsTrEl = $('tagsTr');
    const tagsEnEl = $('tagsEn');
    const videoField = $('videoField');

    const dropzone = $('dropzone');
    const fileInput = $('fileInput');
    const videoPreview = $('videoPreview');
    const previewVideo = $('previewVideo');
    const videoPathLabel = $('videoPathLabel');
    const replaceVideoBtn = $('replaceVideoBtn');
    const removeVideoBtn = $('removeVideoBtn');
    const uploadProgress = $('uploadProgress');
    const uploadName = $('uploadName');
    const uploadPercent = $('uploadPercent');
    const uploadFill = $('uploadFill');
    const cancelUploadBtn = $('cancelUploadBtn');

    const confirmDialog = $('confirmDialog');
    const confirmTitle = $('confirmTitle');
    const confirmText = $('confirmText');
    const confirmOk = $('confirmOk');
    const confirmCancel = $('confirmCancel');
    const confirmCheckWrap = $('confirmCheckWrap');
    const confirmCheck = $('confirmCheck');
    const confirmCheckLabel = $('confirmCheckLabel');
    const pageDrop = $('pageDrop');
    const toasts = $('toasts');

    const statTotal = $('statTotal');
    const statVideo = $('statVideo');
    const statWeb = $('statWeb');

    let currentIcon = 'fa-film';
    let tagsTrList = [];
    let tagsEnList = [];

    function showToast(message, type = 'success', duration = 3000) {
        const icons = {
            success: 'fa-circle-check',
            error: 'fa-circle-exclamation',
            info: 'fa-circle-info'
        };
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<i class="fa-solid ${icons[type] || icons.info}"></i><span>${escapeHtml(message)}</span>`;
        toasts.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('out');
            setTimeout(() => toast.remove(), 250);
        }, duration);
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/[&<>"']/g, m => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[m]);
    }

    async function fetchProjects() {
        loadingState.hidden = false;
        serverError.hidden = true;
        emptyState.hidden = true;
        grid.innerHTML = '';
        try {
            const res = await fetch('/api/projects');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            projects = await res.json();
            initialProjectsJson = JSON.stringify(projects);
            loadingState.hidden = true;
            render();
        } catch (err) {
            console.error(err);
            loadingState.hidden = true;
            serverError.hidden = false;
        }
    }

    async function persistProjects() {
        saveBtn.disabled = true;
        saveBtn.innerHTML = '<span class="spinner"></span> Kaydediliyor...';
        try {
            const res = await fetch('/api/projects', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(projects)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Kayıt başarısız');

            initialProjectsJson = JSON.stringify(projects);
            checkDirty();
            render();
            showToast('Değişiklikler kaydedildi.', 'success');
        } catch (err) {
            showToast(err.message || 'Kayıt sırasında hata oluştu', 'error', 5000);
        } finally {
            saveBtn.disabled = false;
            saveBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Kaydet <kbd>Ctrl S</kbd>';
        }
    }

    function isDirty() {
        return JSON.stringify(projects) !== initialProjectsJson;
    }

    function checkDirty() {
        saveBar.classList.toggle('show', isDirty());
    }

    function initIconGrid() {
        iconGrid.innerHTML = POPULAR_ICONS.map(ic => `
            <button type="button" class="icon-choice ${ic === currentIcon ? 'active' : ''}" data-icon="${ic}" title="${ic}">
                <i class="fa-solid ${ic}"></i>
            </button>
        `).join('');

        iconGrid.querySelectorAll('.icon-choice').forEach(btn => {
            btn.addEventListener('click', () => {
                iconGrid.querySelectorAll('.icon-choice').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentIcon = btn.dataset.icon;
            });
        });
    }

    function selectIcon(iconName) {
        currentIcon = iconName || 'fa-film';
        iconGrid.querySelectorAll('.icon-choice').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.icon === currentIcon);
        });
    }

    function renderChips(container, list, onChange) {
        container.innerHTML = '';
        list.forEach((tag, idx) => {
            const chip = document.createElement('span');
            chip.className = 'chip';
            chip.title = 'Silmek için tıkla';
            chip.innerHTML = `${escapeHtml(tag)} <i class="fa-solid fa-xmark"></i>`;
            chip.addEventListener('click', () => {
                list.splice(idx, 1);
                onChange();
                renderChips(container, list, onChange);
            });
            container.appendChild(chip);
        });

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = list.length === 0 ? 'Etiket yazıp Enter\'a bas...' : '+ etiket';
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                const val = input.value.trim().replace(/^,|,$/g, '');
                if (val && !list.includes(val)) {
                    list.push(val);
                    onChange();
                    renderChips(container, list, onChange);
                }
                input.value = '';
            } else if (e.key === 'Backspace' && input.value === '' && list.length > 0) {
                list.pop();
                onChange();
                renderChips(container, list, onChange);
            }
        });
        container.appendChild(input);
    }

    function openDrawer(mode, projectData) {
        editingId = mode === 'new' ? 'new' : projectData.id;
        drawerKicker.textContent = mode === 'new' ? 'Yeni Proje' : `Düzenle · #${projectData.id}`;
        drawerTitle.textContent = mode === 'new' ? 'Yeni Proje Oluştur' : (getLocalized(projectData.title, 'tr') || 'Proje');
        deleteProjectBtn.hidden = mode === 'new';

        const isAe = projectData ? projectData.category === 'ae' : true;
        if (isAe) catAe.checked = true; else catWeb.checked = true;
        updateCategoryFields();

        titleTr.value = projectData ? getLocalized(projectData.title, 'tr') : '';
        titleEn.value = projectData ? (typeof projectData.title === 'object' ? (projectData.title.en || '') : '') : '';
        descTr.value = projectData ? getLocalized(projectData.description, 'tr') : '';
        descEn.value = projectData ? (typeof projectData.description === 'object' ? (projectData.description.en || '') : '') : '';
        linkInput.value = projectData ? (projectData.link || '') : '';
        instagramInput.value = projectData ? (projectData.instagramUrl || '') : '';
        authorInput.value = projectData ? (projectData.author || '') : 'drayeditss';
        videoSrcInput.value = projectData ? (projectData.videoSrc || '') : '';

        tagsTrList = projectData ? extractTags(projectData.tags, 'tr') : [];
        tagsEnList = projectData ? extractTags(projectData.tags, 'en') : [];
        renderChips(tagsTrEl, tagsTrList, () => {});
        renderChips(tagsEnEl, tagsEnList, () => {});

        selectIcon(projectData ? (projectData.icon || (isAe ? 'fa-film' : 'fa-globe')) : 'fa-film');
        setVideoSource(videoSrcInput.value);

        document.querySelectorAll('.lang-tabs').forEach(tabsGroup => {
            const group = tabsGroup.dataset.group;
            tabsGroup.querySelectorAll('.lang-tab').forEach(t => t.classList.toggle('active', t.dataset.lang === 'tr'));
            document.querySelectorAll(`.lang-input[data-group="${group}"]`).forEach(inp => {
                inp.hidden = inp.dataset.lang !== 'tr';
            });
        });

        drawerBackdrop.classList.add('show');
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        titleTr.focus();
    }

    function closeDrawer() {
        if (currentUploadXhr) {
            currentUploadXhr.abort();
            currentUploadXhr = null;
        }
        previewVideo.pause();
        previewVideo.removeAttribute('src');
        previewVideo.load();

        drawerBackdrop.classList.remove('show');
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        editingId = null;
    }

    function getLocalized(field, lang) {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field.tr || '';
    }

    function extractTags(tagsField, lang) {
        if (!tagsField) return [];
        if (Array.isArray(tagsField)) return [...tagsField];
        if (typeof tagsField === 'object' && Array.isArray(tagsField[lang])) return [...tagsField[lang]];
        return [];
    }

    function updateCategoryFields() {
        const isAe = catAe.checked;
        document.querySelectorAll('[data-only="ae"]').forEach(el => el.hidden = !isAe);
        videoField.hidden = !isAe;
        if (!isAe && (currentIcon === 'fa-film' || currentIcon === 'fa-clapperboard')) {
            selectIcon('fa-globe');
        }
    }

    function setVideoSource(src) {
        videoSrcInput.value = src || '';
        if (src && src.trim()) {
            videoPathLabel.textContent = src;
            previewVideo.src = '/' + src.replace(/^(\.\.\/|\/)+/, '');
            videoPreview.hidden = false;
            dropzone.hidden = true;
            uploadProgress.hidden = true;
        } else {
            previewVideo.removeAttribute('src');
            previewVideo.load();
            videoPreview.hidden = true;
            dropzone.hidden = false;
            uploadProgress.hidden = true;
        }
    }

    function uploadVideoFile(file) {
        if (!file) return;
        const ext = '.' + file.name.split('.').pop().toLowerCase();
        const allowed = ['.mp4', '.webm', '.mov', '.m4v', '.ogg'];
        if (!allowed.includes(ext)) {
            showToast(`Desteklenmeyen dosya türü (${ext}).`, 'error');
            return;
        }

        if (!titleTr.value.trim()) {
            const cleanTitle = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ');
            titleTr.value = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);
        }

        dropzone.hidden = true;
        videoPreview.hidden = true;
        uploadProgress.hidden = false;
        uploadName.textContent = file.name;
        uploadPercent.textContent = '0%';
        uploadFill.style.width = '0%';

        const xhr = new XMLHttpRequest();
        currentUploadXhr = xhr;

        xhr.upload.addEventListener('progress', (e) => {
            if (e.lengthComputable) {
                const percent = Math.round((e.loaded / e.total) * 100);
                uploadPercent.textContent = `${percent}%`;
                uploadFill.style.width = `${percent}%`;
            }
        });

        xhr.addEventListener('load', () => {
            currentUploadXhr = null;
            if (xhr.status === 200) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    setVideoSource(data.path);
                    showToast(`Video yüklendi: ${data.name}`, 'success');
                } catch {
                    showToast('Sunucu yanıtı okunamadı', 'error');
                    setVideoSource('');
                }
            } else {
                let msg = 'Yükleme başarısız';
                try { msg = JSON.parse(xhr.responseText).error || msg; } catch {}
                showToast(msg, 'error');
                setVideoSource('');
            }
        });

        xhr.addEventListener('error', () => {
            currentUploadXhr = null;
            showToast('Yükleme sırasında hata oluştu', 'error');
            setVideoSource('');
        });

        xhr.addEventListener('abort', () => {
            currentUploadXhr = null;
            showToast('Yükleme iptal edildi', 'info');
            setVideoSource('');
        });

        xhr.open('POST', '/api/upload');
        xhr.setRequestHeader('X-Filename', encodeURIComponent(file.name));
        xhr.send(file);
    }

    function applyForm() {
        const titleTrVal = titleTr.value.trim();
        if (!titleTrVal) {
            titleTr.classList.add('invalid');
            titleTr.focus();
            showToast('Proje başlığı girin', 'error');
            return;
        }
        titleTr.classList.remove('invalid');

        const titleEnVal = titleEn.value.trim();
        const descTrVal = descTr.value.trim();
        const descEnVal = descEn.value.trim();
        const categoryVal = catAe.checked ? 'ae' : 'web';

        const titleObj = titleEnVal ? { tr: titleTrVal, en: titleEnVal } : { tr: titleTrVal, en: titleTrVal };
        const descObj = descEnVal ? { tr: descTrVal, en: descEnVal } : { tr: descTrVal, en: descTrVal };
        const tagsObj = tagsEnList.length > 0 ? { tr: tagsTrList, en: tagsEnList } : { tr: tagsTrList, en: tagsTrList };

        if (editingId === 'new') {
            const nextId = projects.length > 0 ? Math.max(...projects.map(p => p.id || 0)) + 1 : 1;
            const newProject = {
                id: nextId,
                title: titleObj,
                description: descObj,
                category: categoryVal,
                tags: tagsObj,
                link: linkInput.value.trim() || (categoryVal === 'ae' ? 'https://www.instagram.com/drayeditss/' : '#'),
                icon: currentIcon || (categoryVal === 'ae' ? 'fa-film' : 'fa-globe'),
                videoSrc: categoryVal === 'ae' ? videoSrcInput.value.trim() : ''
            };

            if (categoryVal === 'ae') {
                newProject.instagramUrl = instagramInput.value.trim() || 'https://www.instagram.com/drayeditss/';
                newProject.author = authorInput.value.trim() || 'drayeditss';
            }

            projects.unshift(newProject);
            showToast('Proje eklendi. Kaydetmeyi unutma.', 'info');
        } else {
            const target = projects.find(p => p.id === editingId);
            if (target) {
                target.title = titleObj;
                target.description = descObj;
                target.category = categoryVal;
                target.tags = tagsObj;
                target.link = linkInput.value.trim();
                target.icon = currentIcon;
                target.videoSrc = categoryVal === 'ae' ? videoSrcInput.value.trim() : '';

                if (categoryVal === 'ae') {
                    target.instagramUrl = instagramInput.value.trim() || 'https://www.instagram.com/drayeditss/';
                    target.author = authorInput.value.trim() || 'drayeditss';
                }
                showToast('Proje güncellendi.', 'info');
            }
        }

        closeDrawer();
        checkDirty();
        render();
    }

    function askDeleteProject(project) {
        confirmTitle.textContent = `"${getLocalized(project.title, 'tr')}" silinsin mi?`;
        confirmText.textContent = 'Bu proje listeden kaldırılacak. Kaydet butonuna bastığında kalıcı olur.';

        const hasCustomVideo = project.videoSrc && project.videoSrc.startsWith('videos/');
        if (hasCustomVideo) {
            confirmCheckWrap.hidden = false;
            confirmCheck.checked = false;
            confirmCheckLabel.textContent = `Video dosyasını da diskten sil (${project.videoSrc})`;
        } else {
            confirmCheckWrap.hidden = true;
        }

        confirmDialog.hidden = false;

        const onOk = async () => {
            confirmDialog.hidden = true;
            cleanup();

            if (hasCustomVideo && confirmCheck.checked) {
                try {
                    await fetch(`/api/video?path=${encodeURIComponent(project.videoSrc)}`, { method: 'DELETE' });
                } catch (e) {
                    console.error(e);
                }
            }

            projects = projects.filter(p => p.id !== project.id);
            if (editingId === project.id) closeDrawer();
            checkDirty();
            render();
            showToast('Proje silindi.', 'info');
        };

        const onCancel = () => {
            confirmDialog.hidden = true;
            cleanup();
        };

        function cleanup() {
            confirmOk.removeEventListener('click', onOk);
            confirmCancel.removeEventListener('click', onCancel);
        }

        confirmOk.addEventListener('click', onOk);
        confirmCancel.addEventListener('click', onCancel);
    }

    function render() {
        statTotal.textContent = projects.length;
        statVideo.textContent = projects.filter(p => p.category === 'ae').length;
        statWeb.textContent = projects.filter(p => p.category === 'web').length;

        const filtered = projects.filter((p) => {
            if (activeFilter === 'ae' && p.category !== 'ae') return false;
            if (activeFilter === 'web' && p.category !== 'web') return false;
            if (searchQuery) {
                const trTitle = getLocalized(p.title, 'tr').toLowerCase();
                const enTitle = getLocalized(p.title, 'en').toLowerCase();
                const desc = getLocalized(p.description, 'tr').toLowerCase();
                const q = searchQuery.toLowerCase();
                if (!trTitle.includes(q) && !enTitle.includes(q) && !desc.includes(q)) return false;
            }
            return true;
        });

        grid.innerHTML = '';
        emptyState.hidden = filtered.length > 0;

        filtered.forEach((p) => {
            const realIndex = projects.indexOf(p);
            grid.appendChild(createCardElement(p, realIndex));
        });

        const addTile = document.createElement('button');
        addTile.type = 'button';
        addTile.className = 'add-tile';
        addTile.innerHTML = `<i class="fa-solid fa-plus"></i><span>Yeni Proje Ekle</span>`;
        addTile.addEventListener('click', () => openDrawer('new', null));
        grid.appendChild(addTile);
    }

    function createCardElement(p, realIndex) {
        const card = document.createElement('article');
        card.className = 'card';
        card.dataset.id = p.id;
        card.dataset.index = realIndex;

        const isAe = p.category === 'ae';
        const title = getLocalized(p.title, 'tr') || 'İsimsiz Proje';
        const desc = getLocalized(p.description, 'tr') || '';
        const tags = extractTags(p.tags, 'tr');
        const icon = p.icon || (isAe ? 'fa-film' : 'fa-globe');

        let mediaHtml = '';
        if (isAe) {
            const fileName = p.videoSrc ? p.videoSrc.split('/').pop() : '';
            const fileTag = p.videoSrc
                ? `<span class="video-file-tag"><i class="fa-solid fa-play"></i> ${escapeHtml(fileName)}</span>`
                : (p.link ? `<span class="video-file-tag"><i class="fa-brands fa-youtube"></i> Video Bağlantısı</span>` : '<span class="video-file-tag warning"><i class="fa-solid fa-link"></i> Link veya Video Yok</span>');
            mediaHtml = `
                <div class="card-media ae-tile">
                    <div class="media-icon-wrap">
                        <i class="fa-solid ${icon}"></i>
                    </div>
                    ${fileTag}
                </div>
            `;
        } else {
            mediaHtml = `
                <div class="card-media web-tile">
                    <div class="media-icon-wrap">
                        <i class="fa-solid ${icon}"></i>
                    </div>
                    <span class="video-file-tag"><i class="fa-solid fa-globe"></i> Web / Bağlantı</span>
                </div>
            `;
        }

        card.innerHTML = `
            ${mediaHtml}
            <span class="badge badge-${p.category}">${isAe ? 'Video' : 'Web'}</span>
            <div class="drag-handle" title="Sıralamak için sürükle"><i class="fa-solid fa-grip-vertical"></i></div>
            <span class="order-num">#${realIndex + 1}</span>
            <div class="card-body">
                <h3 class="card-title"><i class="fa-solid ${icon}"></i> ${escapeHtml(title)}</h3>
                <p class="card-desc">${escapeHtml(desc)}</p>
                <div class="card-tags">
                    ${tags.slice(0, 4).map(t => `<span>${escapeHtml(t)}</span>`).join('')}
                </div>
            </div>
            <div class="card-actions">
                <button type="button" class="btn btn-ghost btn-sm edit-btn"><i class="fa-solid fa-pen"></i> Düzenle</button>
                <button type="button" class="icon-btn danger delete-btn" title="Projeyi Sil"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        card.querySelector('.edit-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openDrawer('edit', p);
        });
        card.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            askDeleteProject(p);
        });
        card.addEventListener('click', () => openDrawer('edit', p));

        setupCardDragDrop(card, realIndex);
        return card;
    }

    function setupCardDragDrop(card, realIndex) {
        card.draggable = true;

        card.addEventListener('dragstart', (e) => {
            dragSrcIndex = realIndex;
            card.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', String(realIndex));
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
            grid.querySelectorAll('.card').forEach(c => c.classList.remove('drop-before', 'drop-after'));
        });

        card.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            const rect = card.getBoundingClientRect();
            const midpoint = rect.left + rect.width / 2;
            card.classList.toggle('drop-before', e.clientX < midpoint);
            card.classList.toggle('drop-after', e.clientX >= midpoint);
        });

        card.addEventListener('dragleave', () => {
            card.classList.remove('drop-before', 'drop-after');
        });

        card.addEventListener('drop', (e) => {
            e.preventDefault();
            card.classList.remove('drop-before', 'drop-after');
            const fromIndex = dragSrcIndex;
            const toIndex = realIndex;

            if (fromIndex === null || fromIndex === undefined || fromIndex === toIndex) return;

            const moved = projects.splice(fromIndex, 1)[0];
            projects.splice(toIndex, 0, moved);

            checkDirty();
            render();
            showToast('Sıralama güncellendi.', 'info', 2000);
        });
    }

    let dragCounter = 0;

    window.addEventListener('dragenter', (e) => {
        if (e.dataTransfer && Array.from(e.dataTransfer.types).includes('Files')) {
            dragCounter++;
            pageDrop.classList.add('show');
        }
    });

    window.addEventListener('dragleave', () => {
        dragCounter--;
        if (dragCounter <= 0) {
            dragCounter = 0;
            pageDrop.classList.remove('show');
        }
    });

    window.addEventListener('dragover', (e) => e.preventDefault());

    window.addEventListener('drop', (e) => {
        e.preventDefault();
        dragCounter = 0;
        pageDrop.classList.remove('show');

        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            if (!drawer.classList.contains('open')) {
                openDrawer('new', null);
            }
            catAe.checked = true;
            updateCategoryFields();
            uploadVideoFile(file);
        }
    });

    function initEvents() {
        newProjectBtn.addEventListener('click', () => openDrawer('new', null));
        saveBtn.addEventListener('click', persistProjects);
        discardBtn.addEventListener('click', () => {
            projects = JSON.parse(initialProjectsJson);
            checkDirty();
            render();
            showToast('Değişiklikler geri alındı.', 'info');
        });

        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            render();
        });

        filterTabs.querySelectorAll('.seg-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                filterTabs.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilter = btn.dataset.filter;
                render();
            });
        });

        drawerClose.addEventListener('click', closeDrawer);
        drawerBackdrop.addEventListener('click', closeDrawer);
        cancelEditBtn.addEventListener('click', closeDrawer);
        applyEditBtn.addEventListener('click', applyForm);
        deleteProjectBtn.addEventListener('click', () => {
            const target = projects.find(p => p.id === editingId);
            if (target) askDeleteProject(target);
        });

        catAe.addEventListener('change', updateCategoryFields);
        catWeb.addEventListener('change', updateCategoryFields);

        document.querySelectorAll('.lang-tabs').forEach(tabsGroup => {
            const group = tabsGroup.dataset.group;
            tabsGroup.querySelectorAll('.lang-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    const lang = tab.dataset.lang;
                    tabsGroup.querySelectorAll('.lang-tab').forEach(t => t.classList.toggle('active', t === tab));
                    document.querySelectorAll(`.lang-input[data-group="${group}"]`).forEach(inp => {
                        inp.hidden = inp.dataset.lang !== lang;
                    });
                });
            });
        });

        dropzone.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                uploadVideoFile(e.target.files[0]);
                e.target.value = '';
            }
        });

        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('over');
        });
        dropzone.addEventListener('dragleave', () => dropzone.classList.remove('over'));
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropzone.classList.remove('over');
            if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
                uploadVideoFile(e.dataTransfer.files[0]);
            }
        });

        replaceVideoBtn.addEventListener('click', () => fileInput.click());
        removeVideoBtn.addEventListener('click', () => setVideoSource(''));
        cancelUploadBtn.addEventListener('click', () => {
            if (currentUploadXhr) currentUploadXhr.abort();
        });

        videoSrcInput.addEventListener('input', (e) => {
            setVideoSource(e.target.value.trim());
        });

        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
                e.preventDefault();
                if (drawer.classList.contains('open')) {
                    applyForm();
                } else if (isDirty()) {
                    persistProjects();
                }
            }
            if (e.key === 'Escape') {
                if (!confirmDialog.hidden) {
                    confirmDialog.hidden = true;
                } else if (drawer.classList.contains('open')) {
                    closeDrawer();
                }
            }
        });

        window.addEventListener('beforeunload', (e) => {
            if (isDirty()) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    }

    initIconGrid();
    initEvents();
    fetchProjects();
})();
