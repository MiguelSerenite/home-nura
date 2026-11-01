/**
 * The entry page (/): which versions it proposes first.
 *
 * Google's guidance for multi-regional sites: never force a redirect by IP
 * or browser language, let people (and crawlers) reach every version.
 * So / is an international entry page, the x-default of the home pages,
 * listing the ten versions, with the visitor's relevant ones first:
 *
 *   1. the IP country (Vercel geo) when it has versions of its own:
 *      COUNTRY_LANGS order (Belgium fr then nl, Switzerland de, fr, it,
 *      Canada ca then fr, Ireland and Oceania en), proposed prominently;
 *   2. any other country: the versions of the browser's languages
 *      (Accept-Language order) first, nothing preselected;
 *   3. crawlers: the plain list, the same for every crawl.
 *
 * A visitor who already chose a version (hn_market) never sees it:
 * proxy.ts sends them to their version. Pure functions: tests cover them.
 */

import { COUNTRY_LANGS, MARKET_VERSIONS, countryVariant, langForLanguageTag, type Lang } from '@/lib/i18n'

/**
 * Search engines, social previews and SEO tools. An empty user agent is
 * treated as a crawler too. Headless browsers (the e2e suite) are visitors.
 */
const CRAWLER_USER_AGENT =
  /bot\b|bot\/|crawler|spider|slurp|mediapartners|adsbot|google-inspectiontool|googleother|storebot|feedfetcher|facebookexternalhit|facebookcatalog|embedly|quora link preview|outbrain|pinterest|vkshare|w3c_validator|whatsapp|telegrambot|discordbot|skypeuripreview|redditbot|bingpreview|ia_archiver|lighthouse|pagespeed|gtmetrix|semrush|ahrefs|mj12bot|dotbot|petalbot|yandex|baiduspider|duckduckgo|sogou|seznam|qwant|applebot|archive\.org/i

export function isCrawlerUserAgent(userAgent: string | null | undefined): boolean {
  return !userAgent?.trim() || CRAWLER_USER_AGENT.test(userAgent)
}

/** Display order of the versions (the country selector's order). */
export const VERSION_ORDER: readonly Lang[] = MARKET_VERSIONS.map((version) => version.code)

/**
 * Versions of the browser's languages, best first ("de-CH,fr;q=0.8" →
 * de, fr). Tags with q=0 are refused, not wanted. Within one language
 * the country picks the version (an en-US browser in Japan reads /en,
 * the international English version), as lib/i18n countryVariant does.
 */
export function browserVersions(acceptLanguage: string | null | undefined, country?: string | null): Lang[] {
  if (!acceptLanguage) return []
  const ranked = acceptLanguage
    .split(',')
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(';')
      const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='))
      const quality = q === undefined ? 1 : Number.parseFloat(q.slice(2))
      return { tag: tag.trim(), quality: Number.isFinite(quality) ? quality : 0, index }
    })
    .filter(({ tag, quality }) => tag !== '' && tag !== '*' && quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index)
  const versions: Lang[] = []
  for (const { tag } of ranked) {
    const lang = langForLanguageTag(tag)
    if (!lang) continue
    const version = countryVariant(lang, country)
    if (!versions.includes(version)) versions.push(version)
  }
  return versions
}

export interface EntryChoices {
  /** What ordered the list: the IP country, the browser's languages, or nothing (crawlers, unknown). */
  basis: 'country' | 'browser' | 'none'
  /** Versions proposed first and prominently (IP country only): COUNTRY_LANGS order. */
  suggested: Lang[]
  /** Every other version, in order (browser languages first when that is the basis). */
  others: Lang[]
  /** Language of the page's own copy: the first proposed version's, else null (English). */
  copyLang: Lang | null
}

export interface EntryRequest {
  /** x-vercel-ip-country. */
  country?: string | null
  acceptLanguage?: string | null
  userAgent?: string | null
}

const rest = (first: readonly Lang[]) => VERSION_ORDER.filter((lang) => !first.includes(lang))

export function entryChoices({ country, acceptLanguage, userAgent }: EntryRequest): EntryChoices {
  if (isCrawlerUserAgent(userAgent)) return { basis: 'none', suggested: [], others: [...VERSION_ORDER], copyLang: null }
  const code = country?.trim().toUpperCase()
  const countryLangs = code ? COUNTRY_LANGS[code] : undefined
  if (countryLangs) {
    return { basis: 'country', suggested: [...countryLangs], others: rest(countryLangs), copyLang: countryLangs[0] }
  }
  const browser = browserVersions(acceptLanguage, code)
  if (browser.length > 0) return { basis: 'browser', suggested: [], others: [...browser, ...rest(browser)], copyLang: browser[0] }
  return { basis: 'none', suggested: [], others: [...VERSION_ORDER], copyLang: null }
}
