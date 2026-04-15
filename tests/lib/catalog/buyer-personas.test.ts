/**
 * Phase Y — buyer persona catalog parity.
 *
 * Personas drive Moteur 2 ("meilleur X pour Y"). The invariants here
 * prevent absurd combinations ("best airfryer for GDPR strict") from
 * being generated.
 */

import { describe, it, expect } from 'vitest'
import {
  BUYER_PERSONAS,
  getBuyerPersona,
  getPersonasForSilo,
  getPersonasByAxis,
} from '@/lib/catalog/buyer-personas'
import { META_SILOS } from '@/lib/catalog/meta-silos'

const LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const
const SLUG_RE = /^[a-z0-9-]+$/
const KNOWN_SILOS = new Set(META_SILOS.map((s) => s.slug))
const KNOWN_AXES = new Set(['household', 'budget', 'usage', 'constraint'])

describe('BUYER_PERSONAS', () => {
  it('ships at least one persona per axis', () => {
    for (const axis of KNOWN_AXES) {
      const personas = BUYER_PERSONAS.filter((p) => p.axis === axis)
      expect(personas.length, `axis ${axis}`).toBeGreaterThan(0)
    }
  })

  it('every slug is URL-safe and unique', () => {
    const seen = new Set<string>()
    for (const p of BUYER_PERSONAS) {
      expect(p.slug, `${p.slug} not URL-safe`).toMatch(SLUG_RE)
      expect(seen.has(p.slug), `duplicate slug ${p.slug}`).toBe(false)
      seen.add(p.slug)
    }
  })

  it('every axis is one of the 4 allowed values', () => {
    for (const p of BUYER_PERSONAS) {
      expect(KNOWN_AXES.has(p.axis), `${p.slug}: unknown axis ${p.axis}`).toBe(
        true
      )
    }
  })

  it('label is populated for all 6 locales on every persona', () => {
    for (const p of BUYER_PERSONAS) {
      expect(Object.keys(p.label).sort(), `${p.slug}.label keys`).toEqual(
        [...LANGS].sort()
      )
      for (const lang of LANGS) {
        expect(
          p.label[lang]?.trim().length,
          `${p.slug}.label.${lang}`
        ).toBeGreaterThan(0)
      }
    }
  })

  it('every applicableSilo references a known meta-silo', () => {
    for (const p of BUYER_PERSONAS) {
      expect(p.applicableSilos.length, `${p.slug}: empty applicableSilos`).toBeGreaterThan(0)
      for (const silo of p.applicableSilos) {
        expect(KNOWN_SILOS.has(silo), `${p.slug}: unknown silo ${silo}`).toBe(
          true
        )
      }
    }
  })

  it('getBuyerPersona resolves known slugs', () => {
    expect(getBuyerPersona('famille-4-personnes')?.slug).toBe('famille-4-personnes')
    expect(getBuyerPersona('nope')).toBeUndefined()
  })

  it('getPersonasForSilo returns only personas that apply to that silo', () => {
    const cuisine = getPersonasForSilo('cuisine-connectee')
    for (const p of cuisine) {
      expect(p.applicableSilos).toContain('cuisine-connectee')
    }
    // cuisine-connectee is the flagship — must have many personas to drive Moteur 2.
    expect(cuisine.length).toBeGreaterThanOrEqual(10)
  })

  it('getPersonasByAxis filters correctly', () => {
    const budgets = getPersonasByAxis('budget')
    for (const p of budgets) {
      expect(p.axis).toBe('budget')
    }
    expect(budgets.length).toBeGreaterThanOrEqual(3)
  })
})
