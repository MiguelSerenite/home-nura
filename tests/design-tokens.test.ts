import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

// The olive brand palette lives in the semantic `brand-*` / `accent-*`
// scales (app/globals.css). Tailwind's blue/indigo are no longer remapped,
// so any blue-*/indigo-* utility would render actual blue.
const FORBIDDEN = /(?<![\w-])(?:[a-z-]+:)*(?:bg|text|border|ring|from|to|via|outline|decoration|fill|stroke|shadow|divide|placeholder|caret)-(?:blue|indigo)-\d{2,3}(?![\w-])/

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return sourceFiles(path)
    return /\.(tsx?|css)$/.test(name) ? [path] : []
  })
}

describe('design tokens', () => {
  it('uses brand/accent tokens instead of raw blue/indigo utilities', () => {
    const offenders = ['app', 'components', 'lib']
      .flatMap((dir) => sourceFiles(join(process.cwd(), dir)))
      .filter((file) => FORBIDDEN.test(readFileSync(file, 'utf8')))
    expect(offenders).toEqual([])
  })
})
