import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/blog'
import { SMART_KITCHEN_CATEGORIES } from '@/lib/smart-kitchen-products'
import { LANGUAGES } from '@/lib/i18n'
import { BASE_URL, SITE_LAST_UPDATED_ISO } from '@/lib/seo'
import {
  getIndexableSilos,
  getIndexableCategories,
  BUYER_PERSONAS,
  PROBLEMS,
} from '@/lib/catalog'

export default function sitemap(): MetadataRoute.Sitemap {
  // Phase X: single source of truth for freshness. Bumping
  // SITE_LAST_UPDATED_ISO in lib/seo.ts automatically refreshes
  // every entry here + the "last updated" badge rendered in pages.
  const today = SITE_LAST_UPDATED_ISO

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/guides/airfryers', priority: 0.9, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/guides/airfryer-vs-four', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: today },
    { path: '/guides/cuisine-connectee', priority: 0.9, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/comparateur', priority: 0.85, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/cuisine-connectee', priority: 0.85, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/cuisine-connectee/comparateur', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/cuisine-connectee/quiz', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: today },
    ...SMART_KITCHEN_CATEGORIES.map((cat) => ({
      path: `/cuisine-connectee/${cat}`,
      priority: 0.75,
      changeFrequency: 'weekly' as const,
      lastModified: today,
    })),
    { path: '/quiz', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/a-propos', priority: 0.5, changeFrequency: 'monthly' as const, lastModified: today },
    // Phase Z: cornerstone EEAT page — priority 0.9 because every
    // product review, comparator and best-for page links back to it,
    // so it accumulates internal link equity and anchors E-E-A-T.
    { path: '/methodologie', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: today },
    // Phase BB: non-flagship meta-silo hubs (cuisine-connectee is
    // already listed above). Each one ships a real SiloHub page in
    // every locale, so we emit them in the sitemap to push crawl
    // into the hub-and-spoke graph.
    ...getIndexableSilos()
      .filter((s) => s.slug !== 'cuisine-connectee')
      .map((s) => ({
        path: `/${s.slug}`,
        priority: 0.75,
        changeFrequency: 'weekly' as const,
        lastModified: today,
      })),
    // Phase DD: indexable categories served via the generic
    // /[silo]/[category] route. We skip cuisine-connectee because
    // those paths are already enumerated via SMART_KITCHEN_CATEGORIES
    // above (flagship bespoke route).
    ...getIndexableCategories()
      .filter((c) => c.metaSilo !== 'cuisine-connectee')
      .map((c) => ({
        path: `/${c.metaSilo}/${c.slug}`,
        priority: 0.7,
        changeFrequency: 'weekly' as const,
        lastModified: today,
      })),
    // Phase EE: persona buyer guides. 24 personas × 6 locales of
    // axis-specific copy, each one cross-linking to real categories.
    ...BUYER_PERSONAS.map((p) => ({
      path: `/guides/acheteur/${p.slug}`,
      priority: 0.65,
      changeFrequency: 'monthly' as const,
      lastModified: today,
    })),
    // Phase FF: troubleshooting pages (Moteur 3). Long-tail queries
    // with severity-driven CTAs — higher priority than persona
    // guides because they capture direct purchase-adjacent intent.
    ...PROBLEMS.map((p) => ({
      path: `/guides/probleme/${p.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
      lastModified: today,
    })),
    // Legal pages (mentions-legales, politique-confidentialite,
    // politique-cookies) are intentionally omitted — they're noindex'd
    // via per-page meta robots so there's no point pointing crawlers
    // at them. They remain reachable via the site footer.
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const lang of LANGUAGES) {
      entries.push({
        url: `${BASE_URL}/${lang}${page.path}`,
        lastModified: new Date(page.lastModified),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            LANGUAGES.map(l => [l, `${BASE_URL}/${l}${page.path}`])
          ),
        },
      })
    }
  }

  // Add all blog articles dynamically with proper priority by category
  const articles = getAllArticles()
  for (const article of articles) {
    // Tests and comparatifs get higher priority (closer to purchase intent)
    const priority = article.category === 'tests' ? 0.7
      : article.category === 'comparatifs' ? 0.7
      : article.category === 'guides' ? 0.6
      : 0.5

    for (const lang of LANGUAGES) {
      entries.push({
        url: `${BASE_URL}/${lang}/blog/${article.slug}`,
        lastModified: new Date(article.dateModified),
        changeFrequency: 'monthly',
        priority,
        alternates: {
          languages: Object.fromEntries(
            LANGUAGES.map(l => [l, `${BASE_URL}/${l}/blog/${article.slug}`])
          ),
        },
      })
    }
  }

  return entries
}
