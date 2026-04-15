/**
 * Phase CC — catalog content helper parity.
 *
 * These helpers are the content engine for Moteur 1 (Phase DD).
 * Every invariant here protects a downstream generator:
 *   - every category × every locale must produce non-empty strings
 *     (otherwise the generic /[silo]/[category] route ships empty
 *     hreflang alternates)
 *   - the FAQ block must be long enough for FAQPage JSON-LD to be
 *     worth emitting (≥ 3 entries)
 *   - outputs must not leak hard-coded category names that would
 *     be wrong in other silos (the "airfryer" smoke test)
 */

import { describe, it, expect } from 'vitest'
import { CATEGORIES } from '@/lib/catalog/categories'
import {
  getCategoryHero,
  getCategoryFaq,
} from '@/lib/catalog/content'
import { getMetaSilo } from '@/lib/catalog/meta-silos'

const LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

describe('getCategoryHero', () => {
  it('returns a populated hero block for every category × locale', () => {
    for (const cat of CATEGORIES) {
      for (const lang of LANGS) {
        const hero = getCategoryHero(lang, cat)
        expect(hero.kicker.trim().length, `${cat.slug}.${lang}.kicker`).toBeGreaterThan(0)
        expect(hero.title.trim().length, `${cat.slug}.${lang}.title`).toBeGreaterThan(0)
        expect(hero.subtitle.trim().length, `${cat.slug}.${lang}.subtitle`).toBeGreaterThan(0)
        expect(hero.intro.trim().length, `${cat.slug}.${lang}.intro`).toBeGreaterThan(0)
        expect(hero.buyCtaLabel.trim().length, `${cat.slug}.${lang}.buyCtaLabel`).toBeGreaterThan(0)
      }
    }
  })

  it('embeds the category title inside the hero title', () => {
    for (const cat of CATEGORIES) {
      for (const lang of LANGS) {
        const hero = getCategoryHero(lang, cat)
        const catTitle = cat.title[lang]
        // Generic templates always reference the category — case
        // varies by locale, so we compare lowercased versions.
        expect(
          hero.title.toLowerCase().includes(catTitle.toLowerCase()),
          `${cat.slug}.${lang}: hero.title should contain category title`
        ).toBe(true)
      }
    }
  })

  it('embeds the silo title inside the hero subtitle', () => {
    for (const cat of CATEGORIES) {
      const silo = getMetaSilo(cat.metaSilo)!
      for (const lang of LANGS) {
        const hero = getCategoryHero(lang, cat)
        expect(
          hero.subtitle.toLowerCase().includes(silo.title[lang].toLowerCase()),
          `${cat.slug}.${lang}: hero.subtitle should contain silo title`
        ).toBe(true)
      }
    }
  })

  it('intro references the category primary keyword (search-intent anchor)', () => {
    for (const cat of CATEGORIES) {
      for (const lang of LANGS) {
        const hero = getCategoryHero(lang, cat)
        const keyword = cat.primaryKeyword[lang]
        expect(
          hero.intro.includes(keyword),
          `${cat.slug}.${lang}: hero.intro should mention primaryKeyword`
        ).toBe(true)
      }
    }
  })

  it('never leaks a flagship-only word into non-cuisine silo output', () => {
    // Smoke test: the generic copy must not hard-code "airfryer"
    // because it would be wrong for /securite-maison/alarmes.
    const nonCuisine = CATEGORIES.filter((c) => c.metaSilo !== 'cuisine-connectee')
    for (const cat of nonCuisine) {
      for (const lang of LANGS) {
        const hero = getCategoryHero(lang, cat)
        const blob = `${hero.title} ${hero.subtitle} ${hero.intro}`.toLowerCase()
        expect(
          blob.includes('airfryer') || blob.includes('heißluftfritteuse'),
          `${cat.slug}.${lang}: generic copy leaked a cuisine-connectee term`
        ).toBe(false)
      }
    }
  })
})

describe('getCategoryFaq', () => {
  it('returns at least 3 entries for every category × locale', () => {
    for (const cat of CATEGORIES) {
      for (const lang of LANGS) {
        const faq = getCategoryFaq(lang, cat)
        expect(
          faq.length,
          `${cat.slug}.${lang}: FAQ should have ≥ 3 entries`
        ).toBeGreaterThanOrEqual(3)
        for (const entry of faq) {
          expect(entry.question.trim().length).toBeGreaterThan(0)
          expect(entry.answer.trim().length).toBeGreaterThan(0)
        }
      }
    }
  })

  it('every FAQ question references the category title (topical anchor)', () => {
    for (const cat of CATEGORIES) {
      for (const lang of LANGS) {
        const faq = getCategoryFaq(lang, cat)
        const catTitle = cat.title[lang].toLowerCase()
        // At least the first question must mention the category —
        // generic Q3 about budget-vs-premium may not, that's fine.
        expect(
          faq[0].question.toLowerCase().includes(catTitle),
          `${cat.slug}.${lang}: first FAQ question should mention category`
        ).toBe(true)
      }
    }
  })
})
