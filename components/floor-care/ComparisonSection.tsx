import Link from 'next/link'
import AffiliateLink from '@/components/AffiliateLink'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import { FLOOR_CARE_LABELS, type FloorCareGuideKey } from '@/lib/floor-care/config'
import { floorCareHref } from '@/lib/floor-care/navigation'
import { findPick, pickAmazonUrl, pickName } from '@/lib/floor-care/picks'
import type { FloorCareGuide } from '@/lib/floor-care/types'
import { FLOOR_CARE_UI } from '@/lib/floor-care/ui'

/** The other guide of the hard-floor / fabric pair: linked under each of their tables. */
const COMPARED_ELSEWHERE: Readonly<Partial<Record<FloorCareGuideKey, FloorCareGuideKey>>> = {
  hardfloor: 'textile',
  textile: 'hardfloor',
}

/**
 * A page's own comparison table. A guide's rows are its own picks (the
 * data loader enforces it), each with its Amazon link when the model is
 * listed in that market; the hub's table compares jobs, not models.
 */
export default function ComparisonSection({ data, buyLabel }: { data: FloorCareGuide; buyLabel: string }) {
  const { market, guide, comparison, picks } = data
  if (comparison.rows.length === 0) return null
  const ui = FLOOR_CARE_UI[market]
  const rowPicks = comparison.rows.map((row) => (guide === 'hub' ? undefined : findPick(picks, row[0])))
  const urls = rowPicks.map((pick) => (pick ? pickAmazonUrl(pick, market) : null))
  const withLinks = urls.some((url) => url !== null)
  const elsewhere = COMPARED_ELSEWHERE[guide]

  return (
    <section id="comparison" aria-labelledby="comparison-title" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 md:px-6">
      <h2 id="comparison-title" className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {ui.comparisonTitle[guide]}
      </h2>
      <div role="group" aria-labelledby="comparison-title" tabIndex={0} className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-600">
            <tr>
              {comparison.columns.map((column) => (
                <th key={column} scope="col" className="px-4 py-3 font-bold">
                  {column}
                </th>
              ))}
              {withLinks && (
                <th scope="col" className="px-4 py-3 font-bold">
                  {ui.amazonColumn}
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {comparison.rows.map((row, r) => (
              <tr key={row[0]} className="align-top">
                <th scope="row" className="px-4 py-3 font-semibold text-slate-900">
                  {row[0]}
                </th>
                {row.slice(1).map((cell, c) => (
                  <td key={c} className="px-4 py-3 text-slate-700">
                    {cell}
                  </td>
                ))}
                {withLinks && (
                  <td className="px-4 py-3">
                    {urls[r] && rowPicks[r] ? (
                      <AffiliateLink
                        href={urls[r]}
                        asin={rowPicks[r].asin ?? ''}
                        productName={pickName(rowPicks[r])}
                        position={r + 1}
                        location="comparison_table"
                        surface="floor_care"
                        lang={market}
                        ariaLabel={`${buyLabel}: ${pickName(rowPicks[r])}`}
                        className="inline-flex min-h-10 items-center whitespace-nowrap rounded-full bg-brand-600 px-4 text-xs font-bold text-white hover:bg-brand-700"
                      >
                        {buyLabel}
                      </AffiliateLink>
                    ) : (
                      <span className="text-slate-400">–</span>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {elsewhere && ui.separateNote[guide as 'hardfloor' | 'textile'] && (
        <p className="mt-4 text-sm text-slate-600">
          {ui.separateNote[guide as 'hardfloor' | 'textile']}{' '}
          <Link href={floorCareHref(market, elsewhere)} className="font-semibold text-brand-700 underline-offset-2 hover:underline">
            {FLOOR_CARE_LABELS[elsewhere]} →
          </Link>
        </p>
      )}
      {withLinks && <AmazonDisclosure lang={market} note={ui.disclosureNote} className="mt-4 text-xs text-slate-600" />}
    </section>
  )
}
