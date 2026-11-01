import { Fragment } from 'react'
import AffiliateLink from '@/components/AffiliateLink'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import PhotoCredits from '@/components/PhotoCredits'
import ProductVisual from '@/components/ProductVisual'
import { marketPageVisualKind, marketPickPhoto, marketPickUrl } from '@/lib/market-pages/picks'
import type { MarketPage, MarketPagePick } from '@/lib/market-pages/types'
import { MARKET_PAGE_UI } from '@/lib/market-pages/ui'
import { pickId, pickName } from '@/lib/pick-names'

interface PickCardProps {
  page: MarketPage
  pick: MarketPagePick
  position: number
  /** Store-neutral CTA ("View on Amazon"), from the locale dictionary. */
  buyLabel: string
}

/**
 * Specs behind a toggle. On phones the pick's "why" (and, on a guide,
 * who it is for) moves in there too, so the comparison table stays within
 * the first two screens; from tablets up they are shown on the card.
 */
function Details({ pick, page, withBestFor = false }: { pick: MarketPagePick; page: MarketPage; withBestFor?: boolean }) {
  const ui = MARKET_PAGE_UI[page.locale]
  return (
    <details className="mt-2 text-sm md:mt-3">
      <summary className="cursor-pointer select-none font-semibold text-brand-700 hover:text-brand-800">
        <span className="md:hidden">{ui.details}</span>
        <span className="hidden md:inline">{ui.specs}</span>
      </summary>
      {withBestFor && (
        <p className="mt-2 text-slate-700 md:hidden">
          <strong className="font-semibold text-slate-900">{ui.bestFor}:</strong> {pick.bestFor}
        </p>
      )}
      <p className="mt-2 leading-relaxed text-slate-700 md:hidden">{pick.why}</p>
      <dl className="mt-2 grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-[auto_1fr]">
        {Object.entries(pick.specs).map(([spec, value]) => (
          <Fragment key={spec}>
            <dt className="font-semibold text-slate-900">{spec}</dt>
            <dd className="mb-1 text-slate-700 sm:mb-0">{value}</dd>
          </Fragment>
        ))}
      </dl>
    </details>
  )
}

/** The pick's "why", on the card from tablets up (in Details on phones). */
function WhyText({ pick }: { pick: MarketPagePick }) {
  return <p className="mt-3 hidden text-sm leading-relaxed text-slate-600 md:block">{pick.why}</p>
}

function Actions({ page, pick, position, buyLabel }: PickCardProps) {
  const ui = MARKET_PAGE_UI[page.locale]
  const name = pickName(pick)
  return (
    <div className="mt-auto flex flex-col gap-1.5 pt-3 md:gap-2 md:pt-4">
      <AffiliateLink
        href={marketPickUrl(pick, page.locale)}
        asin={pick.asin ?? ''}
        productName={name}
        position={position}
        location="category_picks"
        placement="market_page"
        surface="market_page"
        lang={page.locale}
        ariaLabel={`${buyLabel}: ${name}`}
        className="inline-flex min-h-10 items-center justify-center rounded-full bg-brand-600 px-4 text-center text-sm font-bold text-white transition-colors hover:bg-brand-700 md:min-h-11"
      >
        {buyLabel} →
      </AffiliateLink>
      <a
        href={pick.manufacturerUrl}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="text-center text-xs font-semibold text-slate-700 underline-offset-2 hover:text-brand-700 hover:underline sm:text-sm"
      >
        {ui.manufacturerPage}
        <span className="sr-only">: {name}</span> ↗
      </a>
    </div>
  )
}

/** A duel column: the model, who it is best for, why, specs, then its links. */
function DuelCard(props: PickCardProps) {
  const { page, pick } = props
  const ui = MARKET_PAGE_UI[page.locale]
  const name = pickName(pick)
  return (
    <article id={pickId(pick)} className="flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[3/2] md:aspect-[4/3]">
        <ProductVisual brand={pick.brand} model={pick.model} kind={marketPageVisualKind(page)} photo={marketPickPhoto(pick, page.locale)} />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-brand-700">{pick.role}</p>
        <h3 className="mt-1 text-sm font-bold leading-snug text-slate-900 sm:text-lg">{name}</h3>
        <p className="mt-2 text-sm font-bold text-slate-900 md:mt-3">{ui.bestFor}</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-700">{pick.bestFor}</p>
        <WhyText pick={pick} />
        <Details pick={pick} page={page} />
        <Actions {...props} />
      </div>
    </article>
  )
}

/** A guide pick: a compact row on phones (role, name, details, links: the table stays within two screens), a card from tablets up. */
function GuideCard(props: PickCardProps) {
  const { page, pick } = props
  const ui = MARKET_PAGE_UI[page.locale]
  const name = pickName(pick)
  return (
    <article id={pickId(pick)} className="flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-1 flex-row md:flex-col">
        {/* Lazy photos in a hidden wrapper are not fetched: each screen size loads one. */}
        <div className="relative aspect-square w-20 shrink-0 md:hidden">
          <ProductVisual brand={pick.brand} model={pick.model} kind={marketPageVisualKind(page)} photo={marketPickPhoto(pick, page.locale)} size="thumb" />
        </div>
        <div className="relative hidden aspect-[4/3] w-full md:block">
          <ProductVisual brand={pick.brand} model={pick.model} kind={marketPageVisualKind(page)} photo={marketPickPhoto(pick, page.locale)} />
        </div>
        <div className="flex flex-1 flex-col p-3 md:p-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-700">{pick.role}</p>
          <h3 className="mt-1 text-base font-bold leading-snug text-slate-900 md:text-lg">{name}</h3>
          <WhyText pick={pick} />
          <p className="mt-2 hidden text-sm text-slate-700 md:block">
            <strong className="font-semibold text-slate-900">{ui.bestFor}:</strong> {pick.bestFor}
          </p>
          <Details pick={pick} page={page} withBestFor />
          <Actions {...props} />
        </div>
      </div>
    </article>
  )
}

/** The page's picks as neutral product cards (no Amazon image, no price), with Amazon's disclosure. */
export default function PickCards({ page, buyLabel }: { page: MarketPage; buyLabel: string }) {
  if (page.picks.length === 0) return null
  const ui = MARKET_PAGE_UI[page.locale]
  const duel = page.type === 'duel'
  const Card = duel ? DuelCard : GuideCard
  return (
    <section id="picks" aria-labelledby="picks-title" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-5 md:px-6 md:py-10">
      <h2 id="picks-title" className="text-xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {ui.picksTitle[page.type]}
      </h2>
      <ol className={`mt-3 grid gap-3 md:mt-6 md:gap-6 ${duel ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
        {page.picks.map((pick, i) => (
          <li key={pickId(pick)}>
            <Card page={page} pick={pick} position={i + 1} buyLabel={buyLabel} />
          </li>
        ))}
      </ol>
      {!duel && (
        // Phone thumbnails are too small to carry their credit.
        <PhotoCredits photos={page.picks.map((pick) => marketPickPhoto(pick, page.locale))} lang={page.locale} className="mt-3 text-[11px] leading-snug text-slate-500 md:hidden" />
      )}
      <AmazonDisclosure lang={page.locale} className="mt-3 text-center text-xs text-slate-600 md:mt-4" />
    </section>
  )
}
