/**
 * Rules for category heads, shared by the unit test and the writers'
 * check script (scripts/seo/check-category-heads.ts).
 */
import type { CategoryHead } from './types'

export const HEAD_TITLE_MIN = 30
export const HEAD_TITLE_MAX = 60
export const HEAD_DESCRIPTION_MIN = 120
export const HEAD_DESCRIPTION_MAX = 155
const H1_MAX = 80

/** Same rule as the FAQs: Home Nura runs no lab, so no "test" word anywhere. */
const TEST_CLAIM = /(^|[^\p{L}])(test|getest|przetest|probad[oa]s?\b|probamos)/iu

/** Lowercase without diacritics, for keyword matching ("Heißluft" ≈ "heissluft" is not attempted). */
export const fold = (text: string) =>
  text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()

export function checkCategoryHead(at: string, head: CategoryHead): string[] {
  const errors: string[] = []
  const { keyword, title, h1, description } = head
  if (title.length < HEAD_TITLE_MIN || title.length > HEAD_TITLE_MAX)
    errors.push(`${at}: title is ${title.length} characters (${HEAD_TITLE_MIN}-${HEAD_TITLE_MAX})`)
  if (description.length < HEAD_DESCRIPTION_MIN || description.length > HEAD_DESCRIPTION_MAX)
    errors.push(`${at}: description is ${description.length} characters (${HEAD_DESCRIPTION_MIN}-${HEAD_DESCRIPTION_MAX})`)
  if (h1.length > H1_MAX) errors.push(`${at}: h1 longer than ${H1_MAX} characters`)
  if (!title.includes('2026')) errors.push(`${at}: title must say 2026`)
  if (!fold(title).includes(fold(keyword))) errors.push(`${at}: title must contain the keyword "${keyword}"`)
  if (/home ?nura/i.test(title)) errors.push(`${at}: the brand suffix is added by the page`)
  for (const [field, text] of Object.entries({ keyword, title, h1, description })) {
    if (TEST_CLAIM.test(text)) errors.push(`${at}: ${field} uses a "test" word`)
    if (text !== text.trim() || text.length === 0) errors.push(`${at}: ${field} is empty or padded`)
  }
  return errors
}
