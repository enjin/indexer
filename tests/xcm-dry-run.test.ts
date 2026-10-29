import assert from 'node:assert/strict'
import test from 'node:test'
import type { ApiPromise } from '@polkadot/api'
import { dryRun, dryRunBatch } from '~/decoder/dry-run'
import { dryRunForwardedXcms, MAX_DRY_RUN_XCM_MESSAGES, type ForwardedXcms } from '~/decoder/xcm-dry-run'
import type { Network } from '~/decoder/types'

const request = { publicKey: `0x${'12'.repeat(32)}`, encodedData: '0x0102' }
const parent = { toJSON: () => ({ v5: { parents: 1, interior: { here: null } } }) }
const child = (id = 1000) => ({ toJSON: () => ({ v5: { parents: 0, interior: { x1: [{ parachain: id }] } } }) })
const codec = (type: string, hex = '0x09') => ({ type, toString: () => type, toHex: () => hex })
const message = codec('message', '0x051001020304')
const forwarded: ForwardedXcms = [[parent, [message]]]
const complete = { isComplete: true }
const incomplete = {
    isComplete: false,
    isIncomplete: true,
    asIncomplete: { error: { index: { toString: () => '3' }, error: codec('FailedToTransactAsset') } },
}

function result(executionResult: unknown = complete, forwardedXcms: ForwardedXcms = []) {
    return { isErr: false, asOk: { executionResult, forwardedXcms } }
}

function source(forwardedXcms: ForwardedXcms = [], id = '1000') {
    return {
        call: { dryRunApi: { dryRunCall: () => Promise.resolve(result({ isOk: true }, forwardedXcms)) } },
        query: { parachainInfo: { parachainId: () => Promise.resolve({ toString: () => id }) } },
        registry: {},
    } as unknown as ApiPromise
}

function destination(reply: unknown = result(), id = '1000') {
    const calls: unknown[][] = []
    const api = {
        call: {
            dryRunApi: {
                dryRunXcm: (...args: unknown[]) => {
                    calls.push(args)
                    return Promise.resolve(reply)
                },
            },
        },
        query: { parachainInfo: { parachainId: () => Promise.resolve({ toString: () => id }) } },
    } as unknown as ApiPromise
    return { api, calls }
}

void test('ordinary calls and empty message groups never resolve a destination API', async () => {
    for (const messages of [[], [[parent, []]]] as ForwardedXcms[]) {
        assert.deepEqual(
            await dryRun(source(messages), request, {
                network: 'canary-matrixchain',
                getApi: () => assert.fail('must not connect to another chain'),
            }),
            { success: true }
        )
    }
})

for (const network of [
    'canary-matrixchain',
    'canary-relaychain',
    'enjin-matrixchain',
    'enjin-relaychain',
] as Network[]) {
    void test(`forwarded XCM from ${network} uses the paired chain, reanchored origin and original SCALE bytes`, async () => {
        const fromMatrix = network.endsWith('-matrixchain')
        const peer = network.replace(
            fromMatrix ? 'matrixchain' : 'relaychain',
            fromMatrix ? 'relaychain' : 'matrixchain'
        )
        const receiver = destination(result(), '2000')
        const messages: ForwardedXcms = [[fromMatrix ? parent : child(2000), [message]]]
        const resolved: Network[] = []

        assert.deepEqual(
            await dryRun(source(messages, '2000'), request, {
                network,
                getApi: (target) => {
                    resolved.push(target)
                    return Promise.resolve(receiver.api)
                },
            }),
            { success: true }
        )
        assert.deepEqual(resolved, [peer])
        assert.deepEqual(receiver.calls, [
            [
                {
                    V5: fromMatrix
                        ? { parents: 0, interior: { X1: [{ Parachain: '2000' }] } }
                        : { parents: 1, interior: 'Here' },
                },
                message.toHex(),
            ],
        ])
    })
}

for (const outcome of [
    incomplete,
    { isComplete: false, isIncomplete: false, asError: incomplete.asIncomplete.error },
]) {
    void test(`destination ${outcome.isIncomplete ? 'Incomplete' : 'Error'} fails even when the API returns Ok`, async () => {
        const receiver = destination(result(outcome))
        assert.deepEqual(
            await dryRun(source(forwarded), request, {
                network: 'canary-matrixchain',
                getApi: () => Promise.resolve(receiver.api),
            }),
            {
                success: false,
                error: {
                    code: '0x09',
                    name: 'Xcm.FailedToTransactAsset',
                    message: 'XCM execution on canary-relaychain failed at instruction 3: FailedToTransactAsset.',
                },
            }
        )
    })
}

