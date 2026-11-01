/**
 * i18n — single source of truth for language handling.
 *
 * Every module that needs to enumerate locales, validate a `lang`
 * segment, or negotiate a fallback should import from here. Before
 * Phase V the same `['fr', 'en', 'de', 'es', 'it', 'nl']` array was
 * duplicated in six places (middleware, layout, seo, sitemap, blog,
 * dictionaries) — adding a seventh locale required grep+edit, and
 * dropping one meant hunting for stragglers. That's a long-term
 * correctness risk for a multilingual affiliate site whose entire
 * revenue funnel depends on locale routing being correct.
 *
 * Keep this file dependency-free so it can be imported from Edge
 * runtime (middleware), server components, API routes, and tests
 * without tripping on bundler boundaries.
 */

export const LANGUAGES = ['fr', 'en', 'de', 'es', 'it', 'nl', 'pl', 'sv', 'us', 'ca'] as const

export type Lang = (typeof LANGUAGES)[number]

/** Default fallback when negotiation fails or an unknown locale is seen. */
export const DEFAULT_LANG: Lang = 'fr'

/*
 * Locale tags. `us` and `ca` are market codes (the amazon.com and amazon.ca
 * English versions), not language subtags — `ca` is Catalan in BCP 47 — so
 * a raw `lang` must never reach <html lang>, hreflang, og:locale, Intl or
 * JSON-LD. Every tag the site emits comes from these two maps.
 */

/**
 * Language tag of each locale for <html lang>, hreflang alternates, the
 * sitemap, JSON-LD inLanguage and llms.txt. The seven original locales keep
 * their bare language tag (`en` is the UK/international version and the
 * hreflang fallback of every English reader outside the US and Canada).
 */
export const HTML_LANG: Readonly<Record<Lang, string>> = {
  fr: 'fr',
  en: 'en',
  de: 'de',
  es: 'es',
  it: 'it',
  nl: 'nl',
  pl: 'pl',
  sv: 'sv-SE',
  us: 'en-US',
  ca: 'en-CA',
}

/** Language-REGION locale of each site locale, for Intl / toLocaleDateString and og:locale. */
export const BCP47_LOCALE: Readonly<Record<Lang, string>> = {
  fr: 'fr-FR',
  en: 'en-GB',
  de: 'de-DE',
  es: 'es-ES',
  it: 'it-IT',
  nl: 'nl-NL',
  pl: 'pl-PL',
  sv: 'sv-SE',
  us: 'en-US',
  ca: 'en-CA',
}

/** OpenGraph locale (`en_GB`, `en_US`, `sv_SE`…). */
export function ogLocale(lang: Lang): string {
  return BCP47_LOCALE[lang].replace('-', '_')
}

/** The language a locale is written in: `en` for the US and Canadian versions. */
export function baseLanguage(lang: Lang): string {
  return BCP47_LOCALE[lang].split('-')[0]
}

/**
 * Narrowing predicate: tells TypeScript the input is a valid `Lang`
 * when this returns true. Handy in middleware and metadata helpers
 * where lang is a raw string from the URL.
 */
export function isValidLang(value: string | undefined | null): value is Lang {
  return !!value && (LANGUAGES as readonly string[]).includes(value)
}

/**
 * Normalize any input to a supported locale, falling back to the
 * default. Useful in generateMetadata/generateStaticParams where you
 * want a `Lang` (not `string`) without writing a conditional every time.
 */
export function resolveLang(value: string | undefined | null): Lang {
  return isValidLang(value) ? value : DEFAULT_LANG
}

const LOCALE_PREFIX = /^\/([a-z]{2})(\/.*)?$/

/**
 * Sections that exist in some locales only, with the page every other
 * locale offers instead. The floor-care guides are US and Canadian only
 * (lib/floor-care/config.ts, kept in step by tests/lib/floor-care/routes.test.ts):
 * elsewhere the reader lands on the cleaning hub, not on a 404.
 */
