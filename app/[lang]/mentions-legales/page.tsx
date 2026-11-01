import Navbar from '@/components/Navbar'
import { SiteFooter } from '@/components/ui'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLang } from '@/lib/i18n'
import { amazonAffiliationNotice } from '@/lib/amazon-affiliation-notice'


const metaDescriptions: Record<string, string> = {
  fr: 'Mentions légales de Home Nura : éditeur, hébergeur, programme d\'affiliation Amazon et propriété intellectuelle. Informations conformes à la LCEN.',
  en: 'Home Nura legal notice: publisher, hosting, Amazon Associates disclosure and intellectual property terms. Complete legal information.',
  de: 'Impressum von Home Nura: Herausgeber, Hosting, Amazon-Partnerprogramm und Urheberrechtsinformationen gemäß §5 TMG.',
  es: 'Aviso legal de Home Nura: editor, alojamiento, programa de afiliados de Amazon y propiedad intelectual. Información completa conforme a la ley.',
  it: 'Note legali di Home Nura: editore, hosting, programma di affiliazione Amazon e proprietà intellettuale. Informazioni complete ai sensi di legge.',
  nl: 'Juridische kennisgeving van Home Nura: uitgever, hosting, Amazon-partnerprogramma en intellectueel eigendom. Volledige wettelijke informatie.',
  pl: 'Nota prawna serwisu Home Nura: wydawca, dostawca hostingu, program partnerski Amazon i własność intelektualna. Informacje zgodne z francuską ustawą LCEN.',
  sv: 'Juridisk information om Home Nura: utgivare, webbhotell, Amazons partnerprogram och immateriella rättigheter. Uppgifter enligt den franska lagen LCEN.',
  us: 'Home Nura legal notice: publisher, hosting, Amazon Associates disclosure and intellectual property terms. Complete legal information.',
  ca: 'Home Nura legal notice: publisher, hosting, Amazon Associates disclosure and intellectual property terms. Complete legal information.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const l = labels[safeLang] || labels.fr
  return buildPageMetadata({
    lang: safeLang,
    path: '/mentions-legales',
    title: `${l.title} | Home Nura`,
    description: metaDescriptions[safeLang] ?? metaDescriptions.fr,
    // Legal boilerplate — required for compliance (LCEN art. 6, §5 TMG,
    // etc.) but not useful in search results. Noindex via meta robots
    // rather than robots.txt disallow so Google can still read the
    // directive.
    index: false,
  })
}

