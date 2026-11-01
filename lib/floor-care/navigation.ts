/**
 * Links between the floor-care pages and from the cleaning hubs.
 */

import { FLOOR_CARE_LABELS, floorCarePath, isFloorCareMarket, type FloorCareGuideKey, type FloorCareMarket } from './config'
import type { ChooserTarget } from './types'
import { FLOOR_CARE_UI } from './ui'

/** Site URL of a floor-care page ('/us/guides/floor-care/vacuums#picks'). */
export function floorCareHref(market: FloorCareMarket, guide: FloorCareGuideKey, anchor?: string): string {
  return `/${market}${floorCarePath(guide)}${anchor ? `#${anchor}` : ''}`
}

/** Pages that carry the robot clearance check. */
export function hasClearanceCheck(guide: FloorCareGuideKey): boolean {
  return guide === 'hub' || guide === 'dry'
}

/** Where a chooser answer links from the page `current`: an anchor on the same page, or another page. */
export function chooserHref(target: ChooserTarget, market: FloorCareMarket, current: FloorCareGuideKey): string {
  if (target.kind === 'clearance') return hasClearanceCheck(current) ? '#clearance' : floorCareHref(market, 'dry', 'clearance')
  if (target.guide === current && target.anchor) return `#${target.anchor}`
  return floorCareHref(market, target.guide, target.anchor)
}

/** What the reader is sent to, for the link text ("Hard-floor washers"). */
export function chooserTargetLabel(target: ChooserTarget, market: FloorCareMarket): string {
  return target.kind === 'clearance' ? FLOOR_CARE_UI[market].clearance.targetLabel : FLOOR_CARE_LABELS[target.guide]
}

/** Category hubs that link the floor-care hub on /us and /ca (robot, stick and robot mop-vacuum hubs). */
export const FLOOR_CARE_ENTRY_CATEGORIES: readonly string[] = ['aspirateurs-robots', 'aspirateurs-balais', 'aspirateurs-laveurs']
/** Silo hub that links the floor-care hub on /us and /ca. */
export const FLOOR_CARE_ENTRY_SILO = 'entretien-maison'
/** Robot hubs also link the clearance check. */
const ROBOT_CATEGORIES: readonly string[] = ['aspirateurs-robots', 'aspirateurs-laveurs']

export interface FloorCareEntryPoint {
  market: FloorCareMarket
  /** Also link the robot clearance check. */
  withClearance: boolean
}

/** Whether a silo or category hub shows the floor-care banner (US and Canada only). */
export function floorCareEntryPoint(lang: string, where: { silo?: string; category?: string }): FloorCareEntryPoint | null {
  if (!isFloorCareMarket(lang)) return null
  if (where.category !== undefined) {
    if (!FLOOR_CARE_ENTRY_CATEGORIES.includes(where.category)) return null
    return { market: lang, withClearance: ROBOT_CATEGORIES.includes(where.category) }
  }
  return where.silo === FLOOR_CARE_ENTRY_SILO ? { market: lang, withClearance: true } : null
}
