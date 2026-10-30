/**
 * /[lang]/black-friday/[category] — "Black Friday 2026: the X worth
 * watching". Picks come from the site's existing verdicts (same models,
 * same reasons, same Amazon targets), then links to the full hub and
 * guides, Amazon's event page and a short FAQ. No prices, no urgency.
 *
 * Routing: the static "black-friday" segment wins over /[lang]/[silo].
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import { SectionHero, SiteFooter } from '@/components/ui'
import AmazonEventBlock from '@/components/black-friday/AmazonEventBlock'
import BlackFridayBreadcrumb from '@/components/black-friday/Breadcrumb'
import PickList from '@/components/black-friday/PickList'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import {
  BLACK_FRIDAY_CATEGORIES,
  blackFridayPath,
  getBlackFridayCategory,
  getBlackFridayLinks,
  getBlackFridayPicks,
} from '@/lib/black-friday'
import { UI } from '@/lib/black-friday/copy/ui'
import { LANGUAGES, isValidLang } from '@/lib/i18n'
import { buildBreadcrumbListSchema, buildPageMetadata } from '@/lib/seo'

type Params = Promise<{ lang: string; category: string }>

export async function generateStaticParams() {
  return LANGUAGES.flatMap((lang) => BLACK_FRIDAY_CATEGORIES.map((c) => ({ lang, category: c.slug })))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, category: slug } = await params
  const category = getBlackFridayCategory(slug)
  if (!isValidLang(lang) || !category) return {}
  const copy = category.copy[lang]
  return buildPageMetadata({
    lang,
    path: blackFridayPath(category.slug),
    title: `${copy.metaTitle} | Home Nura`,
    description: copy.metaDescription,
  })
}

export default async function BlackFridayCategoryPage({ params }: { params: Params }) {
  const { lang, category: slug } = await params
  const category = getBlackFridayCategory(slug)
  if (!isValidLang(lang) || !category) notFound()

  const copy = category.copy[lang]
  const ui = UI[lang]
  const picks = getBlackFridayPicks(category, lang)
  const links = getBlackFridayLinks(category, lang)
  const others = BLACK_FRIDAY_CATEGORIES.filter((c) => c.slug !== category.slug)

  const breadcrumbSchema = buildBreadcrumbListSchema(lang, [
    { name: ui.home, path: '' },
    { name: ui.hubLabel, path: blackFridayPath() },
    { name: copy.name, path: blackFridayPath(category.slug) },
  ])

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar currentLang={lang} />

      <main id="main">
        <BlackFridayBreadcrumb
          items={[
            { name: ui.home, href: `/${lang}` },
            { name: ui.hubLabel, href: `/${lang}${blackFridayPath()}` },
            { name: copy.name },
          ]}
        />

        <SectionHero title={copy.h1}>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">{copy.intro}</p>
          <AmazonDisclosure lang={lang} className="mx-auto mt-4 max-w-2xl text-xs text-slate-500" />
        </SectionHero>

        <PickList picks={picks} lang={lang} />

        <section aria-labelledby="bf-more" className="max-w-5xl mx-auto px-4 md:px-6 pb-12">
          <h2 id="bf-more" className="mb-6 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            {ui.moreTitle}
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:border-brand-200 hover:shadow-sm"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-700">
                    {link.kind === 'category' ? ui.kindCategory : ui.kindGuide}
                  </span>
                  <span className="mt-1 text-base font-semibold text-slate-900 transition-colors group-hover:text-brand-700">
                    {link.title} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <AmazonEventBlock lang={lang} />

        <nav aria-labelledby="bf-others" className="max-w-5xl mx-auto px-4 md:px-6 pb-6">
          <h2 id="bf-others" className="mb-4 text-lg font-bold text-slate-900">{ui.otherCategories}</h2>
          <ul className="flex flex-wrap gap-2">
            {others.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${lang}${blackFridayPath(c.slug)}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-600 hover:text-brand-700"
                >
                  {c.copy[lang].name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`/${lang}${blackFridayPath()}`}
                className="inline-flex min-h-10 items-center rounded-full bg-slate-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
              >
                {ui.allCategories} →
              </Link>
            </li>
          </ul>
        </nav>

        <FaqSection faqs={[...copy.faq]} title={ui.faqTitle} />
      </main>

      <SiteFooter currentLang={lang} />
    </div>
  )
}
