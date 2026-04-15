/**
 * Phase AA — /energie-domotique silo hub.
 *
 * First non-flagship silo route to ship. It's rendered by the
 * shared SiloHub component and marked noindex until at least one
 * category underneath it clears the 12-page depth gate. Flipping
 * to index:true later is a two-line change here + setting
 * META_SILOS[energie-domotique].indexable = true.
 */

import type { Metadata } from 'next'
import SiloHub from '@/components/SiloHub'
import { buildPageMetadata } from '@/lib/seo'
import { LANGUAGES, isValidLang, type Lang } from '@/lib/i18n'
import { getMetaSilo } from '@/lib/catalog'

const SILO_SLUG = 'energie-domotique' as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const silo = getMetaSilo(SILO_SLUG)!
  return buildPageMetadata({
    lang: safeLang,
    path: `/${SILO_SLUG}`,
    title: `${silo.title[safeLang]} | Home Nura`,
    description: silo.description[safeLang],
    // Phase AA: hub exists but stays out of the index until the
    // underlying categories ship real content (Phase BB and on).
    index: silo.indexable,
  })
}

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }))
}

export default async function EnergieDomotiquePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return <SiloHub siloSlug={SILO_SLUG} lang={lang} />
}
