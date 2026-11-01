import { describe, it, expect } from 'vitest'
import { suggestLocaleForCountry } from '@/lib/i18n'

describe('suggestLocaleForCountry', () => {
  it('suggests the country locale when it differs from the page locale', () => {
    expect(suggestLocaleForCountry('ES', 'en')).toBe('es')
    expect(suggestLocaleForCountry('de', 'fr')).toBe('de')
    expect(suggestLocaleForCountry('BE', 'en')).toBe('fr')
    expect(suggestLocaleForCountry('PL', 'en')).toBe('pl')
    expect(suggestLocaleForCountry('SE', 'en')).toBe('sv')
    expect(suggestLocaleForCountry('US', 'en')).toBe('us')
    expect(suggestLocaleForCountry('CA', 'en')).toBe('ca')
    expect(suggestLocaleForCountry('GB', 'us')).toBe('en')
  })

  it('suggests nothing when the visitor already reads the country locale', () => {
    expect(suggestLocaleForCountry('ES', 'es')).toBeNull()
  })

  it('accepts every national language of a multilingual country', () => {
    // Swiss and Belgian readers are not pushed away from their own language.
    expect(suggestLocaleForCountry('CH', 'de')).toBeNull()
    expect(suggestLocaleForCountry('CH', 'fr')).toBeNull()
    expect(suggestLocaleForCountry('CH', 'it')).toBeNull()
    expect(suggestLocaleForCountry('BE', 'nl')).toBeNull()
    expect(suggestLocaleForCountry('LU', 'de')).toBeNull()
    // Canada reads English and French: a Quebec reader stays on /fr.
    expect(suggestLocaleForCountry('CA', 'fr')).toBeNull()
    expect(suggestLocaleForCountry('CA', 'ca')).toBeNull()
  })

  it('maps US territories and Åland to their market version', () => {
    expect(suggestLocaleForCountry('PR', 'en')).toBe('us')
    expect(suggestLocaleForCountry('PR', 'es')).toBeNull()
    expect(suggestLocaleForCountry('GU', 'en')).toBe('us')
    expect(suggestLocaleForCountry('AX', 'en')).toBe('sv')
  })

  it('keeps the UK, Ireland and Oceania on the international English version', () => {
    for (const country of ['GB', 'IE', 'AU', 'NZ']) {
      expect(suggestLocaleForCountry(country, 'en'), country).toBeNull()
      expect(suggestLocaleForCountry(country, 'us'), country).toBe('en')
    }
  })

  it('suggests the majority language of a multilingual country otherwise', () => {
    // Most Swiss shoppers read German and buy on amazon.de.
    expect(suggestLocaleForCountry('CH', 'en')).toBe('de')
    expect(suggestLocaleForCountry('AT', 'fr')).toBe('de')
    expect(suggestLocaleForCountry('LI', 'en')).toBe('de')
  })

  it('suggests nothing for unknown or missing countries', () => {
    expect(suggestLocaleForCountry('JP', 'en')).toBeNull()
    expect(suggestLocaleForCountry(undefined, 'en')).toBeNull()
    expect(suggestLocaleForCountry('', 'en')).toBeNull()
  })
})
