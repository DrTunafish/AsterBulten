import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'
import SEO from '@/components/SEO'

/**
 * 404 - Sayfa bulunamadı
 */
function NotFoundPage() {
  return (
    <>
      <SEO title="Sayfa Bulunamadı" description="Aradığınız sayfa bulunamadı - 404" />

      <div className="section-spacing">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Animasyonu */}
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold text-gradient animate-float">404</div>
              <div className="flex justify-center space-x-2 mt-4">
                <div className="w-3 h-3 bg-cosmos-accent rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-cosmos-purple rounded-full animate-pulse delay-100" />
                <div className="w-3 h-3 bg-cosmos-accent rounded-full animate-pulse delay-200" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Kayıp Uzayda...
            </h1>

            <p className="text-lg text-cosmos-muted mb-8 leading-relaxed">
              Aradığınız sayfa evrenin derinliklerinde kaybolmuş gibi görünüyor. Belki bir kara
              deliğe düştü veya alternatif bir evrende? 🌌
            </p>

            <div className="glass-card p-6 mb-8">
              <p className="text-cosmos-muted text-sm mb-4">
                Bu durumu düzeltmek için şunları yapabilirsiniz:
              </p>
              <ul className="text-left text-sm text-cosmos-muted space-y-2 max-w-md mx-auto">
                <li>• URL'yi kontrol edin ve tekrar deneyin</li>
                <li>• Anasayfaya dönüp içeriklere göz atın</li>
                <li>• Arama yaparak aradığınızı bulabilirsiniz</li>
                <li>• Bizimle iletişime geçerek yardım isteyebilirsiniz</li>
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/" className="btn-primary flex items-center space-x-2">
                <Home className="w-5 h-5" />
                <span>Anasayfaya Dön</span>
              </Link>
              <Link to="/contact" className="btn-secondary flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Yardım İste</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage

