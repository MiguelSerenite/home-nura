import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the video doorbells: only the markets whose list carries it (../markets.ts). */
export const VIDEO_DOORBELLS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  en: {
    name: 'Video doorbells',
    h1: `Black Friday ${Y}: the no-subscription video doorbells worth watching`,
    metaTitle: `Black Friday ${Y}: Video Doorbells With No Subscription`,
    metaDescription: `Video doorbells worth watching this Black Friday ${Y}: Eufy, TP-Link Tapo, Aqara. Local storage, battery or wired, chime: what to check before you buy.`,
    blurb: 'Eufy, Tapo, Aqara: clips stored at home, with no monthly fee.',
    intro: 'With some video doorbells, buying the doorbell is only the start: without a paid plan, they record nothing you can play back later. The models below store clips locally, on built-in memory or a microSD card, with no subscription. When comparing Black Friday offers, also check the power option (battery or existing doorbell wiring) and whether a chime is in the box: bundles vary.',
    faq: [
      {
        question: 'Can a video doorbell work without a subscription?',
        answer: "Yes, if it records locally. The Eufy Video Doorbell E340 has 8 GB of built-in storage, the TP-Link Tapo D235 records to a microSD card (sold separately) and the Aqara Video Doorbell G4 to a card in its chime. Also check that person detection and the event history aren't locked behind a paid plan.",
      },
      {
        question: 'Battery or wired doorbell?',
        answer: 'A battery doorbell goes up in minutes with no cable to run, but it needs recharging regularly, more often in cold weather or on a busy doorstep. If you already have a wired doorbell, most models connect to the existing transformer (usually 8 to 24 V AC) and stay topped up.',
      },
      {
        question: 'Does it work with Alexa, Google or Apple Home?',
        answer: 'Alexa and Google Assistant are widely supported, including by the Eufy and Tapo models here. Apple Home is rarer: the Aqara Video Doorbell G4 supports HomeKit Secure Video, which needs an iCloud+ plan to record through Apple; without one, it still records for free to the microSD card in its chime.',
      },
    ],
  },
  it: {
    name: 'Videocampanelli',
    h1: `Black Friday ${Y}: i videocampanelli senza abbonamento da tenere d'occhio`,
    metaTitle: `Black Friday ${Y}: videocitofoni wifi senza abbonamento`,
    metaDescription: `Campanelli con telecamera senza abbonamento per il Black Friday ${Y}: Eufy, Tapo, Aqara. Memoria locale, batteria o cavo: cosa verificare prima.`,
    blurb: 'Eufy, Tapo, Aqara: video registrati in locale, senza canone mensile.',
    intro: 'Con molti videocampanelli (i campanelli wifi con telecamera) l’acquisto è solo l’inizio: senza un abbonamento a pagamento, alcuni non conservano nessun video da rivedere. I modelli qui sotto registrano in locale, su memoria integrata o su scheda microSD, senza canone. Durante il Black Friday controlla anche l’alimentazione (batteria o cablaggio del campanello esistente) e se il campanello interno è nella confezione: i kit cambiano da un modello all’altro.',
    faq: [
      {
        question: 'Un videocampanello funziona senza abbonamento?',
        answer: 'Sì, se registra in locale. L’Eufy Video Doorbell E340 ha 8 GB di memoria integrata, il TP-Link Tapo D235 registra su una scheda microSD nel campanello e l’Aqara Video Doorbell G4 su quella del ricevitore. Su questi modelli la diretta, le notifiche e il rilevamento delle persone sono gratuiti.',
      },
      {
        question: 'Batteria o cavo: cosa scegliere?',
        answer: 'La batteria va bene se non c’è un cablaggio: il campanello si monta in un quarto d’ora, ma va ricaricato, più spesso con il freddo o se davanti alla porta passa molta gente. Se hai già un campanello cablato, il collegamento tiene carica la batteria. Eufy E340 e Tapo D235 funzionano in entrambi i modi; l’Aqara G4 va a pile o via cavo.',
      },
      {
        question: 'Posso riprendere davanti alla porta di casa?',
        answer: 'Sì, ma solo la tua proprietà. Il Garante della privacy ricorda che un privato non dovrebbe riprendere la strada pubblica né le proprietà dei vicini: orienta la telecamera verso il tuo ingresso, usa le zone di privacy dell’app e informa chi suona.',
      },
      {
        question: 'Funziona con Alexa, Google o Apple Casa?',
        answer: 'Alexa e Google Assistant sono supportati da tutti e tre i modelli. La compatibilità con Apple Casa è più rara: in questa selezione solo l’Aqara Video Doorbell G4 supporta HomeKit Secure Video, che per registrare su iCloud richiede un piano iCloud+; senza, il campanello registra gratis sulla microSD del ricevitore.',
      },
    ],
  },
  us: {
    name: 'Video doorbells',
    h1: `Black Friday ${Y}: The Video Doorbells Worth Watching`,
    metaTitle: `Black Friday ${Y}: Video Doorbells Without a Subscription`,
    metaDescription: `Video doorbells worth watching this Black Friday ${Y}: eufy, TP-Link Tapo and Aqara, no monthly fee required. Wired or battery: what to check first.`,
    blurb: 'eufy, Tapo, Aqara: video saved locally, with no monthly fee required.',
    intro: "A video doorbell's real cost includes what you pay after you buy it: many brands keep video history and smart alerts behind a monthly plan. Before you look at any Black Friday deal, check where the video is saved (in the doorbell itself, on a microSD card or in the cloud) and whether your front door has doorbell wiring or needs a battery model.",
    faq: [
      {
        question: 'Can I use a video doorbell without a subscription?',
        answer: 'Yes, if it records locally: to storage built into the doorbell, to a microSD card, or to an indoor chime or base station. Without a plan, most doorbells still give you live view and motion alerts; what differs by brand is whether clips are saved at all and whether person or package detection is free.',
      },
      {
        question: 'Wired or battery video doorbell?',
        answer: 'If your home already has a wired doorbell, a wired model runs on that wiring and can ring your existing indoor chime; check that your doorbell transformer supplies the voltage the model needs. A battery model installs anywhere in minutes, but it needs recharging, and more often in cold weather.',
      },
      {
        question: 'What should I check during Black Friday?',
        answer: "The bundle: the same doorbell can be sold on its own, with an indoor chime, with a base station or with a camera, and the listing title doesn't always make the difference obvious. Also make sure it works with the smart home system you already use: Alexa, Google Home or Apple Home.",
      },
    ],
  },
}
