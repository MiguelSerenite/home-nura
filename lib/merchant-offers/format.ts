/**
 * Dutch display of a Coolblue offer (client-safe), formatted by hand so
 * the server and the browser print exactly the same text.
 */

const PRICE_DATE_TIME_ZONE = 'Europe/Amsterdam'
const THOUSANDS = /\B(?=(\d{3})+(?!\d))/g

/** 1299.5 → "€ 1.299,50". */
export function formatEuroNl(price: number): string {
  const [integer, cents] = price.toFixed(2).split('.')
  return `€ ${integer.replace(THOUSANDS, '.')},${cents}`
}

/** ISO date → "03-11-2026 14:05", Amsterdam time; empty for an invalid date. */
export function formatPriceDateNl(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('nl-NL', {
      timeZone: PRICE_DATE_TIME_ZONE,
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
  return `${parts.day}-${parts.month}-${parts.year} ${parts.hour}:${parts.minute}`
}
