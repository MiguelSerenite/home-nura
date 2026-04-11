// Static product data - fallback when Amazon PA-API is unavailable
// Links are real Amazon affiliate links using the partner tags

const partnerTags: Record<string, string> = {
  fr: 'meilleursav00-21',
  de: 'homenurade-21',
  en: 'homenurauk-21',
  es: 'homenurae-21',
  it: 'homenurai-21',
  nl: 'homenuranl-21',
}

const domains: Record<string, string> = {
  fr: 'www.amazon.fr',
  de: 'www.amazon.de',
  en: 'www.amazon.co.uk',
  es: 'www.amazon.es',
  it: 'www.amazon.it',
  nl: 'www.amazon.nl',
}

export interface StaticProduct {
  title: Record<string, string>
  price: Record<string, string>
  image: string
  asin: string
  badge?: Record<string, string>
}

export const staticProducts: StaticProduct[] = [
  {
    asin: 'B0D3CRGG4C',
    title: {
      fr: 'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L',
      de: 'Ninja Foodi MAX Double Stack XL Heißluftfritteuse - 9.5L',
      en: 'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L',
      es: 'Ninja Foodi MAX Double Stack XL Freidora de Aire - 9.5L',
      it: 'Ninja Foodi MAX Double Stack XL Friggitrice ad Aria - 9.5L',
      nl: 'Ninja Foodi MAX Double Stack XL Airfryer - 9.5L',
    },
    price: {
      fr: '229,99€',
      de: '229,99€',
      en: '£229.99',
      es: '229,99€',
      it: '229,99€',
      nl: '229,99€',
    },
    image: 'https://m.media-amazon.com/images/I/71HmZ+YLFWL._AC_SL1500_.jpg',
    badge: {
      fr: 'Choix N°1',
      de: 'Beste Wahl',
      en: 'Top Pick',
      es: 'Mejor Elección',
      it: 'Scelta Top',
      nl: 'Beste Keuze',
    },
  },
  {
    asin: 'B0CPFBM3Y4',
    title: {
      fr: 'Philips Airfryer Série 3000 XL - 6.2L',
      de: 'Philips Airfryer Serie 3000 XL - 6.2L',
      en: 'Philips Airfryer 3000 Series XL - 6.2L',
      es: 'Philips Airfryer Serie 3000 XL - 6.2L',
      it: 'Philips Airfryer Serie 3000 XL - 6.2L',
      nl: 'Philips Airfryer 3000 Serie XL - 6.2L',
    },
    price: {
      fr: '119,99€',
      de: '119,99€',
      en: '£99.99',
      es: '109,99€',
      it: '119,99€',
      nl: '109,99€',
    },
    image: 'https://m.media-amazon.com/images/I/61kk1l6uOgL._AC_SL1500_.jpg',
  },
  {
    asin: 'B0CG1N9QSX',
    title: {
      fr: 'Cosori Dual Blaze Smart Air Fryer - 6.4L',
      de: 'Cosori Dual Blaze Smart Heißluftfritteuse - 6.4L',
      en: 'Cosori Dual Blaze Smart Air Fryer - 6.4L',
      es: 'Cosori Dual Blaze Smart Freidora de Aire - 6.4L',
      it: 'Cosori Dual Blaze Smart Friggitrice ad Aria - 6.4L',
      nl: 'Cosori Dual Blaze Smart Airfryer - 6.4L',
    },
    price: {
      fr: '139,99€',
      de: '139,99€',
      en: '£119.99',
      es: '129,99€',
      it: '139,99€',
      nl: '129,99€',
    },
    image: 'https://m.media-amazon.com/images/I/71dRvFpEVbL._AC_SL1500_.jpg',
  },
]

export function getStaticProducts(lang: string) {
  const tag = partnerTags[lang] || partnerTags.fr
  const domain = domains[lang] || domains.fr

  return staticProducts.map((p) => ({
    title: p.title[lang] || p.title.fr,
    price: p.price[lang] || p.price.fr,
    image: p.image,
    url: `https://${domain}/dp/${p.asin}?tag=${tag}`,
    badge: p.badge ? (p.badge[lang] || p.badge.fr) : undefined,
  }))
}
