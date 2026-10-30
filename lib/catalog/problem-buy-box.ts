import type { Lang } from '@/lib/i18n'
import { getCategory } from './categories'
import { getCategoryGuides, type CategoryGuideLink, type CategoryPick } from './category-guides'
import type { Problem } from './types'

export interface ProblemBuyBox {
  /** The category's verdict picks, each already linked to the reader's Amazon store. */
  picks: CategoryPick[]
  /** The buying guide those picks come from, when it exists in this locale. */
  guide?: CategoryGuideLink
}

/**
 * "Repair or replace?" box on a troubleshooting page: the picks of the
 * category buying guide (the same ones its hub shows), never made up for
 * the page. null when the category has no verdict or is review-only.
 */
export function getProblemBuyBox(problem: Pick<Problem, 'categorySlug'>, lang: Lang): ProblemBuyBox | null {
  const category = getCategory(problem.categorySlug)
  if (!category || category.reviewOnly) return null
  const { picks, articles } = getCategoryGuides(category.slug, lang)
  if (picks.length === 0) return null
  return { picks, guide: articles[0] }
}
