/**
 * Site-wide Organization JSON-LD (app/[lang]/layout.tsx), per edition.
 *
 * The US and Canadian editions are North-American sites: no GDPR, EU or
 * "European" wording, and the one country each serves. The European
 * editions keep their European topics and list the European markets the
 * site has an edition for. The contact languages are the site's own.
 */

import { BASE_URL } from '@/lib/seo'
import { LANGUAGES, baseLanguage, type Lang } from '@/lib/i18n'
import { isNorthAmericanMarket } from '@/lib/market-models/config'

/** Country of each edition's market. */
export const EDITION_COUNTRY: Readonly<Record<Lang, string>> = {
  fr: 'France',
  en: 'United Kingdom',
  de: 'Germany',
  es: 'Spain',
  it: 'Italy',
  nl: 'Netherlands',
  pl: 'Poland',
  sv: 'Sweden',
  us: 'United States',
  ca: 'Canada',
}

/** English name of each language the site is written in (schema.org availableLanguage). */
const LANGUAGE_NAMES: Readonly<Record<string, string>> = {
  fr: 'French',
  en: 'English',
  de: 'German',
  es: 'Spanish',
  it: 'Italian',
  nl: 'Dutch',
  pl: 'Polish',
  sv: 'Swedish',
}

/** The languages of the site's editions, once each, in edition order (English once for en, us and ca). */
export function siteLanguageNames(): string[] {
  return [...new Set(LANGUAGES.map(baseLanguage))].map((code) => {
    const name = LANGUAGE_NAMES[code]
    if (!name) throw new Error(`lib/organization-schema: no language name for "${code}"`)
    return name
  })
}

const SHARED_TOPICS = [
  'Smart Kitchen Appliances',
  'Energy & Home Automation',
  'Home Security',
  'Indoor Air Quality & Comfort',
  'Smart Cleaning & Housekeeping',
  'Smart Garden & Outdoor',
  'Air Fryers',
  'Smart Multicookers',
  'Coffee Machines',
  'Smart Thermostats',
  'Video Doorbells',
  'Robot Vacuums',
] as const

/**
 * knowsAbout: the 6 meta-silos and flagship categories, framed for the
 * edition's market. Google uses it to attribute entity authority.
 */
function topicsFor(lang: Lang): string[] {
  if (isNorthAmericanMarket(lang)) {
    return ['The Smart Home', ...SHARED_TOPICS, 'Matter / Thread Compatibility', 'ENERGY STAR Certification']
  }
  return ['The European Smart Home', ...SHARED_TOPICS, 'GDPR-Compliant Smart Home', 'Matter / Thread Compatibility', 'EU Energy Labels']
}

/** Countries an edition serves: its own in North America, the European markets elsewhere. */
export function areaServedFor(lang: Lang): string[] {
  if (isNorthAmericanMarket(lang)) return [EDITION_COUNTRY[lang]]
  return LANGUAGES.filter((l) => !isNorthAmericanMarket(l)).map((l) => EDITION_COUNTRY[l])
}

export function buildOrganizationSchema(lang: Lang, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Home Nura',
    alternateName: 'HomeNura',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
      width: 1400,
      height: 400,
    },
    image: `${BASE_URL}/logo.png`,
    description,
    foundingDate: '2024-01-15',
    founder: {
      '@type': 'Person',
      name: 'Miguel Marie',
      jobTitle: lang === 'fr' ? 'Fondateur & Rédacteur en Chef' : 'Founder & Editor-in-Chief',
      url: `${BASE_URL}/${lang}/a-propos`,
    },
    // sameAs intentionally omitted: list only social profiles that exist
    // and link back to homenura.com (twitter/linkedin URLs returned 404).
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@homenura.com',
      availableLanguage: siteLanguageNames(),
    },
    areaServed: areaServedFor(lang).map((name) => ({ '@type': 'Country', name })),
    knowsAbout: topicsFor(lang),
  }
}
