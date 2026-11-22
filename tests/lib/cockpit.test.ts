import { afterEach, describe, expect, it, vi } from 'vitest'
import { notifyCockpit } from '@/lib/cockpit'

afterEach(() => {
  vi.unstubAllGlobals()
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

describe('notifyCockpit', () => {
  it('does nothing when the key is not configured', async () => {
    vi.stubEnv('COCKPIT_CLE', '')
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    await notifyCockpit('jane@example.com', 'fr')

    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('posts the sign-up with the bearer key', async () => {
    vi.stubEnv('COCKPIT_CLE', 'cle-test')
    const fetchMock = vi.fn().mockResolvedValue(new Response('{"ok":true}', { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    await notifyCockpit('Jane@Example.com', 'fr')

    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('https://cockpit.groupeserenite.com/api/demandes/entree')
    expect(init.headers.Authorization).toBe('Bearer cle-test')
    const body = JSON.parse(init.body)
    expect(body).toMatchObject({ id: 'newsletter:jane@example.com', email: 'Jane@Example.com', produit: 'Inscription à la newsletter' })
  })

  it('never throws when the dashboard is unreachable', async () => {
    vi.stubEnv('COCKPIT_CLE', 'cle-test')
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')))
    vi.spyOn(console, 'error').mockImplementation(() => undefined)

    await expect(notifyCockpit('jane@example.com', 'en')).resolves.toBeUndefined()
  })
})
