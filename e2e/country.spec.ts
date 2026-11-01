import { test, expect, type BrowserContext, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

/**
 * The right version for the right country, without blocking anyone:
 *
 *   - / is the entry page: the IP country's versions first (one big button
 *     above the fold on a phone), the browser's languages otherwise, the
 *     plain list for crawlers; a remembered choice goes straight there.
 *   - deep links never redirect; a discreet suggestion offers the IP
 *     country's version, keeps the page, and is never shown again once
 *     accepted or closed.
 *   - the header's country selector (phones included) keeps the page, or
 *     lands on the closest equivalent and says so on arrival.
 *   - merchant links always follow the version displayed.
 */

const PHONE = { width: 390, height: 844 }
const GOOGLEBOT = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']

// This spec loads many pages: answer the web-vitals beacons here so the
// per-IP rate limit of /api/vitals is left for the other specs.
test.beforeEach(async ({ page }) => {
  await page.route('**/api/vitals', (route) => route.fulfill({ status: 204 }))
})

async function cookieValue(context: BrowserContext, name: string): Promise<string | undefined> {
  return (await context.cookies()).find((cookie) => cookie.name === name)?.value
}

async function setCountry(context: BrowserContext, baseURL: string | undefined, country: string) {
  const { hostname } = new URL(baseURL ?? 'http://127.0.0.1:3000')
  await context.addCookies([{ name: 'hn_country', value: country, domain: hostname, path: '/' }])
}

const choices = (page: Page, section: 'entry-suggested' | 'entry-all') =>
  page.locator(`section[aria-labelledby="${section}"] [data-entry-choice]`).evaluateAll((links) => links.map((link) => link.getAttribute('data-entry-choice')))

async function expectNoAxeViolations(page: Page) {
  const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).disableRules(['region']).analyze()
  const report = results.violations.map((v) => `[${v.impact}] ${v.id}: ${v.help}\n  ${v.nodes.slice(0, 3).map((n) => n.target.join(' ')).join('\n  ')}`).join('\n')
  expect(results.violations, report).toEqual([])
}

test.describe('entry page (/)', () => {
  test('proposes the IP country first, one big button above the fold on a phone, the rest below', async ({ page }) => {
    await page.setViewportSize(PHONE)
    await page.setExtraHTTPHeaders({ 'x-vercel-ip-country': 'BE' })
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)
    expect(new URL(page.url()).pathname).toBe('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
    expect(await choices(page, 'entry-suggested')).toEqual(['fr', 'nl'])
    expect(await choices(page, 'entry-all')).toEqual(['de', 'en', 'es', 'it', 'pl', 'sv', 'us', 'ca'])
    const big = page.locator('section[aria-labelledby="entry-suggested"] [data-entry-choice="fr"]')
    await expect(big).toContainText('Home Nura France')
    const box = await big.boundingBox()
    expect(box).not.toBeNull()
    expect((box?.y ?? 0) + (box?.height ?? 0)).toBeLessThanOrEqual(PHONE.height)
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(64)
    // Text only: the small logo is the one image.
    expect(await page.locator('img').count()).toBe(1)
  })

  test('orders the list by browser language, nothing preselected, for an unserved country', async ({ request }) => {
    // The browser's own Accept-Language (its locale) cannot be overridden reliably: send the request directly.
    const response = await request.get('/', { headers: { 'x-vercel-ip-country': 'JP', 'accept-language': 'ja-JP,de;q=0.8,en-US;q=0.6' }, maxRedirects: 0 })
    expect(response.status()).toBe(200)
    const html = await response.text()
    expect(html).not.toContain('aria-labelledby="entry-suggested"')
    expect([...html.matchAll(/data-entry-choice="([a-z]+)"/g)].map((m) => m[1]).slice(0, 2)).toEqual(['de', 'en'])
    expect(html).toMatch(/<html lang="de"/)
  })

  test('gives crawlers the plain indexable list, x-default of the home pages', async ({ browser, baseURL }) => {
    const context = await browser.newContext({ baseURL, userAgent: GOOGLEBOT, extraHTTPHeaders: { 'x-vercel-ip-country': 'US' } })
    const page = await context.newPage()
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('section[aria-labelledby="entry-suggested"]')).toHaveCount(0)
    expect(await choices(page, 'entry-all')).toEqual(['fr', 'de', 'en', 'es', 'it', 'nl', 'pl', 'sv', 'us', 'ca'])
    // Next.js serializes the root URL without its trailing slash: the same URL.
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\/homenura\.com\/?$/)
    await expect(page.locator('meta[name="robots"]')).not.toHaveAttribute('content', /noindex/)
    const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) => links.map((l) => `${l.getAttribute('hreflang')} ${l.getAttribute('href')}`))
    expect(alternates).toHaveLength(11)
    expect(alternates.filter((a) => /^x-default https:\/\/homenura\.com\/?$/.test(a))).toHaveLength(1)
    expect(alternates).toContain('en-US https://homenura.com/us')
    await context.close()
  })

  test('remembers the version picked: the next visit to / goes straight there', async ({ page, context }) => {
    await page.setExtraHTTPHeaders({ 'x-vercel-ip-country': 'US' })
    await page.goto('/')
    await page.locator('section[aria-labelledby="entry-suggested"] [data-entry-choice="us"]').click()
    await expect(page).toHaveURL(/\/us$/)
    expect(await cookieValue(context, 'hn_market')).toBe('us')
    await page.goto('/')
    await expect(page).toHaveURL(/\/us$/)
  })

  test('is accessible', async ({ page }) => {
    await page.setExtraHTTPHeaders({ 'x-vercel-ip-country': 'CH' })
    await page.goto('/')
    await page.keyboard.press('Tab')
    await expect(page.locator(':focus')).toHaveAttribute('href', '#main')
    await expectNoAxeViolations(page)
  })
})

