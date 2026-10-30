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

/** Bump when the category FAQs are reviewed: shown on the page and in FAQPage dateModified. */
export const CATEGORY_FAQS_UPDATED_ISO = '2026-10-30'

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
 * Last-modified date of a category hub: the FAQ review date when the hub
 * shows a written FAQ and it is newer than the site-wide date.
 */
export function categoryModifiedIso(categorySlug: string, siteIso: string): string {
  const hasFaq = CATEGORY_FAQS[categorySlug] !== undefined
  return hasFaq && CATEGORY_FAQS_UPDATED_ISO > siteIso ? CATEGORY_FAQS_UPDATED_ISO : siteIso
}
