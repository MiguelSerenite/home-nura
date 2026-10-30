import type { ProductVisualData } from '@/lib/product-visual'
import ProductVisual from './ProductVisual'

interface ProductHeroVisualProps {
  visual: ProductVisualData
  /** Accessible name of the visual (the product title). */
  title: string
  badge?: string
}

/** Square product visual with an optional badge, for the podium cards. */
export default function ProductHeroVisual({ visual, title, badge }: ProductHeroVisualProps) {
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
