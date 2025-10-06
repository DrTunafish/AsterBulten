# 📚 Dergi Sayıları Klasörü

Bu klasör, Astronomi Dergisi'nin PDF sayılarını ve kapak görsellerini içerir.

## 📁 Klasör Yapısı

Her sayı için ayrı bir klasör oluşturun:

```
issues/
├── 2025-01/
│   ├── issue.pdf      # PDF dosyası (zorunlu)
│   └── cover.webp     # Kapak görseli (otomatik oluşturulur)
├── 2024-12/
│   ├── issue.pdf
│   └── cover.webp
└── 2024-11/
    ├── issue.pdf
    └── cover.webp
```

## ➕ Yeni Sayı Ekleme

### Adım 1: Klasör ve PDF

```bash
# Yeni klasör oluştur (YYYY-MM formatında)
mkdir -p public/issues/2025-02

# PDF'i kopyala (mutlaka "issue.pdf" adıyla)
cp /path/to/your.pdf public/issues/2025-02/issue.pdf
```

### Adım 2: Kapak Oluştur

```bash
# Thumbnail script'ini çalıştır
./scripts/generate-cover.sh public/issues/2025-02/issue.pdf public/issues/2025-02
```

Bu komut otomatik olarak `cover.webp` dosyasını oluşturacaktır.

### Adım 3: issues.json Güncelle

`src/data/issues.json` dosyasına yeni girdi ekleyin:

```json
{
  "slug": "2025-02",
  "title": "Sayı 2 - İlkbahar 2025",
  "volume": 1,
  "issue": 2,
  "date": "2025-02-15",
  "cover": "/issues/2025-02/cover.webp",
  "pdf": "/issues/2025-02/issue.pdf",
  "description": "Sayı açıklaması...",
  "editors": ["Editör İsmi"],
  "tags": ["etiket1", "etiket2"],
  "featured": false
}
```

## 🔄 Toplu İşlem

Birden fazla sayı eklerken:

```bash
# Tüm PDF'ler için thumbnail oluştur
./scripts/generate-all-covers.sh
```

## 📏 Dosya Gereksinimleri

### PDF
- **Format**: PDF/A veya standart PDF
- **Maksimum boyut**: 50MB (önerilir)
- **Sayfa boyutu**: A4 veya Letter
- **Çözünürlük**: 150-300 DPI

### Kapak Görseli (Otomatik)
- **Format**: WebP
- **Boyut**: ~1200x1800px (3:4 aspect ratio)
- **Kalite**: 85%
- **Dosya boyutu**: ~200-500KB

## ⚠️ Önemli Notlar

1. **Dosya İsimleri**: Mutlaka `issue.pdf` ve `cover.webp` kullanın
2. **Slug Format**: `YYYY-MM` (örn. `2025-01`, `2025-02`)
3. **Git LFS**: Büyük PDF dosyaları için Git LFS kullanabilirsiniz
4. **CDN**: Production'da PDF'leri CDN'e taşımayı düşünün

## 🚫 .gitignore

Eğer PDF'leri Git'e eklemek istemiyorsanız:

```gitignore
# .gitignore
public/issues/**/*.pdf
```

Bunun yerine, build sırasında external source'dan (S3, CDN) çekin.

## 📦 CDN Kullanımı (İleri Seviye)

Büyük PDF dosyaları için:

1. PDF'leri S3/CloudFront'a upload edin
2. `issues.json`'da URL'leri güncelleyin:

```json
{
  "pdf": "https://cdn.astronomi-dergisi.com/issues/2025-01.pdf",
  "cover": "https://cdn.astronomi-dergisi.com/covers/2025-01.webp"
}
```

## 📞 Yardım

Sorun yaşarsanız:
- Ana README.md'yi kontrol edin
- GitHub Issues açın
- `scripts/generate-cover.sh --help` çalıştırın

