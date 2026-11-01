/**
 * Copy of the entry page (/), in the language of the version proposed
 * first (lib/country-entry/choices.ts copyLang), English otherwise (and
 * for crawlers). Each version's own card is written in its own language
 * (MARKET_VERSIONS).
 */

import type { Lang } from '@/lib/i18n'

export interface EntryCopy {
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  /** Heading of the proposed versions (IP country). */
  suggested: string
  /** Heading of the other versions, under the proposed ones. */
  others: string
  /** Heading of the list when nothing is proposed. */
  all: string
  /** Verb of the proposed version's big button. */
  enter: string
  /** What remembering the choice means. */
  note: string
  skip: string
  legal: string
  cookies: string
}

const ENGLISH: EntryCopy = {
  metaTitle: 'Home Nura | Choose your country',
  metaDescription: 'Independent smart home buying guides for ten countries in Europe and North America. Pick yours: the guides, models and buying links follow it.',
  title: 'Choose your country',
  intro: 'Ten versions, one per country: the guides, the models and the buying links follow the one you pick.',
  suggested: 'Suggested for your location',
  others: 'Other countries',
  all: 'All countries',
  enter: 'Continue',
  note: 'Your choice is remembered on this device (a 12-month preference cookie, no tracking). You can change country at the top of every page.',
  skip: 'Skip to content',
  legal: 'Legal notice',
  cookies: 'Cookies',
}

