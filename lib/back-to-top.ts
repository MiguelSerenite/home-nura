/** Share of the page, once scrolled, from which the back-to-top arrow shows. */
const SHOW_FROM = 0.5

/** True once the reader has scrolled through half of a scrollable page. */
export function hasScrolledPastHalf(scrollY: number, pageHeight: number, viewportHeight: number): boolean {
  const scrollable = pageHeight - viewportHeight
  return scrollable > 0 && scrollY / scrollable >= SHOW_FROM
}
