import { ExternalLink } from 'lucide-react'
import type { Lang } from '@/lib/i18n'
import { getIndependentSources, SOURCES_CHECKED_ON } from '@/lib/catalog/independent-sources'

interface SourcesCopy {
  title: string
  intro: (categoryTitle: string) => string
  checked: (date: string) => string
}

// Only locales with verified testers get the box (see lib/catalog/independent-sources.ts).
const COPY: Partial<Record<Lang, SourcesCopy>> = {
  de: {
    title: 'Unabhängige Tests anderer Prüfstellen',
    intro: (c) =>
      `Wir testen nicht selbst: Unsere Empfehlungen stützen sich auf Herstellerangaben und verifizierte Käuferbewertungen. Diese unabhängigen Prüfstellen haben ${c} getestet – ihre Ergebnisse lesen Sie direkt bei ihnen.`,
    checked: (d) => `Links geprüft am ${d}.`,
  },
}

/** "30.10.2026" from "2026-10-30". */
const dottedDate = (iso: string) => iso.split('-').reverse().join('.')

/** Links to independent testers' own pages for a category; nothing when none is verified. */
export default function IndependentSources({ categorySlug, categoryTitle, lang }: {
  categorySlug: string
  categoryTitle: string
  lang: Lang
}) {
  const copy = COPY[lang]
  const sources = getIndependentSources(categorySlug, lang)
  if (!copy || sources.length === 0) return null

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12" aria-labelledby="independent-sources">
      <h2 id="independent-sources" className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
        {copy.title}
      </h2>
      <p className="max-w-3xl text-sm text-slate-600 leading-relaxed mb-5">{copy.intro(categoryTitle)}</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener"
              className="group flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:border-brand-200 hover:shadow-sm"
            >
              <span className="flex-1">
                <span className="block text-xs font-semibold uppercase tracking-wide text-brand-700">{source.publisher}</span>
                <span className="mt-1 block text-sm font-medium text-slate-900 group-hover:text-brand-700 transition-colors">
                  {source.title}
                </span>
              </span>
              <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-500">{copy.checked(dottedDate(SOURCES_CHECKED_ON))}</p>
    </section>
  )
}
