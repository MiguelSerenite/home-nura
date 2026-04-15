import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import CookieBanner from '@/components/CookieBanner'
import ArticleProductCTA from '@/components/ArticleProductCTA'
import { getDictionary } from '../../dictionaries'
import { getArticleBySlug, getRelatedArticles, getAllSlugs } from '@/lib/blog'
import { getStaticProducts } from '@/lib/products'
import { enrichContentWithCTAs } from '@/lib/blog/enrichContent'
import { CATEGORIES } from '@/lib/blog/types'
import { notFound } from 'next/navigation'
import { getNonce } from '@/lib/nonce'
import type { Metadata } from 'next'
import { SiteFooter } from '@/components/ui'

const LANGUAGES = ['fr', 'en', 'de', 'es', 'it', 'nl']
const BASE_URL = 'https://homenura.com'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  const params: { lang: string; slug: string }[] = []
  for (const lang of LANGUAGES) {
    for (const slug of slugs) {
      params.push({ lang, slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  const safeLang = LANGUAGES.includes(lang) ? lang : 'fr'
  const title = article.title[safeLang] || article.title.fr
  const description = article.excerpt[safeLang] || article.excerpt.fr

  return {
    title: `${title} | Home Nura`,
    description,
    alternates: {
      canonical: `${BASE_URL}/${safeLang}/blog/${slug}`,
      languages: Object.fromEntries(LANGUAGES.map(l => [l, `${BASE_URL}/${l}/blog/${slug}`])),
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${safeLang}/blog/${slug}`,
      type: 'article',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: ['Home Nura'],
      images: article.images[0] ? [{ url: article.images[0].src, alt: article.images[0].alt[safeLang] || article.images[0].alt.fr }] : [],
    },
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const dict = await getDictionary(lang)
  const nonce = await getNonce()
  const related = getRelatedArticles(article)
  const products = getStaticProducts(lang)
  const topProducts = products.slice(0, 3).map(p => ({
    title: p.title, price: p.price, image: p.image, url: p.url, nuraScore: p.nuraScore, capacity: p.capacity,
  }))
  const title = article.title[lang] || article.title.fr
  const rawContent = article.content[lang] || article.content.fr
  // Wrap tables in a scrollable container so they scroll horizontally on mobile
  // without breaking the table layout algorithm (`display: block` shrinks cells).
  const enrichedContent = enrichContentWithCTAs(rawContent, lang)
  const content = enrichedContent.replace(
    /<table(\s[^>]*)?>/gi,
    '<div class="blog-table-wrap"><table$1>'
  ).replace(/<\/table>/gi, '</table></div>')
  const excerpt = article.excerpt[lang] || article.excerpt.fr
  const categoryLabel = CATEGORIES[article.category]?.[lang] || CATEGORIES[article.category]?.fr

  // Normalize the hero image to an absolute URL (required for Article rich results).
  const heroImageRaw = article.images[0]?.src
  const heroImage = heroImageRaw
    ? (heroImageRaw.startsWith('http') ? heroImageRaw : `${BASE_URL}${heroImageRaw}`)
    : `${BASE_URL}/og-image.png`
  const heroImageAlt = article.images[0]?.alt[lang] || article.images[0]?.alt.fr || title

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': article.category === 'tests' || article.category === 'comparatifs' ? 'ReviewArticle' : 'Article',
    headline: title,
    description: excerpt,
    image: [
      {
        '@type': 'ImageObject',
        url: heroImage,
        caption: heroImageAlt,
      },
    ],
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: 'Miguel Serenite',
      jobTitle: lang === 'fr' ? 'Fondateur & Rédacteur en Chef' : 'Founder & Editor-in-Chief',
      url: `${BASE_URL}/${lang}/a-propos`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Home Nura',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
        width: 1400,
        height: 400,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/${lang}/blog/${slug}` },
    inLanguage: lang,
    articleSection: categoryLabel,
    wordCount: content.replace(/<[^>]+>/g, '').split(/\s+/).length,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.breadcrumb_home || 'Home', item: `${BASE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/${lang}/blog` },
      { '@type': 'ListItem', position: 3, name: categoryLabel, item: `${BASE_URL}/${lang}/blog` },
      { '@type': 'ListItem', position: 4, name: title, item: `${BASE_URL}/${lang}/blog/${slug}` },
    ],
  }

  const dateFormatted = new Date(article.datePublished).toLocaleDateString(
    lang === 'en' ? 'en-GB' : lang, { day: 'numeric', month: 'long', year: 'numeric' }
  )
  const modifiedFormatted = new Date(article.dateModified).toLocaleDateString(
    lang === 'en' ? 'en-GB' : lang, { day: 'numeric', month: 'long', year: 'numeric' }
  )

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-hidden">
      <script type="application/ld+json" nonce={nonce} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" nonce={nonce} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar currentLang={lang} />

      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 flex-wrap">
          <Link href={`/${lang}`} className="hover:text-blue-600 transition-colors">{dict.breadcrumb_home || 'Home'}</Link>
          <span>/</span>
          <Link href={`/${lang}/blog`} className="hover:text-blue-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-600">{categoryLabel}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-blue-600 bg-blue-50 rounded-full">{categoryLabel}</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">{title}</h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-6">{excerpt}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 border-t border-b border-slate-100 py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">MS</div>
              <span className="font-medium text-slate-600">Miguel Serenite</span>
            </div>
            <span>{lang === 'fr' ? 'Publié le' : lang === 'de' ? 'Veröffentlicht am' : lang === 'es' ? 'Publicado el' : lang === 'it' ? 'Pubblicato il' : lang === 'nl' ? 'Gepubliceerd op' : 'Published'} {dateFormatted}</span>
            {article.dateModified !== article.datePublished && (
              <span>{lang === 'fr' ? 'Mis à jour le' : lang === 'de' ? 'Aktualisiert am' : lang === 'es' ? 'Actualizado el' : lang === 'it' ? 'Aggiornato il' : lang === 'nl' ? 'Bijgewerkt op' : 'Updated'} {modifiedFormatted}</span>
            )}
            <span>{article.readingTime} min {lang === 'fr' ? 'de lecture' : lang === 'de' ? 'Lesezeit' : lang === 'es' ? 'de lectura' : lang === 'it' ? 'di lettura' : lang === 'nl' ? 'leestijd' : 'read'}</span>
          </div>
        </header>

        {/* Hero Image */}
        {article.images[0] && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 bg-slate-100">
            <Image
              src={article.images[0].src}
              alt={article.images[0].alt[lang] || article.images[0].alt.fr}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <div
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-slate-900
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-slate-800
            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-slate-600
            prose-strong:text-slate-900
            prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-md
            [&_.blog-table-wrap]:my-6 [&_.blog-table-wrap]:-mx-4 md:[&_.blog-table-wrap]:mx-0 [&_.blog-table-wrap]:overflow-x-auto [&_.blog-table-wrap]:rounded-xl md:[&_.blog-table-wrap]:border md:[&_.blog-table-wrap]:border-slate-200 md:[&_.blog-table-wrap]:bg-white md:[&_.blog-table-wrap]:shadow-sm
            [&_.blog-table-wrap]:px-4 md:[&_.blog-table-wrap]:px-0
            [&_.blog-table-wrap_table]:min-w-[560px] [&_.blog-table-wrap_table]:w-full [&_.blog-table-wrap_table]:border-collapse [&_.blog-table-wrap_table]:text-sm
            [&_.blog-table-wrap_thead]:bg-slate-50
            [&_.blog-table-wrap_th]:p-3 [&_.blog-table-wrap_th]:text-left [&_.blog-table-wrap_th]:font-bold [&_.blog-table-wrap_th]:text-slate-900 [&_.blog-table-wrap_th]:text-[11px] [&_.blog-table-wrap_th]:uppercase [&_.blog-table-wrap_th]:tracking-wider [&_.blog-table-wrap_th]:border-b-2 [&_.blog-table-wrap_th]:border-slate-200 [&_.blog-table-wrap_th]:whitespace-nowrap
            [&_.blog-table-wrap_td]:p-3 [&_.blog-table-wrap_td]:align-top [&_.blog-table-wrap_td]:border-b [&_.blog-table-wrap_td]:border-slate-100 [&_.blog-table-wrap_td]:text-slate-700
            [&_.blog-table-wrap_tr:last-child_td]:border-b-0
            [&_.blog-table-wrap_tbody_tr]:transition-colors hover:[&_.blog-table-wrap_tbody_tr]:bg-slate-50/60
            [&_img]:max-w-full [&_img]:h-auto
            [&_pre]:overflow-x-auto [&_pre]:max-w-full
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Inline Product CTA - top pick */}
        <ArticleProductCTA products={topProducts.slice(0, 1)} lang={lang} variant="inline" />

        {/* Pillar Link */}
        <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <p className="text-sm font-bold text-blue-900 mb-2">
            {lang === 'fr' ? 'Article issu de notre guide complet' : lang === 'de' ? 'Artikel aus unserem umfassenden Ratgeber' : lang === 'es' ? 'Artículo de nuestra guía completa' : lang === 'it' ? 'Articolo dalla nostra guida completa' : lang === 'nl' ? 'Artikel uit onze complete gids' : 'Article from our comprehensive guide'}
          </p>
          <Link href={`/${lang}/${article.pillar}`} className="text-blue-600 font-bold hover:underline text-lg">
            {lang === 'fr' ? 'Voir le guide complet des airfryers 2026 →' : lang === 'de' ? 'Zum kompletten Airfryer-Ratgeber 2026 →' : lang === 'es' ? 'Ver la guía completa de freidoras 2026 →' : lang === 'it' ? 'Vai alla guida completa 2026 →' : lang === 'nl' ? 'Naar de complete airfryer-gids 2026 →' : 'See the complete air fryer guide 2026 →'}
          </Link>
        </div>

        {/* Product Recommendations CTA */}
        <ArticleProductCTA products={topProducts} lang={lang} variant="bottom" />

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mt-16 border-t border-slate-100 pt-12">
            <h2 className="text-2xl font-bold mb-8">
              {lang === 'fr' ? 'Articles connexes' : lang === 'de' ? 'Verwandte Artikel' : lang === 'es' ? 'Artículos relacionados' : lang === 'it' ? 'Articoli correlati' : lang === 'nl' ? 'Gerelateerde artikelen' : 'Related Articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map(r => (
                <Link
                  key={r.slug}
                  href={`/${lang}/blog/${r.slug}`}
                  className="group flex gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  {r.images[0] && (
                    <div className="w-20 h-20 flex-shrink-0 relative rounded-lg overflow-hidden bg-slate-100">
                      <Image src={r.images[0].src} alt={r.images[0].alt[lang] || r.images[0].alt.fr} fill className="object-cover" sizes="80px" loading="lazy" />
                    </div>
                  )}
                  <div>
                    <span className="text-xs text-slate-400">{r.readingTime} min</span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {r.title[lang] || r.title.fr}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Footer */}
      <SiteFooter
        currentLang={lang}
        variant="compact"
        topContent={<p className="text-sm text-slate-500">{dict.affiliate_disclaimer}</p>}
        links={[
          { href: `/${lang}`, label: dict.breadcrumb_home || 'Accueil' },
          { href: `/${lang}/blog`, label: 'Blog' },
          { href: `/${lang}/a-propos`, label: dict.about_link || 'À propos' },
          { href: `/${lang}/mentions-legales`, label: dict.legal_notice },
        ]}
      />

      <CookieBanner lang={lang} dict={{ cookie_banner_text: dict.cookie_banner_text, cookie_accept: dict.cookie_accept, cookie_reject: dict.cookie_reject, cookie_learn_more: dict.cookie_learn_more }} />
    </div>
  )
}
