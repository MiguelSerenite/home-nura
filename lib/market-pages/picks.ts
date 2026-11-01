/**
 * Helpers on market page picks: Amazon link, neutral visual, manufacturer
 * photo.
 */

import { AMAZON_OWN_STORE_MARKETS, amazonMarketModelUrl } from '@/lib/amazon'
import type { Lang } from '@/lib/i18n'
import { pickName } from '@/lib/pick-names'
import { productPhoto } from '@/lib/product-images'
import type { ProductPhoto } from '@/lib/product-photo'
import type { ProductVisualKind } from '@/lib/product-visual'
import type { MarketPage, MarketPagePick } from './types'

/**
 * Amazon link of a pick: its product page on the reader's own store when
 * the locale links it directly (amazon.fr for /fr, amazon.it for /it) and
 * the editor saw an ASIN there; else a search for the exact model name on
 * the locale's link store with its tracking ID (lib/amazon.ts).
 */
export function marketPickUrl(pick: MarketPagePick, locale: Lang): string {
  return amazonMarketModelUrl({ model: pickName(pick), asin: pick.asin }, locale)
}

/** Neutral card icon per category landing page (the last segment of a related path). */
const CATEGORY_VISUALS: Readonly<Record<string, ProductVisualKind>> = {
  airfryers: 'airfryer',
  multicuiseurs: 'multicooker',
  'robots-multifonctions': 'multicooker',
  cafetieres: 'coffee-machine',
  balances: 'kitchen-scale',
  'thermometres-viande': 'meat-thermometer',
  'prises-connectees': 'smart-plug',
  'aspirateurs-robots': 'robot-vacuum',
  'aspirateurs-balais': 'vacuum',
  'aspirateurs-laveurs': 'floor-washer',
  'nettoyeurs-vapeur': 'floor-washer',
  thermostats: 'thermostat',
  'chauffages-appoint': 'heater',
  // US and Canadian floor-care guides.
  'floor-care': 'vacuum',
  vacuums: 'vacuum',
  'hard-floor-washers': 'floor-washer',
  'carpet-upholstery-cleaners': 'carpet-cleaner',
}

/** Icon of the page's neutral product cards: the first related category with one, else a neutral house. */
export function marketPageVisualKind(page: Pick<MarketPage, 'related'>): ProductVisualKind {
  for (const path of page.related) {
    const kind = CATEGORY_VISUALS[path.split('/').at(-1) ?? '']
    if (kind) return kind
  }
  return 'appliance'
}

/**
 * The manufacturer photo data/product-images.json already has for this
 * exact model, else undefined (neutral card). Matched on the exact name;
 * on amazon.fr / amazon.it the ASIN is the catalog's own and matches too.
 */
export function marketPickPhoto(pick: MarketPagePick, locale: Lang): ProductPhoto | undefined {
  const name = pickName(pick)
  const asin = pick.asin && AMAZON_OWN_STORE_MARKETS.includes(locale) ? pick.asin : undefined
  return productPhoto({ asin, name }, locale, name)
}
