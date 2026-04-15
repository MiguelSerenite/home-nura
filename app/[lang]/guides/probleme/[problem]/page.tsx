/**
 * Phase FF — Moteur 3: troubleshooting pages.
 *
 * Generates one page per (Problem × Lang) — today 6 problems × 6
 * locales = 36 pages — backed by the problem content helpers from
 * Phase FF (getProblemContent, getProblemFaq).
 *
 * Each page:
 *   - Hero with problem query as H1 (the exact long-tail search)
 *   - Severity badge (minor / moderate / critical) with localized label
 *   - Severity-driven diagnosis + quick-fix block
 *   - Back-link to the parent category (cross-link back into real
 *     indexable content so every troubleshooting page sits inside the
 *     internal-link graph)
 *   - Derived FAQ (3 entries referencing EU Directive 2019/771 legal
 *     conformity guarantee, emits FAQPage JSON-LD via FaqSection)
 *   - Methodology CTA
 *
 * Routing: /[lang]/guides/probleme/[problem]. The segment "probleme"
 * stays in French across all locales — URL-immutable once shipped
 * (same convention as /methodologie and /guides/acheteur).
 *
 * Guard rails:
 *   - problem slug must resolve via getProblem
 *   - parent category must exist and be indexable (otherwise 404 —
 *     no dangling problem pages pointing to dead categories)
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
  PROBLEMS,
  getProblem,
  getCategory,
  getMetaSilo,
  getProblemContent,
  getProblemFaq,
} from '@/lib/catalog'
import { LANGUAGES, isValidLang, type Lang } from '@/lib/i18n'

interface ProblemUi {
  home: string
  guides: string
  troubleshooting: string
  diagnosisTitle: string
  quickFixTitle: string
  faqTitle: string
  methodologyCta: string
}

const uiStrings: Record<Lang, ProblemUi> = {
  fr: {
    home: 'Accueil',
    guides: 'Guides',
    troubleshooting: 'Dépannage',
    diagnosisTitle: 'Diagnostic',
    quickFixTitle: 'Procédure recommandée',
    faqTitle: 'Questions fréquentes',
    methodologyCta: 'Lire notre méthodologie',
  },
  en: {
    home: 'Home',
    guides: 'Guides',
    troubleshooting: 'Troubleshooting',
    diagnosisTitle: 'Diagnosis',
    quickFixTitle: 'Recommended procedure',
    faqTitle: 'Frequently asked questions',
    methodologyCta: 'Read our methodology',
  },
  de: {
    home: 'Start',
    guides: 'Ratgeber',
    troubleshooting: 'Fehlerbehebung',
    diagnosisTitle: 'Diagnose',
    quickFixTitle: 'Empfohlene Vorgehensweise',
    faqTitle: 'Häufige Fragen',
    methodologyCta: 'Zur Methodik',
  },
  es: {
    home: 'Inicio',
    guides: 'Guías',
    troubleshooting: 'Solución de problemas',
    diagnosisTitle: 'Diagnóstico',
    quickFixTitle: 'Procedimiento recomendado',
    faqTitle: 'Preguntas frecuentes',
    methodologyCta: 'Leer nuestra metodología',
  },
  it: {
    home: 'Home',
    guides: 'Guide',
    troubleshooting: 'Risoluzione problemi',
    diagnosisTitle: 'Diagnosi',
    quickFixTitle: 'Procedura consigliata',
    faqTitle: 'Domande frequenti',
    methodologyCta: 'Leggi la nostra metodologia',
  },
  nl: {
    home: 'Home',
    guides: 'Gidsen',
    troubleshooting: 'Probleemoplossing',
    diagnosisTitle: 'Diagnose',
    quickFixTitle: 'Aanbevolen procedure',
    faqTitle: 'Veelgestelde vragen',
    methodologyCta: 'Lees onze methodologie',
  },
}

const severityStyles: Record<'minor' | 'moderate' | 'critical', string> = {
  minor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  moderate: 'bg-amber-50 text-amber-700 border-amber-200',
  critical: 'bg-red-50 text-red-700 border-red-200',
}

export async function generateStaticParams() {
  return PROBLEMS.flatMap((p) =>
    LANGUAGES.map((lang) => ({ lang, problem: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; problem: string }>
}): Promise<Metadata> {
  const { lang, problem } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const prob = getProblem(problem)
  if (!prob) return {}
  const category = getCategory(prob.categorySlug)
  if (!category) return {}
  const content = getProblemContent(safeLang, prob, category)
  return buildPageMetadata({
    lang: safeLang,
    path: `/guides/probleme/${prob.slug}`,
    title: `${content.title} | Home Nura`,
    description: content.diagnosis,
  })
}

export default async function ProblemGuidePage({
  params,
}: {
  params: Promise<{ lang: string; problem: string }>
}) {
  const { lang, problem } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const prob = getProblem(problem)
  if (!prob) notFound()

  const category = getCategory(prob.categorySlug)
  if (!category) notFound()

  const silo = getMetaSilo(category.metaSilo)
  if (!silo) notFound()

  const content = getProblemContent(safeLang, prob, category)
  const faqEntries = getProblemFaq(safeLang, category)
  const ui = uiStrings[safeLang]
  const nonce = await getNonce()

  const categoryHref = `/${safeLang}/${silo.slug}/${category.slug}`

  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: ui.home, path: '' },
    { name: ui.guides, path: '/guides' },
    { name: ui.troubleshooting, path: '/guides/probleme' },
    { name: content.title, path: `/guides/probleme/${prob.slug}` },
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
            <li className="text-slate-600">{ui.troubleshooting}</li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-600 font-medium">{category.title[safeLang]}</li>
          </ol>
        </nav>

        <SectionHero
          kicker={content.kicker}
          title={content.title}
          subtitle={content.subtitle}
        />

        {/* Severity badge */}
        <section className="max-w-3xl mx-auto px-6 pb-6">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide ${severityStyles[prob.severity]}`}
          >
            {content.severityLabel}
          </span>
        </section>

        {/* Diagnosis */}
        <section className="max-w-3xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            {ui.diagnosisTitle}
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            {content.diagnosis}
          </p>
        </section>

        {/* Quick fix / procedure */}
        <section className="max-w-3xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            {ui.quickFixTitle}
          </h2>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <p className="text-base text-slate-800 leading-relaxed whitespace-pre-line">
              {content.quickFix}
            </p>
            <div className="mt-6">
              <Link
                href={categoryHref}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold transition-colors"
              >
                <span>{content.fallbackCta}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Back to category — reinforces internal link graph */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <Link
            href={categoryHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <span aria-hidden="true">←</span>
            <span>
              {content.backToCategoryLabel} — {category.title[safeLang]}
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