// Single source of truth for legal entity info (LCEN article 6 compliance)
const publisher = {
  name: 'GROUPE SERENITE',
  legalForm: 'SARL',
  capital: '15 000 €',
  address: '60 Rue François 1er, 75008 Paris, France',
  rcs: 'Paris 500 511 373',
  siret: '500 511 373 00051',
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
    pricing: 'Prix et visuels des produits',
    pricingText: 'Home Nura n\'affiche ni les prix ni les photos des produits Amazon : les visuels de produits sont des illustrations neutres (catégorie, marque, modèle). Le prix, la disponibilité et les photos d\'un produit sont ceux affichés par Amazon au moment de votre visite et peuvent changer à tout moment.',
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
    pricing: 'Prices and product images',
    pricingText: 'Home Nura does not show Amazon prices or product photos: product visuals are neutral illustrations (category, brand, model). A product\'s price, availability and photos are those shown by Amazon at the time of your visit and may change at any time.',
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
    pricing: 'Preise und Produktbilder',
    pricingText: 'Home Nura zeigt weder Amazon-Preise noch Amazon-Produktfotos: Die Produktdarstellungen sind neutrale Illustrationen (Kategorie, Marke, Modell). Preis, Verfügbarkeit und Fotos eines Produkts sind die, die Amazon zum Zeitpunkt Ihres Besuchs anzeigt, und können sich jederzeit ändern.',
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
    pricing: 'Precios e imágenes de producto',
    pricingText: 'Home Nura no muestra precios ni fotos de productos de Amazon: los visuales de producto son ilustraciones neutras (categoría, marca, modelo). El precio, la disponibilidad y las fotos de un producto son los que muestra Amazon en el momento de su visita y pueden cambiar en cualquier momento.',
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
    pricing: 'Prezzi e immagini dei prodotti',
    pricingText: 'Home Nura non mostra prezzi né foto dei prodotti Amazon: le immagini dei prodotti sono illustrazioni neutre (categoria, marca, modello). Prezzo, disponibilità e foto di un prodotto sono quelli mostrati da Amazon al momento della visita e possono cambiare in qualsiasi momento.',
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
    pricing: 'Prijzen en productafbeeldingen',
    pricingText: 'Home Nura toont geen prijzen of productfoto\'s van Amazon: de productvisuals zijn neutrale illustraties (categorie, merk, model). Prijs, beschikbaarheid en foto\'s van een product zijn die welke Amazon toont op het moment van je bezoek en kunnen op elk moment veranderen.',
    ip: 'Intellectueel eigendom',
    ipText: 'Alle op deze site genoemde merknamen, logo\'s, afbeeldingen en productnamen zijn eigendom van hun respectieve eigenaren. Redactionele inhoud (teksten, analyses, ranglijsten) is auteursrechtelijk beschermd en mag niet worden gereproduceerd zonder voorafgaande schriftelijke toestemming.',
    back: 'Terug naar home',
  },
  pl: {
    title: 'Nota prawna',
    publisher: 'Wydawca',
    companyName: 'Nazwa firmy',
    legalForm: 'Forma prawna',
    capital: 'Kapitał zakładowy',
    registeredOffice: 'Siedziba',
    rcs: 'Rejestr handlowy (RCS)',
    siret: 'SIRET',
    vat: 'Numer VAT UE',
    director: 'Dyrektor publikacji',
    phone: 'Telefon',
    email: 'E-mail',
    website: 'Strona internetowa',
    hosting: 'Hosting',
    affiliation: 'Program partnerski',
    pricing: 'Ceny i zdjęcia produktów',
    pricingText: 'Home Nura nie wyświetla cen ani zdjęć produktów z Amazon: wizualizacje produktów to neutralne ilustracje (kategoria, marka, model). Cena, dostępność i zdjęcia produktu są takie, jakie Amazon pokazuje w chwili Twojej wizyty, i mogą się zmienić w każdej chwili.',
    ip: 'Własność intelektualna',
    ipText: 'Wszystkie nazwy marek, logotypy, wizualizacje i nazwy produktów wymienione na tej stronie są własnością ich właścicieli. Treści redakcyjne (teksty, analizy, rankingi) są chronione prawem autorskim i nie mogą być powielane bez uprzedniej pisemnej zgody.',
    back: 'Wróć na stronę główną',
  },
  sv: {
    title: 'Juridisk information',
    publisher: 'Utgivare',
    companyName: 'Företagsnamn',
    legalForm: 'Bolagsform',
    capital: 'Aktiekapital',
    registeredOffice: 'Registrerad adress',
    rcs: 'Handelsregister (RCS)',
    siret: 'SIRET',
    vat: 'Momsregistreringsnummer',
    director: 'Ansvarig utgivare',
    phone: 'Telefon',
    email: 'E-post',
    website: 'Webbplats',
    hosting: 'Webbhotell',
    affiliation: 'Partnerprogram',
    pricing: 'Priser och produktbilder',
    pricingText: 'Home Nura visar varken priser eller produktfoton från Amazon: produktbilderna är neutrala illustrationer (kategori, märke, modell). En produkts pris, tillgänglighet och bilder är de som Amazon visar vid ditt besök och kan ändras när som helst.',
    ip: 'Immateriella rättigheter',
    ipText: 'Alla varumärken, logotyper, bilder och produktnamn som nämns på webbplatsen tillhör respektive ägare. Det redaktionella innehållet (texter, analyser, topplistor) är skyddat av upphovsrätt och får inte återges utan skriftligt tillstånd i förväg.',
    back: 'Tillbaka till startsidan',
  },
  us: {
    title: 'Legal Notice',
    publisher: 'Publisher',
    companyName: 'Company name',
    legalForm: 'Entity type',
    capital: 'Share capital',
    registeredOffice: 'Headquarters',
    rcs: 'Trade and Companies Register (RCS)',
    siret: 'SIRET number',
    vat: 'EU VAT number',
    director: 'Publication director',
    phone: 'Phone',
    email: 'Email',
    website: 'Website',
    hosting: 'Hosting provider',
    affiliation: 'Affiliate program',
    pricing: 'Prices and product images',
    pricingText: 'Home Nura does not display Amazon\'s prices or product photos: the product images on our site are neutral illustrations (category, brand, model). A product\'s price, availability and photos are the ones Amazon shows at the time of your visit, and they can change at any time.',
    ip: 'Intellectual property',
    ipText: 'All brand names, logos, images and product names mentioned on this site are the property of their respective owners. Our editorial content (text, analysis and rankings) is protected by copyright and may not be reproduced without prior written permission.',
    back: 'Back to home',
  },
  ca: {
    title: 'Legal Notice',
    publisher: 'Publisher',
    companyName: 'Company name',
    legalForm: 'Business structure',
    capital: 'Share capital',
    registeredOffice: 'Registered office',
    rcs: 'Trade and Companies Register (RCS)',
    siret: 'SIRET number',
    vat: 'EU VAT number',
    director: 'Publication director',
    phone: 'Phone',
    email: 'Email',
    website: 'Website',
    hosting: 'Web hosting',
    affiliation: 'Affiliate program',
    pricing: 'Prices and product images',
    pricingText: 'Home Nura does not display Amazon prices or product photos: the product images on this site are neutral illustrations (category, brand, model). A product\'s price, availability and photos are the ones Amazon shows at the time of your visit, and they may change at any time.',
    ip: 'Intellectual property',
    ipText: 'All brand names, logos, images and product names mentioned on this site are the property of their respective owners. Our editorial content (text, analysis and rankings) is protected by copyright and may not be reproduced without prior written permission.',
    back: 'Back to home',
  },
}

export default async function MentionsLegales({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = labels[lang] || labels.fr
  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-clip">
      <script
        type="application/ld+json"
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
      <main id="main" className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">{t.title}</h1>

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
            <dd><a href={`tel:${publisher.phone.replace(/\s+/g, '')}`} className="text-brand-600 hover:underline">{publisher.phone}</a></dd>

            <dt className="font-semibold text-slate-900">{t.email}</dt>
            <dd><a href={`mailto:${publisher.email}`} className="text-brand-600 hover:underline">{publisher.email}</a></dd>

            <dt className="font-semibold text-slate-900">{t.website}</dt>
            <dd><a href={publisher.website} className="text-brand-600 hover:underline">{publisher.website}</a></dd>
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
          <p className="text-sm text-slate-600 leading-relaxed">{amazonAffiliationNotice(resolveLang(lang))}</p>
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
          <Link href={`/${lang}`} className="text-brand-600 font-bold hover:underline">
            &larr; {t.back}
          </Link>
        </div>
      </main>
      <SiteFooter currentLang={lang} />
    </div>
  )
}
