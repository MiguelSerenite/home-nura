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
import { getNonce } from '@/lib/nonce'
import { buildBreadcrumbListSchema } from '@/lib/seo'
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

interface CategoryHubUi {
  home: string
  relatedTitle: string
  methodologyCta: string
  faqTitle: string
  noSiblings: string
}

const uiStrings: Record<Lang, CategoryHubUi> = {
  fr: {
    home: 'Accueil',
    relatedTitle: 'Autres catégories du même silo',
    methodologyCta: 'Lire notre méthodologie',
    faqTitle: 'Questions fréquentes',
    noSiblings: 'Les catégories voisines arrivent bientôt.',
  },
  en: {
    home: 'Home',
    relatedTitle: 'Other categories in the same silo',
    methodologyCta: 'Read our methodology',
    faqTitle: 'Frequently asked questions',
    noSiblings: 'Sibling categories are coming soon.',
  },
  de: {
    home: 'Start',
    relatedTitle: 'Weitere Kategorien im selben Silo',
    methodologyCta: 'Zur Methodik',
    faqTitle: 'Häufige Fragen',
    noSiblings: 'Weitere Kategorien folgen bald.',
  },
  es: {
    home: 'Inicio',
    relatedTitle: 'Otras categorías del mismo silo',
    methodologyCta: 'Leer nuestra metodología',
    faqTitle: 'Preguntas frecuentes',
    noSiblings: 'Las categorías vecinas llegan pronto.',
  },
  it: {
    home: 'Home',
    relatedTitle: 'Altre categorie dello stesso silo',
    methodologyCta: 'Leggi la nostra metodologia',
    faqTitle: 'Domande frequenti',
    noSiblings: 'Le categorie vicine arrivano presto.',
  },
  nl: {
    home: 'Home',
    relatedTitle: 'Andere categorieën in hetzelfde silo',
    methodologyCta: 'Lees onze methodologie',
    faqTitle: 'Veelgestelde vragen',
    noSiblings: 'Naastgelegen categorieën komen binnenkort.',
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
  const nonce = await getNonce()

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
              <Link
                href={`/${safeLang}`}
                className="hover:text-blue-600 transition-colors"
              >
                {ui.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/${safeLang}/${silo.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {siloTitle}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-600 font-medium">{categoryTitle}</li>
          </ol>
        </nav>

        <SectionHero
          kicker={hero.kicker}
          title={hero.title}
          subtitle={hero.subtitle}
          intro={hero.intro}
        />

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
                  className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-1 hover:border-blue-200"
                >
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-700 transition-colors">
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
          nonce={nonce}
        />

        {/* Methodology CTA — every category page links the cornerstone */}
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
