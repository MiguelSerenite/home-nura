import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/blog'
import { SMART_KITCHEN_CATEGORIES } from '@/lib/smart-kitchen-products'
import { HTML_LANG, LANGUAGES, type Lang } from '@/lib/i18n'
import { BASE_URL, SITE_LAST_UPDATED_ISO, xDefaultUrl } from '@/lib/seo'
import { AUTHORS_UPDATED_ISO } from '@/lib/authors'
import { categoryModifiedIso } from '@/lib/catalog/category-faqs'
import {
  getIndexableSilos,
  getIndexableCategories,
  getPartiallyIndexableCategories,
  categoryLocales,
  categoryPath,
  PROBLEMS,
} from '@/lib/catalog'
import { hubModifiedIso } from '@/lib/catalog/answer-first'
import { BLACK_FRIDAY_CATEGORIES, blackFridayLocales, blackFridayPath } from '@/lib/black-friday'
import { FLOOR_CARE_HUB_PATH, FLOOR_CARE_MARKETS, FLOOR_CARE_PATHS, FLOOR_CARE_UPDATED_ISO } from '@/lib/floor-care/config'
import { getMarketPages } from '@/lib/market-pages/data'
import {
  airfryerCatalogImages,
  articleImages,
  blackFridayImages,
  categoryHubImages,
  problemImages,
  smartKitchenCategoryImages,
} from '@/lib/sitemap-images'
import { GIFT_GUIDES, giftGuidePath } from '@/lib/gift-guides'

/** Manufacturer photos a page renders, per locale (<image:image> entries). */
type PageImages = (lang: Lang) => string[]
/** A page's last change in one locale, when locales differ (answer-first hub changelogs). */
type PageLastModified = (lang: Lang) => string

