document.addEventListener('DOMContentLoaded', () => {
  const TRANSLATIONS = {
    tr: {
      "nav.about": "Hakkımda & CV",
      "nav.projects": "Projeler",
      "nav.contact": "İletişim",
      "hero.statusBadge": "Yeni Projelere & İş Tekliflerine Açık",
      "hero.greetingPrefix": "Merhaba, Ben",
      "hero.subtitlePrefix": "Modern web teknolojileriyle ",
      "hero.subtitleSuffix": " tasarlıyor ve kodluyorum.",
      "hero.ctaProjects": '<i class="fa-solid fa-layer-group"></i> Projelerimi İncele',
      "hero.ctaAbout": '<i class="fa-solid fa-user"></i> Hakkımda & CV',
      "hero.stat1Label": "Yıl Deneyim",
      "hero.stat2Label": "Tamamlanan Proje",
      "hero.stat3Label": "Uzmanlık Alanı",
      "typewriter.words": [
        "hızlı ve estetik web siteleri",
        "güvenli e-ticaret sistemleri",
        "yüksek dönüşümlü motion animasyonlar",
        "özel yönetim panelleri",
        "performans odaklı dijital çözümler"
      ],
      "about.badge": "Frontend Geliştirici & Motion Designer",
      "about.location": '<i class="fa-solid fa-location-dot"></i> İstanbul, Türkiye',
      "about.bio": "Hızlı ve kullanıcı odaklı web projeleri geliştiriyorum. Özel mimarili <strong>PHP ve JavaScript</strong> projelerinde <strong>Sanal POS (iyzico/PayTR)</strong> ve <strong>Kargo API</strong> entegrasyonlarını kurarak e-ticaret süreçlerini uçtan uca yürüttüm. Aynı zamanda <strong>Adobe After Effects</strong> ile sosyal medya ve reklam içerikleri için dinamik kurgular ve motion grafikler hazırlıyorum.",
      "about.skillCustomPhp": "PHP (Özel Mimari)",
      "about.skillSocial": "Sosyal Medya Yönetimi",
      "about.techHeading": "Teknik Yetkinlik Alanları",
      "about.card1Title": "Modern Web Geliştirme",
      "about.card1Desc": "JavaScript (ES6+), HTML5, CSS3, PHP (Özel Mimari), REST API, MySQL & SQLite",
      "about.card2Title": "E-Ticaret & Ödeme Sistemleri",
      "about.card2Desc": "Sanal POS Entegrasyonları (iyzico / PayTR), Kargo API'leri, Stok & Sipariş Yönetimi",
      "about.card3Title": "Performans & Dijital Büyüme",
      "about.card3Desc": "Google Ads (PMax & Arama Ağı), Dönüşüm Takibi, SEO Temelleri, Sosyal Medya Yönetimi",
      "about.card4Title": "Motion Graphics & Video Kurgu",
      "about.card4Desc": "Adobe After Effects, Motion Design, Dinamik Video Kurgusu, Ses Senkronizasyonu, Photoshop",
      "cv.heading": "Deneyim & Eğitim",
      "cv.downloadBtn": "CV Yazdır / PDF İndir",
      "cv.liveBadge": "Canlı Proje",
      "cv.item1Date": "2022 - Günümüz (4+ Yıl)",
      "cv.item1Title": "Frontend & E-Ticaret Geliştirici | Dijital İçerik Uzmanı",
      "cv.item1Org": "Freelance / Girişimci",
      "cv.item1Bullet1": "Sıfırdan kurulan e-ticaret markasının uçtan uca yazılım (Custom PHP/JS), ödeme ve kargo altyapılarının kurulumu.",
      "cv.item1Bullet2": "Adobe After Effects ile sosyal medya kanalları ve reklam kampanyaları için video/animasyon içeriklerinin üretilmesi.",
      "cv.item1Bullet3": "Google Ads (PMax) kampanyalarının kurgulanması, reklam bütçesinin optimizasyonu ve satış trafiğinin artırılması.",
      "cv.item2Date": "2023 - 2024",
      "cv.item2Title": "Özel Altyapılı E-Ticaret Platformu",
      "cv.item2Bullet1": "Hazır CMS kullanmadan; custom PHP & JavaScript altyapısı ile sıfırdan geliştirilen canlı e-ticaret platformu.",
      "cv.item2Bullet2": "Sanal POS ödeme sistemlerinin API/Webhook mimarisiyle güvenli entegrasyonu.",
      "cv.item2Bullet3": "Dinamik sepet, ürün kategorizasyonu ve mobil uyumlu responsive arayüz kodlaması.",
      "cv.item3Date": "2021 - 2025",
      "cv.item3Title": "Sosyal Medya Yöneticisi",
      "cv.item3Bullet1": "3+ yıl boyunca Instagram sayfa yönetimi, içerik stratejisi ve müşteri ilişkileri yürütülmesi.",
      "cv.item3Bullet2": "After Effects ve Photoshop ile görsel/video kurguları yapılarak etkileşim oranlarının artırılması.",
      "cv.item4Date": "Devam Ediyor",
      "cv.item4Title": "Bilgisayar Programcılığı",
      "cv.item4Org": "Atatürk Üniversitesi — Uzaktan Eğitim",
      "cv.item4Desc": "Yazılım geliştirme ve web teknolojileri altyapısı üzerine önlisans öğrenimi.",
      "skills.heading": "Kişisel Beceriler",
      "skills.item1": "Analitik Düşünme & Problem Çözme",
      "skills.item2": "Proje & Zaman Yönetimi",
      "skills.item3": "Hızlı Adaptasyon & Kendi Kendine Öğrenme",
      "skills.item4": "Sonuç Odaklı Çalışma",
      "projects.heading": "Projelerim",
      "projects.filterAll": "Tümü",
      "projects.filterWeb": "Web / Siteler",
      "projects.filterAe": "Videolar",
      "projects.badgeWeb": "Web / Proje",
      "projects.badgeAe": "After Effects",
      "projects.badgeVideo": "Video",
      "projects.btnOpen": "Projeyi Aç",
      "projects.btnInspect": "Klasörü İncele",
      "projects.btnPlay": "Videoyu Oynat",
      "projects.btnOpenLink": "Bağlantıyı Aç",
      "projects.empty": "Bu kategoride henüz proje bulunamadı.",
      "contact.heading": "Birlikte Çalışalım",
      "contact.subtitle": "Yeni bir proje veya iş birliği için aşağıdaki bağlantılardan bana ulaşabilirsiniz.",
      "contact.emailLabel": "E-Posta",
      "contact.githubLabel": "GitHub",
      "contact.viewProfile": "Profili İncele",
      "modal.title": "Video Ön İzleme",
      "modal.videoErrorTitle": "Video Dosyası Bulunamadı",
      "modal.videoErrorDesc": "dosyası ilgili klasörde bulunamadı.<br>Lütfen projenin doğru konumda olduğundan emin olun.",
      "footer.copyright": "&copy; 2026 Umut Yazıcı. Tüm Hakları Saklıdır.",
      "footer.sub": "Web Geliştirme · Dijital İçerik · Sosyal Medya — İstanbul, Türkiye"
    },
    en: {
      "nav.about": "About & CV",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "hero.statusBadge": "Open to New Projects & Job Offers",
      "hero.greetingPrefix": "Hello, I'm",
      "hero.subtitlePrefix": "I design and code ",
      "hero.subtitleSuffix": " with modern technologies.",
      "hero.ctaProjects": '<i class="fa-solid fa-layer-group"></i> View Projects',
      "hero.ctaAbout": '<i class="fa-solid fa-user"></i> About & CV',
      "hero.stat1Label": "Years Experience",
      "hero.stat2Label": "Completed Projects",
      "hero.stat3Label": "Core Domains",
      "typewriter.words": [
        "fast and aesthetic websites",
        "secure e-commerce platforms",
        "high-converting motion animations",
        "custom admin dashboards",
        "performance-driven digital solutions"
      ],
      "about.badge": "Frontend Developer & Motion Designer",
      "about.location": '<i class="fa-solid fa-location-dot"></i> Istanbul, Turkey',
      "about.bio": "I build fast, responsive, and user-centric web projects. Developed end-to-end custom <strong>PHP & JavaScript</strong> platforms integrated with <strong>Virtual POS (iyzico/PayTR)</strong> and <strong>Shipping APIs</strong> to automate e-commerce operations. I also produce dynamic edits and motion graphics with <strong>Adobe After Effects</strong> for social media and digital campaigns.",
      "about.skillCustomPhp": "PHP (Custom Architecture)",
      "about.skillSocial": "Social Media Management",
      "about.techHeading": "Core Technical Competencies",
      "about.card1Title": "Modern Web Development",
      "about.card1Desc": "JavaScript (ES6+), HTML5, CSS3, PHP (Custom Architecture), REST API, MySQL & SQLite",
      "about.card2Title": "E-Commerce & Payment Systems",
      "about.card2Desc": "Virtual POS Integration (iyzico / PayTR), Shipping APIs, Inventory & Order Management",
      "about.card3Title": "Performance & Digital Growth",
      "about.card3Desc": "Google Ads (PMax & Search), Conversion Tracking, SEO Fundamentals, Social Media Management",
      "about.card4Title": "Motion Graphics & Video Editing",
      "about.card4Desc": "Adobe After Effects, Motion Design, Dynamic Transitions, Audio Syncing, Photoshop",
      "cv.heading": "Experience & Education",
      "cv.downloadBtn": "Print CV / Download PDF",
      "cv.liveBadge": "Live Project",
      "cv.item1Date": "2022 - Present (4+ Yrs)",
      "cv.item1Title": "Frontend & E-Commerce Developer | Digital Specialist",
      "cv.item1Org": "Freelance / Entrepreneur",
      "cv.item1Bullet1": "End-to-end software (Custom PHP/JS), payment gateway, and shipping infrastructure for e-commerce brands.",
      "cv.item1Bullet2": "Produced video and animation assets using Adobe After Effects for campaigns and social media.",
      "cv.item1Bullet3": "Executed Google Ads (PMax) campaigns, optimizing ad spend to drive sales and traffic.",
      "cv.item2Date": "2023 - 2024",
      "cv.item2Title": "Custom E-Commerce Platform",
      "cv.item2Bullet1": "Custom-built live e-commerce platform developed from scratch without ready CMS, using PHP & JavaScript.",
      "cv.item2Bullet2": "Secure integration of Virtual POS payment systems via API/Webhook protocols.",
      "cv.item2Bullet3": "Dynamic shopping cart, product categorization, and responsive mobile-first UI.",
      "cv.item3Date": "2021 - 2025",
      "cv.item3Title": "Social Media Manager",
      "cv.item3Bullet1": "Over 3 years of social media page management, content strategies, and client communication.",
      "cv.item3Bullet2": "Visual and motion edits created with After Effects and Photoshop to increase engagement rates.",
      "cv.item4Date": "Ongoing",
      "cv.item4Title": "Computer Programming (Associate)",
      "cv.item4Org": "Atatürk University — Distance Education",
      "cv.item4Desc": "Associate degree studies in software development and web technologies.",
      "skills.heading": "Personal Competencies",
      "skills.item1": "Analytical Thinking & Problem Solving",
      "skills.item2": "Project & Time Management",
      "skills.item3": "Rapid Adaptability & Self-Learning",
      "skills.item4": "Result-Driven Execution",
      "projects.heading": "Projects",
      "projects.filterAll": "All",
      "projects.filterWeb": "Web Sites",
      "projects.filterAe": "Videos",
      "projects.badgeWeb": "Web Project",
      "projects.badgeAe": "After Effects",
      "projects.badgeVideo": "Video Edit",
      "projects.btnOpen": "Open Project",
      "projects.btnInspect": "View Folder",
      "projects.btnPlay": "Play Video",
      "projects.btnOpenLink": "Open Link",
      "projects.empty": "No projects found in this category.",
      "contact.heading": "Let's Work Together",
      "contact.subtitle": "Feel free to reach out via the links below for new projects or collaborations.",
      "contact.emailLabel": "Email",
      "contact.githubLabel": "GitHub",
      "contact.viewProfile": "View Profile",
      "modal.title": "Video Preview",
      "modal.videoErrorTitle": "Video File Not Found",
      "modal.videoErrorDesc": "was not found in the project directory.<br>Please verify the file path.",
      "footer.copyright": "&copy; 2026 Umut Yazıcı. All Rights Reserved.",
      "footer.sub": "Web Development · Digital Content · Social Media — Istanbul, Turkey"
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
      ? "Umut Yazıcı | Portfolio"
      : "Umut Yazıcı | Portfolyo";

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
      const isAfterEffects = tagsList.some(t => t.toLowerCase().includes('after effects'));

      let badgeText = dict["projects.badgeWeb"] || 'Web Projesi';
      if (hasVideo) {
        badgeText = isAfterEffects ? (dict["projects.badgeAe"] || 'After Effects') : (dict["projects.badgeVideo"] || 'Video');
      } else if (project.category === 'web') {
        badgeText = dict["projects.badgeWeb"] || 'Web Projesi';
      } else {
        badgeText = 'Bağlantı';
      }

      const badgeClass = hasVideo ? 'bg-ae' : 'bg-web';
      const glowColor = hasVideo ? 'rgba(168,85,247,0.15)' : 'rgba(6,182,212,0.15)';

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
    return PROJECTS_DATA.filter(p => p.category === 'ae' || (p.videoSrc && p.videoSrc.trim() !== ''));
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

  const savedMode = localStorage.getItem('portfolio-mode');
  if (savedMode === 'light') {
    document.body.classList.add('light-mode');
    if (modeIcon) modeIcon.className = 'fa-solid fa-sun';
  }

  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');
      if (modeIcon) {
        modeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
      localStorage.setItem('portfolio-mode', isLight ? 'light' : 'dark');
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

  const laptop3D = document.getElementById('laptop3D');
  const laptopStage = document.getElementById('laptopStageWrapper');

  if (laptop3D && laptopStage) {
    const CODE_FILES = {
      "umut.js": `<span class="c-kw">const</span> <span class="c-var">umutYazici</span> = {
  <span class="c-prop">ad</span>: <span class="c-str">'Umut Yazıcı'</span>,
  <span class="c-prop">alan</span>: <span class="c-str">'Web & Motion Design'</span>,
  <span class="c-prop">projeler</span>: [<span class="c-str">'Yıldız Forma'</span>, <span class="c-str">'FormaArena'</span>],
  <span class="c-prop">konum</span>: <span class="c-str">'İstanbul'</span>,
  <span class="c-fn">stack</span>: () => [<span class="c-str">'PHP'</span>, <span class="c-str">'JS'</span>, <span class="c-str">'After Effects'</span>]
};`,
      "yildizforma.js": `<span class="c-kw">import</span> { <span class="c-var">renderStore</span> } <span class="c-kw">from</span> <span class="c-str">'./yildizforma-ui'</span>;

<span class="c-kw">export const</span> <span class="c-fn">initYildizForma</span> = (<span class="c-arg">config</span>) => {
  <span class="c-kw">const</span> <span class="c-var">store</span> = <span class="c-fn">renderStore</span>({
    <span class="c-prop">catalog</span>: <span class="c-str">'Özel Formalar'</span>,
    <span class="c-prop">coupons</span>: <span class="c-kw">true</span>,
    <span class="c-prop">responsive</span>: <span class="c-kw">true</span>
  });
  <span class="c-kw">return</span> <span class="c-var">store</span>.<span class="c-fn">launch</span>();
};`
    };

    const codeElement = document.getElementById('laptopCode');
    const editorTabs = document.querySelectorAll('.editor-tab');

    editorTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        editorTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const fileKey = tab.dataset.file;
        if (CODE_FILES[fileKey] && codeElement) {
          codeElement.innerHTML = CODE_FILES[fileKey];
        }
      });
    });

    let currentProgress = 0;
    let targetProgress = 0;
    let mouseX = 0;
    let mouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    let currentRotY = -22;
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
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    function render3DLaptop() {
      time += 0.035;
      currentProgress += (targetProgress - currentProgress) * 0.075;
      currentMouseX += (mouseX - currentMouseX) * 0.05;
      currentMouseY += (mouseY - currentMouseY) * 0.05;

      const targetRotY = -24 + (currentProgress * 58) + (currentMouseX * 7);
      const targetRotX = 13 - (currentProgress * 8) - (currentMouseY * 6);
      const targetRotZ = -4 + (currentProgress * 9) + (currentMouseX * 2);

      const floatY = Math.sin(time) * 7;
      const targetTransX = (currentProgress * -30) + (currentMouseX * 12);
      const targetTransY = floatY + (currentMouseY * 8);

      currentRotY += (targetRotY - currentRotY) * 0.08;
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotZ += (targetRotZ - currentRotZ) * 0.08;
      currentTransX += (targetTransX - currentTransX) * 0.08;
      currentTransY += (targetTransY - currentTransY) * 0.08;

      laptop3D.style.transform = `translate3d(${currentTransX.toFixed(2)}px, ${currentTransY.toFixed(2)}px, 0px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) rotateZ(${currentRotZ.toFixed(2)}deg)`;

      requestAnimationFrame(render3DLaptop);
    }

    render3DLaptop();
  }

  applyTranslations(currentLang);
});
