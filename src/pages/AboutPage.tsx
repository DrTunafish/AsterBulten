import SEO from '@/components/SEO'
import { Telescope, Users, BookOpen, Award } from 'lucide-react'

/**
 * Hakkımızda sayfası
 */
function AboutPage() {
  return (
    <>
      <SEO
        title="Hakkımızda"
        description="Astronomi Dergisi hakkında - Misyonumuz, vizyonumuz ve hikayemiz"
        url="/about"
      />

      <div className="section-spacing">
        <div className="container-custom">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-gradient">Hakkımızda</span>
            </h1>
            <p className="text-xl text-cosmos-muted max-w-3xl mx-auto leading-relaxed">
              Astronomi Dergisi, Türkiye'nin önde gelen astronomi ve uzay bilimleri yayınıdır.
              2020 yılından bu yana, evrenin gizemlerini meraklılara ulaştırıyoruz.
            </p>
          </div>

          {/* Hikayemiz */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                <Telescope className="w-8 h-8 text-cosmos-accent mr-3" />
                Hikayemiz
              </h2>
              <div className="space-y-4 text-cosmos-muted leading-relaxed">
                <p>
                  Astronomi Dergisi, bir grup tutkulu astronom ve bilim insanının, astronomiyi
                  herkes için erişilebilir kılma hayaliyle 2020 yılında kuruldu. O günden bu yana,
                  her sayımızda evrenin büyüleyici sırlarını, bilimsel keşifleri ve gök gözlem
                  rehberlerini okuyucularımızla buluşturuyoruz.
                </p>
                <p>
                  Hem amatör gözlemcilere hem de profesyonel astronomlara hitap eden içeriklerimiz,
                  titiz bilimsel standartlarla hazırlanır ve anlaşılır bir dille sunulur. Türkçe
                  astronomi literatürüne katkı sağlamayı ve yeni nesil gök gözlemcilerini
                  yetiştirmeyi hedefliyoruz.
                </p>
                <p>
                  Dergimiz, aylık olarak yayınlanan PDF formatındaki sayılarıyla, okuyucularına
                  zengin görsel içerikler, detaylı makaleler ve pratik gözlem tavsiyeleri sunar.
                  Modern web teknolojileri sayesinde, içeriklerimize her yerden, her cihazdan
                  erişebilirsiniz.
                </p>
              </div>
            </div>
          </div>

          {/* Özellikler Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-cosmos-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cosmos-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Uzman Ekip</h3>
              <p className="text-cosmos-muted text-sm">
                Profesyonel astronomlar ve bilim insanlarından oluşan yazar kadromuz
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-cosmos-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-cosmos-purple" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Kaliteli İçerik</h3>
              <p className="text-cosmos-muted text-sm">
                Bilimsel doğruluk ve anlaşılır dil ile hazırlanmış makaleler
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-cosmos-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Telescope className="w-8 h-8 text-cosmos-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Gözlem Rehberi</h3>
              <p className="text-cosmos-muted text-sm">
                Her sayıda güncel gök olayları ve gözlem tavsiyeleri
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-cosmos-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-cosmos-purple" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Ödüllü Tasarım</h3>
              <p className="text-cosmos-muted text-sm">
                Modern, kullanıcı dostu ve erişilebilir web deneyimi
              </p>
            </div>
          </div>

          {/* İletişim CTA */}
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Bizimle İletişime Geçin</h2>
            <p className="text-cosmos-muted mb-8 max-w-2xl mx-auto">
              Sorularınız, önerileriniz veya iş birliği teklifleriniz için bizimle iletişime
              geçmekten çekinmeyin. Size yardımcı olmaktan mutluluk duyarız.
            </p>
            <a href="/contact" className="btn-primary">
              İletişim Formu
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage

