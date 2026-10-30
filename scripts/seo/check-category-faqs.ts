/**
 * Check category FAQ data against the editorial rules.
 *   npx tsx scripts/seo/check-category-faqs.ts            # every file
 *   npx tsx scripts/seo/check-category-faqs.ts securite   # one silo file
 */
import { CATEGORY_FAQS } from '@/lib/catalog/category-faqs'
import { checkFaqSet, checkFaqSetsUnique } from '@/lib/catalog/category-faqs/quality'
import type { CategoryFaqSets } from '@/lib/catalog/category-faqs/types'
import { getCategory } from '@/lib/catalog'

async function main() {
  const file = process.argv[2]
  const sets: CategoryFaqSets = file
    ? (Object.values(await import(`@/lib/catalog/category-faqs/${file}`))[0] as CategoryFaqSets)
    : CATEGORY_FAQS
  const errors = [
    ...Object.keys(sets).filter((slug) => !getCategory(slug)).map((slug) => `${slug}: unknown category slug`),
    ...Object.entries(sets).flatMap(([slug, set]) => checkFaqSet(slug, set)),
    ...checkFaqSetsUnique(sets),
  ]
  console.log(`${Object.keys(sets).length} categories checked`)
  if (errors.length) {
    console.log(errors.join('\n'))
    process.exit(1)
  }
  console.log('OK')
}

main()
