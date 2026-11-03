import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import CatalogCards from '@/components/category-catalog/CatalogCards'
import { CATALOG_UI } from '@/components/category-catalog/ui'
import { getCatalogEntries, loadCatalogs } from '@/lib/category-catalog/data'
import { CATEGORY_CATALOG_FILES } from '@/lib/category-catalog/registry'
import { LANGUAGES } from '@/lib/i18n'

const lock = {
  id: 'aqara-smart-lock-u200',
  brand: 'Aqara',
  model: 'Smart Lock U200',
  asin: 'B0CXDDVHB4',
  segment: 'mid',
  bestFor: { fr: 'Les portes à cylindre européen.', de: 'Türen mit Profilzylinder.' },
  facts: { fr: ['Matter via Thread'], de: ['Matter über Thread'] },
  markets: ['fr', 'de'],
}
const keypad = { ...lock, id: 'nuki-smart-lock-pro', brand: 'Nuki', model: 'Smart Lock Pro', asin: null, markets: ['fr'] }
const catalogs = loadCatalogs([
  { file: 'serrures-connectees.json', data: { category: 'serrures-connectees', updated: '2026-11-03', models: [lock, keypad] } },
])

describe('category catalogue data', () => {
  it('bundles every file of data/category-catalog', () => {
    const dir = join(process.cwd(), 'data', 'category-catalog')
    const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.json')).sort() : []
    expect(CATEGORY_CATALOG_FILES.map((f) => f.file).sort()).toEqual(files)
  })

  it('lists a model only in its markets, linked to the locale store with its tracking ID', () => {
    const fr = getCatalogEntries('serrures-connectees', 'fr', [], catalogs)
    expect(fr.map((e) => e.name)).toEqual(['Aqara Smart Lock U200', 'Nuki Smart Lock Pro'])
    expect(fr[0].url).toBe('https://www.amazon.fr/dp/B0CXDDVHB4?tag=homenuraen05-21')
    expect(fr[1].url).toContain('/s?k=Nuki+Smart+Lock+Pro')
    const de = getCatalogEntries('serrures-connectees', 'de', [], catalogs)
    expect(de.map((e) => e.name)).toEqual(['Aqara Smart Lock U200'])
    expect(de[0].url).toContain('tag=homavisede-21')
    expect(getCatalogEntries('serrures-connectees', 'us', [], catalogs)).toEqual([])
  })

  it('leaves out the models the hub already shows as picks', () => {
    const entries = getCatalogEntries('serrures-connectees', 'fr', ['aqara smart lock u200 (noir)'], catalogs)
    expect(entries.map((e) => e.name)).toEqual(['Nuki Smart Lock Pro'])
  })

  it('carries the manufacturer photo when the id has one', () => {
    const [aqara, nuki] = getCatalogEntries('serrures-connectees', 'fr', [], catalogs)
    expect(aqara.photo?.id).toBe('aqara-smart-lock-u200')
    expect(nuki.photo).toBeUndefined()
  })

  it('lists every problem of every file at once', () => {
    const bad = { category: 'serrures-connectees', updated: '2026-11-03', models: [{ ...lock, segment: 'x' }] }
    expect(() => loadCatalogs([{ file: 'a.json', data: bad }, { file: 'b.json', data: { category: 'nope' } }])).toThrow(/a\.json[\s\S]*b\.json/)
    expect(() =>
      loadCatalogs([
        { file: 'a.json', data: { category: 'serrures-connectees', updated: '2026-11-03', models: [lock] } },
        { file: 'b.json', data: { category: 'alarmes', updated: '2026-11-03', models: [lock] } },
      ]),
    ).toThrow(/aqara-smart-lock-u200 is already in a\.json/)
  })
})

describe('catalogue cards', () => {
  it('have UI strings in every locale', () => {
    for (const lang of LANGUAGES) expect(CATALOG_UI[lang].title, lang).toBeTruthy()
  })

  it('link photo and button to the store as sponsored, with their placement', () => {
    const entries = getCatalogEntries('serrures-connectees', 'fr', [], catalogs)
    const html = renderToStaticMarkup(createElement(CatalogCards, { entries, lang: 'fr', ui: CATALOG_UI.fr }))
    const links = html.match(/<a [^>]*>/g) ?? []
    expect(links.length).toBe(3)
    for (const a of links) {
      expect(a).toContain('rel="sponsored nofollow noopener noreferrer"')
      expect(a).toContain('data-aff-placement="category_catalog"')
    }
    expect(html).toContain('Milieu de gamme')
    expect(html).toContain('Voir sur Amazon')
    expect(html).not.toMatch(/\d\s?€/)
  })
})
