import AffiliateLink from '@/components/AffiliateLink'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import { marketPickUrl } from '@/lib/market-pages/picks'
import type { MarketPage, MarketPagePick } from '@/lib/market-pages/types'
import { MARKET_PAGE_UI } from '@/lib/market-pages/ui'
import { findPick, pickName } from '@/lib/pick-names'

const STICKY_HEAD = 'sticky left-0 z-20 min-w-[7.5rem] max-w-[11rem] border-r border-slate-200 bg-slate-50 px-3 py-3 font-bold md:px-4'
const STICKY_CELL = 'sticky left-0 z-10 min-w-[7.5rem] max-w-[11rem] border-r border-slate-200 bg-white px-3 py-3 font-semibold text-slate-900 md:px-4'
const CELL = 'border-t border-slate-200 px-3 py-3 text-slate-700 md:px-4'
const BUTTON = 'inline-flex min-h-10 items-center whitespace-nowrap rounded-full bg-brand-600 px-4 text-xs font-bold text-white hover:bg-brand-700'

function BuyButton({ page, pick, position, buyLabel }: { page: MarketPage; pick: MarketPagePick; position: number; buyLabel: string }) {
  return (
    <AffiliateLink
      href={marketPickUrl(pick, page.locale)}
      asin={pick.asin ?? ''}
      productName={pickName(pick)}
      position={position}
      location="comparison_table"
      placement="market_page"
      surface="market_page"
      lang={page.locale}
      ariaLabel={`${buyLabel}: ${pickName(pick)}`}
      className={BUTTON}
    >
      {buyLabel}
    </AffiliateLink>
  )
}

/**
 * The page's comparison table, first column fixed while the others
 * scroll sideways on a phone. One model per row (an Amazon column for the
 * page's picks), or, on a duel, one spec per row with the two models as
 * columns (an Amazon row under them).
 */
export default function ComparisonTable({ page, buyLabel }: { page: MarketPage; buyLabel: string }) {
  const { columns, rows, rowsAreModels } = page.comparison
  if (rows.length === 0) return null
  const ui = MARKET_PAGE_UI[page.locale]
  const rowPicks = rowsAreModels ? rows.map((row) => findPick(page.picks, row[0])) : []
  const columnPicks = rowsAreModels ? [] : columns.slice(1).map((column) => findPick(page.picks, column))
  const withLinks = rowPicks.some(Boolean) || columnPicks.some(Boolean)

  return (
    <section id="comparison" aria-labelledby="comparison-title" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-4 md:px-6 md:py-10">
      <h2 id="comparison-title" className="text-xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {ui.comparisonTitle}
      </h2>
      <p className="mt-1 text-xs text-slate-500 md:hidden">{ui.tableHint}</p>
      <div role="group" aria-labelledby="comparison-title" tabIndex={0} className="mt-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white md:mt-6">
        <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-slate-600">
            <tr>
              {columns.map((column, i) => (
                <th key={column} scope="col" className={i === 0 ? STICKY_HEAD : 'bg-slate-50 px-3 py-3 font-bold md:px-4'}>
                  {column}
                </th>
              ))}
              {rowsAreModels && withLinks && (
                <th scope="col" className="bg-slate-50 px-3 py-3 font-bold md:px-4">
                  Amazon
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => {
              const pick = rowPicks[r]
              return (
                <tr key={row[0]} className="align-top">
                  <th scope="row" className={`${STICKY_CELL} border-t`}>
                    {row[0]}
                  </th>
                  {row.slice(1).map((cell, c) => (
                    <td key={c} className={CELL}>
                      {cell}
                    </td>
                  ))}
                  {rowsAreModels && withLinks && (
                    <td className={CELL}>{pick ? <BuyButton page={page} pick={pick} position={r + 1} buyLabel={buyLabel} /> : <span className="text-slate-500">–</span>}</td>
                  )}
                </tr>
              )
            })}
            {!rowsAreModels && withLinks && (
              <tr>
                <th scope="row" className={`${STICKY_CELL} border-t`}>
                  Amazon
                </th>
                {columnPicks.map((pick, c) => (
                  <td key={c} className={CELL}>
                    {pick && <BuyButton page={page} pick={pick} position={c + 1} buyLabel={buyLabel} />}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {withLinks && <AmazonDisclosure lang={page.locale} className="mt-3 text-xs text-slate-600" />}
    </section>
  )
}