export const LOCALE_LIMITED_SECTIONS: ReadonlyArray<{ readonly prefix: string; readonly langs: readonly Lang[]; readonly fallback: string }> = [
  { prefix: '/guides/floor-care', langs: ['us', 'ca'], fallback: '/entretien-maison' },
  // Category hubs indexed in some markets only (lib/catalog `indexableIn`):
  // elsewhere, the section hub. Kept in step by tests/lib/catalog/categories.test.ts.
  { prefix: '/cuisine-connectee/robots-multifonctions', langs: ['fr', 'de', 'es', 'it', 'pl'], fallback: '/cuisine-connectee' },
  // Black Friday pages of some markets only (lib/black-friday/markets.ts) and
  // the gift guides (lib/gift-guides): elsewhere, that locale's Black Friday
  // hub. Kept in step by tests/lib/black-friday.test.ts.
  { prefix: '/black-friday/aspirateurs-laveurs', langs: ['fr'], fallback: '/black-friday' },
  { prefix: '/black-friday/deshumidificateurs', langs: ['fr', 'en', 'de', 'es', 'nl', 'sv'], fallback: '/black-friday' },
  { prefix: '/black-friday/multicuiseurs', langs: ['fr'], fallback: '/black-friday' },
  { prefix: '/black-friday/sonnettes-video', langs: ['en', 'it', 'us'], fallback: '/black-friday' },
  { prefix: '/black-friday/serrures-connectees', langs: ['de', 'us'], fallback: '/black-friday' },
  { prefix: '/black-friday/stations-recharge-outdoor', langs: ['de'], fallback: '/black-friday' },
  { prefix: '/black-friday/humidificateurs', langs: ['es', 'pl', 'sv', 'us', 'ca'], fallback: '/black-friday' },
  { prefix: '/black-friday/cameras-exterieur', langs: ['es'], fallback: '/black-friday' },
  { prefix: '/black-friday/interphones', langs: ['it'], fallback: '/black-friday' },
  { prefix: '/black-friday/batteries-domestiques', langs: ['nl'], fallback: '/black-friday' },
  { prefix: '/black-friday/purificateurs-air', langs: ['pl', 'us'], fallback: '/black-friday' },
  { prefix: '/black-friday/detecteurs-fumee-co', langs: ['pl', 'ca'], fallback: '/black-friday' },
  { prefix: '/black-friday/bornes-recharge-ve', langs: ['sv'], fallback: '/black-friday' },
  { prefix: '/sinterklaas', langs: ['nl'], fallback: '/black-friday' },
  { prefix: '/boxing-day', langs: ['ca'], fallback: '/black-friday' },
  { prefix: '/regalos-de-reyes', langs: ['es'], fallback: '/black-friday' },
]

/**
 * Static guide routes every locale serves (app/[lang]/guides/{slug}).
 * Any other /guides/{slug} is a market page (lib/market-pages), which
 * exists in one locale only; tests/lib/market-pages/routes.test.ts keeps
 * this list in step with the app directory.
 */
export const SHARED_GUIDE_SLUGS = ['acheteur', 'airfryer-vs-four', 'airfryers', 'cuisine-connectee', 'floor-care', 'probleme'] as const

/** Sections whose every page exists in one locale only: market duels and news. */
export const SINGLE_LOCALE_SECTIONS = ['/vs', '/news'] as const

/**
 * A market page (lib/market-pages): written natively for one locale, with
 * a native slug, never translated. Duels (/vs/{slug}), news (/news/{slug})
 * and guides at /guides/{slug} outside SHARED_GUIDE_SLUGS.
 */
export function isSingleLocalePath(pathInLocale: string): boolean {
  if (SINGLE_LOCALE_SECTIONS.some((prefix) => pathInLocale.startsWith(`${prefix}/`))) return true
  const guide = pathInLocale.match(/^\/guides\/([^/]+)$/)?.[1]
  return guide !== undefined && !(SHARED_GUIDE_SLUGS as readonly string[]).includes(guide)
}

/** Why switching locale lands on another page than the one being read. */
export type SwitchReason = 'market' | 'black-friday' | 'cleaning' | 'home'

export interface LocaleSwitch {
  /** The page to open in the target locale, with its locale prefix ('/de/black-friday'). */
  path: string
  /** Null when it is the same page; else why the reader lands elsewhere (announced on arrival). */
  reason: SwitchReason | null
}

export interface SwitchContext {
  /**
   * Main category hub of the market page being read, inside the locale
   * prefix ('/guides/airfryers'): its first related hub
   * (lib/market-pages/hubs.ts primaryHub). Market pages exist in one
   * locale only; the other locales get that hub instead.
   */
  marketHub?: string | null
}

/** Reason announced when a locale-limited section falls back to its stand-in page. */
const FALLBACK_REASONS: Readonly<Record<string, SwitchReason>> = {
  '/entretien-maison': 'cleaning',
  '/black-friday': 'black-friday',
}

function limitedSwitch(rest: string, target: Lang): LocaleSwitch {
  const limited = LOCALE_LIMITED_SECTIONS.find(({ prefix }) => rest === prefix || rest.startsWith(`${prefix}/`))
  if (limited && !limited.langs.includes(target)) {
    return { path: `/${target}${limited.fallback}`, reason: FALLBACK_REASONS[limited.fallback] ?? 'home' }
  }
  return { path: `/${target}${rest}`, reason: null }
}

