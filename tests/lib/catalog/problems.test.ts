/**
 * Phase Y — troubleshooting seed parity.
 *
 * Problems drive Moteur 4. Phase Y ships a thin seed; the test is
 * deliberately permissive about count but strict about structure.
 */

import { describe, it, expect } from 'vitest'
import {
  PROBLEMS,
  getProblem,
  getProblemsByCategory,
} from '@/lib/catalog/problems'
import { CATEGORIES } from '@/lib/catalog/categories'

const LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const
const SLUG_RE = /^[a-z0-9-]+$/
const KNOWN_CATEGORY_SLUGS = new Set(CATEGORIES.map((c) => c.slug))
const KNOWN_SEVERITIES = new Set(['minor', 'moderate', 'critical'])

describe('PROBLEMS', () => {
  it('Phase Y seed is non-empty', () => {
    expect(PROBLEMS.length).toBeGreaterThan(0)
  })

  it('every slug is URL-safe', () => {
    for (const p of PROBLEMS) {
      expect(p.slug, `${p.slug} not URL-safe`).toMatch(SLUG_RE)
    }
  })

  it('slugs are unique within each category', () => {
    const byCat = new Map<string, Set<string>>()
    for (const p of PROBLEMS) {
      const set = byCat.get(p.categorySlug) ?? new Set<string>()
      expect(
        set.has(p.slug),
        `duplicate ${p.slug} within ${p.categorySlug}`
      ).toBe(false)
      set.add(p.slug)
      byCat.set(p.categorySlug, set)
    }
  })

  it('every categorySlug references a real category', () => {
    for (const p of PROBLEMS) {
      expect(
        KNOWN_CATEGORY_SLUGS.has(p.categorySlug),
        `${p.slug}: unknown category ${p.categorySlug}`
      ).toBe(true)
    }
  })

  it('every severity is a valid enum value', () => {
    for (const p of PROBLEMS) {
      expect(
        KNOWN_SEVERITIES.has(p.severity),
        `${p.slug}: unknown severity ${p.severity}`
      ).toBe(true)
    }
  })

  it('query is populated for all 6 locales on every problem', () => {
    for (const p of PROBLEMS) {
      expect(Object.keys(p.query).sort(), `${p.slug}.query keys`).toEqual(
        [...LANGS].sort()
      )
      for (const lang of LANGS) {
        expect(
          p.query[lang]?.trim().length,
          `${p.slug}.query.${lang}`
        ).toBeGreaterThan(0)
      }
    }
  })

  it('getProblem resolves known slugs', () => {
    expect(getProblem('ne-chauffe-plus')?.slug).toBe('ne-chauffe-plus')
    expect(getProblem('nope')).toBeUndefined()
  })

  it('getProblemsByCategory returns only problems for that category', () => {
    const airfryer = getProblemsByCategory('airfryers')
    for (const p of airfryer) {
      expect(p.categorySlug).toBe('airfryers')
    }
    expect(airfryer.length).toBeGreaterThan(0)
  })
})
