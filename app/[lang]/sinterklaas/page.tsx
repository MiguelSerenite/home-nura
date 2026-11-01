/**
 * /nl/sinterklaas — Sinterklaas gift ideas for the home (pakjesavond,
 * 5 December), Dutch version only: every other locale is a 404.
 * Content: lib/gift-guides/copy/sinterklaas.ts.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import GiftGuidePage from '@/components/gift-guides/GiftGuidePage'
import { giftGuideMetadata, giftGuideStaticParams, resolveGiftGuide } from '@/lib/gift-guides/routes'

const SLUG = 'sinterklaas'

export const dynamicParams = false

export function generateStaticParams() {
  return giftGuideStaticParams(SLUG)
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const guide = resolveGiftGuide(SLUG, (await params).lang)
  return guide ? giftGuideMetadata(guide) : {}
}

export default async function SinterklaasPage({ params }: { params: Promise<{ lang: string }> }) {
  const guide = resolveGiftGuide(SLUG, (await params).lang)
  if (!guide) notFound()
  return <GiftGuidePage guide={guide} />
}
