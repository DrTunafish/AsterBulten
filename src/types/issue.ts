/**
 * Dergi sayısı veri modeli
 */
export interface Issue {
  slug: string
  title: string
  volume: number
  issue: number
  date: string
  cover: string
  pdf: string
  description: string
  editors: string[]
  authors: string[]
  tags: string[]
  featured: boolean
}

/**
 * SEO ve meta tag bilgileri için tip
 */
export interface PageMeta {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}
