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
