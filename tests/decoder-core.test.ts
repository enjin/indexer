import assert from 'node:assert/strict'
import test from 'node:test'
import { decode } from '~/decoder/core'

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
