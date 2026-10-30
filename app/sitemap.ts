import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/blog'
import { SMART_KITCHEN_CATEGORIES } from '@/lib/smart-kitchen-products'
import { LANGUAGES, type Lang } from '@/lib/i18n'
import { BASE_URL, SITE_LAST_UPDATED_ISO } from '@/lib/seo'
import {
  getIndexableSilos,
  getIndexableCategories,
  PROBLEMS,
} from '@/lib/catalog'

export default function sitemap(): MetadataRoute.Sitemap {
  // Phase X: single source of truth for freshness. Bumping
  // SITE_LAST_UPDATED_ISO in lib/seo.ts automatically refreshes
  // every entry here + the "last updated" badge rendered in pages.
  const today = SITE_LAST_UPDATED_ISO
  const articles = getAllArticles()
  // The blog index changes whenever an article does.
  const latestArticleUpdate = articles.map((a) => a.dateModified).sort().at(-1) ?? today

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
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: latestArticleUpdate },
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
    // Troubleshooting pages: indexed — about 30% of Search Console clicks
    // (Jul–Oct 2026) for only ~10 topics. The index links all of them.
    { path: '/guides/probleme', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: today },
    ...PROBLEMS.map((p) => ({
      path: `/guides/probleme/${p.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
      lastModified: today,
    })),
    // Persona buyer guides and best-for pages are built
    // from shared templates (near-duplicate copy at scale, no products,
    // best-for: 0.5% CTR spread over 771 URLs):
    // they are noindexed and kept out of the sitemap until each page has
    // its own substance. See docs/refonte-oct26/PLAN.md (lot 5).
    // Legal pages (mentions-legales, politique-confidentialite,
    // politique-cookies) are intentionally omitted — they're noindex'd
    // via per-page meta robots so there's no point pointing crawlers
    // at them. They remain reachable via the site footer.
  ]

  // One entry per page AND per locale, each carrying the hreflang cluster.
  // Listing only the FR URL left the /de/, /en/, /es/, /it/ and /nl/ pages
  // discoverable through hreflang alone, and they were crawled far less.
  // ~2.6 k URLs, well under the 50 k-per-sitemap limit.
  const localized = (
    path: string,
    langs: readonly Lang[],
    meta: Omit<MetadataRoute.Sitemap[number], 'url' | 'alternates'>,
  ): MetadataRoute.Sitemap => {
    const languages: Record<string, string> = {
      ...Object.fromEntries(langs.map((l) => [l, `${BASE_URL}/${l}${path}`])),
      'x-default': `${BASE_URL}/${langs.includes('fr') ? 'fr' : langs[0]}${path}`,
    }
    return langs.map((lang) => ({ url: `${BASE_URL}/${lang}${path}`, ...meta, alternates: { languages } }))
  }

  const entries: MetadataRoute.Sitemap = pages.flatMap((page) =>
    localized(page.path, LANGUAGES, {
      lastModified: new Date(page.lastModified),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }),
  )

  // Blog articles: only the locales the article is translated into (the
  // other locales 404, see app/[lang]/blog/[slug]/page.tsx).
  for (const article of articles) {
    const priority = article.category === 'tests' ? 0.7
      : article.category === 'comparatifs' ? 0.7
      : article.category === 'guides' ? 0.6
      : 0.5
    const translated = LANGUAGES.filter((lang) => article.content[lang])
    if (translated.length === 0) continue
    entries.push(
      ...localized(`/blog/${article.slug}`, translated, {
        lastModified: new Date(article.dateModified),
        changeFrequency: 'monthly',
        priority,
      }),
    )
  }

  return entries
}
