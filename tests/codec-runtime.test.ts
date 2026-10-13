import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test, { afterEach, beforeEach, type TestContext } from 'node:test'
import { decode, decodeSignedExtrinsicsRaw } from '~/codec/decoder/core'
import { encode, encodeCall } from '~/codec/encoder/core'
import { clearRuntimeCache, DEFAULT_SPEC_VERSIONS, getRuntimeCached, withRuntime } from '~/codec/metadata'
import DecoderRpc, { withRpcTimeout } from '~/codec/rpc'
import type { Network } from '~/codec/types'
import { validateDecodeRequest, validateDecodeSignedExtrinsicsRequest, validateEncodeRequest } from '~/codec/validation'

beforeEach(clearRuntimeCache)
afterEach(clearRuntimeCache)

function metadata(network: Network, specVersion: number): string {
    const rows = readFileSync(`typegen/${network}.jsonl`, 'utf8').trim().split('\n')
    const row = rows.map((line) => JSON.parse(line)).find((row) => row.specVersion === specVersion)
    assert.ok(row)
    return row.metadata as string
}

function mockRpc(t: TestContext, network: Network, specVersion: number, encodedMetadata: string) {
    const state = { fail: false, metadata: encodedMetadata }
    const reads = { heads: 0, versions: [] as string[], metadata: [] as string[] }
    const getInstance = t.mock.method(DecoderRpc, 'getInstance', (requested: Network) => {
        assert.equal(requested, network)
        return Promise.resolve({
            ensureConnected: () => Promise.resolve(),
            api: {
                rpc: {
                    chain: {
                        getBlockHash: () => {
                            reads.heads++
                            return Promise.resolve(`0xblock-${specVersion}`)
                        },
                    },
                    state: {
                        getRuntimeVersion: (hash: string) => {
                            reads.versions.push(hash)
                            if (state.fail) return Promise.reject(new Error('RPC unavailable'))
                            return Promise.resolve({
                                specName: { toString: () => network },
                                specVersion: { toNumber: () => specVersion },
                                implName: { toString: () => 'enjin' },
                                implVersion: { toNumber: () => 1 },
                            })
                        },
                        getMetadata: (hash: string) => {
                            reads.metadata.push(hash)
                            const snapshot = state.metadata
                            return Promise.resolve({ toHex: () => snapshot })
                        },
                    },
                },
            },
        } as unknown as DecoderRpc)
    })
    return { state, reads, getInstance }
}

const remark = { pallet: 'System', name: 'remark', args: { remark: '0x6b6579' } }
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

void test('successful defaults and explicit versions work offline on all four networks', async (t) => {
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => {
        throw new Error('RPC must not be called')
    })
    for (const network of Object.keys(DEFAULT_SPEC_VERSIONS) as Network[]) {
        assert.equal((await getRuntimeCached(network)).specVersion, DEFAULT_SPEC_VERSIONS[network])
        const encoded = await encode({ call: remark, network })
        assert.ok(!Array.isArray(encoded))
        assert.equal(encoded.spec_version, DEFAULT_SPEC_VERSIONS[network])
        assert.deepEqual(await encode({ calls: [remark, remark], network }), [encoded, encoded])
        const decoded = await decode({ call: encoded.encoded, network })
        assert.deepEqual(await decode({ calls: [encoded.encoded, encoded.encoded], network }), [decoded, decoded])
        assert.deepEqual(await decode({ events: '0x00', network }), [])
        assert.equal(
            (await getRuntimeCached(network, DEFAULT_SPEC_VERSIONS[network])).specVersion,
            encoded.spec_version
        )
    }
    assert.equal(rpc.mock.callCount(), 0)
})

void test('a default encoding failure retries at the pinned current runtime and remembers success', async (t) => {
    const network = 'enjin-matrixchain'
    const rpc = mockRpc(t, network, 9101, metadata(network, 1041))
    const result = await encode({ call: dispatch, network })
    assert.ok(!Array.isArray(result))
    assert.equal(result.spec_version, 9101)
    assert.equal(result.encoded, `0x360500${'11'.repeat(32)}0000000c6b657900`)
    assert.deepEqual(rpc.reads.versions, ['0xblock-9101'])
    assert.deepEqual(rpc.reads.metadata, ['0xblock-9101'])
    assert.equal((await getRuntimeCached(network)).specVersion, 9101)
    const next = await encode({ call: remark, network })
    assert.ok(!Array.isArray(next))
    assert.equal(next.spec_version, 9101)
    assert.equal(rpc.reads.heads, 1)
})

