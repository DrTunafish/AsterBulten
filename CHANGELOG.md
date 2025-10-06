# Changelog

Astronomi Dergisi projesindeki tüm önemli değişiklikler bu dosyada dokümante edilir.

Format [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) standardına dayanır,
ve bu proje [Semantic Versioning](https://semver.org/spec/v2.0.0.html) kullanır.

## [1.0.0] - 2025-01-15

### Eklendi
- ✨ İlk production release
- 🎨 Astronomi temalı modern tasarım (gece/uzay estetiği)
- 📄 PDF görüntüleyici (react-pdf entegrasyonu)
- 🖼️ Otomatik thumbnail oluşturma (ImageMagick script'leri)
- 📱 Tam responsive tasarım (mobile-first)
- ♿ Erişilebilirlik özellikleri (WCAG AA uyumlu)
- 🔍 SEO optimizasyonları (meta tags, sitemap, JSON-LD)
- 🚀 CI/CD pipeline (GitHub Actions)
- 📚 Kapsamlı dokümantasyon (README, DEPLOYMENT, CONTRIBUTING)
- 🎯 TypeScript tip güvenliği
- 🎨 Tailwind CSS styling sistemi
- 📊 Anasayfa ile issue grid
- 📖 Hakkımızda, Vizyon, Misyon sayfaları
- 📧 İletişim formu (Formspree/Netlify Forms ready)
- 🌐 Vercel ve Netlify deployment desteği

### Komponenler
- Header (navigasyon menüsü)
- Footer (site bilgileri ve sosyal medya)
- IssueCard (sayı kartı)
- IssueGrid (sayı ızgarası)
- PdfViewer (PDF görüntüleyici)
- SEO (meta tags component)
- Layout (ana sayfa wrapper)

### Sayfalar
- HomePage (anasayfa - featured issue + grid)
- IssuePage (sayı detay - PDF viewer)
- AboutPage (hakkımızda)
- VisionPage (vizyon)
- MissionPage (misyon)
- ContactPage (iletişim formu)
- NotFoundPage (404)

### Scripts
- `generate-cover.sh` - Tek PDF için thumbnail
- `generate-all-covers.sh` - Tüm PDF'ler için thumbnail

### CI/CD
- Thumbnail otomatik oluşturma
- TypeScript type checking
- ESLint code quality
- Build ve deploy automation

## [Gelecek Sürümler]

### Planlanan Özellikler
- 🔍 Arama ve filtreleme
- 📰 RSS/Atom feed
- 🌙 Dark/Light mode toggle
- 📱 PWA (Progressive Web App) desteği
- 📧 Newsletter abonelik sistemi
- 💬 Yorum sistemi
- 🔖 Favorilere ekleme
- 📊 Analytics dashboard
- 🌐 Çoklu dil desteği (i18n)
- 🎓 Eğitim/kurs modülü
- 📅 Etkinlik takvimi
- 🎨 Admin panel (Netlify CMS)

---

## Versiyon Notasyonu

- **MAJOR** (X.0.0): Breaking changes
- **MINOR** (0.X.0): Yeni özellikler (backward compatible)
- **PATCH** (0.0.X): Bug fix'ler

## Değişiklik Kategorileri

- **Eklendi**: Yeni özellikler
- **Değiştirildi**: Mevcut özelliklerde değişiklikler
- **Kullanımdan Kaldırıldı**: Yakında kaldırılacak özellikler
- **Kaldırıldı**: Kaldırılan özellikler
- **Düzeltildi**: Bug fix'ler
- **Güvenlik**: Güvenlik güncellemeleri

