/**
 * Shared route of the market pages (lib/market-pages): duels at
 * /{lang}/vs/{slug}, guides at /{lang}/guides/{slug} (the static guide
 * folders beside it keep their URLs: Next.js prefers static segments) and
 * news at /{lang}/news/{slug}. Each page exists in the locale that owns
 * it only; every other locale or slug is a 404 (dynamicParams = false in
 * each route file).
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import MarketPageView from '@/components/market-pages/MarketPageView'
import type { MarketPageType } from '@/lib/market-pages/config'
import { marketPageMetadata, marketPageStaticParams, resolveMarketPage } from '@/lib/market-pages/routes'
import { getDictionary } from './dictionaries'

type Params = Promise<{ lang: string; slug: string }>

export function marketPageRoute(type: MarketPageType) {
  return {
    generateStaticParams: () => marketPageStaticParams(type),

    async generateMetadata({ params }: { params: Params }): Promise<Metadata> {
      const { lang, slug } = await params
      const page = resolveMarketPage(lang, type, slug)
      return page ? marketPageMetadata(page) : {}
    },

    async Page({ params }: { params: Params }) {
      const { lang, slug } = await params
      const page = resolveMarketPage(lang, type, slug)
      if (!page) notFound()
      const dict = await getDictionary(page.locale)
      return <MarketPageView page={page} buyLabel={dict.buy_button} faqTitle={dict.faq_title} />
    },
  }
}
