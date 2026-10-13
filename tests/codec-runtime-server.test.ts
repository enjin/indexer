import assert from 'node:assert/strict'
import { once } from 'node:events'
import { readFileSync } from 'node:fs'
import type { AddressInfo } from 'node:net'
import test from 'node:test'
import * as metadata from '~/codec/metadata'
import { server } from '~/codec/server'
import { encodeCall } from '~/codec/encoder/core'
import DecoderRpc from '~/codec/rpc'

void test('codec HTTP routes use live defaults and preserve explicit historical versions', async (t) => {
    const network = 'enjin-matrixchain'
    const runtime = await metadata.getRuntimeCached(network, 1041)
    const historical = await metadata.getRuntimeCached(network, 1031)
    const requests: (number | undefined)[] = []
    t.mock.method(
        metadata,
        'withRuntime',
        async (
            requested: typeof network,
            version: number | undefined,
            operation: (runtime: typeof historical) => unknown
        ) => operation(await metadata.getRuntimeCached(requested, version))
    )
    let unavailable = false
    t.mock.method(metadata, 'getRuntimeCached', (requested: string, version?: number) => {
        assert.equal(requested, network)
        requests.push(version)
        if (version === undefined && unavailable) return Promise.reject(new Error('RPC unavailable'))
        return Promise.resolve(version === 1031 ? historical : runtime)
    })

    const call = { pallet: 'System', name: 'remark', args: { remark: '0x6b6579' } }
    const encoded = await encodeCall(call, network, 1041)
    const extrinsic = runtime.encodeExtrinsic({ version: 4, call: runtime.decodeCall(encoded) })
    const hex = '0x' + Buffer.from(extrinsic).toString('hex')
    requests.length = 0

    const listener = server.listen(0, '127.0.0.1')
    await once(listener, 'listening')
    t.after(
        () =>
            new Promise<void>((resolve) => {
                listener.close(() => {
                    resolve()
                })
            })
    )
    const port = (listener.address() as AddressInfo).port
    const post = (path: string, body: unknown) =>
        fetch(`http://127.0.0.1:${port}${path}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })

    for (const spec_version of [undefined, 1031]) {
        const encoding = await post('/encoder', { call, network, spec_version })
        assert.equal(encoding.status, 200)
        assert.equal((await encoding.json()).spec_version, spec_version ?? 1041)

        const decoding = await post('/decoder', { call: encoded, network, spec_version })
        assert.equal(decoding.status, 200)
        assert.ok((await decoding.json()).calls.System.remark)

        const batch = await post('/decode/extrinsics', { inputs: [hex], network, spec_version })
        assert.equal(batch.status, 200)
        assert.equal((await batch.json())[0].encodedData, encoded)
    }
    assert.deepEqual(requests, [undefined, undefined, undefined, 1031, 1031, 1031])

    unavailable = true
    const failure = await post('/decoder', { call: encoded, network })
    assert.equal(failure.status, 500)
    assert.equal((await failure.json()).error, 'RPC unavailable')
    const offline = await post('/decoder', { call: encoded, network, spec_version: 1031 })
    assert.equal(offline.status, 200)

    for (const [path, body] of [
        ['/encoder', { call }],
        ['/decoder', { call: encoded }],
        ['/decode/extrinsics', { inputs: [hex] }],
    ] as const) {
        const badVersion = await post(path, { ...body, network, spec_version: -1 })
        assert.equal(badVersion.status, 400)
    }

    const readsBefore = requests.length
    for (const [path, body, error] of [
        ['/decoder', { calls: [] }, '"calls" must not be empty'],
        ['/decoder', { extrinsics: [] }, '"extrinsics" must not be empty'],
        ['/decoder', { call: encoded, calls: [] }, '"calls" must not be empty'],
        ['/encoder', { call: { ...call, args: null } }, '"call.args" must be an object'],
        ['/encoder', { calls: [call, { ...call, args: null }] }, '"calls[1].args" must be an object'],
    ] as const) {
        const invalid = await post(path, { ...body, network })
        assert.equal(invalid.status, 400)
        assert.equal((await invalid.json()).error, error)
    }
    assert.equal(requests.length, readsBefore)
})

void test('HTTP defaults stay offline until a version fails, then retry and remember a successful runtime', async (t) => {
    metadata.clearRuntimeCache()
    t.after(metadata.clearRuntimeCache)
    const network = 'enjin-matrixchain'
    const row = readFileSync('typegen/enjin-matrixchain.jsonl', 'utf8')
        .trim()
        .split('\n')
        .map((line) => JSON.parse(line))
        .find((entry) => entry.specVersion === 1041)
    let rpcReads = 0
    t.mock.method(DecoderRpc, 'getInstance', () =>
        Promise.resolve({
            ensureConnected: () => Promise.resolve(),
            api: {
                rpc: {
                    chain: {
                        getBlockHash: () => {
                            rpcReads++
                            return Promise.resolve('0xblock')
                        },
                    },
                    state: {
                        getRuntimeVersion: () =>
                            Promise.resolve({
                                specName: { toString: () => network },
                                specVersion: { toNumber: () => 1041 },
                                implName: { toString: () => 'enjin' },
                                implVersion: { toNumber: () => 1 },
                            }),
                        getMetadata: () => Promise.resolve({ toHex: () => row.metadata }),
                    },
                },
            },
        } as unknown as DecoderRpc)
    )
    const listener = server.listen(0, '127.0.0.1')
    await once(listener, 'listening')
    t.after(
        () =>
            new Promise<void>((resolve) => {
                listener.close(() => {
                    resolve()
                })
            })
    )
    const port = (listener.address() as AddressInfo).port
    const post = (path: string, body: unknown) =>
        fetch(`http://127.0.0.1:${port}${path}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
    const remark = { pallet: 'System', name: 'remark', args: { remark: '0x6b6579' } }
    const ordinary = await post('/encoder', { call: remark, network })
    assert.equal(ordinary.status, 200)
    assert.equal((await ordinary.json()).spec_version, 1031)
    assert.equal(rpcReads, 0)
    const dispatch = {
        pallet: 'FuelTanks',
        name: 'dispatch',
        args: {
            tankId: { __kind: 'Id', value: `0x${'11'.repeat(32)}` },
            ruleSetId: undefined,
            call: { __kind: 'System', value: { __kind: 'remark', remark: '0x6b6579' } },
            settings: undefined,
        },
    }
    const upgraded = await post('/encoder', { call: dispatch, network })
    assert.equal(upgraded.status, 200)
    const encoded = await upgraded.json()
    assert.equal(encoded.spec_version, 1041)
    assert.equal(rpcReads, 1)
    assert.equal((await post('/decoder', { call: encoded.encoded, network })).status, 200)
    const next = await post('/encoder', { call: remark, network })
    assert.equal((await next.json()).spec_version, 1041)
    assert.equal((await post('/encoder', { call: dispatch, network, spec_version: 1031 })).status, 500)
    assert.equal(rpcReads, 1)
})
