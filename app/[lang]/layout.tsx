import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Geist } from "next/font/google";
import { WebVitalsReporter } from "@/components/WebVitalsReporter";
import { Analytics } from "@vercel/analytics/next";
import GeoLocaleSuggestion from "@/components/GeoLocaleSuggestion";
import BackToTop from "@/components/BackToTop";
import { HTML_LANG, LANGUAGES, isValidLang, type Lang } from "@/lib/i18n";
import { buildPageMetadata, BASE_URL } from "@/lib/seo";
import "../globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6b7230', // brand-600 (olive) — matches the logo
};

const SKIP_LINK_LABEL: Record<Lang, string> = {
  fr: 'Aller au contenu',
  en: 'Skip to content',
  de: 'Zum Inhalt springen',
  es: 'Ir al contenido',
  it: 'Vai al contenuto',
  nl: 'Naar de inhoud',
  pl: 'Przejdź do treści',
  sv: 'Hoppa till innehållet',
  us: 'Skip to content',
  ca: 'Skip to content',
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Phase Z: homepage meta now reflects the parent editorial theme
// "La Maison Connectée Européenne". Airfryers stay in the copy as
// the flagship category but no longer define the scope.
const metaTitles: Record<Lang, string> = {
  fr: 'Home Nura | La Maison Connectée, de l\'Europe à l\'Amérique du Nord',
  en: 'Home Nura | Smart Home Guides for Europe & North America',
  de: 'Home Nura | Smart-Home-Geräte unabhängig im Vergleich',
  es: 'Home Nura: comparativas del hogar inteligente',
  it: 'Home Nura | La casa smart, dall\'Europa al Nord America',
  nl: 'Home Nura: slimme apparaten voor in huis vergeleken',
  pl: 'Home Nura | Inteligentny dom: niezależne porównania',
  sv: 'Home Nura | Det smarta hemmet, från Europa till Nordamerika',
  us: 'Home Nura | Independent Smart Home Buying Guides',
  ca: 'Home Nura | Smart Home Buying Guides, Canadian Edition',
};

const metaDescriptions: Record<Lang, string> = {
  fr: 'Comparatifs indépendants de la maison connectée : cuisine, énergie, sécurité, confort, entretien et extérieur. 10 marchés, en Europe et en Amérique du Nord.',
  en: 'Independent smart home reviews: kitchen, energy, security, comfort, cleaning and outdoors. Ten markets across Europe and North America, one method.',
  de: 'Unabhängige Smart-Home-Vergleiche: smarte Küche, Energie, Sicherheit, Raumklima, Reinigung und Garten. Zehn Länder in Europa und Nordamerika, eine Methode.',
  es: 'Comparativas independientes del hogar inteligente: cocina, energía, seguridad, confort, limpieza y exterior. 10 mercados de Europa y Norteamérica.',
  it: 'Confronti indipendenti sulla casa smart: cucina, energia, sicurezza, comfort, pulizia ed esterni. 10 mercati tra Europa e Nord America, un solo metodo.',
  nl: 'Onafhankelijke vergelijkingen van slimme apparaten voor in huis: keuken, energie, beveiliging, binnenklimaat, schoonmaak en tuin. 10 markten, één methode.',
  pl: 'Niezależne rankingi i porównania 2026: air fryer, ekspres do kawy, robot sprzątający, odkurzacz pionowy, oczyszczacz powietrza, czujnik czadu, smart home.',
  sv: 'Oberoende jämförelser av smarta hem: kök, energi, säkerhet, inomhusklimat, städning, trädgård och utomhus. 10 marknader i Europa och Nordamerika.',
  us: 'Independent smart home buying guides for the kitchen, energy, security, comfort, cleaning and the yard. Ten markets, one method, no paid placements.',
  ca: 'Independent smart home buying guides, Canadian edition: kitchen, energy, security, comfort, cleaning and outdoors. Ten markets, one shared method.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr';

  // Phase V: go through buildPageMetadata so canonical, hreflang alternates,
  // complete OpenGraph (siteName/locale/images), Twitter card, and robots
  // directives all stay in lockstep with every other page on the site.
  return buildPageMetadata({
    lang: safeLang,
    path: '',
    title: metaTitles[safeLang],
    description: metaDescriptions[safeLang],
  });
}

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

// Static country label for the Organization schema. Keeping the
// mapping adjacent to the schema keeps the file scannable.
const COUNTRY_NAMES: Record<Lang, string> = {
  fr: 'France',
  de: 'Deutschland',
  en: 'United Kingdom',
  es: 'España',
  it: 'Italy',
  nl: 'Nederland',
  pl: 'Poland',
  sv: 'Sweden',
  us: 'United States',
  ca: 'Canada',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;
  // Unknown lang segment → proper 404. Without this, Next.js falls through
  // to the default dictionary and returns HTTP 200 on e.g. /xyz, which
  // Google can index as a thin duplicate of the homepage.
  if (!isValidLang(rawLang)) {
    notFound();
  }
  const lang: Lang = rawLang;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Home Nura',
    alternateName: 'HomeNura',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
      width: 1400,
      height: 400,
    },
    image: `${BASE_URL}/logo.png`,
    description: metaDescriptions[lang],
    foundingDate: '2024-01-15',
    founder: {
      '@type': 'Person',
      name: 'Miguel Marie',
      jobTitle: lang === 'fr' ? 'Fondateur & Rédacteur en Chef' : 'Founder & Editor-in-Chief',
      url: `${BASE_URL}/${lang}/a-propos`,
    },
    // sameAs intentionally omitted: list only social profiles that exist
    // and link back to homenura.com (twitter/linkedin URLs returned 404).
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@homenura.com',
      availableLanguage: ['French', 'English', 'German', 'Spanish', 'Italian', 'Dutch'],
    },
    areaServed: LANGUAGES.map((l) => ({
      '@type': 'Country',
      name: COUNTRY_NAMES[l],
    })),
    // Phase Y: knowsAbout reflects the 6 meta-silos under the parent
    // editorial theme "The European Smart Home". Google uses knowsAbout
    // to attribute entity authority — staying crisp about the pillars
    // we own stops us from looking like a commodity review farm.
    knowsAbout: [
      'The European Smart Home',
      'Smart Kitchen Appliances',
      'Energy & Home Automation',
      'Home Security',
      'Indoor Air Quality & Comfort',
      'Smart Cleaning & Housekeeping',
      'Smart Garden & Outdoor',
      'Air Fryers',
      'Smart Multicookers',
      'Coffee Machines',
      'Smart Thermostats',
      'Video Doorbells',
      'Robot Vacuums',
      'GDPR-Compliant Smart Home',
      'Matter / Thread Compatibility',
      'EU Energy Labels',
    ],
  };

  // WebSite schema — site-name entity. No SearchAction: Google retired the
  // sitelinks search box (Nov 2024) and the site has no search results page.
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Home Nura',
    alternateName: 'HomeNura',
    url: BASE_URL,
    inLanguage: HTML_LANG[lang],
    publisher: { '@id': `${BASE_URL}/#organization` },
  };

  return (
    <html
      lang={HTML_LANG[lang]}
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
        >
          {SKIP_LINK_LABEL[lang]}
        </a>
        <GeoLocaleSuggestion lang={lang} />
        <WebVitalsReporter />
        {/* Cookieless, same-origin (/_vercel/insights). Always rendered: the
            build-time VERCEL env guard turned out to be falsy on Vercel. */}
        <Analytics />
        {children}
        <BackToTop lang={lang} />
      </body>
    </html>
  );
}
