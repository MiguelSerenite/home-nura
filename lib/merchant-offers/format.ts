/**
 * Display of a merchant offer's price and price date (server-only: the
 * page gets the finished text, lib/merchant-offers/view.ts), formatted by
 * hand so every render prints exactly the same text: Dutch (Coolblue NL and BE on /nl), German (/de), French (/fr).
 */
import 'server-only'

export type OfferLocale = 'nl' | 'de' | 'fr'

const THOUSANDS = /\B(?=(\d{3})+(?!\d))/g
const NBSP = ' '
const NARROW_NBSP = ' '

/** Thousands separator, decimal separator, and where the euro sign goes. */
const EURO_STYLE: Record<OfferLocale, { thousands: string; decimal: string; euro: (amount: string) => string }> = {
  nl: { thousands: '.', decimal: ',', euro: (amount) => `€ ${amount}` },
  de: { thousands: '.', decimal: ',', euro: (amount) => `${amount}${NBSP}€` },
  fr: { thousands: NARROW_NBSP, decimal: ',', euro: (amount) => `${amount}${NBSP}€` },
}

/** 1299.5 → "€ 1.299,50" (nl), "1.299,50 €" (de), "1 299,50 €" (fr). */
export function formatEuro(price: number, locale: OfferLocale): string {
  const style = EURO_STYLE[locale]
  const [integer, cents] = price.toFixed(2).split('.')
  return style.euro(`${integer.replace(THOUSANDS, style.thousands)}${style.decimal}${cents}`)
}

/** 1299.5 → "€ 1.299,50". */
export function formatEuroNl(price: number): string {
  return formatEuro(price, 'nl')
}

/** Time zone and layout of the price date per locale (the store's own time). */
const DATE_STYLE: Record<OfferLocale, { timeZone: string; layout: (p: Record<string, string>) => string }> = {
  nl: { timeZone: 'Europe/Amsterdam', layout: (p) => `${p.day}-${p.month}-${p.year} ${p.hour}:${p.minute}` },
  de: { timeZone: 'Europe/Berlin', layout: (p) => `${p.day}.${p.month}.${p.year}, ${p.hour}:${p.minute}` },
  fr: { timeZone: 'Europe/Brussels', layout: (p) => `${p.day}/${p.month}/${p.year} à ${p.hour}:${p.minute}` },
}

/** ISO date → "03-11-2026 14:05" (nl), "03.11.2026, 14:05" (de), "03/11/2026 à 14:05" (fr); empty for an invalid date. */
export function formatPriceDate(iso: string, locale: OfferLocale): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  const style = DATE_STYLE[locale]
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: style.timeZone,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(date)
      .map((part) => [part.type, part.value]),
  )
  return style.layout(parts)
}

/** ISO date → "03-11-2026 14:05", Amsterdam time; empty for an invalid date. */
export function formatPriceDateNl(iso: string): string {
  return formatPriceDate(iso, 'nl')
}
