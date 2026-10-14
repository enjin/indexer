import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test, { afterEach, beforeEach } from 'node:test'
import { encode, encodeCall, encodeCalls } from '~/codec/encoder/core'
import { assertEncodeCallInput, assertEncodeCallInputs, EncoderInputError } from '~/codec/encoder/input-validation'
import { clearRuntimeCache, getRuntimeCached } from '~/codec/metadata'
import { decode } from '~/codec/decoder/core'
import DecoderRpc from '~/codec/rpc'

beforeEach(clearRuntimeCache)
afterEach(clearRuntimeCache)

const remark = { pallet: 'System', name: 'remark', args: { remark: '0x6b6579' } }
const transfer = {
    pallet: 'Balances',
    name: 'transfer_keep_alive',
    args: { dest: { __kind: 'Id', value: `0x${'11'.repeat(32)}` }, value: '9007199254740993' },
}
const dispatch = {
    pallet: 'FuelTanks',
    name: 'dispatch',
    args: {
        tankId: transfer.args.dest,
        ruleSetId: 0,
        call: { __kind: 'System', value: { __kind: 'remark', remark: '0x6b6579' } },
        settings: { useNoneOrigin: false, paysRemainingFee: false, createAccount: true },
    },
}

void test('all encoder APIs reject the reserved discriminator before selecting a runtime', async (t) => {
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => {
        throw new Error('RPC must not run')
    })
    const overridden = { ...remark, args: { ...remark.args, __kind: 'remark_with_event' } }
    await assert.rejects(encode({ call: overridden }), EncoderInputError)
    await assert.rejects(encode({ calls: [remark, overridden] }), /calls\[1\]\.args\.__kind/)
    await assert.rejects(encodeCall(overridden, 'enjin-matrixchain'), EncoderInputError)
    await assert.rejects(encodeCalls([overridden], 'enjin-matrixchain'), EncoderInputError)
    assert.equal(rpc.mock.callCount(), 0)
})

void test('unsafe integers are rejected recursively before fallback, while decimal strings remain exact', async (t) => {
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => {
        throw new Error('RPC must not run')
    })
    const unsafe = { ...transfer, args: { ...transfer.args, value: Number.MAX_SAFE_INTEGER + 1 } }
    await assert.rejects(encode({ call: unsafe }), /safe integer/)
    await assert.rejects(encodeCall(unsafe, 'enjin-matrixchain'), /safe integer/)
    await assert.rejects(encodeCalls([transfer, unsafe], 'enjin-matrixchain'), /safe integer/)
    await assert.rejects(
        encode({ call: { pallet: 'Utility', name: 'batch', args: { calls: [{ nested: [unsafe.args.value] }] } } }),
        /safe integer/
    )
    const encoded = await encode({ call: transfer })
    assert.ok(!Array.isArray(encoded))
    assert.equal(
        (await decode({ call: encoded.encoded })).calls.Balances.transfer_keep_alive.value,
        BigInt(transfer.args.value)
    )
    assert.equal(rpc.mock.callCount(), 0)
})

void test('static validation bounds nesting and total batch items and accepts nested variants', () => {
    let nested: unknown = 'leaf'
    for (let depth = 0; depth < 66; depth++) nested = { value: nested }
    assert.throws(() => {
        assertEncodeCallInput({ ...remark, args: { nested } })
    }, /depth or item limit/)
    assert.throws(() => {
        assertEncodeCallInputs([
            { ...remark, args: { entries: Array.from({ length: 6000 }, () => 0) } },
            { ...remark, args: { entries: Array.from({ length: 6000 }, () => 0) } },
        ])
    }, /depth or item limit/)
    const cyclic: Record<string, unknown> = {}
    cyclic.self = cyclic
    assert.throws(() => {
        assertEncodeCallInput({ ...remark, args: cyclic })
    }, /depth or item limit/)
    assert.doesNotThrow(() => {
        assertEncodeCallInput(dispatch)
    })
})

