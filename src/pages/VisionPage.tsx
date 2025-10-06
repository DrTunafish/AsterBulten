import SEO from '@/components/SEO'
import { Eye, Sparkles, Globe, Rocket } from 'lucide-react'

/**
 * Vizyon sayfası
 */
function VisionPage() {
  return (
    <>
      <SEO
        title="Vizyonumuz"
        description="Astronomi Dergisi'nin vizyonu - Evrenin bilgisini herkese ulaştırmak"
        url="/vision"
      />

      <div className="section-spacing">
        <div className="container-custom">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cosmos-accent/20 rounded-full mb-6">
              <Eye className="w-10 h-10 text-cosmos-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-gradient">Vizyonumuz</span>
            </h1>
            <p className="text-xl text-cosmos-muted max-w-3xl mx-auto leading-relaxed">
              Evreni merak eden herkesin bilimsel bilgiye kolayca ulaşabildiği, Türkçe astronomi
              literatürünün zenginleştiği bir gelecek inşa etmek.
            </p>
          </div>

          {/* Ana Vizyon */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <div className="max-w-4xl mx-auto space-y-6 text-cosmos-muted leading-relaxed">
              <p className="text-lg">
                <span className="text-cosmos-text font-semibold">Astronomi Dergisi</span> olarak
                vizyonumuz, astronomi ve uzay bilimlerini Türkiye'nin her köşesine ulaştırmak,
                bilime olan merakı körüklemek ve yeni nesil bilim insanlarının yetişmesine katkıda
                bulunmaktır.
              </p>
              <p>
                Evrenin sonsuz genişliği ve kompleksitesi karşısında duyduğumuz hayranlık, bizi her
                gün daha fazla kişiye bu büyüleyici dünyayı tanıtmaya motive ediyor. Bilimsel
                bilginin yalnızca akademik çevrelerde kalmaması, herkesin anlayabileceği ve
                keyif alabileceği bir şekilde sunulması gerektiğine inanıyoruz.
              </p>
            </div>
          </div>

          {/* Vizyon Detayları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-8">
              <div className="w-14 h-14 bg-cosmos-accent/20 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-cosmos-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Evrensel Erişilebilirlik
              </h3>
              <p className="text-cosmos-muted leading-relaxed">
                Astronomi bilgisini herkesin anlayabileceği bir dille sunarak, bilime olan ilgiyi
                demokratikleştirmek ve yaş, eğitim veya sosyal duruma bakmaksızın herkesi evreni
                keşfe davet etmek.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-14 h-14 bg-cosmos-purple/20 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-cosmos-purple" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                İlham Kaynağı Olmak
              </h3>
              <p className="text-cosmos-muted leading-relaxed">
                Genç beyinleri bilim ve keşfe yönlendirmek, merakı beslemek ve gelecekteki
                bilim insanlarına, mühendislere ve araştırmacılara ilham vermek.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-14 h-14 bg-cosmos-accent/20 rounded-full flex items-center justify-center mb-4">
                <Rocket className="w-7 h-7 text-cosmos-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Türkçe Literatürü Güçlendirmek
              </h3>
              <p className="text-cosmos-muted leading-relaxed">
                Türkçe astronomi kaynakları oluşturarak, bilimsel bilginin anadilimizde
                zenginleşmesine katkıda bulunmak ve uluslararası bilimi yerelleştirmek.
              </p>
            </div>
          </div>

          {/* Gelecek Hedefleri */}
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              2030 Hedeflerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cosmos-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cosmos-accent font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">100.000+ Okuyucu</h4>
                  <p className="text-cosmos-muted text-sm">
                    Aylık 100.000'den fazla kişiye ulaşan, Türkiye'nin en çok okunan astronomi
                    yayını olmak
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cosmos-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cosmos-accent font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Eğitim Programları</h4>
                  <p className="text-cosmos-muted text-sm">
                    Online kurslar, atölyeler ve gözlem etkinlikleriyle aktif bir eğitim platformu
                    oluşturmak
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cosmos-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cosmos-accent font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Uluslararası İş Birlikleri</h4>
                  <p className="text-cosmos-muted text-sm">
                    Dünya çapındaki astronomi kurumlarıyla ortaklıklar kurarak global bilim
                    ağının bir parçası olmak
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cosmos-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cosmos-accent font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Dijital Arşiv</h4>
                  <p className="text-cosmos-muted text-sm">
                    Türkiye'nin en kapsamlı açık erişimli Türkçe astronomi arşivini oluşturmak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VisionPage

