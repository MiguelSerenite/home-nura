import { describe, it, expect } from 'vitest'
import type { LiteralValue } from '@/scripts/i18n/locale-objects'
import { replaceLocale, type ReviewedUnit } from '@/scripts/i18n/replace-locale'

const LOCALES = `fr: 'Un', en: 'One', de: 'Eins', es: 'Uno', it: 'Uno', nl: 'Een'`

function unitsOf(...units: ReviewedUnit[]): Map<string, ReviewedUnit> {
  return new Map(units.map((u) => [u.id, u]))
}

function run(text: string, corrections: Record<string, LiteralValue>, ...units: ReviewedUnit[]) {
  return replaceLocale('lib/x.ts', text, 'pl', corrections, unitsOf(...units))
}

describe('replaceLocale', () => {
  it('rewrites only the strings that change, keeping layout, quotes and comments', () => {
    // Arrange
    const text = [
      'const UI = {',
      `  fr: { home: 'Accueil', back: "Retour" },`,
      `  en: { home: 'Home', back: "Back" },`,
      `  de: { home: 'Start', back: "Zurück" }, es: { home: 'Inicio', back: "Volver" },`,
      `  it: { home: 'Home', back: "Indietro" }, nl: { home: 'Home', back: "Terug" },`,
      '  pl: {',
      `    home: 'Start', // shown in the breadcrumb`,
      `    back: "Wróć",`,
      '  },',
      '}',
    ].join('\n')
    const unit = { id: 'lib/x.ts::0', path: 'UI', fr: { home: 'Accueil', back: 'Retour' }, pl: { home: 'Start', back: 'Wróć' } }

    // Act
    const result = run(text, { 'lib/x.ts::0': { home: 'Strona główna', back: 'Wróć' } }, unit)

    // Assert
    expect(result.applied).toEqual(['lib/x.ts::0'])
    expect(result.problems).toEqual([])
    expect(result.text).toBe(text.replace(`home: 'Start', // shown`, `home: 'Strona główna', // shown`))
  })

  it('finds a unit by path and French source when ids shifted', () => {
    // Arrange: dumped as ::1, an earlier object has been removed since.
    const text = `const B = { fr: 'Deux', en: 'Two', de: 'Zwei', es: 'Dos', it: 'Due', nl: 'Twee', pl: 'Dwa' }`
    const unit = { id: 'lib/x.ts::1', path: 'B', fr: 'Deux', pl: 'Dwa' }

    // Act
    const result = run(text, { 'lib/x.ts::1': 'Dwie' }, unit)

    // Assert
    expect(result.applied).toEqual(['lib/x.ts::1'])
    expect(result.text).toContain(`pl: 'Dwie'`)
  })

  it('leaves an object whose French source changed since the dump', () => {
    const text = `const A = { ${LOCALES.replace("'Un'", "'Un !'")}, pl: 'Jeden' }`
    const unit = { id: 'lib/x.ts::0', path: 'A', fr: 'Un', pl: 'Jeden' }

    const result = run(text, { 'lib/x.ts::0': 'Jedno' }, unit)

    expect(result.text).toBe(text)
    expect(result.problems).toEqual(['lib/x.ts::0: French source changed since the dump (A)'])
  })

  it('leaves a value edited since the dump', () => {
    const text = `const A = { ${LOCALES}, pl: 'Jeden (nowy)' }`
    const unit = { id: 'lib/x.ts::0', path: 'A', fr: 'Un', pl: 'Jeden' }

    const result = run(text, { 'lib/x.ts::0': 'Jedno' }, unit)

    expect(result.text).toBe(text)
    expect(result.problems).toEqual(['lib/x.ts::0: the pl value changed since the dump (A)'])
  })

  it('refuses a correction shaped differently from the current value', () => {
    const text = `const A = { fr: ['a', 'b'], en: ['a', 'b'], de: ['a', 'b'], es: ['a', 'b'], it: ['a', 'b'], nl: ['a', 'b'], pl: ['a', 'b'] }`
    const unit = { id: 'lib/x.ts::0', path: 'A', fr: ['a', 'b'], pl: ['a', 'b'] }

    const result = run(text, { 'lib/x.ts::0': ['a'] }, unit)

    expect(result.text).toBe(text)
    expect(result.problems).toEqual(['lib/x.ts::0: the correction is shaped differently from the current pl value (A)'])
  })

  it('counts a correction equal to the current value as unchanged', () => {
    const text = `const A = { ${LOCALES}, pl: 'Jeden' }`
    const unit = { id: 'lib/x.ts::0', path: 'A', fr: 'Un', pl: 'Jeden' }

    const result = run(text, { 'lib/x.ts::0': 'Jeden' }, unit)

    expect(result).toEqual({ text, applied: [], unchanged: ['lib/x.ts::0'], problems: [] })
  })

  it('keeps backticks and escapes quotes in the new value', () => {
    const text = `const A = { ${LOCALES}, pl: \`Jeden\`, }\nconst B = { ${LOCALES}, pl: 'Jeden' }`
    const units = [
      { id: 'lib/x.ts::0', path: 'A', fr: 'Un', pl: 'Jeden' },
      { id: 'lib/x.ts::1', path: 'B', fr: 'Un', pl: 'Jeden' },
    ]

    const result = run(text, { 'lib/x.ts::0': 'Jeden `x` ${y}', 'lib/x.ts::1': "Jeden 'x'" }, ...units)

    expect(result.text).toContain('pl: `Jeden \\`x\\` \\${y}`')
    expect(result.text).toContain(`pl: 'Jeden \\'x\\''`)
  })

  it('rewrites the Polish branch of a locale ternary chain', () => {
    // Arrange
    const text = `const t = lang === 'fr' ? 'Accueil' : lang === 'nl' ? 'Home' : lang === 'pl' ? 'Start' : 'Home'`
    const unit = { id: 'lib/x.ts::t0', path: 't', fr: 'Accueil', pl: 'Start' }

    // Act
    const result = run(text, { 'lib/x.ts::t0': 'Strona główna' }, unit)

    // Assert
    expect(result.applied).toEqual(['lib/x.ts::t0'])
    expect(result.text).toBe(text.replace(`'pl' ? 'Start'`, `'pl' ? 'Strona główna'`))
  })

  it('reports ids missing from the dump', () => {
    const result = run(`const A = { ${LOCALES}, pl: 'Jeden' }`, { 'lib/x.ts::9': 'Jedno' })

    expect(result.problems).toEqual(['lib/x.ts::9: unknown unit'])
  })
})
