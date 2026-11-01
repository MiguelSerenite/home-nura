import type { Metadata } from 'next'
import Image from 'next/image'
import EntryChoiceLink from '@/components/entry/EntryChoiceLink'
import EntryViewTracker from '@/components/entry/EntryViewTracker'
import { entryCopy } from '@/lib/country-entry/copy'
import { entryPageMetadata } from '@/lib/country-entry/metadata'
import { marketVersion, type Lang } from '@/lib/i18n'
import { currentEntryChoices } from './entry-request'

export async function generateMetadata(): Promise<Metadata> {
  const { copyLang } = await currentEntryChoices()
  return entryPageMetadata(entryCopy(copyLang))
}

function Flag({ code, className }: { code: Lang; className: string }) {
  return (
    <span className={className} aria-hidden="true">
      {marketVersion(code).flag}
    </span>
  )
}

/**
 * The international entry page (/), the x-default of the home pages. No
 * redirect: the ten versions, the visitor's IP country first as one big
 * button above the fold (lib/country-entry/choices.ts), the rest below.
 * Text only, no image besides the small logo: it paints at once. A
 * visitor who already chose never sees it (proxy.ts sends them on).
 */
export default async function EntryPage() {
  const { basis, suggested, others, copyLang } = await currentEntryChoices()
  const copy = entryCopy(copyLang)
  const [primary, ...secondary] = suggested
  const isProposed = (code: Lang) => suggested.includes(code)
  const legalLang = copyLang ?? 'en'

  return (
    <>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-14 max-w-3xl items-center px-4">
          <Image src="/logo-header.png" alt="Home Nura" width={735} height={112} sizes="184px" priority className="h-7 w-auto" />
        </div>
      </header>
      <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 pb-10 pt-5 sm:pt-10">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{copy.title}</h1>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">{copy.intro}</p>

        {primary && (
          <section aria-labelledby="entry-suggested" className="mt-5">
            <h2 id="entry-suggested" className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {copy.suggested}
            </h2>
            <EntryChoiceLink
              code={primary}
              proposed
              className="mt-2 flex min-h-20 items-center gap-4 rounded-2xl bg-brand-700 px-5 py-4 text-white shadow-md transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300"
            >
              <Flag code={primary} className="text-4xl leading-none" />
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-lg font-bold leading-tight">{marketVersion(primary).edition}</span>
                <span className="text-sm text-brand-100">
                  {marketVersion(primary).country} · {marketVersion(primary).language}
                </span>
              </span>
              <span className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-800">
                {entryCopy(primary).enter} <span aria-hidden="true">→</span>
              </span>
            </EntryChoiceLink>
            {secondary.length > 0 && (
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {secondary.map((code) => (
                  <li key={code}>
                    <EntryChoiceLink
                      code={code}
                      proposed
                      className="flex min-h-14 items-center gap-3 rounded-xl border-2 border-brand-600 bg-white px-4 py-2.5 text-slate-900 transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300"
                    >
                      <Flag code={code} className="text-2xl leading-none" />
                      <span className="flex flex-col">
                        <span className="font-bold leading-tight">{marketVersion(code).edition}</span>
                        <span className="text-sm text-slate-600">
                          {marketVersion(code).country} · {marketVersion(code).language}
                        </span>
                      </span>
                    </EntryChoiceLink>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        <section aria-labelledby="entry-all" className={primary ? 'mt-8' : 'mt-5'}>
          <h2 id="entry-all" className="text-xs font-bold uppercase tracking-widest text-slate-500">
            {primary ? copy.others : copy.all}
          </h2>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {others.map((code) => (
              <li key={code}>
                <EntryChoiceLink
                  code={code}
                  proposed={isProposed(code)}
                  className="flex min-h-14 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 transition-colors hover:border-brand-500 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300"
                >
                  <Flag code={code} className="text-2xl leading-none" />
                  <span className="flex flex-col">
                    <span className="font-semibold leading-tight">{marketVersion(code).country}</span>
                    <span className="text-sm text-slate-600">
                      {marketVersion(code).language} · {marketVersion(code).edition}
                    </span>
                  </span>
                </EntryChoiceLink>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-8 text-xs leading-relaxed text-slate-500">{copy.note}</p>
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-3xl flex-wrap gap-x-5 gap-y-1 px-4 py-4 text-xs text-slate-600" aria-label="Home Nura">
          <span>© Home Nura</span>
          <a href={`/${legalLang}/mentions-legales`} className="underline-offset-2 hover:underline">
            {copy.legal}
          </a>
          <a href={`/${legalLang}/politique-cookies`} className="underline-offset-2 hover:underline">
            {copy.cookies}
          </a>
        </nav>
      </footer>
      <EntryViewTracker basis={basis} proposed={primary ?? 'none'} />
    </>
  )
}
