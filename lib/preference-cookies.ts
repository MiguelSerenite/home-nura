/**
 * The site's own functional cookies behind the country choice, as the
 * cookie policy (app/[lang]/politique-cookies) and the privacy policy's
 * cookie table (app/[lang]/politique-confidentialite) describe them, in
 * the ten languages. Strictly functional (a preference the visitor asked
 * for, or the country to suggest a version): no identifier, never read by
 * a third party, so no consent is asked (the banner's choice changes
 * nothing about them). Names and lifetimes come from lib/market-preference.ts
 * and proxy.ts; tests/lib/preference-cookies.test.ts keeps them in step.
 */

import type { Lang } from './i18n'
import { COUNTRY_COOKIE } from './i18n'
import { GEO_DISMISS_COOKIE, MARKET_COOKIE } from './market-preference'

export interface PreferenceCookieRow {
  name: string
  purpose: string
  duration: string
  provider: string
}

export interface PreferenceCookiesCopy {
  heading: string
  intro: string
  headName: string
  headPurpose: string
  headDuration: string
  rows: readonly PreferenceCookieRow[]
}

interface Texts {
  market: string
  dismissed: string
  country: string
  months: string
  hours: string
  provider: string
  heading: string
  intro: string
  headName: string
  headPurpose: string
  headDuration: string
}

function build(t: Texts): PreferenceCookiesCopy {
  return {
    heading: t.heading,
    intro: t.intro,
    headName: t.headName,
    headPurpose: t.headPurpose,
    headDuration: t.headDuration,
    rows: [
      { name: MARKET_COOKIE, purpose: t.market, duration: t.months, provider: t.provider },
      { name: GEO_DISMISS_COOKIE, purpose: t.dismissed, duration: t.months, provider: t.provider },
      { name: COUNTRY_COOKIE, purpose: t.country, duration: t.hours, provider: t.provider },
    ],
  }
}

const ENGLISH = build({
  market: 'Remembers the country you chose (selector, suggestion or the international entry page) so that version opens directly',
  dismissed: 'Remembers that you closed the country suggestion, so it is not shown again',
  country: 'Your connection country (derived from the IP address by our host, without the address itself), to suggest the right version',
  months: '12 months',
  hours: '24 hours',
  provider: 'Home Nura (functional)',
  heading: 'Preference cookies (functional)',
  intro: 'They only serve to show the version of the site for your country. They hold no identifier and no third party reads them, so they need no consent.',
  headName: 'Cookie',
  headPurpose: 'Purpose',
  headDuration: 'Duration',
})