void test('destination API errors and V4 execution errors retain the existing error contract', async () => {
    for (const reply of [
        { isErr: true, asErr: codec('VersionedConversionFailed') },
        result({ isComplete: false, isIncomplete: true, asIncomplete: { error: codec('TooExpensive') } }),
        result({ isComplete: false, isIncomplete: false, asError: { error: codec('Barrier') } }),
    ]) {
        const response = await dryRun(source(forwarded), request, {
            network: 'canary-matrixchain',
            getApi: () => Promise.resolve(destination(reply).api),
        })
        assert.equal(response.success, false)
        assert.equal(response.error.code, '0x09')
        assert.match(response.error.name, /^Xcm\.(VersionedConversionFailed|TooExpensive|Barrier)$/)
        assert.match(response.error.message, /canary-relaychain/)
    }
})

void test('forwarded messages cannot silently pass without a network context or destination runtime API', async () => {
    const missingContext = await dryRun(source(forwarded), request)
    assert.equal(missingContext.success, false)
    assert.equal(missingContext.error.name, 'Xcm.DryRunUnavailable')

    const response = await dryRun(source(forwarded), request, {
        network: 'canary-matrixchain',
        getApi: () => Promise.resolve({ call: {} } as ApiPromise),
    })
    assert.equal(response.success, false)
    assert.equal(response.error.name, 'Xcm.DryRunUnavailable')
    assert.match(response.error.message, /canary-relaychain/)
})

void test('unsupported XCM routes fail rather than simulating on the wrong chain', async () => {
    for (const [network, location] of [
        ['canary-relaychain', child(9999)],
        ['canary-matrixchain', child()],
        ['canary-matrixchain', { toJSON: () => ({ v5: { parents: 1, interior: { x1: [{ parachain: 9999 }] } } }) }],
    ] as const) {
        const receiver = destination()
        const response = await dryRun(source([[location, [message]]]), request, {
            network,
            getApi: () => Promise.resolve(receiver.api),
        })
        assert.equal(response.success, false)
        assert.equal(response.error.name, 'Xcm.UnsupportedDestination')
        assert.equal(receiver.calls.length, 0)
    }
})

void test('source execution failures short circuit destination checks', async () => {
    const api = source(forwarded)
    api.call.dryRunApi.dryRunCall = (() => Promise.resolve({ isErr: true, asErr: codec('Rejected') })) as never
    const response = await dryRun(api, request, {
        network: 'canary-matrixchain',
        getApi: () => assert.fail('must preserve source failure'),
    })
    assert.equal(response.success, false)
    assert.equal(response.error.name, 'Rejected')
})

void test('all messages emitted by a batched call are checked and a later destination failure is returned', async () => {
    const api = source([[parent, [message, message]]])
    let calls = 0
    const receiver = destination()
    receiver.api.call.dryRunApi.dryRunXcm = (() =>
        Promise.resolve(result(++calls === 2 ? incomplete : complete))) as never
    const response = await dryRun(api, request, {
        network: 'canary-matrixchain',
        getApi: () => Promise.resolve(receiver.api),
    })
    assert.equal(response.success, false)
    assert.equal(calls, 2)
})

void test('HTTP input batches preserve order when only one input emits XCM', async () => {
    const api = source()
    api.call.dryRunApi.dryRunCall = ((_origin: unknown, encodedData: string) =>
        Promise.resolve(result({ isOk: true }, encodedData === request.encodedData ? forwarded : []))) as never
    const receiver = destination(result(incomplete))
    const responses = await dryRunBatch(api, [{ ...request, encodedData: '0x0000' }, request], {
        network: 'canary-matrixchain',
        getApi: () => Promise.resolve(receiver.api),
    })
    assert.deepEqual(
        responses.map((response) => response.success),
        [true, false]
    )
    assert.equal(receiver.calls.length, 1)
})

void test('messages forwarded again by the destination are checked with the next origin', async () => {
    const relay = destination(result(complete, [[child(), [message]]]))
    const matrix = destination(result(incomplete))
    const response = await dryRunForwardedXcms(source(), forwarded, {
        network: 'canary-matrixchain',
        getApi: (network) => Promise.resolve(network === 'canary-relaychain' ? relay.api : matrix.api),
    })
    assert.equal(response.success, false)
    assert.match(response.error.message, /canary-matrixchain/)
    assert.deepEqual(matrix.calls, [[{ V5: { parents: 1, interior: 'Here' } }, message.toHex()]])
})

void test('recursive forwarding is bounded and never silently skips remaining messages', async () => {
    const relay = destination(result(complete, [[child(), [message]]]))
    const matrix = destination(result(complete, forwarded))
    const response = await dryRunForwardedXcms(source(), forwarded, {
        network: 'canary-matrixchain',
        getApi: (network) => Promise.resolve(network === 'canary-relaychain' ? relay.api : matrix.api),
    })
    assert.equal(response.success, false)
    assert.equal(response.error.name, 'Xcm.DryRunLimitExceeded')
    assert.equal(relay.calls.length + matrix.calls.length, MAX_DRY_RUN_XCM_MESSAGES)
})

void test('destination RPC failures propagate instead of reporting a successful simulation', async () => {
    await assert.rejects(
        dryRun(source(forwarded), request, {
            network: 'canary-matrixchain',
            getApi: () => Promise.reject(new Error('RPC unavailable')),
        }),
        /RPC unavailable/
    )
})
