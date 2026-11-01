import { ENERGIE_A_FAQS } from './energie-a'
import { ENERGIE_B_FAQS } from './energie-b'
import { SECURITE_FAQS } from './securite'
import { CONFORT_AIR_FAQS } from './confort-air'
import { ENTRETIEN_FAQS } from './entretien'
import { OUTDOOR_FAQS } from './outdoor'
import { CUISINE_FAQS } from './cuisine'
import { CUISINE_B_FAQS } from './cuisine-b'
import { FAQ_LOCALES, type CategoryFaqEntry, type CategoryFaqSets, type FaqLocale } from './types'

export { FAQ_LOCALES, type CategoryFaqEntry, type CategoryFaqSets, type FaqLocale }

/**
 * Day each locale's category FAQs were last reviewed, shown on the page and
 * in FAQPage dateModified. Bump a locale when its FAQs are reviewed.
 */
export const CATEGORY_FAQS_UPDATED_ISO: Readonly<Record<FaqLocale, string>> = {
  fr: '2026-10-30',
  en: '2026-11-01',
  de: '2026-11-01',
  es: '2026-11-01',
  it: '2026-11-01',
  nl: '2026-11-01',
  pl: '2026-11-01',
  sv: '2026-11-01',
  us: '2026-11-01',
  ca: '2026-11-01',
}

/** The newest review, for an entry that stands for every locale at once. */
const LATEST_FAQ_REVIEW_ISO = Object.values(CATEGORY_FAQS_UPDATED_ISO).toSorted().at(-1) ?? ''

export const CATEGORY_FAQS: CategoryFaqSets = {
  ...ENERGIE_A_FAQS,
  ...ENERGIE_B_FAQS,
  ...SECURITE_FAQS,
  ...CONFORT_AIR_FAQS,
  ...ENTRETIEN_FAQS,
  ...OUTDOOR_FAQS,
  ...CUISINE_FAQS,
  ...CUISINE_B_FAQS,
}

function isFaqLocale(value: string): value is FaqLocale {
  return (FAQ_LOCALES as readonly string[]).includes(value)
}

/** The market-specific FAQ of a category, or undefined when none is written yet. */
export function getCategorySpecificFaq(
  categorySlug: string,
  lang: string,
): readonly CategoryFaqEntry[] | undefined {
  if (!isFaqLocale(lang)) return undefined
  const entries = CATEGORY_FAQS[categorySlug]?.[lang]
  return entries && entries.length > 0 ? entries : undefined
}

/**
 * Last-modified date of a category hub: the FAQ review date in `lang` (the
 * newest one without a locale) when the hub shows a written FAQ and it is
 * newer than the site-wide date.
 */
export function categoryModifiedIso(categorySlug: string, siteIso: string, lang?: string): string {
  if (CATEGORY_FAQS[categorySlug] === undefined) return siteIso
  const reviewed = lang !== undefined && isFaqLocale(lang) ? CATEGORY_FAQS_UPDATED_ISO[lang] : LATEST_FAQ_REVIEW_ISO
  return reviewed > siteIso ? reviewed : siteIso
}
