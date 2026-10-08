import { describe, it, expect } from 'vitest'
import { getIndexableSilos } from '@/lib/catalog'
import { getSiloFaq } from '@/lib/catalog/silo-faqs'
import { LANGUAGES } from '@/lib/i18n'

describe('getSiloFaq', () => {
  it('gives every indexable hub 5 questions in every locale', () => {
    for (const silo of getIndexableSilos()) {
      for (const lang of LANGUAGES) {
        expect(getSiloFaq(lang, silo.slug), `${lang}/${silo.slug}`).toHaveLength(5)
      }
    }
  })

  it('keeps answers quotable: a question mark on questions, 25-110 words per answer', () => {
    for (const silo of getIndexableSilos()) {
      for (const lang of LANGUAGES) {
        for (const { question, answer } of getSiloFaq(lang, silo.slug)) {
          expect(question.trim().endsWith('?'), question).toBe(true)
          const words = answer.trim().split(/\s+/).length
          expect(words, `${lang}/${silo.slug}: ${question}`).toBeGreaterThanOrEqual(25)
          expect(words, `${lang}/${silo.slug}: ${question}`).toBeLessThanOrEqual(110)
        }
      }
    }
  })

  it('returns an empty list for an unknown hub', () => {
    expect(getSiloFaq('fr', 'nope')).toEqual([])
  })
})
