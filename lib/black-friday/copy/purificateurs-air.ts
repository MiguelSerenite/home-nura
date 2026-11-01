import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the air purifiers: only the markets whose list carries it (../markets.ts). */
export const AIR_PURIFIERS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  pl: {
    name: 'Oczyszczacze powietrza',
    h1: `Black Friday ${Y}: oczyszczacze powietrza, które warto mieć na oku`,
    metaTitle: `Oczyszczacz powietrza na Black Friday ${Y}: jaki wybrać?`,
    metaDescription: `Oczyszczacze powietrza na Black Friday ${Y}: Levoit i Blueair. Filtr HEPA, CADR a metraż, cisza w sypialni, ile prądu zużywa: co sprawdzić przed zakupem.`,
    blurb: 'Levoit i Blueair: filtr HEPA, CADR dobrany do metrażu i cicha praca nocą.',
    intro: 'W sezonie grzewczym w wielu polskich miastach wraca smog, a okna otwieramy rzadziej. Oczyszczacz powietrza z filtrem HEPA zatrzymuje pyły zawieszone PM2.5, pyłki i inne alergeny, ale skutecznie oczyści pokój tylko wtedy, gdy jest dobrany do jego wielkości. Zanim porównasz oferty na Black Friday, sprawdź deklarowany współczynnik CADR i porównaj go z kubaturą pomieszczenia, a także głośność w trybie nocnym i to, jak często trzeba wymieniać filtr.',
    faq: [
      {
        question: 'Jak dobrać oczyszczacz powietrza do metrażu?',
        answer: 'Kieruj się współczynnikiem CADR, czyli ilością oczyszczonego powietrza na godzinę podawaną przez producenta. Powinien wystarczać na 4–5 wymian powietrza w pomieszczeniu na godzinę, czyli być 4–5 razy większy od jego kubatury. Sypialnia o powierzchni 20 m² i wysokości 2,5 m ma 50 m³, więc potrzebuje CADR rzędu 200–250 m³/h: Levoit Core 300S deklaruje 240 m³/h, a Levoit Core 400S (400 m³/h) poradzi sobie także w salonie.',
      },
      {
        question: 'Jaki oczyszczacz powietrza do sypialni?',
        answer: 'Liczy się głośność w trybie nocnym i możliwość wyłączenia podświetlenia. Levoit Core 300S deklaruje ok. 22 dB w trybie nocnym, a Blueair Blue Pure 411i Max od 18 dB, czyli ciszej niż szept. W trybie nocnym oczyszczacz pracuje jednak słabiej, dlatego do większej sypialni wybierz model z zapasem CADR.',
      },
      {
        question: 'Ile prądu zużywa oczyszczacz powietrza?',
        answer: 'Niewiele w porównaniu z grzejnikiem elektrycznym: na niskich obrotach zwykle od kilku do kilkunastu watów, na najwyższych kilkadziesiąt. Moc znajdziesz w karcie produktu, a zużycie w kWh to moc w kilowatach pomnożona przez liczbę godzin pracy. W trybie automatycznym oczyszczacz przyspiesza dopiero wtedy, gdy czujnik PM2.5 wykryje zanieczyszczenia, więc przy czystym powietrzu pracuje na niskim biegu.',
      },
      {
        question: 'Czy oczyszczacz powietrza pomaga na smog i alergię?',
        answer: 'Filtr HEPA zatrzymuje zdecydowaną większość cząstek PM2.5 i PM10, a także pyłki, alergeny zwierząt i roztoczy unoszące się w powietrzu, dlatego oczyszczacze często wybierają alergicy. Sam filtr HEPA nie usuwa jednak gazów, takich jak czad, a podczas smogu oczyszczacz działa najlepiej przy zamkniętych oknach. Filtr wymieniaj zgodnie z zaleceniem producenta: zapchany ogranicza przepływ powietrza, więc urządzenie oczyszcza wolniej.',
      },
    ],
  },
  us: {
    name: 'Air purifiers',
    h1: `Black Friday ${Y}: The Air Purifiers Worth Watching`,
    metaTitle: `Black Friday ${Y}: Best Air Purifiers to Watch`,
    metaDescription: `Air purifiers worth watching this Black Friday ${Y}: Levoit, Winix, Coway and Blueair. CADR, room size, filters: what to check before you buy.`,
    blurb: 'Levoit, Winix, Coway, Blueair: compare CADR, sleep-mode noise and filter costs.',
    intro: 'Start with the CADR (clean air delivery rate): it tells you how much filtered air a purifier puts out, and so how large a room it can handle. Size it to your room first, then compare the noise in sleep mode and the cost of replacement filters: those two details separate the models below more than any feature list.',
    faq: [
      {
        question: 'What size air purifier do I need?',
        answer: "Use AHAM's rule of thumb: the smoke CADR should be at least two-thirds of the room's floor area in square feet, assuming 8-foot ceilings. A 300 sq ft bedroom calls for a smoke CADR of 200 or more. Go higher for allergies, pets or wildfire smoke, or if you want it to stay quiet on a lower fan speed.",
      },
      {
        question: 'Does an air purifier help with allergies and pet dander?',
        answer: "A True HEPA filter traps most of the pollen, dust and pet dander in the air that passes through it, so a purifier helps most in the room where you spend the most time, usually the bedroom. It can't remove what has already settled on floors and furniture, so it works alongside regular vacuuming, not instead of it.",
      },
      {
        question: 'Is a smart air purifier worth it?',
        answer: 'An app mostly adds schedules and filter-life reminders. What matters more day to day is an auto mode driven by a built-in air quality sensor, which turns the fan up when the air gets worse. Smart or not, look for the AHAM Verifide mark (the CADR claim was independently verified) or ENERGY STAR certification (the model meets EPA efficiency criteria).',
      },
    ],
  },
}
