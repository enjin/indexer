import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { getRuntimeCached } from '~/codec/metadata'
import type { Network } from '~/codec/types'
import type { Block, CommonContext, EventItem } from '~/contexts'
import { Account, TeleportBalanceWithdrawn } from '~/model'
import config from '~/util/config'

// Exercise the real handler and runtime decoders without opening queue connections.
const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined)
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = { QueueUtils: {} }
testRequire.cache[queueModulePath] = queueModule
const { attempted: matrixAttempted } = testRequire(
    '~/pallet/polkadot-xcm/processors/attempted'
) as typeof import('~/pallet/polkadot-xcm/processors/attempted')
const { attempted: relayAttempted } = testRequire(
    '~/pallet/xcm-pallet/processors/attempted'
) as typeof import('~/pallet/xcm-pallet/processors/attempted')
assert.equal(testRequire.cache[testRequire.resolve('bullmq')], undefined)
after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

const originalChainName = config.chainName
after(() => {
    config.chainName = originalChainName
})

const sender = `0x${'11'.repeat(32)}`
const beneficiary = `0x${'22'.repeat(32)}`
const amount = '123456789012345678901234567890'

async function fixture(network: Network, spec: number) {
    config.chainName = network
    const runtime = await getRuntimeCached(network, spec)
    const matrix = network.endsWith('matrixchain')
    const pallet = matrix ? 'PolkadotXcm' : 'XcmPallet'
    const handler = matrix ? matrixAttempted : relayAttempted
    const block = { _runtime: runtime, height: 42, specName: network, specVersion: spec } as Block
    const ctx = {
        store: { findOneBy: (_entity: unknown, where: { id: string }) => Promise.resolve(new Account(where)) },
    } as unknown as CommonContext
    const event = (name: string, args: unknown = {}): EventItem =>
        ({
            id: '42-1',
            name: `${pallet}.Attempted`,
            block,
            extrinsic: { id: '42-0', signature: { address: { __kind: 'Id', value: sender } } },
            call: { name, args, block },
        }) as unknown as EventItem
    const version = spec === 1041 || spec === 1080 ? 'V4' : 'V3'
    const destination = matrix
        ? { __kind: 'Here' }
        : {
              __kind: 'X1',
              value: version === 'V3' ? { __kind: 'Parachain', value: 1000 } : [{ __kind: 'Parachain', value: 1000 }],
          }
    const location = { parents: matrix ? 1 : 0, interior: { __kind: 'Here' } }
    const args = {
        dest: { __kind: version, value: { parents: matrix ? 1 : 0, interior: destination } },
        beneficiary: {
            __kind: version,
            value: {
                parents: 0,
                interior: {
                    __kind: 'X1',
                    value:
                        version === 'V3'
                            ? { __kind: 'AccountId32', id: beneficiary }
                            : [{ __kind: 'AccountId32', id: beneficiary }],
                },
            },
        },
        assets: {
            __kind: version,
            value: [
                {
                    id: version === 'V3' ? { __kind: 'Concrete', value: location } : location,
                    fun: { __kind: 'Fungible', value: amount },
                },
            ],
        },
        feeAssetItem: 0,
        weightLimit: { __kind: 'Unlimited' },
    }
    const wrapped = (method: string, wrapper = 'dispatch', innerPallet = pallet) =>
        event(`FuelTanks.${wrapper}`, {
            tankId: { __kind: 'Id', value: `0x${'33'.repeat(32)}` },
            ruleSetId: 0,
            settings: undefined,
            call: {
                __kind: innerPallet,
                value:
                    innerPallet === 'System'
                        ? { __kind: method, remark: '0x1234' }
                        : method === 'send'
                          ? { __kind: method, dest: args.dest, message: { __kind: version, value: [] } }
                          : { __kind: method, ...args },
            },
        })
    return { handler, ctx, block, event, args, wrapped, pallet }
}

for (const [network, spec] of [
    ['canary-matrixchain', 1040],
    ['canary-matrixchain', 1041],
    ['canary-relaychain', 1070],
    ['canary-relaychain', 1080],
] as const) {
    void test(`${network} ${spec}: supported teleports retain account and amount`, async () => {
        const f = await fixture(network, spec)
        for (const item of [
            f.event(`${f.pallet}.limited_teleport_assets`, f.args),
            f.wrapped('limited_teleport_assets'),
        ]) {
            const result = await f.handler(f.ctx, f.block, item)
            assert.ok(result && !Array.isArray(result))
            assert.equal(result.name, TeleportBalanceWithdrawn.name)
            const data = result.data as TeleportBalanceWithdrawn
            assert.equal(data.account, sender)
            assert.equal(data.beneficiary, beneficiary)
            assert.equal(data.amount, BigInt(amount))
            assert.equal(
                data.destination,
                network.endsWith('matrixchain')
                    ? network.replace('matrixchain', 'relaychain')
                    : network.replace('relaychain', 'matrixchain')
            )
        }
    })

    void test(`${network} ${spec}: unrelated calls and missing associations are skipped`, async () => {
        const f = await fixture(network, spec)
        for (const method of ['execute', 'send', 'hypothetical_unknown_call']) {
            assert.equal(await f.handler(f.ctx, f.block, f.event(`${f.pallet}.${method}`)), undefined)
        }
        // These nested calls exist in recorded metadata; only the outer wrapper needs decoding.
        assert.equal(await f.handler(f.ctx, f.block, f.wrapped('send')), undefined)
        assert.equal(await f.handler(f.ctx, f.block, f.wrapped('remark', 'dispatch', 'System')), undefined)
        for (const property of ['call', 'extrinsic'] as const) {
            const item = f.event(`${f.pallet}.limited_teleport_assets`, f.args)
            item[property] = undefined
            assert.equal(await f.handler(f.ctx, f.block, item), undefined)
        }
        await assert.rejects(f.handler(f.ctx, f.block, f.event(`${f.pallet}.limited_teleport_assets`)))
    })
}

void test('Matrixchain transfer_assets is skipped; Relaychain transfer_assets remains supported', async () => {
    const matrix = await fixture('canary-matrixchain', 1041)
    assert.equal(await matrix.handler(matrix.ctx, matrix.block, matrix.event('PolkadotXcm.transfer_assets')), undefined)
    assert.equal(await matrix.handler(matrix.ctx, matrix.block, matrix.wrapped('transfer_assets')), undefined)
    const relay = await fixture('canary-relaychain', 1080)
    for (const item of [relay.event('XcmPallet.transfer_assets', relay.args), relay.wrapped('transfer_assets')]) {
        const result = await relay.handler(relay.ctx, relay.block, item)
        assert.ok(result && !Array.isArray(result))
        assert.equal((result.data as TeleportBalanceWithdrawn).amount, BigInt(amount))
    }
})

void test('historical dispatch_and_touch teleports still produce their withdrawal event', async () => {
    const f = await fixture('canary-relaychain', 1070)
    const result = await f.handler(f.ctx, f.block, f.wrapped('limited_teleport_assets', 'dispatch_and_touch'))
    assert.ok(result && !Array.isArray(result))
    assert.equal((result.data as TeleportBalanceWithdrawn).amount, BigInt(amount))
})