test.describe('home pages: hreflang', () => {
  test('name the entry page as x-default, and deep pages keep the French one', async ({ page }) => {
    await page.goto('/fr')
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', /^https:\/\/homenura\.com\/?$/)
    await page.goto('/us/guides/airfryers')
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', 'https://homenura.com/fr/guides/airfryers')
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', 'https://homenura.com/us/guides/airfryers')
  })
})

test.describe('deep links', () => {
  test('never redirect, whatever the remembered choice or the IP country', async ({ request }) => {
    for (const path of ['/de/blog', '/us', '/fr/guides/airfryers', '/us/vs/ring-vs-blink']) {
      const response = await request.get(path, { headers: { cookie: 'hn_market=it; NEXT_LOCALE=it', 'x-vercel-ip-country': 'IT' }, maxRedirects: 0 })
      expect(response.status(), path).toBe(200)
    }
  })
})

test.describe('locale suggestion', () => {
  test('offers a US visitor Home Nura US in English, keeps the page, and is not shown again', async ({ page, context, baseURL }) => {
    await setCountry(context, baseURL, 'US')
    await page.goto('/fr/guides/airfryers')
    expect(new URL(page.url()).pathname).toBe('/fr/guides/airfryers')
    const banner = page.getByTestId('locale-suggestion')
    await expect(banner).toBeVisible()
    await expect(banner).toHaveAttribute('lang', 'en-US')
    await expect(banner).toContainText('Shopping in the United States?')
    const cta = banner.getByRole('link', { name: 'See Home Nura US' })
    await expect(cta).toHaveAttribute('href', '/us/guides/airfryers')
    await cta.click()
    await expect(page).toHaveURL(/\/us\/guides\/airfryers$/)
    expect(await cookieValue(context, 'hn_market')).toBe('us')
    await expect(page.getByTestId('locale-suggestion')).toHaveCount(0)
    await page.goto('/fr/blog')
    await expect(page.locator('main')).toBeVisible()
    await expect(page.getByTestId('locale-suggestion')).toHaveCount(0)
  })

  test('closing it hides it for good', async ({ page, context, baseURL }) => {
    await setCountry(context, baseURL, 'ES')
    await page.goto('/en/blog')
    const cta = page.getByRole('link', { name: 'Ver Home Nura España' })
    await expect(cta).toHaveAttribute('href', '/es/blog')
    await page.getByRole('button', { name: 'Cerrar' }).click()
    await expect(cta).toHaveCount(0)
    expect(await cookieValue(context, 'hn_geo_dismissed')).toBe('1')
    await page.reload()
    await expect(page.locator('main')).toBeVisible()
    await expect(page.getByTestId('locale-suggestion')).toHaveCount(0)
  })

  test('offers a Belgian visitor French and Dutch', async ({ page, context, baseURL }) => {
    await setCountry(context, baseURL, 'BE')
    await page.goto('/en/blog')
    const banner = page.getByTestId('locale-suggestion')
    await expect(banner).toContainText('Vous lisez le français ?')
    await expect(banner.getByRole('link', { name: 'Voir Home Nura France' })).toHaveAttribute('href', '/fr/blog')
    await expect(banner.getByRole('link', { name: 'Naar Home Nura Nederland' })).toHaveAttribute('href', '/nl/blog')
  })

  test('sits in the flow on a phone: above the header, covering nothing, and accessible', async ({ page, context, baseURL }) => {
    await page.setViewportSize(PHONE)
    await setCountry(context, baseURL, 'DE')
    await page.goto('/fr/guides/airfryers')
    const banner = page.getByTestId('locale-suggestion')
    await expect(banner).toBeVisible()
    expect(await banner.evaluate((el) => getComputedStyle(el).position)).toBe('static')
    const bannerBox = await banner.boundingBox()
    const navBox = await page.locator('nav').first().boundingBox()
    expect((navBox?.y ?? 0) + 0.5).toBeGreaterThanOrEqual((bannerBox?.y ?? 0) + (bannerBox?.height ?? 0))
    await expectNoAxeViolations(page)
  })
})

