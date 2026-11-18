import assert from 'node:assert/strict'
import test from 'node:test'
import { decode } from '~/decoder/core'
import { encode } from '~/encoder/core'

const calls = [
    { pallet: 'System', name: 'remark', args: { remark: '0x6b6579' } },
    { pallet: 'System', name: 'remark', args: { remark: '0x76616c7565' } },
]

void test('encode returns one result per call for a batch, matching single-call encoding', async () => {
    const batch = await encode({ calls })

    assert.ok(Array.isArray(batch))
    assert.equal(batch.length, calls.length)

    for (const [index, call] of calls.entries()) {
        const single = await encode({ call })

        assert.ok(!Array.isArray(single))
        assert.deepEqual(batch[index], single)
        assert.match(batch[index].encoded, /^0x[0-9a-f]+$/)
    }
})

void test('encode rejects a request with neither call nor calls', async () => {
    await assert.rejects(encode({}), { message: 'Invalid request: no call or calls provided' })
})

void test('encode uses the requested Canary Matrixchain metadata for earlier Fuel Tanks dispatches', async () => {
    const tankId = `0x${'11'.repeat(32)}`
    const call = {
        pallet: 'FuelTanks',
        name: 'dispatch',
        args: {
            tankId: { __kind: 'Id', value: tankId },
            ruleSetId: undefined,
            call: { __kind: 'System', value: { __kind: 'remark', remark: '0x6b6579' } },
            settings: undefined,
        },
    }

    // Since 1040 `rule_set_id` is an Option, so omitting it encodes None.
    for (const spec_version of [1041, 1042]) {
        assert.deepEqual(await encode({ call, network: 'canary-matrixchain', spec_version }), {
            encoded: `0x360500${'11'.repeat(32)}0000000c6b657900`,
            network: 'canary-matrixchain',
            spec_version,
        })
    }
    await assert.rejects(encode({ call, network: 'enjin-matrixchain', spec_version: 1031 }), /Invalid U32/)
})

void test('encode uses the Matrixchain 1043 metadata on Enjin and Canary', async () => {
    const tankId = `0x${'11'.repeat(32)}`
    const call = {
        pallet: 'FuelTanks',
        name: 'dispatch',
        args: {
            tankId: { __kind: 'Id', value: tankId },
            ruleSetId: undefined,
            call: { __kind: 'System', value: { __kind: 'remark', remark: '0x6b6579' } },
            settings: undefined,
        },
    }
    // 1043 removes pallets and adds MultiTokens calls, but FuelTanks.dispatch and System.remark keep their indices.
    const expected = `0x360500${'11'.repeat(32)}0000000c6b657900`

    for (const network of ['enjin-matrixchain', 'canary-matrixchain'] as const) {
        assert.deepEqual(await encode({ call, network, spec_version: 1043 }), {
            encoded: expected,
            network,
            spec_version: 1043,
        })
    }
})

void test('encode uses the enjin-relaychain 1080 metadata ahead of the relay upgrade', async () => {
    const tankId = `0x${'11'.repeat(32)}`
    const call = {
        pallet: 'FuelTanks',
        name: 'dispatch',
        args: {
            tankId: { __kind: 'Id', value: tankId },
            ruleSetId: undefined,
            call: { __kind: 'System', value: { __kind: 'remark', remark: '0x6b6579' } },
            settings: undefined,
        },
    }
    const expected = `0xfe0500${'11'.repeat(32)}0000000c6b657900`

    assert.deepEqual(await encode({ call, network: 'enjin-relaychain', spec_version: 1080 }), {
        encoded: expected,
        network: 'enjin-relaychain',
        spec_version: 1080,
    })
    // Enjin and canary relay 1080 share every call shape; only chain constants differ.
    assert.equal((await encode({ call, network: 'canary-relaychain', spec_version: 1080 })).encoded, expected)
    await assert.rejects(encode({ call, network: 'enjin-relaychain', spec_version: 1070 }), /Invalid U32/)
})

void test('Canary Relaychain uses 1082 for encoding and decoding by default', async () => {
    const network = 'canary-relaychain'
    const call = { pallet: 'StakeExchange', name: 'remove_liquidity_config' }

    assert.deepEqual(await encode({ call, network }), { encoded: '0x1306', network, spec_version: 1082 })
    assert.deepEqual(await decode({ call: '0x1306', network }), {
        calls: { StakeExchange: { remove_liquidity_config: {} } },
    })
})
