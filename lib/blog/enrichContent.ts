// Enriches article HTML content with affiliate CTA boxes based on product mentions
// This adds contextual "check price" buttons when products are mentioned in articles

interface ProductLink {
  pattern: RegExp
  asin: string
  name: Record<string, string>
}

const PRODUCT_PATTERNS: ProductLink[] = [
  {
    pattern: /Ninja Foodi MAX Double Stack|Ninja Double Stack|9[,.]5\s*L.*Ninja/i,
    asin: 'B0CZPJ1HFP',
    name: { fr: 'Ninja Foodi MAX Double Stack XL 9,5L', en: 'Ninja Foodi MAX Double Stack XL 9.5L', de: 'Ninja Foodi MAX Double Stack XL 9,5L', es: 'Ninja Foodi MAX Double Stack XL 9,5L', it: 'Ninja Foodi MAX Double Stack XL 9,5L', nl: 'Ninja Foodi MAX Double Stack XL 9,5L' },
  },
  {
    pattern: /Philips.*3000.*XL|Philips.*6[,.]2\s*L/i,
    asin: 'B0D9S9Y16Y',
    name: { fr: 'Philips Airfryer 3000 XL 6,2L', en: 'Philips Airfryer 3000 XL 6.2L', de: 'Philips Airfryer 3000 XL 6,2L', es: 'Philips Airfryer 3000 XL 6,2L', it: 'Philips Airfryer 3000 XL 6,2L', nl: 'Philips Airfryer 3000 XL 6,2L' },
  },
  {
    pattern: /Cosori Dual Blaze|Cosori.*6[,.]4\s*L/i,
    asin: 'B0FPWSDF86',
    name: { fr: 'Cosori Dual Blaze 6,4L', en: 'Cosori Dual Blaze 6.4L', de: 'Cosori Dual Blaze 6,4L', es: 'Cosori Dual Blaze 6,4L', it: 'Cosori Dual Blaze 6,4L', nl: 'Cosori Dual Blaze 6,4L' },
  },
  {
    pattern: /Ninja.*FlexDrawer|Ninja.*10[,.]4\s*L/i,
    asin: 'B0CFL49C1J',
    name: { fr: 'Ninja Foodi FlexDrawer 10,4L', en: 'Ninja Foodi FlexDrawer 10.4L', de: 'Ninja Foodi FlexDrawer 10,4L', es: 'Ninja Foodi FlexDrawer 10,4L', it: 'Ninja Foodi FlexDrawer 10,4L', nl: 'Ninja Foodi FlexDrawer 10,4L' },
  },
  {
    pattern: /Xiaomi Smart Air Fryer Pro|Xiaomi.*4\s*L/i,
    asin: 'B0D8WHQMHT',
    name: { fr: 'Xiaomi Smart Air Fryer Pro 4L', en: 'Xiaomi Smart Air Fryer Pro 4L', de: 'Xiaomi Smart Air Fryer Pro 4L', es: 'Xiaomi Smart Air Fryer Pro 4L', it: 'Xiaomi Smart Air Fryer Pro 4L', nl: 'Xiaomi Smart Air Fryer Pro 4L' },
  },
  {
    pattern: /Philips.*Combi.*XXL|Philips.*8[,.]3\s*L/i,
    asin: 'B0BKJNM9VG',
    name: { fr: 'Philips Combi XXL Connected 8,3L', en: 'Philips Combi XXL Connected 8.3L', de: 'Philips Combi XXL Connected 8,3L', es: 'Philips Combi XXL Connected 8,3L', it: 'Philips Combi XXL Connected 8,3L', nl: 'Philips Combi XXL Connected 8,3L' },
  },
  {
    pattern: /Moulinex Easy Fry Max|Moulinex.*5\s*L/i,
    asin: 'B0C8HZ5CSN',
    name: { fr: 'Moulinex Easy Fry Max 5L', en: 'Moulinex Easy Fry Max 5L', de: 'Moulinex Easy Fry Max 5L', es: 'Moulinex Easy Fry Max 5L', it: 'Moulinex Easy Fry Max 5L', nl: 'Moulinex Easy Fry Max 5L' },
  },
]

const partnerTags: Record<string, string> = {
  fr: 'homenuraen05-21', de: 'homenuraen00-21', en: 'homenuraen-21',
  es: 'homenuraen0a-21', it: 'homenuraen010-21', nl: 'homenuranl-21',
}

const domains: Record<string, string> = {
  fr: 'www.amazon.fr', de: 'www.amazon.de', en: 'www.amazon.co.uk',
  es: 'www.amazon.es', it: 'www.amazon.it', nl: 'www.amazon.nl',
}

const ctaButtonText: Record<string, string> = {
  fr: 'Voir le prix sur Amazon →',
  en: 'Check price on Amazon →',
  de: 'Preis auf Amazon prüfen →',
  es: 'Ver precio en Amazon →',
  it: 'Vedi prezzo su Amazon →',
  nl: 'Bekijk prijs op Amazon →',
}

/**
 * Enriches article HTML by inserting a small affiliate CTA after the first <h2>
 * section that mentions a specific product. Max 2 CTAs per article to avoid spam.
 */
export function enrichContentWithCTAs(html: string, lang: string): string {
  const tag = partnerTags[lang] || partnerTags.fr
  const domain = domains[lang] || domains.fr
  const btnText = ctaButtonText[lang] || ctaButtonText.fr

  // Split content by h2 sections
  const sections = html.split(/(?=<h2)/i)
  let ctaCount = 0
  const maxCTAs = 2

  const enriched = sections.map(section => {
    if (ctaCount >= maxCTAs) return section

    // Check if section mentions a product
    const plainText = section.replace(/<[^>]+>/g, '')
    for (const product of PRODUCT_PATTERNS) {
      if (product.pattern.test(plainText)) {
        ctaCount++
        const url = `https://${domain}/dp/${product.asin}?tag=${tag}`
        const productName = product.name[lang] || product.name.fr
        const cta = `<div style="margin:1.5rem 0;padding:1rem 1.25rem;background:linear-gradient(135deg,#f8f8ef,#eeefd7);border:2px solid #c2c67c;border-radius:1rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem">
<span style="font-weight:700;font-size:0.9rem;color:#1e293b">${productName}</span>
<a href="${url}" target="_blank" rel="nofollow noopener noreferrer" style="display:inline-block;padding:0.5rem 1.25rem;background:#6b7230;color:white;font-weight:700;font-size:0.85rem;border-radius:9999px;text-decoration:none;white-space:nowrap">${btnText}</a>
</div>`
        return section + cta
      }
    }
    return section
  })

  return enriched.join('')
}
