# ⚡ Hızlı Başlangıç Rehberi

5 dakikada Astronomi Dergisi'ni yerel ortamınızda çalıştırın!

## 🚀 3 Adımda Başlat

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev

# 3. Tarayıcıda aç
# http://localhost:5173
```

Tebrikler! 🎉 Site şimdi çalışıyor.

## 📝 İlk Sayınızı Ekleyin

### 1. PDF Hazırlayın

Dergi PDF'inizi hazırlayın (örn. `my-magazine.pdf`)

### 2. Klasör Oluşturun

```bash
mkdir -p public/issues/2025-01
cp path/to/my-magazine.pdf public/issues/2025-01/issue.pdf
```

### 3. Kapak Oluşturun

**ImageMagick varsa:**
```bash
chmod +x scripts/generate-cover.sh
./scripts/generate-cover.sh public/issues/2025-01/issue.pdf public/issues/2025-01
```

**ImageMagick yoksa:**
```bash
# Ubuntu/Debian
sudo apt-get install imagemagick

# MacOS
brew install imagemagick

# Windows
# https://imagemagick.org/script/download.php
```

### 4. issues.json Güncelleyin

`src/data/issues.json` dosyasını açın ve ekleyin:

```json
{
  "slug": "2025-01",
  "title": "Sayı 1 - İlk Sayı",
  "volume": 1,
  "issue": 1,
  "date": "2025-01-15",
  "cover": "/issues/2025-01/cover.webp",
  "pdf": "/issues/2025-01/issue.pdf",
  "description": "İlk sayımız...",
  "editors": ["Adınız Soyadınız"],
  "tags": ["astronomi"],
  "featured": true
}
```

### 5. Sonucu Görün

Tarayıcınızı yenileyin - yeni sayınız anasayfada görünüyor! 🎊

## 🚢 Deploy Edin (1 Dakika)

### Vercel (Önerilen)

1. [vercel.com](https://vercel.com) - GitHub ile giriş yapın
2. "New Project" → Reponuzu seçin
3. "Deploy" butonuna tıklayın
4. 2-3 dakika bekleyin → Site canlıda! 🎉

URL: `https://your-project.vercel.app`

### Netlify

1. [netlify.com](https://netlify.com) - GitHub ile giriş yapın
2. "New site from Git" → Reponuzu seçin
3. "Deploy site" → Canlıda! 🎉

## 🎨 Özelleştirin

### Renkleri Değiştirin

`tailwind.config.js`:
```js
colors: {
  'cosmos': {
    'accent': '#YOUR_COLOR',  // Ana vurgu rengi
    // ...
  }
}
```

### Logo Değiştirin

`public/favicon.svg` dosyasını değiştirin.

### Site Bilgileri

`index.html` - title ve description güncelleyin.

## 📚 Daha Fazla Bilgi

- **Detaylı dokümantasyon**: [README.md](README.md)
- **Deploy rehberi**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Katkıda bulunma**: [CONTRIBUTING.md](CONTRIBUTING.md)
- **Sorun mu var?**: GitHub Issues açın

## 🆘 Sık Karşılaşılan Sorunlar

**PDF yüklenmiyor:**
- PDF.js worker path'ini kontrol edin (`src/main.tsx`)
- Console'da hata var mı bakın

**Thumbnail oluşturmuyor:**
- ImageMagick kurulu mu kontrol edin: `magick --version`
- Script'e execute izni verdik mi: `chmod +x scripts/generate-cover.sh`

**Build hatası:**
- Node.js versiyonu 18+ mi: `node --version`
- Dependencies güncel mi: `npm install`

## 💡 İpuçları

- PDF dosyalarını Git'e eklemeyin (büyük boyut) → Git LFS veya CDN kullanın
- Her commit'te thumbnail'leri otomatik oluşturmak için GitHub Actions aktif
- `.env` dosyası oluşturup environment variables ekleyin
- Production'da PDF'leri S3/CloudFront gibi CDN'e taşıyın

## 🎓 Sonraki Adımlar

1. ✅ Gerçek PDF'lerinizi ekleyin
2. ✅ `issues.json`'u doldurun
3. ✅ Özel domain bağlayın (Vercel/Netlify dashboard)
4. ✅ Google Analytics ekleyin
5. ✅ İletişim formu aktifleştirin (Formspree)
6. ✅ SEO için Google Search Console'a ekleyin

---

**Başarılar! 🌟**

Sorular için: GitHub Issues veya info@astronomi-dergisi.com

