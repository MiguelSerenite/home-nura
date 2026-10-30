import { describe, it, expect } from 'vitest'
import { isLocaleHome } from '@/lib/i18n'

describe('isLocaleHome', () => {
  it('recognises the home page of the current locale', () => {
    expect(isLocaleHome('/fr', 'fr')).toBe(true)
    expect(isLocaleHome('/de/', 'de')).toBe(true)
  })

  it('rejects inner pages and other locales', () => {
    expect(isLocaleHome('/fr/blog', 'fr')).toBe(false)
    expect(isLocaleHome('/fr/guides/airfryers', 'fr')).toBe(false)
    expect(isLocaleHome('/de', 'fr')).toBe(false)
    expect(isLocaleHome('/franchise', 'fr')).toBe(false)
  })

  it('rejects a missing pathname', () => {
    expect(isLocaleHome(null, 'fr')).toBe(false)
    expect(isLocaleHome(undefined, 'fr')).toBe(false)
    expect(isLocaleHome('', 'fr')).toBe(false)
  })
})
