import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the outdoor security cameras (Spain): only the markets whose list carries it (../markets.ts). */
export const OUTDOOR_CAMERAS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  es: {
    name: 'Cámaras de vigilancia exterior',
    h1: `Black Friday ${Y}: las cámaras de vigilancia exterior que merece la pena seguir`,
    metaTitle: `Black Friday ${Y}: cámaras de vigilancia exterior`,
    metaDescription: `Cámaras de vigilancia exterior a seguir en el Black Friday ${Y}: eufy, TP-Link Tapo, Reolink. Sin cuotas, solar, wifi o PoE: qué comprobar.`,
    blurb: 'eufy, Tapo, Reolink: sin cuotas, con placa solar, wifi o cable PoE.',
    intro: 'En una cámara exterior conviene mirar más allá del aparato: algunas marcas reservan el historial de vídeo a una suscripción. Antes de fijarte en la oferta, comprueba dónde se guardan las grabaciones (tarjeta microSD, base o grabador NVR) y qué funciones siguen disponibles sin cuota. Después elige la alimentación según tu fachada: batería con placa solar, wifi y enchufe, o un solo cable PoE para corriente y datos.',
    faq: [
      {
        question: '¿Hay cámaras de vigilancia exterior sin cuotas?',
        answer: 'Sí: las que graban en una tarjeta microSD, en una base o en un grabador NVR funcionan sin cuota mensual. Los tres modelos de esta selección graban en local: la eufyCam S3 Pro en la HomeBase S380, la TP-Link Tapo C520WS en una microSD y la Reolink RLC-833A en un NVR de Reolink.',
      },
      {
        question: '¿Cámara con placa solar, wifi o PoE?',
        answer: 'Una cámara de batería con placa solar se instala sin cables, pero necesita varias horas de sol directo al día: en una fachada orientada al norte o bajo un alero puede quedarse corta en invierno. Una cámara wifi enchufada no depende de la batería, pero necesita un enchufe cerca y buena cobertura wifi en la fachada. Con PoE, un solo cable Ethernet lleva corriente y datos: es la opción más estable para grabar sin cortes, a cambio de pasar el cable.',
      },
      {
        question: '¿Puedo grabar la calle con mi cámara exterior?',
        answer: 'No: la normativa de protección de datos solo permite captar la vía pública en la medida mínima imprescindible para vigilar tu entrada. Orienta la cámara a tu parcela o a tu puerta, usa las máscaras de privacidad y no grabes la casa del vecino; si captas parte de la calle, coloca el cartel de zona videovigilada.',
      },
      {
        question: '¿Qué resolución necesito para reconocer una cara?',
        answer: 'Con 2K se reconoce una cara a pocos metros; a más distancia cuenta más el zoom óptico que los megapíxeles, como el zoom óptico 3x de la Reolink RLC-833A. Comprueba también la protección contra el agua: IP65 como mínimo, IP66 si la fachada recibe lluvia o salitre cerca del mar.',
      },
    ],
  },
}
