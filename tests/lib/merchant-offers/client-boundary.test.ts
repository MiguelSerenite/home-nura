import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'

/**
 * Pages without a Coolblue offer must ship none of the merchant code: the
 * modules a client component can reach import only lib/merchant-offers/types
 * (constants and offer props), and the offer island loads lazily.
 */
const SERVER_ONLY = ['merchants', 'feed', 'match', 'coolblue', 'copy', 'format', 'audience', 'csv', 'view', 'references', 'reference-codes']

function resolve(from: string, spec: string): string | null {
  const base = spec.startsWith('@/') ? join(process.cwd(), spec.slice(2)) : spec.startsWith('.') ? join(dirname(from), spec) : null
  if (!base) return null
  for (const ext of ['.ts', '.tsx', '/index.ts']) if (existsSync(base + ext)) return base + ext
  return null
}

/** Every local module statically imported (not `import type`) from `entry`, transitively. */
function reachable(entry: string): Set<string> {
  const seen = new Set<string>()
  const visit = (file: string) => {
    if (seen.has(file)) return
    seen.add(file)
    const source = readFileSync(file, 'utf8')
    for (const m of source.matchAll(/^import\s+(?!type\b)[^'"]*?from\s+['"]([^'"]+)['"]|^import\s+['"]([^'"]+)['"]/gm)) {
      const target = resolve(file, m[1] ?? m[2])
      if (target) visit(target)
    }
  }
  visit(join(process.cwd(), entry))
  return seen
}

describe('client bundle boundary', () => {
  it.each(['components/CoolblueOffer.tsx', 'components/CoolblueOfferSlot.tsx', 'components/QuickAnswer.tsx', 'components/category-catalog/CatalogCards.tsx', 'lib/analytics.ts', 'lib/affiliate-click.ts'])(
    '%s reaches no server-only merchant module',
    (entry) => {
      const files = [...reachable(entry)].map((f) => f.replace(`${process.cwd()}/`, ''))
      const leaked = files.filter((f) => SERVER_ONLY.some((name) => f === `lib/merchant-offers/${name}.ts`))
      expect(leaked).toEqual([])
    },
  )

  it('marks the merchant modules server-only', () => {
    for (const name of SERVER_ONLY) {
      expect(readFileSync(join(process.cwd(), `lib/merchant-offers/${name}.ts`), 'utf8'), name).toMatch(/^import 'server-only'$/m)
    }
  })

  it('loads the offer island lazily, only where an offer exists', () => {
    const slot = readFileSync(join(process.cwd(), 'components/CoolblueOfferSlot.tsx'), 'utf8')
    expect(slot).toContain("lazy(() => import('./CoolblueOffer'))")
    expect(slot).toMatch(/if \(!offers \|\| offers\.length === 0\) return null/)
  })
})
