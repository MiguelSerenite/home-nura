/**
 * Copy of the two locale notices (components/LocaleNotices.tsx), in the
 * ten languages:
 *
 *   - the suggestion: a visitor reads a version their IP country does not
 *     read ("Shopping in the United States? See Home Nura US"). Written in
 *     the SUGGESTED version's language: the visitor's local one. The
 *     question names the country only when the visitor is in the version's
 *     own country (a Belgian is not asked "Vous êtes en France ?").
 *   - the arrival notice: a country switch landed on another page than
 *     the one being read (lib/locale-switch.ts). Written in the language
 *     of the page the reader arrived on.
 *
 * Edition names ("Home Nura US") come from MARKET_VERSIONS: the brand is
 * never translated.
 */

import { marketVersion, type Lang, type SwitchReason } from './i18n'
import type { SwitchNotice } from './locale-switch'

interface SuggestionCopy {
  /** Visitor in the version's own country. */
  inCountry: string
  /** Visitor elsewhere (Belgium or Switzerland offered French, Ireland offered the UK edition…). */
  elsewhere: string
  cta: string
  close: string
  /** Accessible name of the banner. */
  label: string
}

export const SUGGESTION_COPY: Readonly<Record<Lang, SuggestionCopy>> = {
  fr: { inCountry: 'Vous êtes en France ?', elsewhere: 'Vous lisez le français ?', cta: 'Voir Home Nura France', close: 'Fermer', label: 'Suggestion de pays' },
  de: { inCountry: 'Sie kaufen in Deutschland ein?', elsewhere: 'Lieber auf Deutsch?', cta: 'Zu Home Nura Deutschland', close: 'Schließen', label: 'Ländervorschlag' },
  en: { inCountry: 'Shopping in the UK?', elsewhere: 'Shopping outside North America?', cta: 'See Home Nura UK', close: 'Close', label: 'Country suggestion' },
  es: { inCountry: '¿Estás en España?', elsewhere: '¿Prefieres leer en español?', cta: 'Ver Home Nura España', close: 'Cerrar', label: 'Sugerencia de país' },
  it: { inCountry: 'Sei in Italia?', elsewhere: 'Preferisci leggere in italiano?', cta: 'Vai a Home Nura Italia', close: 'Chiudi', label: 'Suggerimento di paese' },
  nl: { inCountry: 'Winkelt u in Nederland?', elsewhere: 'Leest u liever Nederlands?', cta: 'Naar Home Nura Nederland', close: 'Sluiten', label: 'Landsuggestie' },
  pl: { inCountry: 'Jesteś w Polsce?', elsewhere: 'Wolisz czytać po polsku?', cta: 'Przejdź do Home Nura Polska', close: 'Zamknij', label: 'Propozycja kraju' },
  sv: { inCountry: 'Handlar du i Sverige?', elsewhere: 'Läser du hellre på svenska?', cta: 'Till Home Nura Sverige', close: 'Stäng', label: 'Förslag på land' },
  us: { inCountry: 'Shopping in the United States?', elsewhere: 'Shopping in the United States?', cta: 'See Home Nura US', close: 'Close', label: 'Country suggestion' },
  ca: { inCountry: 'Shopping in Canada?', elsewhere: 'Shopping in Canada?', cta: 'See Home Nura Canada', close: 'Close', label: 'Country suggestion' },
}

/** The suggestion's question for a visitor from `country` offered `suggested`. */
export function suggestionQuestion(suggested: Lang, country: string | null | undefined): string {
  const copy = SUGGESTION_COPY[suggested]
  return country?.toUpperCase() === marketVersion(suggested).homeCountry ? copy.inCountry : copy.elsewhere
}

interface ArrivalCopy {
  /** A market page of `from` (null: unknown) → the closest hub, titled `label` (null: unknown). */
  market: (from: string | null, label: string | null) => string
  blackFriday: string
  /** A US/Canada floor-care guide → the cleaning hub, titled `label`. */
  cleaning: (label: string | null) => string
  home: string
  close: string
}

const quoted = {
  fr: (label: string) => `« ${label} »`,
  de: (label: string) => `„${label}“`,
  en: (label: string) => `“${label}”`,
  es: (label: string) => `«${label}»`,
  it: (label: string) => `«${label}»`,
  nl: (label: string) => `‘${label}’`,
  pl: (label: string) => `„${label}”`,
  sv: (label: string) => `”${label}”`,
}

function englishArrival(edition: string, here: string): ArrivalCopy {
  return {
    market: (from, label) =>
      `This page is specific to ${from ?? 'another edition of Home Nura'}. ${label ? `Here is our ${quoted.en(label)} guide for ${here}.` : `Here is the closest guide for ${here}.`}`,
    blackFriday: `This selection isn't part of ${edition}. Here is our Black Friday page.`,
    cleaning: (label) => `This guide is written for the US and Canada only. Here is our ${label ? `${quoted.en(label)} section` : 'cleaning section'} for ${here}.`,
    home: `This page has no equivalent on ${edition}, so here is the home page.`,
    close: 'Close',
  }
}

