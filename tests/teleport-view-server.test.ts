import assert from 'node:assert/strict'
import { once } from 'node:events'
import type { AddressInfo } from 'node:net'
import test from 'node:test'
import { decode } from '~/codec/decoder/core'
import { server } from '~/codec/server'
import { UnsafeTransactionViewError } from '~/codec/decoder/view/errors'
import { encodeCall } from '~/codec/encoder/core'
import DecoderRpc from '~/codec/rpc'

async function teleportCall(amount?: string): Promise<string> {
    return encodeCall(
        {
            pallet: 'PolkadotXcm',
            name: 'limited_teleport_assets',
            args: {
                dest: { __kind: 'V5', value: { parents: 1, interior: { __kind: 'Here' } } },
                beneficiary: {
                    __kind: 'V5',
                    value: {
                        parents: 0,
                        interior: {
                            __kind: 'X1',
                            value: [{ __kind: 'AccountId32', id: `0x${'22'.repeat(32)}` }],
                        },
                    },
                },
                assets: {
                    __kind: 'V5',
                    value:
                        amount === undefined
                            ? []
                            : [
                                  {
                                      id: { parents: 1, interior: { __kind: 'Here' } },
                                      fun: { __kind: 'Fungible', value: amount },
                                  },
                              ],
                },
                feeAssetItem: 0,
                weightLimit: { __kind: 'Unlimited' },
            },
        },
        'canary-matrixchain',
        1041
    )
}

void test('readable decoding rejects unsafe teleports without preventing raw decoding', async (t) => {
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => {
        throw new Error('View rejection must not contact RPC')
    })
    const call = await teleportCall()
    const request = { call, network: 'canary-matrixchain', spec_version: 1041 }
    const raw = await decode(request)
    assert.ok(raw && typeof raw === 'object' && 'calls' in raw && !('view' in raw))
    await assert.rejects(decode({ ...request, readable: true }), UnsafeTransactionViewError)
    assert.deepEqual(await decode({ call, network: request.network }), raw)
    await assert.rejects(decode({ call, network: request.network, readable: true }), UnsafeTransactionViewError)
    assert.equal(rpc.mock.callCount(), 0)
    await assert.rejects(
        decode({
            calls: [await teleportCall('42'), call],
            network: request.network,
            spec_version: 1041,
            readable: true,
        }),
        UnsafeTransactionViewError
    )
})

void test('decoder returns 422 for unsafe readable teleports and 200 for a complete V5 view', async (t) => {
    const listener = server.listen(0, '127.0.0.1')
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
    await once(listener, 'listening')
    const { port } = listener.address() as AddressInfo
    const url = `http://127.0.0.1:${port}/decoder`
    const request = async (call: string, readable: boolean) =>
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ call, network: 'canary-matrixchain', spec_version: 1041, readable }),
        })

    const unsafe = await teleportCall()
    const rejected = await request(unsafe, true)
    assert.equal(rejected.status, 422)
    assert.deepEqual(await rejected.json(), {
        error: 'Cannot safely display teleport amount',
        code: 'UNSAFE_TRANSACTION_VIEW',
    })
    assert.equal((await request(unsafe, false)).status, 200)

    const accepted = await request(await teleportCall('123456789012345678901234567890'), true)
    assert.equal(accepted.status, 200)
    const body = (await accepted.json()) as { view: { title: string; fields: { type: string; value?: string }[] } }
    assert.equal(body.view.title, 'Teleport ENJ')
    assert.ok(body.view.fields.some((f) => f.type === 'coin' && f.value === '123456789012345678901234567890'))
})