/**
 * The page a reader switching to `target` should land on, and why when it
 * is not the same page. Slugs are not translated (every locale serves
 * /{lang}/methodologie, /{lang}/guides/probleme/…), so the same page keeps
 * its path and only the locale prefix changes. A section the target locale
 * lacks (LOCALE_LIMITED_SECTIONS) goes to its stand-in page (a Black Friday
 * category → that locale's Black Friday hub, a floor-care guide → the
 * cleaning hub); a market page (one locale only) to its main category hub
 * in the target locale (`context.marketHub`, through the same rules), or
 * the target home when it has none. A path without a supported locale
 * prefix has no known equivalent: the target home, nothing to announce.
 */
export function switchLocale(pathname: string | null | undefined, target: Lang, context: SwitchContext = {}): LocaleSwitch {
  const match = pathname?.match(LOCALE_PREFIX)
  if (!match || !isValidLang(match[1])) return { path: `/${target}`, reason: null }
  const rest = (match[2] ?? '').replace(/\/+$/, '')
  const limited = limitedSwitch(rest, target)
  if (limited.reason) return limited
  if (target !== match[1] && isSingleLocalePath(rest)) {
    const hub = context.marketHub?.replace(/\/+$/, '')
    if (!hub || !hub.startsWith('/') || isSingleLocalePath(hub)) return { path: `/${target}`, reason: 'home' }
    return { path: limitedSwitch(hub, target).path, reason: 'market' }
  }
  return limited
}

/** The page path of switchLocale, without the reason. */
export function switchLocalePath(pathname: string | null | undefined, target: Lang, context: SwitchContext = {}): string {
  return switchLocale(pathname, target, context).path
}

/**
 * True when `pathname` is the home page of `lang` (`/fr`, `/fr/`). The
 * Navbar logo uses it: a link to the page you are already on does nothing
 * visible, so on the home page the logo scrolls back to the top instead.
 */
export function isLocaleHome(pathname: string | null | undefined, lang: string): boolean {
  return !!pathname && pathname.replace(/\/+$/, '') === `/${lang}`
}

/**
 * Vercel geo country (ISO 3166-1 alpha-2) → the site locales its people
 * read, the default first. Multilingual countries list every national
 * language we serve, so a Swiss reader on /de or a Belgian reader on /nl
 * is never pushed to French. Switzerland defaults to German: most of its
 * shoppers read German and buy on amazon.de. The US (and its territories,
 * Puerto Rico also reading Spanish) get the amazon.com version, Canada the
 * amazon.ca one with French alongside, Sweden and Åland the Swedish one;
 * the UK, Ireland and Oceania keep the international English version.
 */
export const COUNTRY_LANGS: Readonly<Record<string, readonly Lang[]>> = {
  FR: ['fr'], MC: ['fr'], BE: ['fr', 'nl'], LU: ['fr', 'de'],
  DE: ['de'], AT: ['de'], LI: ['de'], CH: ['de', 'fr', 'it'],
  ES: ['es'],
  IT: ['it'],
  NL: ['nl'],
  PL: ['pl'],
  SE: ['sv'], AX: ['sv'],
  US: ['us'], PR: ['us', 'es'], GU: ['us'], VI: ['us'], AS: ['us'], MP: ['us'], UM: ['us'],
  CA: ['ca', 'fr'],
  GB: ['en'], IE: ['en'], AU: ['en'], NZ: ['en'],
}

/** Default locale per country, used by proxy.ts when Accept-Language names none we serve. */
export const COUNTRY_TO_LANG: Readonly<Record<string, Lang>> = Object.fromEntries(
  Object.entries(COUNTRY_LANGS).map(([country, langs]) => [country, langs[0]]),
)

/** Cookie set by proxy.ts with the visitor's country, read by GeoLocaleSuggestion. */
export const COUNTRY_COOKIE = 'hn_country'

/**
 * Locale to suggest to a visitor reading `currentLang` from `country`, or
 * null when they already read one of the country's languages or the
 * country has no locale of its own.
 */
export function suggestLocaleForCountry(country: string | undefined | null, currentLang: string): Lang | null {
  const langs = country ? COUNTRY_LANGS[country.toUpperCase()] : undefined
  if (!langs || (langs as readonly string[]).includes(currentLang)) return null
  return langs[0]
}

/**
 * Locales to suggest to a visitor reading `currentLang` from `country`:
 * every version the country reads (COUNTRY_LANGS order, Belgium fr then
 * nl, Switzerland de, fr, it), or none when they already read one of them
 * or the country has no version of its own.
 */
