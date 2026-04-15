import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

/**
 * Automated accessibility audits for the critical money pages.
 *
 * This sits alongside the smoke suite and runs the same axe-core rules
 * Google & WebAIM use in their reports. We scope checks to WCAG 2.1
 * A + AA + best-practice because that matches the contrast/aria work
 * shipped in Phase G.
 *
 * Philosophy: zero violations tolerated. If axe flags something we
 * can't fix at the source (e.g. a third-party widget), add a narrow
 * `disableRules([...])` with a comment explaining why — never an
 * unconditional skip. When axe's rule catalog drifts, we'd rather the
 * build fail and we make a conscious decision than silently regress.
 *
 * Pages covered: the same 7 paths as smoke.spec.ts so a11y and
 * functional checks stay in lockstep.
 */

const ROUTES: Array<{ name: string; path: string }> = [
  { name: 'home (fr)', path: '/fr' },
  { name: 'airfryer guide (fr)', path: '/fr/guides/airfryers' },
  { name: 'airfryer guide (en)', path: '/en/guides/airfryers' },
  { name: 'comparator (fr)', path: '/fr/comparateur' },
  { name: 'quiz (fr)', path: '/fr/quiz' },
  { name: 'blog index (fr)', path: '/fr/blog' },
  { name: 'cuisine connectee (fr)', path: '/fr/cuisine-connectee' },
]

for (const route of ROUTES) {
  test(`a11y: ${route.name}`, async ({ page }) => {
    await page.goto(route.path)
    // Wait for the main landmark to settle before auditing so dynamic
    // components (Comparator slots, Quiz first question) have mounted.
    await page.waitForSelector('main', { state: 'attached' })

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
      // `region` flags content outside a landmark. Next.js renders a
      // few server-only script nodes (JSON-LD, nonce script) that axe
      // treats as bare content. They're invisible to assistive tech
      // so the rule is noise here, not a real barrier.
      .disableRules(['region'])
      .analyze()

    // Pretty-print violations for the error message so failures are
    // actionable without digging into trace.zip.
    const violationReport = results.violations
      .map((v) => {
        const nodes = v.nodes
          .slice(0, 3)
          .map((n) => `    ${n.target.join(' ')}`)
          .join('\n')
        return `[${v.impact}] ${v.id} — ${v.help}\n  ${v.helpUrl}\n${nodes}`
      })
      .join('\n\n')

    expect(
      results.violations,
      `a11y violations on ${route.path}:\n${violationReport}`,
    ).toEqual([])
  })
}
