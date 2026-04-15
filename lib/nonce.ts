import { headers } from 'next/headers'

/**
 * Read the per-request CSP nonce injected by middleware.ts.
 * Use in server components to attach `nonce={...}` to inline <script> tags
 * (JSON-LD schemas, etc.) so they pass the strict CSP policy.
 *
 * Returns an empty string if no nonce is found (e.g. during static
 * pre-rendering) — empty nonce attributes are ignored by browsers.
 */
export async function getNonce(): Promise<string> {
  const h = await headers()
  return h.get('x-nonce') ?? ''
}
