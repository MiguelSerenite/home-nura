import Link from 'next/link'
import { isValidLang } from '@/lib/i18n'
import { marketPageHref, marketPagesLinkingTo } from '@/lib/market-pages/data'
import { MARKET_PAGE_UI } from '@/lib/market-pages/ui'

/**
 * "Comparisons & guides" on a category hub: the market pages of this
 * locale whose main hub it is (their first related hub,
 * lib/market-pages/hubs.ts). Nothing when there are none.
 */
export default function MarketPagesHubList({ lang, path }: { lang: string; path: string }) {
  if (!isValidLang(lang)) return null
  const pages = marketPagesLinkingTo(lang, path)
  if (pages.length === 0) return null
  const ui = MARKET_PAGE_UI[lang]
  return (
    <section aria-labelledby="market-pages-title" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
      <h2 id="market-pages-title" className="mb-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {ui.hubListTitle}
      </h2>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {pages.map((page) => (
          <li key={page.path}>
            <Link
              href={marketPageHref(page)}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:border-brand-200 hover:shadow-sm"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-700">{ui.sections[page.type]}</span>
              <span className="mt-1 text-base font-semibold text-slate-900 transition-colors group-hover:text-brand-700">{page.h1}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
