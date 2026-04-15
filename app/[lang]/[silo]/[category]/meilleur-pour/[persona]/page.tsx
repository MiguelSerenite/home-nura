/**
 * Phase HH — Moteur 4: "meilleur X pour Y" best-for pages.
 *
 * The conversion layer of the war machine. Every URL answers the
 * exact long-tail query "best [category] for [persona]" — direct
 * purchase intent — so this route is the highest-value addition of
 * Period 3.
 *
 * Routing: /[lang]/[silo]/[category]/meilleur-pour/[persona]
 * The segment "meilleur-pour" stays in French across all locales —
 * URL-immutable once shipped (same convention as /methodologie,
 * /guides/acheteur, /guides/probleme).
 *
 * Coverage rules (enforced in both generateStaticParams and the
 * route handler):
 *   - silo must be a known MetaSiloSlug
 *   - category must resolve and belong to that silo
 *   - category.indexable must be true (never prerender best-for for
 *     a category that can't even surface in search)
 *   - persona must resolve and its applicableSilos must include
 *     category.metaSilo (stops "best airfryer for RGPD strict" —
 *     nobody searches for that)
 *
 * The route coexists with the flagship cuisine-connectee subtree:
 * `/[lang]/cuisine-connectee/[category]/page.tsx` only matches
 * 3 segments after /[lang], so a 5-segment URL like
 * /fr/cuisine-connectee/airfryers/meilleur-pour/famille-4-personnes
 * falls through to this dynamic route cleanly.
 *
 * Each page ships with:
 *   - Kicker + H1 that contains both category and persona labels
 *   - Intro + axis-specific criteria list (household / budget /
 *     usage / constraint) — content engine in
 *     lib/catalog/content.ts (Phase HH)
 *   - Cross-links to sibling "best for" pages in the same category
 *     (top 6 other applicable personas) — internal link equity
 *     within the category cluster
 *   - Back-link to the category hub (reinforces internal graph)
 *   - 3-entry FAQ referencing European methodology (FAQPage JSON-LD
 *     via FaqSection)
 *   - Methodology CTA
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { getNonce } from '@/lib/nonce'
import {
  buildPageMetadata,
  buildBreadcrumbListSchema,
  buildBestForItemListSchema,
} from '@/lib/seo'
import { SectionHero, SiteFooter } from '@/components/ui'
import FaqSection from '@/components/FaqSection'
import {
  getCategory,
  getIndexableCategories,
  getMetaSilo,
  getBuyerPersona,
  getPersonasForSilo,
  getBestForHero,
  getBestForFaq,
  type MetaSiloSlug,
} from '@/lib/catalog'
import { LANGUAGES, isValidLang, type Lang } from '@/lib/i18n'

const KNOWN_SILOS: readonly MetaSiloSlug[] = [
  'cuisine-connectee',
  'energie-domotique',
  'securite-maison',
  'confort-air',
  'entretien-maison',
  'outdoor-connecte',
] as const

function isKnownSilo(slug: string): slug is MetaSiloSlug {
  return (KNOWN_SILOS as readonly string[]).includes(slug)
}

interface BestForUi {
  home: string
  guides: string
  otherPersonasTitle: string
  backToCategoryLabel: string
  faqTitle: string
  methodologyCta: string
  primaryCta: string
}

const uiStrings: Record<Lang, BestForUi> = {
  fr: {
    home: 'Accueil',
    guides: 'Sélections',
    otherPersonasTitle: 'Autres profils pertinents pour cette catégorie',
    backToCategoryLabel: 'Retour à la catégorie',
    faqTitle: 'Questions fréquentes',
    methodologyCta: 'Lire notre méthodologie',
    primaryCta: 'Voir les produits recommandés',
  },
  en: {
    home: 'Home',
    guides: 'Picks',
    otherPersonasTitle: 'Other relevant profiles in this category',
    backToCategoryLabel: 'Back to category',
    faqTitle: 'Frequently asked questions',
    methodologyCta: 'Read our methodology',
    primaryCta: 'See recommended products',
  },
  de: {
    home: 'Start',
    guides: 'Auswahl',
    otherPersonasTitle: 'Weitere relevante Profile in dieser Kategorie',
    backToCategoryLabel: 'Zurück zur Kategorie',
    faqTitle: 'Häufige Fragen',
    methodologyCta: 'Zur Methodik',
    primaryCta: 'Empfohlene Produkte ansehen',
  },
  es: {
    home: 'Inicio',
    guides: 'Selecciones',
    otherPersonasTitle: 'Otros perfiles relevantes en esta categoría',
    backToCategoryLabel: 'Volver a la categoría',
    faqTitle: 'Preguntas frecuentes',
    methodologyCta: 'Leer nuestra metodología',
    primaryCta: 'Ver productos recomendados',
  },
  it: {
    home: 'Home',
    guides: 'Selezioni',
    otherPersonasTitle: 'Altri profili rilevanti in questa categoria',
    backToCategoryLabel: 'Torna alla categoria',
    faqTitle: 'Domande frequenti',
    methodologyCta: 'Leggi la nostra metodologia',
    primaryCta: 'Vedi i prodotti consigliati',
  },
  nl: {
    home: 'Home',
    guides: 'Selecties',
    otherPersonasTitle: 'Andere relevante profielen in deze categorie',
    backToCategoryLabel: 'Terug naar categorie',
    faqTitle: 'Veelgestelde vragen',
    methodologyCta: 'Lees onze methodologie',
    primaryCta: 'Aanbevolen producten bekijken',
  },
}

export async function generateStaticParams() {
  // Only prerender (indexable category × applicable persona) pairs.
  // This is the hard filter that stops us shipping nonsense URLs
  // like /securite-maison/alarmes/meilleur-pour/famille-vegane.
  const params: Array<{
    lang: string
    silo: string
    category: string
    persona: string
  }> = []

  for (const cat of getIndexableCategories()) {
    const personas = getPersonasForSilo(cat.metaSilo)
    for (const persona of personas) {
      for (const lang of LANGUAGES) {
        params.push({
          lang,
          silo: cat.metaSilo,
          category: cat.slug,
          persona: persona.slug,
        })
      }
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    lang: string
    silo: string
    category: string
    persona: string
  }>
}): Promise<Metadata> {
  const { lang, silo, category, persona } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  if (!isKnownSilo(silo)) return {}

  const cat = getCategory(category)
  const siloMeta = getMetaSilo(silo)
  const p = getBuyerPersona(persona)
  if (!cat || !siloMeta || !p) return {}
  if (cat.metaSilo !== silo) return {}
  if (!p.applicableSilos.includes(silo)) return {}

  const hero = getBestForHero(safeLang, cat, p, siloMeta.title[safeLang])
  return buildPageMetadata({
    lang: safeLang,
    path: `/${silo}/${cat.slug}/meilleur-pour/${p.slug}`,
    title: `${hero.title} | Home Nura`,
    description: hero.intro,
    index: cat.indexable,
  })
}

export default async function BestForPage({
  params,
}: {
  params: Promise<{
    lang: string
    silo: string
    category: string
    persona: string
  }>
}) {
  const { lang, silo, category, persona } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  if (!isKnownSilo(silo)) notFound()

  const cat = getCategory(category)
  const siloMeta = getMetaSilo(silo)
  const p = getBuyerPersona(persona)
  if (!cat || !siloMeta || !p) notFound()
  if (cat.metaSilo !== silo) notFound()
  if (!cat.indexable) notFound()
  if (!p.applicableSilos.includes(silo)) notFound()

  const hero = getBestForHero(safeLang, cat, p, siloMeta.title[safeLang])
  const faqEntries = getBestForFaq(safeLang, cat, p)
  const ui = uiStrings[safeLang]
  const nonce = await getNonce()

  // Other personas relevant to this category — top 6 excluding the
  // current one. Keeps the cluster internally linked so every
  // best-for page sits inside the link graph on day 1.
  const otherPersonas = getPersonasForSilo(silo)
    .filter((x) => x.slug !== p.slug)
    .slice(0, 6)

  const categoryHref = `/${safeLang}/${silo}/${cat.slug}`

  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: ui.home, path: '' },
    { name: siloMeta.title[safeLang], path: `/${silo}` },
    { name: cat.title[safeLang], path: `/${silo}/${cat.slug}` },
    {
      name: hero.title,
      path: `/${silo}/${cat.slug}/meilleur-pour/${p.slug}`,
    },
  ])

  // Phase NN: ItemList schema — declare the ranked criteria as
  // structured data so Google / LLM crawlers can attribute citations
  // to individual selection factors (capacity, annual energy cost,
  // repairability, …) rather than treating the page as one opaque
  // blob. Each best-for URL ships a 5-item ranking.
  const itemListSchema = buildBestForItemListSchema({
    lang: safeLang,
    path: `/${silo}/${cat.slug}/meilleur-pour/${p.slug}`,
    name: hero.title,
    description: hero.intro,
    criteria: hero.criteria,
  })

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
            <li>
              <Link
                href={`/${safeLang}/${silo}`}
                className="hover:text-blue-600 transition-colors"
              >
                {siloMeta.title[safeLang]}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={categoryHref}
                className="hover:text-blue-600 transition-colors"
              >
                {cat.title[safeLang]}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-600 font-medium">
              {p.label[safeLang]}
            </li>
          </ol>
        </nav>

        <SectionHero
          kicker={hero.kicker}
          title={hero.title}
          subtitle={hero.subtitle}
          intro={hero.intro}
        />

        {/* Criteria list — axis-specific */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
            {hero.criteriaHeading}
          </h2>
          <ul className="space-y-3">
            {hero.criteria.map((c, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600"
                >
                  {i + 1}
                </span>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  {c}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href={categoryHref}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold transition-colors"
            >
              <span>{ui.primaryCta}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* Other applicable personas — internal link cluster */}
        {otherPersonas.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
              {ui.otherPersonasTitle}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherPersonas.map((op) => (
                <li key={op.slug}>
                  <Link
                    href={`/${safeLang}/${silo}/${cat.slug}/meilleur-pour/${op.slug}`}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:border-blue-200 hover:shadow-sm"
                  >
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-1">
                      {cat.title[safeLang]}
                    </span>
                    <span className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {op.label[safeLang]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Back to category — reinforces internal link graph */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <Link
            href={categoryHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <span aria-hidden="true">←</span>
            <span>
              {ui.backToCategoryLabel} — {cat.title[safeLang]}
            </span>
          </Link>
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
