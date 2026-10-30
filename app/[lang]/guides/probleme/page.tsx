/**
 * Troubleshooting index: every /guides/probleme/[problem] page, grouped by
 * silo then appliance category. It is the "Dépannage" level of the problem
 * pages' breadcrumb (which used to point at this URL while it 404'd) and
 * the one page that links the whole troubleshooting cluster.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { SectionHero, SiteFooter } from '@/components/ui'
import { buildBreadcrumbListSchema, buildPageMetadata } from '@/lib/seo'
import { PROBLEMS, categoryPath, getProblemIndex } from '@/lib/catalog'
import { LANGUAGES, resolveLang, type Lang } from '@/lib/i18n'

const PATH = '/guides/probleme'

interface IndexUi {
  home: string
  troubleshooting: string
  title: string
  subtitle: (count: number) => string
  metaTitle: string
  metaDescription: (count: number) => string
}

const uiStrings: Record<Lang, IndexUi> = {
  fr: {
    home: 'Accueil',
    troubleshooting: 'Dépannage',
    title: 'Pannes des appareils de la maison connectée',
    subtitle: (n) => `${n} pannes fréquentes classées par appareil : diagnostic et procédure recommandée.`,
    metaTitle: 'Dépannage maison connectée : pannes et solutions | Home Nura',
    metaDescription: (n) =>
      `${n} pannes fréquentes d'appareils connectés (airfryers, robots aspirateurs, caméras, thermostats…) : diagnostic et procédure recommandée, appareil par appareil.`,
  },
  en: {
    home: 'Home',
    troubleshooting: 'Troubleshooting',
    title: 'Smart home appliance troubleshooting',
    subtitle: (n) => `${n} common faults sorted by appliance: diagnosis and recommended procedure.`,
    metaTitle: 'Smart home troubleshooting: faults and fixes | Home Nura',
    metaDescription: (n) =>
      `${n} common smart appliance faults (air fryers, robot vacuums, cameras, thermostats…): diagnosis and recommended procedure, appliance by appliance.`,
  },
  de: {
    home: 'Start',
    troubleshooting: 'Fehlerbehebung',
    title: 'Störungen smarter Haushaltsgeräte',
    subtitle: (n) => `${n} häufige Störungen nach Gerät sortiert: Diagnose und empfohlene Vorgehensweise.`,
    metaTitle: 'Smart-Home-Fehlerbehebung: Störungen und Lösungen | Home Nura',
    metaDescription: (n) =>
      `${n} häufige Störungen smarter Geräte (Heißluftfritteusen, Saugroboter, Kameras, Thermostate…): Diagnose und empfohlene Vorgehensweise, Gerät für Gerät.`,
  },
  es: {
    home: 'Inicio',
    troubleshooting: 'Solución de problemas',
    title: 'Averías de los aparatos de la casa conectada',
    subtitle: (n) => `${n} averías frecuentes ordenadas por aparato: diagnóstico y procedimiento recomendado.`,
    metaTitle: 'Averías de la casa conectada y soluciones | Home Nura',
    metaDescription: (n) =>
      `${n} averías frecuentes de aparatos conectados (freidoras de aire, robots aspiradores, cámaras, termostatos…): diagnóstico y procedimiento recomendado, aparato por aparato.`,
  },
  it: {
    home: 'Home',
    troubleshooting: 'Risoluzione problemi',
    title: 'Guasti degli apparecchi della casa connessa',
    subtitle: (n) => `${n} guasti frequenti ordinati per apparecchio: diagnosi e procedura consigliata.`,
    metaTitle: 'Guasti della casa connessa e soluzioni | Home Nura',
    metaDescription: (n) =>
      `${n} guasti frequenti di apparecchi connessi (friggitrici ad aria, robot aspirapolvere, telecamere, termostati…): diagnosi e procedura consigliata, apparecchio per apparecchio.`,
  },
  nl: {
    home: 'Home',
    troubleshooting: 'Probleemoplossing',
    title: 'Storingen van slimme huishoudapparaten',
    subtitle: (n) => `${n} veelvoorkomende storingen per apparaat: diagnose en aanbevolen procedure.`,
    metaTitle: 'Smart home probleemoplossing: storingen en oplossingen | Home Nura',
    metaDescription: (n) =>
      `${n} veelvoorkomende storingen van slimme apparaten (airfryers, robotstofzuigers, camera's, thermostaten…): diagnose en aanbevolen procedure, per apparaat.`,
  },
}

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = resolveLang((await params).lang)
  const ui = uiStrings[lang]
  return buildPageMetadata({
    lang,
    path: PATH,
    title: ui.metaTitle,
    description: ui.metaDescription(PROBLEMS.length),
  })
}

export default async function ProblemIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = resolveLang((await params).lang)
  const ui = uiStrings[lang]
  const groups = getProblemIndex()

  const breadcrumbSchema = buildBreadcrumbListSchema(lang, [
    { name: ui.home, path: '' },
    { name: ui.troubleshooting, path: PATH },
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
        <nav className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href={`/${lang}`} className="hover:text-brand-600 transition-colors">
                {ui.home}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
            <li className="text-slate-600 font-medium">{ui.troubleshooting}</li>
          </ol>
        </nav>

        <SectionHero kicker={ui.troubleshooting} title={ui.title} subtitle={ui.subtitle(PROBLEMS.length)} />

        <div className="max-w-6xl mx-auto px-4 md:px-6 pb-20 space-y-14">
          {groups.map(({ silo, categories }) => (
            <section key={silo.slug} aria-labelledby={`silo-${silo.slug}`}>
              <h2
                id={`silo-${silo.slug}`}
                className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6"
              >
                {silo.title[lang]}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map(({ category, problems }) => (
                  <li key={category.slug} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <h3 className="text-lg font-bold text-slate-900">
                      <Link
                        href={`/${lang}${categoryPath(category)}`}
                        className="hover:text-brand-700 transition-colors"
                      >
                        {category.title[lang]}
                      </Link>
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {problems.map((problem) => (
                        <li key={problem.slug}>
                          <Link
                            href={`/${lang}${PATH}/${problem.slug}`}
                            className="text-sm text-slate-700 leading-relaxed hover:text-brand-700 transition-colors"
                          >
                            {problem.query[lang]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter currentLang={lang} />
    </div>
  )
}
