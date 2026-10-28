document.addEventListener('DOMContentLoaded', () => {
  const TRANSLATIONS = {
    tr: {
      "nav.about": "Hakkımda & CV",
      "nav.projects": "Projeler",
      "nav.contact": "İletişim",
      "hero.statusBadge": "Yeni Projelere Açık",
      "hero.greetingPrefix": "Merhaba, Ben",
      "hero.subtitlePrefix": "Görsel hikayeler anlatıyor, ",
      "hero.subtitleSuffix": " üretiyorum.",
      "hero.ctaProjects": '<i class="fa-solid fa-layer-group"></i> Projelerimi İncele',
      "hero.ctaAbout": '<i class="fa-solid fa-user"></i> Hakkımda & CV',
      "hero.stat1Label": "Yıl Medya & Kurgu",
      "hero.stat2Label": "Tamamlanan Proje",
      "hero.stat3Label": "Ana Uzmanlık Alanı",
      "typewriter.words": [
        "belgesel & kısa filmler",
        "profesyonel video kurguları",
        "film & çizgi film dublajları",
        "yaratıcı dergi & afiş tasarımları",
        "stüdyo & etkinlik videoları"
      ],
      "about.badge": "Sakarya Üniversitesi · Yeni Medya ve İletişim Mezunu",
      "about.location": '<i class="fa-solid fa-location-dot"></i> Sakarya / İstanbul, Türkiye',
      "about.bio": "Sakarya Üniversitesi Yeni Medya ve İletişim bölümünden mezun, üretken, öğrenmeye açık ve çok yönlü bir görsel hikâye anlatıcısıyım. Belgesel, kısa film, stüdyo fotoğrafçılığı ve video kurgu alanlarında aktif çalışarak hem teknik donanımımı hem de anlatı gücümü geliştirdim. <strong>Köfteci İsmail 1928 belgeseli</strong>, <strong>Ayaz Kauçuk (Melasty) belgeseli</strong> ve <strong>Kuleşov etkisi kısa filmi</strong> gibi projelerde görev aldım. Nişan videosu çekimi/kurgusu, sosyal medya yönetimi, dergi tasarımı (InDesign), çizgi film/film dublajı ve TÜBİTAK proje hazırlığı gibi çok yönlü alanlarda profesyonel üretimler gerçekleştirdim.",
      "about.techHeading": "Temel Uzmanlık Alanları",
      "about.card1Title": "Filmmaking & Video Editing",
      "about.card1Desc": "Adobe Premiere Pro, CapCut, InShot. Köfteci İsmail 1928 belgeseli, Melasty fabrika belgeseli, Kuleşov Etkisi ve nişan videoları kurgusu.",
      "about.card2Title": "Graphic Design & Tipografi",
      "about.card2Desc": "Adobe InDesign ile dergi tasarımı, afiş ve tipografi çalışmaları, görsel kimlik, ürün tanıtım sunumu ve TÜBİTAK proje tasarımı.",
      "about.card3Title": "Videography & Fotoğrafçılık",
      "about.card3Desc": "Saha prodüksiyonu, TRT 2 set fotoğrafçılığı, Rivaİstanbul stüdyo ürün çekimleri, nişan çekimleri, ışıklandırma ve kamera açıları.",
      "about.card4Title": "Dublaj, Ses & Sosyal Medya",
      "about.card4Desc": "Karakter ve çizgi film dublajı, Etkili Konuşma & Diksiyon Sertifikası, Rivaİstanbul (5 hesap) ve Jungle Coffee marka iletişimi.",
      "cv.heading": "Deneyim & Eğitim",
      "cv.downloadBtn": "CV Yazdır / PDF İndir",
      "cv.liveBadge": "",
      "cv.item1Date": "2024 - 2025",
      "cv.item1Title": "Sosyal Medya Uzmanı & Stüdyo Fotoğrafçılığı",
      "cv.item1Org": "Rivaİstanbul (Bursa) — @rivaistanbulshop",
      "cv.item1Bullet1": "5 farklı kurumsal hesabın Instagram, TikTok ve YouTube platformlarında sosyal medya uzmanlığı, içerik stratejisi ve reklam yönetimi.",
      "cv.item1Bullet2": "Profesyonel stüdyo ortamında ürün ve model fotoğraf çekimleri, ışıklandırma kontrolü ve estetik düzenlemeler.",
      "cv.item1Bullet3": "Sosyal medya pazarlaması, çevrimiçi reklamcılık ve viral video prodüksiyonu ile yüksek takipçi ve satış dönüşümü.",
      "cv.item2Date": "2024",
      "cv.item2Title": "Video Editörü & İçerik Geliştirici",
      "cv.item2Org": "QUBBE MEDYA",
      "cv.item2Bullet1": "QUBBE MEDYA bünyesinde dinamik video kurguları, röportaj montajları ve video düzenleme süreçleri.",
      "cv.item2Bullet2": "Kamera önü sunuculuk, haber metni yazımı, içerik geliştirme ve post-prodüksiyon koordinasyonu.",
      "cv.item3Date": "2024 - 2025",
      "cv.item3Title": "Belgesel, Tanıtım & Kısa Film Projeleri",
      "cv.item3Org": "KÖFTECİ İSMAİL 1928 · Ayaz Kauçuk (Melasty) · Bağımsız Kurgu",
      "cv.item3Bullet1": "KÖFTECİ İSMAİL 1928 - Bellek Belgeseli: Proje yönetimi, senaryo yazımı, editörlük ve post-prodüksiyon video kurgusu.",
      "cv.item3Bullet2": "Ayaz Kauçuk (Melasty) Belgeseli: Fabrika tanıtım filmi çekimleri, ışıklandırma kontrolü, kurgu yazma ve video prodüksiyonu.",
      "cv.item3Bullet3": "Nişan Kısa Filmim & Kuleşov Etkisi: Senaryo yazımı, film prodüksiyonu, teorik kurgu altyapısı ve montaj yönetimi.",
      "cv.item4Date": "2024",
      "cv.item4Title": "Sosyal Medya & Video İçerik Yöneticisi",
      "cv.item4Org": "Sakarya Jungle Coffee — @jungle.sakarya",
      "cv.item4Bullet1": "@jungle.sakarya hesabının içerik stratejisinin planlanması ve sosyal medya hesap yönetimi.",
      "cv.item4Bullet2": "Mekan içi video çekimleri, dinamik Reels kurguları ve etkileşimi yüksek içerik üretimi.",
      "skills.heading": "Öne Çıkan Yetkinlikler",
      "projects.heading": "Projelerim & İşlerim",
      "projects.filterAll": "Tümü",
      "projects.filterAe": "Videolar & Prodüksiyon",
      "projects.filterWeb": "Web & Sosyal Medya",
      "projects.filterVideo": "Film & Belgesel",
      "projects.filterSocial": "Sosyal Medya & Fotoğraf",
      "projects.filterAudio": "Dublaj & Seslendirme",
      "projects.badgeWeb": "Web / Sosyal Medya",
      "projects.badgeAe": "Video",
      "projects.badgeVideo": "Prodüksiyon",
      "projects.btnOpen": "Projeyi Aç",
      "projects.btnInspect": "Klasörü İncele",
      "projects.btnPlay": "Videoyu Oynat",
      "projects.btnOpenLink": "Bağlantıyı Aç",
      "projects.empty": "Bu kategoride henüz proje bulunamadı.",
      "contact.heading": "Birlikte Üretelim",
      "contact.subtitle": "Yeni video projeleri, freelance kurgu, sosyal medya yönetimi ve seslendirme işbirlikleri için benimle iletişime geçin.",
      "contact.emailLabel": "E-Posta",
      "contact.githubLabel": "LinkedIn",
      "contact.viewProfile": "Profili İncele",
      "modal.title": "Video Ön İzleme",
      "modal.videoErrorTitle": "Video Dosyası Bulunamadı",
      "modal.videoErrorDesc": "dosyası ilgili klasörde bulunamadı.<br>Lütfen projenin doğru konumda olduğundan emin olun.",
      "footer.copyright": '&copy; 2026 Crafted by <strong>Umut Yazıcı</strong>',
      "footer.sub": "Tasarım & Geliştirme: Umut Yazıcı — Hayrunisa Hacıismailoğlu için özel olarak hazırlandı."
    },
    en: {
      "nav.about": "About & CV",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "hero.statusBadge": "Open to New Projects",
      "hero.greetingPrefix": "Hello, I'm",
      "hero.subtitlePrefix": "I tell visual stories and produce ",
      "hero.subtitleSuffix": " with creativity.",
      "hero.ctaProjects": '<i class="fa-solid fa-layer-group"></i> View Projects',
      "hero.ctaAbout": '<i class="fa-solid fa-user"></i> About & CV',
      "hero.stat1Label": "Years Media & Edit",
      "hero.stat2Label": "Completed Projects",
      "hero.stat3Label": "Core Disciplines",
      "typewriter.words": [
        "documentaries & short films",
        "professional video edits",
        "film & animation voiceovers",
        "creative magazine & poster designs",
        "studio & event cinematography"
      ],
      "about.badge": "Sakarya University · New Media & Communication Graduate",
      "about.location": '<i class="fa-solid fa-location-dot"></i> Sakarya / Istanbul, Turkey',
      "about.bio": "Graduate of Sakarya University New Media and Communication, I am a productive, curious, and versatile visual storyteller. Working across documentary, short films, studio photography, and video editing, I developed strong narrative and technical skills. Experienced in projects including the Köfteci İsmail 1928 documentary, Melasty corporate documentary, Kuleshov effect short film, engagement cinematography, InDesign magazine layouts, voiceover/dubbing and TÜBİTAK research projects.",
      "about.techHeading": "Core Areas of Expertise",
      "about.card1Title": "Filmmaking & Video Editing",
      "about.card1Desc": "Adobe Premiere Pro, CapCut, InShot. Köfteci İsmail 1928 documentary, Melasty factory film, Kuleshov Effect and engagement edits.",
      "about.card2Title": "Graphic Design & Typography",
      "about.card2Desc": "Editorial magazine layouts in InDesign, posters, typography, brand presentation decks, and TÜBİTAK creative designs.",
      "about.card3Title": "Videography & Photography",
      "about.card3Desc": "Field production, TRT 2 set photography, Rivaİstanbul studio product sessions, venue shoots, lighting and camera angles.",
      "about.card4Title": "Dubbing, Voice & Social Media",
      "about.card4Desc": "Character and cartoon dubbing, Diction Certificate, managing 5 Rivaİstanbul accounts and Jungle Coffee brand communication.",
      "cv.heading": "Experience & Education",
      "cv.downloadBtn": "Print CV / Download PDF",
      "cv.liveBadge": "",
      "cv.item1Date": "2024 - 2025",
      "cv.item1Title": "Social Media Specialist & Studio Photography",
      "cv.item1Org": "Rivaİstanbul (Bursa) — @rivaistanbulshop",
      "cv.item1Bullet1": "Management of 5 corporate brand accounts across IG, TikTok and YT; social media strategy and advertising.",
      "cv.item1Bullet2": "Professional studio product and model photography, lighting control, and aesthetic compositions.",
      "cv.item1Bullet3": "Social media marketing, online ads and viral video production driving audience growth and sales conversion.",
      "cv.item2Date": "2024",
      "cv.item2Title": "Video Editor & Content Developer",
      "cv.item2Org": "QUBBE MEDYA",
      "cv.item2Bullet1": "Dynamic video editing, interview montage, and social media video production at QUBBE MEDYA.",
      "cv.item2Bullet2": "On-camera presenting, news copy writing, content development and post-production coordination.",
      "cv.item3Date": "2024 - 2025",
      "cv.item3Title": "Documentary, Promo & Short Film Projects",
      "cv.item3Org": "KÖFTECİ İSMAİL 1928 · Ayaz Kauçuk (Melasty) · Independent",
      "cv.item3Bullet1": "KÖFTECİ İSMAİL 1928 Memory Documentary: Project management, scriptwriting, editing and post-production.",
      "cv.item3Bullet2": "Ayaz Kauçuk (Melasty) Documentary: Factory promotional filming, lighting control, script writing and video production.",
      "cv.item3Bullet3": "Engagement Film & Kuleshov Effect: Scriptwriting, cinematography, montage theory and Premiere Pro editing.",
      "cv.item4Date": "2024",
      "cv.item4Title": "Social Media & Video Content Lead",
      "cv.item4Org": "Sakarya Jungle Coffee — @jungle.sakarya",
      "cv.item4Bullet1": "Content strategy planning and social media page management for @jungle.sakarya.",
      "cv.item4Bullet2": "In-venue photo and video shooting, high-engagement creative Reels and brand identity communication.",
      "skills.heading": "Key Competencies",
      "projects.heading": "Featured Works & Portfolio",
      "projects.filterAll": "All",
      "projects.filterVideo": "Film & Documentary",
      "projects.filterSocial": "Social Media & Photos",
      "projects.filterAudio": "Dubbing & Voiceover",
      "projects.btnOpen": "Open Project",
      "projects.btnInspect": "View Folder",
      "projects.btnPlay": "Play Video",
      "projects.btnOpenLink": "Open Link",
      "projects.empty": "No projects found in this category.",
      "contact.heading": "Let's Collaborate",
      "contact.subtitle": "Get in touch for new video projects, promotional films, social media management, or voiceover collaborations.",
      "contact.emailLabel": "Email",
      "contact.githubLabel": "LinkedIn",
      "contact.viewProfile": "View Profile",
      "modal.title": "Video Preview",
      "modal.videoErrorTitle": "Video File Not Found",
      "modal.videoErrorDesc": "was not found in the project directory.<br>Please verify the file path.",
      "footer.copyright": '&copy; 2026 Crafted by <strong>Umut Yazıcı</strong>',
      "footer.sub": "Design & Development: Umut Yazıcı — Specially designed for Hayrunisa Hacıismailoğlu."
    }
  };

  let currentLang = localStorage.getItem('portfolio-lang') || 'tr';
  let currentFilter = 'all';

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.tr;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.title = lang === 'en' 
      ? "Hayrunisa Hacıismailoğlu | Filmmaker · Videographer · Editor" 
      : "Hayrunisa Hacıismailoğlu | Video Editörü · İçerik Üreticisi · Seslendirme Sanatçısı";

    if (typeof PROJECTS_DATA !== 'undefined') {
      const filtered = currentFilter === 'all' 
        ? PROJECTS_DATA 
        : PROJECTS_DATA.filter(p => p.category === currentFilter);
      renderProjects(filtered);
    }

    restartTypewriter(lang);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang !== currentLang) {
        currentLang = targetLang;
        localStorage.setItem('portfolio-lang', currentLang);
        applyTranslations(currentLang);
      }
    });
  });

  const projectsGrid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function detectPlatform(url) {
    if (!url) return {
      type: 'generic',
      name: 'Web',
      icon: 'fa-solid fa-arrow-up-right-from-square',
      label: { tr: 'Proje Bağlantısını Aç', en: 'Open Project Link' },
      profileSub: { tr: 'Bağlantıyı Aç', en: 'Open Link' }
    };
    const u = url.toLowerCase();
    if (u.includes('youtube.com/shorts') || u.includes('youtu.be') || u.includes('youtube.com')) {
      const isShorts = u.includes('/shorts');
      return {
        type: 'youtube',
        name: isShorts ? 'YouTube Shorts' : 'YouTube',
        icon: 'fa-brands fa-youtube',
        label: {
          tr: isShorts ? "YouTube Shorts'ta İzle" : "YouTube'da İzle",
          en: isShorts ? 'Watch on YouTube Shorts' : 'Watch on YouTube'
        },
        profileSub: { tr: "YouTube'da İncele", en: 'View on YouTube' }
      };
    }
    if (u.includes('tiktok.com')) {
      return {
        type: 'tiktok',
        name: 'TikTok',
        icon: 'fa-brands fa-tiktok',
        label: { tr: "TikTok'ta İzle", en: 'Watch on TikTok' },
        profileSub: { tr: "TikTok'ta İncele", en: 'View on TikTok' }
      };
    }
    if (u.includes('instagram.com')) {
      const isReel = u.includes('/reel/') || u.includes('/p/');
      return {
        type: 'instagram',
        name: 'Instagram',
        icon: 'fa-brands fa-instagram',
        label: {
          tr: isReel ? "Instagram'da Gönderiyi Aç" : "Instagram'da İzle",
          en: isReel ? 'View on Instagram' : 'Watch on Instagram'
        },
        profileSub: { tr: "Instagram'da İzle", en: 'View on Instagram' }
      };
    }
    return {
      type: 'generic',
      name: 'Web',
      icon: 'fa-solid fa-arrow-up-right-from-square',
      label: { tr: 'Proje Bağlantısını Aç', en: 'Open Project Link' },
      profileSub: { tr: 'Profili İncele', en: 'View Profile' }
    };
  }

  function renderProjects(projectsToRender) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.tr;

    if (!projectsToRender || projectsToRender.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 12px; display: block; opacity: 0.5;"></i>
          ${dict["projects.empty"]}
        </div>
      `;
      return;
    }

    projectsToRender.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-category', project.category);

      const title = typeof project.title === 'object' ? (project.title[currentLang] || project.title.tr) : project.title;
      const description = typeof project.description === 'object' ? (project.description[currentLang] || project.description.tr) : project.description;
      
      let tagsList = [];
      if (project.tags) {
        if (Array.isArray(project.tags)) {
          tagsList = project.tags;
        } else if (typeof project.tags === 'object') {
          tagsList = project.tags[currentLang] || project.tags.tr || [];
        }
      }

      const hasVideo = Boolean(project.videoSrc && project.videoSrc.trim() !== '');
      const isWeb = project.category === 'web' || !hasVideo;
      
      const isVideoEdit = tagsList.some(t => t.toLowerCase().includes('video') || t.toLowerCase().includes('kurgu') || t.toLowerCase().includes('edit') || t.toLowerCase().includes('film') || t.toLowerCase().includes('belgesel'));
      
      let badgeText = dict["projects.badgeWeb"] || 'Web / Proje';
      if (hasVideo) {
        badgeText = isVideoEdit ? (dict["projects.badgeVideo"] || 'Video / Prodüksiyon') : (dict["projects.badgeAe"] || 'Video');
      } else if (project.category === 'web') {
        badgeText = dict["projects.badgeWeb"] || 'Web / Bağlantı';
      } else {
        badgeText = 'Bağlantı';
      }

      const badgeClass = hasVideo ? 'bg-ae' : 'bg-web';
      const glowColor = hasVideo ? 'rgba(236,72,153,0.18)' : 'rgba(251,113,133,0.18)';

      const directLink = (project.link && project.link.trim() !== '') 
        ? project.link.trim() 
        : (project.instagramUrl && project.instagramUrl.trim() !== '' ? project.instagramUrl.trim() : '');

      let actionHtml = '';

      if (hasVideo) {

        let linkBtnHtml = '';
        if (directLink) {
          const platform = detectPlatform(directLink);
          linkBtnHtml = `
            <a href="${directLink}" target="_blank" rel="noopener noreferrer" class="card-btn-icon card-platform-${platform.type}" title="${platform.label[currentLang] || platform.label.tr}">
              <i class="${platform.icon}"></i>
            </a>
          `;
        }

        actionHtml = `
          <div class="card-btn-group">
            <button class="card-btn play-video-btn" data-id="${project.id}" data-video-src="${project.videoSrc}" data-title="${title}">
              ${dict["projects.btnPlay"] || 'Videoyu Oynat'} <i class="fa-solid fa-play"></i>
            </button>
            ${linkBtnHtml}
          </div>
        `;
      } else {

        const targetUrl = directLink || '#';
        const platform = detectPlatform(targetUrl);
        const isFolderProject = targetUrl.startsWith('../') || targetUrl.startsWith('./');
        const btnLabel = isFolderProject 
          ? (dict["projects.btnInspect"] || 'Klasörü İncele') 
          : (platform.type !== 'generic' ? (platform.label[currentLang] || platform.label.tr) : (dict["projects.btnOpen"] || 'Projeyi Aç'));
        const btnIcon = isFolderProject ? 'fa-folder-open' : platform.icon;

        actionHtml = `
          <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="card-btn">
            ${btnLabel} <i class="${platform.icon.startsWith('fa-brands') ? platform.icon : 'fa-solid ' + btnIcon}"></i>
          </a>
        `;
      }

      const tagsHtml = tagsList.map(tag => `<span>${tag}</span>`).join('');

      card.innerHTML = `
        <div class="card-image-wrapper">
          <div class="card-badge ${badgeClass}">${badgeText}</div>
          <div class="card-bg-glow" style="background: radial-gradient(circle, ${glowColor} 0%, transparent 70%);"></div>
          <i class="fa-solid ${project.icon} card-icon" style="color: ${isWeb ? 'var(--secondary)' : 'var(--primary)'}"></i>
        </div>
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-desc">${description}</p>
          <div class="card-tags">${tagsHtml}</div>
          <div class="card-actions">${actionHtml}</div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    attachVideoListeners();
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentFilter = button.getAttribute('data-filter');
      
      projectsGrid.style.opacity = '0';
      projectsGrid.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        const filtered = currentFilter === 'all' 
          ? PROJECTS_DATA 
          : PROJECTS_DATA.filter(p => p.category === currentFilter);
        renderProjects(filtered);
        projectsGrid.style.opacity = '1';
        projectsGrid.style.transform = 'translateY(0)';
      }, 200);
    });
  });

  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const videoSource = document.getElementById('videoSource');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalTagsBox = document.getElementById('modalTagsBox');
  const modalAuthor = document.getElementById('modalAuthor');
  const modalInstagramBtn = document.getElementById('modalInstagramBtn');
  const modalVideoCounter = document.getElementById('modalVideoCounter');
  const closeBtn = document.getElementById('closeModalBtn');
  
  const videoTapOverlay = document.getElementById('videoTapOverlay');
  const playerCenterIcon = document.getElementById('playerCenterIcon');
  const videoProgressContainer = document.getElementById('videoProgressContainer');
  const videoProgressBar = document.getElementById('videoProgressBar');
  const ctrlPlayPauseBtn = document.getElementById('ctrlPlayPauseBtn');
  const ctrlMuteBtn = document.getElementById('ctrlMuteBtn');
  const ctrlVolumeSlider = document.getElementById('ctrlVolumeSlider');
  const cineVolumeContainer = document.getElementById('cineVolumeContainer');
  const videoTime = document.getElementById('videoTime');
  const ctrlFullscreenBtn = document.getElementById('ctrlFullscreenBtn');

  const cinePrevBtn = document.getElementById('cinePrevBtn');
  const cineNextBtn = document.getElementById('cineNextBtn');
  const cineMiniPrevBtn = document.getElementById('cineMiniPrevBtn');
  const cineMiniNextBtn = document.getElementById('cineMiniNextBtn');

  let currentVideoIndex = 0;
  let videoProjectsList = [];
  let userVolume = parseFloat(localStorage.getItem('cine-volume') || '0.9');
  if (isNaN(userVolume) || userVolume < 0 || userVolume > 1) userVolume = 0.9;

  function getVideoProjects() {
    return PROJECTS_DATA.filter(p => p.videoSrc && p.videoSrc.trim() !== '');
  }

  function attachVideoListeners() {
    document.querySelectorAll('.play-video-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        videoProjectsList = getVideoProjects();
        const foundIndex = videoProjectsList.findIndex(p => p.id === id);
        currentVideoIndex = foundIndex >= 0 ? foundIndex : 0;
        openCineStudio(videoProjectsList[currentVideoIndex]);
      });
    });
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function triggerCenterIcon(iconClass) {
    if (!playerCenterIcon) return;
    playerCenterIcon.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
    playerCenterIcon.classList.add('show');
    setTimeout(() => playerCenterIcon.classList.remove('show'), 350);
  }

  function updatePlayPauseUI(isPaused) {
    if (!ctrlPlayPauseBtn) return;
    ctrlPlayPauseBtn.innerHTML = isPaused ? '<i class="fa-solid fa-play"></i>' : '<i class="fa-solid fa-pause"></i>';
  }

  function updateVolumeUI(volume, isMuted) {
    const effectiveVol = isMuted ? 0 : volume;
    if (ctrlVolumeSlider) {
      ctrlVolumeSlider.value = effectiveVol;
      const pct = Math.round(effectiveVol * 100);
      ctrlVolumeSlider.style.background = `linear-gradient(to right, #06b6d4 0%, #a855f7 ${pct}%, rgba(255, 255, 255, 0.22) ${pct}%, rgba(255, 255, 255, 0.22) 100%)`;
      ctrlVolumeSlider.title = `Ses: %${pct}`;
    }
    if (ctrlMuteBtn) {
      if (isMuted || effectiveVol === 0) {
        ctrlMuteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        ctrlMuteBtn.title = 'Sesi Aç (M)';
      } else if (effectiveVol <= 0.5) {
        ctrlMuteBtn.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
        ctrlMuteBtn.title = 'Sesi Kapat (M)';
      } else {
        ctrlMuteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        ctrlMuteBtn.title = 'Sesi Kapat (M)';
      }
    }
  }

  function updateMuteUI(isMuted) {
    const currentVol = (modalVideo && !isNaN(modalVideo.volume)) ? modalVideo.volume : userVolume;
    updateVolumeUI(currentVol, isMuted);
  }

  function setVideoVolume(newVol, showFeedback = false) {
    if (!modalVideo) return;
    const clamped = Math.max(0, Math.min(1, parseFloat(newVol)));
    if (clamped > 0) {
      userVolume = clamped;
      try { localStorage.setItem('cine-volume', clamped.toString()); } catch (_) {}
    }

    if (clamped === 0) {
      modalVideo.muted = true;
      modalVideo.volume = 0;
      updateVolumeUI(0, true);
      if (showFeedback) triggerCenterIcon('fa-volume-xmark');
    } else {
      modalVideo.muted = false;
      modalVideo.volume = clamped;
      updateVolumeUI(clamped, false);
      if (showFeedback) triggerCenterIcon(clamped > 0.5 ? 'fa-volume-high' : 'fa-volume-low');
    }
  }

  function toggleMute() {
    if (!modalVideo) return;
    if (modalVideo.muted || modalVideo.volume === 0) {
      modalVideo.muted = false;
      const restoreVol = (userVolume > 0.05) ? userVolume : 0.8;
      modalVideo.volume = restoreVol;
      updateVolumeUI(restoreVol, false);
      triggerCenterIcon(restoreVol > 0.5 ? 'fa-volume-high' : 'fa-volume-low');
    } else {
      modalVideo.muted = true;
      updateVolumeUI(modalVideo.volume, true);
      triggerCenterIcon('fa-volume-xmark');
    }
  }

  function openCineStudio(project) {
    if (!modal || !modalVideo || !videoSource || !project) return;

    videoProjectsList = getVideoProjects();
    if (videoProjectsList.length > 0) {
      const idx = videoProjectsList.findIndex(p => p.id === project.id);
      if (idx >= 0) currentVideoIndex = idx;
    }

    const title = typeof project.title === 'object' ? (project.title[currentLang] || project.title.tr) : project.title;
    const desc = typeof project.description === 'object' ? (project.description[currentLang] || project.description.tr) : (project.description || '');

    if (modalTitle) modalTitle.textContent = title || 'Video Edit';
    if (modalDescription) modalDescription.textContent = desc;

    if (modalTagsBox) {
      let tagsList = [];
      if (project.tags) {
        tagsList = Array.isArray(project.tags) ? project.tags : (project.tags[currentLang] || project.tags.tr || []);
      }
      if (tagsList.length === 0) tagsList = ["After Effects", "Motion Design", "Video Edit"];
      
      modalTagsBox.innerHTML = tagsList.map(tag => {
        const icon = tag.toLowerCase().includes('color') ? 'fa-palette' 
          : tag.toLowerCase().includes('music') || tag.toLowerCase().includes('müzik') || tag.toLowerCase().includes('ses') ? 'fa-music'
          : tag.toLowerCase().includes('edit') ? 'fa-film' : 'fa-wand-magic-sparkles';
        return `<span><i class="fa-solid ${icon}"></i> ${tag}</span>`;
      }).join('');
    }

    const authorHandle = project.author || 'drayeditss';
    if (modalAuthor) modalAuthor.textContent = '@' + authorHandle.replace(/^@+/, '');

    if (modalVideoCounter && videoProjectsList.length > 0) {
      modalVideoCounter.textContent = `Video ${currentVideoIndex + 1} / ${videoProjectsList.length}`;
    }

    const modalDirectLinkBtn = document.getElementById('modalDirectLinkBtn');
    const directLink = (project.link && project.link.trim() !== '') ? project.link.trim() : (project.instagramUrl && project.instagramUrl.trim() !== '' ? project.instagramUrl.trim() : '');

    if (modalDirectLinkBtn) {
      if (directLink) {
        const platform = detectPlatform(directLink);
        modalDirectLinkBtn.href = directLink;
        modalDirectLinkBtn.className = `studio-direct-link-btn platform-${platform.type}`;
        modalDirectLinkBtn.style.display = 'inline-flex';
        modalDirectLinkBtn.innerHTML = `<i class="${platform.icon}"></i> <span>${platform.label[currentLang] || platform.label.tr}</span>`;
      } else {
        modalDirectLinkBtn.style.display = 'none';
      }
    }

    const cleanHandle = authorHandle.replace(/^@+/, '');
    const modalPlatformIcon = document.getElementById('modalPlatformIcon');
    const modalPlatformSub = document.getElementById('modalPlatformSub');
    const platform = detectPlatform(directLink);

    if (modalPlatformIcon) {
      modalPlatformIcon.className = `${platform.icon} insta-icon`;
    }
    if (modalPlatformSub) {
      modalPlatformSub.textContent = platform.profileSub[currentLang] || platform.profileSub.tr;
    }

    if (modalInstagramBtn) {
      if (directLink && (directLink.includes('youtube.com') || directLink.includes('youtu.be') || directLink.includes('tiktok.com'))) {
        modalInstagramBtn.href = directLink;
      } else {
        modalInstagramBtn.href = project.instagramUrl || `https://www.instagram.com/${cleanHandle}/`;
      }
    }

    videoSource.src = project.videoSrc || '';
    modalVideo.load();
    modalVideo.volume = userVolume;
    modalVideo.muted = false;
    updateVolumeUI(userVolume, false);

    modal.classList.add('active');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    modalVideo.play().then(() => {
      updatePlayPauseUI(false);
    }).catch(() => {
      modalVideo.muted = true;
      updateVolumeUI(userVolume, true);
      modalVideo.play().catch(() => {});
      updatePlayPauseUI(false);
    });
  }

  function navigateVideo(direction) {
    if (!videoProjectsList || videoProjectsList.length === 0) {
      videoProjectsList = getVideoProjects();
    }
    if (videoProjectsList.length === 0) return;

    if (direction === 'next') {
      currentVideoIndex = (currentVideoIndex + 1) % videoProjectsList.length;
    } else if (direction === 'prev') {
      currentVideoIndex = (currentVideoIndex - 1 + videoProjectsList.length) % videoProjectsList.length;
    }

    openCineStudio(videoProjectsList[currentVideoIndex]);
  }

  function closeVideoModal() {
    if (!modal || !modalVideo || !videoSource) return;
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
    modalVideo.pause();
    videoSource.src = '';
    if (videoProgressBar) videoProgressBar.style.width = '0%';
    if (videoTime) videoTime.textContent = '0:00 / 0:00';
  }

  function togglePlayPause() {
    if (!modalVideo) return;
    if (modalVideo.paused) {
      modalVideo.play();
      updatePlayPauseUI(false);
      triggerCenterIcon('fa-play');
    } else {
      modalVideo.pause();
      updatePlayPauseUI(true);
      triggerCenterIcon('fa-pause');
    }
  }

  if (ctrlPlayPauseBtn) ctrlPlayPauseBtn.addEventListener('click', togglePlayPause);
  if (videoTapOverlay) videoTapOverlay.addEventListener('click', togglePlayPause);

  if (cinePrevBtn) cinePrevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateVideo('prev'); });
  if (cineNextBtn) cineNextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateVideo('next'); });
  if (cineMiniPrevBtn) cineMiniPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateVideo('prev'); });
  if (cineMiniNextBtn) cineMiniNextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateVideo('next'); });

  if (ctrlMuteBtn && modalVideo) {
    ctrlMuteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMute();
    });
  }

  if (ctrlVolumeSlider && modalVideo) {
    ctrlVolumeSlider.addEventListener('input', (e) => {
      e.stopPropagation();
      setVideoVolume(parseFloat(e.target.value), false);
    });
    ctrlVolumeSlider.addEventListener('change', (e) => {
      e.stopPropagation();
      setVideoVolume(parseFloat(e.target.value), false);
    });
    ctrlVolumeSlider.addEventListener('click', (e) => e.stopPropagation());
    ctrlVolumeSlider.addEventListener('pointerdown', (e) => e.stopPropagation());
  }

  let isScrubbing = false;

  function applyScrub(e) {
    if (!videoProgressContainer || !modalVideo || !modalVideo.duration) return;
    const rect = videoProgressContainer.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const ratio = offsetX / rect.width;
    const targetTime = ratio * modalVideo.duration;
    modalVideo.currentTime = targetTime;
    if (videoProgressBar) videoProgressBar.style.width = `${ratio * 100}%`;
    if (videoTime) videoTime.textContent = `${formatTime(targetTime)} / ${formatTime(modalVideo.duration)}`;
  }

  if (videoProgressContainer && modalVideo) {
    videoProgressContainer.addEventListener('pointerdown', (e) => {
      isScrubbing = true;
      videoProgressContainer.classList.add('scrubbing');
      try { videoProgressContainer.setPointerCapture(e.pointerId); } catch (_) {}
      applyScrub(e);
    });

    videoProgressContainer.addEventListener('pointermove', (e) => {
      if (isScrubbing) applyScrub(e);
    });

    const stopScrubbing = (e) => {
      if (isScrubbing) {
        isScrubbing = false;
        videoProgressContainer.classList.remove('scrubbing');
        try { videoProgressContainer.releasePointerCapture(e.pointerId); } catch (_) {}
      }
    };

    videoProgressContainer.addEventListener('pointerup', stopScrubbing);
    videoProgressContainer.addEventListener('pointercancel', stopScrubbing);
  }

  if (modalVideo) {
    modalVideo.addEventListener('timeupdate', () => {
      if (!isScrubbing && modalVideo.duration) {
        const percent = (modalVideo.currentTime / modalVideo.duration) * 100;
        if (videoProgressBar) videoProgressBar.style.width = `${percent}%`;
        if (videoTime) videoTime.textContent = `${formatTime(modalVideo.currentTime)} / ${formatTime(modalVideo.duration)}`;
      }
    });

    modalVideo.addEventListener('play', () => updatePlayPauseUI(false));
    modalVideo.addEventListener('pause', () => updatePlayPauseUI(true));
  }

  const playerBox = document.querySelector('.cinestudio-player-box');
  function toggleFullscreen() {
    const isFull = document.fullscreenElement || document.webkitFullscreenElement;
    const targetEl = playerBox || modalVideo;
    if (!isFull) {
      if (targetEl.requestFullscreen) {
        targetEl.requestFullscreen().catch(() => {
          if (modalVideo.requestFullscreen) modalVideo.requestFullscreen();
        });
      } else if (targetEl.webkitRequestFullscreen) {
        targetEl.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  if (ctrlFullscreenBtn) ctrlFullscreenBtn.addEventListener('click', toggleFullscreen);

  document.addEventListener('fullscreenchange', () => {
    const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement);
    if (ctrlFullscreenBtn) {
      ctrlFullscreenBtn.innerHTML = isFull ? '<i class="fa-solid fa-compress"></i>' : '<i class="fa-solid fa-expand"></i>';
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeVideoModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) closeVideoModal();
  });

  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeVideoModal();
    } else if (e.key === 'ArrowRight') {
      navigateVideo('next');
    } else if (e.key === 'ArrowLeft') {
      navigateVideo('prev');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const current = modalVideo.muted ? 0 : modalVideo.volume;
      setVideoVolume(Math.min(1, current + 0.1), true);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const current = modalVideo.muted ? 0 : modalVideo.volume;
      setVideoVolume(Math.max(0, current - 0.1), true);
    } else if (e.key.toLowerCase() === 'm') {
      e.preventDefault();
      toggleMute();
    } else if (e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    }
  });

  const modeToggle = document.getElementById('modeToggle');
  const modeIcon = document.getElementById('modeIcon');

  const savedMode = localStorage.getItem('portfolio-mode') || 'light';
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    if (modeIcon) modeIcon.className = 'fa-solid fa-moon';
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    if (modeIcon) modeIcon.className = 'fa-solid fa-sun';
  }

  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode', !isDark);
      if (modeIcon) {
        modeIcon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
      }
      localStorage.setItem('portfolio-mode', isDark ? 'dark' : 'light');
    });
  }

  const typewriterElement = document.getElementById('typewriter');
  let typewriterTimeout = null;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let activeWords = TRANSLATIONS[currentLang]["typewriter.words"];

  function type() {
    if (!typewriterElement) return;
    const currentWord = activeWords[wordIndex % activeWords.length];
    
    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typingSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1900;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % activeWords.length;
      typingSpeed = 400;
    }

    typewriterTimeout = setTimeout(type, typingSpeed);
  }

  function restartTypewriter(lang) {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    activeWords = TRANSLATIONS[lang]["typewriter.words"] || TRANSLATIONS.tr["typewriter.words"];
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    type();
  }

  const camera3D = document.getElementById('camera3D') || document.getElementById('laptop3D');
  const cameraStage = document.getElementById('cameraStageWrapper') || document.getElementById('laptopStageWrapper');
  const shutterBtn = document.getElementById('cameraShutterBtn');
  const flashFx = document.getElementById('cameraFlashFx');

  function triggerCameraShutter() {
    if (flashFx) {
      flashFx.classList.remove('flashing');
      void flashFx.offsetWidth;
      flashFx.classList.add('flashing');
      setTimeout(() => flashFx.classList.remove('flashing'), 600);
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(850, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.07);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.09);

        setTimeout(() => {
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'square';
          osc2.frequency.setValueAtTime(400, ctx.currentTime);
          osc2.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.06);
          gain2.gain.setValueAtTime(0.18, ctx.currentTime);
          gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.07);
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          osc2.start();
          osc2.stop(ctx.currentTime + 0.08);
        }, 55);
      }
    } catch (err) {

    }
  }

  if (shutterBtn) {
    shutterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerCameraShutter();
    });
  }

  if (camera3D) {
    camera3D.addEventListener('click', () => {
      triggerCameraShutter();
    });
  }

  if (camera3D && cameraStage) {
    let currentProgress = 0;
    let targetProgress = 0;
    let mouseX = 0;
    let mouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragRotX = 0;
    let dragRotY = 0;
    let targetDragRotX = 0;
    let targetDragRotY = 0;

    let currentRotY = -20;
    let currentRotX = 12;
    let currentRotZ = -3;
    let currentTransX = 0;
    let currentTransY = 0;
    let time = 0;

    const updateScrollTarget = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      targetProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    };

    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    updateScrollTarget();

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      } else {
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        targetDragRotY = deltaX * 0.35;
        targetDragRotX = -deltaY * 0.35;
      }
    }, { passive: true });

    camera3D.addEventListener('mousedown', (e) => {
      if (e.target.closest('#cameraShutterBtn')) return;
      isDragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      camera3D.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        camera3D.style.cursor = 'pointer';
        targetDragRotX = 0;
        targetDragRotY = 0;
      }
    });

    function render3DCamera() {
      time += 0.038;
      currentProgress += (targetProgress - currentProgress) * 0.075;
      currentMouseX += (mouseX - currentMouseX) * 0.06;
      currentMouseY += (mouseY - currentMouseY) * 0.06;

      dragRotX += (targetDragRotX - dragRotX) * 0.1;
      dragRotY += (targetDragRotY - dragRotY) * 0.1;

      const targetRotY = -20 + (currentProgress * 55) + (currentMouseX * 18) + dragRotY;
      const targetRotX = 12 - (currentProgress * 8) - (currentMouseY * 16) + dragRotX;
      const targetRotZ = -3 + (currentProgress * 9) + (currentMouseX * 4);

      const floatY = Math.sin(time) * 10;
      const floatX = Math.cos(time * 0.7) * 4;
      const targetTransX = (currentProgress * -35) + (currentMouseX * 18) + floatX;
      const targetTransY = floatY + (currentMouseY * 12);

      currentRotY += (targetRotY - currentRotY) * 0.085;
      currentRotX += (targetRotX - currentRotX) * 0.085;
      currentRotZ += (targetRotZ - currentRotZ) * 0.085;
      currentTransX += (targetTransX - currentTransX) * 0.085;
      currentTransY += (targetTransY - currentTransY) * 0.085;

      camera3D.style.transform = `translate3d(${currentTransX.toFixed(2)}px, ${currentTransY.toFixed(2)}px, 0px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) rotateZ(${currentRotZ.toFixed(2)}deg)`;

      requestAnimationFrame(render3DCamera);
    }

    render3DCamera();
  }

  applyTranslations(currentLang);
});
