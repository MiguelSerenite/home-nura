import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { getNonce } from "@/lib/nonce";
import { WebVitalsReporter } from "@/components/WebVitalsReporter";
import { LANGUAGES, isValidLang, type Lang } from "@/lib/i18n";
import { buildPageMetadata, BASE_URL } from "@/lib/seo";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Phase Z: homepage meta now reflects the parent editorial theme
// "La Maison Connectée Européenne". Airfryers stay in the copy as
// the flagship category but no longer define the scope.
const metaTitles: Record<Lang, string> = {
  fr: 'Home Nura | La Maison Connectée, testée pour l\'Europe',
  en: 'Home Nura | The Smart Home, tested for Europe',
  de: 'Home Nura | Das Smart Home, getestet für Europa',
  es: 'Home Nura | El Hogar Conectado, probado para Europa',
  it: 'Home Nura | La Casa Connessa, testata per l\'Europa',
  nl: 'Home Nura | Het Slimme Huis, getest voor Europa',
};

const metaDescriptions: Record<Lang, string> = {
  fr: 'Comparatifs indépendants de la maison connectée européenne : cuisine, énergie, sécurité, confort, entretien et extérieur. 6 marchés, une seule méthode.',
  en: 'Independent reviews of the European smart home: kitchen, energy, security, comfort, cleaning and outdoors. Six markets, one shared method.',
  de: 'Unabhängige Tests des europäischen Smart Home: Küche, Energie, Sicherheit, Komfort, Reinigung und Außenbereich. Sechs Märkte, eine Methode.',
  es: 'Comparativas independientes del hogar conectado europeo: cocina, energía, seguridad, confort, limpieza y exterior. Seis mercados, un mismo método.',
  it: 'Confronti indipendenti della casa connessa europea: cucina, energia, sicurezza, comfort, pulizia ed esterno. Sei mercati, un solo metodo.',
  nl: 'Onafhankelijke vergelijkingen van het Europese slimme huis: keuken, energie, beveiliging, comfort, schoonmaak en buitenruimte. Zes markten, één methode.',
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
  de: 'Germany',
  en: 'United Kingdom',
  es: 'Spain',
  it: 'Italy',
  nl: 'Netherlands',
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
  const nonce = await getNonce();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
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
      name: 'Miguel Serenite',
      jobTitle: lang === 'fr' ? 'Fondateur & Rédacteur en Chef' : 'Founder & Editor-in-Chief',
      url: `${BASE_URL}/${lang}/a-propos`,
    },
    sameAs: [
      'https://twitter.com/homenura',
      'https://www.instagram.com/homenura',
      'https://www.linkedin.com/company/homenura',
    ],
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

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <WebVitalsReporter />
        {children}
      </body>
    </html>
  );
}
