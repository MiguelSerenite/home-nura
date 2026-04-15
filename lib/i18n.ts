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

export const LANGUAGES = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

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
