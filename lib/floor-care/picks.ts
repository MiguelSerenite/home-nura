/**
 * Helpers on floor-care picks: display name, anchor, Amazon link, robots.
 */

import { amazonMarketModelUrl } from '@/lib/amazon'
import { pickName } from '@/lib/pick-names'
import type { ProductVisualKind } from '@/lib/product-visual'
import type { FloorCareGuideKey, FloorCareMarket } from './config'
import type { FloorCareGuide, FloorCarePick } from './types'

// Name helpers are shared with the market pages (lib/pick-names.ts).
export { findPick, normalizeModelName, pickId, pickName, pickNames } from '@/lib/pick-names'

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
