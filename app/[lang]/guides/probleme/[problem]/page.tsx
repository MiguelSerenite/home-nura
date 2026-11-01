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
 *   - "Repair or replace?" box: the category buying guide's picks, linked
 *     to the reader's Amazon market (lib/amazon.ts; none on review-only
 *     categories)
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
import {
  buildPageMetadata,
  buildBreadcrumbListSchema,
  buildClusterItemListSchema,
  buildArticleSchema,
  SITE_LAST_UPDATED_ISO,
} from '@/lib/seo'
import { SectionHero, SiteFooter } from '@/components/ui'
import FaqSection from '@/components/FaqSection'
import QuickAnswer from '@/components/QuickAnswer'
import { getProblemGuide } from '@/lib/catalog/problem-guides'
import { getProblemBuyBox } from '@/lib/catalog/problem-buy-box'
import {
  PROBLEMS,
  getProblem,
  getProblemsByCategory,
  getCategory,
  getMetaSilo,
  getProblemContent,
  getProblemFaq,
  categoryPath,
} from '@/lib/catalog'
import { LANGUAGES, isValidLang, type Lang } from '@/lib/i18n'
import { ChevronRight } from 'lucide-react'

interface ProblemUi {
  home: string
  troubleshooting: string
  diagnosisTitle: string
  quickFixTitle: string
  causesTitle: string
  repairOrReplaceTitle: string
  /** Shown above the picks when the problem has no hand-written repair-or-replace advice. */
  repairOrReplaceFallback: string
  buyBoxKicker: string
  buyBoxQuestion: (categoryTitle: string) => string
  buyBoxGuideCta: string
  faqTitle: string
  methodologyCta: string
  /** Phase OO: sibling-problem cluster heading. */
  relatedProblemsTitle: string
  relatedProblemsSubtitle: string
}

