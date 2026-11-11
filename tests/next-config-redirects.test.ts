import { describe, it, expect } from 'vitest'
import nextConfig from '../next.config'

describe('next.config redirects', () => {
  it('sends pre-locale blog URLs to the French blog with a 301', async () => {
    const redirects = await nextConfig.redirects!()
    expect(redirects).toContainEqual({ source: '/blog', destination: '/fr/blog', permanent: true })
    expect(redirects).toContainEqual({ source: '/blog/:slug', destination: '/fr/blog/:slug', permanent: true })
  })
})
