/**
 * What a country switch needs to know about the market pages, computed on
 * the server (the client never loads the market page data):
 *
 *   - marketHubsFor(lang): each market page of `lang` → its main category
 *     hub (primaryHub), the page a reader switching to another version
 *     lands on (lib/i18n.ts switchLocale);
 *   - arrivalLabelsFor(lang): the title, in `lang`, of every page a switch
 *     to `lang` can land on instead of the page being read (those hubs,
 *     and the cleaning hub that stands in for the floor-care guides), for
 *     the arrival notice ("Here is our “Robot vacuums” guide for the UK").
 */

import { LOCALE_LIMITED_SECTIONS, switchLocale, type Lang } from '@/lib/i18n'
import { getMarketPages, marketPageHref } from './data'
import { primaryHub } from './hubs'
import { sitePagesFor } from './site-paths'
import type { MarketPage } from './types'

/** Main category hub of a market page (path inside its locale prefix), or null. */
export function marketHubOf(page: Pick<MarketPage, 'locale' | 'related'>): string | null {
  return primaryHub(page)?.path ?? null
}

/** Market page href ('/us/vs/ring-vs-blink') → its main hub ('/securite-maison/sonnettes-video'), for `lang`'s pages. */
export function marketHubsFor(lang: Lang, pages: readonly MarketPage[] = getMarketPages()): Readonly<Record<string, string>> {
  return Object.fromEntries(
    pages.filter((page) => page.locale === lang).flatMap((page) => {
      const hub = marketHubOf(page)
      return hub ? [[marketPageHref(page), hub]] : []
    }),
  )
}

/** Path inside the locale prefix → title in `lang`, for every page a switch to `lang` lands on instead. */
export function arrivalLabelsFor(lang: Lang, pages: readonly MarketPage[] = getMarketPages()): Readonly<Record<string, string>> {
  const site = sitePagesFor(lang)
  const targets = new Set<string>(LOCALE_LIMITED_SECTIONS.filter(({ langs }) => !langs.includes(lang)).map(({ fallback }) => fallback))
  for (const page of pages) {
    if (page.locale === lang) continue
    const { path, reason } = switchLocale(marketPageHref(page), lang, { marketHub: marketHubOf(page) })
    if (reason === 'market') targets.add(path.slice(`/${lang}`.length))
  }
  return Object.fromEntries(
    [...targets].sort().flatMap((path) => {
      const label = site.get(`/${lang}${path}`)
      return label ? [[path, label]] : []
    }),
  )
}

