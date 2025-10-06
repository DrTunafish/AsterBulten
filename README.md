# 🌌 Astronomi Dergisi

Modern, responsive ve erişilebilir bir astronomi dergisi web sitesi. PDF tabanlı sayı yönetimi, otomatik thumbnail oluşturma ve profesyonel tasarım.

[![Deploy Status](https://img.shields.io/badge/deploy-vercel-black)](https://vercel.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://reactjs.org/)

## ✨ Özellikler

- 🎨 **Modern Astronomi Teması**: Gece/uzay estetiği, gradient'ler, glassmorphism
- 📱 **Tam Responsive**: Mobil, tablet ve desktop için optimize edilmiş
- ♿ **Erişilebilir (A11y)**: WCAG AA uyumlu, klavye navigasyonu, screen reader desteği
- 📄 **PDF Görüntüleyici**: Tarayıcı içinde gömülü PDF okuyucu (react-pdf)
- 🖼️ **Otomatik Thumbnail**: PDF'lerden otomatik kapak görseli oluşturma
- 🚀 **Yüksek Performans**: Vite build, lazy loading, optimizasyon
- 🔍 **SEO Uyumlu**: Meta tags, Open Graph, Twitter Card, sitemap, JSON-LD
- 🎯 **TypeScript**: Tip güvenliği ve modern geliştirme deneyimi
- 🎨 **Tailwind CSS**: Utility-first CSS framework
- 📦 **Kolay Deploy**: Vercel, Netlify veya S3 ile tek tıkla deploy

## 🛠️ Teknoloji Stack'i

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **PDF Viewer**: react-pdf (PDF.js)
- **SEO**: react-helmet-async
- **Icons**: Lucide React
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel / Netlify

## 📋 Gereksinimler

- Node.js 18+ ve npm
- ImageMagick (thumbnail oluşturma için) veya pdftoppm + cwebp
- Git

## 🚀 Hızlı Başlangıç

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/username/astronomi-dergisi.git
cd astronomi-dergisi
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

### 4. Production Build

```bash
npm run build
npm run preview  # Build'i önizleyin
```

## 📁 Proje Yapısı

```
astronomi-dergisi/
├── .github/
│   └── workflows/
│       └── thumbnail-and-deploy.yml  # CI/CD pipeline
├── public/
│   ├── issues/                       # Dergi sayıları
│   │   ├── 2025-01/
│   │   │   ├── issue.pdf            # PDF dosyası
│   │   │   └── cover.webp           # Otomatik oluşturulan kapak
│   │   ├── 2024-12/
│   │   └── 2024-11/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
├── scripts/
│   ├── generate-cover.sh            # Tek PDF için thumbnail
│   └── generate-all-covers.sh       # Tüm PDF'ler için thumbnail
├── src/
│   ├── components/
│   │   ├── Header.tsx               # Site başlığı ve navigasyon
│   │   ├── Footer.tsx               # Site alt bilgisi
│   │   ├── Layout.tsx               # Ana layout wrapper
│   │   ├── IssueCard.tsx            # Sayı kartı
│   │   ├── IssueGrid.tsx            # Sayı ızgarası
│   │   ├── PdfViewer.tsx            # PDF görüntüleyici
│   │   └── SEO.tsx                  # SEO meta tags
│   ├── pages/
│   │   ├── HomePage.tsx             # Anasayfa
│   │   ├── IssuePage.tsx            # Sayı detay (PDF viewer)
│   │   ├── AboutPage.tsx            # Hakkımızda
│   │   ├── VisionPage.tsx           # Vizyon
│   │   ├── MissionPage.tsx          # Misyon
│   │   ├── ContactPage.tsx          # İletişim
│   │   └── NotFoundPage.tsx         # 404
│   ├── data/
│   │   └── issues.json              # Sayı manifest dosyası
│   ├── types/
│   │   └── issue.ts                 # TypeScript tipleri
│   ├── App.tsx                      # Ana uygulama
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global stiller
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── vercel.json                      # Vercel config
├── netlify.toml                     # Netlify config
└── README.md
```

## 📄 Yeni Sayı Ekleme (Step-by-Step)

### Yöntem 1: Manuel (Basit)

#### Adım 1: PDF Dosyasını Hazırlayın

Yeni sayınızın PDF dosyasını hazırlayın (örn. `2025-02.pdf`)

#### Adım 2: Klasör Oluşturun

```bash
mkdir -p public/issues/2025-02
cp yol/2025-02.pdf public/issues/2025-02/issue.pdf
```

#### Adım 3: Thumbnail Oluşturun

```bash
chmod +x scripts/generate-cover.sh
./scripts/generate-cover.sh public/issues/2025-02/issue.pdf public/issues/2025-02
```

Bu komut `public/issues/2025-02/cover.webp` dosyasını oluşturacak.

#### Adım 4: `issues.json` Güncelleme

`src/data/issues.json` dosyasını açın ve yeni sayı bilgilerini ekleyin:

```json
{
  "slug": "2025-02",
  "title": "Sayı 2 - İlkbahar 2025",
  "volume": 1,
  "issue": 2,
  "date": "2025-02-15",
  "cover": "/issues/2025-02/cover.webp",
  "pdf": "/issues/2025-02/issue.pdf",
  "description": "Bu sayıda: Güneş tutulması, yeni exoplanet keşifleri ve daha fazlası.",
  "editors": ["Dr. Ayşe Yılmaz"],
  "tags": ["güneş tutulması", "exoplanet", "gözlem"],
  "featured": true
}
```

**Önemli**: En son sayıyı listenin **başına** ekleyin (tarih sırasına göre).

#### Adım 5: Test ve Deploy

```bash
# Lokal test
npm run dev

# Production build
npm run build

# Git'e commit & push
git add .
git commit -m "feat: Add issue 2025-02"
git push origin main
```

GitHub Actions otomatik olarak build ve deploy edecektir.

### Yöntem 2: Toplu İşlem (Birden Fazla Sayı)

Eğer birden fazla PDF ekleyecekseniz:

```bash
# Tüm PDF'ler için thumbnail oluştur
./scripts/generate-all-covers.sh

# issues.json'u güncelleyin

# Commit & push
git add .
git commit -m "feat: Add multiple issues"
git push
```

## 🔧 Thumbnail Oluşturma Detayları

### ImageMagick Kurulumu

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install imagemagick ghostscript
```

**MacOS:**
```bash
brew install imagemagick
```

**Windows:**
[ImageMagick indirin](https://imagemagick.org/script/download.php#windows)

### Alternatif: pdftoppm + cwebp

```bash
# Ubuntu/Debian
sudo apt-get install poppler-utils webp

# MacOS
brew install poppler webp
```

### Script Parametreleri

```bash
# Tek PDF için
./scripts/generate-cover.sh <PDF_PATH> <OUTPUT_DIR>

# Örnek
./scripts/generate-cover.sh public/issues/2025-01/issue.pdf public/issues/2025-01

# Tüm sayılar için
./scripts/generate-all-covers.sh
```

## 🚢 Deployment

### Vercel (Önerilen)

1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub reposunu import edin
3. Vercel otomatik olarak ayarları algılar
4. Deploy edin!

**Ortam Değişkenleri (Vercel Dashboard > Settings > Environment Variables):**

```
VITE_SITE_URL=https://astronomi-dergisi.com
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### Netlify

1. [Netlify](https://netlify.com) hesabı oluşturun
2. "New site from Git" seçin
3. Repoyu bağlayın
4. Build ayarları:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy edin!

### GitHub Pages (Manuel)

```bash
npm run build
# dist/ klasörünü GitHub Pages'e deploy edin
```

### AWS S3 + CloudFront

```bash
# S3 bucket oluşturun
aws s3 mb s3://astronomi-dergisi

# Build'i sync edin
npm run build
aws s3 sync dist/ s3://astronomi-dergisi/ --delete

# CloudFront invalidation
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## 🎨 Özelleştirme

### Renk Paleti Değiştirme

`tailwind.config.js` dosyasını düzenleyin:

```js
colors: {
  'cosmos': {
    'dark': '#071026',
    'blue': '#0f1d3d',
    'purple': '#8b5cf6',
    'accent': '#6ee7b7',  // Ana vurgu rengi
    'text': '#E6EEF3',
    'muted': '#98a8c8',
  },
}
```

### Font Değiştirme

`index.html` ve `tailwind.config.js` dosyalarını güncelleyin.

### Logo Değiştirme

`public/favicon.svg` dosyasını değiştirin ve `src/components/Header.tsx` içindeki logo bileşenini güncelleyin.

## 🔐 Güvenlik

### Content Security Policy (CSP)

`vercel.json` veya `netlify.toml` içinde CSP header'larını ekleyin:

```json
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' unpkg.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:;"
}
```

### Rate Limiting

İletişim formu için Formspree, Netlify Forms veya custom serverless function kullanın.

## 📧 İletişim Formu Entegrasyonu

### Seçenek 1: Formspree (Ücretsiz)

1. [Formspree](https://formspree.io) hesabı oluşturun
2. Yeni form oluşturun
3. Form endpoint'ini alın
4. `.env` dosyasına ekleyin:

```
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### Seçenek 2: Netlify Forms

`ContactPage.tsx` formuna `netlify` attribute ekleyin:

```tsx
<form name="contact" netlify>
  {/* ... */}
</form>
```

### Seçenek 3: Özel Serverless Function

Vercel veya Netlify functions kullanarak kendi backend'inizi yazabilirsiniz.

## 📊 Analytics Ekleme

### Google Analytics

`index.html` içine ekleyin:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Plausible (Gizlilik Odaklı)

```html
<script defer data-domain="astronomi-dergisi.com" src="https://plausible.io/js/script.js"></script>
```

## ✅ SEO Checklist

- [x] Meta description her sayfada
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Sitemap.xml
- [x] robots.txt
- [x] JSON-LD structured data
- [x] Alt text tüm görsellerde
- [x] Semantic HTML
- [x] Mobile-friendly
- [x] Fast loading (Lighthouse 90+)
- [x] HTTPS
- [ ] Google Search Console'a ekle
- [ ] Bing Webmaster Tools'a ekle

## ♿ Erişilebilirlik (A11y) Checklist

- [x] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [x] Skip to content link
- [x] Alt text tüm görsellerde
- [x] ARIA labels
- [x] Klavye navigasyonu (Tab, Enter, Space)
- [x] Focus indicators
- [x] Renk kontrastı WCAG AA
- [x] Screen reader testi
- [ ] WAVE veya axe DevTools ile test

## 🐛 Troubleshooting

### PDF Yüklenmiyor

**Sorun**: PDF.js worker hatası

**Çözüm**: `src/main.tsx` içindeki worker path'ini kontrol edin:

```tsx
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
```

### Thumbnail Oluşturmuyor

**Sorun**: ImageMagick PDF policy hatası

**Çözüm**: ImageMagick policy dosyasını düzenleyin:

```bash
sudo nano /etc/ImageMagick-6/policy.xml
# Şu satırı bulun:
# <policy domain="coder" rights="none" pattern="PDF" />
# Şuna değiştirin:
# <policy domain="coder" rights="read|write" pattern="PDF" />
```

### Build Hatası: Module not found

**Çözüm**: Path alias'larını kontrol edin:

```bash
# tsconfig.json ve vite.config.ts içinde @ alias'ı tanımlı mı?
npm run type-check
```

## 📝 Scripts

```bash
npm run dev          # Geliştirme sunucusu (port 5173)
npm run build        # Production build
npm run preview      # Build preview
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # TypeScript type checking
```

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-pdf](https://github.com/wojtekmaj/react-pdf)
- [Lucide Icons](https://lucide.dev/)
- [PDF.js](https://mozilla.github.io/pdf.js/)

## 📞 İletişim

- Website: https://astronomi-dergisi.com
- Email: info@astronomi-dergisi.com
- GitHub: [@username](https://github.com/username/astronomi-dergisi)

---

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!**


