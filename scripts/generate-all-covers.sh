#!/bin/bash

###############################################################################
# Tüm Sayılar İçin Kapak Oluşturma Script'i
# 
# Bu script, public/issues/ dizinindeki tüm issue.pdf dosyaları için
# otomatik olarak cover.webp thumbnail'leri oluşturur.
#
# Kullanım: ./scripts/generate-all-covers.sh
###############################################################################

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}🔄 Tüm sayılar için kapak oluşturuluyor...${NC}"
echo ""

ISSUES_DIR="public/issues"
COVER_COUNT=0

# public/issues dizinini kontrol et
if [ ! -d "$ISSUES_DIR" ]; then
    echo -e "${YELLOW}⚠️  $ISSUES_DIR dizini bulunamadı${NC}"
    exit 0
fi

# Her issue klasörünü tara
for issue_dir in "$ISSUES_DIR"/*; do
    if [ -d "$issue_dir" ]; then
        pdf_file="$issue_dir/issue.pdf"
        cover_file="$issue_dir/cover.webp"
        
        if [ -f "$pdf_file" ]; then
            # Eğer cover zaten varsa ve PDF'den daha yeni ise, atla
            if [ -f "$cover_file" ] && [ "$cover_file" -nt "$pdf_file" ]; then
                echo -e "${GREEN}✓ Zaten güncel: $(basename $issue_dir)/cover.webp${NC}"
            else
                echo -e "${YELLOW}→ İşleniyor: $(basename $issue_dir)${NC}"
                ./scripts/generate-cover.sh "$pdf_file" "$issue_dir"
                ((COVER_COUNT++))
                echo ""
            fi
        fi
    fi
done

echo ""
echo -e "${GREEN}✅ Tamamlandı! $COVER_COUNT kapak oluşturuldu/güncellendi.${NC}"