void test('unknown top-level and nested variant fields are rejected with explicit metadata offline', async (t) => {
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => {
        throw new Error('RPC must not run')
    })
    await assert.rejects(
        encode({ call: { ...transfer, args: { ...transfer.args, keepAlive: true } }, spec_version: 1031 }),
        /Unknown encode argument .*keepAlive/
    )
    await assert.rejects(encode({ call: dispatch, spec_version: 1031 }), /Unknown encode argument .*createAccount/)
    await assert.rejects(
        encode({
            call: { ...transfer, args: { ...transfer.args, dest: { ...transfer.args.dest, unexpected: true } } },
            spec_version: 1031,
        }),
        /Unknown encode argument .*unexpected/
    )
    await assert.rejects(
        encode({
            call: {
                ...dispatch,
                args: {
                    ...dispatch.args,
                    settings: { useNoneOrigin: false, paysRemainingFee: false },
                    call: { __kind: 'System', value: { __kind: 'remark', remark: '0x6b6579', extra: true } },
                },
            },
            spec_version: 1031,
        }),
        /Unknown encode argument .*extra/
    )
    assert.equal(rpc.mock.callCount(), 0)
})

void test('metadata-aware validation preserves legitimate optional fields and nested call arrays', async () => {
    const calls = [
        { __kind: 'System', value: { __kind: 'remark', remark: '0x6b6579' } },
        { __kind: 'System', value: { __kind: 'remark_with_event', remark: '0x76616c7565' } },
    ]
    const encoded = await encode({ call: { pallet: 'Utility', name: 'batch', args: { calls } }, spec_version: 1031 })
    assert.ok(!Array.isArray(encoded))
    assert.equal((await decode({ call: encoded.encoded, spec_version: 1031 })).calls.Utility.batch.calls.length, 2)
    const modern = await encode({ call: dispatch, spec_version: 1041 })
    assert.ok(!Array.isArray(modern))
    assert.equal(
        (await decode({ call: modern.encoded, spec_version: 1041 })).calls.FuelTanks.dispatch.settings.create_account,
        true
    )
    const noArgs = await encode({
        call: { pallet: 'System', name: 'set_heap_pages', args: { pages: '16' } },
        spec_version: 1031,
    })
    assert.ok(!Array.isArray(noArgs))
})

void test('nested argument fallback promotes only a fully successful replacement runtime', async (t) => {
    const row = readFileSync('typegen/enjin-matrixchain.jsonl', 'utf8')
        .trim()
        .split('\n')
        .map((line) => JSON.parse(line))
        .find((item) => item.specVersion === 1041)
    assert.ok(row)
    let reads = 0
    const rpc = t.mock.method(DecoderRpc, 'getInstance', () => {
        reads++
        return Promise.resolve({
            ensureConnected: () => Promise.resolve(),
            api: {
                rpc: {
                    chain: { getBlockHash: () => Promise.resolve('0xblock') },
                    state: {
                        getRuntimeVersion: () =>
                            Promise.resolve({
                                specName: { toString: () => 'matrix-enjin' },
                                specVersion: { toNumber: () => 1041 },
                                implName: { toString: () => 'enjin' },
                                implVersion: { toNumber: () => 1041 },
                            }),
                        getMetadata: () => Promise.resolve({ toHex: () => row.metadata }),
                    },
                },
            },
        } as unknown as DecoderRpc)
    })
    await assert.rejects(
        encode({
            calls: [
                remark,
                { ...dispatch, args: { ...dispatch.args, settings: { ...dispatch.args.settings, unexpected: true } } },
            ],
        }),
        /Unknown encode argument .*unexpected/
    )
    assert.equal((await getRuntimeCached('enjin-matrixchain')).specVersion, 1031)
    assert.equal(reads, 1)
    const results = await encode({ calls: [remark, dispatch] })
    assert.ok(Array.isArray(results))
    assert.ok(results.every((item) => item.spec_version === 1041))
    const decoded = await decode({ call: results[1].encoded })
    assert.equal(decoded.calls.FuelTanks.dispatch.settings.create_account, true)
    assert.equal((await getRuntimeCached('enjin-matrixchain')).specVersion, 1041)
    await encode({ call: remark })
    assert.equal(reads, 1)
    assert.equal(rpc.mock.callCount(), 1)
})
