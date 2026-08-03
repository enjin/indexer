import assert from 'node:assert/strict'
import test from 'node:test'
import { validateEncodeRequest } from '~/decoder/validation'

const call = { pallet: 'MultiTokens', name: 'transfer', args: { amount: '1' } }

void test('validateEncodeRequest accepts a single call', () => {
    const result = validateEncodeRequest({ call })

    assert.ok(result.valid)
    assert.deepEqual(result.data.call, call)
    assert.equal(result.data.calls, undefined)
})

void test('validateEncodeRequest accepts an array of calls', () => {
    const result = validateEncodeRequest({ calls: [call, { pallet: 'Balances', name: 'transfer_all' }] })

    assert.ok(result.valid)
    assert.equal(result.data.call, undefined)
    assert.equal(result.data.calls?.length, 2)
    assert.deepEqual(result.data.calls[0], call)
})

void test('validateEncodeRequest rejects a body with neither call nor calls', () => {
    assert.deepEqual(validateEncodeRequest({ network: 'canary' }), {
        valid: false,
        error: 'Missing "call" or "calls" field',
    })
})

void test('validateEncodeRequest rejects a non-array calls field', () => {
    assert.deepEqual(validateEncodeRequest({ calls: call }), {
        valid: false,
        error: '"calls" must be an array',
    })
})

void test('validateEncodeRequest rejects an empty calls array', () => {
    assert.deepEqual(validateEncodeRequest({ calls: [] }), {
        valid: false,
        error: '"calls" must not be empty',
    })
})

void test('validateEncodeRequest reports the offending index for an invalid batch item', () => {
    assert.deepEqual(validateEncodeRequest({ calls: [call, { pallet: 'MultiTokens' }] }), {
        valid: false,
        error: '"calls[1].name" must be a non-empty string',
    })

    assert.deepEqual(validateEncodeRequest({ calls: ['not-an-object'] }), {
        valid: false,
        error: '"calls[0]" must be an object',
    })
})

void test('validateEncodeRequest still rejects invalid single-call fields', () => {
    assert.deepEqual(validateEncodeRequest({ call: [call] }), {
        valid: false,
        error: '"call" must be an object',
    })

    assert.deepEqual(validateEncodeRequest({ call: { pallet: '', name: 'transfer' } }), {
        valid: false,
        error: '"call.pallet" must be a non-empty string',
    })

    assert.deepEqual(validateEncodeRequest({ call: { pallet: 'MultiTokens', name: 'transfer', args: [] } }), {
        valid: false,
        error: '"call.args" must be an object',
    })
})
