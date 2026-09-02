import assert from 'node:assert/strict'
import { once } from 'node:events'
import type { AddressInfo } from 'node:net'
import test from 'node:test'
import { server } from '~/decoder/server'

void test('dry-run route only accepts valid POST requests', async (t) => {
    const listener = server.listen(0, '127.0.0.1')
    await once(listener, 'listening')

    t.after(
        () =>
            new Promise<void>((resolve, reject) => {
                listener.close((error) => {
                    if (error) {
                        reject(error)
                        return
                    }
                    resolve()
                })
            })
    )

    const { port } = listener.address() as AddressInfo
    const url = `http://127.0.0.1:${port}/dry-run`
    const getResponse = await fetch(url)

    assert.equal(getResponse.status, 405)
    assert.equal(getResponse.headers.get('allow'), 'POST')

    const postResponse = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ publicKey: '0x12', encodedData: '0x0102' }),
    })

    assert.equal(postResponse.status, 400)
    assert.deepEqual(await postResponse.json(), { error: '"publicKey" must be exactly 32 bytes' })
})
