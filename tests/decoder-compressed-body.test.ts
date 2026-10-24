import assert from 'node:assert/strict'
import { once } from 'node:events'
import type { AddressInfo } from 'node:net'
import test from 'node:test'
import { brotliCompressSync } from 'node:zlib'
import { server } from '~/decoder/server'

void test('decoder rejects Brotli-compressed request bodies instead of inflating them', async (t) => {
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
    const url = `http://127.0.0.1:${port}/decode/extrinsics`
    const payload = JSON.stringify({ inputs: [] })

    const compressedResponse = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'content-encoding': 'br' },
        body: brotliCompressSync(Buffer.from(payload)),
    })

    assert.equal(compressedResponse.status, 415)

    const plainResponse = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: payload,
    })

    assert.equal(plainResponse.status, 400)
})
