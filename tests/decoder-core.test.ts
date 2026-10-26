import assert from 'node:assert/strict'
import test from 'node:test'
import { decode, getLatestSpecVersion } from '~/decoder/core'
import { getRuntimeCached } from '~/decoder/metadata'

const calls = [
    '0x2809b69a070001030000000000000000000000000000000c6b65791476616c7565',
    '0x28040050f39b3b09148808c4f8f125575989d07e5d344cd508c91e47641a242b561f75b69a0700011004',
]

void test('decode attaches readable views to an array of calls', async () => {
    const result = await decode({ calls, readable: true })

    assert.ok(Array.isArray(result))
    assert.equal(result.length, calls.length)
    for (const item of result) {
        assert.ok(item && typeof item === 'object' && 'calls' in item)
        assert.ok('view' in item)
    }
})

void test('decode omits readable views from an array of calls by default', async () => {
    const result = await decode({ calls })

    assert.ok(Array.isArray(result))
    assert.equal(result.length, calls.length)
    for (const item of result) {
        assert.ok(item && typeof item === 'object' && 'calls' in item)
        assert.ok(!('view' in item))
    }
})

void test('Canary Matrixchain defaults to 1042 metadata for nested Fuel Tanks calls', async () => {
    const runtime = await getRuntimeCached('canary-matrixchain', 1042)
    const call = runtime.scaleCodec.encodeToHex(runtime.description.call, {
        __kind: 'FuelTanks',
        value: {
            __kind: 'dispatch',
            tankId: { __kind: 'Id', value: `0x${'11'.repeat(32)}` },
            ruleSetId: undefined,
            call: { __kind: 'System', value: { __kind: 'remark', remark: '0x74657374' } },
            settings: undefined,
        },
    })

    assert.equal(getLatestSpecVersion('canary-matrixchain'), 1042)
    const decoded = await decode({ network: 'canary-matrixchain', call })
    assert.deepEqual(decoded, await decode({ network: 'canary-matrixchain', spec_version: 1042, call }))
    const dispatch = (decoded as { calls: { FuelTanks: { dispatch: { call: unknown; rule_set_id: unknown } } } }).calls
        .FuelTanks.dispatch
    assert.equal(dispatch.rule_set_id, null)
    assert.deepEqual(dispatch.call, { System: { remark: { remark: [116, 101, 115, 116] } } })
})

void test('Enjin Matrixchain 1042 metadata decodes nested Fuel Tanks calls while the default stays 1031', async () => {
    const runtime = await getRuntimeCached('enjin-matrixchain', 1042)
    const call = runtime.scaleCodec.encodeToHex(runtime.description.call, {
        __kind: 'FuelTanks',
        value: {
            __kind: 'dispatch',
            tankId: { __kind: 'Id', value: `0x${'11'.repeat(32)}` },
            ruleSetId: undefined,
            call: { __kind: 'System', value: { __kind: 'remark', remark: '0x74657374' } },
            settings: undefined,
        },
    })

    assert.equal(getLatestSpecVersion('enjin-matrixchain'), 1031)
    const decoded = await decode({ network: 'enjin-matrixchain', spec_version: 1042, call })
    assert.deepEqual(decoded, await decode({ network: 'canary-matrixchain', spec_version: 1042, call }))
    const dispatch = (decoded as { calls: { FuelTanks: { dispatch: { call: unknown; rule_set_id: unknown } } } }).calls
        .FuelTanks.dispatch
    assert.equal(dispatch.rule_set_id, null)
    assert.deepEqual(dispatch.call, { System: { remark: { remark: [116, 101, 115, 116] } } })
})
