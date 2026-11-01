import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the video intercoms (Italy): only the markets whose list carries it (../markets.ts). */
export const INTERCOMS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  it: {
    name: 'Videocitofoni',
    h1: `Black Friday ${Y}: i videocitofoni per villa e condominio da tenere d'occhio`,
    metaTitle: `Black Friday ${Y}: videocitofoni 2 fili, villa e condominio`,
    metaDescription: `Videocitofoni da tenere d'occhio per il Black Friday ${Y}: Philips, BTicino, Ring. Impianto a 2 fili, villa o condominio: cosa verificare prima.`,
    blurb: 'Philips, BTicino, Ring: kit completo, posto interno connesso o modulo senza lavori.',
    intro: 'Un videocitofono si sceglie partendo dall’impianto che hai già. In una villa o in una casa indipendente puoi sostituire tutto con un kit a 2 fili: se anche l’impianto attuale è a 2 fili, il cablaggio si riusa senza posare nuovi cavi. In condominio la pulsantiera esterna è comune: di solito si cambia solo il posto interno con uno connesso e compatibile, oppure si aggiunge un modulo senza lavori. Durante le offerte, controlla cosa c’è nella confezione: posto interno, pulsantiera, badge e alimentatore cambiano da un kit all’altro.',
    faq: [
      {
        question: 'Videocitofono a 2 fili o IP: cosa cambia?',
        answer: 'Un videocitofono a 2 fili porta alimentazione, audio e video su due conduttori, quindi spesso riusa il cablaggio esistente. Un sistema IP passa dal cavo di rete o dal Wi-Fi: è più facile da ampliare, ma di solito richiede un nuovo cavo fino alla postazione esterna.',
      },
      {
        question: 'Si può rispondere al citofono dallo smartphone?',
        answer: 'Sì, con un modello connesso: la chiamata arriva come notifica nell’app, vedi e parli con chi ha suonato e apri la porta a distanza. Servono una connessione internet in casa e un buon segnale Wi-Fi vicino al posto interno o al modulo.',
      },
      {
        question: 'Come rendere smart il citofono del condominio senza cambiare la pulsantiera?',
        answer: 'Due strade: sostituire il posto interno con un modello connesso compatibile con l’impianto, per esempio un BTicino Classe 100X su un impianto BTicino a 2 fili, oppure aggiungere un modulo come il Ring Intercom Video, che inoltra le chiamate del citofono all’app. Verifica sempre la compatibilità sul sito del produttore.',
      },
      {
        question: 'Serve il permesso dell’assemblea condominiale?',
        answer: 'Per cambiare la pulsantiera o il cablaggio comune sì: decide l’assemblea. Sostituire il posto interno con un modello compatibile o aggiungere un modulo riguarda di norma solo il tuo appartamento; controlla comunque il regolamento e, se sei in affitto, chiedi al proprietario.',
      },
    ],
  },
}
