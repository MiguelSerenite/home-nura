import { BLACK_FRIDAY_YEAR as Y } from '@/lib/black-friday/config'
import type { GiftGuide } from '../types'

export const REYES: GiftGuide = {
  slug: 'regalos-de-reyes',
  lang: 'es',
  eventDateISO: '2027-01-06',
  label: `Reyes ${Y + 1}`,
  metaTitle: `Regalos de Reyes ${Y + 1}: ideas para casa y cocina`,
  metaDescription: 'Ideas de regalos de Reyes para casa: freidora de aire, robot aspirador, cafetera superautomática, olla programable. Qué mirar en cada categoría.',
  h1: `Regalos de Reyes ${Y + 1}: ideas para casa, categoría por categoría`,
  intro: `Los Reyes llegan la noche del 5 al 6 de enero de ${Y + 1}. Si buscas un regalo para casa, para la familia o para quien siempre dice que no necesita nada, aquí tienes ideas por categoría, con los modelos que nuestras guías de compra ya recomiendan y lo que conviene mirar antes de elegir. No mostramos precios: cambian constantemente, y el precio del momento lo ves en Amazon.`,
  categoriesTitle: 'Ideas de regalo por categoría',
  cards: [
    {
      category: 'airfryers',
      name: 'Freidoras de aire',
      line: 'El regalo que usa toda la casa: elige la capacidad según el número de personas y decide entre una cesta o dos zonas.',
    },
    {
      category: 'aspirateurs-robots',
      name: 'Robots aspiradores',
      line: 'Para quien prefiere no pasar la aspiradora: Roborock o Dreame, también con mopas para fregar.',
    },
    {
      category: 'cafetieres',
      name: 'Cafeteras superautomáticas',
      line: "Un regalo para hacer entre varios: café recién molido en cada taza, de De'Longhi, Philips o Krups.",
    },
    {
      category: 'aspirateurs-balais',
      name: 'Aspiradoras sin cable',
      line: 'Ligeras y siempre a mano para el sofá, las escaleras o el coche: Dyson, Rowenta o Samsung.',
    },
    {
      category: 'multicuiseurs',
      name: 'Ollas programables',
      line: 'Para quien tiene poco tiempo para cocinar entre semana: guisos y legumbres programados, de Moulinex, Ninja o Instant Pot.',
    },
    {
      category: 'humidificateurs',
      name: 'Humidificadores',
      line: 'Para dormitorios con la calefacción puesta y el aire seco: evaporativo o ultrasónico, de Boneco, Levoit o Dyson.',
    },
  ],
  faq: [
    {
      question: '¿Hasta cuándo se pueden pedir los regalos de Reyes?',
      answer: 'Depende del plazo de entrega de cada vendedor y del lugar de envío. Mira la fecha de entrega estimada antes de confirmar el pedido y pide con margen: en Navidad los envíos se retrasan con más facilidad, y a Canarias, Ceuta y Melilla suelen tardar más.',
    },
    {
      question: '¿Se puede devolver un regalo de Reyes comprado por internet?',
      answer: 'En las compras en línea tienes 14 días naturales desde la entrega para desistir, sin dar explicaciones. Algunos vendedores amplían ese plazo en Navidad para que el regalo pueda cambiarse después del 6 de enero: revisa la política de devoluciones al hacer el pedido, sobre todo si lo vende un vendedor externo.',
    },
    {
      question: '¿Comprar los regalos en el Black Friday o esperar a las rebajas?',
      answer: `Las rebajas de invierno suelen empezar el 7 de enero, después de Reyes, así que llegan tarde para los regalos. El Black Friday, el 27 de noviembre de ${Y}, permite adelantar las compras: en nuestra página de Black Friday tienes, categoría por categoría, los modelos que recomiendan nuestras guías.`,
    },
    {
      question: '¿Cómo elegís estas ideas de regalo?',
      answer: 'No hacemos pruebas propias: los modelos salen de nuestras guías de compra, que comparan las fichas técnicas del fabricante, opiniones verificadas de compradores y los análisis publicados por la prensa especializada. En cada categoría explicamos qué mirar, para que elijas lo que encaja con quien lo va a recibir.',
    },
  ],
}
