#!/bin/bash

###############################################################################
# PDF Kapak Thumbnail Oluşturma Script'i
# 
# Kullanım: ./scripts/generate-cover.sh <PDF_PATH> <OUTPUT_DIR>
# Örnek: ./scripts/generate-cover.sh public/issues/2025-01/issue.pdf public/issues/2025-01
#
# Gereksinimler:
# - ImageMagick (convert/magick komutu)
# - poppler-utils (pdftoppm) - alternatif yöntem için
###############################################################################

set -e  # Hata durumunda scripti durdur

# Renk kodları (terminal output için)
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Parametreleri kontrol et
if [ $# -ne 2 ]; then
    echo -e "${RED}❌ Hata: Yanlış parametre sayısı${NC}"
    echo "Kullanım: $0 <PDF_PATH> <OUTPUT_DIR>"
    echo "Örnek: $0 public/issues/2025-01/issue.pdf public/issues/2025-01"
    exit 1
fi

PDF_PATH="$1"
OUTPUT_DIR="$2"
OUTPUT_FILE="${OUTPUT_DIR}/cover.webp"

# PDF dosyasının varlığını kontrol et
if [ ! -f "$PDF_PATH" ]; then
    echo -e "${RED}❌ Hata: PDF dosyası bulunamadı: $PDF_PATH${NC}"
    exit 1
fi

# Output dizinini oluştur (yoksa)
mkdir -p "$OUTPUT_DIR"

echo -e "${YELLOW}📄 PDF: $PDF_PATH${NC}"
echo -e "${YELLOW}📁 Output: $OUTPUT_FILE${NC}"

# ImageMagick ile thumbnail oluştur (tercih edilen yöntem)
if command -v magick &> /dev/null; then
    echo -e "${GREEN}✓ ImageMagick bulundu, thumbnail oluşturuluyor...${NC}"
    
    # PDF'in ilk sayfasını yüksek çözünürlükte okuyup WebP olarak kaydet
    # -density 300: Yüksek çözünürlük (300 DPI)
    # [0]: İlk sayfa
    # -quality 85: WebP kalitesi
    # -resize 1200x1800>: Maksimum boyut (aspect ratio korunur)
    magick -density 300 "$PDF_PATH[0]" \
           -quality 85 \
           -resize 1200x1800\> \
           -strip \
           "$OUTPUT_FILE"
    
    echo -e "${GREEN}✅ Başarılı! Kapak oluşturuldu: $OUTPUT_FILE${NC}"
    
    # Dosya boyutunu göster
    FILE_SIZE=$(du -h "$OUTPUT_FILE" | cut -f1)
    echo -e "${GREEN}📦 Dosya boyutu: $FILE_SIZE${NC}"

elif command -v convert &> /dev/null; then
    echo -e "${GREEN}✓ ImageMagick (convert) bulundu, thumbnail oluşturuluyor...${NC}"
    
    convert -density 300 "$PDF_PATH[0]" \
            -quality 85 \
            -resize 1200x1800\> \
            -strip \
            "$OUTPUT_FILE"
    
    echo -e "${GREEN}✅ Başarılı! Kapak oluşturuldu: $OUTPUT_FILE${NC}"
    FILE_SIZE=$(du -h "$OUTPUT_FILE" | cut -f1)
    echo -e "${GREEN}📦 Dosya boyutu: $FILE_SIZE${NC}"

# Alternatif: pdftoppm + cwebp
elif command -v pdftoppm &> /dev/null && command -v cwebp &> /dev/null; then
    echo -e "${YELLOW}⚠️  ImageMagick bulunamadı, pdftoppm kullanılıyor...${NC}"
    
    TEMP_PNG="${OUTPUT_DIR}/temp_cover.png"
    
    # PDF'in ilk sayfasını PNG olarak çıkar
    pdftoppm -png -f 1 -l 1 -scale-to 1200 "$PDF_PATH" "${OUTPUT_DIR}/temp_cover"
    
    # Oluşan PNG'yi WebP'ye dönüştür
    if [ -f "${OUTPUT_DIR}/temp_cover-1.png" ]; then
        cwebp -q 85 "${OUTPUT_DIR}/temp_cover-1.png" -o "$OUTPUT_FILE"
        rm "${OUTPUT_DIR}/temp_cover-1.png"
        echo -e "${GREEN}✅ Başarılı! Kapak oluşturuldu: $OUTPUT_FILE${NC}"
    else
        echo -e "${RED}❌ Hata: PNG oluşturulamadı${NC}"
        exit 1
    fi

else
    echo -e "${RED}❌ Hata: ImageMagick veya pdftoppm+cwebp bulunamadı${NC}"
    echo "Lütfen aşağıdaki komutlardan birini yükleyin:"
    echo ""
    echo "Ubuntu/Debian:"
    echo "  sudo apt-get install imagemagick"
    echo "  # veya"
    echo "  sudo apt-get install poppler-utils webp"
    echo ""
    echo "MacOS:"
    echo "  brew install imagemagick"
    echo "  # veya"
    echo "  brew install poppler webp"
    echo ""
    exit 1
fi

exit 0

