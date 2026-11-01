import { afterEach, describe, it, expect, vi } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { FLOOR_CARE_GUIDES, FLOOR_CARE_MARKETS, type FloorCareGuideKey } from '@/lib/floor-care/config'
import { getFloorCareMarket, loadFloorCareMarket } from '@/lib/floor-care/data'
import { ROBOT_GUIDES, pickName, robotPicks } from '@/lib/floor-care/picks'

const DATA_DIR = join(process.cwd(), 'data', 'floor-care')

function rawMarketFiles(market: string): Record<FloorCareGuideKey, Record<string, unknown>> {
  return Object.fromEntries(
    FLOOR_CARE_GUIDES.map((guide) => [guide, JSON.parse(readFileSync(join(DATA_DIR, `${market}-${guide}.json`), 'utf8'))]),
  ) as Record<FloorCareGuideKey, Record<string, unknown>>
}

describe('data/floor-care', () => {
  it('holds exactly one file per market and guide', () => {
    const expected = FLOOR_CARE_MARKETS.flatMap((m) => FLOOR_CARE_GUIDES.map((g) => `${m}-${g}.json`)).sort()
    expect(readdirSync(DATA_DIR).sort()).toEqual(expected)
  })

  it('carries no tracking ID and no Amazon image', () => {
    for (const name of readdirSync(DATA_DIR)) {
      const text = readFileSync(join(DATA_DIR, name), 'utf8')
      expect(text, name).not.toMatch(/tag=|homavise|homenura[a-z0-9]*-\d{2}/)
      expect(text, name).not.toMatch(/media-amazon|images-amazon/)
    }
  })
})

describe.each(FLOOR_CARE_MARKETS)('floor-care market %s', (market) => {
  const data = getFloorCareMarket(market)

  it('loads its four validated files', () => {
    for (const guide of FLOOR_CARE_GUIDES) {
      expect(data[guide].market).toBe(market)
      expect(data[guide].guide).toBe(guide)
    }
  })

  it('gives the clearance check robot vacuums and robot mops with a manufacturer height and its source', () => {
    const robots = ROBOT_GUIDES.flatMap((guide) => robotPicks(data[guide]))
    expect(robots.length).toBeGreaterThan(0)
    for (const robot of robots) {
      expect(robot.heightMm, pickName(robot)).toBeGreaterThan(0)
      expect(robot.heightSourceUrl, pickName(robot)).toMatch(/^https:\/\//)
    }
  })

  it('gives a height in millimetres to robots only', () => {
    for (const guide of FLOOR_CARE_GUIDES) {
      for (const pick of data[guide].picks) {
        expect(pick.heightMm === null, `${guide}: ${pickName(pick)}`).toBe(!pick.robot)
      }
    }
    expect(data.textile.picks.filter((p) => p.robot)).toEqual([])
  })

  it('lists the robot mops of the hard-floor guide in the clearance check, and no upright or lie-flat machine', () => {
    expect(robotPicks(data.hardfloor).length).toBeGreaterThan(0)
    const robots = new Set(ROBOT_GUIDES.flatMap((guide) => robotPicks(data[guide])).map(pickName))
    for (const pick of [...data.textile.picks, ...data.hardfloor.picks.filter((p) => !p.robot)]) {
      expect(robots.has(pickName(pick)), pickName(pick)).toBe(false)
    }
  })

  it('records store pages on this market’s own Amazon store only', () => {
    const host = market === 'us' ? 'www.amazon.com' : 'www.amazon.ca'
    for (const guide of FLOOR_CARE_GUIDES) {
      for (const pick of data[guide].picks) {
        if (pick.storeUrlSeen && pick.storeUrlSeen.includes('amazon')) expect(new URL(pick.storeUrlSeen).host, pickName(pick)).toBe(host)
      }
    }
  })

  it('rejects a hub pick that no guide reviews', () => {
    const raw = rawMarketFiles(market)
    const hub = raw.hub as { picks: Record<string, unknown>[] }
    hub.picks = [{ ...(raw.dry as { picks: Record<string, unknown>[] }).picks[0], model: 'Unreviewed Model Z' }]
    expect(() => loadFloorCareMarket(market, raw)).toThrow(/hub\.json: picks\[0\]: .*Unreviewed Model Z is not a pick of the dry, hard-floor or carpet & upholstery guide/)
  })

  it('rejects a chooser anchor the target page does not have', () => {
    const raw = rawMarketFiles(market)
    const hub = raw.hub as { chooser: { question: string; answers: { label: string; goesTo: string }[] }[] }
    hub.chooser = [{ question: 'Q', answers: [{ label: 'A', goesTo: 'textile#pick-nothing-here' }, { label: 'B', goesTo: 'dry' }] }]
    expect(() => loadFloorCareMarket(market, raw)).toThrow(/chooser\[0\]\.answers\[0\]\.goesTo: no "#pick-nothing-here" on the textile page/)
  })
})

describe('placeholder data', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('fails a production build while a fixture file remains', () => {
    const raw = rawMarketFiles('us')
    raw.dry = { ...raw.dry, _fixture: 'placeholder' }
    vi.stubEnv('VERCEL_ENV', 'production')
    expect(() => loadFloorCareMarket('us', raw)).toThrow(/placeholder data in a production build: .*data\/floor-care\/us-dry\.json/)
    vi.stubEnv('VERCEL_ENV', 'preview')
    expect(() => loadFloorCareMarket('us', raw)).not.toThrow()
  })
})

describe('local references per market', () => {
  const us = getFloorCareMarket('us')
  const ca = getFloorCareMarket('ca')

  it('lists different models or listings in the US and Canadian versions of each guide', () => {
    for (const guide of ['dry', 'hardfloor', 'textile'] as const) {
      const signature = (picks: typeof us.dry.picks) => picks.map((p) => `${pickName(p)}|${p.asin}|${p.manufacturerUrl}`).join('\n')
      expect(signature(ca[guide].picks), guide).not.toBe(signature(us[guide].picks))
    }
  })
})
