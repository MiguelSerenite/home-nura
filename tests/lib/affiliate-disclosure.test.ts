import { describe, it, expect } from 'vitest'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import { AMAZON_ASSOCIATE_DISCLOSURE, amazonDisclosureLanguage } from '@/lib/affiliate-disclosure'

describe('Amazon statement language', () => {
  it('marks the English statement on the Swedish pages as English (amazon.se has no Swedish wording)', () => {
    // Act
    const html = renderToStaticMarkup(createElement(AmazonDisclosure, { lang: 'sv', note: 'Affiliatelänkar.' }))

    // Assert
    expect(html).toContain(`<span lang="en">${AMAZON_ASSOCIATE_DISCLOSURE.sv}</span> Affiliatelänkar.`)
  })

  it('adds no language switch where the statement is in the page language', () => {
    for (const lang of ['fr', 'en', 'pl', 'us', 'ca']) {
      expect(amazonDisclosureLanguage(lang), lang).toBeUndefined()
      expect(renderToStaticMarkup(createElement(AmazonDisclosure, { lang })), lang).not.toContain('<span')
    }
  })
})
