/**
 * A market's seasonal gift page (lib/gift-guides): gift ideas by catalog
 * category, each card linking the category hub, then a link to the Black
 * Friday hub and a short FAQ. No prices, no Amazon block: the cards lead to
 * the hubs, whose picks carry the Amazon links and the disclosure.
 */

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import { SectionHero, SiteFooter } from '@/components/ui'
import BlackFridayBreadcrumb from '@/components/black-friday/Breadcrumb'
import { blackFridayPath } from '@/lib/black-friday'
import { HUB_COPY } from '@/lib/black-friday/copy/hub'
import { UI } from '@/lib/black-friday/copy/ui'
import { giftGuideCards, giftGuidePath, type GiftGuide } from '@/lib/gift-guides'
import { buildBreadcrumbListSchema, buildClusterItemListSchema } from '@/lib/seo'

export default function GiftGuidePage({ guide }: { guide: GiftGuide }) {
  const { lang } = guide
  const ui = UI[lang]
  const path = giftGuidePath(guide)
  const cards = giftGuideCards(guide)

  const breadcrumbSchema = buildBreadcrumbListSchema(lang, [
    { name: ui.home, path: '' },
    { name: guide.label, path },
  ])
  const itemListSchema = buildClusterItemListSchema({
    lang,
    path,
    name: guide.h1,
    description: guide.metaDescription,
    items: cards.map((card) => ({ name: card.name, path: card.path })),
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
        <BlackFridayBreadcrumb items={[{ name: ui.home, href: `/${lang}` }, { name: guide.label }]} />

        <SectionHero title={guide.h1}>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">{guide.intro}</p>
        </SectionHero>

        <section aria-labelledby="gift-categories" className="max-w-6xl mx-auto px-4 md:px-6 pb-14">
          <h2 id="gift-categories" className="mb-6 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            {guide.categoriesTitle}
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li key={card.category}>
                <Link
                  href={`/${lang}${card.path}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-brand-700">
                    {card.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{card.line}</p>
                  <span className="mt-4 text-sm font-semibold text-brand-700">{ui.seeSelection} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-label={ui.hubLabel} className="max-w-5xl mx-auto px-4 md:px-6 pb-12">
          <Link
            href={`/${lang}${blackFridayPath()}`}
            className="group block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-brand-200"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700">{ui.hubLabel}</span>
            <span className="mt-1 block text-base font-semibold text-slate-900 transition-colors group-hover:text-brand-700">
              {HUB_COPY[lang].h1} →
            </span>
          </Link>
        </nav>

        <FaqSection faqs={[...guide.faq]} title={ui.faqTitle} />
      </main>

      <SiteFooter currentLang={lang} />
    </div>
  )
}