void test('concurrent failed defaults share one bounded RPC snapshot', async (t) => {
    const network = 'enjin-matrixchain'
    const rpc = mockRpc(t, network, 9201, metadata(network, 1041))
    const results = await Promise.all(Array.from({ length: 8 }, () => encode({ call: dispatch, network })))
    assert.ok(results.every((result) => !Array.isArray(result) && result.spec_version === 9201))
    assert.equal(rpc.reads.heads, 1)
    assert.equal(rpc.reads.metadata.length, 1)
})

void test('an encoder batch retries atomically and failed candidates do not change the preferred version', async (t) => {
    const network = 'enjin-matrixchain'
    const rpc = mockRpc(t, network, 9301, metadata(network, 1041))
    await assert.rejects(encode({ calls: [dispatch, { pallet: 'UnknownPallet', name: 'bad' }], network }))
    assert.equal((await getRuntimeCached(network)).specVersion, 1031)
    assert.equal(rpc.reads.heads, 1)
    const result = await encode({ calls: [remark, dispatch], network })
    assert.ok(Array.isArray(result))
    assert.ok(result.every((item) => item.spec_version === 9301))
    assert.equal((await getRuntimeCached(network)).specVersion, 9301)
})

void test('decoder fallback repairs a new call and subsequent requests stay local', async (t) => {
    const network = 'enjin-matrixchain'
    const encoded = await encodeCall(dispatch, network, 1041)
    const rpc = mockRpc(t, network, 9401, metadata(network, 1041))
    const result = await decode({ call: encoded, network })
    assert.deepEqual(result, await decode({ call: encoded, network, spec_version: 1041 }))
    assert.equal((await getRuntimeCached(network)).specVersion, 9401)
    assert.deepEqual(await decode({ calls: [encoded, encoded], network }), [result, result])
    assert.equal(rpc.reads.heads, 1)
})

void test('tolerant extrinsic batches retry failed items and preserve valid or irrecoverable results', async (t) => {
    const network = 'enjin-matrixchain'
    const old = await getRuntimeCached(network, 1031)
    const current = await getRuntimeCached(network, 1041)
    const modern = await encodeCall(dispatch, network, 1041)
    const ordinary = await encodeCall(remark, network, 1031)
    const wrap = (runtime: typeof old, call: string) =>
        '0x' + Buffer.from(runtime.encodeExtrinsic({ version: 4, call: runtime.decodeCall(call) })).toString('hex')
    const good = wrap(old, ordinary)
    const newer = wrap(current, modern)
    const before = await decodeSignedExtrinsicsRaw([{ signedExtrinsic: good }], network, 1031)
    const rpc = mockRpc(t, network, 9501, metadata(network, 1041))
    const result = await decodeSignedExtrinsicsRaw(
        [{ signedExtrinsic: good }, { signedExtrinsic: newer }, { signedExtrinsic: '0xdeadbeef' }],
        network
    )
    assert.deepEqual(result[0], before[0])
    assert.equal(result[1].encodedData, modern)
    assert.equal(result[2].encodedData, null)
    assert.equal((await getRuntimeCached(network)).specVersion, 9501)
    assert.equal(rpc.reads.heads, 1)
})

void test('malformed tolerant batches do not promote a candidate and RPC outages preserve partial responses', async (t) => {
    const network = 'enjin-matrixchain'
    const rpc = mockRpc(t, network, 9601, metadata(network, 1041))
    const result = await decodeSignedExtrinsicsRaw([{ signedExtrinsic: '0xdeadbeef' }], network)
    assert.equal(result[0].encodedData, null)
    assert.equal((await getRuntimeCached(network)).specVersion, 1031)
    rpc.state.fail = true
    const outage = await decodeSignedExtrinsicsRaw([{ signedExtrinsic: '0xdeadbeef' }], network)
    assert.deepEqual(outage, result)
    assert.equal(((await encode({ call: remark, network })) as { spec_version: number }).spec_version, 1031)
})

