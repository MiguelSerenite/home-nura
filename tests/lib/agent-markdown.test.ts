import { describe, expect, it } from 'vitest'
import { NextRequest } from 'next/server'
import { acceptsMarkdown, buildEntryMarkdown, isCertainNotFound } from '@/lib/agent-markdown'
import { LANGUAGES } from '@/lib/i18n'
import { proxy } from '@/proxy'

function call(pathname: string, accept: string, method = 'GET'): Response {
  return proxy(new NextRequest(new URL(`https://homenura.com${pathname}`), { method, headers: { accept } })) as Response
}

describe('acceptsMarkdown', () => {
  it.each([
    ['text/markdown', true],
    ['text/markdown, text/html;q=0.9', true],
    ['text/markdown;q=0.5, text/html', false],
    ['text/html,application/xhtml+xml,*/*;q=0.8', false],
    ['*/*', false],
    [null, false],
  ])('Accept %s → %s', (accept, expected) => {
    expect(acceptsMarkdown(accept)).toBe(expected)
  })
})

describe('isCertainNotFound', () => {
  it('flags paths outside the language tree and root routes', () => {
    for (const path of ['/__ora-404-probe-abc', '/wp-admin', '/guides']) expect(isCertainNotFound(path)).toBe(true)
  })
  it('never flags real routes, languages or files', () => {
    for (const path of ['/', '/fr', '/en/a-propos', '/api/x', '/blog/x', '/llms.txt', '/index.md', '/images/a.webp', '/contact']) {
      expect(isCertainNotFound(path)).toBe(false)
    }
  })
})

describe('entry page Markdown', () => {
  it('lists the ten versions and the trust pages', () => {
    const markdown = buildEntryMarkdown()
    expect(markdown.startsWith('# Home Nura')).toBe(true)
    for (const lang of LANGUAGES) expect(markdown).toContain(`https://homenura.com/${lang})`)
    expect(markdown).toContain('/en/contact')
  })
})

describe('proxy for agents', () => {
  it('rewrites / to the Markdown entry page with Vary: Accept', () => {
    const response = call('/', 'text/markdown')
    expect(response.headers.get('x-middleware-rewrite')).toBe('https://homenura.com/index.md')
    expect(response.headers.get('vary')).toBe('Accept')
  })
  it('keeps HTML on / for browsers and adds Vary: Accept', () => {
    const response = call('/', 'text/html')
    expect(response.headers.get('x-middleware-rewrite')).toBeNull()
    expect(response.headers.get('vary')).toBe('Accept')
  })
  it('answers a Markdown 404 for unknown paths', async () => {
    const response = call('/__ora-404-probe-abc', 'text/markdown')
    expect(response.status).toBe(404)
    expect(response.headers.get('content-type')).toBe('text/markdown; charset=utf-8')
    expect(await response.text()).toContain('https://homenura.com/llms.txt')
  })
  it('leaves unknown paths to Next.js for browsers', () => {
    expect(call('/__ora-404-probe-abc', 'text/html').status).toBe(200)
  })
  it.each([['/about', '/fr/a-propos'], ['/contact', '/fr/contact'], ['/privacy', '/fr/politique-confidentialite']])('redirects %s to %s', (from, to) => {
    const response = call(from, 'text/html')
    expect(response.status).toBe(301)
    expect(new URL(response.headers.get('location') ?? '').pathname).toBe(to)
  })
})
