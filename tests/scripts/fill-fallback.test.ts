import { describe, it, expect } from 'vitest'
import { completeTranslations, shapeDifference, type SourceUnit } from '@/scripts/i18n/fill-fallback'

const UNITS: SourceUnit[] = [
  { id: 'lib/a.ts::0', fr: 'Accueil', en: 'Home' },
  { id: 'lib/a.ts::1', fr: { title: 'Couleur' }, en: { title: 'Colour' } },
  { id: 'lib/b.ts::t0', fr: 'Oui', en: 'Yes' },
]

describe('completeTranslations', () => {
  it('keeps the writers’ values and gives every other unit its English source', () => {
    // Arrange
    const written = { 'lib/a.ts::1': { title: 'Color' } }

    // Act
    const result = completeTranslations(UNITS, written, { strict: false })

    // Assert
    expect(result.translations).toEqual({
      'lib/a.ts::0': 'Home',
      'lib/a.ts::1': { title: 'Color' },
      'lib/b.ts::t0': 'Yes',
    })
    expect(result).toMatchObject({ adapted: 1, fallbacks: 2, problems: [] })
  })

  it('gives no English fallback in strict mode and reports what is missing', () => {
    const result = completeTranslations(UNITS, { 'lib/a.ts::0': 'Hem' }, { strict: true })

    expect(result.translations).toEqual({ 'lib/a.ts::0': 'Hem' })
    expect(result.fallbacks).toBe(0)
    expect(result.problems).toEqual(['lib/a.ts::1: not translated', 'lib/b.ts::t0: not translated'])
  })

  it('leaves out and reports ids unknown to the units', () => {
    const result = completeTranslations(UNITS, { 'lib/z.ts::4': 'Hej' }, { strict: false })

    expect(result.translations).not.toHaveProperty('lib/z.ts::4')
    expect(result.problems).toEqual(['lib/z.ts::4: unknown unit'])
  })

  it('reports a value shaped unlike both sources but keeps it', () => {
    const result = completeTranslations(UNITS, { 'lib/a.ts::1': { heading: 'Color' } }, { strict: false })

    expect(result.translations['lib/a.ts::1']).toEqual({ heading: 'Color' })
    expect(result.problems).toEqual(['lib/a.ts::1: shaped unlike the source, value: keys differ (missing: title; extra: heading)'])
  })

  it('gives a unit the writers’ files disagree on no value at all', () => {
    const result = completeTranslations(UNITS, {}, { strict: false, conflicted: new Set(['lib/a.ts::0']) })

    expect(result.translations).not.toHaveProperty('lib/a.ts::0')
    expect(result.problems).toEqual([])
  })
})

describe('shapeDifference', () => {
  it('accepts values of the same type, length and keys', () => {
    expect(shapeDifference({ faq: [{ q: 'a', a: 'b' }] }, { faq: [{ q: 'c', a: 'd' }] })).toBeUndefined()
  })

  it('names the first difference with its path', () => {
    expect(shapeDifference({ faq: ['a'] }, { faq: ['a', 'b'] })).toBe('faq: 2 items expected, got 1')
    expect(shapeDifference({ faq: [{ q: 1 }] }, { faq: [{ q: 'x' }] })).toBe('faq[0].q: string expected, got number')
    expect(shapeDifference(null, 'x')).toBe('value: string expected, got null')
  })
})
