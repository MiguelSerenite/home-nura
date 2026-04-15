/**
 * Phase X — blog article date sanity.
 *
 * Article metadata drives three things that crawlers are very
 * picky about:
 *   1. Article JSON-LD schema (datePublished + dateModified)
 *   2. Sitemap <lastmod> entries
 *   3. The "updated" badge we render in the page header
 *
 * A date regression here (modified < published, ISO typo, future
 * date) doesn't break the page — it silently poisons the freshness
 * signal Google uses to decide whether to re-crawl. That's exactly
 * the kind of rot that compounds quietly.
 */

import { describe, it, expect } from 'vitest'
import { getAllArticles } from '@/lib/blog'
import { SITE_LAST_UPDATED_ISO } from '@/lib/seo'

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

const GRACE_DAYS = 2 // allow modest clock skew between CI runner + committed date

describe('blog article dates', () => {
  const articles = getAllArticles()
  const now = new Date(SITE_LAST_UPDATED_ISO).getTime()
  const graceMs = GRACE_DAYS * 24 * 60 * 60 * 1000

  it('there is at least one article', () => {
    expect(articles.length).toBeGreaterThan(0)
  })

  it.each(['datePublished', 'dateModified'] as const)(
    'every article has a YYYY-MM-DD %s',
    (field) => {
      for (const a of articles) {
        expect(a[field], `${a.slug}: ${field} not ISO`).toMatch(ISO_DATE)
      }
    }
  )

  it('every datePublished parses to a real Date', () => {
    for (const a of articles) {
      const t = new Date(a.datePublished).getTime()
      expect(Number.isFinite(t), `${a.slug}: datePublished unparseable`).toBe(true)
    }
  })

  it('dateModified is never earlier than datePublished', () => {
    for (const a of articles) {
      const pub = new Date(a.datePublished).getTime()
      const mod = new Date(a.dateModified).getTime()
      expect(
        mod,
        `${a.slug}: dateModified ${a.dateModified} < datePublished ${a.datePublished}`
      ).toBeGreaterThanOrEqual(pub)
    }
  })

  it('no article is dated in the future (vs SITE_LAST_UPDATED_ISO)', () => {
    for (const a of articles) {
      const pub = new Date(a.datePublished).getTime()
      const mod = new Date(a.dateModified).getTime()
      expect(pub, `${a.slug}: datePublished is in the future`).toBeLessThanOrEqual(
        now + graceMs
      )
      expect(mod, `${a.slug}: dateModified is in the future`).toBeLessThanOrEqual(
        now + graceMs
      )
    }
  })

  it('every article has a positive readingTime', () => {
    for (const a of articles) {
      expect(a.readingTime, `${a.slug}: readingTime`).toBeGreaterThan(0)
    }
  })

  it('slugs are unique and URL-safe', () => {
    const seen = new Set<string>()
    for (const a of articles) {
      expect(a.slug, `${a.slug} not URL-safe`).toMatch(/^[a-z0-9-]+$/)
      expect(seen.has(a.slug), `duplicate slug: ${a.slug}`).toBe(false)
      seen.add(a.slug)
    }
  })
})
