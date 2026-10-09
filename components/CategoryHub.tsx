/**
 * Phase CC — generic catalog-driven category hub component.
 *
 * Renders any category from META_SILOS + CATEGORIES + the content
 * helpers in lib/catalog/content.ts. Consumed by Phase DD's generic
 * /[lang]/[silo]/[category] dynamic route so that every non-flagship
 * category can ship a real page without hand-written copy.
 *
 * The cuisine-connectee flagship keeps its bespoke route
 * (/[lang]/cuisine-connectee/[category]/page.tsx) because it has
 * real product listings wired up via smart-kitchen-products.ts.
 * Next.js static-segment precedence means the flagship route always
 * wins over the generic /[silo]/[category] one.
 *
 * Structure:
 *   - Breadcrumb: Home → {silo} → {category}
 *   - Hero derived from getCategoryHero()
 *   - Related categories grid (indexable siblings only)
 *   - FAQ block from getCategoryFaq() (emits FAQPage JSON-LD)
 *   - Methodology CTA (every page links the cornerstone)
 *
 * JSON-LD: BreadcrumbList via the Phase Y schema builder;
 * FaqSection emits its own FAQPage payload.
 */

import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildBreadcrumbListSchema, buildArticleSchema, SITE_LAST_UPDATED_ISO } from '@/lib/seo'
import QuickAnswer from '@/components/QuickAnswer'
import { getCategoryGuides } from '@/lib/catalog/category-guides'
import { SectionHero, SiteFooter } from '@/components/ui'
import FaqSection from '@/components/FaqSection'
import {
  getMetaSilo,
  getCategory,
  getCategoriesBySilo,
  getCategoryHero,
  getCategoryFaq,
} from '@/lib/catalog'
import type { MetaSiloSlug } from '@/lib/catalog'
import { isValidLang, type Lang } from '@/lib/i18n'
import { ChevronRight } from 'lucide-react'

interface CategoryHubUi {
  home: string
  relatedTitle: string
  methodologyCta: string
  faqTitle: string
  noSiblings: string
  /** Verdict box kicker + heading, e.g. "Notre sélection" / "Quel X choisir ?" */
  picksKicker: string
  picksQuestion: (categoryTitle: string) => string
  guidesTitle: string
  readGuide: string
}

const uiStrings: Record<Lang, CategoryHubUi> = {
  fr: {
    home: 'Accueil',
    relatedTitle: 'Autres catégories du même silo',
    methodologyCta: 'Lire notre méthodologie',
    faqTitle: 'Questions fréquentes',
    noSiblings: 'Les catégories voisines arrivent bientôt.',
    picksKicker: 'Notre sélection',
    picksQuestion: (t) => `${t} : lesquels choisir en 2026 ?`,
    guidesTitle: "Nos guides d'achat",
    readGuide: 'Lire le guide',
  },
  en: {
    home: 'Home',
    relatedTitle: 'Other categories in the same silo',
    methodologyCta: 'Read our methodology',
    faqTitle: 'Frequently asked questions',
    noSiblings: 'Sibling categories are coming soon.',
    picksKicker: 'Our picks',
    picksQuestion: (t) => `${t}: which to buy in 2026?`,
    guidesTitle: 'Our buying guides',
    readGuide: 'Read the guide',
  },
  de: {
    home: 'Start',
    relatedTitle: 'Weitere Kategorien im selben Silo',
    methodologyCta: 'Zur Methodik',
    faqTitle: 'Häufige Fragen',
    noSiblings: 'Weitere Kategorien folgen bald.',
    picksKicker: 'Unsere Empfehlungen',
    picksQuestion: (t) => `${t}: welche 2026 kaufen?`,
    guidesTitle: 'Unsere Kaufratgeber',
    readGuide: 'Ratgeber lesen',
  },
  es: {
    home: 'Inicio',
    relatedTitle: 'Otras categorías del mismo silo',
    methodologyCta: 'Leer nuestra metodología',
    faqTitle: 'Preguntas frecuentes',
    noSiblings: 'Las categorías vecinas llegan pronto.',
    picksKicker: 'Nuestra selección',
    picksQuestion: (t) => `${t}: ¿cuáles elegir en 2026?`,
    guidesTitle: 'Nuestras guías de compra',
    readGuide: 'Leer la guía',
  },
  it: {
    home: 'Home',
    relatedTitle: 'Altre categorie dello stesso silo',
    methodologyCta: 'Leggi la nostra metodologia',
    faqTitle: 'Domande frequenti',
    noSiblings: 'Le categorie vicine arrivano presto.',
    picksKicker: 'La nostra selezione',
    picksQuestion: (t) => `${t}: quali scegliere nel 2026?`,
    guidesTitle: "Le nostre guide all'acquisto",
    readGuide: 'Leggi la guida',
  },
  nl: {
    home: 'Home',
    relatedTitle: 'Andere categorieën in hetzelfde silo',
    methodologyCta: 'Lees onze methodologie',
    faqTitle: 'Veelgestelde vragen',
    noSiblings: 'Naastgelegen categorieën komen binnenkort.',
    picksKicker: 'Onze selectie',
    picksQuestion: (t) => `${t}: welke kies je in 2026?`,
    guidesTitle: 'Onze koopgidsen',
    readGuide: 'Lees de gids',
  },
}

