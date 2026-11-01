import { describe, it, expect } from 'vitest'
import { categoryHubMetadata } from '@/app/[lang]/category-hub-route'
import { getArticleBySlug } from '@/lib/blog'
import {
  categoryLocales,
  categoryPath,
  getCategoriesIndexableIn,
  getCategory,
  getIndexableCategories,
  getPartiallyIndexableCategories,
  isCategoryIndexableIn,
} from '@/lib/catalog'
import { CATEGORY_GUIDES, buildCategorySeo, getCategoryGuides } from '@/lib/catalog/category-guides'
import { getCategoryHead } from '@/lib/catalog/category-heads'
import { getCategoryHero } from '@/lib/catalog'
import { HTML_LANG, LANGUAGES, LOCALE_LIMITED_SECTIONS, switchLocalePath } from '@/lib/i18n'
import { sitePathsFor } from '@/lib/market-pages/site-paths'

const ROBOT_COOKER_LOCALES = ['fr', 'de', 'es', 'it', 'pl'] as const
const PARTIAL = getPartiallyIndexableCategories()

describe('categories indexed in some markets only (`indexableIn`)', () => {
  it('index the robot cooker hub in fr, de, es, it and pl, and nowhere else', () => {
    const robots = getCategory('robots-multifonctions')!
    expect(robots.indexable).toBe(false)
    expect(categoryLocales(robots)).toEqual(ROBOT_COOKER_LOCALES)
    for (const lang of LANGUAGES) {
      const indexed = (ROBOT_COOKER_LOCALES as readonly string[]).includes(lang)
      expect(isCategoryIndexableIn(robots, lang), lang).toBe(indexed)
      expect(getCategoriesIndexableIn(lang).includes(robots), lang).toBe(indexed)
    }
    expect(getIndexableCategories()).not.toContain(robots)
    expect(PARTIAL).toContain(robots)
  })

  it('keep a fully indexed category in every locale and an unindexed one in none', () => {
    const thermostats = getCategory('thermostats')!
    expect(categoryLocales(thermostats)).toEqual(LANGUAGES)
    expect(categoryLocales(getCategory('micro-ondes')!)).toEqual([])
  })

  it.each(PARTIAL.map((c) => [c.slug, c] as const))('%s: valid locales, a guide in each, its own head in each', (_slug, category) => {
    const langs = categoryLocales(category)
    expect(new Set(langs).size).toBe(langs.length)
    for (const lang of langs) expect(LANGUAGES as readonly string[]).toContain(lang)
    const primary = CATEGORY_GUIDES[category.slug]?.primary
    expect(primary, 'a primary guide').toBeTruthy()
    for (const lang of langs) {
      expect(getArticleBySlug(primary!)?.content[lang], `${lang}: guide translated`).toBeTruthy()
      const head = getCategoryHead(category.slug, lang)
      expect(head, `${lang}: head`).toBeDefined()
      expect(buildCategorySeo(category, lang, [])).toEqual({ title: head!.title, description: head!.description })
      expect(getCategoryHero(lang, category).title).toBe(head!.h1)
      const { picks } = getCategoryGuides(category.slug, lang)
      expect(picks.length, `${lang}: picks`).toBeGreaterThanOrEqual(2)
      for (const pick of picks) expect(pick.url, `${lang}: ${pick.model}`).toMatch(lang === 'it' ? /^https:\/\/www\.amazon\.it\// : /^https:\/\/www\.amazon\.fr\//)
    }
  })

  it.each(PARTIAL.map((c) => [c.slug, c] as const))('%s: the language switcher sends other locales to the section hub', (_slug, category) => {
    const path = categoryPath(category)
    const section = LOCALE_LIMITED_SECTIONS.find((s) => s.prefix === path)
    expect(section, `LOCALE_LIMITED_SECTIONS lists ${path}`).toBeDefined()
    expect(section!.langs).toEqual(categoryLocales(category))
    expect(section!.fallback).toBe(`/${category.metaSilo}`)
    for (const lang of LANGUAGES) {
      const target = switchLocalePath(`/fr${path}`, lang)
      expect(target, lang).toBe(isCategoryIndexableIn(category, lang) ? `/${lang}${path}` : `/${lang}/${category.metaSilo}`)
    }
  })

  it.each(PARTIAL.map((c) => [c.slug, c] as const))('%s: listed among the indexed paths of its locales only', (_slug, category) => {
    for (const lang of LANGUAGES) {
      expect(sitePathsFor(lang).has(`/${lang}${categoryPath(category)}`), lang).toBe(isCategoryIndexableIn(category, lang))
    }
  })

  it('give the robot cooker hub indexable metadata with hreflang among its five locales', () => {
    const robots = getCategory('robots-multifonctions')!
    for (const lang of ROBOT_COOKER_LOCALES) {
      const meta = categoryHubMetadata(robots, lang)
      expect(meta.robots, lang).toMatchObject({ index: true })
      expect(meta.alternates?.canonical).toBe(`https://homenura.com/${lang}/cuisine-connectee/robots-multifonctions`)
      expect(Object.keys(meta.alternates?.languages ?? {}).sort()).toEqual([...ROBOT_COOKER_LOCALES.map((l) => HTML_LANG[l]), 'x-default'].sort())
    }
    const thermostats = categoryHubMetadata(getCategory('thermostats')!, 'us')
    expect(Object.keys(thermostats.alternates?.languages ?? {})).toHaveLength(LANGUAGES.length + 1)
  })
})
