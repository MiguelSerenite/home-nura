import { META_SILOS } from './meta-silos'
import { getCategoriesBySilo } from './categories'
import { getProblemsByCategory } from './problems'
import type { Category, MetaSilo, Problem } from './types'

export interface ProblemIndexGroup {
  silo: MetaSilo
  categories: { category: Category; problems: Problem[] }[]
}

/**
 * Every troubleshooting page grouped by silo then category, in navigation
 * order, for the /guides/probleme index. Empty categories and silos are
 * dropped so the index never shows a heading with nothing under it.
 */
export function getProblemIndex(): ProblemIndexGroup[] {
  return [...META_SILOS]
    .sort((a, b) => a.priority - b.priority)
    .map((silo) => ({
      silo,
      categories: getCategoriesBySilo(silo.slug)
        .map((category) => ({ category, problems: getProblemsByCategory(category.slug) }))
        .filter((group) => group.problems.length > 0),
    }))
    .filter((group) => group.categories.length > 0)
}
