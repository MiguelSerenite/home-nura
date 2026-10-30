/**
 * /[lang]/auteur — page of the locale's byline.
 *
 * The byline is a pen name of the Home Nura editorial team (lib/authors.ts);
 * this page says so, names who is responsible for publication, explains the
 * sources and links the methodology. ProfilePage + Person markup, without
 * sameAs, job title or photo: none exists.
 */

import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildAuthorPerson, buildBreadcrumbListSchema, buildPageMetadata } from '@/lib/seo'
import { AUTHOR_PATH, getAuthor, getAuthorPageCopy } from '@/lib/authors'
import { getAllArticles } from '@/lib/blog'
import { LANGUAGES, isValidLang, type Lang } from '@/lib/i18n'
import { SectionHero, SiteFooter } from '@/components/ui'
import { ChevronRight } from 'lucide-react'

const LATEST_GUIDES = 12

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const author = getAuthor(safeLang)
  const copy = getAuthorPageCopy(safeLang)
  return buildPageMetadata({
    lang: safeLang,
    path: AUTHOR_PATH,
    title: `${author.name} | Home Nura`,
    description: copy.metaDescription,
  })
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const author = getAuthor(safeLang)
  const copy = getAuthorPageCopy(safeLang)

  const latest = getAllArticles()
    .filter((article) => article.content[safeLang])
    .sort((a, b) => b.dateModified.localeCompare(a.dateModified))
    .slice(0, LATEST_GUIDES)

  const profileSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: buildAuthorPerson(safeLang),
    inLanguage: safeLang,
  }
  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: copy.breadcrumbHome, path: '' },
    { name: author.name, path: AUTHOR_PATH },
  ])

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar currentLang={safeLang} />

      <main id="main">
        <nav className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href={`/${safeLang}`} className="hover:text-brand-600 transition-colors">
                {copy.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
            <li className="text-slate-600 font-medium">{author.name}</li>
          </ol>
        </nav>

        <SectionHero kicker={copy.kicker} title={author.name} subtitle={author.bio} />

        <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12 space-y-8">
          <div className="flex justify-center">
            <span
              aria-hidden="true"
              className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center text-white text-2xl font-bold"
            >
              {author.initials}
            </span>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{copy.penNameTitle}</h2>
            <p className="text-slate-600 leading-relaxed">{copy.penName}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{copy.methodTitle}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{copy.method}</p>
            <Link
              href={`/${safeLang}/methodologie`}
              className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-600 transition-colors"
            >
              {copy.methodologyLink} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {latest.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">{copy.latestTitle}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {latest.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/${safeLang}/blog/${article.slug}`}
                    className="block h-full rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-900 hover:border-brand-200 hover:text-brand-700 transition-colors"
                  >
                    {article.title[safeLang] ?? article.title.fr}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <SiteFooter currentLang={safeLang} />
    </div>
  )
}
