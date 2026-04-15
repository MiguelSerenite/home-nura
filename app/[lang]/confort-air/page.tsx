/**
 * Phase BB — /confort-air silo hub (noindexed until depth gate).
 * Thin shell delegating to SiloHub; see components/SiloHub.tsx.
 */

import type { Metadata } from 'next'
import SiloHub from '@/components/SiloHub'
import { buildPageMetadata } from '@/lib/seo'
import { LANGUAGES, isValidLang, type Lang } from '@/lib/i18n'
import { getMetaSilo } from '@/lib/catalog'

const SILO_SLUG = 'confort-air' as const

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
    index: silo.indexable,
  })
}

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }))
}

export default async function ConfortAirPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return <SiloHub siloSlug={SILO_SLUG} lang={lang} />
}
