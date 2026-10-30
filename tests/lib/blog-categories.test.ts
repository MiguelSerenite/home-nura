import { describe, it, expect } from 'vitest'
import { CATEGORIES } from '@/lib/blog/types'
import { LANGUAGES } from '@/lib/i18n'

// We compare specifications and buyer feedback; we run no tests. In
// Germany a "Test" label without a real test is misleading advertising.
const TEST_WORD = /(?<!\p{L})(?:tests?|testberichte?)(?!\p{L})/iu

describe('blog category labels', () => {
  it('exist in every locale', () => {
    for (const [category, labels] of Object.entries(CATEGORIES)) {
      for (const lang of LANGUAGES) expect(labels[lang], `${category}/${lang}`).toBeTruthy()
    }
  })

  it('never promise product tests', () => {
    for (const [category, labels] of Object.entries(CATEGORIES)) {
      for (const [lang, label] of Object.entries(labels)) {
        expect(label, `${category}/${lang}`).not.toMatch(TEST_WORD)
      }
    }
  })
})
