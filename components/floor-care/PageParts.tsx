import Link from 'next/link'
import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import AuthorByline from '@/components/AuthorByline'
import FaqSection from '@/components/FaqSection'
import Navbar from '@/components/Navbar'
import { SectionHero, SiteFooter } from '@/components/ui'
import MarketPagesHubList from '@/components/market-pages/HubList'
import { getMetaSilo } from '@/lib/catalog'
import {
  FLOOR_CARE_LABELS,
  FLOOR_CARE_NEEDS,
  FLOOR_CARE_PUBLISHED_ISO,
  FLOOR_CARE_UPDATED_ISO,
  floorCarePath,
  type FloorCareGuideKey,
} from '@/lib/floor-care/config'
import { FLOOR_CARE_ENTRY_SILO, chooserHref, floorCareHref } from '@/lib/floor-care/navigation'
import { pickName } from '@/lib/floor-care/picks'
import type { FloorCareGuide } from '@/lib/floor-care/types'
import { FLOOR_CARE_UI } from '@/lib/floor-care/ui'
import { buildArticleSchema, buildBreadcrumbListSchema, buildProductListSchema, BASE_URL, formatLastUpdated, lastUpdatedLabel } from '@/lib/seo'
import RichText from './RichText'

interface Crumb {
  name: string
  path: string
}

function breadcrumbs(data: FloorCareGuide): Crumb[] {
  const ui = FLOOR_CARE_UI[data.market]
  const silo = getMetaSilo(FLOOR_CARE_ENTRY_SILO)
  return [
    { name: ui.home, path: '' },
    ...(silo ? [{ name: silo.title[data.market], path: `/${silo.slug}` }] : []),
    { name: FLOOR_CARE_LABELS.hub, path: floorCarePath('hub') },
    ...(data.guide === 'hub' ? [] : [{ name: FLOOR_CARE_LABELS[data.guide], path: floorCarePath(data.guide) }]),
  ]
}

function JsonLd({ data }: { data: FloorCareGuide }) {
  const path = floorCarePath(data.guide)
  const schemas = [
    buildBreadcrumbListSchema(data.market, breadcrumbs(data)),
    buildArticleSchema({
      lang: data.market,
      path,
      title: data.h1,
      description: data.metaDescription,
      image: '/og-image.png',
      datePublished: FLOOR_CARE_PUBLISHED_ISO,
      dateModified: FLOOR_CARE_UPDATED_ISO,
      articleSection: FLOOR_CARE_LABELS.hub,
    }),
    ...(data.picks.length > 0
      ? [buildProductListSchema(data.picks.map((pick) => ({ title: pickName(pick) })), data.market, data.h1, `${BASE_URL}/${data.market}${path}`)]
      : []),
  ]
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}

