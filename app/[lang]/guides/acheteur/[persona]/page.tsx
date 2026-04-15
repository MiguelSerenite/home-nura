/**
 * Phase EE — Moteur 2: persona buyer guides.
 *
 * Generates one page per (BuyerPersona × Lang) — 25 personas × 6
 * locales = 150 pages — backed by the persona content helpers from
 * Phase CC/EE (getPersonaGuideHero, getPersonaGuideFaq).
 *
 * Each guide:
 *   - Hero + axis-specific intro for the persona
 *   - Applicable-silos grid (only silos the persona is relevant to)
 *   - "Related indexable categories" list — cross-links back into
 *     real cuisine-connectee content so every guide sits inside
 *     the internal-link graph on day 1
 *   - Derived FAQ (3 persona-agnostic entries, emits FAQPage JSON-LD)
 *   - Methodology CTA
 *
 * Routing: /[lang]/guides/acheteur/[persona]. The segment
 * "acheteur" stays in French across all locales — the slug is
 * URL-immutable once shipped (same convention as /methodologie).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { getNonce } from '@/lib/nonce'
import {
  buildPageMetadata,
  buildBreadcrumbListSchema,
} from '@/lib/seo'
import { SectionHero, SiteFooter } from '@/components/ui'
import FaqSection from '@/components/FaqSection'
import {
  BUYER_PERSONAS,
  getBuyerPersona,
  getMetaSilo,
  getCategoriesBySilo,
  getPersonaGuideHero,
  getPersonaGuideFaq,
} from '@/lib/catalog'
import { LANGUAGES, isValidLang, type Lang } from '@/lib/i18n'

interface GuideUi {
  home: string
  guides: string
  applicableSilosTitle: string
  relatedCategoriesTitle: string
  noRelated: string
  methodologyCta: string
  faqTitle: string
}

const uiStrings: Record<Lang, GuideUi> = {
  fr: {
    home: 'Accueil',
    guides: 'Guides',
    applicableSilosTitle: 'Univers pertinents pour ce profil',
    relatedCategoriesTitle: 'Catégories à explorer maintenant',
    noRelated: 'Les catégories dédiées à ce profil arrivent bientôt.',
    methodologyCta: 'Lire notre méthodologie',
    faqTitle: 'Questions fréquentes',
  },
  en: {
    home: 'Home',
    guides: 'Guides',
    applicableSilosTitle: 'Relevant silos for this profile',
    relatedCategoriesTitle: 'Categories to explore now',
    noRelated: 'Dedicated categories for this profile are coming soon.',
    methodologyCta: 'Read our methodology',
    faqTitle: 'Frequently asked questions',
  },
  de: {
    home: 'Start',
    guides: 'Ratgeber',
    applicableSilosTitle: 'Relevante Silos für dieses Profil',
    relatedCategoriesTitle: 'Kategorien, die Sie jetzt erkunden sollten',
    noRelated: 'Eigene Kategorien für dieses Profil folgen bald.',
    methodologyCta: 'Zur Methodik',
    faqTitle: 'Häufige Fragen',
  },
  es: {
    home: 'Inicio',
    guides: 'Guías',
    applicableSilosTitle: 'Silos relevantes para este perfil',
    relatedCategoriesTitle: 'Categorías que explorar ahora',
    noRelated: 'Las categorías dedicadas a este perfil llegan pronto.',
    methodologyCta: 'Leer nuestra metodología',
    faqTitle: 'Preguntas frecuentes',
  },
  it: {
    home: 'Home',
    guides: 'Guide',
    applicableSilosTitle: 'Silo rilevanti per questo profilo',
    relatedCategoriesTitle: 'Categorie da esplorare ora',
    noRelated: 'Le categorie dedicate a questo profilo arrivano presto.',
    methodologyCta: 'Leggi la nostra metodologia',
    faqTitle: 'Domande frequenti',
  },
  nl: {
    home: 'Home',
    guides: 'Gidsen',
    applicableSilosTitle: 'Relevante silo\'s voor dit profiel',
    relatedCategoriesTitle: 'Categorieën om nu te verkennen',
    noRelated: 'Specifieke categorieën voor dit profiel komen binnenkort.',
    methodologyCta: 'Lees onze methodologie',
    faqTitle: 'Veelgestelde vragen',
  },
}

export async function generateStaticParams() {
  return BUYER_PERSONAS.flatMap((p) =>
    LANGUAGES.map((lang) => ({ lang, persona: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; persona: string }>
}): Promise<Metadata> {
  const { lang, persona } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const p = getBuyerPersona(persona)
  if (!p) return {}
  const hero = getPersonaGuideHero(safeLang, p)
  return buildPageMetadata({
    lang: safeLang,
    path: `/guides/acheteur/${p.slug}`,
    title: `${hero.title} | Home Nura`,
    description: hero.intro,
  })
}

export default async function PersonaGuidePage({
  params,
}: {
  params: Promise<{ lang: string; persona: string }>
}) {
  const { lang, persona } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const p = getBuyerPersona(persona)
  if (!p) notFound()

  const hero = getPersonaGuideHero(safeLang, p)
  const faqEntries = getPersonaGuideFaq(safeLang)
  const ui = uiStrings[safeLang]
  const nonce = await getNonce()

  // Applicable silos — full MetaSilo objects for card rendering
  const silos = p.applicableSilos
    .map((slug) => getMetaSilo(slug))
    .filter((s): s is NonNullable<ReturnType<typeof getMetaSilo>> => Boolean(s))

  // Related indexable categories — cross-links into real content
  const relatedCategories = silos
    .flatMap((s) => getCategoriesBySilo(s.slug).map((c) => ({ silo: s, category: c })))
    .filter(({ category }) => category.indexable)

  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: ui.home, path: '' },
    { name: ui.guides, path: '/guides' },
    { name: hero.title, path: `/guides/acheteur/${p.slug}` },
  ])

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar currentLang={safeLang} />

      <main id="main">
        {/* Breadcrumb */}
        <nav
          className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href={`/${safeLang}`} className="hover:text-blue-600 transition-colors">
                {ui.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-600">{ui.guides}</li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-600 font-medium">{p.label[safeLang]}</li>
          </ol>
        </nav>

        <SectionHero
          kicker={hero.kicker}
          title={hero.title}
          subtitle={hero.subtitle}
          intro={hero.intro}
        />

        {/* Applicable silos */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
            {ui.applicableSilosTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {silos.map((s) => (
              <Link
                key={s.slug}
                href={`/${safeLang}/${s.slug}`}
                className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-1 hover:border-blue-200"
              >
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-700 transition-colors">
                  {s.title[safeLang]}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {s.description[safeLang]}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Related indexable categories */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
            {ui.relatedCategoriesTitle}
          </h2>
          {relatedCategories.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedCategories.map(({ silo, category }) => (
                <li key={`${silo.slug}/${category.slug}`}>
                  <Link
                    href={
                      silo.slug === 'cuisine-connectee'
                        ? `/${safeLang}/${silo.slug}/${category.slug}`
                        : `/${safeLang}/${silo.slug}/${category.slug}`
                    }
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:border-blue-200 hover:shadow-sm"
                  >
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-1">
                      {silo.title[safeLang]}
                    </span>
                    <span className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {category.title[safeLang]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">{ui.noRelated}</p>
          )}
        </section>

        {/* FAQ (emits FAQPage JSON-LD) */}
        <FaqSection faqs={faqEntries} title={ui.faqTitle} nonce={nonce} />

        {/* Methodology CTA */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 text-center">
            <Link
              href={`/${safeLang}/methodologie`}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold transition-colors"
            >
              <span>{ui.methodologyCta}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter currentLang={safeLang} />
    </div>
  )
}
