import { useEffect, useState } from 'react'
import { Document, Page } from 'react-pdf'
import { ChevronLeft, ChevronRight, Loader2, ZoomIn, ZoomOut } from 'lucide-react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

interface PdfViewerProps {
  pdfUrl: string
  title: string
}

/**
 * PDF görüntüleyici component - react-pdf kullanır
 * Sayfa navigasyonu, zoom ve indirme özellikleri
 */
function PdfViewer({ pdfUrl, title }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.0)
  const [loading, setLoading] = useState<boolean>(true)
  const [pageInput, setPageInput] = useState<string>('1')
  const [viewMode, setViewMode] = useState<'single' | 'spread'>('single')

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
  }

  function onDocumentLoadError(error: Error) {
    console.error('PDF yükleme hatası:', error)
    setLoading(false)
  }

  const goToPrevPage = () => {
    const step = viewMode === 'spread' ? 2 : 1
    setPageNumber((prev) => Math.max(prev - step, 1))
  }

  const goToNextPage = () => {
    const step = viewMode === 'spread' ? 2 : 1
    const maxLeftPage = viewMode === 'spread' ? Math.max(numPages - 1, 1) : numPages
    setPageNumber((prev) => Math.min(prev + step, maxLeftPage))
  }

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5))
  }

  // Keep input text in sync when page changes via buttons/keyboard
  useEffect(() => {
    setPageInput(String(pageNumber))
  }, [pageNumber])

  const commitPageChange = () => {
    const value = parseInt(pageInput)
    if (!Number.isNaN(value) && value >= 1 && value <= numPages) {
      if (viewMode === 'spread') {
        const normalized = value % 2 === 0 ? value - 1 : value
        const maxLeftPage = Math.max(numPages - 1, 1)
        setPageNumber(Math.min(Math.max(normalized, 1), maxLeftPage))
      } else {
        setPageNumber(value)
      }
    } else {
      // reset to current page if invalid
      setPageInput(String(pageNumber))
    }
  }

  // Toggle single <-> spread view
  const toggleViewMode = () => {
    setViewMode((prev) => {
      const next = prev === 'single' ? 'spread' : 'single'
      if (next === 'spread') {
        // Ensure left page is odd and within bounds
        const normalized = pageNumber % 2 === 0 ? pageNumber - 1 : pageNumber
        const maxLeftPage = Math.max(numPages - 1, 1)
        setPageNumber(Math.min(Math.max(normalized, 1), maxLeftPage))
      }
      return next
    })
  }

  // Keyboard navigation: ArrowLeft / ArrowRight to change pages
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      ) {
        return
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevPage()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNextPage()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [viewMode, numPages, pageNumber])

  return (
    <div className="w-full">
      {/* Kontrol paneli */}
      <div className="glass-card p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Sayfa navigasyonu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible-ring"
            aria-label="Önceki sayfa"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-sm text-cosmos-text">
            Sayfa{' '}
            <input
              type="number"
              min={1}
              max={numPages}
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              onBlur={commitPageChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  commitPageChange()
                }
              }}
              className="w-16 px-2 py-1 bg-transparent text-cosmos-text border border-white/10 rounded text-center focus-visible-ring appearance-none"
              aria-label="Sayfa numarası"
            />{' '}
            / {numPages || '...'}
          </span>

          <button
            onClick={goToNextPage}
            disabled={
              viewMode === 'spread'
                ? pageNumber >= Math.max(numPages - 1, 1)
                : pageNumber >= numPages
            }
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible-ring"
            aria-label="Sonraki sayfa"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Zoom kontrolleri */}
        <div className="flex items-center space-x-2">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible-ring"
            aria-label="Uzaklaştır"
          >
            <ZoomOut className="w-5 h-5" />
          </button>

          <span className="text-sm text-cosmos-muted min-w-[60px] text-center">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={zoomIn}
            disabled={scale >= 2.0}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible-ring"
            aria-label="Yakınlaştır"
          >
            <ZoomIn className="w-5 h-5" />
          </button>

          <button
            onClick={toggleViewMode}
            className="ml-4 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus-visible-ring text-sm"
            aria-label="Görüntü modunu değiştir"
          >
            {viewMode === 'single' ? 'Kitap Modu' : 'Tek Sayfa'}
          </button>
        </div>
      </div>

      {/* PDF görüntüleme alanı */}
      <div className="glass-card p-4 md:p-8">
        <div className="flex flex-col items-center">
          {loading && (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-12 h-12 text-cosmos-accent animate-spin mb-4" />
              <p className="text-cosmos-muted">PDF yükleniyor...</p>
            </div>
          )}

          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading=""
            error={
              <div className="text-center py-16">
                <p className="text-red-400 mb-4">PDF yüklenemedi.</p>
                <p className="text-cosmos-muted">Lütfen sayfayı yenilemeyi deneyin.</p>
              </div>
            }
            className="max-w-full"
          >
            {viewMode === 'single' ? (
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={false}
                className="shadow-2xl"
                loading=""
              />
            ) : (
              <div className="flex gap-4">
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-2xl"
                  loading=""
                />
                {pageNumber + 1 <= numPages && (
                  <Page
                    pageNumber={pageNumber + 1}
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="shadow-2xl"
                    loading=""
                  />
                )}
              </div>
            )}
          </Document>
        </div>
      </div>

      {/* Klavye kısayolları bilgisi */}
      <div className="mt-4 text-center text-xs text-cosmos-muted">
        <p>İpucu: Klavyenizin ok tuşlarını (← →) kullanarak sayfalar arasında gezinebilirsiniz.</p>
      </div>
    </div>
  )
}

export default PdfViewer
