/**
 * Interface copy of the floor-care pages, per market (US and Canadian
 * spelling). Editorial content lives in data/floor-care.
 */

import type { FloorCareGuideKey, FloorCareMarket, FloorCareNeedKey } from './config'

export interface FloorCareNeedCopy {
  /** The job ("Dry vacuuming"). */
  title: string
  /** What it deals with. */
  covers: string
  /** The machines its guide compares. */
  machines: string
}

export interface FloorCareUi {
  home: string
  kicker: string
  needsTitle: string
  needs: Readonly<Record<FloorCareNeedKey, FloorCareNeedCopy>>
  readGuide: string
  topPick: string
  picksTitle: string
  bestFor: string
  height: string
  manufacturerPage: string
  notOnAmazon: string
  disclosureNote: string
  comparisonTitle: Readonly<Record<FloorCareGuideKey, string>>
  /** Shown under the hard-floor and fabric tables: the other machines are compared elsewhere. */
  separateNote: Readonly<Partial<Record<FloorCareNeedKey, string>>>
  amazonColumn: string
  chooserTitle: string
  chooserGoTo: string
  faqTitle: string
  sourcesTitle: string
  siblingsTitle: string
  /** What a robot of each guide is, in the clearance check. */
  robotKind: Readonly<Record<'dry' | 'hardfloor', string>>
  clearance: ClearanceUi
}

export interface ClearanceUi {
  title: string
  intro: string
  unitLegend: string
  unitNames: Readonly<Record<'in' | 'cm', string>>
  inputLabel: string
  inputHint: string
  /** "With 3.7 in (93.98 mm) of clearance, 2 of the 3 robots fit:" */
  summary: (clearance: string, fits: number, total: number) => string
  fitsTitle: string
  tooTallTitle: string
  tipsTitle: string
  noneFit: string
  empty: string
  invalid: string
  outOfRange: string
  method: string
  targetLabel: string
}

const NEEDS: Readonly<Record<FloorCareNeedKey, FloorCareNeedCopy>> = {
  dry: {
    title: 'Dry vacuuming',
    covers: 'Dust, crumbs and hair, on every floor',
    machines: 'Robot, stick and upright vacuums',
  },
  hardfloor: {
    title: 'Hard-floor washing',
    covers: 'Sealed floors: tile, vinyl, sealed hardwood',
    machines: 'Wet-dry vacuums, steam mops and robot mops',
  },
  textile: {
    title: 'Fabric cleaning',
    covers: 'Stains, pets, carpets and upholstery',
    machines: 'Spot cleaners and upright carpet cleaners',
  },
}

const COMPARISON_TITLE: Readonly<Record<FloorCareGuideKey, string>> = {
  hub: 'Which machine for which job',
  dry: 'Vacuums compared',
  hardfloor: 'Hard-floor washers compared',
  textile: 'Carpet & upholstery cleaners compared',
}

const SEPARATE_NOTE: Readonly<Partial<Record<FloorCareNeedKey, string>>> = {
  hardfloor:
    'Carpet and upholstery cleaners do a different job and are compared on their own page, never in this table.',
  textile: 'Hard-floor washers do a different job and are compared on their own page, never in this table.',
}

function clearanceUi(market: FloorCareMarket): ClearanceUi {
  const cm = market === 'us' ? 'centimeters' : 'centimetres'
  return {
    title: 'Will a robot vacuum or robot mop fit under your furniture?',
    intro:
      market === 'us'
        ? 'Measure the gap under your lowest sofa, bed or cabinet, in inches (or centimeters). We compare it with each robot’s height as published by its manufacturer, in millimeters.'
        : 'Measure the gap under your lowest sofa, bed or cabinet, in centimetres (or inches). We compare it with each robot’s height as published by its manufacturer, in millimetres.',
    unitLegend: 'Unit',
    unitNames: { in: 'inches', cm },
    inputLabel: 'Clearance under your furniture',
    inputHint: 'From the floor to the underside of the frame, at its lowest point.',
    summary: (clearance, fits, total) =>
      `With ${clearance} of clearance, ${fits} of the ${total} robot${total === 1 ? '' : 's'} in our guides fit${fits === 1 ? 's' : ''}.`,
    fitsTitle: 'Fits under',
    tooTallTitle: 'Too tall',
    tipsTitle: 'Rules of thumb',
    noneFit: 'None of our robots fits under this clearance.',
    empty: 'Enter your clearance to see which robots fit.',
    invalid: market === 'us' ? 'Enter a number, for example 3.5.' : 'Enter a number, for example 9.5.',
    outOfRange: market === 'us' ? 'Enter a clearance above 0 and up to 1 meter.' : 'Enter a clearance above 0 and up to 1 metre.',
    method:
      market === 'us'
        ? 'Heights are the manufacturers’ figures in millimeters, used as published: your choice of unit never changes them. Leave a little margin for thick rugs.'
        : 'Heights are the manufacturers’ figures in millimetres, used as published: your choice of unit never changes them. Leave a little margin for thick rugs.',
    targetLabel: 'Check the clearance under your furniture',
  }
}

function ui(market: FloorCareMarket): FloorCareUi {
  return {
    home: 'Home',
    kicker: 'Floor care',
    needsTitle: 'Three jobs, three kinds of machines',
    needs: NEEDS,
    readGuide: 'Read the guide',
    topPick: 'Top pick',
    picksTitle: 'Our picks',
    bestFor: 'Best for',
    height: 'Height',
    manufacturerPage: 'Manufacturer’s page',
    notOnAmazon: market === 'us' ? 'Not listed on Amazon in the US when we checked.' : 'Not listed on Amazon in Canada when we checked.',
    disclosureNote:
      market === 'us'
        ? 'Amazon affiliate links: we earn a commission at no extra cost to you.'
        : 'Amazon affiliate links: commission at no extra cost to you.',
    comparisonTitle: COMPARISON_TITLE,
    separateNote: SEPARATE_NOTE,
    amazonColumn: 'Link',
    chooserTitle: 'Find the right guide',
    chooserGoTo: 'Go to',
    faqTitle: 'Frequently asked questions',
    sourcesTitle: 'Sources',
    siblingsTitle: 'The other floor-care guides',
    robotKind: { dry: 'Robot vacuum', hardfloor: 'Robot mop' },
    clearance: clearanceUi(market),
  }
}

export const FLOOR_CARE_UI: Readonly<Record<FloorCareMarket, FloorCareUi>> = { us: ui('us'), ca: ui('ca') }
