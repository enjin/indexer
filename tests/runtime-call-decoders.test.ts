import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, CallItem } from '~/contexts'
import { calls, events, storage } from '~/type'

// The decoders pull in the processor mappings, which open the job queue; stub it so the run exits.
const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
assert.equal(testRequire.cache[queueModulePath], undefined, 'queue module loaded before the test stub was installed')
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = { QueueUtils: {} }
testRequire.cache[queueModulePath] = queueModule

const { createFuelTank, dispatch, forceCreateFuelTank, insertRuleSet } = testRequire(
    '~/pallet/fuel-tanks/calls'
) as typeof import('~/pallet/fuel-tanks/calls')
const { batchAll } = testRequire('~/pallet/utility/calls') as typeof import('~/pallet/utility/calls')

after(() => {
    testRequire.cache[queueModulePath] = undefined
})

type MetadataLine = {
    specName: string
    specVersion: number
    metadata: string
}

function runtimeFor(network: string, version: number): Runtime {
    const line = fs
        .readFileSync(`typegen/${network}.jsonl`, 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((row) => JSON.parse(row) as MetadataLine)
        .find((row) => row.specVersion === version)

    assert(line)
    return new Runtime(
        { specName: line.specName, specVersion: line.specVersion, implName: '', implVersion: 0 },
        line.metadata
    )
}

function callItem(runtime: Runtime, name: string, args: unknown): CallItem {
    return { id: '1-1', name, args, success: true, block: { _runtime: runtime } } as CallItem
}

const tankId = `0x${'11'.repeat(32)}`
const remark = { __kind: 'System', value: { __kind: 'remark', remark: '0x6b6579' } }
const ruleSet = { rules: [{ __kind: 'RequireSignature', value: `0x${'22'.repeat(32)}` }], requireAccount: true }
const descriptor = {
    name: '0x74616e6b',
    userAccountManagement: undefined,
    ruleSets: [[0, ruleSet]],
    coveragePolicy: { __kind: 'Fees' },
    accountRules: [],
    accountExpiration: undefined,
}

void test('Enjin Relaychain 1080 calls that embed a RuntimeCall only match the enjinV1080 codecs', () => {
    const block = { _runtime: runtimeFor('enjin-relaychain', 1080) } as Block

    for (const item of [
        calls.utility.batchAll,
        calls.fuelTanks.dispatch,
        calls.fuelTanks.createFuelTank,
        calls.fuelTanks.forceCreateFuelTank,
        calls.fuelTanks.insertRuleSet,
        calls.fuelTanks.forceInsertRuleSet,
    ]) {
        assert(item.enjinV1080.matches(block), `${item.name} should match enjinV1080`)
        assert(!item.v1080.matches(block), `${item.name} must not match the canary v1080 codec`)
        assert(!item.enjinV1070.matches(block), `${item.name} must not match enjinV1070`)
    }
})

void test('Enjin Relaychain 1080 events and storage reuse the codecs already generated for canary 1080', () => {
    const block = { _runtime: runtimeFor('enjin-relaychain', 1080) } as Block

    assert(events.marketplace.listingCreated.v1080.matches(block))
    assert(events.multiTokens.tokenMutated.v1080.matches(block))
    assert(events.multiTokens.frozen.v1080.matches(block))
    assert(calls.multiTokens.mint.v1080.matches(block))
    assert(storage.multiTokens.collections.v1080.is(block))
    assert(storage.multiTokens.tokens.v1080.is(block))
    assert(storage.multiTokens.attributes.v1080.is(block))
})

void test('Enjin Matrixchain 1042 calls that embed a RuntimeCall only match the matrixEnjinV1042 codecs', () => {
    const block = { _runtime: runtimeFor('enjin-matrixchain', 1042) } as Block

    for (const item of [
        calls.utility.batchAll,
        calls.fuelTanks.dispatch,
        calls.fuelTanks.createFuelTank,
        calls.fuelTanks.forceCreateFuelTank,
        calls.fuelTanks.insertRuleSet,
        calls.fuelTanks.forceInsertRuleSet,
    ]) {
        assert(item.matrixEnjinV1042.matches(block), `${item.name} should match matrixEnjinV1042`)
        assert(!item.matrixV1042.matches(block), `${item.name} must not match the canary matrixV1042 codec`)
        assert(!item.matrixEnjinV1041.matches(block), `${item.name} must not match matrixEnjinV1041`)
    }
})

void test('Enjin Matrixchain 1042 has matrixEnjinV1042 codecs for token storage and TokenUpdated; unchanged items keep matching the 1041 codecs', () => {
    const block = { _runtime: runtimeFor('enjin-matrixchain', 1042) } as Block

    assert(storage.multiTokens.tokens.matrixEnjinV1042.is(block))
    assert(events.multiTokens.tokenUpdated.matrixEnjinV1042.matches(block))
    assert(events.marketplace.listingCreated.matrixEnjinV1041.matches(block))
    assert(events.multiTokens.frozen.matrixEnjinV1041.matches(block))
    assert(calls.multiTokens.mint.matrixEnjinV1041.matches(block))
    assert(storage.multiTokens.collections.matrixEnjinV1041.is(block))
})

for (const [network, version] of [
    ['enjin-relaychain', 1080],
    ['enjin-relaychain', 1070],
    ['canary-relaychain', 1080],
    ['enjin-matrixchain', 1041],
    ['canary-matrixchain', 1041],
    ['canary-matrixchain', 1042],
    ['enjin-matrixchain', 1042],
] as const) {
    void test(`fuel tank and batch decoders unwrap calls on ${network} v${version}`, () => {
        const runtime = runtimeFor(network, version)

        const dispatched = dispatch(
            callItem(runtime, 'FuelTanks.dispatch', {
                tankId: { __kind: 'Id', value: tankId },
                ruleSetId: version === 1042 ? undefined : 0,
                call: remark,
                settings: { useNoneOrigin: false, paysRemainingFee: true, signature: undefined, createAccount: false },
            })
        )
        assert.equal(dispatched.ruleSetId, version === 1042 ? undefined : 0)
        assert.deepEqual(dispatched.call, remark)

        const batch = batchAll(callItem(runtime, 'Utility.batch_all', { calls: [remark, remark] }))
        assert.equal(batch.calls.length, 2)
        assert.deepEqual(batch.calls[0], remark)

        const created = createFuelTank(callItem(runtime, 'FuelTanks.create_fuel_tank', { descriptor }))
        assert.equal(created.descriptor.name, descriptor.name)
        assert.equal(created.descriptor.ruleSets[0][1].requireAccount, true)

        const forced = forceCreateFuelTank(
            callItem(runtime, 'FuelTanks.force_create_fuel_tank', {
                owner: { __kind: 'Id', value: tankId },
                descriptor,
            })
        )
        assert.equal(forced.descriptor.name, descriptor.name)

        const inserted = insertRuleSet(
            callItem(runtime, 'FuelTanks.insert_rule_set', {
                tankId: { __kind: 'Id', value: tankId },
                ruleSetId: 3,
                ruleSet,
            })
        )
        assert.equal(inserted.ruleSetId, 3)
        assert.equal(inserted.ruleSet.requireAccount, true)

        const forceInserted = insertRuleSet(
            callItem(runtime, 'FuelTanks.force_insert_rule_set', {
                tankId: { __kind: 'Id', value: tankId },
                ruleSetId: 4,
                ruleSet,
            })
        )
        assert.equal(forceInserted.ruleSetId, 4)
        assert.equal(forceInserted.ruleSet.requireAccount, true)
    })
}
