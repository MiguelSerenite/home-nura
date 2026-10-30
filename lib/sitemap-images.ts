/**
 * Image sitemap entries (<image:image>): the manufacturer photos each page
 * renders, read from the same data the page renders them from. Only
 * self-hosted images under /images/products/ (lib/product-images.ts).
 */
import type { BlogArticle } from '@/lib/blog/types'
import { getArticleRecommendations } from '@/lib/blog/article-products'
import { getQuickAnswer } from '@/lib/blog/quick-answers'
import { getBlackFridayPicks, type BlackFridayCategory } from '@/lib/black-friday'
import { getCategoryGuides } from '@/lib/catalog/category-guides'
import { getProblemBuyBox } from '@/lib/catalog/problem-buy-box'
import type { Problem } from '@/lib/catalog'
import type { Lang } from '@/lib/i18n'
import { productImageUrl } from '@/lib/product-images'
import type { ProductPhoto } from '@/lib/product-photo'
import { getStaticProducts } from '@/lib/products'
import { getSmartKitchenProductsByCategory, type SmartKitchenCategory } from '@/lib/smart-kitchen-products'

/** Absolute URLs of the photos, deduplicated, in page order. */
export function photoUrls(photos: readonly (ProductPhoto | undefined)[]): string[] {
  return [...new Set(photos.flatMap((p) => (p ? [productImageUrl(p.id)] : [])))]
}

/** Home, airfryer guides: every air fryer of the catalog. */
export function airfryerCatalogImages(lang: Lang): string[] {
  return photoUrls(getStaticProducts(lang).map((p) => p.visual.photo))
}

export function smartKitchenCategoryImages(lang: Lang, category: SmartKitchenCategory): string[] {
  return photoUrls(getSmartKitchenProductsByCategory(lang, category).map((p) => p.visual.photo))
}

/** Generic category hub: its verdict picks. */
export function categoryHubImages(lang: Lang, categorySlug: string): string[] {
  return photoUrls(getCategoryGuides(categorySlug, lang).picks.map((p) => p.photo))
}

/** Troubleshooting page: the "repair or replace" box. */
export function problemImages(lang: Lang, problem: Pick<Problem, 'categorySlug'>): string[] {
  return photoUrls(getProblemBuyBox(problem, lang)?.picks.map((p) => p.photo) ?? [])
}

export function blackFridayImages(lang: Lang, category: BlackFridayCategory): string[] {
  return photoUrls(getBlackFridayPicks(category, lang).map((p) => p.photo))
}

/** Blog article: verdict box, then the product block (catalog products or cited models). */
export function articleImages(lang: Lang, article: BlogArticle): string[] {
  const verdict = getQuickAnswer(article, lang)?.picks.map((p) => p.photo) ?? []
  const rec = getArticleRecommendations(article, lang)
  const block =
    rec?.kind === 'catalog' ? rec.products.map((p) => p.visual.photo) : rec?.kind === 'models' ? rec.models.map((m) => m.photo) : []
  return photoUrls([...verdict, ...block])
}
