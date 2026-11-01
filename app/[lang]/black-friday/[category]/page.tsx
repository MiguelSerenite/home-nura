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
  blackFridayLocales,
  blackFridayPath,
  getBlackFridayLinks,
  getBlackFridayPage,
  getBlackFridayPages,
  getBlackFridayPicks,
  getListedBlackFridayPages,
} from '@/lib/black-friday'
import { UI } from '@/lib/black-friday/copy/ui'
import { LANGUAGES, isValidLang } from '@/lib/i18n'
import { buildBreadcrumbListSchema, buildPageMetadata } from '@/lib/seo'

type Params = Promise<{ lang: string; category: string }>

/** A page exists only in the locales that have its copy; any other locale 404s. */
export const dynamicParams = false

export async function generateStaticParams() {
  return LANGUAGES.flatMap((lang) => getBlackFridayPages(lang).map((p) => ({ lang, category: p.category.slug })))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, category: slug } = await params
  const page = isValidLang(lang) ? getBlackFridayPage(slug, lang) : undefined
  if (!isValidLang(lang) || !page) return {}
  return buildPageMetadata({
    lang,
    path: page.path,
    title: `${page.copy.metaTitle} | Home Nura`,
    description: page.copy.metaDescription,
    locales: blackFridayLocales(page.category),
  })
}

export default async function BlackFridayCategoryPage({ params }: { params: Params }) {
  const { lang, category: slug } = await params
  const page = isValidLang(lang) ? getBlackFridayPage(slug, lang) : undefined
  if (!isValidLang(lang) || !page) notFound()

  const { category, copy } = page
  const ui = UI[lang]
  const picks = getBlackFridayPicks(category, lang)
  const links = getBlackFridayLinks(category, lang)
  // The market's own list (a page left out of it still links to all of it).
  const others = getListedBlackFridayPages(lang).filter((p) => p.category !== category)

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
            {others.map((p) => (
              <li key={p.category.slug}>
                <Link
                  href={`/${lang}${p.path}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-600 hover:text-brand-700"
                >
                  {p.copy.name}
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
