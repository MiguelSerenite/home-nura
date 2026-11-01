import { test, expect, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Market pages (data/market-pages/{locale}/{slug}.json): served under the
 * locale that owns them only, hreflang naming the page itself, the
 * comparison table within the first two phone screens with its first
 * column fixed, accessible, and listed on their category hub. Runs on the
 * first duel and the first guide of the data.
 */

const SEGMENT = { duel: 'vs', guide: 'guides', news: 'news' } as const
const OTHER_LOCALES = ['fr', 'de', 'it', 'us', 'en']
/** Category hubs that list market pages (lib/market-pages/hubs.ts). */
const HUB = /^\/[a-z]{2}\/(?:guides\/airfryers|cuisine-connectee\/[a-z-]+|(?:energie-domotique|securite-maison|confort-air|entretien-maison|outdoor-connecte)\/[a-z-]+|guides\/floor-care(?:\/[a-z-]+)?)$/
/** 390 × 844 (iPhone 14): the study's mobile check. */
const PHONE = { width: 390, height: 844 }

interface RawPage {
  locale: string
  type: keyof typeof SEGMENT
  slug: string
  h1: string
  related: string[]
  picks: { brand: string; model: string; asin: string | null }[]
}

function pages(): RawPage[] {
  const dir = join(process.cwd(), 'data', 'market-pages')
  return readdirSync(dir).flatMap((locale) =>
    readdirSync(join(dir, locale))
      .filter((name) => name.endsWith('.json'))
      .sort()
      .map((name) => JSON.parse(readFileSync(join(dir, locale, name), 'utf8')) as RawPage),
  )
}

const href = (page: RawPage) => `/${page.locale}/${SEGMENT[page.type]}/${page.slug}`
const samples = (['duel', 'guide'] as const).flatMap((type) => pages().filter((page) => page.type === type).slice(0, 1))

async function tableTop(page: Page): Promise<number> {
  const box = await page.locator('#comparison table').boundingBox()
  expect(box).not.toBeNull()
  return (box?.y ?? 0) + (await page.evaluate(() => window.scrollY))
}

for (const sample of samples) {
  test.describe(`market page ${href(sample)}`, () => {
    test('is served under its own locale only', async ({ request }) => {
      expect((await request.get(href(sample))).status()).toBe(200)
      for (const lang of OTHER_LOCALES.filter((l) => l !== sample.locale)) {
        const other = `/${lang}/${SEGMENT[sample.type]}/${sample.slug}`
        expect((await request.get(other)).status(), other).toBe(404)
      }
    })

    test('names itself only in hreflang and canonical', async ({ page }) => {
      await page.goto(href(sample))
      const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) => links.map((l) => l.getAttribute('href')))
      expect(alternates).toEqual([`https://homenura.com${href(sample)}`])
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://homenura.com${href(sample)}`)
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(sample.h1)
    })

    test('shows the comparison table before the third phone screen, first column fixed', async ({ page }) => {
      await page.setViewportSize(PHONE)
      await page.goto(href(sample))
      expect(await tableTop(page)).toBeLessThan(2 * PHONE.height)

      const region = page.locator('#comparison [role="group"]')
      const firstCell = page.locator('#comparison tbody tr').first().locator('th')
      const before = await firstCell.boundingBox()
      await region.evaluate((el) => el.scrollTo({ left: el.scrollWidth }))
      const after = await firstCell.boundingBox()
      expect(Math.round(after?.x ?? -1)).toBe(Math.round(before?.x ?? -2))
    })

    test('links every pick to Amazon with the locale’s store, next to the disclosure', async ({ page }) => {
      await page.goto(href(sample))
      const links = page.locator('#picks a[rel~="sponsored"]')
      await expect(links).toHaveCount(sample.picks.length)
      for (const url of await links.evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).href))) {
        const parsed = new URL(url)
        expect(parsed.origin).toBe(sample.locale === 'it' ? 'https://www.amazon.it' : 'https://www.amazon.fr')
        expect(parsed.searchParams.get('tag')).toMatch(/-21$/)
      }
      await expect(page.locator('#picks [data-amazon-disclosure]')).toHaveCount(1)
      await expect(page.locator('#testers a[rel~="sponsored"]')).toHaveCount(0)
    })

    test('is listed on its category hub', async ({ page }) => {
      const hub = sample.related.find((path) => HUB.test(path))
      test.skip(!hub, 'no category hub among its related links')
      await page.goto(hub as string)
      await expect(page.locator(`a[href="${href(sample)}"]`).first()).toBeVisible()
    })

    test('a11y', async ({ page }) => {
      await page.goto(href(sample))
      await page.waitForSelector('main', { state: 'attached' })
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
        // Same exception as e2e/a11y.spec.ts: JSON-LD script nodes outside landmarks.
        .disableRules(['region'])
        .analyze()
      expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`)).toEqual([])
    })
  })
}
