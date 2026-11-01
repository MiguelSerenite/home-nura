/**
 * Floor-care guides (US and Canada only): markets, guides, routes.
 *
 * A journey hub and three guides that keep three needs apart: dry
 * vacuuming (dust, crumbs, hair), hard-floor washing (sealed floors) and
 * fabric cleaning (stains, pets, carpets, upholstery). They exist only in
 * the two North-American English markets, with English slugs, and list
 * models sold in that market: the US guides cite US models, the Canadian
 * guides Canadian models (data/floor-care/{market}-{guide}.json).
 */

import type { Lang } from '@/lib/i18n'

/** The site locales that have floor-care guides. */
export const FLOOR_CARE_MARKETS = ['us', 'ca'] as const satisfies readonly Lang[]
export type FloorCareMarket = (typeof FLOOR_CARE_MARKETS)[number]

/** Data files per market: the hub and the three guides. */
export const FLOOR_CARE_GUIDES = ['hub', 'dry', 'hardfloor', 'textile'] as const
export type FloorCareGuideKey = (typeof FLOOR_CARE_GUIDES)[number]
/** The three guides behind the hub, one per need. */
export type FloorCareNeedKey = Exclude<FloorCareGuideKey, 'hub'>
export const FLOOR_CARE_NEEDS: readonly FloorCareNeedKey[] = ['dry', 'hardfloor', 'textile']

/** Path of the hub inside a locale prefix. */
export const FLOOR_CARE_HUB_PATH = '/guides/floor-care'

/** URL segment of each guide under the hub (English slugs: the pages exist only in English markets). */
export const FLOOR_CARE_SLUGS: Readonly<Record<FloorCareNeedKey, string>> = {
  dry: 'vacuums',
  hardfloor: 'hard-floor-washers',
  textile: 'carpet-upholstery-cleaners',
}

/**
 * Last editorial update of the floor-care data. Bump it whenever a
 * data/floor-care JSON file changes: sitemap lastModified and the pages'
 * Article schema read it.
 */
export const FLOOR_CARE_UPDATED_ISO = '2026-11-01'
export const FLOOR_CARE_PUBLISHED_ISO = '2026-11-01'

/** Short navigation labels (breadcrumbs, sibling links, the hub's need cards). */
export const FLOOR_CARE_LABELS: Readonly<Record<FloorCareGuideKey, string>> = {
  hub: 'Floor care',
  dry: 'Vacuums',
  hardfloor: 'Hard-floor washers',
  textile: 'Carpet & upholstery cleaners',
}

export function isFloorCareMarket(lang: string | null | undefined): lang is FloorCareMarket {
  return !!lang && (FLOOR_CARE_MARKETS as readonly string[]).includes(lang)
}

/** Path of a floor-care page inside the locale prefix ('/guides/floor-care/vacuums'). */
export function floorCarePath(guide: FloorCareGuideKey): string {
  return guide === 'hub' ? FLOOR_CARE_HUB_PATH : `${FLOOR_CARE_HUB_PATH}/${FLOOR_CARE_SLUGS[guide]}`
}

/** Every floor-care path, hub first (sitemap, tests). */
export const FLOOR_CARE_PATHS: readonly string[] = FLOOR_CARE_GUIDES.map(floorCarePath)

/** The guide a URL slug names, or null. */
export function guideForSlug(slug: string | null | undefined): FloorCareNeedKey | null {
  return FLOOR_CARE_NEEDS.find((guide) => FLOOR_CARE_SLUGS[guide] === slug) ?? null
}
