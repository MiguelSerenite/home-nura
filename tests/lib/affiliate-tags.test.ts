import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

// Amazon only credits a commission when the tag belongs to the store the
// link points to. One tag per marketplace (see PARTNER_TAGS in lib/products.ts).
const TAG_BY_STORE: Record<string, string> = {
  'amazon.fr': 'homenuraen05-21',
  'amazon.de': 'homenuraen00-21',
  'amazon.co.uk': 'homenuraen-21',
  'amazon.es': 'homenuraen0a-21',
  'amazon.it': 'homenuraen010-21',
  'amazon.nl': 'homenuranl-21',
}

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    return statSync(path).isDirectory() ? files(path) : /\.tsx?$/.test(name) ? [path] : []
  })
}

describe('Amazon affiliate links', () => {
  it('use the partner tag of the store they point to', () => {
    const mismatches: string[] = []
    for (const file of ['app', 'components', 'lib'].flatMap((d) => files(join(process.cwd(), d)))) {
      const text = readFileSync(file, 'utf8')
      for (const m of text.matchAll(/https:\/\/www\.(amazon\.(?:fr|de|co\.uk|es|it|nl))\/[^"'\s]*?[?&]tag=([a-z0-9-]+)/g)) {
        if (TAG_BY_STORE[m[1]] !== m[2]) mismatches.push(`${file.replace(process.cwd() + '/', '')}: ${m[1]} tag=${m[2]}`)
      }
    }
    expect(mismatches).toEqual([])
  })
})