export const ENTRY_COPY: Readonly<Record<Lang, EntryCopy>> = {
  fr: {
    metaTitle: 'Home Nura | Choisissez votre pays',
    metaDescription: "La maison connectée comparée dans dix pays d'Europe et d'Amérique du Nord. Choisissez le vôtre : guides, modèles et liens d'achat le suivent.",
    title: 'Choisissez votre pays',
    intro: "Dix versions, une par pays : les guides, les modèles et les liens d'achat suivent celle que vous choisissez.",
    suggested: "Proposé d'après votre position",
    others: 'Autres pays',
    all: 'Tous les pays',
    enter: 'Continuer',
    note: 'Votre choix est mémorisé sur cet appareil (cookie de préférence de 12 mois, sans suivi). Vous pourrez changer de pays en haut de chaque page.',
    skip: 'Aller au contenu',
    legal: 'Mentions légales',
    cookies: 'Cookies',
  },
  de: {
    metaTitle: 'Home Nura | Wählen Sie Ihr Land',
    metaDescription: 'Unabhängige Smart-Home-Vergleiche für zehn Länder in Europa und Nordamerika. Wählen Sie Ihr Land: Ratgeber, Modelle und Kauflinks folgen ihm.',
    title: 'Wählen Sie Ihr Land',
    intro: 'Zehn Ausgaben, eine pro Land: Ratgeber, Modelle und Kauflinks richten sich nach der gewählten Ausgabe.',
    suggested: 'Vorschlag für Ihren Standort',
    others: 'Weitere Länder',
    all: 'Alle Länder',
    enter: 'Weiter',
    note: 'Ihre Wahl wird auf diesem Gerät gespeichert (Präferenz-Cookie, 12 Monate, kein Tracking). Das Land wechseln Sie oben auf jeder Seite.',
    skip: 'Zum Inhalt springen',
    legal: 'Impressum',
    cookies: 'Cookies',
  },
  en: ENGLISH,
  es: {
    metaTitle: 'Home Nura | Elige tu país',
    metaDescription: 'Comparativas independientes del hogar conectado para diez países de Europa y Norteamérica. Elige el tuyo: guías, modelos y enlaces lo siguen.',
    title: 'Elige tu país',
    intro: 'Diez ediciones, una por país: las guías, los modelos y los enlaces de compra siguen la que elijas.',
    suggested: 'Sugerido según tu ubicación',
    others: 'Otros países',
    all: 'Todos los países',
    enter: 'Continuar',
    note: 'Tu elección se guarda en este dispositivo (cookie de preferencia de 12 meses, sin seguimiento). Puedes cambiar de país arriba en cada página.',
    skip: 'Ir al contenido',
    legal: 'Aviso legal',
    cookies: 'Cookies',
  },
  it: {
    metaTitle: 'Home Nura | Scegli il tuo paese',
    metaDescription: "Confronti indipendenti sulla casa connessa per dieci paesi tra Europa e Nord America. Scegli il tuo: guide, modelli e link d'acquisto lo seguono.",
    title: 'Scegli il tuo paese',
    intro: "Dieci edizioni, una per paese: guide, modelli e link d'acquisto seguono quella che scegli.",
    suggested: 'Suggerito in base alla tua posizione',
    others: 'Altri paesi',
    all: 'Tutti i paesi',
    enter: 'Continua',
    note: 'La tua scelta resta memorizzata su questo dispositivo (cookie di preferenza di 12 mesi, nessun tracciamento). Puoi cambiare paese in alto in ogni pagina.',
    skip: 'Vai al contenuto',
    legal: 'Note legali',
    cookies: 'Cookie',
  },
  nl: {
    metaTitle: 'Home Nura | Kies uw land',
    metaDescription: 'Onafhankelijke vergelijkingen van het slimme huis voor tien landen in Europa en Noord-Amerika. Kies uw land: gidsen, modellen en kooplinks volgen.',
    title: 'Kies uw land',
    intro: 'Tien edities, één per land: de gidsen, de modellen en de kooplinks volgen de editie die u kiest.',
    suggested: 'Voorgesteld op basis van uw locatie',
    others: 'Andere landen',
    all: 'Alle landen',
    enter: 'Doorgaan',
    note: 'Uw keuze wordt op dit apparaat onthouden (voorkeurscookie van 12 maanden, geen tracking). U wisselt van land bovenaan elke pagina.',
    skip: 'Naar de inhoud',
    legal: 'Juridische informatie',
    cookies: 'Cookies',
  },
  pl: {
    metaTitle: 'Home Nura | Wybierz swój kraj',
    metaDescription: 'Niezależne porównania inteligentnego domu dla dziesięciu krajów Europy i Ameryki Północnej. Wybierz swój: poradniki, modele i linki się dopasują.',
    title: 'Wybierz swój kraj',
    intro: 'Dziesięć wersji, po jednej na kraj: poradniki, modele i linki zakupowe dopasowują się do wybranej.',
    suggested: 'Propozycja na podstawie Twojej lokalizacji',
    others: 'Pozostałe kraje',
    all: 'Wszystkie kraje',
    enter: 'Dalej',
    note: 'Twój wybór zostanie zapamiętany na tym urządzeniu (plik cookie z preferencją na 12 miesięcy, bez śledzenia). Kraj zmienisz u góry każdej strony.',
    skip: 'Przejdź do treści',
    legal: 'Nota prawna',
    cookies: 'Pliki cookie',
  },
  sv: {
    metaTitle: 'Home Nura | Välj ditt land',
    metaDescription: 'Oberoende jämförelser av smarta hem för tio länder i Europa och Nordamerika. Välj ditt land: guider, modeller och köplänkar följer ditt val.',
    title: 'Välj ditt land',
    intro: 'Tio utgåvor, en per land: guiderna, modellerna och köplänkarna följer den du väljer.',
    suggested: 'Förslag utifrån var du befinner dig',
    others: 'Andra länder',
    all: 'Alla länder',
    enter: 'Fortsätt',
    note: 'Ditt val sparas på den här enheten (en preferenscookie i 12 månader, ingen spårning). Du byter land högst upp på varje sida.',
    skip: 'Hoppa till innehållet',
    legal: 'Rättslig information',
    cookies: 'Cookies',
  },
  us: ENGLISH,
  ca: ENGLISH,
}

/** The entry page copy for `lang` (null: English, the crawlers' version). */
export function entryCopy(lang: Lang | null): EntryCopy {
  return lang ? ENTRY_COPY[lang] : ENGLISH
}