export default function sitemap(): MetadataRoute.Sitemap {
  // Phase X: single source of truth for freshness. Bumping
  // SITE_LAST_UPDATED_ISO in lib/seo.ts automatically refreshes
  // every entry here + the "last updated" badge rendered in pages.
  const today = SITE_LAST_UPDATED_ISO
  const articles = getAllArticles()
  // The blog index changes whenever an article does.
  const latestArticleUpdate = articles.map((a) => a.dateModified).sort().at(-1) ?? today

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: today, images: airfryerCatalogImages },
    { path: '/guides/airfryers', priority: 0.9, changeFrequency: 'weekly' as const, lastModified: categoryModifiedIso('airfryers', today), images: airfryerCatalogImages },
    { path: '/guides/airfryer-vs-four', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: today, images: airfryerCatalogImages },
    { path: '/guides/cuisine-connectee', priority: 0.9, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/comparateur', priority: 0.85, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/cuisine-connectee', priority: 0.85, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/cuisine-connectee/comparateur', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/cuisine-connectee/quiz', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: today },
    ...SMART_KITCHEN_CATEGORIES.map((cat) => ({
      path: `/cuisine-connectee/${cat}`,
      priority: 0.75,
      changeFrequency: 'weekly' as const,
      lastModified: categoryModifiedIso(cat, today),
      lastModifiedFor: (lang: Lang) => hubModifiedIso(cat, lang),
      images: (lang: Lang) => smartKitchenCategoryImages(lang, cat),
    })),
    { path: '/quiz', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: latestArticleUpdate },
    { path: '/a-propos', priority: 0.5, changeFrequency: 'monthly' as const, lastModified: today },
    // Phase Z: cornerstone EEAT page — priority 0.9 because every
    // product review, comparator and best-for page links back to it,
    // so it accumulates internal link equity and anchors E-E-A-T.
    { path: '/methodologie', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: today },
    { path: '/auteur', priority: 0.5, changeFrequency: 'monthly' as const, lastModified: AUTHORS_UPDATED_ISO },
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
        lastModified: categoryModifiedIso(c.slug, today),
        lastModifiedFor: (lang: Lang) => hubModifiedIso(c.slug, lang),
        images: (lang: Lang) => categoryHubImages(lang, c.slug),
      })),
    // Troubleshooting pages: indexed — about 30% of Search Console clicks
    // (Jul–Oct 2026) for only ~10 topics. The index links all of them.
    { path: '/guides/probleme', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: today },
    ...PROBLEMS.map((p) => ({
      path: `/guides/probleme/${p.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
      lastModified: today,
      images: (lang: Lang) => problemImages(lang, p),
    })),
    // Black Friday hub: evergreen URL (no year), in every locale. Weekly so
    // the yearly copy refresh is picked up before the event. The category
    // pages follow below (each in the locales that have it).
    { path: blackFridayPath(), priority: 0.7, changeFrequency: 'weekly' as const, lastModified: today },
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
  // Pages that render manufacturer photos also list them (image sitemap).
  const localized = (
    path: string,
    langs: readonly Lang[],
    meta: Omit<MetadataRoute.Sitemap[number], 'url' | 'alternates' | 'images'>,
    images?: PageImages,
    { xDefault = true, lastModifiedFor }: { xDefault?: boolean; lastModifiedFor?: PageLastModified } = {},
  ): MetadataRoute.Sitemap => {
    // Keyed by language tag (en-US for /us, en-CA for /ca), never the market code.
    const languages: Record<string, string> = {
      ...Object.fromEntries(langs.map((l) => [HTML_LANG[l], `${BASE_URL}/${l}${path}`])),
      ...(xDefault ? { 'x-default': langs.includes('fr') ? xDefaultUrl(path) : `${BASE_URL}/${langs[0]}${path}` } : {}),
    }
    return langs.map((lang) => {
      const pageImages = images?.(lang) ?? []
      return {
        url: `${BASE_URL}/${lang}${path}`,
        ...meta,
        ...(lastModifiedFor ? { lastModified: new Date(lastModifiedFor(lang)) } : {}),
        alternates: { languages },
        ...(pageImages.length > 0 ? { images: pageImages } : {}),
      }
    })
  }

  const homes = localized('', LANGUAGES, { lastModified: new Date(today), changeFrequency: 'weekly', priority: 1.0 })
  const entries: MetadataRoute.Sitemap = [
    // The entry page (/): the country choice, x-default of the home pages,
    // in their hreflang cluster.
    { url: `${BASE_URL}/`, lastModified: new Date(today), changeFrequency: 'monthly', priority: 0.9, alternates: homes[0].alternates },
    ...pages.flatMap((page) =>
      localized(
        page.path,
        LANGUAGES,
        {
          lastModified: new Date(page.lastModified),
          changeFrequency: page.changeFrequency,
          priority: page.priority,
        },
        'images' in page ? page.images : undefined,
        { lastModifiedFor: 'lastModifiedFor' in page ? page.lastModifiedFor : undefined },
      ),
    ),
  ]

  // Categories indexed in some markets only (lib/catalog `indexableIn`):
  // their hub in those locales, hreflang among them, x-default only with a
  // French version.
  for (const category of getPartiallyIndexableCategories()) {
    const langs = categoryLocales(category)
    entries.push(
      ...localized(
        categoryPath(category),
        langs,
        {
          lastModified: new Date(categoryModifiedIso(category.slug, today)),
          changeFrequency: 'weekly',
          priority: 0.7,
        },
        (lang) => categoryHubImages(lang, category.slug),
        { xDefault: langs.includes('fr'), lastModifiedFor: (lang) => hubModifiedIso(category.slug, lang) },
      ),
    )
  }

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
      ...localized(
        `/blog/${article.slug}`,
        translated,
        {
          lastModified: new Date(article.dateModified),
          changeFrequency: 'monthly',
          priority,
        },
        (lang) => articleImages(lang, article),
      ),
    )
  }

  // Black Friday category pages: the six original ones in every locale, the
  // market pages only where a market lists them (lib/black-friday). x-default
  // only when the page has a French version, as in its hreflang tags.
  for (const category of BLACK_FRIDAY_CATEGORIES) {
    const langs = blackFridayLocales(category)
    entries.push(
      ...localized(
        blackFridayPath(category.slug),
        langs,
        { lastModified: new Date(today), changeFrequency: 'weekly', priority: 0.7 },
        (lang) => blackFridayImages(lang, category),
        { xDefault: langs.includes('fr') },
      ),
    )
  }

  // Gift guides (Sinterklaas, Boxing Day, Reyes): one locale each, no x-default.
  for (const guide of GIFT_GUIDES) {
    entries.push(
      ...localized(
        giftGuidePath(guide),
        [guide.lang],
        { lastModified: new Date(today), changeFrequency: 'weekly', priority: 0.7 },
        undefined,
        { xDefault: false },
      ),
    )
  }

  // Floor-care hub and guides: US and Canadian versions only, each listing
  // its own models. hreflang pairs en-US with en-CA, without x-default
  // (no version for other readers).
  for (const path of FLOOR_CARE_PATHS) {
    entries.push(
      ...localized(
        path,
        FLOOR_CARE_MARKETS,
        {
          lastModified: new Date(FLOOR_CARE_UPDATED_ISO),
          changeFrequency: 'monthly',
          priority: path === FLOOR_CARE_HUB_PATH ? 0.8 : 0.75,
        },
        undefined,
        { xDefault: false },
      ),
    )
  }

  // Market pages (duels, guides, news): one locale each, written for it.
  // hreflang names the page itself only, without x-default.
  for (const page of getMarketPages()) {
    entries.push(
      ...localized(
        page.path,
        [page.locale],
        {
          lastModified: new Date(page.updated),
          changeFrequency: page.type === 'news' ? 'weekly' : 'monthly',
          priority: page.type === 'news' ? 0.6 : 0.75,
        },
        undefined,
        { xDefault: false },
      ),
    )
  }

  return entries
}
