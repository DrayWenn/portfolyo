const PROJECTS_DATA = [
    {
        "id": 12,
        "title": {
            "tr": "LyricFlow — Şarkılarla İngilizce Dikte & Dinleme Pratiği",
            "en": "LyricFlow — English Lyrics Dictation & Listening Trainer"
        },
        "description": {
            "tr": "YouTube API entegrasyonlu, milisaniyelik zaman damgalı şarkı sözü segmentasyonu, anlık harf/kelime eşleme ve interaktif dinleme pratiği sunan modern React uygulaması.",
            "en": "Modern React web app featuring YouTube API integration, millisecond timestamp segmentation, real-time lyric matching, and interactive listening dictation training."
        },
        "category": "web",
        "tags": {
            "tr": [
                "React 19",
                "Tailwind CSS",
                "YouTube API",
                "Vite",
                "Web App"
            ],
            "en": [
                "React 19",
                "Tailwind CSS",
                "YouTube API",
                "Vite",
                "Web App"
            ]
        },
        "link": "lyricflow/index.html",
        "icon": "fa-headphones",
        "image": "",
        "videoSrc": ""
    },
    {
        "id": 13,
        "title": {
            "tr": "Battle Royale (Survival Arena) — Çok Oyunculu Oyun Modu",
            "en": "Battle Royale (Survival Arena) — Multiplayer Gamemode"
        },
        "description": {
            "tr": "PUBG dinamiklerinden ilham alan, çok oyunculu özel Battle Royale oyun modu mimarisi. Haritada gerçek zamanlı daralan radyasyon/güvenli çember döngüsü, paraşütle serbest düşüş mekaniği, rastgele yer seviyesi loot dağıtım motoru, dinamik airdrop yardım sandıkları ve optimize canlı oyuncu durumu takibi.",
            "en": "Custom multiplayer Battle Royale game mode inspired by tactical survival dynamics. Features a real-time shrinking safe zone circle, parachute drop mechanics, procedural loot spawning system, dynamic supply airdrops, and live server-wide player status tracking."
        },
        "category": "web",
        "tags": {
            "tr": [
                "Lua & JS",
                "Battle Royale",
                "Oyun Modu Mimarisi",
                "Ağ & Senkronizasyon",
                "Özel Sipariş"
            ],
            "en": [
                "Lua & JS",
                "Battle Royale",
                "Game Mode Engine",
                "Netcode & Sync",
                "Commissioned"
            ]
        },
        "link": "",
        "icon": "fa-parachute-box",
        "image": "",
        "videoSrc": ""
    },
    {
        "id": 14,
        "title": {
            "tr": "Karakter Canlılık & İhtiyaç Simülasyonu — Tıbbi Durum Motoru",
            "en": "Player Vitality & Need Simulation — Medical Status Engine"
        },
        "description": {
            "tr": "RPG oyunları için geliştirilmiş çok katmanlı karakter fizyolojisi ve metabolizma yönetim motoru. Tüketilen takviye ve medikal bileşenlerin tolerans eğrisi, tokluk/ihtiyaç azalma döngüsü, metabolik kriz durumlarında dinamik kamera/görüş efektleri ve özel minimalist HUD gösterge entegrasyonu.",
            "en": "Multi-layered player physiology and metabolism management engine engineered for RPG environments. Features consumable tolerance curves, satiety decay loops, dynamic camera and visual fatigue effects, and custom minimalist HUD status integration."
        },
        "category": "web",
        "tags": {
            "tr": [
                "Lua / NUI",
                "Fizyoloji Simülasyonu",
                "HUD & UI Tasarımı",
                "Sistem Mimarisi",
                "RPG Mekaniği"
            ],
            "en": [
                "Lua / NUI",
                "Physiology Simulation",
                "HUD & UI Design",
                "System Architecture",
                "RPG Mechanics"
            ]
        },
        "link": "",
        "icon": "fa-heart-pulse",
        "image": "",
        "videoSrc": ""
    },
    {
        "id": 11,
        "title": {
            "tr": "Dinamik Balistik Stres & Mikro Geri Tepme (Recoil) Motoru",
            "en": "Dynamic Ballistic Stress & Micro-Recoil Engine"
        },
        "description": {
            "tr": "0.00 ms (sıfır gecikme) resmon optimizasyonuna sahip profesyonel silah mekaniği. Çatışma anında artan stres seviyesine göre hesaplanan yumuşak açısal sapma (pitch/yaw drift) ve el titremesi; sakinleştirici/stres engelleyici medikal ürünlerle geçici stabilizasyon süresi ve susturucu dengeleme çarpanı. Sunucuya satılmış ticari lisanslı proje.",
            "en": "Ultra-optimized zero-overhead (0.00 ms resmon) weapon ballistics engine. Delivers smooth mathematical pitch/yaw micro-recoil drift and weapon sway scaling with combat stress levels, medical stabilization timers, and suppressor balancing. Licensed & sold."
        },
        "category": "web",
        "tags": {
            "tr": [
                "Lua",
                "0.00 ms Resmon",
                "Balistik & Recoil",
                "Yüksek Performans",
                "Satıldı"
            ],
            "en": [
                "Lua",
                "0.00 ms Resmon",
                "Ballistics & Recoil",
                "High Performance",
                "Sold Out"
            ]
        },
        "link": "",
        "icon": "fa-crosshairs",
        "image": "",
        "videoSrc": ""
    },
    {
        "id": 2,
        "title": {
            "tr": "Yıldız Forma",
            "en": "Yıldız Forma"
        },
        "description": {
            "tr": "PHP ve SQLite veritabanı altyapısıyla geliştirilmiş, kupon sistemli, dinamik forma sipariş ve admin yönetim paneli.",
            "en": "Dynamic jersey ordering and admin panel built with custom PHP and SQLite, featuring a coupon system."
        },
        "category": "web",
        "tags": {
            "tr": [
                "PHP",
                "SQLite",
                "Yönetim Paneli",
                "Veritabanı"
            ],
            "en": [
                "PHP",
                "SQLite",
                "Admin Dashboard",
                "Database"
            ]
        },
        "link": "https://www.yildizforma.com",
        "icon": "fa-gears",
        "image": "",
        "videoSrc": ""
    },
    {
        "id": 10,
        "title": {
            "tr": "TimeClick — Refleks & Zaman Tahmin Oyunu",
            "en": "TimeClick — Reflex & Time Estimation Game"
        },
        "description": {
            "tr": "Görsel ipucu olmadan geçen süreyi tahmin etmeye ve hedef saniyeyi yakalamaya dayalı, çok oyunculu oda destekli web tabanlı refleks oyunu.",
            "en": "Web-based reflex and time estimation game with blind timer modes, sound engine and multiplayer room support."
        },
        "category": "web",
        "tags": {
            "tr": [
                "JavaScript",
                "Oyun Geliştirme",
                "Socket.IO",
                "CSS Animasyon"
            ],
            "en": [
                "JavaScript",
                "Game Dev",
                "Socket.IO",
                "CSS Animation"
            ]
        },
        "link": "TimeClick/index.html",
        "icon": "fa-gamepad",
        "image": "",
        "videoSrc": ""
    },
    {
        "id": 9,
        "title": {
            "tr": "Hayrunisa Hacıismailoğlu — Portfolyo Sitesi",
            "en": "Hayrunisa Hacıismailoğlu — Portfolio Website"
        },
        "description": {
            "tr": "3D interaktif fotoğraf makinesi sahnesi, özel video oynatıcı (CineStudio), çoklu dil desteği (TR/EN) ve pembe/koyu tema geçişleriyle geliştirdiğim kişisel portfolyo sitesi.",
            "en": "Custom portfolio website built with an interactive 3D camera stage, CineStudio video player, TR/EN language support, and pink/dark mode."
        },
        "category": "web",
        "tags": {
            "tr": [
                "HTML5 & CSS3",
                "JavaScript",
                "3D CSS",
                "Responsive"
            ],
            "en": [
                "HTML5 & CSS3",
                "JavaScript",
                "3D CSS",
                "Responsive"
            ]
        },
        "link": "hayrunisa/index.html",
        "icon": "fa-camera-retro",
        "image": "",
        "videoSrc": ""
    },
    {
        "id": 8,
        "title": {
            "tr": "Vikings Edit",
            "en": "Vikings Edit"
        },
        "description": {
            "tr": "Ritim, geçiş ve atmosfer odaklı After Effects video kurgusu.",
            "en": "Rhythm, transition and atmosphere focused After Effects video edit."
        },
        "category": "ae",
        "tags": {
            "tr": [
                "After Effects",
                "Motion Blur",
                "Edit"
            ],
            "en": [
                "After Effects",
                "Motion Blur",
                "Edit"
            ]
        },
        "link": "https://www.instagram.com/p/DYC_ICOphRq/",
        "icon": "fa-film",
        "image": "",
        "videoSrc": "videos/i-wish-i-wish-i-her-sey-iskandinavya-nin-kucuk-bir-koyunde-u-1.mp4",
        "instagramUrl": "https://www.instagram.com/p/DYC_ICOphRq/",
        "author": "drayeditss"
    },
    {
        "id": 3,
        "title": {
            "tr": "Dexter Edit",
            "en": "Dexter Edit"
        },
        "description": {
            "tr": "Instagram'da 200 bin izlenmeye ulaşan After Effects kurgusu.",
            "en": "After Effects edit that reached 200K views on Instagram."
        },
        "category": "ae",
        "tags": {
            "tr": [
                "After Effects",
                "Motion",
                "Edit"
            ],
            "en": [
                "After Effects",
                "Motion",
                "Edit"
            ]
        },
        "link": "https://www.instagram.com/p/DdCSH4psu3f/",
        "icon": "fa-play",
        "image": "",
        "videoSrc": "videos/gta-dexter.mp4",
        "instagramUrl": "https://www.instagram.com/drayeditss/",
        "author": "drayeditss"
    },
    {
        "id": 5,
        "title": {
            "tr": "Dexter Edit #2",
            "en": "Dexter Edit #2"
        },
        "description": {
            "tr": "Ritim ve geçiş odaklı After Effects çalışması.",
            "en": "Rhythm and transition focused After Effects edit."
        },
        "category": "ae",
        "tags": {
            "tr": [
                "After Effects",
                "Edit"
            ],
            "en": [
                "After Effects",
                "Edit"
            ]
        },
        "link": "https://www.instagram.com/p/DYXMySfsYQa/",
        "icon": "fa-film",
        "image": "",
        "videoSrc": "videos/dextersummeriscalling.mp4",
        "instagramUrl": "https://www.instagram.com/p/DYXMySfsYQa/",
        "author": "drayeditss"
    },
    {
        "id": 7,
        "title": {
            "tr": "The Mentalist Edit",
            "en": "The Mentalist Edit"
        },
        "description": {
            "tr": "Hızlı geçişler ve ses tasarımı odaklı kurgu.",
            "en": "Fast-paced transitions and sound design edit."
        },
        "category": "ae",
        "tags": {
            "tr": [
                "After Effects",
                "Motion Graphics",
                "Sound Design"
            ],
            "en": [
                "After Effects",
                "Motion Graphics",
                "Sound Design"
            ]
        },
        "link": "https://www.tiktok.com/@drayedit.vfx/video/7661980134123162900",
        "icon": "fa-film",
        "image": "",
        "videoSrc": "videos/cayelindenoteye.mp4",
        "instagramUrl": "https://www.tiktok.com/@drayedit.vfx/video/7661980134123162900",
        "author": "drayeditss"
    },
    {
        "id": 4,
        "title": {
            "tr": "Avatar Toph Edit",
            "en": "Avatar Toph Edit"
        },
        "description": {
            "tr": "After Effects ile hazırlanan karakter ve efekt kurgusu.",
            "en": "Character and motion effects edit made with After Effects."
        },
        "category": "ae",
        "tags": {
            "tr": [
                "After Effects",
                "Motion",
                "Edit"
            ],
            "en": [
                "After Effects",
                "Motion",
                "Edit"
            ]
        },
        "link": "https://www.youtube.com/shorts/--SAeIfyCZw",
        "icon": "fa-play",
        "image": "",
        "videoSrc": "videos/avatar2-1.mp4",
        "instagramUrl": "https://www.youtube.com/shorts/--SAeIfyCZw",
        "author": "drayeditss"
    },
    {
        "id": 6,
        "title": {
            "tr": "Naruto Edit",
            "en": "Naruto Edit"
        },
        "description": {
            "tr": "Ses senkronizasyonu ve sahne geçişleri çalışması.",
            "en": "Audio sync and scene transition edit."
        },
        "category": "ae",
        "tags": {
            "tr": [
                "After Effects",
                "Motion Graphics",
                "Sound Design"
            ],
            "en": [
                "After Effects",
                "Motion Graphics",
                "Sound Design"
            ]
        },
        "link": "https://www.instagram.com/p/DYR-FGLuXjJ/",
        "icon": "fa-film",
        "image": "",
        "videoSrc": "videos/korkmakalbimgeceracisibirdefamiasikoldunsenah.mp4",
        "instagramUrl": "https://www.instagram.com/p/DYR-FGLuXjJ/",
        "author": "drayeditss"
    }
];
