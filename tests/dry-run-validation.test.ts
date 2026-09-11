import assert from 'node:assert/strict'
import test from 'node:test'
import { MAX_DRY_RUN_INPUTS } from '~/decoder/types'
import { validateDryRunRequest } from '~/decoder/validation'

const publicKey = `0x${'12'.repeat(32)}`

void test('validateDryRunRequest accepts and normalizes valid input', () => {
    assert.deepEqual(validateDryRunRequest({ inputs: [{ publicKey: publicKey.slice(2), encodedData: '0102' }] }), {
        valid: true,
        data: { network: 'enjin-matrixchain', inputs: [{ publicKey, encodedData: '0x0102' }] },
    })
})

void test('validateDryRunRequest accepts and normalizes a requested network', () => {
    assert.deepEqual(validateDryRunRequest({ network: 'canary', inputs: [{ publicKey, encodedData: '0x0102' }] }), {
        valid: true,
        data: { network: 'canary-matrixchain', inputs: [{ publicKey, encodedData: '0x0102' }] },
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

void test('validateDryRunRequest requires a non-empty inputs array', () => {
    assert.deepEqual(validateDryRunRequest({}), {
        valid: false,
        error: '"inputs" must be a non-empty array',
    })
    assert.deepEqual(validateDryRunRequest({ inputs: [] }), {
        valid: false,
        error: '"inputs" must be a non-empty array',
    })
})

void test('validateDryRunRequest limits batch size', () => {
    const input = { publicKey, encodedData: '0x0102' }

    assert.deepEqual(validateDryRunRequest({ inputs: Array(MAX_DRY_RUN_INPUTS + 1).fill(input) }), {
        valid: false,
        error: `"inputs" must contain at most ${MAX_DRY_RUN_INPUTS} items`,
    })
})

void test('validateDryRunRequest requires a 32-byte public key for every input', () => {
    assert.deepEqual(validateDryRunRequest({ inputs: [{ encodedData: '0x0102' }] }), {
        valid: false,
        error: '"inputs[0].publicKey" must be a string',
    })
    assert.deepEqual(validateDryRunRequest({ inputs: [{ publicKey: '0x12', encodedData: '0x0102' }] }), {
        valid: false,
        error: '"inputs[0].publicKey" must be exactly 32 bytes',
    })
})

void test('validateDryRunRequest rejects malformed encoded data', () => {
    assert.deepEqual(validateDryRunRequest({ inputs: [{ publicKey, encodedData: '0x' }] }), {
        valid: false,
        error: '"inputs[0].encodedData" must be a non-empty, byte-aligned hexadecimal value',
    })
    assert.deepEqual(validateDryRunRequest({ inputs: [{ publicKey, encodedData: '0x123' }] }), {
        valid: false,
        error: '"inputs[0].encodedData" must be a non-empty, byte-aligned hexadecimal value',
    })
    assert.deepEqual(validateDryRunRequest({ inputs: [{ publicKey, encodedData: '0xzz' }] }), {
        valid: false,
        error: '"inputs[0].encodedData" must be a non-empty, byte-aligned hexadecimal value',
    })
})

void test('validateDryRunRequest rejects invalid networks', () => {
    assert.deepEqual(validateDryRunRequest({ network: 'unknown', inputs: [{ publicKey, encodedData: '0x0102' }] }), {
        valid: false,
        error: 'Invalid network. Must be one of: enjin-matrixchain, canary-matrixchain, enjin-relaychain, canary-relaychain, canary',
    })
})

void test('validateDryRunRequest accepts a fuel tank origin and normalizes its tank id', () => {
    const tankId = 'ab'.repeat(32)

    assert.deepEqual(
        validateDryRunRequest({
            inputs: [{ publicKey, encodedData: '0x0102', origin: { fuelTank: { tankId, ruleSetId: 2 } } }],
        }),
        {
            valid: true,
            data: {
                inputs: [
                    {
                        publicKey,
                        encodedData: '0x0102',
                        origin: { fuelTank: { tankId: `0x${tankId}`, ruleSetId: 2 } },
                    },
                ],
                network: 'enjin-matrixchain',
            },
        }
    )
})

void test('validateDryRunRequest defaults an omitted or null rule set to null', () => {
    const tankId = `0x${'ab'.repeat(32)}`

    for (const fuelTank of [{ tankId }, { tankId, ruleSetId: null }]) {
        const result = validateDryRunRequest({ inputs: [{ publicKey, encodedData: '0x0102', origin: { fuelTank } }] })

        assert.deepEqual(result, {
            valid: true,
            data: {
                inputs: [{ publicKey, encodedData: '0x0102', origin: { fuelTank: { tankId, ruleSetId: null } } }],
                network: 'enjin-matrixchain',
            },
        })
    }
})

void test('validateDryRunRequest treats an absent or null origin as a signed origin', () => {
    for (const origin of [undefined, null]) {
        const result = validateDryRunRequest({ inputs: [{ publicKey, encodedData: '0x0102', origin }] })

        assert.deepEqual(result, {
            valid: true,
            data: {
                inputs: [{ publicKey, encodedData: '0x0102' }],
                network: 'enjin-matrixchain',
            },
        })
    }
})

void test('validateDryRunRequest rejects unsupported origin variants', () => {
    assert.deepEqual(
        validateDryRunRequest({
            inputs: [{ publicKey, encodedData: '0x0102', origin: { signed: publicKey } }],
        }),
        {
            valid: false,
            error: '"inputs[0].origin" supports only the "fuelTank" variant',
        }
    )
})

void test('validateDryRunRequest rejects a malformed origin', () => {
    assert.deepEqual(validateDryRunRequest({ inputs: [{ publicKey, encodedData: '0x0102', origin: 'fuelTank' }] }), {
        valid: false,
        error: '"inputs[0].origin" must be an object',
    })

    assert.deepEqual(validateDryRunRequest({ inputs: [{ publicKey, encodedData: '0x0102', origin: {} }] }), {
        valid: false,
        error: '"inputs[0].origin.fuelTank" must be an object',
    })
})

void test('validateDryRunRequest requires a 32-byte tank id', () => {
    assert.deepEqual(
        validateDryRunRequest({ inputs: [{ publicKey, encodedData: '0x0102', origin: { fuelTank: {} } }] }),
        {
            valid: false,
            error: '"inputs[0].origin.fuelTank.tankId" must be a string',
        }
    )

    assert.deepEqual(
        validateDryRunRequest({
            inputs: [{ publicKey, encodedData: '0x0102', origin: { fuelTank: { tankId: '0xab' } } }],
        }),
        {
            valid: false,
            error: '"inputs[0].origin.fuelTank.tankId" must be exactly 32 bytes',
        }
    )
})

void test('validateDryRunRequest rejects a non-integer or negative rule set', () => {
    const tankId = `0x${'ab'.repeat(32)}`

    for (const ruleSetId of [-1, 1.5, '1']) {
        assert.deepEqual(
            validateDryRunRequest({
                inputs: [{ publicKey, encodedData: '0x0102', origin: { fuelTank: { tankId, ruleSetId } } }],
            }),
            {
                valid: false,
                error: '"inputs[0].origin.fuelTank.ruleSetId" must be a non-negative integer',
            }
        )
    }
})
