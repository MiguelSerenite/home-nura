import { describe, it, expect } from 'vitest'
import { mergeTranslations, quoteString } from '@/scripts/i18n/literal-source'

describe('quoteString', () => {
  it('escapes for the quote it is given', () => {
    expect(quoteString("l'été", "'")).toBe("'l\\'été'")
    expect(quoteString('say "hi"', '"')).toBe('"say \\"hi\\""')
    expect(quoteString('a `b` ${c} \\d', '`')).toBe('`a \\`b\\` \\${c} \\\\d`')
  })
})

describe('mergeTranslations', () => {
  it('merges files and leaves out the ids two files disagree on', () => {
    // Arrange
    const files = [
      ['chunk-01.json', { 'lib/a.ts::0': 'Hem', 'lib/a.ts::1': 'Färg' }],
      ['chunk-02.json', { 'lib/a.ts::0': 'Hem', 'lib/a.ts::1': 'Kulör' }],
    ] as const

    // Act
    const { values, conflicts } = mergeTranslations(files)

    // Assert
    expect(values).toEqual({ 'lib/a.ts::0': 'Hem' })
    expect([...conflicts]).toEqual([['lib/a.ts::1', 'lib/a.ts::1: different values in chunk-01.json and chunk-02.json']])
  })
})
