import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the EV chargers (Sweden): only the markets whose list carries it (../markets.ts). */
export const EV_CHARGERS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  sv: {
    name: 'Laddboxar',
    h1: `Black Week ${Y}: laddboxar att hålla koll på`,
    metaTitle: `Laddbox Black Week ${Y}: modeller värda att bevaka`,
    metaDescription: `Laddboxar att hålla koll på inför Black Week ${Y}: Wallbox, Easee och Zaptec. Lastbalansering, 11 eller 22 kW, installation – det här ska du kontrollera.`,
    blurb: 'Wallbox, Easee, Zaptec: lastbalansering, effekt och installation.',
    intro: 'En laddbox köper du för många år framåt, och den ska installeras av en elektriker. Innan du jämför erbjudandena under Black Week bör du kontrollera vilken effekt bilen kan ladda med och vad huvudsäkringen klarar, om laddboxen har lastbalansering och om den har fast kabel eller uttag. Räkna också med installationen, som oftast beställs separat.',
    faq: [
      {
        question: 'Behöver jag en laddbox med lastbalansering?',
        answer: 'Ofta, ja. Med lastbalansering sänks laddströmmen när resten av huset drar mycket el, till exempel spisen eller värmepumpen, så att huvudsäkringen inte går. Det kräver oftast en extra mätare eller sensor, till exempel Easee Equalizer: kontrollera om den ingår eller måste köpas till.',
      },
      {
        question: '11 eller 22 kW: vilken effekt behöver jag?',
        answer: 'De flesta elbilar kan ladda med högst 11 kW växelström, och det kräver trefas och 16 A per fas. 22 kW gör bara nytta om både bilen och elanläggningen klarar det, vilket kräver 32 A per fas. För laddning över natten räcker 11 kW gott.',
      },
      {
        question: 'Måste en elektriker installera laddboxen?',
        answer: 'Ja. En laddbox ansluts fast till elanläggningen, och det arbetet får bara utföras av ett elinstallationsföretag som är registrerat hos Elsäkerhetsverket. Elektrikern ser också till att huvudsäkringen räcker och planerar hur kabeln ska dras.',
      },
      {
        question: 'Får jag grönt avdrag för laddboxen?',
        answer: 'Installationen av en laddbox i hemmet kan ge skattereduktion för grön teknik, det så kallade gröna avdraget, som installationsföretaget drar av direkt på fakturan. Reglerna och nivån beslutas av riksdagen och kan ändras: kontrollera hos Skatteverket vad som gäller just nu, och om avdraget även omfattar en laddbox som du köper själv, innan du beställer installationen.',
      },
    ],
  },
}
