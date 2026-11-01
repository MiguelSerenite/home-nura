import Navbar from '@/components/Navbar'
import { SiteFooter } from '@/components/ui'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLang } from '@/lib/i18n'


const metaDescriptions: Record<string, string> = {
  fr: 'Politique de cookies de Home Nura : cookies strictement nécessaires, cookies Amazon d\'affiliation, gestion et paramètres navigateur. Conforme RGPD.',
  en: 'Home Nura cookie policy: strictly necessary cookies, Amazon affiliate cookies, how to manage cookie preferences in your browser. GDPR compliant.',
  de: 'Cookie-Richtlinie von Home Nura: unbedingt erforderliche Cookies, Amazon-Partnercookies, Cookie-Verwaltung im Browser. DSGVO-konform.',
  es: 'Política de cookies de Home Nura: cookies estrictamente necesarias, cookies de afiliación de Amazon y gestión desde tu navegador. Conforme al RGPD.',
  it: 'Politica dei cookie di Home Nura: cookie strettamente necessari, cookie di affiliazione Amazon e gestione dal browser. Conforme al GDPR.',
  nl: 'Cookiebeleid van Home Nura: strikt noodzakelijke cookies, Amazon-affiliate cookies en beheer via uw browser. AVG-conform.',
  pl: 'Polityka plików cookie serwisu Home Nura: niezbędne pliki cookie, afiliacyjne pliki cookie Amazon i zarządzanie nimi w przeglądarce. Zgodna z RODO.',
  sv: 'Home Nuras cookiepolicy: strikt nödvändiga cookies, cookies från Amazons affiliatelänkar och hur du hanterar cookies i din webbläsare. Följer GDPR.',
  us: 'Home Nura cookie policy: strictly necessary cookies, Amazon affiliate cookies, how to manage cookie preferences in your browser. GDPR compliant.',
  ca: 'Home Nura cookie policy: strictly necessary cookies, Amazon affiliate cookies, how to manage cookie preferences in your browser. GDPR compliant.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = content[safeLang] || content.fr
  return buildPageMetadata({
    lang: safeLang,
    path: '/politique-cookies',
    title: `${c.title} | Home Nura`,
    description: metaDescriptions[safeLang] ?? metaDescriptions.fr,
    // Cookie policy — ePrivacy compliance page, not a search target.
    // Noindex via meta robots.
    index: false,
  })
}

