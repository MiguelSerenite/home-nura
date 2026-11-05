import type { ReactElement } from 'react'
import { prerender } from 'react-dom/static'

/** Static HTML of an element once every lazy part (the offer island) has loaded, like Next's prerendering. */
export async function renderHtml(element: ReactElement): Promise<string> {
  const { prelude } = await prerender(element)
  return new Response(prelude).text()
}
