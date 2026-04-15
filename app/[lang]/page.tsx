import { getDictionary } from './dictionaries'
import ProductCard from '@/components/ProductCard'
import ProductImageCarousel from '@/components/ProductImageCarousel'
import AffiliateLink from '@/components/AffiliateLink'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import NewsletterForm from '@/components/NewsletterForm'
import ComparisonTable from '@/components/ComparisonTable'
import CookieBanner from '@/components/CookieBanner'
import { getStaticProducts } from '@/lib/products'
import { buildProductListSchema, formatLastUpdated, lastUpdatedLabel, SITE_LAST_UPDATED_ISO } from '@/lib/seo'
import { getNonce } from '@/lib/nonce'
import Link from 'next/link'
import { Kicker, SiteFooter, Button } from '@/components/ui'

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const nonce = await getNonce();

  // Produits statiques avec liens affiliés
  const products = getStaticProducts(lang);

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dict.breadcrumb_home,
        item: `https://homenura.com/${lang}`,
      },
    ],
  }

  // WebPage Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: dict.welcome,
    description: dict.description,
    url: `https://homenura.com/${lang}`,
    datePublished: '2024-06-01',
    dateModified: SITE_LAST_UPDATED_ISO,
    inLanguage: lang,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Home Nura',
      url: 'https://homenura.com',
    },
  }

  // ItemList Schema — exposes each comparison product with AggregateRating
  // so LLM crawlers can cite individual models instead of just the page.
  const itemListSchema = buildProductListSchema(
    products,
    lang,
    dict.welcome,
    `https://homenura.com/${lang}`
  )

  const lastUpdatedText = `${lastUpdatedLabel[lang] ?? lastUpdatedLabel.fr} ${formatLastUpdated(lang)}`

  // Comparison table product mapping
  const comparisonProducts = products.map(p => ({
    name: p.title,
    price: p.price,
    priceNumeric: p.priceNumeric,
    image: p.image,
    url: p.url,
    capacity: p.capacity,
    nuraScore: p.nuraScore,
    bestFor: p.bestFor,
    badge: p.badge,
    pros: p.pros,
    cons: p.cons,
    images: p.images,
    asin: p.asin,
  }))

  // Comparison table dictionary
  const tableDict = {
    table_title: dict.table_title,
    table_subtitle: dict.table_subtitle,
    col_product: dict.col_product,
    col_nura_score: dict.col_nura_score,
    col_capacity: dict.col_capacity,
    col_best_for: dict.col_best_for,
    col_price: dict.col_price,
    col_action: dict.col_action,
    col_pros: dict.col_pros,
    col_cons: dict.col_cons,
    sort_by: dict.sort_by,
    sort_price_asc: dict.sort_price_asc,
    sort_price_desc: dict.sort_price_desc,
    sort_score: dict.sort_score,
    buy_button: dict.buy_button,
    show_details: dict.show_details,
    hide_details: dict.hide_details,
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Navbar currentLang={lang} />

      <main id="main">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Europe 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
            {dict.welcome}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {dict.description}
          </p>
          <time
            dateTime={SITE_LAST_UPDATED_ISO}
            className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-500 bg-slate-100/70 border border-slate-200 rounded-full"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 8v4l3 2" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            {lastUpdatedText}
          </time>
        </div>
      </section>

      {/* Why Trust Us - Enhanced with stats */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">{dict.why_trust}</h2>
          <p className="text-slate-600 text-sm text-center mb-8">{dict.expert_label}</p>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-1">12+</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_models_tested}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-1">5</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_hours_testing}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-1">6</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_european_markets}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Products Showcase with Real Images */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            {dict.top_picks_title || "This month's podium"}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            {dict.top_picks_subtitle || 'The top three, hand-tested by our team'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 hover:-translate-y-1">
                <div className="p-4">
                  <ProductImageCarousel
                    images={product.images}
                    alt={product.title}
                    badge={product.badge}
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-black text-slate-900">{product.price}</span>
                    <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${product.nuraScore >= 9 ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                      {product.nuraScore}/10
                    </span>
                  </div>
                  <AffiliateLink
                    href={product.url}
                    asin={product.asin}
                    productName={product.title}
                    priceNumeric={product.priceNumeric}
                    position={i + 1}
                    location="product_card"
                    lang={lang}
                    className="block w-full rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-700"
                  >
                    {dict.buy_button}
                  </AffiliateLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section — editorial header */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-14 md:mb-16 px-4">
          <Kicker className="mb-5">
            {lang === 'fr' ? 'La Sélection' : lang === 'de' ? 'Die Auswahl' : lang === 'es' ? 'La Selección' : lang === 'it' ? 'La Selezione' : lang === 'nl' ? 'De Selectie' : 'The Selection'}
          </Kicker>
          <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-4">{dict.section_title}</h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto">{dict.section_subtitle}</p>
          <div className="h-[2px] w-16 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(3).map((product, index) => (
            <ProductCard
              key={index}
              name={product.title}
              price={product.price}
              imageUrl={product.image}
              affiliateLink={product.url}
              asin={product.asin}
              buyButtonText={dict.buy_button}
              badge={product.badge}
              lang={lang}
              capacity={product.capacity}
              bestFor={product.bestFor}
            />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <ComparisonTable
          products={comparisonProducts}
          dict={tableDict}
          lang={lang}
        />
      </section>

      {/* SEO Content — editorial long-read with numbered chapters */}
      <section className="max-w-3xl mx-auto px-6 pt-24 md:pt-28">
        <div className="text-center mb-16">
          <Kicker className="mb-5">
            {lang === 'fr' ? 'Le Dossier' : lang === 'de' ? 'Das Dossier' : lang === 'es' ? 'El Dossier' : lang === 'it' ? 'Il Dossier' : lang === 'nl' ? 'Het Dossier' : 'The Dossier'}
          </Kicker>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-slate-900 mb-5">
            {lang === 'fr' ? 'Tout savoir sur l\'airfryer en 2026' : lang === 'de' ? 'Alles über den Airfryer 2026' : lang === 'es' ? 'Todo sobre la freidora de aire en 2026' : lang === 'it' ? 'Tutto sulla friggitrice ad aria nel 2026' : lang === 'nl' ? 'Alles over de airfryer in 2026' : 'Everything About the Air Fryer in 2026'}
          </h2>
          <div className="h-[2px] w-16 bg-blue-600 mx-auto"></div>
        </div>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {[
            {
              num: 'I',
              title: dict.trust_section_title,
              body: dict.trust_section_content,
              href: `/${lang}/a-propos`,
              cta: lang === 'fr' ? 'En savoir plus sur notre équipe et notre méthodologie' : lang === 'de' ? 'Mehr über unser Team und unsere Methodik erfahren' : lang === 'es' ? 'Más información sobre nuestro equipo y metodología' : lang === 'it' ? 'Scopri di più sul nostro team e la nostra metodologia' : lang === 'nl' ? 'Meer over ons team en onze methodologie' : 'Learn more about our team and methodology',
            },
            {
              num: 'II',
              title: dict.market_section_title,
              body: dict.market_section_content,
              href: `/${lang}/guides/airfryers`,
              cta: lang === 'fr' ? 'Consultez notre guide complet des airfryers 2026' : lang === 'de' ? 'Lesen Sie unseren kompletten Airfryer-Ratgeber 2026' : lang === 'es' ? 'Consulta nuestra guía completa de freidoras de aire 2026' : lang === 'it' ? 'Consulta la nostra guida completa alle friggitrici ad aria 2026' : lang === 'nl' ? 'Bekijk onze complete airfryer-gids 2026' : 'See our complete air fryer guide 2026',
            },
            {
              num: 'III',
              title: dict.testing_section_title,
              body: dict.testing_section_content,
              href: `/${lang}/guides/airfryer-vs-four`,
              cta: lang === 'fr' ? 'Airfryer vs four traditionnel : notre comparatif détaillé' : lang === 'de' ? 'Heißluftfritteuse vs. Backofen: unser detaillierter Vergleich' : lang === 'es' ? 'Freidora de aire vs horno tradicional: nuestra comparativa detallada' : lang === 'it' ? 'Friggitrice ad aria vs forno tradizionale: il nostro confronto dettagliato' : lang === 'nl' ? 'Airfryer vs traditionele oven: onze gedetailleerde vergelijking' : 'Air fryer vs traditional oven: our detailed comparison',
            },
            {
              num: 'IV',
              title: dict.recommendation_section_title,
              body: dict.recommendation_section_content,
              href: `/${lang}/guides/airfryers`,
              cta: lang === 'fr' ? 'Voir notre classement complet des 9 meilleurs airfryers' : lang === 'de' ? 'Unsere komplette Rangliste der 9 besten Heißluftfritteusen ansehen' : lang === 'es' ? 'Ver nuestro ranking completo de las 9 mejores freidoras de aire' : lang === 'it' ? 'Scopri la nostra classifica completa delle 9 migliori friggitrici ad aria' : lang === 'nl' ? 'Bekijk onze complete ranking van de 9 beste airfryers' : 'See our complete ranking of the 9 best air fryers',
            },
          ].map((chapter, i) => (
            <article key={i} className="py-14 md:py-16 first:pt-10">
              <Kicker className="mb-4">
                Chapitre · {chapter.num}
              </Kicker>
              <h3 className="text-2xl md:text-[1.875rem] font-bold tracking-tight leading-[1.2] text-slate-900 mb-5">
                {chapter.title}
              </h3>
              <div className="h-px w-10 bg-blue-600 mb-6"></div>
              <p className="text-[17px] md:text-lg text-slate-700 leading-[1.85] mb-6">{chapter.body}</p>
              <Link
                href={chapter.href}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span className="uppercase tracking-[0.15em] text-[11px]">{chapter.cta}</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Guide CTA — refined twin buttons */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={`/${lang}/guides/airfryers`} variant="secondary" size="lg">
            <span className="tracking-wide">{dict.guide_title}</span>
            <span aria-hidden="true">&rarr;</span>
          </Button>
          <Button href={`/${lang}/blog`} variant="ghost" size="lg">
            <span className="tracking-wide">{lang === 'fr' ? 'Nos articles & recettes' : lang === 'de' ? 'Artikel & Rezepte' : lang === 'es' ? 'Artículos y recetas' : lang === 'it' ? 'Articoli e ricette' : lang === 'nl' ? 'Artikelen & recepten' : 'Articles & recipes'}</span>
            <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </section>

      {/* Cross-silo discovery: Smart Kitchen pillar bridge */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <Link
          href={`/${lang}/cuisine-connectee`}
          className="group block rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-amber-50 p-8 md:p-12 shadow-sm hover:shadow-md transition duration-200"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <Kicker className="mb-3">
                {lang === 'fr' ? 'Au-delà de l\'airfryer' : lang === 'de' ? 'Jenseits des Airfryers' : lang === 'es' ? 'Más allá de la freidora' : lang === 'it' ? 'Oltre la friggitrice ad aria' : lang === 'nl' ? 'Voorbij de airfryer' : 'Beyond the air fryer'}
              </Kicker>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
                {lang === 'fr' ? 'Découvrez la cuisine connectée' : lang === 'de' ? 'Entdecken Sie die smarte Küche' : lang === 'es' ? 'Descubre la cocina conectada' : lang === 'it' ? 'Scopri la cucina connessa' : lang === 'nl' ? 'Ontdek de slimme keuken' : 'Discover the smart kitchen'}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {lang === 'fr' ? 'Multicuiseurs, cafetières intelligentes, balances, thermomètres, prises connectées — 15 modèles testés pour transformer votre cuisine.' : lang === 'de' ? 'Multikocher, smarte Kaffeemaschinen, Waagen, Thermometer, smarte Steckdosen — 15 getestete Modelle für Ihre Küche.' : lang === 'es' ? 'Ollas, cafeteras inteligentes, básculas, termómetros, enchufes conectados — 15 modelos probados para tu cocina.' : lang === 'it' ? 'Multicottura, macchine da caffè intelligenti, bilance, termometri, prese connesse — 15 modelli testati per la tua cucina.' : lang === 'nl' ? 'Multicookers, slimme koffiemachines, weegschalen, thermometers, slimme stekkers — 15 geteste modellen voor uw keuken.' : 'Multicookers, smart coffee machines, scales, thermometers, smart plugs — 15 tested models to upgrade your kitchen.'}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 shrink-0">
              <span className="uppercase tracking-[0.15em] text-[11px]">
                {lang === 'fr' ? 'Explorer le silo' : lang === 'de' ? 'Silo erkunden' : lang === 'es' ? 'Explorar silo' : lang === 'it' ? 'Esplora silo' : lang === 'nl' ? 'Silo verkennen' : 'Explore silo'}
              </span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </div>
          </div>
        </Link>
      </section>

      {/* FAQ Section with Schema */}
      <FaqSection faqs={dict.faq} title={dict.faq_title} nonce={nonce} />

      {/* Newsletter */}
      <NewsletterForm currentLang={lang} />
      </main>

      {/* Footer with legal links */}
      <SiteFooter
        currentLang={lang}
        topContent={<p className="text-sm text-slate-500">{dict.affiliate_disclaimer}</p>}
        links={[
          { href: `/${lang}/guides/airfryers`, label: 'Guide' },
          { href: `/${lang}/comparateur`, label: 'Comparateur' },
          {
            href: `/${lang}/cuisine-connectee`,
            label:
              lang === 'fr' ? 'Cuisine connectée'
              : lang === 'de' ? 'Smarte Küche'
              : lang === 'es' ? 'Cocina conectada'
              : lang === 'it' ? 'Cucina connessa'
              : lang === 'nl' ? 'Slimme keuken'
              : 'Smart kitchen',
          },
          { href: `/${lang}/quiz`, label: 'Quiz' },
          { href: `/${lang}/blog`, label: 'Blog' },
          { href: `/${lang}/a-propos`, label: dict.about_link },
          { href: `/${lang}/mentions-legales`, label: dict.legal_notice },
          { href: `/${lang}/politique-confidentialite`, label: dict.privacy_policy },
          { href: `/${lang}/politique-cookies`, label: dict.cookie_policy },
        ]}
      />

      {/* Cookie Banner */}
      <CookieBanner
        lang={lang}
        dict={{
          cookie_banner_text: dict.cookie_banner_text,
          cookie_accept: dict.cookie_accept,
          cookie_reject: dict.cookie_reject,
          cookie_learn_more: dict.cookie_learn_more,
        }}
      />
    </div>
  )
}
