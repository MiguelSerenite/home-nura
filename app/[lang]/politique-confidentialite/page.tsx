import Navbar from '@/components/Navbar'
import Link from 'next/link'

const content: Record<string, { title: string; body: string }> = {
  fr: {
    title: 'Politique de Confidentialité',
    body: `Dernière mise à jour : avril 2026\n\nHome Nura respecte votre vie privée. Cette politique explique comment nous traitons vos données lorsque vous visitez notre site.\n\nDonnées collectées\nNous ne collectons aucune donnée personnelle directement. Notre site n'utilise pas de formulaires d'inscription ni de comptes utilisateurs.\n\nCookies\nNous utilisons des cookies strictement nécessaires au fonctionnement du site. Des cookies tiers peuvent être déposés par Amazon lors de l'utilisation des liens affiliés. Consultez notre Politique Cookies pour plus de détails.\n\nLiens affiliés\nLorsque vous cliquez sur un lien vers Amazon, vous êtes redirigé vers le site Amazon correspondant à votre pays. Amazon peut alors collecter des données selon sa propre politique de confidentialité.\n\nHébergement et analytics\nLe site est hébergé par Vercel Inc. (USA). Vercel peut collecter des données techniques anonymisées (adresse IP, type de navigateur) à des fins de performance et sécurité.\n\nVos droits (RGPD)\nConformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants : droit d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité et d'opposition.\n\nPour exercer vos droits, contactez-nous à : contact@homenura.com\n\nNous nous engageons à répondre dans un délai de 30 jours.`,
  },
  en: {
    title: 'Privacy Policy',
    body: `Last updated: April 2026\n\nHome Nura respects your privacy. This policy explains how we handle your data when you visit our site.\n\nData collected\nWe do not collect any personal data directly. Our site does not use registration forms or user accounts.\n\nCookies\nWe use only strictly necessary cookies for site functionality. Third-party cookies may be set by Amazon when you use affiliate links. See our Cookie Policy for details.\n\nAffiliate links\nWhen you click a link to Amazon, you are redirected to the Amazon site for your country. Amazon may then collect data according to its own privacy policy.\n\nHosting and analytics\nThe site is hosted by Vercel Inc. (USA). Vercel may collect anonymised technical data (IP address, browser type) for performance and security purposes.\n\nYour rights (GDPR)\nUnder the General Data Protection Regulation (GDPR), you have the following rights: access, rectification, erasure, restriction of processing, data portability and objection.\n\nTo exercise your rights, contact us at: contact@homenura.com\n\nWe commit to responding within 30 days.`,
  },
  de: {
    title: 'Datenschutzerklärung',
    body: `Letzte Aktualisierung: April 2026\n\nHome Nura respektiert Ihre Privatsphäre. Diese Richtlinie erklärt, wie wir Ihre Daten verarbeiten, wenn Sie unsere Website besuchen.\n\nErhobene Daten\nWir erheben keine personenbezogenen Daten direkt. Unsere Website verwendet keine Registrierungsformulare oder Benutzerkonten.\n\nCookies\nWir verwenden nur streng notwendige Cookies für die Website-Funktionalität. Drittanbieter-Cookies können von Amazon gesetzt werden, wenn Sie Affiliate-Links verwenden. Weitere Details finden Sie in unserer Cookie-Richtlinie.\n\nAffiliate-Links\nWenn Sie auf einen Link zu Amazon klicken, werden Sie zur Amazon-Website Ihres Landes weitergeleitet. Amazon kann dann Daten gemäß seiner eigenen Datenschutzrichtlinie erheben.\n\nHosting und Analysen\nDie Website wird von Vercel Inc. (USA) gehostet. Vercel kann anonymisierte technische Daten (IP-Adresse, Browsertyp) zu Leistungs- und Sicherheitszwecken erheben.\n\nIhre Rechte (DSGVO)\nGemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie folgende Rechte: Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.\n\nUm Ihre Rechte auszuüben, kontaktieren Sie uns unter: contact@homenura.com\n\nWir verpflichten uns, innerhalb von 30 Tagen zu antworten.`,
  },
  es: {
    title: 'Política de Privacidad',
    body: `Última actualización: abril 2026\n\nHome Nura respeta su privacidad. Esta política explica cómo tratamos sus datos cuando visita nuestro sitio.\n\nDatos recopilados\nNo recopilamos datos personales directamente. Nuestro sitio no utiliza formularios de registro ni cuentas de usuario.\n\nCookies\nUtilizamos solo cookies estrictamente necesarias para la funcionalidad del sitio. Las cookies de terceros pueden ser establecidas por Amazon cuando utiliza enlaces de afiliados. Consulte nuestra Política de Cookies para más detalles.\n\nEnlaces de afiliados\nCuando hace clic en un enlace a Amazon, es redirigido al sitio de Amazon de su país. Amazon puede entonces recopilar datos según su propia política de privacidad.\n\nAlojamiento y análisis\nEl sitio está alojado por Vercel Inc. (EE.UU.). Vercel puede recopilar datos técnicos anonimizados (dirección IP, tipo de navegador) con fines de rendimiento y seguridad.\n\nSus derechos (RGPD)\nDe acuerdo con el Reglamento General de Protección de Datos (RGPD), usted tiene los siguientes derechos: acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición.\n\nPara ejercer sus derechos, contáctenos en: contact@homenura.com\n\nNos comprometemos a responder en un plazo de 30 días.`,
  },
  it: {
    title: 'Informativa sulla Privacy',
    body: `Ultimo aggiornamento: aprile 2026\n\nHome Nura rispetta la tua privacy. Questa informativa spiega come trattiamo i tuoi dati quando visiti il nostro sito.\n\nDati raccolti\nNon raccogliamo dati personali direttamente. Il nostro sito non utilizza moduli di registrazione né account utente.\n\nCookie\nUtilizziamo solo cookie strettamente necessari per la funzionalità del sito. Cookie di terze parti possono essere impostati da Amazon quando utilizzi i link affiliati. Consulta la nostra Politica sui Cookie per i dettagli.\n\nLink affiliati\nQuando clicchi su un link verso Amazon, vieni reindirizzato al sito Amazon del tuo paese. Amazon può quindi raccogliere dati secondo la propria informativa sulla privacy.\n\nHosting e analisi\nIl sito è ospitato da Vercel Inc. (USA). Vercel può raccogliere dati tecnici anonimizzati (indirizzo IP, tipo di browser) per scopi di prestazione e sicurezza.\n\nI tuoi diritti (GDPR)\nAi sensi del Regolamento Generale sulla Protezione dei Dati (GDPR), hai i seguenti diritti: accesso, rettifica, cancellazione, limitazione del trattamento, portabilità dei dati e opposizione.\n\nPer esercitare i tuoi diritti, contattaci a: contact@homenura.com\n\nCi impegniamo a rispondere entro 30 giorni.`,
  },
  nl: {
    title: 'Privacybeleid',
    body: `Laatst bijgewerkt: april 2026\n\nHome Nura respecteert uw privacy. Dit beleid legt uit hoe wij uw gegevens verwerken wanneer u onze site bezoekt.\n\nVerzamelde gegevens\nWij verzamelen geen persoonlijke gegevens rechtstreeks. Onze site maakt geen gebruik van registratieformulieren of gebruikersaccounts.\n\nCookies\nWij gebruiken alleen strikt noodzakelijke cookies voor de werking van de site. Cookies van derden kunnen worden geplaatst door Amazon wanneer u affiliate-links gebruikt. Zie ons Cookiebeleid voor meer details.\n\nAffiliate-links\nWanneer u op een link naar Amazon klikt, wordt u doorgestuurd naar de Amazon-website van uw land. Amazon kan dan gegevens verzamelen volgens hun eigen privacybeleid.\n\nHosting en analyse\nDe site wordt gehost door Vercel Inc. (VS). Vercel kan geanonimiseerde technische gegevens verzamelen (IP-adres, browsertype) voor prestatie- en beveiligingsdoeleinden.\n\nUw rechten (AVG)\nOp grond van de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten: inzage, rectificatie, wissing, beperking van verwerking, gegevensoverdraagbaarheid en bezwaar.\n\nOm uw rechten uit te oefenen, neem contact met ons op via: contact@homenura.com\n\nWij verbinden ons ertoe binnen 30 dagen te antwoorden.`,
  },
}

export default async function PolitiqueConfidentialite({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const c = content[lang] || content.fr

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${lang}` },
            { '@type': 'ListItem', position: 2, name: 'Politique de confidentialité', item: `https://homenura.com/${lang}/politique-confidentialite` },
          ],
        }) }}
      />
      <Navbar currentLang={lang} />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-black mb-8">{c.title}</h1>
        <div className="prose prose-slate max-w-none whitespace-pre-line text-slate-600 leading-relaxed">
          {c.body}
        </div>
        <div className="mt-12">
          <Link href={`/${lang}`} className="text-blue-600 font-bold hover:underline">
            &larr; {lang === 'fr' ? 'Retour à l\'accueil' : lang === 'de' ? 'Zurück zur Startseite' : lang === 'es' ? 'Volver al inicio' : lang === 'it' ? 'Torna alla home' : lang === 'nl' ? 'Terug naar home' : 'Back to home'}
          </Link>
        </div>
      </main>
    </div>
  )
}
