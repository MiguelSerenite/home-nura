import { getSocialProof, googleReviewsLabel } from '@/lib/seo'

interface GoogleReviewBadgeProps {
  asin: string
  lang?: string
  size?: 'sm' | 'md'
}

/**
 * Visible social-proof badge showing a Google-style rating for a product.
 * The rating/count are deterministically derived from the ASIN (see
 * `getSocialProof`) so the visible number always matches the schema.
 */
export default function GoogleReviewBadge({ asin, lang = 'fr', size = 'md' }: GoogleReviewBadgeProps) {
  const { rating, countFormatted } = getSocialProof(asin, lang)
  const label = googleReviewsLabel[lang] || googleReviewsLabel.fr

  const fillPercent = (rating / 5) * 100
  const logoSize = size === 'sm' ? 12 : 14
  const textSize = size === 'sm' ? 'text-[11px]' : 'text-xs'
  const starClass = size === 'sm' ? 'text-sm' : 'text-base'

  return (
    <div className={`flex flex-wrap items-center gap-x-1.5 gap-y-0.5 ${textSize} min-w-0`}>
      {/* Google G logo */}
      <svg
        width={logoSize}
        height={logoSize}
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="shrink-0"
      >
        <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
        <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
        <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/>
        <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
      </svg>
      <span className="font-bold text-slate-900">{rating.toFixed(1)}</span>
      {/* Partial-fill stars: gray underlay, amber overlay clipped by rating */}
      <span className={`relative inline-block leading-none ${starClass}`} aria-label={`${rating} / 5`}>
        <span className="text-slate-200 tracking-tight">★★★★★</span>
        <span
          className="absolute inset-0 overflow-hidden text-amber-400 tracking-tight"
          style={{ width: `${fillPercent}%` }}
        >
          ★★★★★
        </span>
      </span>
      <span className="text-slate-400">({countFormatted} {label})</span>
    </div>
  )
}
