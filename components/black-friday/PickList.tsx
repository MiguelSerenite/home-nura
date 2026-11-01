import Link from 'next/link'
import type { Lang } from '@/lib/i18n'
import type { BlackFridayPick } from '@/lib/black-friday'
import { UI } from '@/lib/black-friday/copy/ui'
import BlackFridayAmazonLink from './AmazonLink'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import ProductPhotoImage from '@/components/ProductPhotoImage'
import ProductVisual from '@/components/ProductVisual'

/** The models worth watching: verdict label, name, reason, source guide and Amazon link. No prices. */
export default function PickList({ picks, lang }: { picks: readonly BlackFridayPick[]; lang: Lang }) {
  const ui = UI[lang]
  return (
    <section aria-labelledby="bf-picks" className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
      <h2 id="bf-picks" className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
        {ui.picksTitle}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{ui.picksNote}</p>
      <ol className="mt-6 space-y-4">
        {picks.map((pick, i) => (
          <li
            key={pick.model}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start">
              {pick.photo && (
                <BlackFridayAmazonLink
                  href={pick.url}
                  asin={pick.asin}
                  productName={pick.model}
                  position={i + 1}
                  lang={lang}
                  decorative
                  className="relative block aspect-square w-40 shrink-0 self-center overflow-hidden rounded-xl sm:w-32 sm:self-start"
                >
                  <ProductPhotoImage photo={pick.photo} sizes="160px" className="h-full w-full object-contain" />
                </BlackFridayAmazonLink>
              )}
              {!pick.photo && pick.visual && (
                // Neutral card (icon, brand, model) for a North-American equivalent without an official photo.
                <BlackFridayAmazonLink
                  href={pick.url}
                  asin={pick.asin}
                  productName={pick.model}
                  position={i + 1}
                  lang={lang}
                  decorative
                  className="relative block aspect-square w-40 shrink-0 self-center overflow-hidden rounded-xl sm:w-32 sm:self-start"
                >
                  <ProductVisual {...pick.visual} size="thumb" />
                </BlackFridayAmazonLink>
              )}
              <div className="min-w-0">
                <p className="text-sm font-bold text-brand-700">{pick.role}</p>
                <h3 className="text-lg font-bold text-slate-900">{pick.model}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{pick.why}</p>
                <p className="mt-2 text-xs text-slate-600">
                  {ui.fromGuide}{' '}
                  <Link href={pick.guide.href} className="font-semibold text-brand-700 underline-offset-2 hover:underline">
                    {pick.guide.title}
                  </Link>
                </p>
                {pick.photo && <p className="mt-1 text-[11px] text-slate-500">{pick.photo.credit}</p>}
              </div>
            </div>
            <BlackFridayAmazonLink
              href={pick.url}
              asin={pick.asin}
              productName={pick.model}
              position={i + 1}
              lang={lang}
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-brand-600 px-5 text-sm font-bold text-white transition-colors hover:bg-brand-700 active:bg-brand-700"
            >
              {ui.cta} →
            </BlackFridayAmazonLink>
          </li>
        ))}
      </ol>
      <AmazonDisclosure lang={lang} note={ui.affiliateNote} className="mt-4 text-xs text-slate-600" />
    </section>
  )
}
