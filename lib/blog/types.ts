export interface FAQItem {
  question: Record<string, string>
  answer: Record<string, string>
}

export interface BlogArticle {
  slug: string
  category: 'tests' | 'guides' | 'recettes' | 'comparatifs' | 'culture'
  pillar: string // relative URL to pillar page
  relatedSlugs: string[]
  datePublished: string // ISO 8601
  dateModified: string
  readingTime: number // minutes
  images: {
    src: string
    alt: Record<string, string>
  }[]
  title: Record<string, string>
  excerpt: Record<string, string>
  content: Record<string, string> // HTML content per language
  faq?: FAQItem[] // 5-8 FAQ items for FAQPage schema + on-page display
}

export interface ArticleMeta {
  slug: string
  category: BlogArticle['category']
  title: Record<string, string>
  excerpt: Record<string, string>
  datePublished: string
  readingTime: number
  images: BlogArticle['images']
}

export const CATEGORIES: Record<BlogArticle['category'], Record<string, string>> = {
  tests: {
    fr: 'Tests & Avis', en: 'Reviews', de: 'Tests & Bewertungen',
    es: 'Tests y Opiniones', it: 'Test e Recensioni', nl: 'Tests & Reviews',
  },
  guides: {
    fr: 'Guides Pratiques', en: 'Practical Guides', de: 'Praktische Ratgeber',
    es: 'Guías Prácticas', it: 'Guide Pratiche', nl: 'Praktische Gidsen',
  },
  recettes: {
    fr: 'Recettes', en: 'Recipes', de: 'Rezepte',
    es: 'Recetas', it: 'Ricette', nl: 'Recepten',
  },
  comparatifs: {
    fr: 'Comparatifs', en: 'Comparisons', de: 'Vergleiche',
    es: 'Comparativas', it: 'Confronti', nl: 'Vergelijkingen',
  },
  culture: {
    fr: 'Culture & Tendances', en: 'Culture & Trends', de: 'Kultur & Trends',
    es: 'Cultura y Tendencias', it: 'Cultura e Tendenze', nl: 'Cultuur & Trends',
  },
}