const content: Record<string, { title: string; body: string }> = {
  fr: {
    title: 'Politique de Cookies',
    body: `Dernière mise à jour : avril 2026\n\nCette politique explique comment Home Nura utilise les cookies sur son site web.\n\nQu'est-ce qu'un cookie ?\nUn cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Les cookies permettent au site de fonctionner correctement et d'améliorer votre expérience.\n\nCookies que nous utilisons\n\nCookies strictement nécessaires : Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.\n\nCookies tiers (Amazon) : Lorsque vous cliquez sur un lien affilié vers Amazon, des cookies sont déposés par Amazon pour suivre votre achat et nous attribuer la commission d'affiliation. Ces cookies sont soumis à la politique de cookies d'Amazon.\n\nGestion des cookies\nVous pouvez contrôler et supprimer les cookies via les paramètres de votre navigateur. La suppression des cookies peut affecter votre expérience de navigation.\n\nPour plus d'informations sur la gestion des cookies, consultez l'aide de votre navigateur.\n\nContact\nPour toute question concernant notre utilisation des cookies : contact@homenura.com`,
  },
  en: {
    title: 'Cookie Policy',
    body: `Last updated: April 2026\n\nThis policy explains how Home Nura uses cookies on its website.\n\nWhat is a cookie?\nA cookie is a small text file stored on your device when you visit a website. Cookies help the site function properly and improve your experience.\n\nCookies we use\n\nStrictly necessary cookies: These cookies are essential for the site to function. They cannot be disabled.\n\nThird-party cookies (Amazon): When you click an affiliate link to Amazon, cookies are set by Amazon to track your purchase and attribute the affiliate commission to us. These cookies are subject to Amazon's cookie policy.\n\nManaging cookies\nYou can control and delete cookies through your browser settings. Deleting cookies may affect your browsing experience.\n\nFor more information on managing cookies, see your browser's help documentation.\n\nContact\nFor any questions about our use of cookies: contact@homenura.com`,
  },
  de: {
    title: 'Cookie-Richtlinie',
    body: `Letzte Aktualisierung: April 2026\n\nDiese Richtlinie erklärt, wie Home Nura Cookies auf seiner Website verwendet.\n\nWas ist ein Cookie?\nEin Cookie ist eine kleine Textdatei, die auf Ihrem Gerät gespeichert wird, wenn Sie eine Website besuchen. Cookies helfen der Website, ordnungsgemäß zu funktionieren und Ihr Erlebnis zu verbessern.\n\nVerwendete Cookies\n\nStreng notwendige Cookies: Diese Cookies sind für die Funktion der Website unerlässlich. Sie können nicht deaktiviert werden.\n\nDrittanbieter-Cookies (Amazon): Wenn Sie auf einen Affiliate-Link zu Amazon klicken, werden Cookies von Amazon gesetzt, um Ihren Kauf zu verfolgen und uns die Affiliate-Provision zuzuordnen. Diese Cookies unterliegen der Cookie-Richtlinie von Amazon.\n\nCookies verwalten\nSie können Cookies über die Einstellungen Ihres Browsers steuern und löschen. Das Löschen von Cookies kann Ihr Browsing-Erlebnis beeinträchtigen.\n\nKontakt\nBei Fragen zu unserer Verwendung von Cookies: contact@homenura.com`,
  },
  es: {
    title: 'Política de Cookies',
    body: `Última actualización: abril 2026\n\nEsta política explica cómo Home Nura utiliza cookies en su sitio web.\n\n¿Qué es una cookie?\nUna cookie es un pequeño archivo de texto almacenado en su dispositivo cuando visita un sitio web. Las cookies ayudan al sitio a funcionar correctamente y mejoran su experiencia.\n\nCookies que utilizamos\n\nCookies estrictamente necesarias: Estas cookies son esenciales para el funcionamiento del sitio. No pueden ser desactivadas.\n\nCookies de terceros (Amazon): Cuando hace clic en un enlace de afiliado a Amazon, Amazon establece cookies para rastrear su compra y atribuirnos la comisión de afiliación. Estas cookies están sujetas a la política de cookies de Amazon.\n\nGestión de cookies\nPuede controlar y eliminar las cookies a través de la configuración de su navegador. La eliminación de cookies puede afectar su experiencia de navegación.\n\nContacto\nPara cualquier pregunta sobre nuestro uso de cookies: contact@homenura.com`,
  },
  it: {
    title: 'Politica sui Cookie',
    body: `Ultimo aggiornamento: aprile 2026\n\nQuesta politica spiega come Home Nura utilizza i cookie sul proprio sito web.\n\nCos'è un cookie?\nUn cookie è un piccolo file di testo memorizzato sul tuo dispositivo quando visiti un sito web. I cookie aiutano il sito a funzionare correttamente e migliorano la tua esperienza.\n\nCookie che utilizziamo\n\nCookie strettamente necessari: Questi cookie sono essenziali per il funzionamento del sito. Non possono essere disattivati.\n\nCookie di terze parti (Amazon): Quando clicchi su un link affiliato verso Amazon, vengono impostati cookie da Amazon per tracciare il tuo acquisto e attribuirci la commissione di affiliazione. Questi cookie sono soggetti alla politica sui cookie di Amazon.\n\nGestione dei cookie\nPuoi controllare ed eliminare i cookie tramite le impostazioni del tuo browser. L'eliminazione dei cookie può influire sulla tua esperienza di navigazione.\n\nContatto\nPer qualsiasi domanda sull'uso dei cookie: contact@homenura.com`,
  },
  nl: {
    title: 'Cookiebeleid',
    body: `Laatst bijgewerkt: april 2026\n\nDit beleid legt uit hoe Home Nura cookies gebruikt op zijn website.\n\nWat is een cookie?\nEen cookie is een klein tekstbestand dat op uw apparaat wordt opgeslagen wanneer u een website bezoekt. Cookies helpen de site correct te functioneren en verbeteren uw ervaring.\n\nCookies die wij gebruiken\n\nStrikt noodzakelijke cookies: Deze cookies zijn essentieel voor de werking van de site. Ze kunnen niet worden uitgeschakeld.\n\nCookies van derden (Amazon): Wanneer u op een affiliate-link naar Amazon klikt, worden cookies door Amazon geplaatst om uw aankoop te volgen en de affiliate-commissie aan ons toe te schrijven. Deze cookies zijn onderworpen aan het cookiebeleid van Amazon.\n\nCookies beheren\nU kunt cookies beheren en verwijderen via uw browserinstellingen. Het verwijderen van cookies kan uw browse-ervaring beïnvloeden.\n\nContact\nVoor vragen over ons gebruik van cookies: contact@homenura.com`,
  },
  pl: {
    title: 'Polityka plików cookie',
    body: 'Ostatnia aktualizacja: kwiecień 2026\n\nW tym dokumencie wyjaśniamy, jak serwis Home Nura korzysta z plików cookie.\n\nCzym jest plik cookie?\nPlik cookie to mały plik tekstowy, który zapisuje się na Twoim urządzeniu, gdy odwiedzasz stronę internetową. Dzięki plikom cookie serwis działa prawidłowo i wygodniej się z niego korzysta.\n\nJakich plików cookie używamy\n\nNiezbędne pliki cookie: bez nich serwis nie może działać. Nie można ich wyłączyć.\n\nPliki cookie stron trzecich (Amazon): gdy klikniesz link afiliacyjny prowadzący do sklepu Amazon, Amazon zapisuje pliki cookie, które pozwalają śledzić Twój zakup i przypisać nam prowizję afiliacyjną. Te pliki cookie podlegają polityce plików cookie Amazon.\n\nZarządzanie plikami cookie\nPliki cookie możesz kontrolować i usuwać w ustawieniach przeglądarki. Usunięcie plików cookie może wpłynąć na komfort przeglądania.\n\nWięcej informacji o zarządzaniu plikami cookie znajdziesz w pomocy swojej przeglądarki.\n\nKontakt\nJeśli masz pytania dotyczące plików cookie w naszym serwisie, napisz na adres: contact@homenura.com',
  },
  sv: {
    title: 'Cookiepolicy',
    body: 'Senast uppdaterad: april 2026\n\nDen här policyn förklarar hur Home Nura använder cookies på sin webbplats.\n\nVad är en cookie?\nEn cookie är en liten textfil som sparas på din enhet när du besöker en webbplats. Cookies gör att webbplatsen fungerar som den ska och förbättrar din upplevelse.\n\nCookies vi använder\n\nStrikt nödvändiga cookies: De här cookies behövs för att webbplatsen ska fungera. De går inte att stänga av.\n\nCookies från tredje part (Amazon): När du klickar på en affiliatelänk till Amazon placerar Amazon cookies som spårar ditt köp och tillskriver oss provisionen. De här cookies omfattas av Amazons cookiepolicy.\n\nHantera cookies\nDu kan styra och radera cookies i webbläsarens inställningar. Om du raderar cookies kan det påverka hur webbplatser fungerar när du surfar.\n\nMer information om hur du hanterar cookies hittar du i webbläsarens hjälpavsnitt.\n\nKontakt\nFrågor om hur vi använder cookies: contact@homenura.com',
  },
  us: {
    title: 'Cookie Policy',
    body: 'Last updated: April 2026\n\nThis policy explains how Home Nura uses cookies on its website.\n\nWhat is a cookie?\nA cookie is a small text file stored on your device when you visit a website. Cookies help the site function properly and improve your experience.\n\nCookies we use\n\nStrictly necessary cookies: These cookies are essential for the site to function. They cannot be disabled.\n\nThird-party cookies (Amazon): When you click an affiliate link to Amazon, cookies are set by Amazon to track your purchase and attribute the affiliate commission to us. These cookies are subject to Amazon\'s cookie policy.\n\nManaging cookies\nYou can control and delete cookies through your browser settings. Deleting cookies may affect your browsing experience.\n\nFor more information on managing cookies, see your browser\'s help documentation.\n\nContact\nFor any questions about our use of cookies: contact@homenura.com',
  },
  ca: {
    title: 'Cookie Policy',
    body: 'Last updated: April 2026\n\nThis policy explains how Home Nura uses cookies on its website.\n\nWhat is a cookie?\nA cookie is a small text file stored on your device when you visit a website. Cookies help the site function properly and improve your experience.\n\nCookies we use\n\nStrictly necessary cookies: These cookies are essential for the site to function. They cannot be disabled.\n\nThird-party cookies (Amazon): When you click an affiliate link to Amazon, cookies are set by Amazon to track your purchase and attribute the affiliate commission to us. These cookies are subject to Amazon\'s cookie policy.\n\nManaging cookies\nYou can control and delete cookies through your browser settings. Deleting cookies may affect your browsing experience.\n\nFor more information on managing cookies, see your browser\'s help documentation.\n\nContact\nFor any questions about our use of cookies: contact@homenura.com',
  },
}

export default async function PolitiqueCookies({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const c = content[lang] || content.fr
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
            { '@type': 'ListItem', position: 2, name: 'Politique cookies', item: `https://homenura.com/${lang}/politique-cookies` },
          ],
        }) }}
      />
      <Navbar currentLang={lang} />
      <main id="main" className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">{c.title}</h1>
        <div className="prose prose-slate max-w-none whitespace-pre-line text-slate-600 leading-relaxed">
          {c.body}
        </div>
        <div className="mt-12">
          <Link href={`/${lang}`} className="text-brand-600 font-bold hover:underline">
            &larr; {lang === 'fr' ? 'Retour à l\'accueil' : lang === 'de' ? 'Zurück zur Startseite' : lang === 'es' ? 'Volver al inicio' : lang === 'it' ? 'Torna alla home' : lang === 'nl' ? 'Terug naar home' : lang === 'pl' ? 'Powrót do strony głównej' : lang === 'sv' ? 'Tillbaka till startsidan' : lang === 'us' ? 'Back to home' : lang === 'ca' ? 'Back to home' : 'Back to home'}
          </Link>
        </div>
      </main>
      <SiteFooter currentLang={lang} />
    </div>
  )
}
