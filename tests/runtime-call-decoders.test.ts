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

void test('Matrixchain 1043 calls that embed a RuntimeCall only match the 1043 codecs on enjin and canary', () => {
    const enjin = { _runtime: runtimeFor('enjin-matrixchain', 1043) } as Block
    const canary = { _runtime: runtimeFor('canary-matrixchain', 1043) } as Block

    for (const item of [
        calls.utility.batchAll,
        calls.fuelTanks.dispatch,
        calls.fuelTanks.createFuelTank,
        calls.fuelTanks.forceCreateFuelTank,
        calls.fuelTanks.insertRuleSet,
        calls.fuelTanks.forceInsertRuleSet,
    ]) {
        assert(item.matrixEnjinV1043.matches(enjin), `${item.name} should match matrixEnjinV1043`)
        assert(!item.matrixEnjinV1042.matches(enjin), `${item.name} must not match matrixEnjinV1042 on enjin 1043`)
        assert(!item.matrixV1043.matches(enjin), `${item.name} must not match the canary matrixV1043 codec`)
        assert(item.matrixV1043.matches(canary), `${item.name} should match matrixV1043`)
        assert(!item.matrixV1042.matches(canary), `${item.name} must not match matrixV1042 on canary 1043`)
        assert(!item.matrixEnjinV1043.matches(canary), `${item.name} must not match the enjin matrixEnjinV1043 codec`)
    }
})

void test('Matrixchain 1043 events and storage keep matching the 1042 codecs', () => {
    const enjin = { _runtime: runtimeFor('enjin-matrixchain', 1043) } as Block
    const canary = { _runtime: runtimeFor('canary-matrixchain', 1043) } as Block

    assert(storage.multiTokens.tokens.matrixEnjinV1042.is(enjin))
    assert(events.multiTokens.tokenUpdated.matrixEnjinV1042.matches(enjin))
    assert(events.marketplace.listingCreated.matrixEnjinV1041.matches(enjin))
    assert(calls.multiTokens.mint.matrixEnjinV1041.matches(enjin))
    assert(calls.marketplace.fillListing.matrixEnjinV1041.matches(enjin))
    assert(storage.multiTokens.collections.matrixEnjinV1041.is(enjin))

    assert(storage.multiTokens.tokens.matrixV1042.is(canary))
    assert(events.multiTokens.tokenUpdated.matrixV1042.matches(canary))
})

for (const network of ['enjin-matrixchain', 'canary-matrixchain'] as const) {
    void test(`batch and fuel tank dispatch unwrap marketplace and multi-tokens calls on ${network} v1043`, () => {
        const runtime = runtimeFor(network, 1043)
        const listingId = `0x${'33'.repeat(32)}`
        const fillListing = { __kind: 'Marketplace', value: { __kind: 'fill_listing', listingId, amount: '1' } }
        const createListingAndMatch = {
            __kind: 'Marketplace',
            value: {
                __kind: 'create_listing_and_match',
                descriptor: {
                    makeAssetId: { collectionId: '0', tokenId: '0' },
                    takeAssetId: { collectionId: '2000', tokenId: '7' },
                    amount: '1',
                    price: '1000000000000000000',
                    startBlock: undefined,
                    salt: '0x01',
                    data: { __kind: 'Ask' },
                },
                matchLimit: 5,
            },
        }
        const transfer = {
            __kind: 'MultiTokens',
            value: {
                __kind: 'transfer',
                recipient: { __kind: 'Id', value: tankId },
                collectionId: '2000',
                params: { __kind: 'Simple', tokenId: '7', amount: '1' },
            },
        }

        const batch = batchAll(
            callItem(runtime, 'Utility.batch_all', { calls: [createListingAndMatch, fillListing, transfer] })
        )
        assert.deepEqual(
            batch.calls.map((call) => `${call.__kind}.${call.value.__kind}`),
            ['Marketplace.create_listing_and_match', 'Marketplace.fill_listing', 'MultiTokens.transfer']
        )
        assert.deepEqual(batch.calls[1], {
            __kind: 'Marketplace',
            value: { __kind: 'fill_listing', listingId, amount: 1n },
        })

        for (const inner of [createListingAndMatch, fillListing, transfer]) {
            const dispatched = dispatch(
                callItem(runtime, 'FuelTanks.dispatch', {
                    tankId: { __kind: 'Id', value: tankId },
                    ruleSetId: undefined,
                    call: inner,
                    settings: undefined,
                })
            )
            assert.equal(dispatched.call.__kind, inner.__kind)
            assert.equal(dispatched.call.value.__kind, inner.value.__kind)
        }

        const matched = dispatch(
            callItem(runtime, 'FuelTanks.dispatch', {
                tankId: { __kind: 'Id', value: tankId },
                ruleSetId: 2,
                call: createListingAndMatch,
                settings: undefined,
            })
        )
        assert.equal(matched.ruleSetId, 2)
        assert.deepEqual(matched.call, {
            __kind: 'Marketplace',
            value: {
                __kind: 'create_listing_and_match',
                descriptor: {
                    makeAssetId: { collectionId: 0n, tokenId: 0n },
                    takeAssetId: { collectionId: 2000n, tokenId: 7n },
                    amount: 1n,
                    price: 1000000000000000000n,
                    startBlock: undefined,
                    salt: '0x01',
                    data: { __kind: 'Ask' },
                },
                matchLimit: 5,
            },
        })
    })
}

for (const [network, version] of [
    ['enjin-relaychain', 1080],
    ['enjin-relaychain', 1070],
    ['canary-relaychain', 1080],
    ['enjin-matrixchain', 1041],
    ['canary-matrixchain', 1041],
    ['canary-matrixchain', 1042],
    ['enjin-matrixchain', 1042],
    ['canary-matrixchain', 1043],
    ['enjin-matrixchain', 1043],
] as const) {
    void test(`fuel tank and batch decoders unwrap calls on ${network} v${version}`, () => {
        const runtime = runtimeFor(network, version)

        const dispatched = dispatch(
            callItem(runtime, 'FuelTanks.dispatch', {
                tankId: { __kind: 'Id', value: tankId },
                ruleSetId: [1042, 1043].includes(version) ? undefined : 0,
                call: remark,
                settings: { useNoneOrigin: false, paysRemainingFee: true, signature: undefined, createAccount: false },
            })
        )
        assert.equal(dispatched.ruleSetId, [1042, 1043].includes(version) ? undefined : 0)
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
