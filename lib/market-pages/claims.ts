/**
 * Wording a market page may not carry (CLAUDE.md, Amazon Associates rules
 * and the writers' FORMAT.md): prices next to Amazon products, Amazon
 * ratings, review counts or bestseller ranks, and claims that we test
 * products ourselves. Checked on the writers' text when the pages build.
 */

/**
 * A currency amount: "199 €", "€199", "£49.99", "$199", "US$ 199",
 * "CA$249", "1 990 kr", "499 zł", "CHF 99", "99 EUR", "20 euro".
 */
const AMOUNT_THEN_CURRENCY = /\d[\d\s.,'’]*\s?(?:[€£$]|kr(?![a-zåäö])|z[łl](?![a-ząćęłńóśźż])|(?:EUR|GBP|USD|CAD|CHF|SEK|PLN)\b|euros?\b|dollars?\b|pounds?\b|sterlin[ae]\b|złotych\b|kronor\b)/i
const CURRENCY_THEN_AMOUNT = /(?:US|CA|C|A|AU|NZ)?\$\s?\d|[€£]\s?\d|\b(?:EUR|GBP|USD|CAD|CHF|SEK|PLN)\s?\d/i

export function looksLikePrice(value: string): boolean {
  return AMOUNT_THEN_CURRENCY.test(value) || CURRENCY_THEN_AMOUNT.test(value)
}

/** Spec names that announce a price, in the site's languages. */
const PRICE_SPEC = /\b(?:price|msrp|rrp|prix|preis|uvp|prezzo|precio|prijs|cena|pris)\b/i

export function isPriceSpecName(name: string): boolean {
  return PRICE_SPEC.test(name)
}

/** Bestseller ranks, in the site's languages: chosen from, never shown. */
const BESTSELLER = /best[\s-]?sell(?:er|ing)|meilleures? ventes?|pi[uù] vendut[oiae]|m[aá]s vendid[oa]s?|meistverkauft|bestverkocht|najczęściej kupowan|mest såld|bästsäljare/i
/** A rating, review count or rank, flagged when the same text names Amazon. */
const RATING_OR_REVIEWS = /\d(?:[.,]\d)?\s?(?:\/\s?5|out of 5|stars?|stelle|étoiles|sterne|estrellas|sterren|gwiazdk|stjärn)|\d[\d\s.,]*\s?(?:reviews?|ratings?|avis|recensioni|valutazioni|bewertungen|rezensionen|opiniones|valoraciones|reseñas|beoordelingen|recenzj|omdömen|recensioner)|#\s?1\b|\bn[°º]\s?1\b|\bno\.\s?1\b/i

/** First-person test claims: Home Nura compares, it never tests products itself. */
const OWN_TEST_CLAIM = /\bwe(?:'ve| have)? tested\b|\bour (?:own )?(?:tests?|testing|lab)\b|\bin our tests?\b|nous avons test|\bnos (?:propres )?tests\b|\bnotre (?:propre )?test\b|abbiamo (?:testato|provato)|\bnei nostri test\b|\bnel nostro test\b|wir haben [\p{L}\s]{0,30}getestet|\bunser(?:em|en)? (?:eigenen? )?(?:test|praxistest)\b|hemos (?:probado|testado)|\bnuestras pruebas\b|\bnuestro test\b|we hebben getest|\bonze test\b|przetestowaliśmy|\bnasz test\b|vi har testat|\bvårt test\b/iu

/** Why `value` breaks a wording rule, or null. */
export function wordingProblem(value: string): string | null {
  if (BESTSELLER.test(value)) return 'bestseller wording: Amazon ranks are used to choose models, never shown'
  if (/amazon/i.test(value) && RATING_OR_REVIEWS.test(value)) {
    return 'Amazon rating, review count or rank: never shown (quote independent testers instead)'
  }
  if (OWN_TEST_CLAIM.test(value)) return 'own-test claim: Home Nura compares specifications and published results, it does not test products'
  return null
}
