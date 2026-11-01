/**
 * Floor-care data loader: the eight files of data/floor-care, validated
 * when this module loads (at build time), so bad data fails the build.
 *
 * To replace a file, drop the writers' JSON at the same path
 * (data/floor-care/{us|ca}-{hub|dry|hardfloor|textile}.json) and run the
 * tests: every error names the file, the field and what is expected.
 */

import caDry from '@/data/floor-care/ca-dry.json'
import caHardfloor from '@/data/floor-care/ca-hardfloor.json'
import caHub from '@/data/floor-care/ca-hub.json'
import caTextile from '@/data/floor-care/ca-textile.json'
import usDry from '@/data/floor-care/us-dry.json'
import usHardfloor from '@/data/floor-care/us-hardfloor.json'
import usHub from '@/data/floor-care/us-hub.json'
import usTextile from '@/data/floor-care/us-textile.json'
import {
  FLOOR_CARE_GUIDES,
  FLOOR_CARE_MARKETS,
  FLOOR_CARE_NEEDS,
  type FloorCareGuideKey,
  type FloorCareMarket,
  type FloorCareNeedKey,
} from './config'
import { ROBOT_GUIDES, findPick, pickId, pickName, robotPicks } from './picks'
import { findSeparationViolations } from './separation'
import type { FloorCareGuide, FloorCareMarketData, FloorCarePick } from './types'
import { hasClearanceCheck } from './navigation'
import { FloorCareDataError, floorCareDataFile, parseFloorCareGuide } from './validate'

export type RawMarketFiles = Readonly<Record<FloorCareGuideKey, unknown>>

const RAW_FILES: Readonly<Record<FloorCareMarket, RawMarketFiles>> = {
  us: { hub: usHub, dry: usDry, hardfloor: usHardfloor, textile: usTextile },
  ca: { hub: caHub, dry: caDry, hardfloor: caHardfloor, textile: caTextile },
}

/** The guide a hub pick comes from (its model is a pick of that guide), or null. */
export function needOfHubPick(data: FloorCareMarketData, pick: FloorCarePick): FloorCareNeedKey | null {
  return FLOOR_CARE_NEEDS.find((need) => findPick(data[need].picks, pickName(pick))) ?? null
}

/** Hub picks must be picks of one of the three guides: the hub never introduces an unreviewed model. */
function checkHubPicks(data: FloorCareMarketData): string[] {
  return data.hub.picks.flatMap((pick, i) =>
    needOfHubPick(data, pick)
      ? []
      : [`${floorCareDataFile(data.hub.market, 'hub')}: picks[${i}]: ${pickName(pick)} is not a pick of the dry, hard-floor or carpet & upholstery guide`],
  )
}

/** Anchors a floor-care page renders (components/floor-care), for chooser links. */
export function pageAnchors(page: FloorCareGuide): Set<string> {
  const anchors = new Set<string>()
  if (page.guide !== 'hub') {
    anchors.add('picks')
    for (const pick of page.picks) anchors.add(pickId(pick))
  }
  if (page.comparison.rows.length > 0) anchors.add('comparison')
  if (page.chooser.length > 0) anchors.add('chooser')
  if (page.faq.length > 0) anchors.add('faq')
  if (page.sources.length > 0) anchors.add('sources')
  if (hasClearanceCheck(page.guide)) anchors.add('clearance')
  return anchors
}

/** Chooser anchors must exist on the page they point to. */
function checkChooserAnchors(data: FloorCareMarketData): string[] {
  return FLOOR_CARE_GUIDES.flatMap((file) =>
    data[file].chooser.flatMap((question, q) =>
      question.answers.flatMap((answer, a) => {
        const target = answer.goesTo
        if (target.kind !== 'guide' || target.anchor === undefined) return []
        const anchors = pageAnchors(data[target.guide])
        return anchors.has(target.anchor)
          ? []
          : [`${floorCareDataFile(data[file].market, file)}: chooser[${q}].answers[${a}].goesTo: no "#${target.anchor}" on the ${target.guide} page (anchors: ${[...anchors].join(', ')})`]
      }),
    ),
  )
}

/**
 * Validates the four files of a market, then the rules that span files:
 * hub picks, chooser anchors, the hard-floor / fabric separation, and no
 * placeholder file in a production build.
 */
export function loadFloorCareMarket(market: FloorCareMarket, raw: RawMarketFiles = RAW_FILES[market]): FloorCareMarketData {
  const data = Object.fromEntries(
    FLOOR_CARE_GUIDES.map((guide) => [guide, parseFloorCareGuide(raw[guide], market, guide)]),
  ) as Record<FloorCareGuideKey, FloorCareGuide>

  const separation = findSeparationViolations({
    hardfloor: data.hardfloor,
    textile: data.textile,
    comparisons: Object.fromEntries(FLOOR_CARE_GUIDES.map((guide) => [guide, data[guide].comparison])),
  }).map((violation) => `data/floor-care/${market}-*.json: ${violation}`)

  const robots = ROBOT_GUIDES.flatMap((guide) => robotPicks(data[guide]))
  const noRobot = robots.length === 0 ? [`data/floor-care/${market}-*.json: no robot ("robot": true with heightMm) in the vacuum or hard-floor guide for the clearance check`] : []
  const problems = [...checkHubPicks(data), ...checkChooserAnchors(data), ...separation, ...noRobot]
  if (problems.length > 0) throw new FloorCareDataError(problems.join('\n'))

  const fixtures = FLOOR_CARE_GUIDES.filter((guide) => data[guide].isFixture)
  if (fixtures.length > 0 && process.env.VERCEL_ENV === 'production') {
    throw new FloorCareDataError(
      `placeholder data in a production build: ${fixtures.map((guide) => floorCareDataFile(market, guide)).join(', ')} (key "_fixture")`,
    )
  }
  return data
}

const MARKETS: Readonly<Record<FloorCareMarket, FloorCareMarketData>> = Object.fromEntries(
  FLOOR_CARE_MARKETS.map((market) => [market, loadFloorCareMarket(market)]),
) as Record<FloorCareMarket, FloorCareMarketData>

export function getFloorCareMarket(market: FloorCareMarket): FloorCareMarketData {
  return MARKETS[market]
}

export function getFloorCareGuide(market: FloorCareMarket, guide: FloorCareGuideKey): FloorCareGuide {
  return MARKETS[market][guide]
}
