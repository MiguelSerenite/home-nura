/**
 * Catalog — unified entry point for the war machine.
 *
 * Anything that needs to know about meta-silos, categories, buyer
 * personas or problems should import from `@/lib/catalog`, not
 * from the sub-files. That keeps the blast radius of any future
 * rename contained.
 */

export * from './types'
export { META_SILOS, getMetaSilo, getFlagshipSilo, getIndexableSilos } from './meta-silos'
export {
  CATEGORIES,
  getCategory,
  getCategoriesBySilo,
  getIndexableCategories,
} from './categories'
export {
  BUYER_PERSONAS,
  getBuyerPersona,
  getPersonasForSilo,
  getPersonasByAxis,
} from './buyer-personas'
export { PROBLEMS, getProblem, getProblemsByCategory } from './problems'
export {
  getCategoryHero,
  getCategoryFaq,
  type CategoryHero,
  type CategoryFaqEntry,
} from './content'
