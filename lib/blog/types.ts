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
    es: 'Análisis y opiniones', it: 'Recensioni', nl: 'Reviews', pl: 'Szczegółowe opinie', sv: 'Recensioner', us: 'Reviews', ca: 'Reviews',
  },
  guides: {
    fr: 'Guides Pratiques', en: 'How-To Guides', de: 'Praktische Ratgeber',
    es: 'Guías prácticas', it: 'Guide pratiche', nl: 'Praktische Gidsen', pl: 'Praktyczne poradniki', sv: 'Praktiska guider', us: 'How-To Guides', ca: 'Practical Guides',
  },
  recettes: {
    fr: 'Recettes', en: 'Recipes', de: 'Rezepte',
    es: 'Recetas', it: 'Ricette', nl: 'Recepten', pl: 'Przepisy', sv: 'Recept', us: 'Recipes', ca: 'Recipes',
  },
  comparatifs: {
    fr: 'Comparatifs', en: 'Comparisons', de: 'Vergleiche',
    es: 'Comparativas', it: 'Confronti', nl: 'Vergelijkingen', pl: 'Porównania', sv: 'Jämförelser', us: 'Comparisons', ca: 'Comparisons',
  },
  culture: {
    fr: 'Culture & Tendances', en: 'Culture & Trends', de: 'Kultur & Trends',
    es: 'Cultura y tendencias', it: 'Cultura e tendenze', nl: 'Cultuur & Trends', pl: 'Kultura i trendy', sv: 'Kultur & trender', us: 'Trends & Explainers', ca: 'Culture & Trends',
  },
}
