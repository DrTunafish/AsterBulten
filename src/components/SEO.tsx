import { Helmet } from 'react-helmet-async'
import type { PageMeta } from '@/types/issue'

interface SEOProps extends PageMeta {
  children?: React.ReactNode
}

/**
 * SEO ve meta tags component
 * Her sayfada kullanılır - Open Graph, Twitter Card vb.
 */
function SEO({ title, description, image, url, type = 'website', children }: SEOProps) {
  const siteTitle = 'Astronomi Dergisi'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://astronomi-dergisi.com'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const ogImage = image
    ? `${siteUrl}${image}`
    : `${siteUrl}/og-image.jpg` // Varsayılan OG image

  return (
    <Helmet>
      {/* Temel meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Ek meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />

      {children}
    </Helmet>
  )
}

export default SEO

