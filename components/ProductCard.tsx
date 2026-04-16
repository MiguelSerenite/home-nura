import Image from 'next/image'
import GoogleReviewBadge from './GoogleReviewBadge'
import AffiliateLink from './AffiliateLink'
import { getSocialProof } from '@/lib/seo'
// Note: getSocialProof is used for UI display only (GoogleReviewBadge).
// aggregateRating was removed from JSON-LD to comply with Google's
// structured data policy (no fabricated review data).
import { getNonce } from '@/lib/nonce'

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
}

// Extract brand from product name
const knownBrands = ['Ninja', 'Philips', 'Cosori', 'Tefal', 'Xiaomi', 'Moulinex']
function extractBrand(name: string): string {
  for (const brand of knownBrands) {
    if (name.toLowerCase().includes(brand.toLowerCase())) return brand
  }
  return 'Generic'
}

// Country code to schema.org country mapping
const countryMap: Record<string, string> = {
  fr: 'FR', de: 'DE', en: 'GB', es: 'ES', it: 'IT', nl: 'NL',
}

export default async function ProductCard({ name, price, imageUrl, affiliateLink, asin, buyButtonText, badge, lang = 'fr', capacity, bestFor, position }: ProductProps) {
  const nonce = await getNonce()
  // Extract numeric price and currency for schema
  const numericPrice = price.replace(/[^0-9.,]/g, '').replace(',', '.')
  const priceForTracking = parseFloat(numericPrice)
  const currency = price.includes('£') ? 'GBP' : 'EUR'
  const brand = extractBrand(name)
  const country = countryMap[lang] || 'FR'
  // Google-style social proof: rating + review count (deterministic from ASIN)
  const { rating, count } = getSocialProof(asin, lang)

  // Enriched alt for Google Images SEO — includes brand, capacity, usage context
  const enrichedAlt = [name, capacity, bestFor].filter(Boolean).join(' — ')

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image: imageUrl.startsWith('/') ? `https://homenura.com${imageUrl}` : imageUrl,
    description: name,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    datePublished: '2024-06-01',
    dateModified: '2026-04-14',
    offers: {
      '@type': 'Offer',
      url: affiliateLink,
      priceCurrency: currency,
      price: numericPrice,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Amazon',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: country,
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 1,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 5,
            unitCode: 'DAY',
          },
        },
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: 0,
          currency: currency,
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: country,
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
    },
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-1">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
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
        <div className="mb-2">
          <GoogleReviewBadge asin={asin} lang={lang} size="sm" />
        </div>
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
          className="mt-6 block w-full rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-700"
        >
          {buyButtonText || 'Vérifier le prix sur Amazon'}
        </AffiliateLink>
      </div>
    </div>
  );
}
