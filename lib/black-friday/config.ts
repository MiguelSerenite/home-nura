/**
 * Black Friday: dates, season window and Amazon links.
 *
 * The pages are evergreen (no year in the URL); the year only appears in
 * titles and copy. To reuse them next year: bump the constants below and
 * the dates written in the copy files (lib/black-friday/copy/*).
 */

import { amazonPageUrl } from '@/lib/amazon'
import type { Lang } from '@/lib/i18n'

/** Black Friday is the Friday after US Thanksgiving: 27 November in 2026. */
export const BLACK_FRIDAY_YEAR = 2026
export const BLACK_FRIDAY_DATE_ISO = '2026-11-27'

/**
 * The home banner and the hub link blocks only show during the season
 * (until the day after Cyber Monday, 30 November). The pages themselves
 * stay online. Evaluated at build time for statically rendered pages.
 */
const SEASON_START_ISO = '2026-10-01T00:00:00Z'
const SEASON_END_ISO = '2026-12-01T23:59:59Z'

export function isBlackFridaySeason(now: Date = new Date()): boolean {
  const time = now.getTime()
  return time >= Date.parse(SEASON_START_ISO) && time <= Date.parse(SEASON_END_ISO)
}

/** Language-relative path of the hub page. */
export const BLACK_FRIDAY_HUB_PATH = '/black-friday'

// ---------------------------------------------------------------------
// Amazon links: built with the shared helpers of lib/amazon.ts (amazon.fr
// + the Global Earning store ID, in all 6 languages), so the store and the
// tag are defined in one place and covered by tests/lib/affiliate-tags.
// Picks use amazonProductUrl / amazonSearchUrl (see ./index.ts).
// ---------------------------------------------------------------------

/** Amazon's own Black Friday event page, same link for every language. */
export const AMAZON_BLACK_FRIDAY_URL = amazonPageUrl('/blackfriday')

/**
 * Prime free-trial bounty link (Amazon pays a bounty per trial), format
 * verified in the French Associates Central. French pages only: a visitor
 * reading another language would sign up for the French store's Prime
 * instead of their own country's.
 */
export const AMAZON_PRIME_TRIAL_URL = amazonPageUrl('/amazonprime', {
  _encoding: 'UTF8',
  primeCampaignId: 'prime_assoc_ft',
})

export function primeTrialUrl(lang: Lang): string | null {
  return lang === 'fr' ? AMAZON_PRIME_TRIAL_URL : null
}
