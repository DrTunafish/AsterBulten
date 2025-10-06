import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Telescope } from 'lucide-react'
import { useState } from 'react'

/**
 * Site header component - navigasyon menüsü
 */
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Vizyon', href: '/vision' },
    { name: 'Misyon', href: '/mission' },
    { name: 'İletişim', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-40 bg-cosmos-dark/90 backdrop-blur-md border-b border-cosmos-neon/20">
      <nav className="container-custom" aria-label="Ana navigasyon">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 focus-visible-ring rounded-lg px-2 py-1"
            aria-label="Astronomi Dergisi - Ana sayfa"
          >
            <Telescope className="w-8 h-8 text-cosmos-neon" aria-hidden="true" />
            <span className="text-xl md:text-2xl font-heading font-bold text-cosmos-text glow-accent-hover">
              Astronomi Dergisi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-200 focus-visible-ring ${
                  isActive(item.href)
                    ? 'text-cosmos-gold font-semibold border-b-2 border-cosmos-gold'
                    : 'text-cosmos-text hover:text-cosmos-neon'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-white/10 focus-visible-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menüyü aç"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all duration-200 focus-visible-ring ${
                    isActive(item.href)
                      ? 'text-cosmos-gold font-semibold bg-cosmos-neon/10'
                      : 'text-cosmos-text hover:text-cosmos-neon hover:bg-cosmos-card/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
