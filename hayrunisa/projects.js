// Hayrunisa Hacıismailoğlu Portfolyo - Proje Verileri

const PROJECTS_DATA = [
    {
        "id": 1,
        "title": {
            "tr": "Zootropolis — Karakter Dublajı & Seslendirme",
            "en": "Zootropolis — Character Dubbing & Voiceover"
        },
        "description": {
            "tr": "Etkili Konuşma ve Diksiyon sertifikalı seslendirme çalışması; animasyon karakter dublajı, ses temizleme ve kurgusu.",
            "en": "Character dubbing, voiceover performance, audio cleanup and editing."
        },
        "category": "ae",
        "tags": {
            "tr": ["Dublaj", "Seslendirme", "Diksiyon", "Ses Kurgusu"],
            "en": ["Dubbing", "Voiceover", "Diction", "Audio Editing"]
        },
        "link": "https://www.linkedin.com/in/hayrunisa-hac%C4%B1ismailo%C4%9Flu-3a606b3a1/",
        "instagramUrl": "https://www.linkedin.com/in/hayrunisa-hac%C4%B1ismailo%C4%9Flu-3a606b3a1/",
        "icon": "fa-microphone-lines",
        "videoSrc": "videos/zootropolis-dublaj.mp4",
        "author": "Hayrunisa Hacıismailoğlu"
    },
    {
        "id": 2,
        "title": {
            "tr": "Kuleşov Etkisi — Kurgu Kısa Filmi",
            "en": "Kuleshov Effect — Narrative Short Film"
        },
        "description": {
            "tr": "Sinema teorisindeki Kuleşov etkisini ve montaj kuramını ele alan kısa filmin senaryo, yönetmenlik ve Premiere Pro kurgusu.",
            "en": "Short film exploring the Kuleshov montage effect; scriptwriting, directing and Premiere Pro editing."
        },
        "category": "ae",
        "tags": {
            "tr": ["Kısa Film", "Kuleşov Etkisi", "Yönetmenlik", "Montaj"],
            "en": ["Short Film", "Kuleshov Effect", "Directing", "Editing"]
        },
        "link": "https://www.linkedin.com/in/hayrunisa-hac%C4%B1ismailo%C4%9Flu-3a606b3a1/",
        "instagramUrl": "https://www.linkedin.com/in/hayrunisa-hac%C4%B1ismailo%C4%9Flu-3a606b3a1/",
        "icon": "fa-clapperboard",
        "videoSrc": "videos/kulesov-kisa-film.mp4",
        "author": "Hayrunisa Hacıismailoğlu"
    },
    {
        "id": 3,
        "title": {
            "tr": "Köfteci İsmail 1928 — Bellek Belgeseli",
            "en": "Köfteci İsmail 1928 — Memory Documentary"
        },
        "description": {
            "tr": "Senaryo yazımı, proje yönetimi, çekim ve post-prodüksiyon kurgusu yürütülen bellek belgeseli.",
            "en": "Memory documentary featuring scriptwriting, project management, shooting and post-production editing."
        },
        "category": "ae",
        "tags": {
            "tr": ["Belgesel", "Premiere Pro", "Senaryo Yazımı", "Post-Prodüksiyon"],
            "en": ["Documentary", "Premiere Pro", "Scriptwriting", "Post-Production"]
        },
        "link": "https://www.linkedin.com/in/hayrunisa-hac%C4%B1ismailo%C4%9Flu-3a606b3a1/",
        "instagramUrl": "https://www.linkedin.com/in/hayrunisa-hac%C4%B1ismailo%C4%9Flu-3a606b3a1/",
        "icon": "fa-film",
        "videoSrc": "",
        "author": "Hayrunisa Hacıismailoğlu"
    },
    {
        "id": 4,
        "title": {
            "tr": "Ayaz Kauçuk (Melasty) — Firma Belgeseli",
            "en": "Ayaz Kauçuk (Melasty) — Corporate Film"
        },
        "description": {
            "tr": "Fabrika ve üretim bandında gerçekleştirilen tanıtım filmi; ışıklandırma kontrolü, kurgu ve kurumsal video prodüksiyonu.",
            "en": "Factory promo and documentary; lighting control, editing and corporate video production."
        },
        "category": "ae",
        "tags": {
            "tr": ["Tanıtım Filmi", "Işıklandırma", "Kurgu", "Prodüksiyon"],
            "en": ["Promo Film", "Lighting", "Editing", "Production"]
        },
        "link": "https://www.linkedin.com/in/hayrunisa-hac%C4%B1ismailo%C4%9Flu-3a606b3a1/",
        "instagramUrl": "https://www.linkedin.com/in/hayrunisa-hac%C4%B1ismailo%C4%9Flu-3a606b3a1/",
        "icon": "fa-video",
        "videoSrc": "",
        "author": "Hayrunisa Hacıismailoğlu"
    },
    {
        "id": 5,
        "title": {
            "tr": "Rivaİstanbul — Stüdyo Çekimleri & 5 Hesap Yönetimi",
            "en": "Rivaİstanbul — Studio Photography & Social Media"
        },
        "description": {
            "tr": "Bursa'da 5 farklı kurumsal hesabın (Instagram, TikTok, YouTube) yönetimi, ürün ve model stüdyo fotoğrafçılığı.",
            "en": "Management of 5 corporate brand accounts across Instagram, TikTok and YouTube; studio product and model photography."
        },
        "category": "web",
        "tags": {
            "tr": ["Fotoğrafçılık", "Stüdyo Çekimi", "Instagram", "Sosyal Medya"],
            "en": ["Photography", "Studio Shoot", "Instagram", "Social Media"]
        },
        "link": "https://www.instagram.com/rivaistanbulshop",
        "instagramUrl": "https://www.instagram.com/rivaistanbulshop",
        "icon": "fa-camera",
        "videoSrc": ""
    },
    {
        "id": 6,
        "title": {
            "tr": "Jungle Coffee Sakarya — Kafe İçerik & Marka Yönetimi",
            "en": "Jungle Coffee — Cafe Content & Brand Strategy"
        },
        "description": {
            "tr": "@jungle.sakarya mekan içi fotoğraf ve video çekimleri, Reels kurguları ve sosyal medya içerik yönetimi.",
            "en": "Reels editing, interior photo and video shoots, and social media content management for @jungle.sakarya."
        },
        "category": "web",
        "tags": {
            "tr": ["Mekan Çekimi", "Reels Kurgu", "İçerik Stratejisi", "Sosyal Medya"],
            "en": ["Venue Shoot", "Reels Editing", "Content Strategy", "Social Media"]
        },
        "link": "https://www.instagram.com/jungle.sakarya",
        "instagramUrl": "https://www.instagram.com/jungle.sakarya",
        "icon": "fa-store",
        "videoSrc": ""
    },
    {
        "id": 7,
        "title": {
            "tr": "Grafik & Dergi Tasarımı — InDesign & Tipografi",
            "en": "Graphic & Magazine Design — InDesign & Typography"
        },
        "description": {
            "tr": "Adobe InDesign ile dergi mizanpajı, afiş ve tipografi tasarımı, ürün tanıtım sunumu ve TÜBİTAK proje görselleştirmesi.",
            "en": "Magazine layout with Adobe InDesign, poster typography, product presentations and TÜBİTAK project visuals."
        },
        "category": "web",
        "tags": {
            "tr": ["InDesign", "Afiş Tasarımı", "Tipografi", "TÜBİTAK"],
            "en": ["InDesign", "Poster Design", "Typography", "TÜBİTAK"]
        },
        "link": "https://www.linkedin.com/in/hayrunisa-hac%C4%B1ismailo%C4%9Flu-3a606b3a1/",
        "icon": "fa-palette",
        "videoSrc": ""
    }
];

