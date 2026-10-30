import type { ProductVisualData } from '@/lib/product-visual'
import ProductGallery from './ProductGallery'
import ProductVisual from './ProductVisual'

interface ProductHeroVisualProps {
  visual: ProductVisualData
  /** Accessible name of the visual (the product title). */
  title: string
  badge?: string
  /** Locale of the gallery's thumbnail labels. */
  lang?: string
}

/**
 * Square product visual with an optional badge, for the podium cards: an
 * Amazon-style gallery when the brand offers in-use photos, else the single
 * framed photo or neutral card.
 */
export default function ProductHeroVisual({ visual, title, badge, lang = 'fr' }: ProductHeroVisualProps) {
  if (visual.photo?.gallery?.length) return <ProductGallery photo={visual.photo} lang={lang} badge={badge} />
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg">
      <ProductVisual {...visual} size="hero" label={title} />
      {badge && (
        <div className="absolute top-4 right-4 z-10 rounded-md bg-red-600 px-3 py-1 text-sm font-semibold whitespace-nowrap text-white shadow-md">
          {badge}
        </div>
      )}
    </div>
  )
}
