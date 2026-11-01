/**
 * Separation rule: carpet and upholstery cleaners (textile guide) are never
 * compared with hard-floor washers (hard-floor guide). They do different
 * jobs, so a table ranking one against the other would mislead.
 *
 * - no model is a pick of both guides;
 * - no comparison table of the market (hub or guide) names models of both
 *   guides, and each of the two guides' tables names none of the other's.
 *
 * Checked when the data loads (lib/floor-care/data.ts fails the build) and
 * in tests/lib/floor-care/separation.test.ts.
 */

import type { FloorCareGuideKey } from './config'
import { normalizeModelName, pickName, pickNames } from './picks'
import type { FloorCareComparison, FloorCarePick } from './types'

interface SeparationInput {
  readonly hardfloor: { readonly picks: readonly FloorCarePick[] }
  readonly textile: { readonly picks: readonly FloorCarePick[] }
  /** Every comparison table of the market, by file. */
  readonly comparisons: Readonly<Partial<Record<FloorCareGuideKey, FloorCareComparison>>>
}

/** True when `cell` names the model (whole words, case and punctuation ignored). */
function mentions(cell: string, names: readonly string[]): boolean {
  const haystack = ` ${normalizeModelName(cell)} `
  return names.some((name) => name !== '' && haystack.includes(` ${name} `))
}

/** Picks of `picks` that a table names in any cell. */
function namedIn(table: FloorCareComparison, picks: readonly FloorCarePick[]): string[] {
  const cells = [...table.columns, ...table.rows.flat()]
  return picks.filter((pick) => cells.some((cell) => mentions(cell, pickNames(pick)))).map(pickName)
}

/** Every breach of the separation rule, as readable sentences (empty when the data complies). */
export function findSeparationViolations({ hardfloor, textile, comparisons }: SeparationInput): string[] {
  const violations: string[] = []
  const textileNames = new Set(textile.picks.flatMap(pickNames))
  for (const pick of hardfloor.picks) {
    if (pickNames(pick).some((name) => textileNames.has(name))) {
      violations.push(`${pickName(pick)} is a pick of both the hard-floor and the carpet & upholstery guides`)
    }
  }
  for (const [file, table] of Object.entries(comparisons)) {
    if (!table) continue
    const hard = namedIn(table, hardfloor.picks)
    const fabric = namedIn(table, textile.picks)
    if (file === 'hardfloor' && fabric.length > 0) {
      violations.push(`the hard-floor comparison names carpet & upholstery cleaners: ${fabric.join(', ')}`)
    } else if (file === 'textile' && hard.length > 0) {
      violations.push(`the carpet & upholstery comparison names hard-floor washers: ${hard.join(', ')}`)
    } else if (hard.length > 0 && fabric.length > 0) {
      violations.push(`the ${file} comparison mixes hard-floor washers (${hard.join(', ')}) with carpet & upholstery cleaners (${fabric.join(', ')})`)
    }
  }
  return violations
}
