import { Link } from 'react-router-dom'
import { Mail, Github, Twitter, Telescope } from 'lucide-react'

/**
 * Site footer component
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-card border-t border-cosmos-neon/20 mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve açıklama */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 focus-visible-ring rounded">
              <Telescope className="w-6 h-6 text-cosmos-neon" aria-hidden="true" />
              <span className="text-lg font-heading font-bold text-cosmos-text glow-gold-hover">
                Astronomi Dergisi
              </span>
            </Link>
            <p className="text-cosmos-muted text-sm leading-relaxed max-w-md">
              Modern astronomi dergisi. Gök gözlem, astrofizik, uzay teknolojileri ve bilimsel
              makaleler ile evrenin gizemlerini keşfedin.
            </p>
          </div>

          {/* Hızlı linkler */}
          <div>
            <h3 className="font-semibold text-cosmos-text mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-cosmos-muted hover:text-cosmos-gold text-sm transition-all glow-gold-hover"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  to="/vision"
                  className="text-cosmos-muted hover:text-cosmos-gold text-sm transition-all glow-gold-hover"
                >
                  Vizyon
                </Link>
              </li>
              <li>
                <Link
                  to="/mission"
                  className="text-cosmos-muted hover:text-cosmos-gold text-sm transition-all glow-gold-hover"
                >
                  Misyon
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-cosmos-muted hover:text-cosmos-gold text-sm transition-all glow-gold-hover"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosyal medya */}
          <div>
            <h3 className="font-semibold text-cosmos-text mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:info@astronomi-dergisi.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus-visible-ring"
                aria-label="E-posta"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus-visible-ring"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus-visible-ring"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-cosmos-muted text-sm">
            © {currentYear} Astronomi Dergisi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
