/**
 * Brevo (ex-Sendinblue) contact subscription for the newsletter form.
 * Config: BREVO_API_KEY (secret) and BREVO_LIST_ID (numeric list id).
 */
const BREVO_CONTACTS_URL = 'https://api.brevo.com/v3/contacts'

export type SubscribeResult = 'subscribed' | 'not_configured' | 'failed'

export async function subscribeToNewsletter(email: string, lang: string): Promise<SubscribeResult> {
  const apiKey = process.env.BREVO_API_KEY
  const listId = Number(process.env.BREVO_LIST_ID)
  if (!apiKey || !Number.isInteger(listId) || listId <= 0) return 'not_configured'

  try {
    const res = await fetch(BREVO_CONTACTS_URL, {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        email: email.toLowerCase(),
        listIds: [listId],
        updateEnabled: true,
        attributes: { LANG: lang, SOURCE: 'homenura.com' },
      }),
    })
    if (res.ok) return 'subscribed'
    // Already in the account: Brevo answers 400 duplicate_parameter.
    if (res.status === 400 && (await res.text()).includes('duplicate_parameter')) return 'subscribed'
    console.error(JSON.stringify({ level: 'error', msg: 'brevo_subscribe_failed', status: res.status }))
    return 'failed'
  } catch (error) {
    console.error(JSON.stringify({ level: 'error', msg: 'brevo_unreachable', error: String(error) }))
    return 'failed'
  }
}
