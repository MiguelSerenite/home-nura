/**
 * Split article HTML just before its Nth <h2>, so a block (the product
 * recommendation) can be rendered mid-article instead of after the FAQ.
 * Returns [html, ''] when the article has fewer than N h2 headings.
 */
export function splitBeforeNthH2(html: string, n: number): [string, string] {
  let index = -1
  for (let found = 0; found < n; found++) {
    index = html.indexOf('<h2', index + 1)
    if (index === -1) return [html, '']
  }
  return [html.slice(0, index), html.slice(index)]
}