void test('explicit historical and future bundled versions never retry or change defaults', async (t) => {
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => {
        throw new Error('Explicit versions must not contact RPC')
    })
    await assert.rejects(encode({ call: dispatch, network: 'enjin-matrixchain', spec_version: 1031 }), /Invalid U32/)
    await assert.rejects(decode({ call: '0xdeadbeef', network: 'enjin-matrixchain', spec_version: 1031 }))
    await assert.rejects(getRuntimeCached('enjin-matrixchain', 999999), /No metadata found/)
    assert.ok(await encode({ call: dispatch, network: 'enjin-matrixchain', spec_version: 1041 }))
    assert.equal((await getRuntimeCached('enjin-matrixchain')).specVersion, 1031)
    const malformed = await decodeSignedExtrinsicsRaw([{ signedExtrinsic: '0xdeadbeef' }], 'enjin-matrixchain', 1031)
    assert.equal(malformed[0].encodedData, null)
    assert.equal(rpc.mock.callCount(), 0)
})

void test('missing default metadata triggers RPC, while invalid replacement metadata can be retried later', async (t) => {
    const network = 'enjin-relaychain'
    const initial = DEFAULT_SPEC_VERSIONS[network]
    DEFAULT_SPEC_VERSIONS[network] = 999999
    t.after(() => {
        DEFAULT_SPEC_VERSIONS[network] = initial
    })
    const rpc = mockRpc(t, network, 9701, '0xdeadbeef')
    await assert.rejects(encode({ call: remark, network }))
    rpc.state.metadata = metadata(network, 1070)
    const encoded = await encode({ call: remark, network })
    assert.ok(!Array.isArray(encoded))
    assert.equal(encoded.spec_version, 9701)
    assert.equal(rpc.reads.metadata.length, 2)
})

void test('RPC outages cannot turn a failed version into a successful result, but defaults stay offline', async (t) => {
    const network = 'enjin-matrixchain'
    const rpc = mockRpc(t, network, 9801, metadata(network, 1041))
    rpc.state.fail = true
    await assert.rejects(encode({ call: dispatch, network }), /Invalid U32/)
    assert.equal((await getRuntimeCached(network)).specVersion, 1031)
    assert.ok(await encode({ call: remark, network }))
    assert.equal(rpc.reads.heads, 1)
})

void test('strict decoding rejects unconsumed bytes and invalid envelopes while preserving unsigned v5', async () => {
    const network = 'enjin-matrixchain'
    const runtime = await getRuntimeCached(network, 1031)
    const call = await encodeCall(remark, network, 1031)
    await assert.rejects(decode({ call: call + '00', network, spec_version: 1031 }))
    await assert.rejects(decode({ events: '0x0000', network, spec_version: 1031 }))
    const ext =
        '0x' + Buffer.from(runtime.encodeExtrinsic({ version: 4, call: runtime.decodeCall(call) })).toString('hex')
    await assert.rejects(decode({ extrinsic: ext + '00', network, spec_version: 1031 }))
    await assert.rejects(decode({ extrinsic: '0x00' + ext.slice(4), network, spec_version: 1031 }))
    const v5 = ext.slice(0, 4) + '05' + ext.slice(6)
    const decoded = await decode({ extrinsic: v5, network, spec_version: 1031 })
    assert.equal((decoded as { version: number }).version, 5)
})

void test('asynchronous failed operations do not promote the fetched runtime', async (t) => {
    const network = 'enjin-matrixchain'
    mockRpc(t, network, 9901, metadata(network, 1041))
    await assert.rejects(
        withRuntime(network, undefined, () => Promise.reject(new Error('bad operation'))),
        /bad operation/
    )
    assert.equal((await getRuntimeCached(network)).specVersion, 1031)
})

void test('invalid versions are rejected by every validator and RPC deadlines remain bounded', async () => {
    for (const spec_version of [-1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1, null, '1041']) {
        assert.equal(validateDecodeRequest({ call: '0x0102', spec_version }).valid, false)
        assert.equal(validateEncodeRequest({ call: remark, spec_version }).valid, false)
        assert.equal(validateDecodeSignedExtrinsicsRequest({ inputs: ['0x0102'], spec_version }).valid, false)
    }
    await assert.rejects(getRuntimeCached('enjin-matrixchain', -1), /Invalid spec_version/)
    await assert.rejects(withRpcTimeout(new Promise<never>(() => {}), 5), /timed out/)
    assert.equal(await withRpcTimeout(Promise.resolve('ready'), 5), 'ready')
})
