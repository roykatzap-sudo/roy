export interface BlogPost {
  id: string
  title: string
  summary: string
  imageUrl: string
  imageAlt: string
  date: string
  linkedinUrl?: string
  slug: string
}

export interface Service {
  id: string
  title: string
  description: string
  price?: string
  ctaLabel: string
  ctaHref: string
  features: string[]
  highlighted?: boolean
}

export interface Testimonial {
  id: string
  quote: string
  authorName: string
  authorRole: string
}

export interface NavLink {
  label: string
  href: string
}
