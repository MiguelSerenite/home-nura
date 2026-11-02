import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { LANGUAGES } from '@/lib/i18n'

// The license and acquireLicensePage of product photos (lib/seo.ts photoRightsUrl)
// point at this section: it must exist, in every locale.
const source = readFileSync(join(process.cwd(), 'app', '[lang]', 'mentions-legales', 'page.tsx'), 'utf8')

describe('legal notice: photo credits', () => {
  it('renders the section the photo licence links point to', () => {
    expect(source).toMatch(/<section id="photos"/)
  })

  it('has a title and a text in every locale, naming no licence of our own', () => {
    const blocks = source.split(/\n {2}(?=[a-z]{2}: \{\n)/).slice(1)
    const byLang = new Map(blocks.map((b) => [b.slice(0, 2), b]))
    for (const lang of LANGUAGES) {
      const block = byLang.get(lang) ?? ''
      expect(block, lang).toMatch(/\n {4}photos: "[^"]+",\n/)
      expect(block, lang).toMatch(/\n {4}photosText: "[^"]*© Philips[^"]*",\n/)
    }
  })

  it('no longer calls every product visual a neutral illustration', () => {
    expect(source).not.toMatch(/les visuels de produits sont des illustrations neutres|product visuals are neutral illustrations/)
  })
})
