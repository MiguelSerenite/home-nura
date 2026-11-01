import { FR_HEADS } from './fr'
import { EN_HEADS } from './en'
import { DE_HEADS } from './de'
import { ES_HEADS } from './es'
import { IT_HEADS } from './it'
import { NL_HEADS } from './nl'
import { PL_HEADS } from './pl'
import { SV_HEADS } from './sv'
import { US_HEADS } from './us'
import { CA_HEADS } from './ca'
import { HEAD_LOCALES, type CategoryHead, type CategoryHeads, type HeadLocale } from './types'

export { HEAD_LOCALES, type CategoryHead, type CategoryHeads, type HeadLocale }

export const CATEGORY_HEADS: Readonly<Record<HeadLocale, CategoryHeads>> = {
  fr: FR_HEADS,
  en: EN_HEADS,
  de: DE_HEADS,
  es: ES_HEADS,
  it: IT_HEADS,
  nl: NL_HEADS,
  pl: PL_HEADS,
  sv: SV_HEADS,
  us: US_HEADS,
  ca: CA_HEADS,
}

function isHeadLocale(value: string): value is HeadLocale {
  return (HEAD_LOCALES as readonly string[]).includes(value)
}

/** The market-written head of a category hub, or undefined when none exists yet. */
export function getCategoryHead(categorySlug: string, lang: string): CategoryHead | undefined {
  // `?.`: a locale whose heads are not written yet falls back to the template.
  return isHeadLocale(lang) ? CATEGORY_HEADS[lang]?.[categorySlug] : undefined
}
