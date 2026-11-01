import { Fragment } from 'react'
import AffiliateLink from '@/components/AffiliateLink'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import ProductVisual from '@/components/ProductVisual'
import type { FloorCareMarket, FloorCareNeedKey } from '@/lib/floor-care/config'
import { pickAmazonUrl, pickId, pickName, pickVisualKind } from '@/lib/floor-care/picks'
import type { FloorCarePick } from '@/lib/floor-care/types'
import { FLOOR_CARE_UI } from '@/lib/floor-care/ui'
import { formatHeight } from '@/lib/floor-care/units'

interface PickCardsProps {
  market: FloorCareMarket
  guide: FloorCareNeedKey
  picks: readonly FloorCarePick[]
  /** Store-neutral CTA ("View on Amazon"), from the locale dictionary. */
  buyLabel: string
}

function PickCard({ market, guide, pick, position, buyLabel }: Omit<PickCardsProps, 'picks'> & { pick: FloorCarePick; position: number }) {
  const ui = FLOOR_CARE_UI[market]
  const name = pickName(pick)
  const url = pickAmazonUrl(pick, market)
  return (
    <article id={pickId(pick)} className="flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3]">
        <ProductVisual brand={pick.brand} model={pick.model} kind={pickVisualKind(guide, pick)} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-700">{pick.role}</p>
        <h3 className="mt-1 text-lg font-bold leading-snug text-slate-900">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">{pick.why}</p>
        <p className="mt-2 text-sm text-slate-700">
          <strong className="font-semibold text-slate-900">{ui.bestFor}:</strong> {pick.bestFor}
        </p>
        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
          {pick.heightMm !== null && (
            <>
              <dt className="font-semibold text-slate-900">{ui.height}</dt>
              <dd className="text-slate-700">{formatHeight(pick.heightMm, market)}</dd>
            </>
          )}
          {Object.entries(pick.specs).map(([spec, value]) => (
            <Fragment key={spec}>
              <dt className="font-semibold text-slate-900">{spec}</dt>
              <dd className="text-slate-700">{value}</dd>
            </Fragment>
          ))}
        </dl>
        <div className="mt-auto flex flex-col gap-2 pt-5">
          {url ? (
            <AffiliateLink
              href={url}
              asin={pick.asin ?? ''}
              productName={name}
              position={position}
              location="category_picks"
              placement="floor_care"
              surface="floor_care"
              lang={market}
              ariaLabel={`${buyLabel}: ${name}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-600 px-5 text-sm font-bold text-white transition-colors hover:bg-brand-700"
            >
              {buyLabel} →
            </AffiliateLink>
          ) : (
            <p className="text-xs text-slate-600">{ui.notOnAmazon}</p>
          )}
          <a
            href={pick.manufacturerUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-center text-sm font-semibold text-slate-700 underline-offset-2 hover:text-brand-700 hover:underline"
          >
            {ui.manufacturerPage}
            <span className="sr-only">: {name}</span> ↗
          </a>
        </div>
      </div>
    </article>
  )
}

/** The guide's picks as neutral product cards (no Amazon image, no price), with Amazon's disclosure. */
export default function PickCards({ market, guide, picks, buyLabel }: PickCardsProps) {
  const ui = FLOOR_CARE_UI[market]
  const hasAmazonLinks = picks.some((pick) => pickAmazonUrl(pick, market) !== null)
  return (
    <section id="picks" aria-labelledby="picks-title" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 md:px-6">
      <h2 id="picks-title" className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {ui.picksTitle}
      </h2>
      <ol className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {picks.map((pick, i) => (
          <li key={pickId(pick)}>
            <PickCard market={market} guide={guide} pick={pick} position={i + 1} buyLabel={buyLabel} />
          </li>
        ))}
      </ol>
      {hasAmazonLinks && <AmazonDisclosure lang={market} note={ui.disclosureNote} className="mt-6 text-center text-xs text-slate-600" />}
    </section>
  )
}
