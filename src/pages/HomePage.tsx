import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import IssueGrid from '@/components/IssueGrid'
import SEO from '@/components/SEO'
import type { Issue } from '@/types/issue'
import issuesData from '@/data/issues.json'
import { Document, Page } from 'react-pdf'

/**
 * Anasayfa - öne çıkan sayı ve tüm sayılar grid'i
 */
function HomePage() {
  const [issues, setIssues] = useState<Issue[]>([])
  const [featuredIssue, setFeaturedIssue] = useState<Issue | null>(null)
  const [featuredPdfError, setFeaturedPdfError] = useState<boolean>(false)

  useEffect(() => {
    // issues.json'dan verileri yükle ve tarihe göre sırala (en yeni önce)
    const sortedIssues = [...(issuesData as Issue[])].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    setIssues(sortedIssues)

    // Featured issue'yu bul veya en son sayıyı kullan
    const featured = sortedIssues.find((issue) => issue.featured) || sortedIssues[0]
    setFeaturedIssue(featured)
  }, [])

  return (
    <>
      <SEO
        title="Anasayfa"
        description="Modern astronomi dergisi - Gök gözlem, astrofizik, uzay teknolojileri ve bilimsel makaleler"
      />

      {/* Hero Section - Öne çıkan sayı */}
      {featuredIssue && (
        <section className="section-spacing bg-gradient-to-b from-cosmos-blue/50 to-transparent">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Sol: PDF ilk sayfa veya kapak görseli */}
              <div className="relative">
                <div className="absolute inset-0 bg-cosmos-accent/20 blur-3xl rounded-full animate-pulse-slow" />
                <div className="relative aspect-[3/4] max-w-md mx-auto">
                  {!featuredPdfError && featuredIssue.pdf ? (
                    <Document
                      file={featuredIssue.pdf}
                      onLoadError={() => setFeaturedPdfError(true)}
                      loading={''}
                      error={''}
                      className="w-full h-full"
                    >
                      <Page
                        pageNumber={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        width={720}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
                      />
                    </Document>
                  ) : (
                    <img
                      src={featuredIssue.cover}
                      alt={`${featuredIssue.title} kapak görseli`}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
                    />
                  )}
                  <div className="absolute -top-4 -right-4 bg-cosmos-accent text-cosmos-dark px-4 py-2 rounded-full font-semibold flex items-center space-x-2 shadow-lg">
                    <Sparkles className="w-5 h-5" />
                    <span>Yeni Sayı</span>
                  </div>
                </div>
              </div>

              {/* Sağ: İçerik */}
              <div className="space-y-6">
                <div className="inline-block bg-cosmos-purple/20 text-cosmos-purple px-4 py-2 rounded-full text-sm font-semibold">
                  Öne Çıkan Sayı
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                  <span className="text-gradient">{featuredIssue.title}</span>
                </h1>

                {/* Açıklama kaldırıldı: İngilizce metin istenmiyor */}

                {/* Meta bilgiler */}
                <div className="flex flex-wrap gap-4 text-sm text-cosmos-muted">
                  <div>
                    <span className="font-semibold text-cosmos-text">Cilt:</span>{' '}
                    {featuredIssue.volume}
                  </div>
                  <div>
                    <span className="font-semibold text-cosmos-text">Sayı:</span>{' '}
                    {featuredIssue.issue}
                  </div>
                  <div>
                    <span className="font-semibold text-cosmos-text">Tarih:</span>{' '}
                    {new Date(featuredIssue.date).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </div>
                </div>

                {(featuredIssue.editors.length > 0 ||
                  (featuredIssue.authors && featuredIssue.authors.length > 0)) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-cosmos-muted">
                    {featuredIssue.editors.length > 0 && (
                      <div className="flex items-start space-x-2">
                        <span className="font-semibold text-cosmos-text">Editörler:</span>
                        <span className="font-medium">{featuredIssue.editors.join(', ')}</span>
                      </div>
                    )}
                    {featuredIssue.authors && featuredIssue.authors.length > 0 && (
                      <div className="flex items-start space-x-2">
                        <span className="font-semibold text-cosmos-text">Yazarlar:</span>
                        <span className="font-medium">{featuredIssue.authors.join(', ')}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Etiketler */}
                {featuredIssue.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {featuredIssue.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-cosmos-accent/10 text-cosmos-accent px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to={`/issues/${featuredIssue.slug}`} className="btn-primary group">
                    <span>Okumaya Başla</span>
                    <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href={featuredIssue.pdf} download className="btn-secondary">
                    PDF İndir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tüm Sayılar Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="text-gradient">Tüm Sayılar</span>
            </h2>
            <p className="text-cosmos-muted max-w-2xl mx-auto">
              Geçmiş sayılarımızı keşfedin. Her sayıda astronomi ve uzay bilimlerine dair özgün
              içerikler, gözlem kılavuzları ve bilimsel makaleler bulabilirsiniz.
            </p>
          </div>

          <IssueGrid issues={issues} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-t from-cosmos-blue/50 to-transparent">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Evrenin Gizemlerini Keşfedin
            </h2>
            <p className="text-cosmos-muted mb-8">
              Astronomi Dergisi ile gökyüzünün sırlarına yolculuk yapın. Bilimsel makaleler, gözlem
              rehberleri ve uzay teknolojileri hakkında en güncel bilgilere ulaşın.
            </p>
            <Link to="/about" className="btn-primary">
              Hakkımızda Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
