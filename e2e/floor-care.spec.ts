import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * US and Canadian floor-care guides: served only on /us and /ca, paired
 * en-US ↔ en-CA in hreflang, accessible, and the robot clearance check
 * compares the reader's clearance with the manufacturers' heights in
 * millimetres whatever unit is typed.
 */

const PATHS = [
  '/guides/floor-care',
  '/guides/floor-care/vacuums',
  '/guides/floor-care/hard-floor-washers',
  '/guides/floor-care/carpet-upholstery-cleaners',
]

interface RawPick {
  brand: string
  model: string
  robot?: boolean
  heightMm?: number | null
}

/** Robot vacuums and robot mops (vacuum and hard-floor guides) with their manufacturer height, read from the data files. */
function robots(market: 'us' | 'ca'): RawPick[] {
  return ['dry', 'hardfloor'].flatMap((guide) => {
    const file = JSON.parse(readFileSync(join(process.cwd(), 'data', 'floor-care', `${market}-${guide}.json`), 'utf8'))
    return (file.picks as RawPick[]).filter((pick) => pick.robot === true && typeof pick.heightMm === 'number')
  })
}

const robotHeights = (market: 'us' | 'ca') => robots(market).map((pick) => pick.heightMm as number)

test.describe('Floor-care guides (US and Canada only)', () => {
  test('serve the hub and the three guides on /us and /ca, 404 elsewhere', async ({ request }) => {
    for (const path of PATHS) {
      for (const lang of ['us', 'ca']) {
        expect((await request.get(`/${lang}${path}`)).status(), `/${lang}${path}`).toBe(200)
      }
      for (const lang of ['fr', 'en', 'de']) {
        expect((await request.get(`/${lang}${path}`)).status(), `/${lang}${path}`).toBe(404)
      }
    }
  })

  test('pair en-US with en-CA only in hreflang', async ({ page }) => {
    await page.goto('/ca/guides/floor-care/vacuums')
    const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) =>
      links.map((l) => `${l.getAttribute('hreflang')} ${l.getAttribute('href')}`).sort(),
    )
    expect(alternates).toEqual([
      'en-CA https://homenura.com/ca/guides/floor-care/vacuums',
      'en-US https://homenura.com/us/guides/floor-care/vacuums',
    ])
  })

  test('US clearance check: inches first, same verdict after switching to centimeters', async ({ page }) => {
    const heights = robotHeights('us')
    const tallest = Math.max(...heights)
    await page.goto('/us/guides/floor-care')
    const field = page.getByRole('textbox', { name: /Clearance under your furniture \(inches\)/ })
    await expect(page.getByRole('radio', { name: 'inches' })).toBeChecked()

    // Enough room for every robot (rounded up to the next hundredth of an inch).
    await field.fill(String(Math.ceil((tallest / 25.4) * 100) / 100))
    const status = page.locator('#clearance [role="status"]')
    await expect(status).toContainText(`${heights.length} of the ${heights.length} robot`)

    // Switching unit rewrites the field but keeps comparing the same millimetres.
    await page.getByRole('radio', { name: 'centimeters' }).check()
    await expect(page.getByRole('textbox', { name: /\(centimeters\)/ })).not.toHaveValue('')
    await expect(status).toContainText(`${heights.length} of the ${heights.length} robot`)

    await page.getByRole('textbox', { name: /\(centimeters\)/ }).fill('1')
    await expect(status).toContainText(`0 of the ${heights.length} robot`)
  })

  test('US clearance check: 3.5 in (88.9 mm) clears the robots up to 88.9 mm only', async ({ page }) => {
    const clearanceMm = 3.5 * 25.4
    await page.goto('/us/guides/floor-care')
    await page.getByRole('textbox', { name: /Clearance under your furniture \(inches\)/ }).fill('3.5')
    const section = page.locator('#clearance')
    await expect(section.locator('[role="status"]')).toContainText('3.5 in (88.9 mm)')
    // The slim robot mop of the US hard-floor guide (Roborock Saros 20, 79.8 mm) fits; 99 mm robots do not.
    await expect(section.getByRole('list', { name: 'Fits under' }).getByRole('link', { name: 'Roborock Saros 20', exact: true })).toBeVisible()
    for (const robot of robots('us')) {
      const name = robot.model.toLowerCase().startsWith(robot.brand.toLowerCase()) ? robot.model : `${robot.brand} ${robot.model}`
      const group = (robot.heightMm as number) <= clearanceMm ? 'Fits under' : 'Too tall'
      await expect(section.getByRole('list', { name: group }).getByRole('link', { name, exact: true }), name).toBeVisible()
    }
  })

  test('Canadian clearance check opens in centimetres', async ({ page }) => {
    await page.goto('/ca/guides/floor-care/vacuums')
    await expect(page.getByRole('radio', { name: 'centimetres' })).toBeChecked()
    await page.getByRole('textbox', { name: /Clearance under your furniture \(centimetres\)/ }).fill('abc')
    await expect(page.locator('#clearance [role="status"]')).toContainText('Enter a number')
  })

  for (const path of ['/us/guides/floor-care', '/ca/guides/floor-care/carpet-upholstery-cleaners']) {
    test(`a11y: ${path}`, async ({ page }) => {
      await page.goto(path)
      await page.waitForSelector('main', { state: 'attached' })
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
        // Same exception as e2e/a11y.spec.ts: JSON-LD script nodes outside landmarks.
        .disableRules(['region'])
        .analyze()
      expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`)).toEqual([])
    })
  }
})