export const ARRIVAL_COPY: Readonly<Record<Lang, ArrivalCopy>> = {
  fr: {
    market: (from, label) =>
      `Cette page n'existe que sur ${from ?? 'une autre édition de Home Nura'}. ${label ? `Voici notre guide ${quoted.fr(label)} pour la France.` : 'Voici le guide le plus proche pour la France.'}`,
    blackFriday: "Cette sélection n'est pas proposée sur Home Nura France. Voici notre page Black Friday.",
    cleaning: (label) => `Ce guide n'existe que pour les États-Unis et le Canada. Voici notre rubrique ${label ? quoted.fr(label) : 'Entretien maison'} pour la France.`,
    home: "Cette page n'a pas d'équivalent sur Home Nura France : voici l'accueil.",
    close: 'Fermer',
  },
  de: {
    market: (from, label) =>
      `Diese Seite gibt es nur bei ${from ?? 'einer anderen Ausgabe von Home Nura'}. ${label ? `Hier ist unser Ratgeber ${quoted.de(label)} für Deutschland.` : 'Hier ist der passende Ratgeber für Deutschland.'}`,
    blackFriday: 'Diese Auswahl gibt es bei Home Nura Deutschland nicht. Hier ist unsere Black-Friday-Seite.',
    cleaning: (label) => `Diesen Ratgeber gibt es nur für die USA und Kanada. Hier ist unsere Rubrik ${label ? quoted.de(label) : 'Haushalt'} für Deutschland.`,
    home: 'Für diese Seite gibt es bei Home Nura Deutschland keine Entsprechung. Hier ist die Startseite.',
    close: 'Schließen',
  },
  en: englishArrival('Home Nura UK', 'the UK'),
  es: {
    market: (from, label) =>
      `Esta página es exclusiva de ${from ?? 'otra edición de Home Nura'}. ${label ? `Aquí tienes nuestra guía ${quoted.es(label)} para España.` : 'Aquí tienes la guía más cercana para España.'}`,
    blackFriday: 'Esta selección no está disponible en Home Nura España. Aquí tienes nuestra página del Black Friday.',
    cleaning: (label) => `Esta guía solo existe para Estados Unidos y Canadá. Aquí tienes nuestra sección ${label ? quoted.es(label) : 'de limpieza'} para España.`,
    home: 'Esta página no tiene equivalente en Home Nura España. Aquí tienes la portada.',
    close: 'Cerrar',
  },
  it: {
    market: (from, label) =>
      `Questa pagina esiste solo su ${from ?? "un'altra edizione di Home Nura"}. ${label ? `Ecco la nostra guida ${quoted.it(label)} per l'Italia.` : "Ecco la guida più vicina per l'Italia."}`,
    blackFriday: 'Questa selezione non è disponibile su Home Nura Italia. Ecco la nostra pagina del Black Friday.',
    cleaning: (label) => `Questa guida esiste solo per Stati Uniti e Canada. Ecco la nostra sezione ${label ? quoted.it(label) : 'pulizia'} per l'Italia.`,
    home: 'Questa pagina non ha un equivalente su Home Nura Italia. Ecco la home page.',
    close: 'Chiudi',
  },
  nl: {
    market: (from, label) =>
      `Deze pagina bestaat alleen in ${from ?? 'een andere editie van Home Nura'}. ${label ? `Hier is onze gids ${quoted.nl(label)} voor Nederland.` : 'Hier is de best passende gids voor Nederland.'}`,
    blackFriday: 'Deze selectie staat niet op Home Nura Nederland. Hier is onze Black Friday-pagina.',
    cleaning: (label) => `Deze gids bestaat alleen voor de VS en Canada. Hier is onze rubriek ${label ? quoted.nl(label) : 'huishouden'} voor Nederland.`,
    home: 'Deze pagina heeft geen tegenhanger op Home Nura Nederland. Hier is de startpagina.',
    close: 'Sluiten',
  },
  pl: {
    market: (from, label) =>
      `${from ? `Ta strona istnieje tylko w wersji ${from}.` : 'Ta strona istnieje tylko w innej wersji Home Nura.'} ${label ? `Oto nasz poradnik ${quoted.pl(label)} dla Polski.` : 'Oto najbliższy poradnik dla Polski.'}`,
    blackFriday: 'Tego zestawienia nie ma w wersji Home Nura Polska. Oto nasza strona Black Friday.',
    cleaning: (label) => `Ten poradnik powstał tylko dla USA i Kanady. Oto nasz dział ${label ? quoted.pl(label) : 'sprzątanie'} dla Polski.`,
    home: 'Ta strona nie ma odpowiednika w wersji Home Nura Polska. Oto strona główna.',
    close: 'Zamknij',
  },
  sv: {
    market: (from, label) =>
      `Den här sidan finns bara på ${from ?? 'en annan utgåva av Home Nura'}. ${label ? `Här är vår guide ${quoted.sv(label)} för Sverige.` : 'Här är den närmaste guiden för Sverige.'}`,
    blackFriday: 'Det här urvalet finns inte på Home Nura Sverige. Här är vår Black Friday-sida.',
    cleaning: (label) => `Den här guiden finns bara för USA och Kanada. Här är vår avdelning ${label ? quoted.sv(label) : 'städning'} för Sverige.`,
    home: 'Den här sidan har ingen motsvarighet på Home Nura Sverige. Här är startsidan.',
    close: 'Stäng',
  },
  us: englishArrival('Home Nura US', 'the US'),
  ca: englishArrival('Home Nura Canada', 'Canada'),
}

/** The arrival notice of `lang` for `notice`; `label` names the page arrived on (a hub). */
export function arrivalMessage(lang: Lang, notice: SwitchNotice, label: string | null): string {
  const copy = ARRIVAL_COPY[lang]
  const from = notice.from && notice.from !== lang ? marketVersion(notice.from).edition : null
  const messages: Record<SwitchReason, () => string> = {
    market: () => copy.market(from, label),
    'black-friday': () => copy.blackFriday,
    cleaning: () => copy.cleaning(label),
    home: () => copy.home,
  }
  return messages[notice.reason]()
}
