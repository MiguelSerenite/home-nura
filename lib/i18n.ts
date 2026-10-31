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
 * The same page in another locale. Slugs are not translated (every locale
 * serves /{lang}/methodologie, /{lang}/guides/probleme/…), so only the
 * locale prefix changes. A path without a supported locale prefix has no
 * known equivalent and falls back to the target locale's home.
 */
export function switchLocalePath(pathname: string | null | undefined, target: Lang): string {
  const match = pathname?.match(LOCALE_PREFIX)
  if (!match || !isValidLang(match[1])) return `/${target}`
  const rest = (match[2] ?? '').replace(/\/+$/, '')
  return `/${target}${rest}`
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
  const region = subtags.find((s) => /^[a-z]{2}$/.test(s))
  return (region && COUNTRY_LANGS[region.toUpperCase()]?.find((l) => versions.includes(l))) || versions[0]
}

/**
 * The visitor country's own version of `lang`'s language, else `lang`.
 * Browsers default to en-US worldwide, so the geo country is the better
 * signal for which English a reader wants: en-US in the UK reads /en, plain
 * English in the US reads /us.
 */
export function countryVariant(lang: Lang, country: string | undefined | null): Lang {
  const language = baseLanguage(lang)
  const local = country ? COUNTRY_LANGS[country.toUpperCase()]?.find((l) => baseLanguage(l) === language) : undefined
  return local ?? lang
}
