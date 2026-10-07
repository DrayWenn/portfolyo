# 🚀 Yeni Proje Ekleme Rehberi

Artık projelerinizi ve videolarınızı kodlarla uğraşmadan **Görsel Yönetim Paneli** üzerinden kolayca yönetebilirsiniz.

---

## ⚡ 1. Yönetim Panelini Başlatma (Önerilen)

1. Klasördeki **`admin/baslat.bat`** dosyasına **çift tıklayın**.
2. Tarayıcınızda otomatik olarak panel açılacaktır:
   👉 **`http://localhost:4545/portfolyo/admin/`**

### Panel Özellikleri:
- **Sürükle-Bırak Video:** Videonuzu panel ekranına sürükleyin, otomatik olarak `videos/` klasörüne yüklenir.
- **Sıralama:** Kartları tutup sürükleyerek sitenizdeki gösterim sırasını anında değiştirin.
- **Düzenleme / Silme:** Başlık, açıklama, etiketler ve ikonları kolayca düzenleyin.
- **Güvenli Kayıt:** Her kayıtta `admin/yedekler/` klasörüne otomatik yedek alınır.

---

## ✍️ 2. Kod İle Elle Proje Ekleme (`projects.js`)

## Proje Formatı (Şablonlar)

### 1. Web Projesi Eklemek İçin:
```javascript
{
    id: 9, // Diğerlerinden farklı, sıralı bir numara verin
    title: "Yeni Proje Adı",
    description: "Projenizin ne işe yaradığını açıklayan kısa bir cümle.",
    category: "web", // Sabit kalmalı
    tags: ["HTML5", "CSS3", "JavaScript"], // İsteğe bağlı etiketler
    link: "../KlasorAdi/index.html", // Projenin açılacağı göreceli yol
    icon: "fa-store", // FontAwesome ikon kodu (örn: fa-globe, fa-code, fa-laptop)
    videoSrc: "" // Web projelerinde boş bırakın
}
```

### 2. After Effects & Video Edit Projesi Eklemek İçin:
```javascript
{
    id: 10, // Diğerlerinden farklı, sıralı bir numara verin
    title: {
        tr: "Yeni Video Editi",
        en: "New Video Edit"
    },
    description: {
        tr: "Çalışmanın detaylarını veya kullanılan teknikleri yazın.",
        en: "Details and techniques used in this project."
    },
    category: "ae", // Sabit kalmalı
    tags: {
        tr: ["After Effects", "Motion Design", "proje.aep"],
        en: ["After Effects", "Motion Design", "proje.aep"]
    },
    link: "https://www.instagram.com/reel/DdCSH4psu3f/",
    instagramUrl: "https://www.instagram.com/reel/DdCSH4psu3f/", // Instagram Reel linkiniz
    icon: "fa-clapperboard", // FontAwesome ikon kodu (örn: fa-video, fa-film, fa-play, fa-music)
    videoSrc: "../After Effects Projeleri/YeniVideo.mp4", // Video dosyasının yolu
    stats: {
        likes: "18.4K",    // Yanda görünecek beğeni sayısı
        views: "142K",     // İzlenme sayısı
        comments: "420",   // Yorum sayısı
        shares: "1.8K"     // Paylaşım sayısı
    },
    author: "@umutyzc",   // Instagram kullanıcı adınız
    audio: "Orijinal Ses • Umut Yazıcı" // Çalan müzik / ses bilgisi
}
```

---

## Önemli İpuçları
* **Instagram Reels Entegrasyonu**: Video projelerine eklediğiniz `instagramUrl`, `stats` (beğeni, izlenme vb.), `author` ve `audio` bilgileri popup açıldığında **Reels telefon arayüzünde** birebir canlı olarak görüntülenir.
* **İkonlar**: İkonlar için [FontAwesome](https://fontawesome.com/search?o=r&m=free) ücretsiz kütüphanesini kullanıyoruz. İkon kodlarını `fa-store`, `fa-gears`, `fa-clapperboard`, `fa-music`, `fa-film`, `fa-video` gibi değiştirebilirsiniz.
* **Yollar (Paths)**: Projeniz portfolyo klasörünün dışında olduğu için yerel dosya yolunun başına `../` eklenmelidir.
