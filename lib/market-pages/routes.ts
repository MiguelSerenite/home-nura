/**
 * Route helpers of the market pages (app/[lang]/vs/[slug],
 * app/[lang]/guides/[slug], app/[lang]/news/[slug]): static params for the
 * locale that owns each page only, the page a URL names (null → 404 in
 * every other locale), and the metadata with hreflang naming the page
 * itself only.
 */

import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import type { MarketPageType } from './config'
import { findMarketPage, getMarketPages } from './data'
import type { MarketPage } from './types'

const BRAND = 'Home Nura'
const BRAND_SUFFIX = ` | ${BRAND}`

/** Params of one page type: each page under its own locale only. */
export function marketPageStaticParams(type: MarketPageType, pages: readonly MarketPage[] = getMarketPages()): { lang: string; slug: string }[] {
  return pages.filter((page) => page.type === type).map((page) => ({ lang: page.locale, slug: page.slug }))
}

/** The page of a URL, or null (another locale, type or slug), which the route turns into a 404. */
export function resolveMarketPage(lang: string, type: MarketPageType, slug: string, pages?: readonly MarketPage[]): MarketPage | null {
  return findMarketPage(lang, type, slug, pages)
}

/** Canonical, hreflang (the page itself only, no x-default), OpenGraph and robots of a market page. */
export function marketPageMetadata(page: MarketPage): Metadata {
  const title = page.metaTitle.endsWith(BRAND) ? page.metaTitle : `${page.metaTitle}${BRAND_SUFFIX}`
  return buildPageMetadata({
    lang: page.locale,
    path: page.path,
    title,
    description: page.metaDescription,
    type: 'article',
    publishedTime: `${page.published}T00:00:00Z`,
    modifiedTime: `${page.updated}T00:00:00Z`,
    locales: [page.locale],
    xDefault: false,
  })
}
