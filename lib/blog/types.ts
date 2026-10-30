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
  // The slug stays `tests` (URLs, data); the labels never promise tests we
  // do not run (tests/lib/blog-categories.test.ts).
  tests: {
    fr: 'Avis détaillés', en: 'Reviews', de: 'Produktbewertungen',
    es: 'Análisis y opiniones', it: 'Recensioni', nl: 'Reviews', pl: 'Recenzje',
  },
  guides: {
    fr: 'Guides Pratiques', en: 'Practical Guides', de: 'Praktische Ratgeber',
    es: 'Guías Prácticas', it: 'Guide Pratiche', nl: 'Praktische Gidsen', pl: 'Praktyczne poradniki',
  },
  recettes: {
    fr: 'Recettes', en: 'Recipes', de: 'Rezepte',
    es: 'Recetas', it: 'Ricette', nl: 'Recepten', pl: 'Przepisy',
  },
  comparatifs: {
    fr: 'Comparatifs', en: 'Comparisons', de: 'Vergleiche',
    es: 'Comparativas', it: 'Confronti', nl: 'Vergelijkingen', pl: 'Porównania',
  },
  culture: {
    fr: 'Culture & Tendances', en: 'Culture & Trends', de: 'Kultur & Trends',
    es: 'Cultura y Tendencias', it: 'Cultura e Tendenze', nl: 'Cultuur & Trends', pl: 'Kultura i trendy',
  },
}
