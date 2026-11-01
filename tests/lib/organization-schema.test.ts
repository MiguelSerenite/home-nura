import { describe, it, expect } from 'vitest'
import { LANGUAGES } from '@/lib/i18n'
import { EDITION_COUNTRY, areaServedFor, buildOrganizationSchema, siteLanguageNames } from '@/lib/organization-schema'

const EUROPEAN = LANGUAGES.filter((l) => l !== 'us' && l !== 'ca')
const EUROPEAN_WORDING = /GDPR|RGPD|DSGVO|\bEU\b|Europe|European/i

describe('Organization JSON-LD per edition', () => {
  it.each([
    ['us', 'United States'],
    ['ca', 'Canada'],
  ] as const)('%s: serves %s only, with no GDPR or European wording', (lang, country) => {
    const schema = buildOrganizationSchema(lang, 'Independent smart home buying guides.')
    expect(schema.areaServed).toEqual([{ '@type': 'Country', name: country }])
    expect(JSON.stringify(schema)).not.toMatch(EUROPEAN_WORDING)
    expect(schema.knowsAbout).toContain('ENERGY STAR Certification')
  })

  it.each(EUROPEAN.map((l) => [l] as const))('%s: serves the European markets, never the US or Canada, and keeps its European topics', (lang) => {
    const schema = buildOrganizationSchema(lang, 'Description')
    const countries = schema.areaServed.map((c) => c.name)
    expect(countries).toEqual(EUROPEAN.map((l) => EDITION_COUNTRY[l]))
    expect(countries).toContain(EDITION_COUNTRY[lang])
    expect(countries).not.toContain('United States')
    expect(countries).not.toContain('Canada')
    expect(schema.knowsAbout).toEqual(expect.arrayContaining(['The European Smart Home', 'GDPR-Compliant Smart Home', 'EU Energy Labels']))
  })

  it('lists the site’s own languages, once each, as contact languages', () => {
    expect(siteLanguageNames()).toEqual(['French', 'English', 'German', 'Spanish', 'Italian', 'Dutch', 'Polish', 'Swedish'])
    for (const lang of LANGUAGES) {
      expect(buildOrganizationSchema(lang, 'x').contactPoint.availableLanguage).toEqual(siteLanguageNames())
    }
  })

  it('keeps one entity for every edition, with the edition’s description', () => {
    for (const lang of LANGUAGES) {
      const schema = buildOrganizationSchema(lang, `about ${lang}`)
      expect(schema['@id']).toBe('https://homenura.com/#organization')
      expect(schema.description).toBe(`about ${lang}`)
      expect(schema.founder.url).toBe(`https://homenura.com/${lang}/a-propos`)
    }
    expect(areaServedFor('us')).toEqual(['United States'])
  })
})
