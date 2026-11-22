import 'server-only'

const ENTREE_COCKPIT = 'https://cockpit.groupeserenite.com/api/demandes/entree'
const DELAI_MAX_MS = 3000

/**
 * Sends a new newsletter sign-up to the owner's private dashboard (Cockpit).
 * Never blocks or fails the sign-up: 3 s timeout, errors are only logged (without personal data).
 */
export async function notifyCockpit(email: string, lang: string): Promise<void> {
  const key = process.env.COCKPIT_CLE
  if (!key) return
  try {
    const res = await fetch(ENTREE_COCKPIT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: `newsletter:${email.toLowerCase()}`,
        email,
        produit: 'Inscription à la newsletter',
        message: `Langue : ${lang}`,
        recue_le: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(DELAI_MAX_MS),
    })
    if (!res.ok) console.error(JSON.stringify({ level: 'error', msg: 'cockpit_forward_failed', status: res.status }))
  } catch (err) {
    console.error(JSON.stringify({ level: 'error', msg: 'cockpit_forward_error', kind: (err as Error)?.name }))
  }
}