export const PREFERENCE_COOKIES: Readonly<Record<Lang, PreferenceCookiesCopy>> = {
  fr: build({
    market: "Mémorise le pays choisi (sélecteur, suggestion ou page d'accueil internationale) pour ouvrir directement cette version",
    dismissed: "Mémorise que vous avez fermé la suggestion de pays, pour ne plus l'afficher",
    country: "Pays de connexion (déduit de l'adresse IP par l'hébergeur, sans l'adresse elle-même), pour proposer la bonne version",
    months: '12 mois',
    hours: '24 heures',
    provider: 'Home Nura (fonctionnel)',
    heading: 'Cookies de préférence (fonctionnels)',
    intro: "Ils servent seulement à afficher la version du site de votre pays. Ils ne contiennent aucun identifiant et aucun tiers ne les lit : ils ne demandent donc pas de consentement.",
    headName: 'Cookie',
    headPurpose: 'Finalité',
    headDuration: 'Durée',
  }),
  en: ENGLISH,
  de: build({
    market: 'Speichert das gewählte Land (Auswahl, Vorschlag oder internationale Startseite), damit diese Ausgabe direkt öffnet',
    dismissed: 'Speichert, dass Sie den Ländervorschlag geschlossen haben, damit er nicht erneut erscheint',
    country: 'Land der Verbindung (vom Hoster aus der IP-Adresse abgeleitet, ohne die Adresse selbst), um die passende Ausgabe vorzuschlagen',
    months: '12 Monate',
    hours: '24 Stunden',
    provider: 'Home Nura (funktional)',
    heading: 'Präferenz-Cookies (funktional)',
    intro: 'Sie dienen nur dazu, die Ausgabe der Website für Ihr Land anzuzeigen. Sie enthalten keine Kennung und werden von keinem Dritten gelesen, daher ist keine Einwilligung nötig.',
    headName: 'Cookie',
    headPurpose: 'Zweck',
    headDuration: 'Dauer',
  }),
  es: build({
    market: 'Recuerda el país elegido (selector, sugerencia o página de entrada internacional) para abrir directamente esa edición',
    dismissed: 'Recuerda que cerraste la sugerencia de país para no volver a mostrarla',
    country: 'País de conexión (deducido de la dirección IP por el alojamiento, sin la dirección), para sugerir la edición adecuada',
    months: '12 meses',
    hours: '24 horas',
    provider: 'Home Nura (funcional)',
    heading: 'Cookies de preferencia (funcionales)',
    intro: 'Solo sirven para mostrar la edición del sitio de tu país. No contienen ningún identificador y ningún tercero las lee, por lo que no requieren consentimiento.',
    headName: 'Cookie',
    headPurpose: 'Finalidad',
    headDuration: 'Duración',
  }),
  it: build({
    market: "Memorizza il paese scelto (selettore, suggerimento o pagina d'ingresso internazionale) per aprire subito quell'edizione",
    dismissed: 'Memorizza che hai chiuso il suggerimento di paese, per non mostrarlo più',
    country: "Paese di connessione (ricavato dall'indirizzo IP dall'hosting, senza l'indirizzo stesso), per suggerire l'edizione giusta",
    months: '12 mesi',
    hours: '24 ore',
    provider: 'Home Nura (funzionale)',
    heading: 'Cookie di preferenza (funzionali)',
    intro: "Servono solo a mostrare l'edizione del sito del tuo paese. Non contengono alcun identificativo e nessun terzo li legge, quindi non richiedono consenso.",
    headName: 'Cookie',
    headPurpose: 'Finalità',
    headDuration: 'Durata',
  }),
  nl: build({
    market: 'Onthoudt het gekozen land (keuzemenu, suggestie of internationale startpagina) zodat die editie direct opent',
    dismissed: 'Onthoudt dat u de landsuggestie hebt gesloten, zodat die niet meer verschijnt',
    country: 'Land van de verbinding (door de host afgeleid uit het IP-adres, zonder het adres zelf), om de juiste editie voor te stellen',
    months: '12 maanden',
    hours: '24 uur',
    provider: 'Home Nura (functioneel)',
    heading: 'Voorkeurscookies (functioneel)',
    intro: 'Ze dienen alleen om de editie van de site voor uw land te tonen. Ze bevatten geen identificatie en geen derde leest ze, dus er is geen toestemming nodig.',
    headName: 'Cookie',
    headPurpose: 'Doel',
    headDuration: 'Duur',
  }),
  pl: build({
    market: 'Zapamiętuje wybrany kraj (przełącznik, propozycja lub międzynarodowa strona startowa), aby od razu otwierać tę wersję',
    dismissed: 'Zapamiętuje, że propozycja kraju została zamknięta, aby więcej jej nie pokazywać',
    country: 'Kraj połączenia (ustalany przez hosting na podstawie adresu IP, bez samego adresu), aby zaproponować właściwą wersję',
    months: '12 miesięcy',
    hours: '24 godziny',
    provider: 'Home Nura (funkcjonalny)',
    heading: 'Pliki cookie z preferencjami (funkcjonalne)',
    intro: 'Służą wyłącznie do wyświetlania wersji serwisu dla Twojego kraju. Nie zawierają żadnego identyfikatora i nie odczytuje ich żaden podmiot trzeci, dlatego nie wymagają zgody.',
    headName: 'Plik cookie',
    headPurpose: 'Cel',
    headDuration: 'Czas trwania',
  }),
  sv: build({
    market: 'Kommer ihåg landet du valt (väljaren, förslaget eller den internationella startsidan) så att den utgåvan öppnas direkt',
    dismissed: 'Kommer ihåg att du stängt förslaget på land, så att det inte visas igen',
    country: 'Landet du ansluter från (härlett ur IP-adressen av vårt webbhotell, utan själva adressen), för att föreslå rätt utgåva',
    months: '12 månader',
    hours: '24 timmar',
    provider: 'Home Nura (funktionell)',
    heading: 'Preferenscookies (funktionella)',
    intro: 'De används bara för att visa webbplatsens utgåva för ditt land. De innehåller ingen identifierare och ingen tredje part läser dem, så inget samtycke behövs.',
    headName: 'Cookie',
    headPurpose: 'Syfte',
    headDuration: 'Varaktighet',
  }),
  us: ENGLISH,
  ca: ENGLISH,
}
