import { describe, it, expect } from 'vitest'
import { PROBLEMS, CATEGORIES, categoryPath, getProblemIndex } from '@/lib/catalog'

describe('categoryPath', () => {
  it('sends air fryers to their pillar guide (there is no generic air fryer hub)', () => {
    const airfryers = CATEGORIES.find((c) => c.slug === 'airfryers')!
    expect(categoryPath(airfryers)).toBe('/guides/airfryers')
  })

  it('builds /{silo}/{category} for every other category', () => {
    const thermostats = CATEGORIES.find((c) => c.slug === 'thermostats')!
    expect(categoryPath(thermostats)).toBe('/energie-domotique/thermostats')
  })
})

describe('getProblemIndex', () => {
  const index = getProblemIndex()

  it('lists every problem exactly once', () => {
    const slugs = index.flatMap((s) => s.categories.flatMap((c) => c.problems.map((p) => p.slug)))
    expect(slugs.length).toBe(PROBLEMS.length)
    expect(new Set(slugs).size).toBe(PROBLEMS.length)
  })

  it('groups problems under their own category and silo, with no empty groups', () => {
    for (const group of index) {
      expect(group.categories.length).toBeGreaterThan(0)
      for (const { category, problems } of group.categories) {
        expect(category.metaSilo).toBe(group.silo.slug)
        expect(problems.length).toBeGreaterThan(0)
        problems.forEach((p) => expect(p.categorySlug).toBe(category.slug))
      }
    }
  })

  it('orders silos by their navigation priority', () => {
    const priorities = index.map((g) => g.silo.priority)
    expect(priorities).toEqual([...priorities].sort((a, b) => a - b))
  })
})
