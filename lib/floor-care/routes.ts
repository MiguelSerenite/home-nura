/**
 * Route helpers of the floor-care pages (app/[lang]/guides/floor-care):
 * static params for the US and Canadian versions only, the page a URL
 * names (null → 404 in every other locale), and the metadata with
 * hreflang limited to en-US ↔ en-CA.
 */

import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import {
  FLOOR_CARE_MARKETS,
  FLOOR_CARE_NEEDS,
  FLOOR_CARE_SLUGS,
  FLOOR_CARE_UPDATED_ISO,
  FLOOR_CARE_PUBLISHED_ISO,
  floorCarePath,
  guideForSlug,
  isFloorCareMarket,
  type FloorCareGuideKey,
  type FloorCareMarket,
} from './config'
import { getFloorCareGuide } from './data'

const BRAND_SUFFIX = ' | Home Nura'

/** Params of the hub: one page per market. */
export function floorCareHubStaticParams(): { lang: FloorCareMarket }[] {
  return FLOOR_CARE_MARKETS.map((lang) => ({ lang }))
}

/** Params of the three guides in each market. */
export function floorCareGuideStaticParams(): { lang: FloorCareMarket; guide: string }[] {
  return FLOOR_CARE_MARKETS.flatMap((lang) => FLOOR_CARE_NEEDS.map((need) => ({ lang, guide: FLOOR_CARE_SLUGS[need] })))
}

export interface FloorCarePageRef {
  market: FloorCareMarket
  guide: FloorCareGuideKey
}

/**
 * The floor-care page of a URL: the hub without `slug`, a guide with it.
 * Null for any other locale or an unknown slug, which the page turns into
 * a 404.
 */
export function resolveFloorCarePage(lang: string, slug?: string): FloorCarePageRef | null {
  if (!isFloorCareMarket(lang)) return null
  if (slug === undefined) return { market: lang, guide: 'hub' }
  const guide = guideForSlug(slug)
  return guide ? { market: lang, guide } : null
}

/** Canonical, hreflang (en-US ↔ en-CA only), OpenGraph and robots of a floor-care page. */
export function floorCareMetadata({ market, guide }: FloorCarePageRef): Metadata {
  const data = getFloorCareGuide(market, guide)
  const title = data.metaTitle.endsWith('Home Nura') ? data.metaTitle : `${data.metaTitle}${BRAND_SUFFIX}`
  return buildPageMetadata({
    lang: market,
    path: floorCarePath(guide),
    title,
    description: data.metaDescription,
    type: 'article',
    publishedTime: `${FLOOR_CARE_PUBLISHED_ISO}T00:00:00Z`,
    modifiedTime: `${FLOOR_CARE_UPDATED_ISO}T00:00:00Z`,
    locales: FLOOR_CARE_MARKETS,
  })
}
