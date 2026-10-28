# Umut Yazıcı Portfolyo - Proje Ekleme Notları

## 1. Yönetim Paneli ile Ekleme
`admin/baslat.bat` dosyasını çalıştırınca tarayıcıda yönetim paneli açılır (`http://localhost:4545/portfolyo/admin/`).

- Videoları doğrudan sayfaya sürükleyip bırakabilirsin, `videos/` klasörüne kaydedilir.
- Kartları sürükleyerek sitedeki sıralamayı değiştirebilirsin.
- Kaydettiğinde `projects.js` güncellenir ve `admin/yedekler/` içine yedek alınır.

## 2. Elle Ekleme (`projects.js`)

### Web Projesi Örneği
```javascript
{
    id: 9,
    title: {
        tr: "Proje Adı",
        en: "Project Title"
    },
    description: {
        tr: "Kısa açıklama.",
        en: "Short description."
    },
    category: "web",
    tags: {
        tr: ["PHP", "JavaScript", "MySQL"],
        en: ["PHP", "JavaScript", "MySQL"]
    },
    link: "https://ornek.com",
    icon: "fa-globe",
    videoSrc: ""
}
```

### Video / After Effects Projesi Örneği
```javascript
{
    id: 10,
    title: {
        tr: "Video Başlığı",
        en: "Video Title"
    },
    description: {
        tr: "Kısa açıklama.",
        en: "Short description."
    },
    category: "ae",
    tags: {
        tr: ["After Effects", "Motion Design"],
        en: ["After Effects", "Motion Design"]
    },
    link: "https://www.instagram.com/reel/...",
    instagramUrl: "https://www.instagram.com/drayeditss/",
    icon: "fa-film",
    videoSrc: "videos/video.mp4",
    author: "drayeditss"
}
```
