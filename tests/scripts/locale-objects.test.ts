import { describe, it, expect } from 'vitest'
import ts from 'typescript'
import { findLocaleObjects, findLocaleTernaries, locateUnit } from '@/scripts/i18n/locale-objects'

const LANGS = ['fr', 'en'] as const

function parse(text: string): ts.SourceFile {
  return ts.createSourceFile('x.ts', text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
}

const objects = (text: string) => findLocaleObjects(parse(text), LANGS, 'en', 'sv')

describe('locateUnit', () => {
  it('returns the object at the recorded index when path and French source match', () => {
    // Arrange
    const found = objects(`const A = { fr: 'Un', en: 'One' }\nconst B = { fr: 'Deux', en: 'Two' }`)

    // Act
    const hit = locateUnit(found, 1, { path: 'B', fr: 'Deux' })

    // Assert
    expect(hit?.path).toBe('B')
  })

  it('finds the object by path and French source when earlier objects were removed', () => {
    // Arrange: extracted when a locale map stood before B (B was index 1).
    const found = objects(`const B = { fr: 'Deux', en: 'Two' }`)

    // Act
    const hit = locateUnit(found, 1, { path: 'B', fr: 'Deux' })

    // Assert
    expect(hit?.path).toBe('B')
  })

  it('refuses a unit whose French source changed since extraction', () => {
    const found = objects(`const B = { fr: 'Deux !', en: 'Two' }`)

    expect(locateUnit(found, 0, { path: 'B', fr: 'Deux' })).toBeUndefined()
  })

  it('refuses an ambiguous match rather than guessing', () => {
    // Two call arguments outside any variable share the same (empty) path.
    const found = objects(`f({ fr: 'Oui', en: 'Yes' })\nf({ fr: 'Oui', en: 'Yes' })`)

    expect(found.map((o) => o.path)).toEqual(['', ''])
    expect(locateUnit(found, 5, { path: '', fr: 'Oui' })).toBeUndefined()
  })

  it('locates ternary chains the same way', () => {
    // Arrange
    const chains = findLocaleTernaries(parse(`const t = lang === 'fr' ? 'Oui' : lang === 'en' ? 'Yes' : 'Yes'`), 'en', 'sv')

    // Act
    const hit = locateUnit(chains, 3, { path: 't', fr: 'Oui' })

    // Assert
    expect(hit?.values.fr).toBe('Oui')
  })
})
