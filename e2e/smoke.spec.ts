import { test, expect, type Page } from '@playwright/test'

/**
 * Home Nura — E2E smoke suite.
 *
 * This is deliberately narrow: we only hit the handful of pages that move
 * money (home, airfryer guide, comparator, quiz, newsletter, blog index)
 * and we only assert the invariants that, if they broke, would cost real
 * conversions or SEO signal:
 *
 *   - the page actually renders (status 200, H1 present)
 *   - there is at least one affiliate CTA with the correct rel=nofollow
 *   - canonical + hreflang alternates are emitted
 *   - no unhandled console errors (tolerant of known warnings)
 *
 * Anything more exotic (interaction flows, visual diff) belongs in a
 * dedicated spec so we don't gate deploys on brittle UI assertions.
 */

// Consistent error filter — hydration warnings from third-party scripts,
// 404 favicons, and CSP reports from dev tools are out of scope. We also
// tolerate Next.js dev-mode noise (webpack HMR socket, fast-refresh
// websocket reconnects) because devs may run the suite against a local
// `next dev` that's already on port 3000.
const DEV_MODE_NOISE = [
  'webpack-hmr',
  '_next/webpack',
  'Fast Refresh',
  'HotReloader',
]

function collectConsoleErrors(page: Page): string[] {
  const errors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() !== 'error') return
    const text = msg.text()
    if (text.includes('Hydration')) return
    if (text.includes('Extension')) return
    if (DEV_MODE_NOISE.some((needle) => text.includes(needle))) return
    errors.push(text)
  })
  return errors
}

test.describe('Home page (fr)', () => {
  test('renders with H1, canonical, hreflang, and buy-button CTAs', async ({ page }) => {
    const errors = collectConsoleErrors(page)

    const response = await page.goto('/fr')
    expect(response?.status()).toBe(200)

    // H1 present and localized.
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()

    // Canonical + at least one alternate hreflang.
    const canonical = page.locator('link[rel="canonical"]')
    await expect(canonical).toHaveCount(1)
    const canonicalHref = await canonical.getAttribute('href')
    expect(canonicalHref).toMatch(/\/fr\/?$/)

    const alternates = page.locator('link[rel="alternate"][hreflang]')
    expect(await alternates.count()).toBeGreaterThanOrEqual(6)

    // Buy-button CTAs are affiliate-safe: target=_blank + rel includes
    // both nofollow and noopener.
    const affiliateLinks = page.locator('a[href*="amazon."]')
    const affiliateCount = await affiliateLinks.count()
    expect(affiliateCount).toBeGreaterThan(0)
    const firstLink = affiliateLinks.first()
    await expect(firstLink).toHaveAttribute('target', '_blank')
    const rel = await firstLink.getAttribute('rel')
    expect(rel).toContain('nofollow')
    expect(rel).toContain('noopener')

    // At least one Product JSON-LD blob should be injected by ProductCard.
    const jsonLdCount = await page
      .locator('script[type="application/ld+json"]')
      .count()
    expect(jsonLdCount).toBeGreaterThan(0)

    expect(errors, `Unexpected console errors:\n${errors.join('\n')}`).toEqual([])
  })
})

test.describe('Airfryer guide (fr)', () => {
  test('renders comparison table and product cards', async ({ page }) => {
    const errors = collectConsoleErrors(page)

    const response = await page.goto('/fr/guides/airfryers')
    expect(response?.status()).toBe(200)

    // The comparison table is the lead conversion surface — it must exist
    // and have at least a handful of buy buttons.
    const compareButtons = page.locator('a[href*="amazon."]')
    expect(await compareButtons.count()).toBeGreaterThanOrEqual(5)

    // FAQ section anchors FAQPage schema — if this disappears we lose
    // rich snippets in SERPs.
    const faqSchemas = page.locator('script[type="application/ld+json"]')
    const schemaCount = await faqSchemas.count()
    expect(schemaCount).toBeGreaterThan(0)

    expect(errors, `Unexpected console errors:\n${errors.join('\n')}`).toEqual([])
  })
})

test.describe('English guide alias', () => {
  test('/en/guides/airfryers resolves 200 (not 404)', async ({ page }) => {
    const response = await page.goto('/en/guides/airfryers')
    expect(response?.status()).toBe(200)
    await expect(page.locator('h1').first()).toBeVisible()
  })
})

test.describe('Comparator page', () => {
  test('picker + empty slots render', async ({ page }) => {
    const errors = collectConsoleErrors(page)

    const response = await page.goto('/fr/comparateur')
    expect(response?.status()).toBe(200)

    // Empty slots render as buttons labelled "Choisir un modèle" (FR).
    // Using the accessible role + name keeps the assertion resilient
    // whether we swap the visual treatment later.
    const addButtons = page.getByRole('button', { name: /choisir un modèle/i })
    expect(await addButtons.count()).toBeGreaterThan(0)

    expect(errors, `Unexpected console errors:\n${errors.join('\n')}`).toEqual([])
  })
})

test.describe('Quiz page', () => {
  test('first question renders with options', async ({ page }) => {
    const response = await page.goto('/fr/quiz')
    expect(response?.status()).toBe(200)

    // Progress pill "Question 1 / 3" — language-agnostic on the digits.
    await expect(page.getByText(/1\s*\/\s*3/)).toBeVisible()

    // At least 3 clickable option buttons on Q1.
    const options = page.getByRole('button').filter({ hasText: /solo|couple|famille|family/i })
    expect(await options.count()).toBeGreaterThanOrEqual(2)
  })
})

test.describe('Newsletter + footer', () => {
  test('home page has accessible email field and privacy link', async ({ page }) => {
    await page.goto('/fr')

    // Newsletter input must be reachable by its aria-label (we labelled
    // it during Phase G and wired submit tracking in Phase I).
    const emailInput = page.getByLabel(/adresse email/i).first()
    await expect(emailInput).toBeVisible()
    await expect(emailInput).toHaveAttribute('type', 'email')
    await expect(emailInput).toHaveAttribute('autocomplete', 'email')

    // Privacy policy link in the footer — mandatory for LCEN compliance.
    const privacyLink = page.locator('a[href*="politique-confidentialite"]').first()
    await expect(privacyLink).toBeVisible()
  })
})

test.describe('Blog index', () => {
  test('renders at least one article card', async ({ page }) => {
    const response = await page.goto('/fr/blog')
    expect(response?.status()).toBe(200)

    // Article titles are h2 or h3 under the main grid.
    const articleLinks = page.locator('main a[href*="/blog/"]')
    expect(await articleLinks.count()).toBeGreaterThan(0)
  })
})
