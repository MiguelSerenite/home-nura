/**
 * Lighthouse CI config — Phase N
 *
 * Runs Lighthouse against a local `next start` server on a curated set
 * of routes and enforces Core Web Vitals + category score budgets.
 *
 * Thresholds are intentionally pragmatic (not 1.0 everywhere) so the
 * suite catches regressions without failing on noise from 3rd-party
 * fonts, Amazon image latency, or single-digit CLS jitter.
 *
 * Routes mirror e2e/a11y.spec.ts where possible so perf + a11y coverage
 * stay aligned.
 */
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npx next start -p 3000',
      url: [
        'http://127.0.0.1:3000/fr',
        'http://127.0.0.1:3000/fr/guides/airfryers',
        'http://127.0.0.1:3000/en/guides/airfryers',
        'http://127.0.0.1:3000/fr/comparateur',
        'http://127.0.0.1:3000/fr/quiz',
        'http://127.0.0.1:3000/fr/blog',
        'http://127.0.0.1:3000/fr/cuisine-connectee',
      ],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
        // chromeFlags for headless CI runs
        chromeFlags: '--no-sandbox --headless=new',
        // Skip PWA — we don't ship a service worker
        skipAudits: ['uses-http2', 'canonical'],
      },
    },
    assert: {
      // Category floors — catch broad regressions. These roll up all the
      // individual opportunity audits (unused-js, modern-image-formats,
      // uses-responsive-images, etc.) so we don't assert on them twice.
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],

        // Core Web Vitals (desktop preset, lab values in ms)
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 1800 }],
        'speed-index': ['warn', { maxNumericValue: 3400 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
