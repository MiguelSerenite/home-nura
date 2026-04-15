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

const metaTitles: Record<Lang, string> = {
  fr: 'Home Nura | Les Meilleurs Airfryers Connectés en Europe',
  en: 'Home Nura | Best Smart Air Fryers in Europe',
  de: 'Home Nura | Die besten Smart Airfryer in Europa',
  es: 'Home Nura | Las Mejores Freidoras de Aire Conectadas en Europa',
  it: 'Home Nura | Le Migliori Friggitrici ad Aria Smart in Europa',
  nl: 'Home Nura | De Beste Smart Airfryers in Europa',
};

const metaDescriptions: Record<Lang, string> = {
  fr: 'Comparatif expert des meilleurs airfryers 2026. Guides d\'achat, tests et avis pour la France, Allemagne, UK, Espagne, Italie et Pays-Bas.',
  en: 'Expert comparison of the best air fryers 2026. Buying guides, reviews and tests for the UK, France, Germany, Spain, Italy and Netherlands.',
  de: 'Experten-Vergleich der besten Heißluftfritteusen 2026. Kaufberatung, Tests und Bewertungen für Deutschland, Frankreich, UK, Spanien, Italien und Niederlande.',
  es: 'Comparativa experta de las mejores freidoras de aire 2026. Guías de compra, pruebas y opiniones para España, Francia, Alemania, UK, Italia y Países Bajos.',
  it: 'Confronto esperto delle migliori friggitrici ad aria 2026. Guide all\'acquisto, test e recensioni per Italia, Francia, Germania, UK, Spagna e Paesi Bassi.',
  nl: 'Expert vergelijking van de beste airfryers 2026. Koopgidsen, tests en reviews voor Nederland, Frankrijk, Duitsland, UK, Spanje en Italië.',
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
    knowsAbout: [
      'Air Fryers',
      'Smart Kitchen Appliances',
      'Smart Multicookers',
      'Coffee Machines',
      'Smart Kitchen Scales',
      'Cooking Thermometers',
      'Smart Plugs',
      'Home Cooking',
      'Kitchen Reviews',
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
