import { Link } from 'react-router-dom'
import { Calendar, Users, Tag } from 'lucide-react'
import { useState } from 'react'
import { Document, Page } from 'react-pdf'
import type { Issue } from '@/types/issue'

interface IssueCardProps {
  issue: Issue
}

/**
 * Dergi sayısı kartı - anasayfa grid'inde gösterilir
 */
function IssueCard({ issue }: IssueCardProps) {
  const [pdfError, setPdfError] = useState<boolean>(false)
  const [, setIsPdfReady] = useState<boolean>(false)
  // Tarihi formatla
  const formattedDate = new Date(issue.date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      to={`/issues/${issue.slug}`}
      className="group glass-card-hover overflow-hidden focus-visible-ring"
      aria-label={`${issue.title} sayısını görüntüle`}
    >
      {/* Kapak: PDF ilk sayfa veya fallback görsel */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cosmos-blue">
        {!pdfError && issue.pdf ? (
          <div className="w-full h-full">
            <Document
              file={issue.pdf}
              onLoadSuccess={() => setIsPdfReady(true)}
              onLoadError={() => setPdfError(true)}
              loading={''}
              error={''}
              className="w-full h-full"
            >
              <Page
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Document>
          </div>
        ) : (
          <img
            src={issue.cover}
            alt={`${issue.title} kapak görseli`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        )}

        {/* Featured badge */}
        {issue.featured && (
          <div className="absolute top-4 right-4 bg-cosmos-accent text-cosmos-dark px-3 py-1 rounded-full text-xs font-semibold">
            Öne Çıkan
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* İçerik */}
      <div className="p-5">
        <h3 className="text-xl font-heading font-bold mb-2 text-cosmos-text group-hover:text-cosmos-accent transition-colors">
          {issue.title}
        </h3>

        <p className="text-cosmos-muted text-sm mb-4 line-clamp-2">{issue.description}</p>

        {/* Meta bilgiler */}
        <div className="space-y-2 text-xs text-cosmos-muted">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <time dateTime={issue.date}>{formattedDate}</time>
          </div>

          {issue.editors.length > 0 && (
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>{issue.editors.join(', ')}</span>
            </div>
          )}

          {issue.authors && issue.authors.length > 0 && (
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>{issue.authors.join(', ')}</span>
            </div>
          )}

          {issue.tags.length > 0 && (
            <div className="flex items-center space-x-2">
              <Tag className="w-4 h-4" aria-hidden="true" />
              <div className="flex flex-wrap gap-1">
                {issue.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-cosmos-accent/10 text-cosmos-accent px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default IssueCard
