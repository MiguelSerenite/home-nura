import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { FLOOR_CARE_GUIDES, FLOOR_CARE_MARKETS } from '@/lib/floor-care/config'
import { getFloorCareMarket, loadFloorCareMarket } from '@/lib/floor-care/data'
import { findPick, pickName, pickNames } from '@/lib/floor-care/picks'
import { findSeparationViolations } from '@/lib/floor-care/separation'
import type { FloorCareComparison, FloorCarePick } from '@/lib/floor-care/types'
import { FloorCareDataError } from '@/lib/floor-care/validate'

// « Les nouveaux modèles restent séparés des laveurs de sols durs pour éviter
// des comparaisons trompeuses » : carpet and upholstery cleaners are never
// compared with hard-floor washers, in either market.

const pick = (brand: string, model: string): FloorCarePick => ({
  brand,
  model,
  role: 'r',
  why: 'w',
  bestFor: 'b',
  asin: null,
  storeUrlSeen: null,
  manufacturerUrl: 'https://x.example',
  specs: { Type: 't' },
  heightMm: null,
  heightSourceUrl: null,
})
const table = (rows: string[][]): FloorCareComparison => ({ columns: ['Model', 'Type'], rows })

/** Fresh copies of the market's four data files, as written. */
function rawMarketFiles(market: string): Record<(typeof FLOOR_CARE_GUIDES)[number], Record<string, unknown>> {
  return Object.fromEntries(
    FLOOR_CARE_GUIDES.map((guide) => [guide, JSON.parse(readFileSync(join(process.cwd(), 'data', 'floor-care', `${market}-${guide}.json`), 'utf8'))]),
  ) as Record<(typeof FLOOR_CARE_GUIDES)[number], Record<string, unknown>>
}

const washer = pick('Acme', 'CrossWash W1')
const spotCleaner = pick('Acme', 'SpotPro S2')

describe('findSeparationViolations', () => {
  it('passes separate guides with separate tables', () => {
    expect(
      findSeparationViolations({
        hardfloor: { picks: [washer] },
        textile: { picks: [spotCleaner] },
        comparisons: { hardfloor: table([['Acme CrossWash W1', 'Washer']]), textile: table([['Acme SpotPro S2', 'Spot']]) },
      }),
    ).toEqual([])
  })

  it('flags a model listed in both guides', () => {
    expect(
      findSeparationViolations({ hardfloor: { picks: [washer] }, textile: { picks: [pick('Acme', 'CrossWash W1')] }, comparisons: {} }),
    ).toEqual(['Acme CrossWash W1 is a pick of both the hard-floor and the carpet & upholstery guides'])
  })

  it('flags a fabric cleaner in the hard-floor table and a washer in the fabric table, in any cell', () => {
    const violations = findSeparationViolations({
      hardfloor: { picks: [washer] },
      textile: { picks: [spotCleaner] },
      comparisons: {
        hardfloor: table([['Acme CrossWash W1', 'Cleaner than the SpotPro S2']]),
        textile: table([['Acme SpotPro S2', 'Like a CROSSWASH W1 for rugs']]),
      },
    })
    expect(violations).toEqual([
      'the hard-floor comparison names carpet & upholstery cleaners: Acme SpotPro S2',
      'the carpet & upholstery comparison names hard-floor washers: Acme CrossWash W1',
    ])
  })

  it('flags a hub or vacuum table that mixes the two kinds', () => {
    const violations = findSeparationViolations({
      hardfloor: { picks: [washer] },
      textile: { picks: [spotCleaner] },
      comparisons: {
        hub: table([['Job', 'Acme CrossWash W1 or Acme SpotPro S2']]),
        dry: table([['Acme CrossWash W1', 'Wet-dry']]),
      },
    })
    expect(violations).toEqual([
      'the hub comparison mixes hard-floor washers (Acme CrossWash W1) with carpet & upholstery cleaners (Acme SpotPro S2)',
    ])
  })

  it('matches whole model names only', () => {
    // "SpotPro S20" is another model, not "SpotPro S2".
    expect(
      findSeparationViolations({
        hardfloor: { picks: [washer] },
        textile: { picks: [spotCleaner] },
        comparisons: { hardfloor: table([['Acme CrossWash W1', 'Not the SpotPro S20']]) },
      }),
    ).toEqual([])
  })
})

describe.each(FLOOR_CARE_MARKETS)('floor-care data, %s', (market) => {
  const data = getFloorCareMarket(market)

  it('complies with the separation rule', () => {
    const comparisons = Object.fromEntries(FLOOR_CARE_GUIDES.map((guide) => [guide, data[guide].comparison]))
    expect(findSeparationViolations({ hardfloor: data.hardfloor, textile: data.textile, comparisons })).toEqual([])
  })

  it('has no model in both the hard-floor and the carpet & upholstery guides', () => {
    const fabric = new Set(data.textile.picks.flatMap(pickNames))
    expect(data.hardfloor.picks.filter((p) => pickNames(p).some((n) => fabric.has(n))).map(pickName)).toEqual([])
  })

  it('compares each guide’s own picks only in its table', () => {
    for (const guide of ['hardfloor', 'textile'] as const) {
      for (const row of data[guide].comparison.rows) {
        expect(findPick(data[guide].picks, row[0]), `${guide}: ${row[0]}`).toBeDefined()
      }
    }
  })

  it('fails the build when a fabric cleaner slips into the hard-floor table', () => {
    const raw = rawMarketFiles(market)
    const hard = raw.hardfloor as { comparison: { rows: string[][] } }
    const lastCell = hard.comparison.rows[0].length - 1
    hard.comparison.rows[0][lastCell] = `Versus ${pickName(data.textile.picks[0])}`
    expect(() => loadFloorCareMarket(market, raw)).toThrow(FloorCareDataError)
    expect(() => loadFloorCareMarket(market, raw)).toThrow(/hard-floor comparison names carpet & upholstery cleaners/)
  })

  it('fails the build when a model is a pick of both guides', () => {
    const raw = rawMarketFiles(market)
    const textile = raw.textile as { picks: unknown[] }
    const hardfloor = raw.hardfloor as { picks: unknown[] }
    textile.picks = [...textile.picks, structuredClone(hardfloor.picks[0])]
    expect(() => loadFloorCareMarket(market, raw)).toThrow(/is a pick of both the hard-floor and the carpet & upholstery guides/)
  })
})
