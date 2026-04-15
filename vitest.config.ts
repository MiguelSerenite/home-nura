import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    environment: 'node',
    globals: false,
    include: ['tests/**/*.test.ts'],
    // Playwright E2E specs live in e2e/ — they import @playwright/test
    // which can't run inside Vitest's node environment. Exclude belt-
    // and-suspenders even though `include` would already skip them.
    exclude: ['node_modules/**', 'e2e/**', '.next/**'],
    passWithNoTests: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
