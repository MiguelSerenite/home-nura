import type { ProductVisualData } from '@/lib/product-visual'
import AffiliateLink from './AffiliateLink'
import ProductVisual from './ProductVisual'

interface ProductProps {
  name: string;
  /** Click analytics only, never rendered (no Amazon prices without its API). */
  priceNumeric?: number;
  visual: ProductVisualData;
  affiliateLink: string;
  asin: string;
  buyButtonText?: string;
  badge?: string;
  lang?: string;
  capacity?: string;
  bestFor?: string;
  position?: number;
  /** What the product is and who it suits ("Airfryer · Petit budget"), shown above the name. */
  kicker?: string;
}

export default async function ProductCard({ name, priceNumeric, visual, affiliateLink, asin, buyButtonText, badge, lang = 'fr', capacity, bestFor, position, kicker }: ProductProps) {
  // Accessible name of the visual: brand, capacity, usage context.
  const visualLabel = [name, capacity, bestFor].filter(Boolean).join(' — ')

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-1">
      {badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
          {badge}
        </div>
      )}
      <div className="aspect-square overflow-hidden relative">
        <ProductVisual {...visual} label={visualLabel} className="transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900 leading-tight">
          {kicker && (
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-700">{kicker}</span>
          )}
          <span className="line-clamp-2">{name}</span>
        </h3>
        <AffiliateLink
          href={affiliateLink}
          asin={asin}
          productName={name}
          priceNumeric={priceNumeric}
          position={position}
          location="product_card"
          placement="card"
          lang={lang}
          className="mt-6 block w-full rounded-full bg-brand-600 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-700"
        >
          {buyButtonText || 'Voir sur Amazon'}
        </AffiliateLink>
      </div>
    </div>
  );
}