function Breadcrumbs({ data }: { data: FloorCareGuide }) {
  const crumbs = breadcrumbs(data)
  return (
    <nav className="mx-auto max-w-6xl px-6 pt-10 text-xs text-slate-500" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((crumb, i) => (
          <li key={crumb.path} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />}
            {i < crumbs.length - 1 ? (
              <Link href={`/${data.market}${crumb.path}`} className="transition-colors hover:text-brand-600">
                {crumb.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-slate-600">
                {crumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** "www.bissell.com/en-us/product/…" for a source link. */
function displayUrl(href: string): string {
  const url = new URL(href)
  let path = url.pathname
  try {
    path = decodeURI(path)
  } catch {
    // Keep the encoded path: it still reads as a URL.
  }
  const shown = `${url.hostname.replace(/^www\./, '')}${path === '/' ? '' : path}`
  return shown.length > 80 ? `${shown.slice(0, 77)}…` : shown
}

export function Sections({ data }: { data: FloorCareGuide }) {
  if (data.sections.length === 0) return null
  return (
    <div className="mx-auto max-w-3xl space-y-12 px-6 py-12">
      {data.sections.map((section, i) => (
        <section key={i} aria-labelledby={`section-${i + 1}`}>
          <h2 id={`section-${i + 1}`} className="mb-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {section.h2}
          </h2>
          <RichText blocks={section.blocks} />
          {section.link && (
            <p className="mt-4">
              <Link
                href={chooserHref(section.link.target, data.market, data.guide)}
                className="font-semibold text-brand-700 underline-offset-2 hover:text-brand-800 hover:underline"
              >
                {section.link.label} →
              </Link>
            </p>
          )}
        </section>
      ))}
    </div>
  )
}

function Sources({ data }: { data: FloorCareGuide }) {
  if (data.sources.length === 0) return null
  const ui = FLOOR_CARE_UI[data.market]
  return (
    <section id="sources" aria-labelledby="sources-title" className="mx-auto max-w-3xl scroll-mt-24 px-6 pb-12">
      <h2 id="sources-title" className="text-xl font-bold text-slate-900">
        {ui.sourcesTitle}
      </h2>
      <ol className="mt-3 list-decimal space-y-1 pl-6 text-sm text-slate-600">
        {data.sources.map((source) => (
          <li key={source}>
            <a href={source} target="_blank" rel="nofollow noopener noreferrer" className="break-words underline-offset-2 hover:text-brand-700 hover:underline">
              {displayUrl(source)}
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}

/** Links to the hub and the other guides: every floor-care page reaches the three needs. */
function Siblings({ data }: { data: FloorCareGuide }) {
  const ui = FLOOR_CARE_UI[data.market]
  const others: FloorCareGuideKey[] = data.guide === 'hub' ? [] : ['hub', ...FLOOR_CARE_NEEDS.filter((need) => need !== data.guide)]
  if (others.length === 0) return null
  return (
    <nav aria-labelledby="siblings-title" className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
      <h2 id="siblings-title" className="text-xl font-bold text-slate-900">
        {ui.siblingsTitle}
      </h2>
      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {others.map((guide) => (
          <li key={guide}>
            <Link
              href={floorCareHref(data.market, guide)}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white px-5 py-4 transition hover:border-brand-200 hover:shadow-sm"
            >
              <span className="font-semibold text-slate-900">{FLOOR_CARE_LABELS[guide]}</span>
              {guide !== 'hub' && <span className="mt-1 text-sm text-slate-600">{ui.needs[guide].covers}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/**
 * Frame of every floor-care page: JSON-LD, navbar, breadcrumb, hero with
 * byline and update date, the page body, then the shared tail (FAQ,
 * sources, links to the other guides) and the footer (Amazon disclosure).
 */
export function FloorCareShell({ data, children }: { data: FloorCareGuide; children: ReactNode }) {
  const ui = FLOOR_CARE_UI[data.market]
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <JsonLd data={data} />
      <Navbar currentLang={data.market} />
      <main id="main">
        <Breadcrumbs data={data} />
        <SectionHero kicker={ui.kicker} title={data.h1} subtitle={data.intro}>
          <p className="mt-4 text-xs text-slate-500">
            <time dateTime={FLOOR_CARE_UPDATED_ISO}>
              {lastUpdatedLabel[data.market]} {formatLastUpdated(data.market, FLOOR_CARE_UPDATED_ISO)}
            </time>
          </p>
          <AuthorByline lang={data.market} className="mt-3 justify-center text-sm" />
        </SectionHero>
        {children}
        {data.faq.length > 0 && (
          <div id="faq" className="scroll-mt-24">
            <FaqSection faqs={data.faq.map((f) => ({ question: f.q, answer: f.a }))} title={ui.faqTitle} />
          </div>
        )}
        <Sources data={data} />
        <MarketPagesHubList lang={data.market} path={floorCarePath(data.guide)} />
        <Siblings data={data} />
      </main>
      <SiteFooter currentLang={data.market} />
    </div>
  )
}
