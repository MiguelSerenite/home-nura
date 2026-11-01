import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { LANGUAGES, LOCALE_LIMITED_SECTIONS } from '@/lib/i18n'
import { BASE_URL } from '@/lib/seo'
import { FLOOR_CARE_GUIDES, FLOOR_CARE_HUB_PATH, FLOOR_CARE_MARKETS, FLOOR_CARE_SLUGS, floorCarePath, guideForSlug, isFloorCareMarket } from '@/lib/floor-care/config'
import { floorCareGuideStaticParams, floorCareHubStaticParams, floorCareMetadata, resolveFloorCarePage } from '@/lib/floor-care/routes'
import { chooserHref, floorCareEntryPoint } from '@/lib/floor-care/navigation'

const PAGES = ['app/[lang]/guides/floor-care/page.tsx', 'app/[lang]/guides/floor-care/[guide]/page.tsx']

describe('floor-care routes', () => {
  it('use English slugs under /guides/floor-care', () => {
    expect(FLOOR_CARE_GUIDES.map(floorCarePath)).toEqual([
      '/guides/floor-care',
      '/guides/floor-care/vacuums',
      '/guides/floor-care/hard-floor-washers',
      '/guides/floor-care/carpet-upholstery-cleaners',
    ])
    expect(guideForSlug('hard-floor-washers')).toBe('hardfloor')
    expect(guideForSlug('aspirateurs')).toBeNull()
  })

  it('prerender the hub and the three guides for us and ca only', () => {
    expect(floorCareHubStaticParams()).toEqual([{ lang: 'us' }, { lang: 'ca' }])
    expect(floorCareGuideStaticParams()).toEqual(
      ['us', 'ca'].flatMap((lang) => Object.values(FLOOR_CARE_SLUGS).map((guide) => ({ lang, guide }))),
    )
  })

  it('resolve no page in any other locale (404)', () => {
    for (const lang of LANGUAGES) {
      const expected = lang === 'us' || lang === 'ca'
      expect(isFloorCareMarket(lang), lang).toBe(expected)
      expect(resolveFloorCarePage(lang) !== null, lang).toBe(expected)
      expect(resolveFloorCarePage(lang, 'vacuums') !== null, lang).toBe(expected)
    }
    expect(resolveFloorCarePage('us', 'mops')).toBeNull()
    expect(resolveFloorCarePage('ca', 'carpet-upholstery-cleaners')).toEqual({ market: 'ca', guide: 'textile' })
  })

  it('refuse unlisted params at request time and 404 outside the US and Canada', () => {
    for (const page of PAGES) {
      const source = readFileSync(join(process.cwd(), page), 'utf8')
      expect(source, page).toMatch(/export const dynamicParams = false/)
      expect(source, page).toMatch(/if \(!page[^)]*\) notFound\(\)/)
    }
  })

  it('send the language switcher of other locales to their cleaning hub (lib/i18n.ts in step)', () => {
    expect(LOCALE_LIMITED_SECTIONS).toContainEqual({ prefix: FLOOR_CARE_HUB_PATH, langs: [...FLOOR_CARE_MARKETS], fallback: '/entretien-maison' })
  })

  it('pair en-US with en-CA only in hreflang, canonical on the page itself', () => {
    for (const guide of FLOOR_CARE_GUIDES) {
      const path = floorCarePath(guide)
      for (const market of ['us', 'ca'] as const) {
        const meta = floorCareMetadata({ market, guide })
        expect(meta.alternates?.canonical).toBe(`${BASE_URL}/${market}${path}`)
        expect(meta.alternates?.languages).toEqual({ 'en-US': `${BASE_URL}/us${path}`, 'en-CA': `${BASE_URL}/ca${path}` })
        expect((meta.openGraph as { locale?: string }).locale).toBe(market === 'us' ? 'en_US' : 'en_CA')
        expect(meta.robots).toMatchObject({ index: true })
      }
    }
  })
})

describe('floor-care links', () => {
  it('send chooser answers to the right page of the same market', () => {
    expect(chooserHref({ kind: 'guide', guide: 'textile' }, 'us', 'hub')).toBe('/us/guides/floor-care/carpet-upholstery-cleaners')
    expect(chooserHref({ kind: 'guide', guide: 'dry', anchor: 'picks' }, 'ca', 'hub')).toBe('/ca/guides/floor-care/vacuums#picks')
    expect(chooserHref({ kind: 'guide', guide: 'dry', anchor: 'picks' }, 'ca', 'dry')).toBe('#picks')
    expect(chooserHref({ kind: 'clearance' }, 'us', 'hub')).toBe('#clearance')
    expect(chooserHref({ kind: 'clearance' }, 'us', 'textile')).toBe('/us/guides/floor-care/vacuums#clearance')
  })

  it('show the hub banner on the cleaning hubs of /us and /ca only', () => {
    expect(floorCareEntryPoint('us', { silo: 'entretien-maison' })).toEqual({ market: 'us', withClearance: true })
    expect(floorCareEntryPoint('ca', { category: 'aspirateurs-robots' })).toEqual({ market: 'ca', withClearance: true })
    expect(floorCareEntryPoint('ca', { category: 'aspirateurs-laveurs' })).toEqual({ market: 'ca', withClearance: true })
    expect(floorCareEntryPoint('us', { category: 'aspirateurs-balais' })).toEqual({ market: 'us', withClearance: false })
    expect(floorCareEntryPoint('us', { category: 'laveurs-vitres' })).toBeNull()
    expect(floorCareEntryPoint('us', { silo: 'cuisine-connectee' })).toBeNull()
    for (const lang of LANGUAGES.filter((l) => l !== 'us' && l !== 'ca')) {
      expect(floorCareEntryPoint(lang, { silo: 'entretien-maison' }), lang).toBeNull()
      expect(floorCareEntryPoint(lang, { category: 'aspirateurs-robots' }), lang).toBeNull()
    }
  })

  it('are wired into the silo and category hubs', () => {
    expect(readFileSync(join(process.cwd(), 'components/SiloHub.tsx'), 'utf8')).toMatch(/<FloorCareEntryBanner lang=\{safeLang\} silo=\{silo\.slug\} \/>/)
    expect(readFileSync(join(process.cwd(), 'components/CategoryHub.tsx'), 'utf8')).toMatch(/<FloorCareEntryBanner lang=\{safeLang\} category=\{category\.slug\} \/>/)
  })
})
