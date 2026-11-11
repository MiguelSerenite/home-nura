import { describe, it, expect } from 'vitest'
import { buildLlmsFullTxt, buildLlmsTxt } from '@/lib/llms'
import { getAllArticles } from '@/lib/blog'
import { getIndexableSilos } from '@/lib/catalog'
import { BASE_URL } from '@/lib/seo'

describe('buildLlmsTxt', () => {
  const txt = buildLlmsTxt()

  it('follows the llms.txt layout: H1 title then a blockquote summary', () => {
    const lines = txt.split('\n')
    expect(lines[0]).toBe('# Home Nura')
    expect(lines.find((l) => l.startsWith('> '))).toBeDefined()
  })

  it('links the methodology page so assistants can cite how products are rated', () => {
    expect(txt).toContain(`${BASE_URL}/fr/methodologie`)
    expect(txt).toContain(`${BASE_URL}/en/methodologie`)
  })

  it('lists every indexable hub and every blog article', () => {
    for (const silo of getIndexableSilos()) {
      expect(txt).toContain(`${BASE_URL}/fr/${silo.slug}`)
    }
    for (const article of getAllArticles()) {
      expect(txt).toContain(`${BASE_URL}/fr/blog/${article.slug}`)
    }
  })

  it('names every locale prefix with its language tag', () => {
    expect(txt).toContain('Content is published in 8 languages (/fr/ fr, /en/ en,')
    expect(txt).toContain('/sv/ sv-SE, /us/ en-US, /ca/ en-CA)')
  })

  it('uses markdown links only with absolute URLs', () => {
    const links = [...txt.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1])
    expect(links.length).toBeGreaterThan(80)
    expect(links.filter((u) => !u.startsWith(BASE_URL))).toEqual([])
  })
})

describe('buildLlmsFullTxt', () => {
  const full = buildLlmsFullTxt()

  it('starts with the llms.txt map then gives every article in full', () => {
    expect(full.startsWith('# Home Nura\n')).toBe(true)
    expect(full).toContain('# Articles in full (French)')
    for (const article of getAllArticles()) {
      expect(full).toContain(`Source: ${BASE_URL}/fr/blog/${article.slug}`)
    }
  })

  it('keeps plain text only: no HTML tag and no affiliate URL', () => {
    const body = full.slice(full.indexOf('# Articles in full'))
    expect(body).not.toMatch(/<\/?(p|h2|h3|ul|li|table|a)\b/i)
    expect(body).not.toMatch(/amazon\.[a-z.]+\/|tag=/i)
  })
})
