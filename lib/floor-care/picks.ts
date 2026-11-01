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

/** Fewest words a shortened name needs to identify a pick ("Levoit LVAC-200"). */
const MIN_SHORT_NAME_WORDS = 2

/**
 * The pick a comparison row (first cell) or a hub pick names, if any: the
 * exact brand + model or model, else the one pick whose name contains
 * every word of a shortened name ("Dyson V15 Detect" for "Dyson V15
 * Detect (Yellow/Nickel)"). A shortened name two picks share names none.
 */
export function findPick(picks: readonly FloorCarePick[], name: string): FloorCarePick | undefined {
  const wanted = normalizeModelName(name)
  const exact = picks.find((pick) => pickNames(pick).includes(wanted))
  if (exact) return exact
  const words = wanted.split(' ').filter(Boolean)
  if (words.length < MIN_SHORT_NAME_WORDS) return undefined
  const matches = picks.filter((pick) => {
    const pickWords = new Set(normalizeModelName(pickName(pick)).split(' '))
    return words.every((word) => pickWords.has(word))
  })
  return matches.length === 1 ? matches[0] : undefined
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

/** Guides whose robots the clearance check lists: robot vacuums, then robot mops. */
export const ROBOT_GUIDES = ['dry', 'hardfloor'] as const satisfies readonly FloorCareGuideKey[]
export type RobotGuideKey = (typeof ROBOT_GUIDES)[number]

/** A guide's robots ("robot": true), each with its manufacturer height. */
export function robotPicks(guide: FloorCareGuide): (FloorCarePick & { heightMm: number })[] {
  return guide.picks.filter((pick): pick is FloorCarePick & { heightMm: number } => pick.robot && pick.heightMm !== null)
}

/** Neutral product card icon (components/ProductVisual) of a pick, by guide. */
export function pickVisualKind(guide: FloorCareGuideKey, pick: FloorCarePick): ProductVisualKind {
  if (pick.robot) return 'robot-vacuum'
  if (guide === 'hardfloor') return 'floor-washer'
  if (guide === 'textile') return 'carpet-cleaner'
  return 'vacuum'
}
