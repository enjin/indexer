import assert from 'node:assert/strict'
import test from 'node:test'
import { validateDryRunRequest } from '~/decoder/validation'

const publicKey = `0x${'12'.repeat(32)}`

void test('validateDryRunRequest accepts and normalizes valid input', () => {
    assert.deepEqual(validateDryRunRequest({ publicKey: publicKey.slice(2), encodedData: '0102' }), {
        valid: true,
        data: { publicKey, encodedData: '0x0102' },
    })
})

void test('validateDryRunRequest requires an object body', () => {
    assert.deepEqual(validateDryRunRequest(null), {
        valid: false,
        error: 'Request body must be an object',
    })
    assert.deepEqual(validateDryRunRequest([]), {
        valid: false,
        error: 'Request body must be an object',
    })
})

void test('validateDryRunRequest requires a 32-byte public key', () => {
    assert.deepEqual(validateDryRunRequest({ encodedData: '0x0102' }), {
        valid: false,
        error: '"publicKey" must be a string',
    })
    assert.deepEqual(validateDryRunRequest({ publicKey: '0x12', encodedData: '0x0102' }), {
        valid: false,
        error: '"publicKey" must be exactly 32 bytes',
    })
})

void test('validateDryRunRequest rejects malformed encoded data', () => {
    assert.deepEqual(validateDryRunRequest({ publicKey, encodedData: '0x' }), {
        valid: false,
        error: '"encodedData" must be a non-empty, byte-aligned hexadecimal value',
    })
    assert.deepEqual(validateDryRunRequest({ publicKey, encodedData: '0x123' }), {
        valid: false,
        error: '"encodedData" must be a non-empty, byte-aligned hexadecimal value',
    })
    assert.deepEqual(validateDryRunRequest({ publicKey, encodedData: '0xzz' }), {
        valid: false,
        error: '"encodedData" must be a non-empty, byte-aligned hexadecimal value',
    })
})
