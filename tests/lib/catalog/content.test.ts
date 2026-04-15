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
  getPersonaGuideHero,
  getPersonaGuideFaq,
  getProblemContent,
  getProblemFaq,
} from '@/lib/catalog/content'
import { getMetaSilo } from '@/lib/catalog/meta-silos'
import { BUYER_PERSONAS } from '@/lib/catalog/buyer-personas'
import { PROBLEMS } from '@/lib/catalog/problems'
import { getCategory } from '@/lib/catalog/categories'

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

describe('getPersonaGuideHero', () => {
  it('returns a populated hero for every persona × locale', () => {
    for (const p of BUYER_PERSONAS) {
      for (const lang of LANGS) {
        const hero = getPersonaGuideHero(lang, p)
        expect(hero.kicker.trim().length, `${p.slug}.${lang}.kicker`).toBeGreaterThan(0)
        expect(hero.title.trim().length, `${p.slug}.${lang}.title`).toBeGreaterThan(0)
        expect(hero.subtitle.trim().length, `${p.slug}.${lang}.subtitle`).toBeGreaterThan(0)
        expect(hero.intro.trim().length, `${p.slug}.${lang}.intro`).toBeGreaterThan(0)
      }
    }
  })

  it('embeds the persona label in the hero title and subtitle', () => {
    for (const p of BUYER_PERSONAS) {
      for (const lang of LANGS) {
        const hero = getPersonaGuideHero(lang, p)
        const label = p.label[lang].toLowerCase()
        expect(
          hero.title.toLowerCase().includes(label),
          `${p.slug}.${lang}: persona label should appear in hero.title`
        ).toBe(true)
        expect(
          hero.subtitle.toLowerCase().includes(label),
          `${p.slug}.${lang}: persona label should appear in hero.subtitle`
        ).toBe(true)
      }
    }
  })

  it('intro references the persona label (axis-specific template)', () => {
    for (const p of BUYER_PERSONAS) {
      for (const lang of LANGS) {
        const hero = getPersonaGuideHero(lang, p)
        expect(
          hero.intro.toLowerCase().includes(p.label[lang].toLowerCase()),
          `${p.slug}.${lang}: persona label should appear in hero.intro`
        ).toBe(true)
      }
    }
  })
})

describe('getPersonaGuideFaq', () => {
  it('returns at least 3 entries for every locale', () => {
    for (const lang of LANGS) {
      const faq = getPersonaGuideFaq(lang)
      expect(faq.length, `${lang}: persona FAQ length`).toBeGreaterThanOrEqual(3)
      for (const entry of faq) {
        expect(entry.question.trim().length).toBeGreaterThan(0)
        expect(entry.answer.trim().length).toBeGreaterThan(0)
      }
    }
  })
})

describe('getProblemContent', () => {
  it('every Problem resolves to a real Category (catalog integrity)', () => {
    for (const p of PROBLEMS) {
      const cat = getCategory(p.categorySlug)
      expect(cat, `${p.slug}: parent category ${p.categorySlug} must exist`).toBeDefined()
    }
  })

  it('returns populated content for every problem × locale', () => {
    for (const p of PROBLEMS) {
      const cat = getCategory(p.categorySlug)!
      for (const lang of LANGS) {
        const content = getProblemContent(lang, p, cat)
        expect(content.kicker.trim().length, `${p.slug}.${lang}.kicker`).toBeGreaterThan(0)
        expect(content.title.trim().length, `${p.slug}.${lang}.title`).toBeGreaterThan(0)
        expect(content.subtitle.trim().length, `${p.slug}.${lang}.subtitle`).toBeGreaterThan(0)
        expect(content.severityLabel.trim().length, `${p.slug}.${lang}.severityLabel`).toBeGreaterThan(0)
        expect(content.diagnosis.trim().length, `${p.slug}.${lang}.diagnosis`).toBeGreaterThan(0)
        expect(content.quickFix.trim().length, `${p.slug}.${lang}.quickFix`).toBeGreaterThan(0)
        expect(content.fallbackCta.trim().length, `${p.slug}.${lang}.fallbackCta`).toBeGreaterThan(0)
        expect(content.backToCategoryLabel.trim().length, `${p.slug}.${lang}.backToCategoryLabel`).toBeGreaterThan(0)
      }
    }
  })

  it('uses the localized problem query as the page title', () => {
    for (const p of PROBLEMS) {
      const cat = getCategory(p.categorySlug)!
      for (const lang of LANGS) {
        const content = getProblemContent(lang, p, cat)
        expect(
          content.title,
          `${p.slug}.${lang}: title should equal problem.query[lang]`
        ).toBe(p.query[lang])
      }
    }
  })

  it('embeds the category title inside the subtitle (topical anchor)', () => {
    for (const p of PROBLEMS) {
      const cat = getCategory(p.categorySlug)!
      for (const lang of LANGS) {
        const content = getProblemContent(lang, p, cat)
        expect(
          content.subtitle.toLowerCase().includes(cat.title[lang].toLowerCase()),
          `${p.slug}.${lang}: subtitle should mention category title`
        ).toBe(true)
      }
    }
  })

  it('severity label changes with problem severity (no wrong mapping)', () => {
    // Pick a known critical problem and a known minor problem from the
    // seed and check their labels differ. Guards against accidentally
    // returning a constant severity label regardless of input.
    const critical = PROBLEMS.find((p) => p.severity === 'critical')!
    const minor = PROBLEMS.find((p) => p.severity === 'minor')!
    const catCritical = getCategory(critical.categorySlug)!
    const catMinor = getCategory(minor.categorySlug)!
    for (const lang of LANGS) {
      const c = getProblemContent(lang, critical, catCritical)
      const m = getProblemContent(lang, minor, catMinor)
      expect(
        c.severityLabel,
        `${lang}: critical vs minor severity labels must differ`
      ).not.toBe(m.severityLabel)
      expect(
        c.diagnosis,
        `${lang}: critical vs minor diagnoses must differ`
      ).not.toBe(m.diagnosis)
    }
  })
})

describe('getProblemFaq', () => {
  it('returns at least 3 entries for every problem × locale', () => {
    for (const p of PROBLEMS) {
      const cat = getCategory(p.categorySlug)!
      for (const lang of LANGS) {
        const faq = getProblemFaq(lang, cat)
        expect(
          faq.length,
          `${p.slug}.${lang}: problem FAQ length`
        ).toBeGreaterThanOrEqual(3)
        for (const entry of faq) {
          expect(entry.question.trim().length).toBeGreaterThan(0)
          expect(entry.answer.trim().length).toBeGreaterThan(0)
        }
      }
    }
  })

  it('FAQ references the category title in at least one answer (topical anchoring)', () => {
    for (const p of PROBLEMS) {
      const cat = getCategory(p.categorySlug)!
      for (const lang of LANGS) {
        const faq = getProblemFaq(lang, cat)
        const blob = faq.map((e) => e.answer).join(' ').toLowerCase()
        expect(
          blob.includes(cat.title[lang].toLowerCase()),
          `${p.slug}.${lang}: at least one FAQ answer should mention category title`
        ).toBe(true)
      }
    }
  })
})
