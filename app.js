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
      "about.bio": "Modern web standartlarına uygun, hızlı ve kullanıcı odaklı dijital deneyimler geliştiriyorum. Özel mimarili <strong>PHP ve JavaScript</strong> projelerinde <strong>Sanal POS (iyzico/PayTR)</strong> ve <strong>Kargo API</strong> entegrasyonlarını uçtan uca kurarak e-ticaret süreçlerini otomatize ettim. Aynı zamanda <strong>Adobe After Effects</strong> ile reklam ve sosyal medya kanalları için yüksek etkileşimli motion grafikler üretiyor; teknik kodlama becerilerimi estetik görsel tasarımla birleştiriyorum.",
      "about.skillCustomPhp": "PHP (Özel Mimari)",
      "about.skillSocial": "Sosyal Medya Yönetimi",
      "about.techHeading": "Teknik Yetkinlik Alanları",
      "about.card1Title": "Modern Web Geliştirme",
      "about.card1Desc": "JavaScript (ES6+), HTML5, CSS3, PHP (Özel Mimari), Temiz Kod Mimarisi, REST API, MySQL & SQLite",
      "about.card2Title": "E-Ticaret & Ödeme Sistemleri",
      "about.card2Desc": "Güvenli Sanal POS Entegrasyonları (iyzico / PayTR), Otomatik Kargo API'leri, Stok & Sipariş Yönetimi",
      "about.card3Title": "Performans & Dijital Büyüme",
      "about.card3Desc": "Google Ads (PMax & Arama Ağı), Dönüşüm Takibi, SEO Temelleri, Veri Odaklı Sosyal Medya Yönetimi",
      "about.card4Title": "Motion Graphics & Video Kurgu",
      "about.card4Desc": "Adobe After Effects, Motion Design, Dinamik Video Kurgusu, Ses Senkronizasyonu, Adobe Photoshop, UI/UX",
      "cv.heading": "Deneyim & Eğitim",
      "cv.downloadBtn": "CV Yazdır / PDF İndir",
      "cv.liveBadge": "Canlı Proje",
      "cv.item1Date": "2022 - Günümüz (4+ Yıl)",
      "cv.item1Title": "Frontend & E-Ticaret Geliştirici | Dijital İçerik Uzmanı",
      "cv.item1Org": "Freelance / Girişimci",
      "cv.item1Bullet1": "Sıfırdan kurulan e-ticaret markasının uçtan uca yazılım (Custom PHP/JS), ödeme ve kargo altyapılarının kurulumu.",
      "cv.item1Bullet2": "Adobe After Effects ile sosyal medya kanalları ve reklam kampanyaları için yüksek dönüşümlü video/animasyon içeriklerinin üretilmesi.",
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
      "projects.filterWeb": "Site Projeleri",
      "projects.filterAe": "After Effects Projeleri",
      "projects.badgeWeb": "Web Projesi",
      "projects.badgeAe": "After Effects",
      "projects.badgeVideo": "Video Edit",
      "projects.btnOpen": "Projeyi Aç",
      "projects.btnInspect": "Klasörü İncele",
      "projects.btnPlay": "Videoyu Oynat",
      "projects.empty": "Bu kategoride henüz proje bulunamadı.",
      "contact.heading": "Birlikte Çalışalım",
      "contact.subtitle": "Bir sonraki projenizi birlikte hayata geçirelim veya ekibiniz için değer yaratalım. Bir tık uzağınızdayım.",
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
      "about.bio": "I build fast, responsive, and user-centric digital experiences adhering to modern web standards. Developed end-to-end custom <strong>PHP & JavaScript</strong> platforms integrated with <strong>Virtual POS (iyzico/PayTR)</strong> and <strong>Shipping APIs</strong> to automate e-commerce operations. Concurrently produce engaging motion graphics with <strong>Adobe After Effects</strong> for ads and social media campaigns, bridging technical code with high-end visual design.",
      "about.skillCustomPhp": "PHP (Custom Architecture)",
      "about.skillSocial": "Social Media Management",
      "about.techHeading": "Core Technical Competencies",
      "about.card1Title": "Modern Web Development",
      "about.card1Desc": "JavaScript (ES6+), HTML5, CSS3, PHP (Custom Architecture), Clean Code Architecture, REST API, MySQL & SQLite",
      "about.card2Title": "E-Commerce & Payment Systems",
      "about.card2Desc": "Secure Virtual POS Integration (iyzico / PayTR), Automated Shipping APIs, Inventory & Order Management",
      "about.card3Title": "Performance & Digital Growth",
      "about.card3Desc": "Google Ads (PMax & Search), Conversion Tracking, SEO Fundamentals, Data-Driven Social Media Management",
      "about.card4Title": "Motion Graphics & Video Editing",
      "about.card4Desc": "Adobe After Effects, Motion Design, Dynamic Transitions, Audio Syncing, Adobe Photoshop, UI/UX",
      "cv.heading": "Experience & Education",
      "cv.downloadBtn": "Print CV / Download PDF",
      "cv.liveBadge": "Live Project",
      "cv.item1Date": "2022 - Present (4+ Yrs)",
      "cv.item1Title": "Frontend & E-Commerce Developer | Digital Specialist",
      "cv.item1Org": "Freelance / Entrepreneur",
      "cv.item1Bullet1": "End-to-end full-stack software (Custom PHP/JS), payment gateway, and shipping infrastructure for e-commerce brands.",
      "cv.item1Bullet2": "Produced high-converting video and animation assets using Adobe After Effects for campaigns and social media.",
      "cv.item1Bullet3": "Executed Google Ads (PMax) campaigns, optimizing ad spend to drive sales and qualified traffic.",
      "cv.item2Date": "2023 - 2024",
      "cv.item2Title": "Custom E-Commerce Platform",
      "cv.item2Bullet1": "Custom-built live e-commerce platform developed from scratch without ready CMS, using PHP & JavaScript.",
      "cv.item2Bullet2": "Secure integration of Virtual POS payment systems via API/Webhook protocols.",
      "cv.item2Bullet3": "Dynamic shopping cart, product categorization, and responsive mobile-first UI.",
      "cv.item3Date": "2021 - 2025",
      "cv.item3Title": "Social Media Manager",
      "cv.item3Bullet1": "Over 3 years of social media page management, content strategies, and client communication.",
      "cv.item3Bullet2": "Visual and motion edits created with After Effects and Photoshop to maximize engagement rates.",
      "cv.item4Date": "Ongoing",
      "cv.item4Title": "Computer Programming (Associate)",
      "cv.item4Org": "Atatürk University — Distance Education",
      "cv.item4Desc": "Undergraduate education in software development fundamentals and modern web technologies.",
      "skills.heading": "Personal Competencies",
      "skills.item1": "Analytical Thinking & Problem Solving",
      "skills.item2": "Project & Time Management",
      "skills.item3": "Rapid Adaptability & Self-Learning",
      "skills.item4": "Result-Driven Execution",
      "projects.heading": "Featured Projects",
      "projects.filterAll": "All",
      "projects.filterWeb": "Web Sites",
      "projects.filterAe": "After Effects",
      "projects.badgeWeb": "Web Project",
      "projects.badgeAe": "After Effects",
      "projects.badgeVideo": "Video Edit",
      "projects.btnOpen": "Open Project",
      "projects.btnInspect": "View Folder",
      "projects.btnPlay": "Play Video",
      "projects.empty": "No projects found in this category.",
      "contact.heading": "Let's Work Together",
      "contact.subtitle": "Let's bring your next project to life or create measurable value for your team. I'm just a click away.",
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
      ? "Umut Yazıcı | Web Developer & Motion Designer" 
      : "Umut Yazıcı | Web Geliştirici & Dijital İçerik Uzmanı";

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

      const isWeb = project.category === 'web';
      const isVideoEdit = tagsList.some(t => t.toLowerCase().includes('video') || t.toLowerCase().includes('kurgu'));
      
      let badgeText = dict["projects.badgeWeb"];
      if (!isWeb) {
        badgeText = isVideoEdit ? dict["projects.badgeVideo"] : dict["projects.badgeAe"];
      }

      const badgeClass = isWeb ? 'bg-web' : 'bg-ae';
      const glowColor = isWeb ? 'rgba(6,182,212,0.15)' : 'rgba(168,85,247,0.15)';

      let actionHtml = '';
      if (isWeb) {
        const isFolderProject = project.link && (project.link.startsWith('../') || project.link.startsWith('./'));
        const btnLabel = isFolderProject ? dict["projects.btnInspect"] : dict["projects.btnOpen"];
        const btnIcon = isFolderProject ? 'fa-folder-open' : 'fa-arrow-up-right-from-square';
        actionHtml = `
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="card-btn">
            ${btnLabel} <i class="fa-solid ${btnIcon}"></i>
          </a>
        `;
      } else {
        actionHtml = `
          <button class="card-btn play-video-btn" data-id="${project.id}" data-video-src="${project.videoSrc}" data-title="${title}">
            ${dict["projects.btnPlay"]} <i class="fa-solid fa-play"></i>
          </button>
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

  // Modal & Video Showcase
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
  const videoTime = document.getElementById('videoTime');
  const ctrlFullscreenBtn = document.getElementById('ctrlFullscreenBtn');

  const cinePrevBtn = document.getElementById('cinePrevBtn');
  const cineNextBtn = document.getElementById('cineNextBtn');
  const cineMiniPrevBtn = document.getElementById('cineMiniPrevBtn');
  const cineMiniNextBtn = document.getElementById('cineMiniNextBtn');

  let currentVideoIndex = 0;
  let videoProjectsList = [];

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

  function updateMuteUI(isMuted) {
    if (!ctrlMuteBtn) return;
    ctrlMuteBtn.innerHTML = isMuted ? '<i class="fa-solid fa-volume-xmark"></i>' : '<i class="fa-solid fa-volume-high"></i>';
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

    const igLink = project.instagramUrl || project.link || "https://www.instagram.com/drayeditss/";
    if (modalInstagramBtn) modalInstagramBtn.href = igLink;

    videoSource.src = project.videoSrc || '';
    modalVideo.load();
    modalVideo.muted = false;
    updateMuteUI(false);

    modal.classList.add('active');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    modalVideo.play().then(() => {
      updatePlayPauseUI(false);
    }).catch(() => {
      modalVideo.muted = true;
      updateMuteUI(true);
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
    ctrlMuteBtn.addEventListener('click', () => {
      modalVideo.muted = !modalVideo.muted;
      updateMuteUI(modalVideo.muted);
    });
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
    if (e.key === 'Escape') closeVideoModal();
    else if (e.key === 'ArrowRight') navigateVideo('next');
    else if (e.key === 'ArrowLeft') navigateVideo('prev');
    else if (e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    }
  });

  // Dark / Light Mode Toggle
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

  // Typewriter
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

  // 3D Laptop Scroll Reactive Engine
  const laptop3D = document.getElementById('laptop3D');
  const laptopStage = document.getElementById('laptopStageWrapper');

  if (laptop3D && laptopStage) {
    const CODE_FILES = {
      "developer.js": `<span class="c-kw">const</span> <span class="c-var">developer</span> = {
  <span class="c-prop">name</span>: <span class="c-str">'Umut Yazıcı'</span>,
  <span class="c-prop">role</span>: <span class="c-str">'Frontend & Motion Designer'</span>,
  <span class="c-prop">projects</span>: [<span class="c-str">'Yıldız Forma'</span>, <span class="c-str">'FormaArena'</span>],
  <span class="c-prop">status</span>: <span class="c-str">'Open to Work 🚀'</span>,
  <span class="c-fn">build</span>: () => <span class="c-str">'Clean Code & Smooth UI ✨'</span>
};`,
      "yildizforma.js": `<span class="c-kw">import</span> { <span class="c-var">renderStore</span> } <span class="c-kw">from</span> <span class="c-str">'./yildizforma-ui'</span>;

<span class="c-kw">export const</span> <span class="c-fn">initYildizForma</span> = (<span class="c-arg">config</span>) => {
  <span class="c-kw">const</span> <span class="c-var">store</span> = <span class="c-fn">renderStore</span>({
    <span class="c-prop">catalog</span>: <span class="c-str">'Special Jerseys'</span>,
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
