import { test, expect, type Page } from '@playwright/test'

/**
 * "Answer first" category hubs (lib/catalog/answer-first, study § 2.6.3):
 * on a 390 × 844 phone the comparison table starts within the first two
 * screens and keeps its first column fixed; the header's date is the
 * Article dateModified; every jump link has its block. Plus the robot
 * cooker hub, indexed in five markets only, and the per-edition
 * Organization JSON-LD.
 */

const PHONE = { width: 390, height: 844 }
const HUBS: Readonly<Record<string, string>> = {
  'chauffages-appoint': '/confort-air/chauffages-appoint',
  deshumidificateurs: '/confort-air/deshumidificateurs',
  'purificateurs-air': '/confort-air/purificateurs-air',
  'aspirateurs-robots': '/entretien-maison/aspirateurs-robots',
  cafetieres: '/cuisine-connectee/cafetieres',
  thermostats: '/energie-domotique/thermostats',
}
/** A European locale with long words, French, and the US (its own picks). */
const LOCALES = ['fr', 'de', 'us'] as const
const ROBOT_COOKER = '/cuisine-connectee/robots-multifonctions'
const ROBOT_COOKER_LOCALES = ['fr', 'de', 'es', 'it', 'pl']

async function jsonLd(page: Page): Promise<Record<string, unknown>[]> {
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents()
  return blocks.map((text) => JSON.parse(text) as Record<string, unknown>)
}

test.beforeEach(async ({ page }) => {
  // Web-vitals beacons are answered here: this spec loads many pages and
  // would spend /api/vitals' per-IP rate limit for the specs after it.
  await page.addInitScript(() => {
    const send = navigator.sendBeacon?.bind(navigator)
    if (send) navigator.sendBeacon = (url, data) => (String(url).includes('/api/vitals') ? true : send(url, data))
  })
  await page.route('**/api/vitals', (route) => route.fulfill({ status: 204 }))
})

for (const lang of LOCALES) {
  for (const [slug, path] of Object.entries(HUBS)) {
    test(`${lang} ${slug}: table before the third phone screen, first column fixed, dated like its JSON-LD`, async ({ page }) => {
      await page.setViewportSize(PHONE)
      await page.goto(`/${lang}${path}`)

      const table = page.locator('#comparison table')
      const box = await table.boundingBox()
      expect(box).not.toBeNull()
      const top = (box?.y ?? 0) + (await page.evaluate(() => window.scrollY))
      expect(top).toBeLessThan(2 * PHONE.height)
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(PHONE.width)

      const region = page.locator('#comparison [role="group"]')
      const firstCell = page.locator('#comparison tbody tr').first().locator('th')
      const before = await firstCell.boundingBox()
      await region.evaluate((el) => el.scrollTo({ left: el.scrollWidth }))
      const after = await firstCell.boundingBox()
      expect(Math.round(after?.x ?? -1)).toBe(Math.round(before?.x ?? -2))

      // Picks first, then the table, then why this ranking.
      const order = await page.evaluate(() =>
        ['#picks', '#comparison', '#ranking'].map((id) => {
          const el = document.querySelector(id)
          return el ? el.getBoundingClientRect().top + window.scrollY : null
        }),
      )
      expect(order, 'picks, table and ranking are on the page').not.toContain(null)
      expect([...order].sort((a, b) => (a ?? 0) - (b ?? 0))).toEqual(order)

      const visible = await page.locator('main header time').first().getAttribute('datetime')
      const article = (await jsonLd(page)).find((schema) => schema['@type'] === 'Article')
      expect(article, 'Article JSON-LD').toBeDefined()
      expect(String(article?.dateModified).slice(0, 10)).toBe(visible)

      for (const href of await page.locator('nav[aria-labelledby="contents-title"] a').evaluateAll((as) => as.map((a) => a.getAttribute('href')))) {
        await expect(page.locator(String(href)), String(href)).toHaveCount(1)
      }
      await expect(page.locator('#ranking a[href$="/methodologie"]')).toHaveCount(1)
    })
  }
}

test('dates the US hubs on the North-American picks (1 November 2026) and lists that change', async ({ page }) => {
  await page.goto('/us/confort-air/chauffages-appoint')
  await expect(page.locator('main header time').first()).toHaveAttribute('datetime', '2026-11-01')
  await expect(page.locator('#changelog')).toContainText('Picks updated to the models sold in the United States.')
})

test('serves the robot cooker hub in fr, de, es, it and pl only, with hreflang among them', async ({ page, request }) => {
  for (const lang of ['fr', 'en', 'de', 'es', 'it', 'nl', 'pl', 'sv', 'us', 'ca']) {
    const status = (await request.get(`/${lang}${ROBOT_COOKER}`)).status()
    expect(status, lang).toBe(ROBOT_COOKER_LOCALES.includes(lang) ? 200 : 404)
  }
  await page.goto(`/de${ROBOT_COOKER}`)
  const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) => links.map((l) => l.getAttribute('hreflang')))
  expect(alternates.sort()).toEqual([...ROBOT_COOKER_LOCALES, 'x-default'].sort())
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /^index/)
  // The language switcher never links a locale without the hub.
  await expect(page.locator(`a[href="/nl${ROBOT_COOKER}"]`)).toHaveCount(0)
})

test('describes the organization per edition: no GDPR or European wording on /us, European markets on /fr', async ({ page }) => {
  await page.goto('/us')
  const us = (await jsonLd(page)).find((schema) => schema['@type'] === 'Organization')
  expect(us?.areaServed).toEqual([{ '@type': 'Country', name: 'United States' }])
  expect(JSON.stringify(us)).not.toMatch(/GDPR|\bEU\b|Europe/i)

  await page.goto('/fr')
  const fr = (await jsonLd(page)).find((schema) => schema['@type'] === 'Organization')
  const countries = (fr?.areaServed as { name: string }[]).map((c) => c.name)
  expect(countries).toContain('France')
  expect(countries).not.toContain('United States')
})
