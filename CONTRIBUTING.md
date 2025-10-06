# Katkıda Bulunma Rehberi

Astronomi Dergisi projesine katkıda bulunmak istediğiniz için teşekkür ederiz! 🌟

## 🚀 Başlamadan Önce

1. Projeyi fork edin
2. Yerel bilgisayarınıza klonlayın
3. Bağımlılıkları yükleyin: `npm install`
4. Geliştirme sunucusunu başlatın: `npm run dev`

## 📝 Katkı Türleri

### 🐛 Bug Raporu

GitHub Issues'da yeni bir issue açın ve şunları ekleyin:
- Hatanın açık tanımı
- Yeniden oluşturma adımları
- Beklenen davranış
- Ekran görüntüleri (varsa)
- Tarayıcı/OS bilgisi

### ✨ Özellik Önerisi

GitHub Issues'da "Feature Request" etiketi ile yeni bir issue açın:
- Özelliğin amacı ve faydası
- Kullanım senaryoları
- Mockup'lar (varsa)

### 💻 Kod Katkısı

1. İlgili issue'yu kontrol edin veya yeni bir tane açın
2. Feature branch oluşturun: `git checkout -b feature/amazing-feature`
3. Değişikliklerinizi yapın
4. Commit edin (conventional commits): `git commit -m 'feat: Add amazing feature'`
5. Push edin: `git push origin feature/amazing-feature`
6. Pull Request açın

## 📏 Kod Standartları

### TypeScript

- Strict mode kullanın
- Tüm fonksiyonlar için tip tanımlamaları yapın
- `any` tipinden kaçının

### React

- Fonksiyonel componentler kullanın (hooks)
- Props için interface tanımlayın
- Componentleri küçük ve tek sorumlu tutun

### Styling

- Tailwind utility class'larını kullanın
- Custom CSS'den kaçının
- Responsive tasarım (mobile-first)

### Git Commit Mesajları

Conventional Commits formatı kullanın:

```
feat: Yeni özellik
fix: Bug düzeltme
docs: Dokümantasyon
style: Kod formatı (işlevselliği etkilemez)
refactor: Kod iyileştirme
test: Test ekleme/düzeltme
chore: Bakım işleri
```

Örnek:
```bash
git commit -m "feat: Add dark mode toggle"
git commit -m "fix: PDF viewer scroll issue"
git commit -m "docs: Update installation guide"
```

## ✅ Pull Request Checklist

PR açmadan önce:

- [ ] Kod ESLint kontrolünden geçiyor (`npm run lint`)
- [ ] TypeScript hataları yok (`npm run type-check`)
- [ ] Build başarılı (`npm run build`)
- [ ] Değişiklikler test edildi (lokal + farklı tarayıcılar)
- [ ] Commit mesajları conventional format'ta
- [ ] README güncellenmiş (gerekiyorsa)
- [ ] Yeni özellikler için dokümantasyon eklendi

## 🎨 Tasarım Prensipleri

1. **Erişilebilirlik (A11y)**: WCAG AA standartlarına uyun
2. **Responsive**: Mobile, tablet, desktop için test edin
3. **Performans**: Lighthouse skoru 90+ olmalı
4. **SEO**: Meta tags ekleyin
5. **Consistency**: Mevcut tasarım diline uyun

## 📚 Kaynaklar

- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤔 Sorularınız mı var?

GitHub Discussions'da soru sorabilir veya mevcut tartışmalara katılabilirsiniz.

Tekrar teşekkürler! 🙏

