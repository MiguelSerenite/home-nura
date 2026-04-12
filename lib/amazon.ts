import amazonPaapi from 'amazon-paapi';

const marketplace: Record<string, string> = {
  fr: 'www.amazon.fr',
  de: 'www.amazon.de',
  es: 'www.amazon.es',
  it: 'www.amazon.it',
  en: 'www.amazon.co.uk',
  nl: 'www.amazon.nl'
};

export async function getAmazonProduct(asin: string, lang: string) {
  const commonParameters = {
    AccessKey: process.env.AMAZON_ACCESS_KEY,
    SecretKey: process.env.AMAZON_SECRET_KEY,
    PartnerTag: process.env[`AMAZON_TAG_${lang.toUpperCase()}`],
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
