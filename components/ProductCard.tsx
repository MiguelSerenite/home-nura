import Image from 'next/image'
import AffiliateLink from './AffiliateLink'
import { extractBrand } from '@/lib/brand'
interface ProductProps {
  name: string;
  price: string;
  imageUrl: string;
  affiliateLink: string;
  asin: string;
  buyButtonText?: string;
  badge?: string;
  lang?: string;
  capacity?: string;
  bestFor?: string;
  position?: number;
  /** Emit a per-card Product JSON-LD. Disable on pages whose ItemList already describes the products. */
  withSchema?: boolean;
}

export default async function ProductCard({ name, price, imageUrl, affiliateLink, asin, buyButtonText, badge, lang = 'fr', capacity, bestFor, position, withSchema = true }: ProductProps) {
  // Extract numeric price and currency for schema
  const numericPrice = price.replace(/[^0-9.,]/g, '').replace(',', '.')
  const priceForTracking = parseFloat(numericPrice)
  const currency = price.includes('£') ? 'GBP' : 'EUR'
  const brand = extractBrand(name)

  // Enriched alt for Google Images SEO — includes brand, capacity, usage context
  const enrichedAlt = [name, capacity, bestFor].filter(Boolean).join(' — ')

  // Only facts we actually know: no ratings, stock, shipping or return
  // policy — those belong to Amazon and change without notice.
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image: imageUrl.startsWith('/') ? `https://homenura.com${imageUrl}` : imageUrl,
    description: name,
    sku: asin,
    ...(brand ? { brand: { '@type': 'Brand', name: brand } } : {}),
    offers: {
      '@type': 'Offer',
      url: affiliateLink,
      priceCurrency: currency,
      price: numericPrice,
      seller: {
        '@type': 'Organization',
        name: 'Amazon',
      },
    },
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-1">
      {withSchema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      {badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
          {badge}
        </div>
      )}
      <div className="aspect-square overflow-hidden bg-slate-100 relative">
        <Image
          src={imageUrl}
          alt={enrichedAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900 line-clamp-2 leading-tight">
          {name}
        </h3>
        <p className="mt-4 text-2xl font-black text-slate-900">
          {price}
        </p>
        <AffiliateLink
          href={affiliateLink}
          asin={asin}
          productName={name}
          priceNumeric={Number.isFinite(priceForTracking) ? priceForTracking : undefined}
          position={position}
          location="product_card"
          lang={lang}
          className="mt-6 block w-full rounded-full bg-brand-600 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-700"
        >
          {buyButtonText || 'Vérifier le prix sur Amazon'}
        </AffiliateLink>
      </div>
    </div>
  );
}
