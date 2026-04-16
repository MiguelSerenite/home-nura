import amazonPaapi from 'amazon-paapi';

const marketplace: Record<string, string> = {
  fr: 'www.amazon.fr',
  de: 'www.amazon.de',
  es: 'www.amazon.es',
  it: 'www.amazon.it',
  en: 'www.amazon.co.uk',
  nl: 'www.amazon.nl'
};

// Canonical affiliate tags — single source of truth.
const PARTNER_TAGS: Record<string, string> = {
  fr: 'homenuraen05-21',
  de: 'homenuraen00-21',
  en: 'homenuraen-21',
  es: 'homenuraen0a-21',
  it: 'homenuraen010-21',
  nl: 'homenuranl-21',
};

export async function getAmazonProduct(asin: string, lang: string) {
  const commonParameters = {
    AccessKey: process.env.AMAZON_ACCESS_KEY,
    SecretKey: process.env.AMAZON_SECRET_KEY,
    PartnerTag: PARTNER_TAGS[lang] || PARTNER_TAGS.fr,
    PartnerType: 'Associates',
    Marketplace: marketplace[lang] || 'www.amazon.fr',
  };

  const requestParameters = {
    ItemIds: [asin],
    Resources: [
      'ItemInfo.Title',
      'Offers.Listings.Price',
      'Images.Primary.Large',
    ],
  };

  try {
    const data = await amazonPaapi.GetItems(commonParameters, requestParameters);
    return data.ItemsResult.Items[0];
  } catch (error) {
    console.error("Erreur Amazon API:", error);
    return null;
  }
}
