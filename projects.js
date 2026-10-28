// Portfolyo Proje Verileri

const PROJECTS_DATA = [
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
        "videoSrc": "videos/i-wish-i-wish-i-her-sey-iskandinavya-nin-kucuk-bir-koyunde-u-1.mp4",
        "instagramUrl": "https://www.instagram.com/p/DYC_ICOphRq/",
        "author": "drayeditss"
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
        "videoSrc": ""
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
        "videoSrc": "videos/korkmakalbimgeceracisibirdefamiasikoldunsenah.mp4",
        "instagramUrl": "https://www.instagram.com/p/DYR-FGLuXjJ/",
        "author": "drayeditss"
    }
];
