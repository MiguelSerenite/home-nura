/**
 * Seasonal entry points to the Black Friday pages: a banner on the home
 * page and small link blocks on the silo and category hubs. They render
 * nothing outside the season (see isBlackFridaySeason); the pages stay up.
 */

import Link from 'next/link'
import type { ReactNode } from 'react'
import type { MetaSiloSlug } from '@/lib/catalog'
import { resolveLang } from '@/lib/i18n'
import {
  BLACK_FRIDAY_CATEGORIES,
  blackFridayPath,
  getBlackFridayCategoriesForSilo,
  getBlackFridayCategoryForHub,
  isBlackFridaySeason,
} from '@/lib/black-friday'
import { UI } from '@/lib/black-friday/copy/ui'

const KICKER = 'text-[11px] font-bold uppercase tracking-[0.3em]'

export function BlackFridayHomeBanner({ lang }: { lang: string }) {
  if (!isBlackFridaySeason()) return null
  const safeLang = resolveLang(lang)
  const ui = UI[safeLang]
  return (
    <section aria-labelledby="bf-banner" className="px-4 sm:px-6 pb-12">
      <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 p-6 md:p-10 text-white">
        <p className={`${KICKER} text-brand-200`}>{ui.hubLabel}</p>
        <h2 id="bf-banner" className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">{ui.bannerTitle}</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-200">{ui.bannerText}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {BLACK_FRIDAY_CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/${safeLang}${blackFridayPath(c.slug)}`}
                className="inline-flex min-h-10 items-center rounded-full border border-slate-600 px-4 text-sm font-semibold text-slate-100 transition-colors hover:border-white hover:text-white"
              >
                {c.copy[safeLang].name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={`/${safeLang}${blackFridayPath()}`}
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-slate-900 transition-colors hover:bg-brand-50"
        >
          {ui.bannerCta} →
        </Link>
      </div>
    </section>
  )
}

function PromoBox({ lang, children }: { lang: string; children: ReactNode }) {
  const safeLang = resolveLang(lang)
  const ui = UI[safeLang]
  return (
    <aside aria-label={ui.hubLabel} className="max-w-3xl mx-auto px-4 md:px-6 pb-10">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className={`${KICKER} text-brand-700`}>{ui.hubLabel}</p>
        {children}
        <Link
          href={`/${safeLang}${blackFridayPath()}`}
          className="mt-3 inline-block text-sm font-semibold text-slate-700 underline-offset-2 hover:underline"
        >
          {ui.allCategories} →
        </Link>
      </div>
    </aside>
  )
}

/** On a catalog category hub: link to the matching Black Friday page. */
export function BlackFridayHubLink({ lang, categorySlug }: { lang: string; categorySlug: string }) {
  const category = getBlackFridayCategoryForHub(categorySlug)
  if (!category || !isBlackFridaySeason()) return null
  const safeLang = resolveLang(lang)
  return (
    <PromoBox lang={safeLang}>
      <Link
        href={`/${safeLang}${blackFridayPath(category.slug)}`}
        className="mt-2 block text-base font-bold text-slate-900 hover:text-brand-700 transition-colors"
      >
        {category.copy[safeLang].h1} →
      </Link>
    </PromoBox>
  )
}

/** On a silo hub: links to the Black Friday pages of its categories. */
export function BlackFridaySiloLinks({ lang, siloSlug }: { lang: string; siloSlug: MetaSiloSlug }) {
  const categories = getBlackFridayCategoriesForSilo(siloSlug)
  if (categories.length === 0 || !isBlackFridaySeason()) return null
  const safeLang = resolveLang(lang)
  return (
    <PromoBox lang={safeLang}>
      <ul className="mt-2 space-y-1">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/${safeLang}${blackFridayPath(c.slug)}`}
              className="text-base font-bold text-slate-900 hover:text-brand-700 transition-colors"
            >
              {c.copy[safeLang].h1} →
            </Link>
          </li>
        ))}
      </ul>
    </PromoBox>
  )
}
