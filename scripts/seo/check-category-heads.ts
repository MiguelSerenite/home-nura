/**
 * Check market-written category heads (title / H1 / description).
 *   npx tsx scripts/seo/check-category-heads.ts        # every locale
 *   npx tsx scripts/seo/check-category-heads.ts de     # one locale file
 */
import { CATEGORY_HEADS, HEAD_LOCALES, type HeadLocale } from '@/lib/catalog/category-heads'
import { checkCategoryHead } from '@/lib/catalog/category-heads/quality'
import { getCategory, getIndexableCategories } from '@/lib/catalog'

const only = process.argv[2] as HeadLocale | undefined
const locales = only ? [only] : HEAD_LOCALES
const indexable = getIndexableCategories().map((c) => c.slug)
const errors: string[] = []
for (const locale of locales) {
  const heads = CATEGORY_HEADS[locale]
  for (const slug of indexable) if (!heads[slug]) errors.push(`${locale}/${slug}: missing`)
  for (const [slug, head] of Object.entries(heads)) {
    if (!getCategory(slug)) errors.push(`${locale}/${slug}: unknown category slug`)
    errors.push(...checkCategoryHead(`${locale}/${slug}`, head))
  }
  const titles = Object.values(heads).map((h) => h.title.toLowerCase())
  if (new Set(titles).size !== titles.length) errors.push(`${locale}: duplicate title`)
}
console.log(`${locales.join(', ')}: ${indexable.length} indexable categories expected per locale`)
if (errors.length) {
  console.log(errors.join('\n'))
  process.exit(1)
}
console.log('OK')
