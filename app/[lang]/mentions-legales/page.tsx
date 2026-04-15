import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getNonce } from '@/lib/nonce'

const SUPPORTED_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const l = labels[safeLang] || labels.fr
  const canonicalUrl = `https://homenura.com/${safeLang}/mentions-legales`
  return {
    title: `${l.title} | Home Nura`,
    description: l.title,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((ll) => [ll, `https://homenura.com/${ll}/mentions-legales`])
      ),
    },
    robots: { index: true, follow: true },
  }
}

// Single source of truth for legal entity info (LCEN article 6 compliance)
const publisher = {
  name: 'Groupe M-XO',
  legalForm: 'SAS',
  capital: '15 000 €',
  address: '60 Rue François 1er, 75008 Paris, France',
  rcs: 'Paris 500 511 373',
  siret: '500 511 373 00044',
  vat: 'FR30 500 511 373',
  publicationDirector: 'Miguel MARIE',
  phone: '+33 1 77 35 50 71',
  email: 'contact@homenura.com',
  website: 'https://homenura.com',
}

const host = {
  name: 'Vercel Inc.',
  address: '340 S Lemon Ave #4133, Walnut, CA 91789, USA',
}

const labels: Record<string, Record<string, string>> = {
  fr: {
    title: 'Mentions Légales',
    publisher: 'Éditeur',
    companyName: 'Raison sociale',
    legalForm: 'Forme juridique',
    capital: 'Capital social',
    registeredOffice: 'Siège social',
    rcs: 'RCS',
    siret: 'SIRET',
    vat: 'N° TVA intracommunautaire',
    director: 'Directeur de la publication',
    phone: 'Téléphone',
    email: 'Email',
    website: 'Site web',
    hosting: 'Hébergement',
    affiliation: 'Programme d\'affiliation',
    affiliationText: 'Home Nura participe au Programme Partenaires d\'Amazon EU, un programme d\'affiliation conçu pour permettre à des sites de percevoir une rémunération grâce à la création de liens vers Amazon.fr, Amazon.de, Amazon.co.uk, Amazon.es, Amazon.it et Amazon.nl. En tant que Partenaire d\'Amazon, Home Nura réalise un bénéfice sur les achats remplissant les conditions requises.',
    pricing: 'Prix affichés',
    pricingText: 'Les prix affichés sur le site sont fournis à titre indicatif et peuvent varier à tout moment sans préavis. Le prix de vente effectif est celui affiché sur le site du marchand au moment de la commande.',
    ip: 'Propriété intellectuelle',
    ipText: 'Tous les noms de marques, logos, visuels et dénominations produits cités sur ce site sont la propriété de leurs détenteurs respectifs. Les contenus éditoriaux (textes, analyses, classements) sont protégés par le droit d\'auteur et ne peuvent être reproduits sans autorisation écrite préalable.',
    back: 'Retour à l\'accueil',
  },
  en: {
    title: 'Legal Notice',
    publisher: 'Publisher',
    companyName: 'Company name',
    legalForm: 'Legal form',
    capital: 'Share capital',
    registeredOffice: 'Registered office',
    rcs: 'Trade register',
    siret: 'SIRET',
    vat: 'VAT number',
    director: 'Publication director',
    phone: 'Phone',
    email: 'Email',
    website: 'Website',
    hosting: 'Hosting',
    affiliation: 'Affiliate programme',
    affiliationText: 'Home Nura participates in the Amazon EU Associates Programme, an affiliate advertising programme designed to provide a means for sites to earn fees by advertising and linking to Amazon.co.uk, Amazon.fr, Amazon.de, Amazon.es, Amazon.it and Amazon.nl. As an Amazon Associate, Home Nura earns from qualifying purchases.',
    pricing: 'Displayed prices',
    pricingText: 'Prices shown on this site are provided for information purposes only and may change at any time without notice. The actual selling price is the one displayed on the merchant\'s website at the time of order.',
    ip: 'Intellectual property',
    ipText: 'All brand names, logos, visuals and product names mentioned on this site are the property of their respective owners. Editorial content (text, analysis, rankings) is protected by copyright and may not be reproduced without prior written permission.',
    back: 'Back to home',
  },
  de: {
    title: 'Impressum',
    publisher: 'Herausgeber',
    companyName: 'Firmenname',
    legalForm: 'Rechtsform',
    capital: 'Stammkapital',
    registeredOffice: 'Firmensitz',
    rcs: 'Handelsregister',
    siret: 'SIRET',
    vat: 'USt-IdNr.',
    director: 'Verantwortlicher im Sinne des Presserechts',
    phone: 'Telefon',
    email: 'E-Mail',
    website: 'Website',
    hosting: 'Hosting',
    affiliation: 'Partnerprogramm',
    affiliationText: 'Home Nura nimmt am Amazon EU-Partnerprogramm teil, einem Affiliate-Werbeprogramm, das es Websites ermöglicht, durch Verlinkung zu Amazon.de, Amazon.fr, Amazon.co.uk, Amazon.es, Amazon.it und Amazon.nl Werbegebühren zu verdienen. Als Amazon-Partner verdient Home Nura an qualifizierten Käufen.',
    pricing: 'Angezeigte Preise',
    pricingText: 'Die auf dieser Website angezeigten Preise dienen nur zu Informationszwecken und können jederzeit ohne Vorankündigung geändert werden. Der tatsächliche Verkaufspreis ist der auf der Website des Händlers zum Zeitpunkt der Bestellung angezeigte Preis.',
    ip: 'Geistiges Eigentum',
    ipText: 'Alle auf dieser Website genannten Markennamen, Logos, Bilder und Produktbezeichnungen sind Eigentum ihrer jeweiligen Inhaber. Redaktionelle Inhalte (Texte, Analysen, Rankings) sind urheberrechtlich geschützt und dürfen ohne vorherige schriftliche Genehmigung nicht reproduziert werden.',
    back: 'Zurück zur Startseite',
  },
  es: {
    title: 'Aviso Legal',
    publisher: 'Editor',
    companyName: 'Razón social',
    legalForm: 'Forma jurídica',
    capital: 'Capital social',
    registeredOffice: 'Sede social',
    rcs: 'Registro mercantil',
    siret: 'SIRET',
    vat: 'Número IVA',
    director: 'Director de la publicación',
    phone: 'Teléfono',
    email: 'Email',
    website: 'Sitio web',
    hosting: 'Alojamiento',
    affiliation: 'Programa de afiliación',
    affiliationText: 'Home Nura participa en el Programa de Afiliados de Amazon EU, un programa de publicidad de afiliación diseñado para proporcionar un medio para que los sitios ganen tarifas de publicidad mediante enlaces a Amazon.es, Amazon.fr, Amazon.de, Amazon.co.uk, Amazon.it y Amazon.nl. Como Afiliado de Amazon, Home Nura obtiene ingresos por las compras que cumplan los requisitos aplicables.',
    pricing: 'Precios mostrados',
    pricingText: 'Los precios mostrados en este sitio se proporcionan a título informativo y pueden variar en cualquier momento sin previo aviso. El precio de venta real es el que se muestra en el sitio del comerciante en el momento del pedido.',
    ip: 'Propiedad intelectual',
    ipText: 'Todos los nombres de marcas, logotipos, imágenes y denominaciones de productos mencionados en este sitio son propiedad de sus respectivos propietarios. El contenido editorial (textos, análisis, clasificaciones) está protegido por derechos de autor y no puede reproducirse sin autorización escrita previa.',
    back: 'Volver al inicio',
  },
  it: {
    title: 'Note Legali',
    publisher: 'Editore',
    companyName: 'Ragione sociale',
    legalForm: 'Forma giuridica',
    capital: 'Capitale sociale',
    registeredOffice: 'Sede legale',
    rcs: 'Registro delle imprese',
    siret: 'SIRET',
    vat: 'Partita IVA',
    director: 'Direttore della pubblicazione',
    phone: 'Telefono',
    email: 'Email',
    website: 'Sito web',
    hosting: 'Hosting',
    affiliation: 'Programma di affiliazione',
    affiliationText: 'Home Nura partecipa al Programma di Affiliazione Amazon EU, un programma di affiliazione che consente ai siti di guadagnare commissioni pubblicitarie tramite link verso Amazon.it, Amazon.fr, Amazon.de, Amazon.co.uk, Amazon.es e Amazon.nl. Come Affiliato Amazon, Home Nura riceve un guadagno dagli acquisti idonei.',
    pricing: 'Prezzi visualizzati',
    pricingText: 'I prezzi mostrati su questo sito sono forniti a titolo indicativo e possono variare in qualsiasi momento senza preavviso. Il prezzo di vendita effettivo è quello visualizzato sul sito del venditore al momento dell\'ordine.',
    ip: 'Proprietà intellettuale',
    ipText: 'Tutti i nomi di marchi, loghi, immagini e denominazioni di prodotti citati su questo sito sono di proprietà dei rispettivi titolari. I contenuti editoriali (testi, analisi, classifiche) sono protetti da diritto d\'autore e non possono essere riprodotti senza preventiva autorizzazione scritta.',
    back: 'Torna alla home',
  },
  nl: {
    title: 'Juridische Kennisgeving',
    publisher: 'Uitgever',
    companyName: 'Bedrijfsnaam',
    legalForm: 'Rechtsvorm',
    capital: 'Maatschappelijk kapitaal',
    registeredOffice: 'Statutaire zetel',
    rcs: 'Handelsregister',
    siret: 'SIRET',
    vat: 'BTW-nummer',
    director: 'Verantwoordelijke uitgever',
    phone: 'Telefoon',
    email: 'E-mail',
    website: 'Website',
    hosting: 'Hosting',
    affiliation: 'Affiliate programma',
    affiliationText: 'Home Nura neemt deel aan het Amazon EU-partnerprogramma, een affiliate-advertentieprogramma dat is ontworpen om sites in staat te stellen advertentiekosten te verdienen door te linken naar Amazon.nl, Amazon.fr, Amazon.de, Amazon.co.uk, Amazon.es en Amazon.it. Als Amazon-partner verdient Home Nura aan in aanmerking komende aankopen.',
    pricing: 'Weergegeven prijzen',
    pricingText: 'De op deze site weergegeven prijzen worden ter informatie verstrekt en kunnen op elk moment zonder voorafgaande kennisgeving worden gewijzigd. De werkelijke verkoopprijs is de prijs die op de website van de verkoper wordt weergegeven op het moment van de bestelling.',
    ip: 'Intellectueel eigendom',
    ipText: 'Alle op deze site genoemde merknamen, logo\'s, afbeeldingen en productnamen zijn eigendom van hun respectieve eigenaren. Redactionele inhoud (teksten, analyses, ranglijsten) is auteursrechtelijk beschermd en mag niet worden gereproduceerd zonder voorafgaande schriftelijke toestemming.',
    back: 'Terug naar home',
  },
}

