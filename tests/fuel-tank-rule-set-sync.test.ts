import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import type { ApiPromise } from '@polkadot/api'

// The fuel-tank utils pull in the pallet mappings, which open the job queue; stub it so the run exits.
const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined, 'queue module loaded before the test stub was installed')
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = { QueueUtils: {} }
testRequire.cache[queueModulePath] = queueModule

const { tankRuleSetEntries } = testRequire(
    '~/worker/jobs/metadata/sync-fuel-tank-rule-sets'
) as typeof import('~/worker/jobs/metadata/sync-fuel-tank-rule-sets')
const { rulesToMap } = testRequire('~/pallet/fuel-tanks/utils') as typeof import('~/pallet/fuel-tanks/utils')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

// Neither mapping below needs the registry (it is only used for permitted-extrinsic call indexes).
const api = { registry: {} } as unknown as ApiPromise

// `api.query.fuelTanks.tanks(...).toJSON().ruleSets` as returned by enjin-matrix (spec 1031) for
// tank Substreak (rule set 1) and tank 0x2a8dbfe8…af01 (rule set 0), captured 2026-11-05.
const OWNER_SS58 = 'efUR4ejJgrJpsR6QTtQyDKho3TYrdkqay5nxaJBKCnUtR4oQW'
const OWNER_HEX = '0xe8f86ffd21f399152709ebb872342f2d3772d6541af59d442d723556eda0d63a'

function mapped(ruleSets: Record<string, unknown>) {
    const [entry] = tankRuleSetEntries(api, { ruleSets })
    return rulesToMap('tank-0', entry.descriptors)
}

void test('WhitelistedCallers is read from its nested key and stored as lowercase hex', () => {
    const { whitelistedCallers } = mapped({
        '1': {
            rules: { WhitelistedCallers: { whitelistedCallers: [OWNER_SS58] } },
            isFrozen: false,
            requireAccount: true,
        },
    })

    assert.deepEqual(whitelistedCallers, [OWNER_HEX])
})

void test('WhitelistedCollections is read from its nested key', () => {
    const { whitelistedCollections, whitelistedPallets } = mapped({
        '0': {
            rules: {
                WhitelistedCollections: { whitelistedCollections: [2910] },
                WhitelistedPallets: { whitelistedPallets: ['0x4d756c7469546f6b656e73'] },
            },
            isFrozen: false,
            requireAccount: true,
        },
    })

    assert.deepEqual(whitelistedCollections, ['2910'])
    assert.deepEqual(whitelistedPallets, ['MultiTokens'])
})
