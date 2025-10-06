import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Starfield from './Starfield'

/**
 * Ana layout component - tüm sayfaları sarar
 * Header ve Footer'ı içerir
 * Animated starfield with parallax scrolling
 */
function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Animated parallax starfield */}
      <Starfield />

      {/* Skip to content link - erişilebilirlik için */}
      <a href="#main-content" className="skip-to-content">
        İçeriğe atla
      </a>

      <Header />

      <main id="main-content" className="flex-grow relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
