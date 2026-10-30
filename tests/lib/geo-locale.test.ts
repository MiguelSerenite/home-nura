import { describe, it, expect } from 'vitest'
import { suggestLocaleForCountry } from '@/lib/i18n'

describe('suggestLocaleForCountry', () => {
  it('suggests the country locale when it differs from the page locale', () => {
    expect(suggestLocaleForCountry('ES', 'en')).toBe('es')
    expect(suggestLocaleForCountry('de', 'fr')).toBe('de')
    expect(suggestLocaleForCountry('BE', 'en')).toBe('fr')
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
