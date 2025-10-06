import SEO from '@/components/SEO'
import { Target, CheckCircle2 } from 'lucide-react'

/**
 * Misyon sayfası
 */
function MissionPage() {
  const missions = [
    {
      title: 'Kaliteli Bilimsel İçerik',
      description:
        'Her sayımızda, hakemli ve bilimsel standartlara uygun makaleler yayınlayarak, okuyucularımıza güncel ve doğru bilgi sunmak.',
    },
    {
      title: 'Anlaşılır Dil',
      description:
        'Karmaşık astronomi kavramlarını sade ve anlaşılır bir dille açıklayarak, bilimi herkes için erişilebilir kılmak.',
    },
    {
      title: 'Pratik Gözlem Rehberleri',
      description:
        'Amatör gözlemcilere yönelik detaylı kılavuzlar, gökyüzü haritaları ve gözlem önerileri sunarak, pratik astronomi aktivitelerini desteklemek.',
    },
    {
      title: 'Eğitim ve Farkındalık',
      description:
        'Okullar, üniversiteler ve bilim merkezleriyle iş birliği yaparak, astronomi eğitimine katkıda bulunmak ve bilim farkındalığını artırmak.',
    },
    {
      title: 'Topluluk Oluşturma',
      description:
        'Astronomi meraklılarını bir araya getirerek, bilgi paylaşımı ve iş birliğini teşvik eden bir topluluk oluşturmak.',
    },
    {
      title: 'Modern Teknoloji Kullanımı',
      description:
        'Web teknolojileri, mobil uyumluluk ve erişilebilirlik standartlarını kullanarak, içeriklerimizi her platformda en iyi şekilde sunmak.',
    },
  ]

  return (
    <>
      <SEO
        title="Misyonumuz"
        description="Astronomi Dergisi'nin misyonu - Kaliteli bilimi herkese ulaştırmak"
        url="/mission"
      />

      <div className="section-spacing">
        <div className="container-custom">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cosmos-purple/20 rounded-full mb-6">
              <Target className="w-10 h-10 text-cosmos-purple" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-gradient">Misyonumuz</span>
            </h1>
            <p className="text-xl text-cosmos-muted max-w-3xl mx-auto leading-relaxed">
              Bilimsel doğruluktan ödün vermeden, astronomiyi herkese ulaştırmak ve evrenin
              büyüleyici dünyasını keşfetmeye davet etmek.
            </p>
          </div>

          {/* Ana Misyon Açıklaması */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <div className="max-w-4xl mx-auto space-y-6 text-cosmos-muted leading-relaxed">
              <p className="text-lg text-cosmos-text font-semibold">
                Astronomi Dergisi'nin temel misyonu, astronomi ve uzay bilimlerini Türkiye'de
                yaygınlaştırmak, bilimsel merakı körüklemek ve evrenin sırlarını merak eden herkese
                kaliteli içerik sunmaktır.
              </p>
              <p>
                Bunu yaparken, bilimsel doğruluktan asla ödün vermeden, içeriklerimizi herkesin
                anlayabileceği bir dil ve format ile sunuyoruz. Hem deneyimli gözlemciler hem de
                astronomiyle yeni tanışanlar için değerli içerikler üretiyoruz.
              </p>
              <p>
                Her sayımız, titizlikle seçilmiş konular, özgün makaleler, gözlem rehberleri ve
                görsel içeriklerle zenginleştirilmiştir. Amacımız, okuyucularımızın hem teorik
                bilgilerini artırmak hem de pratik gözlem becerilerini geliştirmelerine yardımcı
                olmaktır.
              </p>
            </div>
          </div>

          {/* Misyon Maddeleri */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Temel İlkelerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {missions.map((mission, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-cosmos-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">{mission.title}</h3>
                      <p className="text-cosmos-muted leading-relaxed">{mission.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Taahhütlerimiz */}
          <div className="glass-card p-8 md:p-12 bg-gradient-to-br from-cosmos-purple/10 to-cosmos-accent/10 border-cosmos-accent/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-6 text-center">
                Okuyucularımıza Taahhütlerimiz
              </h2>
              <div className="space-y-4 text-cosmos-muted">
                <div className="flex items-start space-x-3">
                  <span className="text-cosmos-accent font-bold text-xl">→</span>
                  <p>
                    <span className="text-cosmos-text font-semibold">Güvenilir Bilgi:</span> Tüm
                    içeriklerimiz uzman editörler ve bilim insanları tarafından incelenir.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-cosmos-accent font-bold text-xl">→</span>
                  <p>
                    <span className="text-cosmos-text font-semibold">Ücretsiz Erişim:</span>{' '}
                    Bilginin özgürce paylaşılması gerektiğine inanıyoruz. Tüm sayılarımız ücretsiz
                    olarak erişilebilir.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-cosmos-accent font-bold text-xl">→</span>
                  <p>
                    <span className="text-cosmos-text font-semibold">Sürekli İyileştirme:</span>{' '}
                    Geri bildirimlerinizi dikkate alarak, içerik ve kullanıcı deneyimimizi sürekli
                    geliştiriyoruz.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-cosmos-accent font-bold text-xl">→</span>
                  <p>
                    <span className="text-cosmos-text font-semibold">Topluluk Desteği:</span>{' '}
                    Okuyucularımızın sorularına yanıt veriyor ve astronomi topluluğumuzu
                    büyütüyoruz.
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

export default MissionPage

