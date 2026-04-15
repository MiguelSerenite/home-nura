import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright config — E2E smoke tests for homenura.com.
 *
 * Philosophy: Vitest covers lib/ units (fast, pure). Playwright only runs
 * the smoke suite: real browser + real Next server, asserting on the
 * handful of pages that actually earn money (home, guides, comparator,
 * quiz, newsletter). We intentionally keep this narrow so it stays under
 * ~30 seconds locally and doesn't become a flake generator.
 *
 * The dev server is reused on the default port (3000). CI boots its own
 * via `webServer` below — `npm run build && npm run start` to exercise
 * the production bundle (same one we deploy).
 */
export default defineConfig({
  testDir: './e2e',
  // Each spec is isolated; no shared global state.
  fullyParallel: true,
  // Fail CI on committed `test.only`.
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // Single-worker locally so the shared Next server doesn't get hammered
  // by parallel worker processes firing dev compiles. CI gets 2.
  workers: process.env.CI ? 2 : 1,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3000',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    // Follow the Do-Not-Track header contract — we never want the smoke
    // suite to trip real analytics beacons in case GA4 is ever attached
    // to a preview build.
    extraHTTPHeaders: { DNT: '1' },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    // `next start` against a pre-built bundle. We do NOT build here — the
    // CI workflow (or the developer) runs `npm run build` first so that
    // retries don't repeatedly rebuild.
    command: 'npx next start -p 3000',
    url: 'http://127.0.0.1:3000/fr',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: 'ignore',
    stderr: 'pipe',
  },
})
