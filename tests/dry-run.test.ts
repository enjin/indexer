import assert from 'node:assert/strict'
import test from 'node:test'
import type { ApiPromise } from '@polkadot/api'
import {
    DRY_RUN_BILLED_DEPOSIT,
    DRY_RUN_CONCURRENCY,
    DRY_RUN_XCM_VERSION,
    buildDryRunOrigin,
    dryRun,
    dryRunBatch,
    formatDryRunResult,
} from '~/decoder/dry-run'

function codec(code: string, type?: string) {
    return {
        type,
        toHex: () => code,
        toString: () => type ?? code,
    }
}

void test('formatDryRunResult reports successful execution', () => {
    const result = formatDryRunResult({} as never, {
        isErr: false,
        asErr: codec('0x00'),
        asOk: { executionResult: { isOk: true, asErr: undefined as never } },
    })

    assert.deepEqual(result, { success: true })
})

void test('formatDryRunResult reports runtime API errors', () => {
    const result = formatDryRunResult({} as never, {
        isErr: true,
        asErr: codec('0x01', 'VersionedConversionFailed'),
        asOk: undefined as never,
    })

    assert.deepEqual(result, {
        success: false,
        error: {
            code: '0x01',
            name: 'VersionedConversionFailed',
            message: 'The dry-run API returned VersionedConversionFailed.',
        },
    })
})

void test('formatDryRunResult resolves module dispatch errors', () => {
    const moduleError = codec('0x28040000')
    const result = formatDryRunResult(
        {
            findMetaError: () => ({
                section: 'MultiTokens',
                name: 'NoPermission',
                docs: ['The caller has no permission.'],
            }),
        },
        {
            isErr: false,
            asErr: codec('0x00'),
            asOk: {
                executionResult: {
                    isOk: false,
                    asErr: {
                        error: { ...codec('0x03'), type: 'Module', isModule: true, asModule: moduleError },
                    },
                },
            },
        }
    )

    assert.deepEqual(result, {
        success: false,
        error: {
            code: '0x28040000',
            name: 'MultiTokens.NoPermission',
            message: 'The caller has no permission.',
        },
    })
})

void test('formatDryRunResult handles unknown module errors', () => {
    const moduleError = codec('0xff000000')
    const result = formatDryRunResult(
        {
            findMetaError: () => {
                throw new Error('Unknown error')
            },
        },
        {
            isErr: false,
            asErr: codec('0x00'),
            asOk: {
                executionResult: {
                    isOk: false,
                    asErr: {
                        error: { ...codec('0x03'), type: 'Module', isModule: true, asModule: moduleError },
                    },
                },
            },
        }
    )

    assert.deepEqual(result, {
        success: false,
        error: {
            code: '0xff000000',
            name: 'Module',
            message: 'The call returned an unknown module error.',
        },
    })
})

void test('formatDryRunResult describes nested non-module errors', () => {
    const result = formatDryRunResult({} as never, {
        isErr: false,
        asErr: codec('0x00'),
        asOk: {
            executionResult: {
                isOk: false,
                asErr: {
                    error: {
                        ...codec('0x07'),
                        type: 'Token',
                        value: { type: 'FundsUnavailable' },
                        isModule: false,
                        asModule: undefined as never,
                    },
                },
            },
        },
    })

    assert.deepEqual(result, {
        success: false,
        error: {
            code: '0x07',
            name: 'Token.FundsUnavailable',
            message: 'The call returned Token.FundsUnavailable.',
        },
    })
})

void test('dryRun invokes the configured runtime API with the expected arguments', async () => {
    const calls: unknown[][] = []
    const api = {
        call: {
            dryRunApi: {
                dryRunCall: (...args: unknown[]) => {
                    calls.push(args)
                    return Promise.resolve({
                        isErr: false,
                        asErr: codec('0x00'),
                        asOk: { executionResult: { isOk: true, asErr: undefined as never } },
                    })
                },
            },
        },
        registry: {},
    } as unknown as ApiPromise
    const request = { publicKey: `0x${'12'.repeat(32)}`, encodedData: '0x0102' }

    assert.deepEqual(await dryRun(api, request), { success: true })
    assert.deepEqual(calls, [[{ system: { Signed: request.publicKey } }, request.encodedData, DRY_RUN_XCM_VERSION]])
})

void test('dryRun fails clearly when the runtime API is unavailable', async () => {
    const api = { call: {}, registry: {} } as unknown as ApiPromise

    await assert.rejects(
        dryRun(api, { publicKey: `0x${'12'.repeat(32)}`, encodedData: '0x0102' }),
        /dryRunApi\.dryRunCall is not available/
    )
})

void test('dryRunBatch preserves input order and bounds concurrency', async () => {
    let active = 0
    let maxActive = 0
    const api = {
        call: {
            dryRunApi: {
                dryRunCall: (_origin: unknown, encodedData: string) => {
                    active++
                    maxActive = Math.max(maxActive, active)

                    return new Promise((resolve) => {
                        setImmediate(() => {
                            active--
                            resolve({
                                isErr: encodedData === '0x02',
                                asErr: codec(encodedData, 'Rejected'),
                                asOk: { executionResult: { isOk: true, asErr: undefined as never } },
                            })
                        })
                    })
                },
            },
        },
        registry: {},
    } as unknown as ApiPromise
    const inputs = Array.from({ length: DRY_RUN_CONCURRENCY + 2 }, (_, index) => ({
        publicKey: `0x${'12'.repeat(32)}`,
        encodedData: `0x0${index}`,
    }))

    const results = await dryRunBatch(api, inputs)

    assert.equal(maxActive, DRY_RUN_CONCURRENCY)
    assert.equal(results.length, inputs.length)
    assert.deepEqual(results[2], {
        success: false,
        error: { code: '0x02', name: 'Rejected', message: 'The dry-run API returned Rejected.' },
    })
})

