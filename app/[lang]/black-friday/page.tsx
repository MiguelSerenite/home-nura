/**
 * /[lang]/black-friday — evergreen Black Friday hub (year in the copy, not
 * in the URL). Links the category pages, explains how to judge a deal and
 * points to Amazon's event page (plus the Prime trial on /fr). No prices.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import { SectionHero, SiteFooter } from '@/components/ui'
import AmazonEventBlock from '@/components/black-friday/AmazonEventBlock'
import BlackFridayBreadcrumb from '@/components/black-friday/Breadcrumb'
import { getDictionary } from '../dictionaries'
import { BLACK_FRIDAY_CATEGORIES, blackFridayPath } from '@/lib/black-friday'
import { HUB_COPY } from '@/lib/black-friday/copy/hub'
import { UI } from '@/lib/black-friday/copy/ui'
import { LANGUAGES, isValidLang } from '@/lib/i18n'
import { buildBreadcrumbListSchema, buildClusterItemListSchema, buildPageMetadata } from '@/lib/seo'

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLang(lang)) return {}
  const copy = HUB_COPY[lang]
  return buildPageMetadata({
    lang,
    path: blackFridayPath(),
    title: `${copy.metaTitle} | Home Nura`,
    description: copy.metaDescription,
  })
}

export default async function BlackFridayHubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const copy = HUB_COPY[lang]
  const ui = UI[lang]
  const dict = await getDictionary(lang)

  const breadcrumbSchema = buildBreadcrumbListSchema(lang, [
    { name: ui.home, path: '' },
    { name: ui.hubLabel, path: blackFridayPath() },
  ])
  const itemListSchema = buildClusterItemListSchema({
    lang,
    path: blackFridayPath(),
    name: copy.h1,
    description: copy.metaDescription,
    items: BLACK_FRIDAY_CATEGORIES.map((c) => ({ name: c.copy[lang].h1, path: blackFridayPath(c.slug) })),
  })

  return (
    <div className="min-h-screen bg-white">
      {[breadcrumbSchema, itemListSchema].map((schema) => (
        <script
          key={schema['@type']}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar currentLang={lang} />

      <main id="main">
        <BlackFridayBreadcrumb items={[{ name: ui.home, href: `/${lang}` }, { name: ui.hubLabel }]} />

        <SectionHero title={copy.h1}>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">{copy.intro}</p>
          <p className="mx-auto mt-4 max-w-2xl text-xs text-slate-500">{dict.affiliate_disclaimer}</p>
        </SectionHero>

        <section aria-labelledby="bf-categories" className="max-w-6xl mx-auto px-4 md:px-6 pb-14">
          <h2 id="bf-categories" className="mb-6 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            {copy.categoriesTitle}
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BLACK_FRIDAY_CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${lang}${blackFridayPath(c.slug)}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-brand-700">
                    {c.copy[lang].name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.copy[lang].blurb}</p>
                  <span className="mt-4 text-sm font-semibold text-brand-700">{ui.seeSelection} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="bf-deal" className="max-w-5xl mx-auto px-4 md:px-6 pb-14">
          <h2 id="bf-deal" className="mb-6 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            {copy.dealTitle}
          </h2>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {copy.dealTips.map((tip, i) => (
              <li key={tip.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold tracking-widest text-brand-700">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">{tip.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{tip.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <AmazonEventBlock lang={lang} />

        <FaqSection faqs={[...copy.faq]} title={ui.faqTitle} />
      </main>

      <SiteFooter currentLang={lang} topContent={<p className="text-sm text-slate-500">{dict.affiliate_disclaimer}</p>} />
    </div>
  )
}
