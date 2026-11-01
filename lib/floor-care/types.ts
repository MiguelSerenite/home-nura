/**
 * Shape of the floor-care data files (data/floor-care/{market}-{guide}.json),
 * after validation by lib/floor-care/validate.ts.
 */

import type { FloorCareGuideKey, FloorCareMarket } from './config'
import type { RichTextBlock } from './html'

/** One model a guide recommends. Every spec comes from the manufacturer's page for that market. */
export interface FloorCarePick {
  brand: string
  /** Model name as sold in the market, with its model number ("Little Green Max Pet 3860B"). */
  model: string
  /** Its role in the selection ("Best for pet stains"). */
  role: string
  why: string
  bestFor: string
  /** ASIN on the market's own store (amazon.com / amazon.ca); null when the model is not listed there. */
  asin: string | null
  /** Store page where the editor saw the listing (provenance only, never rendered). */
  storeUrlSeen: string | null
  /** The model's page on the manufacturer's site for that market. */
  manufacturerUrl: string
  /** Spec name → value, from the manufacturer ("Tank capacity" → "8 oz (237 mL)"). */
  specs: Readonly<Record<string, string>>
  /** A robot vacuum or robot mop: the under-furniture clearance check lists it. */
  robot: boolean
  /** Manufacturer height in millimetres, robots only: compared with the reader's clearance as is. */
  heightMm: number | null
  /** Page stating that height. */
  heightSourceUrl: string | null
}

export interface FloorCareSection {
  h2: string
  /** The section body, parsed from the file's `html` (p, ul, li, strong, em only). */
  blocks: readonly RichTextBlock[]
  /** Link closing the section (`path` + `linkLabel` in the file): another floor-care page. */
  link: { target: ChooserTarget; label: string } | null
}

export interface FloorCareComparison {
  columns: readonly string[]
  /** Each row starts with the model it describes (a pick of the same guide, hub excepted). */
  rows: readonly (readonly string[])[]
}

/** Where a chooser answer sends the reader. */
export type ChooserTarget =
  | { kind: 'guide'; guide: FloorCareGuideKey; anchor?: string }
  | { kind: 'clearance' }

export interface ChooserAnswer {
  label: string
  goesTo: ChooserTarget
}

export interface ChooserQuestion {
  question: string
  /** Hint under the question (`helper` in the file). */
  helper: string | null
  /**
   * The robot clearance question (it names a `unit`): the page renders it
   * as the clearance check, its answers as rules of thumb.
   */
  clearance: boolean
  answers: readonly ChooserAnswer[]
}

export interface FloorCareFaq {
  q: string
  a: string
}

/** Copy of the banner that links the hub from the cleaning hubs (hub file only, optional). */
export interface FloorCareEntryBanner {
  title: string
  text: string
}

export interface FloorCareGuide {
  market: FloorCareMarket
  guide: FloorCareGuideKey
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  sections: readonly FloorCareSection[]
  picks: readonly FloorCarePick[]
  comparison: FloorCareComparison
  chooser: readonly ChooserQuestion[]
  faq: readonly FloorCareFaq[]
  sources: readonly string[]
  entryBanner: FloorCareEntryBanner | null
  /** True for the placeholder files shipped before the writers' content (key `_fixture`). */
  isFixture: boolean
}

/** The four files of one market. */
export type FloorCareMarketData = Readonly<Record<FloorCareGuideKey, FloorCareGuide>>

