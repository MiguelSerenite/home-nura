/**
 * Phase Y — category catalog parity.
 *
 * Categories are the atom of the topical structure. Every invariant
 * here protects a downstream generator:
 *   - metaSilo must resolve (otherwise hub pages 404)
 *   - 6-locale title/description/primaryKeyword (otherwise Moteur 1
 *     emits empty strings into hreflang alternates)
 *   - slugs URL-safe and unique within a meta-silo (otherwise we
 *     collide on /{lang}/{silo}/{category})
 */

import { describe, it, expect } from 'vitest'
import {
  CATEGORIES,
  getCategory,
  getCategoriesBySilo,
  getIndexableCategories,
} from '@/lib/catalog/categories'
import { META_SILOS } from '@/lib/catalog/meta-silos'

const LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const
const SLUG_RE = /^[a-z0-9-]+$/
const KNOWN_SILOS = new Set(META_SILOS.map((s) => s.slug))

describe('CATEGORIES', () => {
  it('ships the Phase Y baseline category count', () => {
    // 14 + 12 + 10 + 10 + 8 + 8 = 62
    expect(CATEGORIES.length).toBeGreaterThanOrEqual(60)
  })

  it('every slug is URL-safe', () => {
    for (const c of CATEGORIES) {
      expect(c.slug, `${c.slug} not URL-safe`).toMatch(SLUG_RE)
    }
  })

  it('slugs are unique within each meta-silo', () => {
    const bySilo = new Map<string, Set<string>>()
    for (const c of CATEGORIES) {
      const set = bySilo.get(c.metaSilo) ?? new Set<string>()
      expect(
        set.has(c.slug),
        `duplicate slug ${c.slug} within ${c.metaSilo}`
      ).toBe(false)
      set.add(c.slug)
      bySilo.set(c.metaSilo, set)
    }
  })

  it('every metaSilo references a known meta-silo slug', () => {
    for (const c of CATEGORIES) {
      expect(
        KNOWN_SILOS.has(c.metaSilo),
        `${c.slug}: unknown metaSilo ${c.metaSilo}`
      ).toBe(true)
    }
  })

  it.each(['title', 'description', 'primaryKeyword'] as const)(
    '%s is populated for all 6 locales on every category',
    (field) => {
      for (const c of CATEGORIES) {
        const record = c[field]
        expect(Object.keys(record).sort(), `${c.slug}.${field} keys`).toEqual(
          [...LANGS].sort()
        )
        for (const lang of LANGS) {
          expect(
            record[lang]?.trim().length,
            `${c.slug}.${field}.${lang}`
          ).toBeGreaterThan(0)
        }
      }
    }
  )

  it('searchVolume is a valid enum value', () => {
    const allowed = new Set(['high', 'medium', 'low'])
    for (const c of CATEGORIES) {
      expect(allowed.has(c.searchVolume), `${c.slug}.searchVolume`).toBe(true)
    }
  })

  it('flagship silo owns at least 12 categories (depth gate buffer)', () => {
    const flagship = META_SILOS.find((s) => s.flagship)!
    const cats = CATEGORIES.filter((c) => c.metaSilo === flagship.slug)
    expect(cats.length).toBeGreaterThanOrEqual(12)
  })

  it('every meta-silo has at least 6 categories (minimum topical depth)', () => {
    for (const silo of META_SILOS) {
      const cats = CATEGORIES.filter((c) => c.metaSilo === silo.slug)
      expect(
        cats.length,
        `${silo.slug} has only ${cats.length} categories`
      ).toBeGreaterThanOrEqual(6)
    }
  })

  it('getCategory resolves known slugs and returns undefined for unknown ones', () => {
    expect(getCategory('airfryers')?.slug).toBe('airfryers')
    expect(getCategory('not-a-thing')).toBeUndefined()
  })

  it('getCategoriesBySilo returns only categories of the requested silo', () => {
    const cuisine = getCategoriesBySilo('cuisine-connectee')
    for (const c of cuisine) {
      expect(c.metaSilo).toBe('cuisine-connectee')
    }
    expect(cuisine.length).toBeGreaterThan(0)
  })

  it('getIndexableCategories returns only indexable=true categories', () => {
    const indexable = getIndexableCategories()
    for (const c of indexable) {
      expect(c.indexable).toBe(true)
    }
    // Phase Y baseline — legacy airfryers/multicuiseurs/etc are indexable
    expect(indexable.length).toBeGreaterThanOrEqual(6)
  })
})