interface CategoryHubProps {
  siloSlug: MetaSiloSlug
  categorySlug: string
  lang: string
}

export default async function CategoryHub({
  siloSlug,
  categorySlug,
  lang,
}: CategoryHubProps) {
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const silo = getMetaSilo(siloSlug)
  const category = getCategory(categorySlug)
  if (!silo || !category || category.metaSilo !== siloSlug) {
    notFound()
  }

  const hero = getCategoryHero(safeLang, category)
  const faqEntries = getCategoryFaq(safeLang, category)
  const ui = uiStrings[safeLang]
  const siloTitle = silo.title[safeLang]
  const categoryTitle = category.title[safeLang]

  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: ui.home, path: '' },
    { name: siloTitle, path: `/${silo.slug}` },
    { name: categoryTitle, path: `/${silo.slug}/${category.slug}` },
  ])

  const related = getCategoriesBySilo(siloSlug).filter(
    (c) => c.slug !== category.slug && c.indexable
  )

  // Verdict + guides from the blog: gives the hub real buying content
  // (it had none) and links it to the articles that rank.
  const { picks, articles } = getCategoryGuides(category.slug, safeLang)

  // Phase JJJ: Article JSON-LD for Moteur 1 category hub pages.
  // Completes the Article schema coverage across all 4 moteurs.
  // Only indexable categories emit the payload — no Article on
  // stub pages that aren't meant for search engines.
  const articleSchema = category.indexable
    ? buildArticleSchema({
        lang: safeLang,
        path: `/${silo.slug}/${category.slug}`,
        title: hero.title,
        description: hero.subtitle,
        image: '/og-image.png',
        imageAlt: hero.title,
        datePublished: '2026-02-01',
        dateModified: SITE_LAST_UPDATED_ISO,
        articleType: 'Article',
        articleSection: siloTitle,
      })
    : null

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}

      <Navbar currentLang={safeLang} />

      <main id="main">
        {/* Breadcrumb */}
        <nav
          className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link
                href={`/${safeLang}`}
                className="hover:text-brand-600 transition-colors"
              >
                {ui.home}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
            <li>
              <Link
                href={`/${safeLang}/${silo.slug}`}
                className="hover:text-brand-600 transition-colors"
              >
                {siloTitle}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
            <li className="text-slate-600 font-medium">{categoryTitle}</li>
          </ol>
        </nav>

        <SectionHero
          kicker={hero.kicker}
          title={hero.title}
          subtitle={hero.subtitle}
          intro={hero.intro}
        />

        {picks.length > 0 && (
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <QuickAnswer
              question={ui.picksQuestion(categoryTitle)}
              picks={picks}
              lang={safeLang}
              kicker={ui.picksKicker}
              location="category_picks"
            />
          </div>
        )}

        {articles.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
              {ui.guidesTitle}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={article.href}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:border-brand-200 hover:shadow-sm"
                  >
                    <span className="text-base font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                      {article.title}
                    </span>
                    <span className="mt-1 text-sm text-slate-600 leading-relaxed line-clamp-2">{article.excerpt}</span>
                    <span className="mt-2 text-sm font-semibold text-brand-700">{ui.readGuide} →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related categories */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
            {ui.relatedTitle}
          </h2>
          {related.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${safeLang}/${silo.slug}/${cat.slug}`}
                  className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-1 hover:border-brand-200"
                >
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-brand-700 transition-colors">
                    {cat.title[safeLang]}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {cat.description[safeLang]}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">{ui.noSiblings}</p>
          )}
        </section>

        {/* FAQ — derived from catalog, emits FAQPage JSON-LD via FaqSection */}
        <FaqSection
          faqs={faqEntries}
          title={ui.faqTitle}
        />

        {/* Methodology CTA — every category page links the cornerstone */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 md:p-10 text-center">
            <Link
              href={`/${safeLang}/methodologie`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 text-sm font-semibold transition-colors"
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
