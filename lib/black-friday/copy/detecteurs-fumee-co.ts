import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the smoke and carbon monoxide alarms: only the markets whose list carries it (../markets.ts). */
export const SMOKE_CO_ALARMS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  pl: {
    name: 'Czujniki czadu i dymu',
    h1: `Black Friday ${Y}: czujniki czadu i dymu, które warto mieć na oku`,
    metaTitle: `Czujnik czadu i dymu na Black Friday ${Y}: jaki wybrać?`,
    metaDescription: `Czujniki czadu i dymu na Black Friday ${Y}: Netatmo i X-Sense. Normy EN 50291 i EN 14604, bateria, powiadomienia na telefon, obowiązek montażu do 2030 r.`,
    blurb: 'Netatmo, X-Sense: czujnik czadu przy kotle lub piecyku, czujnik dymu na suficie.',
    intro: 'Czad, czyli tlenek węgla, nie ma barwy ani zapachu, a w sezonie grzewczym może ulatniać się z niesprawnego kotła, kominka lub piecyka gazowego w łazience. Czujnik czadu i czujnik dymu to zwykle dwa różne urządzenia: pierwszy wykrywa tlenek węgla, drugi dym z pożaru. Podczas Black Friday sprawdź przede wszystkim normę podaną na urządzeniu (EN 50291 dla czujnika czadu, EN 14604 dla czujnika dymu) i żywotność baterii; powiadomienia na telefon to przydatny dodatek, gdy nie ma cię w domu.',
    faq: [
      {
        question: 'Czy czujnik czadu jest obowiązkowy?',
        answer: 'Tak, w domach i mieszkaniach, w których działa urządzenie spalające paliwo stałe, ciekłe lub gazowe, na przykład kocioł, kominek albo piecyk gazowy. Taki obowiązek wprowadziło rozporządzenie MSWiA z listopada 2024 r., które obejmuje też czujki dymu. W budynkach już użytkowanych termin mija 1 stycznia 2030 r., ale czujnik montuje się w kilka minut, więc nie ma powodu czekać. Szczegóły i wyjątki sprawdź w aktualnych przepisach lub na stronie Państwowej Straży Pożarnej.',
      },
      {
        question: 'Gdzie zamontować czujnik czadu, a gdzie czujnik dymu?',
        answer: 'Czujnik dymu montuje się na suficie, najlepiej w korytarzu przy sypialniach i w salonie, z dala od kuchenki i łazienki, gdzie para i opary wywołują fałszywe alarmy. Czujnik czadu umieść w pomieszczeniu z kotłem, kominkiem lub piecykiem gazowym, w miejscu wskazanym w instrukcji producenta, zwykle od 1 do 3 metrów od urządzenia.',
      },
      {
        question: 'Czujnik z Wi-Fi czy zwykły?',
        answer: 'Każdy certyfikowany czujnik głośno alarmuje na miejscu. Wersja z Wi-Fi, jak Netatmo Smart Smoke Alarm czy X-Sense XS01-WX, dodatkowo wysyła powiadomienie na telefon: to przydatne, gdy wyjeżdżasz albo gdy czujnik wisi w domu rodziców lub dziadków. Netatmo Smart Smoke Alarm działa bez huba i alarmuje także bez internetu.',
      },
      {
        question: 'Na co uważać przy zakupie czujnika?',
        answer: 'Wybieraj czujniki z numerem normy na obudowie i kupuj je od sprzedawcy z UE: urządzenie bez certyfikatu nie daje pewności, że zareaguje na czad lub dym. Sprawdź też baterię: Netatmo Smart Carbon Monoxide Alarm ma baterię na 10 lat, po których wymienia się cały czujnik, bo element pomiarowy także się zużywa.',
      },
    ],
  },
  ca: {
    name: 'Smoke and CO detectors',
    h1: `Black Friday ${Y}: the smoke and carbon monoxide detectors worth watching`,
    metaTitle: `Black Friday ${Y} in Canada: Smart Smoke and CO Detectors`,
    metaDescription: `Smart smoke and carbon monoxide detectors worth watching this Black Friday ${Y}: Kidde hardwired and plug-in alarms. Power, certification: what to check.`,
    blurb: "Kidde: hardwired or plug-in, with phone alerts when you're away.",
    intro: 'You buy a smoke or carbon monoxide alarm for safety first; the app comes second. Before you look at any discount, check how your current alarms are powered (hardwired with a backup battery, or battery only), look for a ULC or CSA mark, and add a CO alarm if your home has a gas furnace or water heater, a fireplace, a wood stove or an attached garage.',
    faq: [
      {
        question: 'Hardwired or plug-in: which smart alarm fits my home?',
        answer: "If your home already has hardwired smoke alarms, connected to the electrical system with a backup battery, a hardwired smart alarm like the two hardwired Kidde models here can take the place of one of them; if you're not comfortable working on household wiring, hire a licensed electrician. Kidde says adding one smart alarm brings phone alerts for the other hardwired Kidde alarms in the home. If your alarms run on batteries only, a hardwired model needs new wiring, while a plug-in CO alarm simply goes into an outlet.",
      },
      {
        question: 'Why is my carbon monoxide detector beeping?',
        answer: 'A repeating pattern of loud beeps means the alarm has detected CO: get everyone out into fresh air, then call 911 or your local emergency number from outside. A single chirp every 30 to 60 seconds usually means a low battery or, on some models, that the alarm has reached the end of its life. The label on the alarm and its manual explain what each pattern means.',
      },
      {
        question: 'How long do smoke and CO alarms last?',
        answer: 'Replace smoke alarms every 10 years, or by the date printed on them, because the sensor wears out even if the alarm still sounds. CO alarms typically last 5 to 10 years and give an end-of-life warning. An alarm that is due for replacement is a natural moment to switch to a smart model.',
      },
    ],
  },
}
