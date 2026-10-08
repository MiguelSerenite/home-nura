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

  it('suggests nothing for unknown or missing countries', () => {
    expect(suggestLocaleForCountry('JP', 'en')).toBeNull()
    expect(suggestLocaleForCountry(undefined, 'en')).toBeNull()
    expect(suggestLocaleForCountry('', 'en')).toBeNull()
  })
})