void test('buildDryRunOrigin falls back to a signed origin when no origin is requested', () => {
    const publicKey = `0x${'12'.repeat(32)}`

    assert.deepEqual(buildDryRunOrigin({ publicKey, encodedData: '0x0102' }), {
        system: { Signed: publicKey },
    })
})

void test('buildDryRunOrigin builds a fuel tank origin with the caller as the public key', () => {
    const publicKey = `0x${'12'.repeat(32)}`
    const tankId = `0x${'ab'.repeat(32)}`

    assert.deepEqual(
        buildDryRunOrigin({
            publicKey,
            encodedData: '0x0102',
            origin: { fuelTank: { tankId, ruleSetId: 3 } },
        }),
        {
            FuelTanks: {
                FuelTank: {
                    caller: publicKey,
                    tankId,
                    providesDeposit: false,
                    ruleSetId: 3,
                    billedDeposit: DRY_RUN_BILLED_DEPOSIT,
                },
            },
        }
    )
})

void test('buildDryRunOrigin maps an absent rule set to None so the runtime auto-selects one', () => {
    const publicKey = `0x${'12'.repeat(32)}`
    const tankId = `0x${'ab'.repeat(32)}`

    for (const fuelTank of [{ tankId }, { tankId, ruleSetId: null }, { tankId, ruleSetId: undefined }]) {
        const origin = buildDryRunOrigin({ publicKey, encodedData: '0x0102', origin: { fuelTank } })

        assert.deepEqual(origin, {
            FuelTanks: {
                FuelTank: {
                    caller: publicKey,
                    tankId,
                    providesDeposit: false,
                    ruleSetId: null,
                    billedDeposit: DRY_RUN_BILLED_DEPOSIT,
                },
            },
        })
    }
})

void test('buildDryRunOrigin keeps rule set zero distinct from an absent rule set', () => {
    const publicKey = `0x${'12'.repeat(32)}`
    const tankId = `0x${'ab'.repeat(32)}`
    const origin = buildDryRunOrigin({
        publicKey,
        encodedData: '0x0102',
        origin: { fuelTank: { tankId, ruleSetId: 0 } },
    })

    assert.deepEqual(origin, {
        FuelTanks: {
            FuelTank: {
                caller: publicKey,
                tankId,
                providesDeposit: false,
                ruleSetId: 0,
                billedDeposit: DRY_RUN_BILLED_DEPOSIT,
            },
        },
    })
})

void test('dryRun forwards a fuel tank origin to the runtime API', async () => {
    const calls: unknown[][] = []
    const api = {
        call: {
            dryRunApi: {
                dryRunCall: (...args: unknown[]) => {
                    calls.push(args)
                    return Promise.resolve({
                        isErr: false,
                        asErr: codec('0x00'),
                        asOk: { executionResult: { isOk: true, asErr: undefined as never } },
                    })
                },
            },
        },
        registry: {},
    } as unknown as ApiPromise
    const tankId = `0x${'ab'.repeat(32)}`
    const request = {
        publicKey: `0x${'12'.repeat(32)}`,
        encodedData: '0x0102',
        origin: { fuelTank: { tankId, ruleSetId: 1 } },
    }

    assert.deepEqual(await dryRun(api, request), { success: true })
    assert.deepEqual(calls, [
        [
            {
                FuelTanks: {
                    FuelTank: {
                        caller: request.publicKey,
                        tankId,
                        providesDeposit: false,
                        ruleSetId: 1,
                        billedDeposit: DRY_RUN_BILLED_DEPOSIT,
                    },
                },
            },
            request.encodedData,
            DRY_RUN_XCM_VERSION,
        ],
    ])
})

void test('dryRunBatch dry-runs signed and fuel tank origins in one batch', async () => {
    const origins: unknown[] = []
    const api = {
        call: {
            dryRunApi: {
                dryRunCall: (origin: unknown) => {
                    origins.push(origin)
                    return Promise.resolve({
                        isErr: false,
                        asErr: codec('0x00'),
                        asOk: { executionResult: { isOk: true, asErr: undefined as never } },
                    })
                },
            },
        },
        registry: {},
    } as unknown as ApiPromise
    const publicKey = `0x${'12'.repeat(32)}`
    const tankId = `0x${'ab'.repeat(32)}`

    const results = await dryRunBatch(api, [
        { publicKey, encodedData: '0x01' },
        { publicKey, encodedData: '0x02', origin: { fuelTank: { tankId } } },
    ])

    assert.deepEqual(results, [{ success: true }, { success: true }])
    assert.deepEqual(origins[0], { system: { Signed: publicKey } })
    assert.deepEqual(origins[1], {
        FuelTanks: {
            FuelTank: {
                caller: publicKey,
                tankId,
                providesDeposit: false,
                ruleSetId: null,
                billedDeposit: DRY_RUN_BILLED_DEPOSIT,
            },
        },
    })
})
