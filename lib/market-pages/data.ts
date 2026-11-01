/**
 * Market page loader: every file of data/market-pages (bundled by
 * lib/market-pages/registry.ts), validated when this module loads (at
 * build time), so bad data fails the build.
 *
 * To add pages, drop the writers' JSON at
 * data/market-pages/{locale}/{slug}.json, run
 * `npx tsx scripts/market-pages/sync-registry.ts`, then
 * `npx vitest run tests/lib/market-pages`: every error names the file, the
 * field and what is expected, and all files are reported at once.
 */

import { CATEGORIES, categoryPath } from '@/lib/catalog'
import type { Lang } from '@/lib/i18n'
import { MARKET_PAGE_TYPES, marketPageFile, marketPagePath, type MarketPageType } from './config'
import { primaryHub } from './hubs'
import { MARKET_PAGE_FILES } from './registry'
import { sitePagesFor } from './site-paths'
import type { MarketPage, RawMarketPageFile } from './types'
import { MarketPageDataError, parseMarketPage } from './validate'

/** Indexed pages of a locale (prefixed path → label, null for a utility page). */
export type SitePages = (lang: Lang) => ReadonlyMap<string, string | null>

/** Full path of a page ('/it/guides/friggitrici-ad-aria-quale-scegliere'). */
export function marketPageHref(page: Pick<MarketPage, 'locale' | 'path'>): string {
  return `/${page.locale}${page.path}`
}

/** A guess at the page a broken `related` path meant, for the error message. */
function relatedHint(path: string, locale: Lang, known: ReadonlySet<string>): string {
  const last = path.split('/').at(-1) ?? ''
  const category = CATEGORIES.find((c) => c.slug === last)
  const categoryHref = category ? `/${locale}${categoryPath(category)}` : null
  if (categoryHref && categoryHref !== path && known.has(categoryHref)) return ` (did you mean ${categoryHref}?)`
  const marketHref = MARKET_PAGE_TYPES.map((type) => `/${locale}${marketPagePath(type, last)}`).find((href) => href !== path && known.has(href))
  return marketHref ? ` (did you mean ${marketHref}?)` : ''
}

/** `related` links must reach a content page of the same locale (another market page included), never the page itself. */
function relatedProblems(pages: readonly MarketPage[], sitePages: SitePages): string[] {
  return pages.flatMap((page) => {
    const own = marketPageHref(page)
    const site = sitePages(page.locale)
    const known = new Set([...site.keys(), ...pages.filter((p) => p.locale === page.locale).map(marketPageHref)])
    return page.related.flatMap((path, i) => {
      const at = `${marketPageFile(page.locale, page.slug)}: related[${i}]`
      if (path === own) return [`${at}: links the page itself`]
      if (!known.has(path)) return [`${at}: ${path} is not an indexed page of /${page.locale}${relatedHint(path, page.locale, known)}`]
      if (site.get(path) === null) {
        return [`${at}: ${path} is a utility page: link content of the same family (a category, guide, article, troubleshooting page or market page)`]
      }
      return []
    })
  })
}

/**
 * Validates every page file, then the rules that span files (`related`
 * links), and refuses placeholder pages in a production build. Reports
 * every broken file at once.
 */
export function loadMarketPages(files: readonly RawMarketPageFile[] = MARKET_PAGE_FILES, sitePages: SitePages = sitePagesFor): MarketPage[] {
  const problems: string[] = []
  const pages: MarketPage[] = []
  for (const file of files) {
    try {
      pages.push(parseMarketPage(file.raw, file))
    } catch (error) {
      if (!(error instanceof MarketPageDataError)) throw error
      problems.push(error.message)
    }
  }
  problems.push(...relatedProblems(pages, sitePages))
  if (problems.length > 0) throw new MarketPageDataError(problems.join('\n'))

  const fixtures = pages.filter((page) => page.isFixture)
  if (fixtures.length > 0 && process.env.VERCEL_ENV === 'production') {
    throw new MarketPageDataError(
      `placeholder pages in a production build: ${fixtures.map((page) => marketPageFile(page.locale, page.slug)).join(', ')} (key "_fixture")`,
    )
  }
  return pages
}

const PAGES: readonly MarketPage[] = loadMarketPages()

export function getMarketPages(): readonly MarketPage[] {
  return PAGES
}

/** The page a URL names, or null (another locale, type or slug: a 404). */
export function findMarketPage(locale: string, type: MarketPageType, slug: string, pages: readonly MarketPage[] = PAGES): MarketPage | null {
  return pages.find((page) => page.locale === locale && page.type === type && page.slug === slug) ?? null
}

/**
 * Market pages of `locale` whose main category hub (their first related
 * hub, lib/market-pages/hubs.ts) is `pathInLocale` ('/guides/airfryers'):
 * that hub links them back, newest first.
 */
export function marketPagesLinkingTo(locale: string, pathInLocale: string, pages: readonly MarketPage[] = PAGES): MarketPage[] {
  return pages
    .filter((page) => page.locale === locale && primaryHub(page)?.path === pathInLocale)
    .sort((a, b) => b.updated.localeCompare(a.updated) || a.h1.localeCompare(b.h1))
}

export interface RelatedLink {
  href: string
  label: string
}

/** The page's related links with their labels (another market page: its H1). */
export function relatedLinks(page: MarketPage, pages: readonly MarketPage[] = PAGES, sitePages: SitePages = sitePagesFor): RelatedLink[] {
  const site = sitePages(page.locale)
  return page.related.flatMap((href) => {
    const label = pages.find((p) => marketPageHref(p) === href)?.h1 ?? site.get(href)
    return label ? [{ href, label }] : []
  })
}
