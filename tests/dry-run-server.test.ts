import assert from 'node:assert/strict'
import { once } from 'node:events'
import type { AddressInfo } from 'node:net'
import test from 'node:test'
import { server } from '~/decoder/server'
import DecoderRpc from '~/decoder/rpc'

void test('dry-run route validates requests and reports destination execution failures', async (t) => {
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
        body: JSON.stringify({ inputs: [{ publicKey: '0x12', encodedData: '0x0102' }] }),
    })

    assert.equal(postResponse.status, 400)
    assert.deepEqual(await postResponse.json(), { error: '"inputs[0].publicKey" must be exactly 32 bytes' })

    const resolved: string[] = []
    t.mock.method(DecoderRpc, 'getInstance', (network: string) => {
        resolved.push(network)
        return Promise.resolve({
            ensureConnected: () => Promise.resolve(),
            api: {
                registry: {},
                query: { parachainInfo: { parachainId: () => Promise.resolve({ toString: () => '1000' }) } },
                call: {
                    dryRunApi: {
                        dryRunCall: () =>
                            Promise.resolve({
                                isErr: false,
                                asOk: {
                                    executionResult: { isOk: true },
                                    forwardedXcms: [
                                        [
                                            { toJSON: () => ({ v5: { parents: 1, interior: { here: null } } }) },
                                            [{ toHex: () => '0x0500' }],
                                        ],
                                    ],
                                },
                            }),
                        dryRunXcm: () =>
                            Promise.resolve({
                                isErr: false,
                                asOk: {
                                    executionResult: {
                                        isComplete: false,
                                        isIncomplete: true,
                                        asIncomplete: {
                                            error: {
                                                index: { toString: () => '3' },
                                                error: {
                                                    type: 'FailedToTransactAsset',
                                                    toString: () => 'FailedToTransactAsset',
                                                    toHex: () => '0x09',
                                                },
                                            },
                                        },
                                    },
                                },
                            }),
                    },
                },
            },
        })
    })
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            inputs: [{ publicKey: `0x${'12'.repeat(32)}`, encodedData: '0x0102' }],
            network: 'canary-matrixchain',
        }),
    })
    assert.equal(response.status, 200)
    assert.deepEqual(await response.json(), [
        {
            success: false,
            error: {
                code: '0x09',
                name: 'Xcm.FailedToTransactAsset',
                message: 'XCM execution on canary-relaychain failed at instruction 3: FailedToTransactAsset.',
            },
        },
    ])
    assert.deepEqual(resolved, ['canary-matrixchain', 'canary-relaychain'])
})
