import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Users, Tag } from 'lucide-react'
import PdfViewer from '@/components/PdfViewer'
import { Document, Page } from 'react-pdf'
import SEO from '@/components/SEO'
import type { Issue } from '@/types/issue'
import issuesData from '@/data/issues.json'

/**
 * Dergi sayısı detay sayfası - PDF görüntüleyici
 */
function IssuePage() {
  const { slug } = useParams<{ slug: string }>()
  const [issue, setIssue] = useState<Issue | null>(null)
  const [coverPdfError, setCoverPdfError] = useState<boolean>(false)

  useEffect(() => {
    // Slug'a göre issue'yu bul
    const foundIssue = (issuesData as Issue[]).find((i) => i.slug === slug)
    setIssue(foundIssue || null)

    // Sayfa scroll'u en üste
    window.scrollTo(0, 0)
  }, [slug])

  if (!issue) {
    return (
      <div className="section-spacing">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Sayı Bulunamadı</h1>
          <p className="text-cosmos-muted mb-8">
            Aradığınız dergi sayısı bulunamadı veya henüz yayınlanmadı.
          </p>
          <Link to="/" className="btn-primary">
            <ArrowLeft className="w-5 h-5 inline mr-2" />
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    )
  }

  const formattedDate = new Date(issue.date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <SEO
        title={issue.title}
        description={issue.description}
        image={issue.cover}
        url={`/issues/${issue.slug}`}
        type="article"
      >
        {/* JSON-LD structured data for PublicationIssue */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'PublicationIssue',
            issueNumber: issue.issue.toString(),
            volumeNumber: issue.volume.toString(),
            datePublished: issue.date,
            name: issue.title,
            description: issue.description,
            image: `${import.meta.env.VITE_SITE_URL || ''}${issue.cover}`,
            author: issue.editors.map((editor) => ({
              '@type': 'Person',
              name: editor,
            })),
          })}
        </script>
      </SEO>

      <div className="section-spacing">
        <div className="container-custom">
          {/* Geri dön butonu */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-cosmos-muted hover:text-cosmos-accent transition-colors mb-8 focus-visible-ring rounded px-2 py-1"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Tüm Sayılara Dön</span>
          </Link>

          {/* Başlık ve meta bilgiler */}
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sol: PDF ilk sayfa veya kapak görseli */}
              <div className="lg:col-span-1">
                {!coverPdfError && issue.pdf ? (
                  <Document
                    file={issue.pdf}
                    onLoadError={() => setCoverPdfError(true)}
                    loading={''}
                    error={''}
                    className="w-full"
                  >
                    <Page
                      pageNumber={1}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      width={600}
                      className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg border border-white/10"
                    />
                  </Document>
                ) : (
                  <img
                    src={issue.cover}
                    alt={`${issue.title} kapak görseli`}
                    className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg border border-white/10"
                  />
                )}
              </div>

              {/* Sağ: Bilgiler */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <div className="text-sm text-cosmos-accent font-semibold mb-2">
                    Cilt {issue.volume} • Sayı {issue.issue}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {issue.title}
                  </h1>
                  <p className="text-lg text-cosmos-muted leading-relaxed">{issue.description}</p>
                </div>

                {/* Meta bilgiler */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-cosmos-accent mt-1" aria-hidden="true" />
                    <div>
                      <div className="text-sm text-cosmos-muted">Yayın Tarihi</div>
                      <div className="font-semibold">{formattedDate}</div>
                    </div>
                  </div>

                  {issue.editors.length > 0 && (
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-cosmos-accent mt-1" aria-hidden="true" />
                      <div>
                        <div className="text-sm text-cosmos-muted">Editörler</div>
                        <div className="font-semibold">{issue.editors.join(', ')}</div>
                      </div>
                    </div>
                  )}

                  {issue.authors && issue.authors.length > 0 && (
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-cosmos-accent mt-1" aria-hidden="true" />
                      <div>
                        <div className="text-sm text-cosmos-muted">Yazarlar</div>
                        <div className="font-semibold">{issue.authors.join(', ')}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Etiketler */}
                {issue.tags.length > 0 && (
                  <div className="flex items-start space-x-3 pt-4 border-t border-white/10">
                    <Tag className="w-5 h-5 text-cosmos-accent mt-1" aria-hidden="true" />
                    <div className="flex-1">
                      <div className="text-sm text-cosmos-muted mb-2">Konular</div>
                      <div className="flex flex-wrap gap-2">
                        {issue.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-cosmos-accent/10 text-cosmos-accent px-3 py-1 rounded-full text-sm font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <PdfViewer pdfUrl={issue.pdf} title={issue.title} />
        </div>
      </div>
    </>
  )
}

export default IssuePage
