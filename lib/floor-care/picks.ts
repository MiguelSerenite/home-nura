/**
 * Helpers on floor-care picks: display name, anchor, Amazon link, robots.
 */

import { amazonMarketModelUrl } from '@/lib/amazon'
import type { ProductVisualKind } from '@/lib/product-visual'
import type { FloorCareGuideKey, FloorCareMarket } from './config'
import type { FloorCareGuide, FloorCarePick } from './types'

/** "BISSELL Little Green Max Pet 3860": the brand, then the model unless it already starts with it. */
export function pickName(pick: Pick<FloorCarePick, 'brand' | 'model'>): string {
  return pick.model.toLowerCase().startsWith(pick.brand.toLowerCase()) ? pick.model : `${pick.brand} ${pick.model}`
}

/** Lowercase, accents, ® / ™ and punctuation dropped: how model names are matched. */
export function normalizeModelName(name: string): string {
  return name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[®™©]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

/** Anchor of a pick card ("pick-bissell-little-green-max-pet-3860"). */
export function pickId(pick: Pick<FloorCarePick, 'brand' | 'model'>): string {
  return `pick-${normalizeModelName(pickName(pick)).replace(/ /g, '-')}`
}

/** Names a pick answers to in a comparison: brand + model, and the model alone. */
export function pickNames(pick: Pick<FloorCarePick, 'brand' | 'model'>): string[] {
  return [...new Set([normalizeModelName(pickName(pick)), normalizeModelName(pick.model)])]
}

/** The pick a comparison row (first cell) or a hub pick names, if any. */
export function findPick(picks: readonly FloorCarePick[], name: string): FloorCarePick | undefined {
  const wanted = normalizeModelName(name)
  return picks.find((pick) => pickNames(pick).includes(wanted))
}

/**
 * Amazon link of a pick on its market (search for the exact model, see
 * amazonMarketModelUrl), or null when the model has no listing on that
 * market's store (asin null): the card then links the manufacturer only,
 * never an Amazon search for a model Amazon does not sell there.
 */
export function pickAmazonUrl(pick: FloorCarePick, market: FloorCareMarket): string | null {
  if (pick.asin === null) return null
  return amazonMarketModelUrl({ model: pickName(pick), asin: pick.asin }, market)
}

/** Robots of the vacuum guide: the picks with a manufacturer height. */
export function robotPicks(guide: FloorCareGuide): FloorCarePick[] {
  return guide.picks.filter((pick) => pick.heightMm !== null)
}

/** Neutral product card icon (components/ProductVisual) of a pick, by guide. */
export function pickVisualKind(guide: FloorCareGuideKey, pick: FloorCarePick): ProductVisualKind {
  if (guide === 'hardfloor') return 'floor-washer'
  if (guide === 'textile') return 'carpet-cleaner'
  return pick.heightMm !== null ? 'robot-vacuum' : 'vacuum'
}
