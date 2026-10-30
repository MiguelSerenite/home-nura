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

export const LANGUAGES = ['fr', 'en', 'de', 'es', 'it', 'nl', 'pl'] as const

export type Lang = (typeof LANGUAGES)[number]

/** Default fallback when negotiation fails or an unknown locale is seen. */
export const DEFAULT_LANG: Lang = 'fr'

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
 * Vercel geo country (ISO 3166-1 alpha-2) → the site locales its people
 * read, the default first. Multilingual countries list every national
 * language we serve, so a Swiss reader on /de or a Belgian reader on /nl
 * is never pushed to French. Switzerland defaults to German: most of its
 * shoppers read German and buy on amazon.de.
 */
export const COUNTRY_LANGS: Readonly<Record<string, readonly Lang[]>> = {
  FR: ['fr'], MC: ['fr'], BE: ['fr', 'nl'], LU: ['fr', 'de'],
  DE: ['de'], AT: ['de'], LI: ['de'], CH: ['de', 'fr', 'it'],
  ES: ['es'],
  IT: ['it'],
  NL: ['nl'],
  PL: ['pl'],
  GB: ['en'], IE: ['en'], US: ['en'], CA: ['en'], AU: ['en'], NZ: ['en'],
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
