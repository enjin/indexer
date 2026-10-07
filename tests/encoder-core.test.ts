import assert from 'node:assert/strict'
import test from 'node:test'
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

void test('encode uses the enjin-matrixchain 1041 metadata ahead of the enjin upgrade', async () => {
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
    assert.deepEqual(await encode({ call, network: 'enjin-matrixchain', spec_version: 1041 }), {
        encoded: `0x360500${'11'.repeat(32)}0000000c6b657900`,
        network: 'enjin-matrixchain',
        spec_version: 1041,
    })
    await assert.rejects(encode({ call, network: 'enjin-matrixchain', spec_version: 1031 }), /Invalid U32/)
})
