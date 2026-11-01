import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the home batteries (Netherlands): only the markets whose list carries it (../markets.ts). */
export const HOME_BATTERIES_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  nl: {
    name: 'Thuisbatterijen',
    h1: `Black Friday ${Y}: de thuisbatterijen om in de gaten te houden`,
    metaTitle: `Black Friday ${Y}: thuisbatterijen met stekker of vast`,
    metaDescription: `Thuisbatterijen om te volgen tijdens Black Friday ${Y}: Anker, Marstek, Tesla. Met stekker of vast, capaciteit, vermogen: wat je vóór aankoop checkt.`,
    blurb: 'Anker, Marstek, Tesla: met stekker of via een installateur, afhankelijk van je woning.',
    intro: 'Een thuisbatterij koop je voor jaren. Er zijn twee soorten: batterijen met stekker, die je zelf neerzet en in het stopcontact steekt, en vaste systemen die een installateur in de meterkast aansluit. Vergelijk tijdens Black Friday de bruikbare capaciteit in kWh, het vermogen dat de batterij kan leveren en de aansturing via je slimme meter (in Vlaanderen: digitale meter): die bepalen wat je er in de praktijk aan hebt.',
    faq: [
      {
        question: 'Thuisbatterij met stekker of vaste installatie?',
        answer: "Een batterij met stekker, zoals de Anker SOLIX Solarbank 3, zet je zelf neer en steek je in het stopcontact; hij slaat overdag zonnestroom op voor 's avonds, met een beperkter vermogen. Een vaste batterij zoals de Tesla Powerwall 3 heeft meer capaciteit en vermogen en wordt door een gecertificeerde installateur geplaatst. Twijfel je of je elektrische installatie een stekkerbatterij aankan, laat dan een installateur kijken.",
      },
      {
        question: 'Hoeveel kWh heb je nodig?',
        answer: "Dat hangt af van wat je 's avonds en 's nachts verbruikt en hoeveel zonnestroom je overdag overhoudt; dat zie je in de app van je energieleverancier of netbeheerder. Kijk naar de bruikbare capaciteit en naar uitbreiding: de Anker SOLIX Solarbank 3 begint bij 2,7 kWh en is uit te breiden tot boven 10 kWh, de Marstek Venus E 3.0 heeft 5,12 kWh in één toestel en de Tesla Powerwall 3 heeft 13,5 kWh bruikbare capaciteit.",
      },
      {
        question: 'Loont een thuisbatterij na het einde van de saldering?',
        answer: 'In Nederland stopt de salderingsregeling op 1 januari 2027: wat je teruglevert, mag je dan niet meer wegstrepen tegen wat je afneemt, en veel leveranciers rekenen terugleverkosten. Met een batterij verbruik je meer van je zonnestroom zelf. In Vlaanderen telt vooral het capaciteitstarief: met een batterij vlak je pieken in je verbruik af. Of het loont, hangt af van je verbruik, je contract en de prijs van de batterij: reken het na voordat je koopt.',
      },
    ],
  },
}