export default async function MentionsLegales({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = labels[lang] || labels.fr
  const nonce = await getNonce()

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${lang}` },
            { '@type': 'ListItem', position: 2, name: t.title, item: `https://homenura.com/${lang}/mentions-legales` },
          ],
        }) }}
      />
      <Navbar currentLang={lang} />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-black mb-10 tracking-tight">{t.title}</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">{t.publisher}</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-[minmax(180px,max-content)_1fr] gap-x-6 gap-y-2 text-sm text-slate-600">
            <dt className="font-semibold text-slate-900">{t.companyName}</dt>
            <dd>{publisher.name}</dd>

            <dt className="font-semibold text-slate-900">{t.legalForm}</dt>
            <dd>{publisher.legalForm}</dd>

            <dt className="font-semibold text-slate-900">{t.capital}</dt>
            <dd>{publisher.capital}</dd>

            <dt className="font-semibold text-slate-900">{t.registeredOffice}</dt>
            <dd>{publisher.address}</dd>

            <dt className="font-semibold text-slate-900">{t.rcs}</dt>
            <dd>{publisher.rcs}</dd>

            <dt className="font-semibold text-slate-900">{t.siret}</dt>
            <dd>{publisher.siret}</dd>

            <dt className="font-semibold text-slate-900">{t.vat}</dt>
            <dd>{publisher.vat}</dd>

            <dt className="font-semibold text-slate-900">{t.director}</dt>
            <dd>{publisher.publicationDirector}</dd>

            <dt className="font-semibold text-slate-900">{t.phone}</dt>
            <dd><a href={`tel:${publisher.phone.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline">{publisher.phone}</a></dd>

            <dt className="font-semibold text-slate-900">{t.email}</dt>
            <dd><a href={`mailto:${publisher.email}`} className="text-blue-600 hover:underline">{publisher.email}</a></dd>

            <dt className="font-semibold text-slate-900">{t.website}</dt>
            <dd><a href={publisher.website} className="text-blue-600 hover:underline">{publisher.website}</a></dd>
          </dl>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">{t.hosting}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {host.name}<br />
            {host.address}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">{t.affiliation}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{t.affiliationText}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">{t.pricing}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{t.pricingText}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">{t.ip}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{t.ipText}</p>
        </section>

        <div className="mt-12">
          <Link href={`/${lang}`} className="text-blue-600 font-bold hover:underline">
            &larr; {t.back}
          </Link>
        </div>
      </main>
    </div>
  )
}
