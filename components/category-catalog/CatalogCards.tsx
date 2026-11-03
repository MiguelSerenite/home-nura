'use client'

import { trackAffiliateClick } from '@/lib/analytics'
import type { CatalogEntry } from '@/lib/category-catalog/types'
import ProductPhotoImage from '../ProductPhotoImage'
import type { CatalogUi } from './ui'

/** The catalogue grid: one card per model, photo and button on the same Amazon link. */
export default function CatalogCards({ entries, lang, ui }: { entries: readonly CatalogEntry[]; lang: string; ui: CatalogUi }) {
  return (
    <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry, i) => {
        const track = () =>
          trackAffiliateClick({
            asin: '',
            productName: entry.name,
            position: i + 1,
            location: 'category_picks',
            lang,
            placement: 'category_catalog',
            url: entry.url,
          })
        return (
          <li key={entry.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-start gap-3">
              {entry.photo && (
                // Same Amazon link as the button; kept out of the tab order and the accessibility tree.
                <a
                  href={entry.url}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  data-aff-placement="category_catalog"
                  tabIndex={-1}
                  aria-hidden="true"
                  onClick={track}
                  className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-xl"
                >
                  <ProductPhotoImage photo={entry.photo} sizes="80px" className="h-full w-full object-contain" />
                </a>
              )}
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-brand-700">{ui.segments[entry.segment]}</p>
                <h3 className="text-base font-bold leading-snug text-slate-900">{entry.name}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              <strong className="font-semibold text-slate-900">{ui.bestFor}</strong> {entry.bestFor}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {entry.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            {entry.photo && <p className="mt-2 text-[11px] text-slate-500">{entry.photo.credit}</p>}
            <div className="mt-auto pt-4">
              <a
                href={entry.url}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                data-aff-placement="category_catalog"
                onClick={track}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-600 px-5 text-sm font-bold text-white transition-colors hover:bg-brand-700 active:bg-brand-700"
              >
                {ui.button} →
              </a>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