const uiStrings: Record<Lang, ProblemUi> = {
  fr: {
    home: 'Accueil',
    troubleshooting: 'Dépannage',
    diagnosisTitle: 'Diagnostic',
    quickFixTitle: 'Procédure recommandée',
    causesTitle: 'Causes possibles',
    repairOrReplaceTitle: 'Réparer ou remplacer ?',
    repairOrReplaceFallback: 'Si la panne persiste après ces vérifications et que l\'appareil n\'est plus couvert par la garantie, comparez le devis de réparation au prix d\'un modèle neuf.',
    buyBoxKicker: 'Si vous remplacez',
    buyBoxQuestion: (t) => `${t} : les modèles retenus dans notre guide d'achat`,
    buyBoxGuideCta: 'Lire le guide d\'achat complet',
    faqTitle: 'Questions fréquentes',
    methodologyCta: 'Lire notre méthodologie',
    relatedProblemsTitle: 'Autres pannes fréquentes sur cette catégorie',
    relatedProblemsSubtitle: 'Ces autres incidents touchent le même type d\'appareil — diagnostic et procédure recommandée pour chacun.',
  },
  en: {
    home: 'Home',
    troubleshooting: 'Troubleshooting',
    diagnosisTitle: 'Diagnosis',
    quickFixTitle: 'Recommended procedure',
    causesTitle: 'Possible causes',
    repairOrReplaceTitle: 'Repair or replace?',
    repairOrReplaceFallback: 'If the fault persists after these checks and the appliance is no longer under warranty, compare the repair quote with the price of a new model.',
    buyBoxKicker: 'If you replace it',
    buyBoxQuestion: (t) => `${t}: the models in our buying guide`,
    buyBoxGuideCta: 'Read the full buying guide',
    faqTitle: 'Frequently asked questions',
    methodologyCta: 'Read our methodology',
    relatedProblemsTitle: 'Other common failures on this category',
    relatedProblemsSubtitle: 'These incidents affect the same type of appliance — diagnosis and recommended procedure for each.',
  },
  de: {
    home: 'Start',
    troubleshooting: 'Fehlerbehebung',
    diagnosisTitle: 'Diagnose',
    quickFixTitle: 'Empfohlene Vorgehensweise',
    causesTitle: 'Mögliche Ursachen',
    repairOrReplaceTitle: 'Reparieren oder ersetzen?',
    repairOrReplaceFallback: 'Bleibt der Fehler nach diesen Prüfungen bestehen und greift weder Garantie noch Gewährleistung, vergleichen Sie den Kostenvoranschlag für die Reparatur mit dem Preis eines Neugeräts.',
    buyBoxKicker: 'Falls Sie ersetzen',
    buyBoxQuestion: (t) => `${t}: die Modelle aus unserem Kaufratgeber`,
    buyBoxGuideCta: 'Den vollständigen Kaufratgeber lesen',
    faqTitle: 'Häufige Fragen',
    methodologyCta: 'Zur Methodik',
    relatedProblemsTitle: 'Weitere häufige Störungen dieser Kategorie',
    relatedProblemsSubtitle: 'Diese Vorfälle betreffen denselben Gerätetyp — Diagnose und empfohlene Vorgehensweise pro Problem.',
  },
  es: {
    home: 'Inicio',
    troubleshooting: 'Solución de problemas',
    diagnosisTitle: 'Diagnóstico',
    quickFixTitle: 'Procedimiento recomendado',
    causesTitle: 'Causas posibles',
    repairOrReplaceTitle: '¿Reparar o sustituir?',
    repairOrReplaceFallback: 'Si la avería persiste tras estas comprobaciones y el aparato ya no está en garantía, compara el presupuesto de reparación con el precio de un modelo nuevo.',
    buyBoxKicker: 'Si lo sustituyes',
    buyBoxQuestion: (t) => `${t}: los modelos de nuestra guía de compra`,
    buyBoxGuideCta: 'Leer la guía de compra completa',
    faqTitle: 'Preguntas frecuentes',
    methodologyCta: 'Leer nuestra metodología',
    relatedProblemsTitle: 'Otras averías frecuentes en esta categoría',
    relatedProblemsSubtitle: 'Estos incidentes afectan al mismo tipo de aparato — diagnóstico y procedimiento recomendado para cada uno.',
  },
  it: {
    home: 'Home',
    troubleshooting: 'Risoluzione problemi',
    diagnosisTitle: 'Diagnosi',
    quickFixTitle: 'Procedura consigliata',
    causesTitle: 'Cause possibili',
    repairOrReplaceTitle: 'Riparare o sostituire?',
    repairOrReplaceFallback: 'Se il guasto persiste dopo questi controlli e l\'apparecchio non è più in garanzia, confronta il preventivo di riparazione con il prezzo di un modello nuovo.',
    buyBoxKicker: 'Se lo sostituisci',
    buyBoxQuestion: (t) => `${t}: i modelli della nostra guida all'acquisto`,
    buyBoxGuideCta: 'Leggi la guida all\'acquisto completa',
    faqTitle: 'Domande frequenti',
    methodologyCta: 'Leggi la nostra metodologia',
    relatedProblemsTitle: 'Altri guasti frequenti su questa categoria',
    relatedProblemsSubtitle: 'Questi incidenti riguardano lo stesso tipo di apparecchio — diagnosi e procedura consigliata per ciascuno.',
  },
  nl: {
    home: 'Home',
    troubleshooting: 'Probleemoplossing',
    diagnosisTitle: 'Diagnose',
    quickFixTitle: 'Aanbevolen procedure',
    causesTitle: 'Mogelijke oorzaken',
    repairOrReplaceTitle: 'Repareren of vervangen?',
    repairOrReplaceFallback: 'Blijft de storing na deze controles bestaan en valt het apparaat niet meer onder de garantie, vergelijk dan de reparatieofferte met de prijs van een nieuw model.',
    buyBoxKicker: 'Als je vervangt',
    buyBoxQuestion: (t) => `${t}: de modellen uit onze koopgids`,
    buyBoxGuideCta: 'Lees de volledige koopgids',
    faqTitle: 'Veelgestelde vragen',
    methodologyCta: 'Lees onze methodologie',
    relatedProblemsTitle: 'Andere veelvoorkomende storingen in deze categorie',
    relatedProblemsSubtitle: 'Deze incidenten treffen hetzelfde type apparaat — diagnose en aanbevolen procedure per probleem.',
  },
  pl: {
    home: 'Strona główna',
    troubleshooting: 'Rozwiązywanie problemów',
    diagnosisTitle: 'Diagnoza',
    quickFixTitle: 'Zalecana procedura',
    causesTitle: 'Możliwe przyczyny',
    repairOrReplaceTitle: 'Naprawić czy wymienić?',
    repairOrReplaceFallback: 'Jeśli usterka nie ustępuje po tych sprawdzeniach, a urządzenie nie jest już objęte gwarancją, porównaj kosztorys naprawy z ceną nowego modelu.',
    buyBoxKicker: 'Jeśli wymieniasz',
    buyBoxQuestion: (t) => `${t}: modele wybrane w naszym poradniku zakupowym`,
    buyBoxGuideCta: 'Czytaj pełny poradnik zakupowy',
    faqTitle: 'Najczęstsze pytania',
    methodologyCta: 'Przeczytaj naszą metodologię',
    relatedProblemsTitle: 'Inne częste awarie w tej kategorii',
    relatedProblemsSubtitle: 'Te usterki dotyczą tego samego typu urządzenia — diagnoza i zalecana procedura dla każdej z nich.',
  },
  sv: {
    home: 'Hem',
    troubleshooting: 'Felsökning',
    diagnosisTitle: 'Diagnos',
    quickFixTitle: 'Så åtgärdar du felet',
    causesTitle: 'Möjliga orsaker',
    repairOrReplaceTitle: 'Laga eller köpa nytt?',
    repairOrReplaceFallback: 'Kvarstår felet efter de här kontrollerna och täcks apparaten inte längre av garantin? Jämför då kostnadsförslaget för reparationen med vad en ny modell kostar.',
    buyBoxKicker: 'Om du köper nytt',
    buyBoxQuestion: (t) => `${t}: modellerna vi har valt ut i vår köpguide`,
    buyBoxGuideCta: 'Läs hela köpguiden',
    faqTitle: 'Vanliga frågor',
    methodologyCta: 'Läs om vår metod',
    relatedProblemsTitle: 'Andra vanliga fel i den här kategorin',
    relatedProblemsSubtitle: 'De här felen drabbar samma typ av apparat – med diagnos och rekommenderad åtgärd för vart och ett.',
  },
  us: {
    home: 'Home',
    troubleshooting: 'Troubleshooting',
    diagnosisTitle: 'Diagnosis',
    quickFixTitle: 'What to do',
    causesTitle: 'Possible causes',
    repairOrReplaceTitle: 'Repair or replace?',
    repairOrReplaceFallback: 'If the problem is still there after these checks and the appliance is out of warranty, weigh the repair estimate against the cost of a new model.',
    buyBoxKicker: 'If you\'re replacing it',
    buyBoxQuestion: (t) => `${t}: the picks from our buying guide`,
    buyBoxGuideCta: 'Read the full buying guide',
    faqTitle: 'Frequently asked questions',
    methodologyCta: 'Read our methodology',
    relatedProblemsTitle: 'Other common problems in this category',
    relatedProblemsSubtitle: 'These issues affect the same type of appliance — each one comes with a diagnosis and the steps to take.',
  },
  ca: {
    home: 'Home',
    troubleshooting: 'Troubleshooting',
    diagnosisTitle: 'Diagnosis',
    quickFixTitle: 'Recommended steps',
    causesTitle: 'Possible causes',
    repairOrReplaceTitle: 'Repair or replace?',
    repairOrReplaceFallback: 'If the problem persists after these checks and the appliance is no longer under warranty, compare the repair estimate with the cost of a new model.',
    buyBoxKicker: 'If you decide to replace it',
    buyBoxQuestion: (t) => `${t}: the shortlist from our buying guide`,
    buyBoxGuideCta: 'Read the full buying guide',
    faqTitle: 'Frequently asked questions',
    methodologyCta: 'Read our methodology',
    relatedProblemsTitle: 'Other common problems in this category',
    relatedProblemsSubtitle: 'These issues affect the same type of appliance — each one comes with a diagnosis and the recommended steps.',
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
  const guide = getProblemGuide(safeLang, prob.slug)
  return buildPageMetadata({
    lang: safeLang,
    path: `/guides/probleme/${prob.slug}`,
    title: `${content.title} | Home Nura`,
    description: guide?.intro ?? content.diagnosis,
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
  const guide = getProblemGuide(safeLang, prob.slug)
  const faqEntries = getProblemFaq(safeLang, category)
  const ui = uiStrings[safeLang]
  const categoryTitle = category.title[safeLang]
  const categoryHref = `/${safeLang}${categoryPath(category)}`
  const buyBox = getProblemBuyBox(prob, safeLang)

  // Phase OO: sibling-problem cluster. Every problem on a given
  // category cross-links to its siblings so the troubleshooting
  // cluster is walkable from any entry point. Phase KK expanded
  // PROBLEMS to 5 per cuisine-connectee category → each page now
  // surfaces 4 sibling links at minimum. This is the strongest
  // internal-link signal search engines get for Moteur 3.
  const siblingProblems = getProblemsByCategory(prob.categorySlug).filter(
    (p) => p.slug !== prob.slug
  )

  // Same trail as the visible breadcrumb. No "Guides" level: /guides has
  // no page of its own (it 301s to the air fryer guide).
  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: ui.home, path: '' },
    { name: ui.troubleshooting, path: '/guides/probleme' },
    { name: categoryTitle, path: categoryPath(category) },
    { name: content.title, path: `/guides/probleme/${prob.slug}` },
  ])

  // Phase EEE: emit TechArticle JSON-LD so every troubleshooting page
  // ships a proper editorial-content signal (author, publisher, dates,
  // section). Google deprecated HowTo rich results in 2023 but
  // TechArticle is still the correct schema.org type for a technical
  // repair guide, and LLM crawlers use it heavily for citation ranking.
  // Zero new URLs — pure schema enrichment across 1026 pages.
  const articleSchema = buildArticleSchema({
    lang: safeLang,
    path: `/guides/probleme/${prob.slug}`,
    title: content.title,
    description: content.diagnosis,
    image: '/og-image.png',
    imageAlt: content.title,
    datePublished: '2026-02-01',
    dateModified: SITE_LAST_UPDATED_ISO,
    articleType: 'TechArticle',
    articleSection: ui.troubleshooting,
  })

  // Phase OO: expose the sibling cluster as a schema.org ItemList.
  // Each ListItem wraps a full absolute URL so crawlers can walk the
  // whole cluster without needing to parse the DOM for anchors.
  const siblingClusterSchema =
    siblingProblems.length > 0
      ? buildClusterItemListSchema({
          lang: safeLang,
          path: `/guides/probleme/${prob.slug}`,
          name: `${ui.relatedProblemsTitle} — ${categoryTitle}`,
          description: ui.relatedProblemsSubtitle,
          items: siblingProblems.map((sibling) => ({
            name: sibling.query[safeLang],
            path: `/guides/probleme/${sibling.slug}`,
          })),
        })
      : null

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {siblingClusterSchema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siblingClusterSchema) }}
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
              <Link href={`/${safeLang}`} className="hover:text-brand-600 transition-colors">
                {ui.home}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
            <li>
              <Link href={`/${safeLang}/guides/probleme`} className="hover:text-brand-600 transition-colors">
                {ui.troubleshooting}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
            <li>
              <Link href={categoryHref} className="hover:text-brand-600 transition-colors">
                {categoryTitle}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
            <li className="text-slate-600 font-medium" aria-current="page">{content.title}</li>
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
            {guide?.intro ?? content.diagnosis}
          </p>
          {guide && (
            <>
              <h3 className="mt-8 text-lg font-bold text-slate-900">{ui.causesTitle}</h3>
              <ul className="mt-3 space-y-2">
                {guide.causes.map((cause) => (
                  <li key={cause} className="flex gap-3 text-base text-slate-700 leading-relaxed">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* Quick fix / procedure */}
        <section className="max-w-3xl mx-auto px-6 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            {ui.quickFixTitle}
          </h2>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            {guide ? (
              <ol className="space-y-4">
                {guide.steps.map((step, i) => (
                  <li key={step} className="flex gap-4 text-base text-slate-800 leading-relaxed">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-base text-slate-800 leading-relaxed whitespace-pre-line">
                {content.quickFix}
              </p>
            )}
            <div className="mt-6">
              <Link
                href={categoryHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 text-sm font-semibold transition-colors"
              >
                <span>{content.fallbackCta}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {(guide || buyBox) && (
          <section className="max-w-3xl mx-auto px-6 pb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
              {ui.repairOrReplaceTitle}
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {guide?.replaceWhen ?? ui.repairOrReplaceFallback}
            </p>
            {buyBox && (
              <>
                {/* Picks of the category buying guide, linked to the reader's Amazon market;
                    QuickAnswer carries the affiliate disclosure. */}
                <QuickAnswer
                  kicker={ui.buyBoxKicker}
                  question={ui.buyBoxQuestion(categoryTitle)}
                  picks={buyBox.picks}
                  lang={safeLang}
                  location="category_picks"
                  surface="problem_picks"
                />
                {buyBox.guide && (
                  <Link
                    href={buyBox.guide.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    <span>{ui.buyBoxGuideCta}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </>
            )}
          </section>
        )}

        {/* Back to category — reinforces internal link graph */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <Link
            href={categoryHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            <span aria-hidden="true">←</span>
            <span>
              {content.backToCategoryLabel} — {categoryTitle}
            </span>
          </Link>
        </section>

        {/* Phase OO: sibling-problem cluster — internal link graph */}
        {siblingProblems.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              {ui.relatedProblemsTitle}
            </h2>
            <p className="text-sm text-slate-500 mb-6 max-w-2xl">
              {ui.relatedProblemsSubtitle}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siblingProblems.map((sibling) => (
                <li key={sibling.slug}>
                  <Link
                    href={`/${safeLang}/guides/probleme/${sibling.slug}`}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:border-brand-200 hover:shadow-sm"
                  >
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-600 mb-1">
                      {categoryTitle}
                    </span>
                    <span className="text-base font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                      {sibling.query[safeLang]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ (emits FAQPage JSON-LD) */}
        <FaqSection faqs={faqEntries} title={ui.faqTitle} />

        {/* Methodology CTA */}
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

      <SiteFooter
        currentLang={safeLang}
      />
    </div>
  )
}
