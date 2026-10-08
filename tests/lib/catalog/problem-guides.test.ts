import { describe, it, expect } from 'vitest'
import { PROBLEMS } from '@/lib/catalog'
import { getProblemGuide, PROBLEM_GUIDE_SLUGS } from '@/lib/catalog/problem-guides'
import { LANGUAGES } from '@/lib/i18n'

describe('problem guides', () => {
  it('only covers problems that exist', () => {
    const known = new Set(PROBLEMS.map((p) => p.slug))
    expect(PROBLEM_GUIDE_SLUGS.filter((s) => !known.has(s))).toEqual([])
    expect(PROBLEM_GUIDE_SLUGS.length).toBeGreaterThanOrEqual(25)
  })

  it('gives every guide a full structure in all 6 locales', () => {
    for (const slug of PROBLEM_GUIDE_SLUGS) {
      for (const lang of LANGUAGES) {
        const g = getProblemGuide(lang, slug)
        expect(g, `${lang}/${slug}`).toBeDefined()
        expect(g!.intro.split(/\s+/).length, `${lang}/${slug} intro`).toBeGreaterThanOrEqual(25)
        expect(g!.causes.length, `${lang}/${slug} causes`).toBeGreaterThanOrEqual(3)
        expect(g!.steps.length, `${lang}/${slug} steps`).toBeGreaterThanOrEqual(4)
        expect(g!.replaceWhen.length, `${lang}/${slug} replaceWhen`).toBeGreaterThan(80)
      }
    }
  })

  it('returns undefined for a problem without a hand-written guide', () => {
    expect(getProblemGuide('fr', 'definitely-not-a-problem')).toBeUndefined()
  })
})
