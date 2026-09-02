import assert from 'node:assert/strict'
import test from 'node:test'
import type { ApiPromise } from '@polkadot/api'
import { DRY_RUN_XCM_VERSION, dryRun, formatDryRunResult } from '~/decoder/dry-run'

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
