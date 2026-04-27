export type Project = {
  slug: string
  title: string
  industry: string
  description: string
  tags: string[]
  featured: boolean
  order: number
  content: string
}

export type Service = {
  slug: string
  title: string
  tagline: string
  description: string
  outcome?: string
  tags: string[]
  icon: string
  order: number
  content: string
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

export type ProductStatus = 'coming-soon' | 'early-access' | 'live'

export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  url: string
  status: ProductStatus
  visible: boolean
}

export type WhyUsItem = {
  num: string
  title: string
  desc: string
}

export type SiteConfig = {
  productBanner: {
    enabled: boolean
    productId: string
    headline: string
    subtext: string
    ctaLabel: string
    ctaUrl: string
    style: 'banner' | 'hero-section'
  }
  products: Product[]
  whyUs: WhyUsItem[]
}
