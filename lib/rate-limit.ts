/**
 * Lightweight in-memory rate limiter shared across API routes.
 *
 * Tradeoffs:
 *   - Resets on cold start. Fine for low-traffic routes + serverless.
 *   - Per-instance, not cluster-wide. An attacker hitting different
 *     Vercel regions could bypass it. Good enough as a first line of
 *     defence — real DDoS belongs at the edge (Vercel WAF/Cloudflare).
 *   - Keys are arbitrary strings, typically client IP. Caller decides
 *     how to extract it so we stay runtime-agnostic (Edge, Node).
 *
 * Namespaces exist so newsletter (5/hour) and vitals (60/min) don't
 * share the same bucket — otherwise a chatty vitals client would DOS
 * the newsletter endpoint for itself.
 */

interface Bucket {
  count: number
  resetAt: number
}

const stores = new Map<string, Map<string, Bucket>>()

function storeFor(namespace: string): Map<string, Bucket> {
  let s = stores.get(namespace)
  if (!s) {
    s = new Map()
    stores.set(namespace, s)
  }
  return s
}

export interface RateLimitOptions {
  /** Logical name — e.g. 'newsletter', 'vitals'. Separates buckets. */
  namespace: string
  /** Window size in milliseconds. */
  windowMs: number
  /** Max hits allowed per key within the window. */
  max: number
}

/**
 * Increments the hit counter for `key` under `options.namespace`.
 * Returns `true` if the caller has exceeded the quota and should be
 * rejected, `false` otherwise.
 */
export function rateLimited(key: string, options: RateLimitOptions): boolean {
  const store = storeFor(options.namespace)
  const now = Date.now()
  const bucket = store.get(key)

  if (!bucket || bucket.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + options.windowMs })
    return false
  }

  bucket.count += 1
  return bucket.count > options.max
}

/**
 * Extract a best-effort client IP from the request headers. Runtime-
 * agnostic — accepts any object that can read headers. Falls back to
 * the literal 'unknown' so a missing header doesn't silently bypass
 * the rate limiter by creating one bucket per null key.
 */
export function getClientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }
  return headers.get('x-real-ip') || 'unknown'
}

/**
 * Test-only: wipe every bucket. Used by vitest suites so one test's
 * hits don't leak into the next.
 */
export function __resetRateLimitForTests(): void {
  stores.clear()
}
