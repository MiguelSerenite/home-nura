/**
 * Meta description of the troubleshooting pages.
 *
 * Until 2026-11-16 a problem page without a hand-written guide used the
 * severity template alone as its description: about 240 of the 265 pages
 * of each language shared one of three sentences (2,422 of 2,650 URLs in
 * the sitemap). Each page now opens its description with its own question.
 */

import { describe, it, expect } from 'vitest'
import { LANGUAGES } from '@/lib/i18n'
import { PROBLEMS } from '@/lib/catalog/problems'
import { getCategory } from '@/lib/catalog/categories'
import { getProblemContent, getProblemMetaDescription } from '@/lib/catalog/content'
import { getProblemGuide } from '@/lib/catalog/problem-guides'

/** What search engines show at most (lib/seo.ts cuts at 155). */
const VISIBLE_LENGTH = 150

describe('getProblemMetaDescription', () => {
  it('starts with the question of the page, then the severity diagnosis', () => {
    // Arrange
    const problem = PROBLEMS[0]
    const category = getCategory(problem.categorySlug)!

    for (const lang of LANGUAGES) {
      // Act
      const description = getProblemMetaDescription(lang, problem, category)

      // Assert
      const question = problem.query[lang].trim()
      const { diagnosis } = getProblemContent(lang, problem, category)
      expect(description.startsWith(question), `${lang}`).toBe(true)
      expect(description.endsWith(diagnosis), `${lang}`).toBe(true)
      expect(description, `${lang}: doubled punctuation`).not.toMatch(/[.?!…]\./)
    }
  })

  it('gives every problem page of a language its own description', () => {
    for (const lang of LANGUAGES) {
      // Arrange
      const seen = new Map<string, string>()

      for (const problem of PROBLEMS) {
        const category = getCategory(problem.categorySlug)
        if (!category) continue

        // Act: same choice as generateMetadata of the page
        const description =
          getProblemGuide(lang, problem.slug)?.intro ??
          getProblemMetaDescription(lang, problem, category)
        const visible = description.slice(0, VISIBLE_LENGTH)

        // Assert
        expect(seen.get(visible), `${lang}/${problem.slug} repeats another page`).toBeUndefined()
        seen.set(visible, problem.slug)
      }
    }
  })
})
