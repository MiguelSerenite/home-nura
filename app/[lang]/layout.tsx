import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = 'https://homenura.com';
const LANGUAGES = ['fr', 'en', 'de', 'es', 'it', 'nl'];

const metaTitles: Record<string, string> = {
  fr: 'Home Nura | Les Meilleurs Airfryers Connectés en Europe',
  en: 'Home Nura | Best Smart Air Fryers in Europe',
  de: 'Home Nura | Die besten Smart Airfryer in Europa',
  es: 'Home Nura | Las Mejores Freidoras de Aire Conectadas en Europa',
  it: 'Home Nura | Le Migliori Friggitrici ad Aria Smart in Europa',
  nl: 'Home Nura | De Beste Smart Airfryers in Europa',
};

const metaDescriptions: Record<string, string> = {
  fr: 'Comparatif expert des meilleurs airfryers 2026. Guides d\'achat, tests et avis pour la France, Allemagne, UK, Espagne, Italie et Pays-Bas.',
  en: 'Expert comparison of the best air fryers 2026. Buying guides, reviews and tests for the UK, France, Germany, Spain, Italy and Netherlands.',
  de: 'Experten-Vergleich der besten Heißluftfritteusen 2026. Kaufberatung, Tests und Bewertungen für Deutschland, Frankreich, UK, Spanien, Italien und Niederlande.',
  es: 'Comparativa experta de las mejores freidoras de aire 2026. Guías de compra, pruebas y opiniones para España, Francia, Alemania, UK, Italia y Países Bajos.',
  it: 'Confronto esperto delle migliori friggitrici ad aria 2026. Guide all\'acquisto, test e recensioni per Italia, Francia, Germania, UK, Spagna e Paesi Bassi.',
  nl: 'Expert vergelijking van de beste airfryers 2026. Koopgidsen, tests en reviews voor Nederland, Frankrijk, Duitsland, UK, Spanje en Italië.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = LANGUAGES.includes(lang) ? lang : 'fr';

  return {
    title: metaTitles[safeLang],
    description: metaDescriptions[safeLang],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${safeLang}`,
      languages: Object.fromEntries(
        LANGUAGES.map(l => [l, `${BASE_URL}/${l}`])
      ),
    },
    openGraph: {
      title: metaTitles[safeLang],
      description: metaDescriptions[safeLang],
      url: `${BASE_URL}/${safeLang}`,
      siteName: 'Home Nura',
      locale: safeLang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitles[safeLang],
      description: metaDescriptions[safeLang],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Home Nura',
    url: BASE_URL,
    description: metaDescriptions[lang] || metaDescriptions.fr,
    areaServed: LANGUAGES.map(l => ({
      '@type': 'Country',
      name: l === 'fr' ? 'France' : l === 'de' ? 'Germany' : l === 'en' ? 'United Kingdom' : l === 'es' ? 'Spain' : l === 'it' ? 'Italy' : 'Netherlands',
    })),
  };

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
