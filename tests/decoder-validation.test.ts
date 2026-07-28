import assert from 'node:assert/strict'
import test from 'node:test'
import { validateDecodeRequest } from '~/decoder/validation'

void test('validateDecodeRequest accepts a call', () => {
    const result = validateDecodeRequest({ call: '0x0102' })

    assert.equal(result.valid, true)
    assert.equal(result.data.call, '0x0102')
})

void test('validateDecodeRequest accepts an array of calls', () => {
    const result = validateDecodeRequest({
        calls: ['0x0102', '0x0304'],
        network: 'canary',
        spec_version: 1,
    })

    assert.equal(result.valid, true)
    assert.deepEqual(result.data.calls, ['0x0102', '0x0304'])
    assert.equal(result.data.network, 'canary')
    assert.equal(result.data.spec_version, 1)
})

void test('validateDecodeRequest accepts an extrinsic', () => {
    const result = validateDecodeRequest({ extrinsic: '0x0102' })

    assert.equal(result.valid, true)
    assert.equal(result.data.extrinsic, '0x0102')
})

void test('validateDecodeRequest accepts an array of extrinsics', () => {
    const result = validateDecodeRequest({ extrinsics: ['0x0102', '0x0304'] })

    assert.equal(result.valid, true)
    assert.deepEqual(result.data.extrinsics, ['0x0102', '0x0304'])
})

void test('validateDecodeRequest rejects invalid call fields', () => {
    assert.deepEqual(validateDecodeRequest({ call: ['0x0102'] }), {
        valid: false,
        error: '"call" must be a string',
    })
    assert.deepEqual(validateDecodeRequest({ call: 'invalid' }), {
        valid: false,
        error: 'Call must be a valid hex string (0x followed by hex characters)',
    })
})

void test('validateDecodeRequest rejects a non-array calls field', () => {
    assert.deepEqual(validateDecodeRequest({ calls: '0x0102' }), {
        valid: false,
        error: '"calls" must be an array',
    })
})

void test('validateDecodeRequest rejects invalid extrinsic fields', () => {
    assert.deepEqual(validateDecodeRequest({ extrinsic: ['0x0102'] }), {
        valid: false,
        error: '"extrinsic" must be a string',
    })
    assert.deepEqual(validateDecodeRequest({ extrinsic: 'invalid' }), {
        valid: false,
        error: 'Extrinsic must be a valid hex string (0x followed by hex characters)',
    })
})

void test('validateDecodeRequest rejects a non-array extrinsics field', () => {
    assert.deepEqual(validateDecodeRequest({ extrinsics: '0x0102' }), {
        valid: false,
        error: '"extrinsics" must be an array',
    })
})

void test('validateDecodeRequest rejects invalid extrinsics', () => {
    assert.deepEqual(validateDecodeRequest({ extrinsics: ['0x0102', 'invalid'] }), {
        valid: false,
        error: 'All extrinsics must be valid hex strings',
    })
})

void test('validateDecodeRequest rejects invalid calls', () => {
    assert.deepEqual(validateDecodeRequest({ calls: ['0x0102', 'invalid'] }), {
        valid: false,
        error: 'All calls must be valid hex strings',
    })
})
