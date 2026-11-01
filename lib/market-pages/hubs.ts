/**
 * Category hubs of the market pages: the category landing pages
 * (/{silo}/{category}, /cuisine-connectee/{category}, /guides/airfryers)
 * and, in the US and Canada, the floor-care guides. A market page's first
 * related hub is its main one: its breadcrumb parent, and the hub whose
 * "Comparisons & guides" list (components/market-pages/HubList.tsx)
 * shows it. Writers put the main category hub first.
 */

import { CATEGORIES, categoryPath } from '@/lib/catalog'
import { FLOOR_CARE_GUIDES, FLOOR_CARE_LABELS, floorCarePath } from '@/lib/floor-care/config'
import type { Lang } from '@/lib/i18n'
import { sitePathsFor } from './site-paths'
import type { MarketPage } from './types'

export interface MarketPageHub {
  /** Label of the hub in the page's locale (the category title). */
  name: string
  /** Path inside the locale prefix ('/guides/airfryers'). */
  path: string
}

const cache = new Map<Lang, ReadonlyMap<string, string>>()

/** Hub path inside the locale prefix → its label, for the hubs `lang` serves. */
export function hubsOf(lang: Lang): ReadonlyMap<string, string> {
  const cached = cache.get(lang)
  if (cached) return cached
  const served = sitePathsFor(lang)
  const entries: [string, string][] = [
    ...CATEGORIES.map((category): [string, string] => [categoryPath(category), category.title[lang]]),
    ...FLOOR_CARE_GUIDES.map((guide): [string, string] => [floorCarePath(guide), FLOOR_CARE_LABELS[guide]]),
  ].filter(([path]) => served.has(`/${lang}${path}`))
  const hubs = new Map(entries)
  cache.set(lang, hubs)
  return hubs
}

/** The hubs a page's related links name, in the writer's order. */
export function hubsOfPage(page: Pick<MarketPage, 'locale' | 'related'>): MarketPageHub[] {
  const hubs = hubsOf(page.locale)
  return page.related.flatMap((href) => {
    const path = href.slice(`/${page.locale}`.length)
    const name = hubs.get(path)
    return name ? [{ name, path }] : []
  })
}

/** Breadcrumb parent of a page: its first related hub, if any. */
export function primaryHub(page: Pick<MarketPage, 'locale' | 'related'>): MarketPageHub | null {
  return hubsOfPage(page)[0] ?? null
}
