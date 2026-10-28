// Umut Yazıcı Portfolyo - Proje Verileri

const PROJECTS_DATA = [
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
        "id": 8,
        "title": {
            "tr": "Hayrunisa Hacıismailoğlu — Portfolyo Sitesi",
            "en": "Hayrunisa Hacıismailoğlu — Portfolio Website"
        },
        "description": {
            "tr": "Video prodüksiyon, kurgu ve seslendirme çalışmalarını sergilemek için özel video oynatıcı, çoklu dil (TR/EN) ve yönetim paneli ile geliştirdiğim kişisel portfolyo web sitesi.",
            "en": "Custom personal portfolio website built with an interactive video showcase player, bilingual (TR/EN) support, and a local admin panel."
        },
        "category": "web",
        "tags": {
            "tr": [
                "HTML5 / CSS3",
                "JavaScript",
                "Node.js Panel",
                "Responsive UI"
            ],
            "en": [
                "HTML5 / CSS3",
                "JavaScript",
                "Node.js Panel",
                "Responsive UI"
            ]
        },
        "link": "hayrunisa/index.html",
        "icon": "fa-laptop-code",
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
        "link": "https://www.instagram.com/p/Davf4lIMlyD/",
        "icon": "fa-film",
        "videoSrc": "videos/cayelindenoteye.mp4",
        "instagramUrl": "https://www.instagram.com/p/Davf4lIMlyD/",
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
