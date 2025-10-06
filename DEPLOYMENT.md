# 🚀 Deployment Rehberi

Bu doküman, Astronomi Dergisi web sitesini farklı platformlara deploy etme adımlarını detaylı olarak açıklar.

## İçindekiler

- [Vercel (Önerilen)](#vercel-önerilen)
- [Netlify](#netlify)
- [GitHub Pages](#github-pages)
- [AWS S3 + CloudFront](#aws-s3--cloudfront)
- [Özel Sunucu (VPS)](#özel-sunucu-vps)

---

## Vercel (Önerilen)

### Avantajlar
- ✅ Otomatik HTTPS
- ✅ Global CDN
- ✅ Otomatik preview deployments
- ✅ Sıfır konfigürasyon
- ✅ Ücretsiz plan (hobby projects için yeterli)

### Adımlar

1. **Vercel Hesabı Oluşturun**
   - [vercel.com](https://vercel.com) adresine gidin
   - GitHub ile sign up edin

2. **Projeyi Import Edin**
   - "New Project" butonuna tıklayın
   - GitHub reposunu seçin
   - "Import" edin

3. **Build Ayarları** (Otomatik algılanır)
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Environment Variables Ekleyin**
   
   Settings > Environment Variables:
   ```
   VITE_SITE_URL=https://your-domain.vercel.app
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

5. **Deploy Edin**
   - "Deploy" butonuna tıklayın
   - 2-3 dakika içinde siteniz yayında!

6. **Özel Domain (Opsiyonel)**
   - Settings > Domains
   - Domain ekleyin (astronomi-dergisi.com)
   - DNS ayarlarını yapın

### GitHub Actions ile Otomatik Deploy

`.github/workflows/thumbnail-and-deploy.yml` zaten yapılandırılmış. Secrets ekleyin:

```bash
# GitHub repo > Settings > Secrets > Actions
VERCEL_TOKEN          # Vercel dashboard > Settings > Tokens
VERCEL_ORG_ID         # Vercel proje ayarlarından
VERCEL_PROJECT_ID     # Vercel proje ayarlarından
```

---

## Netlify

### Avantajlar
- ✅ Netlify Forms (built-in form handling)
- ✅ Netlify CMS entegrasyonu
- ✅ Global CDN
- ✅ Otomatik HTTPS

### Adımlar

1. **Netlify Hesabı Oluşturun**
   - [netlify.com](https://netlify.com) adresine gidin
   - GitHub ile sign up edin

2. **Site Oluşturun**
   - "New site from Git" seçin
   - GitHub reposunu bağlayın
   - Branch: `main`

3. **Build Ayarları**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Environment Variables**
   
   Site settings > Build & deploy > Environment:
   ```
   VITE_SITE_URL=https://your-site.netlify.app
   VITE_CONTACT_FORM_ENDPOINT=netlify (veya Formspree URL'i)
   ```

5. **Deploy Edin**
   - "Deploy site" butonuna tıklayın

6. **Netlify Forms (Bonus)**
   
   `ContactPage.tsx` formuna ekleyin:
   ```tsx
   <form name="contact" method="POST" data-netlify="true">
     <input type="hidden" name="form-name" value="contact" />
     {/* ... */}
   </form>
   ```

---

## GitHub Pages

### Avantajlar
- ✅ Tamamen ücretsiz
- ✅ GitHub ile entegre

### Dezavantajlar
- ❌ Manuel deploy
- ❌ Özel domain için ekstra adım

### Adımlar

1. **gh-pages Paketi Yükleyin**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **package.json Script Ekleyin**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **vite.config.ts Base URL Ekleyin**
   ```ts
   export default defineConfig({
     base: '/astronomi-dergisi/', // Repo adınız
     // ...
   })
   ```

4. **Deploy Edin**
   ```bash
   npm run deploy
   ```

5. **GitHub Settings**
   - Repo > Settings > Pages
   - Source: `gh-pages` branch
   - Save

Site: `https://username.github.io/astronomi-dergisi/`

---

## AWS S3 + CloudFront

### Avantajlar
- ✅ Tam kontrol
- ✅ Ölçeklenebilir
- ✅ Düşük maliyet (traffic'e göre)

### Adımlar

1. **S3 Bucket Oluşturun**
   ```bash
   aws s3 mb s3://astronomi-dergisi
   ```

2. **Bucket'ı Public Yapın**
   
   Bucket policy:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::astronomi-dergisi/*"
       }
     ]
   }
   ```

3. **Static Website Hosting Aktifleştirin**
   - Bucket > Properties > Static website hosting
   - Index: `index.html`
   - Error: `index.html` (SPA için)

4. **Build ve Upload**
   ```bash
   npm run build
   aws s3 sync dist/ s3://astronomi-dergisi/ --delete
   ```

5. **CloudFront Distribution Oluşturun**
   - Origin: S3 bucket
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Default Root Object: `index.html`

6. **Error Pages (SPA Routing)**
   - Error Pages > Create Custom Error Response
   - HTTP Error Code: 404
   - Response Page Path: `/index.html`
   - HTTP Response Code: 200

7. **SSL Certificate (Opsiyonel)**
   - AWS Certificate Manager'da sertifika isteyin
   - CloudFront'a bağlayın

---

## Özel Sunucu (VPS)

### Nginx + Ubuntu Örneği

1. **Sunucuya Bağlanın**
   ```bash
   ssh user@your-server.com
   ```

2. **Node.js ve Nginx Yükleyin**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs nginx
   ```

3. **Projeyi Klonlayın ve Build Edin**
   ```bash
   cd /var/www
   git clone https://github.com/username/astronomi-dergisi.git
   cd astronomi-dergisi
   npm install
   npm run build
   ```

4. **Nginx Yapılandırması**
   
   `/etc/nginx/sites-available/astronomi-dergisi`:
   ```nginx
   server {
       listen 80;
       server_name astronomi-dergisi.com www.astronomi-dergisi.com;
       root /var/www/astronomi-dergisi/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

       # Cache static assets
       location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

5. **Site'ı Aktifleştirin**
   ```bash
   sudo ln -s /etc/nginx/sites-available/astronomi-dergisi /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **SSL (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d astronomi-dergisi.com -d www.astronomi-dergisi.com
   ```

7. **Auto-Deploy Script (Opsiyonel)**
   
   `/var/www/deploy.sh`:
   ```bash
   #!/bin/bash
   cd /var/www/astronomi-dergisi
   git pull origin main
   npm install
   npm run build
   sudo systemctl reload nginx
   ```

---

## 🔧 Post-Deployment Checklist

Her deploy sonrası kontrol edin:

- [ ] Site açılıyor ve responsive çalışıyor
- [ ] PDF viewer düzgün çalışıyor
- [ ] Tüm linkler çalışıyor
- [ ] İletişim formu çalışıyor
- [ ] HTTPS aktif
- [ ] Sitemap erişilebilir (/sitemap.xml)
- [ ] robots.txt erişilebilir (/robots.txt)
- [ ] Favicon görünüyor
- [ ] Open Graph tags doğru (sosyal medyada paylaşım testi)
- [ ] Google Search Console'a sitemap gönderildi
- [ ] Analytics çalışıyor

---

## 🐛 Sorun Giderme

### "Failed to load PDF" Hatası

**Çözüm**: PDF.js worker CDN'i kontrol edin veya yerel worker kullanın.

### SPA Routing 404 Hatası

**Çözüm**: Hosting ayarlarında tüm route'ları `index.html`'e yönlendirin.

### Environment Variables Çalışmıyor

**Çözüm**: `VITE_` prefix'i ekleyin ve build'i tekrar çalıştırın.

---

## 📞 Destek

Deploy sırasında sorun yaşarsanız:
- GitHub Issues açın
- Dokümantasyonu kontrol edin
- Community'ye sorun

İyi deploylar! 🚀