test.describe('country selector', () => {
  test.use({ viewport: PHONE })

  test('is in the phone header and opens the ten versions, keeping the page', async ({ page, context }) => {
    await page.goto('/fr/guides/airfryers')
    const button = page.getByTestId('country-selector')
    await expect(button).toBeVisible()
    await expect(button).toHaveText(/FR/)
    await expect(button).toHaveAttribute('aria-expanded', 'false')
    await button.click()
    await expect(button).toHaveAttribute('aria-expanded', 'true')
    const list = page.locator(`[id="${await button.getAttribute('aria-controls')}"]`)
    await expect(list.getByRole('link')).toHaveCount(10)
    await expect(list.locator('[aria-current="true"]')).toContainText('France')
    await expect(list.getByRole('link', { name: /United States/ })).toHaveAttribute('href', '/us/guides/airfryers')
    await list.getByRole('link', { name: /Italia/ }).click()
    await expect(page).toHaveURL(/\/it\/guides\/airfryers$/)
    expect(await cookieValue(context, 'hn_market')).toBe('it')
    await expect(page.getByTestId('country-selector')).toHaveText(/IT/)
  })

  test('works with the keyboard: Enter opens, Escape closes and returns focus', async ({ page }) => {
    await page.goto('/de/blog')
    const button = page.getByTestId('country-selector')
    await button.focus()
    await page.keyboard.press('Enter')
    await expect(button).toHaveAttribute('aria-expanded', 'true')
    await page.keyboard.press('Tab')
    await expect(page.locator(':focus')).toHaveAttribute('hreflang', 'fr')
    await page.keyboard.press('Escape')
    await expect(button).toHaveAttribute('aria-expanded', 'false')
    await expect(button).toBeFocused()
  })

  test('fits a 360 px phone header without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 780 })
    await page.goto('/us/guides/airfryers')
    const button = page.getByTestId('country-selector')
    const box = await button.boundingBox()
    expect((box?.x ?? 0) + (box?.width ?? 0)).toBeLessThanOrEqual(360)
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeInViewport()
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(360)
  })

  test('is accessible when open', async ({ page }) => {
    await page.goto('/fr/guides/airfryers')
    await page.getByTestId('country-selector').click()
    await expectNoAxeViolations(page)
  })

  test("sends a market page to its hub in the other versions, and says why on arrival", async ({ page }) => {
    await page.goto('/us/vs/ring-vs-blink')
    await page.getByTestId('country-selector').click()
    const link = page.getByRole('link', { name: /Deutschland/ })
    await expect(link).toHaveAttribute('href', '/de/securite-maison/sonnettes-video?switched=market&from=us')
    await link.click()
    await expect(page).toHaveURL(/\/de\/securite-maison\/sonnettes-video$/)
    const notice = page.getByTestId('locale-arrival')
    await expect(notice).toContainText('Diese Seite gibt es nur bei Home Nura US.')
    await expect(notice).toContainText('für Deutschland')
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://homenura.com/de/securite-maison/sonnettes-video')
    await expectNoAxeViolations(page)
    await page.getByRole('button', { name: 'Schließen' }).click()
    await expect(notice).toHaveCount(0)
  })

  test("sends a Black Friday category the market lacks to that market's Black Friday hub, announced", async ({ page }) => {
    await page.goto('/fr/black-friday/multicuiseurs')
    await page.getByTestId('country-selector').click()
    await page.getByRole('link', { name: /Deutschland/ }).click()
    await expect(page).toHaveURL(/\/de\/black-friday$/)
    await expect(page.getByTestId('locale-arrival')).toContainText('Hier ist unsere Black-Friday-Seite.')
  })
})

test.describe('merchant links', () => {
  const tags = (page: Page) =>
    page.locator('a[href*="amazon."]').evaluateAll((links) => links.map((link) => {
      const url = new URL((link as HTMLAnchorElement).href)
      return `${url.origin} ${url.searchParams.get('tag')}`
    }))

  test('follow the version displayed, never the remembered choice, the IP country or the previous version', async ({ page, context, baseURL }) => {
    const { hostname } = new URL(baseURL ?? 'http://127.0.0.1:3000')
    await context.addCookies([
      { name: 'hn_market', value: 'de', domain: hostname, path: '/' },
      { name: 'hn_country', value: 'DE', domain: hostname, path: '/' },
    ])
    await page.goto('/us/guides/airfryers')
    const us = await tags(page)
    expect(us.length).toBeGreaterThan(0)
    expect(new Set(us)).toEqual(new Set(['https://www.amazon.fr homaviseus-21']))
    await page.getByTestId('country-selector').click()
    await page.getByRole('link', { name: /Italia/ }).click()
    await expect(page).toHaveURL(/\/it\/guides\/airfryers$/)
    const it = await tags(page)
    expect(it.length).toBeGreaterThan(0)
    expect(new Set(it)).toEqual(new Set(['https://www.amazon.it homaviseit-21']))
  })
})
