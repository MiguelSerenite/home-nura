import { buildEntryMarkdown } from '@/lib/agent-markdown'

export const dynamic = 'force-static'

/** Markdown version of the entry page, served on / to `Accept: text/markdown` (proxy.ts). */
export function GET() {
  return new Response(buildEntryMarkdown(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8', Vary: 'Accept' },
  })
}
