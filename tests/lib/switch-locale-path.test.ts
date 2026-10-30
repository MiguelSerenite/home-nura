import { describe, it, expect } from 'vitest'
import { switchLocalePath } from '@/lib/i18n'

describe('switchLocalePath', () => {
  it('keeps the current page and swaps only the locale prefix', () => {
    expect(switchLocalePath('/fr/guides/probleme/airfryer-ne-chauffe-plus', 'de')).toBe(
      '/de/guides/probleme/airfryer-ne-chauffe-plus',
    )
    expect(switchLocalePath('/en/blog/guide-robot-aspirateur-2026', 'it')).toBe(
      '/it/blog/guide-robot-aspirateur-2026',
    )
  })

  it('maps a locale home to the target locale home', () => {
    expect(switchLocalePath('/fr', 'nl')).toBe('/nl')
    expect(switchLocalePath('/fr/', 'es')).toBe('/es')
  })

  it('falls back to the target home when the path has no locale prefix', () => {
    expect(switchLocalePath('/', 'de')).toBe('/de')
    expect(switchLocalePath('/xy/blog', 'de')).toBe('/de')
    expect(switchLocalePath('/franchise', 'de')).toBe('/de')
    expect(switchLocalePath('', 'en')).toBe('/en')
    expect(switchLocalePath(null, 'en')).toBe('/en')
    expect(switchLocalePath(undefined, 'en')).toBe('/en')
  })
})