export function suggestLocalesForCountry(country: string | undefined | null, currentLang: string): Lang[] {
  const langs = country ? COUNTRY_LANGS[country.toUpperCase()] : undefined
  if (!langs || (langs as readonly string[]).includes(currentLang)) return []
  return [...langs]
}

/**
 * The ten versions as the country selector, the entry page (/) and the
 * locale notices name them: flag, short code, the country and language in
 * their own language, the edition name ("Home Nura US"; the brand is never
 * translated) and the edition's home country. Display order of the lists.
 */
export interface MarketVersion {
  code: Lang
  flag: string
  /** Short code on the selector button ('UK' for /en, 'SE' for /sv). */
  label: string
  /** The country, in its version's language. */
  country: string
  /** The language, in itself. */
  language: string
  /** "Home Nura France", "Home Nura UK"… */
  edition: string
  /** ISO 3166-1 country the version is written for. */
  homeCountry: string
}

export const MARKET_VERSIONS: readonly MarketVersion[] = [
  { code: 'fr', flag: '🇫🇷', label: 'FR', country: 'France', language: 'Français', edition: 'Home Nura France', homeCountry: 'FR' },
  { code: 'de', flag: '🇩🇪', label: 'DE', country: 'Deutschland', language: 'Deutsch', edition: 'Home Nura Deutschland', homeCountry: 'DE' },
  { code: 'en', flag: '🇬🇧', label: 'UK', country: 'United Kingdom', language: 'English', edition: 'Home Nura UK', homeCountry: 'GB' },
  { code: 'es', flag: '🇪🇸', label: 'ES', country: 'España', language: 'Español', edition: 'Home Nura España', homeCountry: 'ES' },
  { code: 'it', flag: '🇮🇹', label: 'IT', country: 'Italia', language: 'Italiano', edition: 'Home Nura Italia', homeCountry: 'IT' },
  { code: 'nl', flag: '🇳🇱', label: 'NL', country: 'Nederland', language: 'Nederlands', edition: 'Home Nura Nederland', homeCountry: 'NL' },
  { code: 'pl', flag: '🇵🇱', label: 'PL', country: 'Polska', language: 'Polski', edition: 'Home Nura Polska', homeCountry: 'PL' },
  { code: 'sv', flag: '🇸🇪', label: 'SE', country: 'Sverige', language: 'Svenska', edition: 'Home Nura Sverige', homeCountry: 'SE' },
  { code: 'us', flag: '🇺🇸', label: 'US', country: 'United States', language: 'English', edition: 'Home Nura US', homeCountry: 'US' },
  { code: 'ca', flag: '🇨🇦', label: 'CA', country: 'Canada', language: 'English', edition: 'Home Nura Canada', homeCountry: 'CA' },
]

const VERSION_BY_CODE = new Map(MARKET_VERSIONS.map((version) => [version.code, version]))

export function marketVersion(lang: Lang): MarketVersion {
  return VERSION_BY_CODE.get(lang) as MarketVersion
}

/**
 * Site locale for one Accept-Language tag (`en-US`, `sv`, `fr-CA`…), or
 * null when we serve none. Matches on the language subtag, then lets the
 * region pick among the versions of that language: `en-US` → us, `en-CA`
 * → ca, any other English → en. `ca` (Catalan) and `us` are not languages
 * of the site and match nothing.
 */
export function langForLanguageTag(tag: string): Lang | null {
  const [language, ...subtags] = tag.trim().toLowerCase().split(/[-_]/)
  const versions = LANGUAGES.filter((l) => baseLanguage(l) === language)
  if (versions.length === 0) return null
  // The region comes before any extension or private-use part (`-u-…`, `-x-…`).
  const singleton = subtags.findIndex((s) => s.length === 1)
  const region = (singleton === -1 ? subtags : subtags.slice(0, singleton)).find((s) => /^[a-z]{2}$/.test(s))
  return (region && COUNTRY_LANGS[region.toUpperCase()]?.find((l) => versions.includes(l))) || versions[0]
}

/**
 * Which version of `lang`'s language a visitor from `country` reads: the
 * country's own version when it has one, else the language's default
 * version (the first in LANGUAGES: `en` for English). Browsers default to
 * en-US worldwide, so the geo country is the better signal: en-US reads
 * /en in the UK or Germany, plain English reads /us in the US. Without a
 * country, the browser's own region stands.
 */
export function countryVariant(lang: Lang, country: string | undefined | null): Lang {
  if (!country) return lang
  const language = baseLanguage(lang)
  const versions = LANGUAGES.filter((l) => baseLanguage(l) === language)
  return COUNTRY_LANGS[country.toUpperCase()]?.find((l) => versions.includes(l)) ?? versions[0]
}
