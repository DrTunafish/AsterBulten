import PdfViewer from '@/components/PdfViewer'
import SEO from '@/components/SEO'

function TestPdfPage() {
  return (
    <>
      <SEO title="Test PDF" description="Temporary test for PDF rendering" />
      <div className="section-spacing">
        <div className="container-custom">
          <div className="glass-card p-6 md:p-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold">Test PDF</h1>
            <p className="text-cosmos-muted mt-2">
              This page is for testing the PDF viewer with a sample file.
            </p>
          </div>

          <PdfViewer pdfUrl="/test.pdf" title="Test PDF" />
        </div>
      </div>
    </>
  )
}

export default TestPdfPage
