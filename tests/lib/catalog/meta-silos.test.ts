/**
 * Phase Y — meta-silo catalog parity.
 *
 * These tests are the load-bearing invariants for the war machine.
 * Every meta-silo ships six locales, exactly one is the flagship,
 * slugs are URL-safe, priorities are unique. If any of this drifts
 * the Moteur generators start emitting garbage URLs.
 */

import { describe, it, expect } from 'vitest'
import {
  META_SILOS,
  getMetaSilo,
  getFlagshipSilo,
  getIndexableSilos,
} from '@/lib/catalog/meta-silos'

const LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const
const SLUG_RE = /^[a-z0-9-]+$/

describe('META_SILOS', () => {
  it('ships at least 6 meta-silos', () => {
    expect(META_SILOS.length).toBeGreaterThanOrEqual(6)
  })

  it('every slug is URL-safe', () => {
    for (const s of META_SILOS) {
      expect(s.slug, `${s.slug} not URL-safe`).toMatch(SLUG_RE)
    }
  })

  it('slugs are unique', () => {
    const seen = new Set<string>()
    for (const s of META_SILOS) {
      expect(seen.has(s.slug), `duplicate slug ${s.slug}`).toBe(false)
      seen.add(s.slug)
    }
  })

  it('priorities are unique', () => {
    const seen = new Set<number>()
    for (const s of META_SILOS) {
      expect(seen.has(s.priority), `duplicate priority ${s.priority}`).toBe(
        false
      )
      seen.add(s.priority)
    }
  })

  it.each(['title', 'description'] as const)(
    '%s is populated for all 6 locales on every silo',
    (field) => {
      for (const s of META_SILOS) {
        const record = s[field]
        expect(Object.keys(record).sort(), `${s.slug}.${field} keys`).toEqual(
          [...LANGS].sort()
        )
        for (const lang of LANGS) {
          expect(
            record[lang]?.trim().length,
            `${s.slug}.${field}.${lang}`
          ).toBeGreaterThan(0)
        }
      }
    }
  )

  it('exactly one silo is flagship', () => {
    const flagships = META_SILOS.filter((s) => s.flagship)
    expect(flagships.length).toBe(1)
  })

  it('getFlagshipSilo returns the flagship silo', () => {
    const f = getFlagshipSilo()
    expect(f.flagship).toBe(true)
    expect(f.slug).toBe('cuisine-connectee')
  })

  it('getMetaSilo resolves known slugs and returns undefined for unknown ones', () => {
    expect(getMetaSilo('cuisine-connectee')?.slug).toBe('cuisine-connectee')
    expect(getMetaSilo('does-not-exist')).toBeUndefined()
  })

  it('getIndexableSilos returns only silos with indexable=true', () => {
    const indexable = getIndexableSilos()
    for (const s of indexable) {
      expect(s.indexable).toBe(true)
    }
  })

  it('at least one silo is indexable (Phase Y baseline)', () => {
    const indexable = getIndexableSilos()
    expect(indexable.length).toBeGreaterThanOrEqual(1)
  })
})
