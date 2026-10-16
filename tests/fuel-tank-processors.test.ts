import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import type { Block, CallItem, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import {
    FuelTank,
    FuelTankAccountRuleDataRemoved,
    FuelTankConsumptionSet,
    FuelTankDestroyScheduled,
    FuelTankRuleSet,
    MaxFuelBurnPerTransaction,
    PermittedExtrinsics,
} from '~/model'

// The processors pull in the pallet mappings, which open the job queue; stub it so the run exits.
const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined, 'queue module loaded before the test stub was installed')
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = { QueueUtils: {} }
testRequire.cache[queueModulePath] = queueModule

const { accountRuleDataRemoved, consumptionSet, destroyFuelTankScheduled, fuelTankCreated, ruleSetInserted } =
    testRequire('~/pallet/fuel-tanks/processors') as typeof import('~/pallet/fuel-tanks/processors')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type Row = { id: string }
type RowClass = new (...args: never[]) => Row

function matches(value: unknown, where: unknown): boolean {
    if (where !== null && typeof where === 'object') {
        if (value === null || typeof value !== 'object') return false
        return Object.entries(where).every(([key, inner]) => matches((value as Record<string, unknown>)[key], inner))
    }
    return value === where
}

class MemoryStore {
    rows: Row[]

    constructor(rows: Row[] = []) {
        this.rows = [...rows]
    }

    of<T extends Row>(entity: new (...args: never[]) => T): T[] {
        return this.rows.filter((row): row is T => row instanceof entity)
    }

    find(entity: RowClass, options: { where: unknown }): Promise<Row[]> {
        return Promise.resolve(this.rows.filter((row) => row instanceof entity && matches(row, options.where)))
    }

    findOneBy(entity: RowClass, where: unknown): Promise<Row | undefined> {
        return Promise.resolve(this.rows.find((row) => row instanceof entity && matches(row, where)))
    }

    async findOneByOrFail(entity: RowClass, where: unknown): Promise<Row> {
        const row = await this.findOneBy(entity, where)
        if (!row) throw new Error('Missing entity')
        return row
    }

    save(value: Row | Row[]): Promise<void> {
        for (const row of Array.isArray(value) ? value : [value]) {
            this.rows = this.rows.filter((item) => !(item.constructor === row.constructor && item.id === row.id))
            this.rows.push(row)
        }
        return Promise.resolve()
    }

    remove(value: Row | Row[]): Promise<void> {
        const removed = new Set(Array.isArray(value) ? value : [value])
        this.rows = this.rows.filter((row) => !removed.has(row))
        return Promise.resolve()
    }
}

const tankId = `0x${'11'.repeat(32)}`
const otherTankId = `0x${'33'.repeat(32)}`
const userId = `0x${'22'.repeat(32)}`
const ruleSetKey = `${tankId}-1`

async function fixture(rows: Row[] = [], specVersion = 1041) {
    const runtime = await getRuntimeCached('enjin-matrixchain', specVersion)
    const block = { _runtime: runtime, height: 500, hash: '0x00', timestamp: 0 } as unknown as Block
    const store = new MemoryStore(rows)
    const warnings: string[] = []
    const ctx = { store, log: { warn: (message: string) => warnings.push(message) } } as unknown as CommonContext
    const call = (name: string, args: unknown): CallItem =>
        ({ id: '500-0', name, args, success: true, block }) as unknown as CallItem
    const event = (name: string, args: unknown, emitter?: CallItem): EventItem =>
        ({ id: '500-1', name, args, block, call: emitter, extrinsic: { id: '500-0', index: 0 } }) as EventItem
    return { block, store, ctx, call, event, warnings }
}

function ruleSetRow(extra: Partial<FuelTankRuleSet> = {}) {
    return new FuelTankRuleSet({
        id: ruleSetKey,
        index: 1,
        tank: new FuelTank({ id: tankId }),
        isFrozen: false,
        isPermittedExtrinsicsEmpty: false,
        isPermittedExtrinsicsNull: false,
        requireAccount: false,
        whitelistedCallers: [userId],
        ...extra,
    })
}

function permitted(id: string) {
    return new PermittedExtrinsics({
        id,
        ruleSet: new FuelTankRuleSet({ id: ruleSetKey }),
        palletName: 'MultiTokens',
        extrinsicName: 'transfer',
    })
}

const insertArgs = (tank: string, maxBurn: string) => ({
    tankId: { __kind: 'Id', value: tank },
    ruleSetId: 1,
    ruleSet: { rules: [{ __kind: 'MaxFuelBurnPerTransaction', value: maxBurn }], requireAccount: true },
})
const insertCall = (tank: string, maxBurn: string) => ({
    __kind: 'FuelTanks',
    value: { __kind: 'insert_rule_set', ...insertArgs(tank, maxBurn) },
})
const descriptor = (accountExpiration?: number) => ({
    name: '0x74616e6b',
    userAccountManagement: undefined,
    ruleSets: [[1, { rules: [{ __kind: 'MaxFuelBurnPerTransaction', value: '9' }], requireAccount: false }]],
    coveragePolicy: { __kind: 'Fees' },
    accountRules: [],
    accountExpiration,
})
const dispatchArgs = (inner: unknown) => ({ tankId: { __kind: 'Id', value: tankId }, call: inner })

void test('AccountRuleDataRemoved records the event and leaves the rule set and its rules untouched', async () => {
    const rows = [ruleSetRow(), permitted('p-0')]
    const { block, store, event } = await fixture(rows)

    const result = accountRuleDataRemoved(
        block,
        event('FuelTanks.AccountRuleDataRemoved', {
            tankId,
            userId,
            ruleSetId: 1,
            ruleKind: { __kind: 'PermittedExtrinsics' },
        })
    )

    assert.deepEqual(store.rows, rows)
    assert.ok(result.data instanceof FuelTankAccountRuleDataRemoved)
    assert.equal(result.data.user, userId)
    assert.equal(result.data.ruleKind, 'PermittedExtrinsics')
})

void test('RuleSetInserted from force_insert_rule_set replaces the rules and keeps the frozen state', async () => {
    const { ctx, block, store, call, event } = await fixture([ruleSetRow({ isFrozen: true }), permitted('p-0')])
    const emitter = call('FuelTanks.force_insert_rule_set', insertArgs(tankId, '100'))

    await ruleSetInserted(ctx, block, event('FuelTanks.RuleSetInserted', { tankId, ruleSetId: 1 }, emitter))

    const [ruleSet] = store.of(FuelTankRuleSet)
    assert.equal(ruleSet.isFrozen, true)
    assert.equal(ruleSet.requireAccount, true)
    assert.equal(ruleSet.whitelistedCallers, undefined)
    assert.ok(ruleSet.maxFuelBurnPerTransaction instanceof MaxFuelBurnPerTransaction)
    assert.equal(ruleSet.maxFuelBurnPerTransaction.value, 100n)
    assert.equal(store.of(PermittedExtrinsics).length, 0)
})

void test('RuleSetInserted for a new rule set starts unfrozen', async () => {
    const { ctx, block, store, call, event } = await fixture()
    const emitter = call('FuelTanks.insert_rule_set', insertArgs(tankId, '5'))

    await ruleSetInserted(ctx, block, event('FuelTanks.RuleSetInserted', { tankId, ruleSetId: 1 }, emitter))

    assert.equal(store.of(FuelTankRuleSet)[0].isFrozen, false)
})

void test('RuleSetInserted inside FuelTanks.dispatch(Utility.batch_all) uses the insert for the event tank', async () => {
    const { ctx, block, store, call, event } = await fixture()
    const emitter = call(
        'FuelTanks.dispatch',
        dispatchArgs({
            __kind: 'Utility',
            value: { __kind: 'batch_all', calls: [insertCall(tankId, '7'), insertCall(otherTankId, '8')] },
        })
    )

    await ruleSetInserted(ctx, block, event('FuelTanks.RuleSetInserted', { tankId, ruleSetId: 1 }, emitter))

    const [ruleSet] = store.of(FuelTankRuleSet)
    assert.equal(ruleSet.id, ruleSetKey)
    assert.equal(ruleSet.maxFuelBurnPerTransaction?.value, 7n)
})

void test('RuleSetInserted inside MatrixUtility.batch is decoded', async () => {
    // MatrixUtility was removed from the runtime in 1041.
    const { ctx, block, store, call, event } = await fixture([], 1031)
    const emitter = call('MatrixUtility.batch', { calls: [insertCall(tankId, '11')], continueOnFailure: false })

    await ruleSetInserted(ctx, block, event('FuelTanks.RuleSetInserted', { tankId, ruleSetId: 1 }, emitter))

    assert.equal(store.of(FuelTankRuleSet)[0].maxFuelBurnPerTransaction?.value, 11n)
})

void test('RuleSetInserted emitted by create calls is left to FuelTankCreated', async () => {
    for (const emitter of [
        { name: 'FuelTanks.force_create_fuel_tank', args: { owner: { __kind: 'Id', value: userId } } },
        {
            name: 'FuelTanks.dispatch',
            args: dispatchArgs({
                __kind: 'FuelTanks',
                value: { __kind: 'create_fuel_tank', descriptor: descriptor() },
            }),
        },
    ]) {
        const { ctx, block, store, call, event, warnings } = await fixture([ruleSetRow()])
        const args =
            emitter.name === 'FuelTanks.dispatch' ? emitter.args : { ...emitter.args, descriptor: descriptor() }

        await ruleSetInserted(
            ctx,
            block,
            event('FuelTanks.RuleSetInserted', { tankId, ruleSetId: 1 }, call(emitter.name, args))
        )

        assert.deepEqual(store.of(FuelTankRuleSet)[0].whitelistedCallers, [userId])
        assert.equal(warnings.length, 0)
    }
})

void test('RuleSetInserted from an unknown wrapper is skipped with a warning instead of halting', async () => {
    const { ctx, block, store, call, event, warnings } = await fixture([ruleSetRow()])

    await ruleSetInserted(
        ctx,
        block,
        event('FuelTanks.RuleSetInserted', { tankId, ruleSetId: 1 }, call('Unknown.wrapper', { foo: 1 }))
    )
    await ruleSetInserted(ctx, block, event('FuelTanks.RuleSetInserted', { tankId, ruleSetId: 1 }))

    assert.deepEqual(store.of(FuelTankRuleSet)[0].whitelistedCallers, [userId])
    assert.equal(warnings.length, 2)
})

void test('FuelTankCreated inside a dispatched batch stores account_expiration and its rule sets', async () => {
    const { ctx, block, store, call, event } = await fixture()
    const emitter = call(
        'FuelTanks.dispatch',
        dispatchArgs({
            __kind: 'Utility',
            value: {
                __kind: 'batch',
                calls: [{ __kind: 'FuelTanks', value: { __kind: 'create_fuel_tank', descriptor: descriptor(1_200) } }],
            },
        })
    )

    await fuelTankCreated(
        ctx,
        block,
        event('FuelTanks.FuelTankCreated', { owner: userId, name: '0x74616e6b', tankId }, emitter)
    )

    const [tank] = store.of(FuelTank)
    assert.equal(tank.accountExpiration, 1_200)
    assert.equal(store.of(FuelTankRuleSet)[0].maxFuelBurnPerTransaction?.value, 9n)
})

void test('DestroyFuelTankScheduled flags the tank and records the event', async () => {
    const { ctx, block, store, event } = await fixture([new FuelTank({ id: tankId, isFrozen: false })])

    const result = await destroyFuelTankScheduled(ctx, block, event('FuelTanks.DestroyFuelTankScheduled', { tankId }))

    assert.equal(store.of(FuelTank)[0].destroyScheduledAt, 500)
    assert.ok(result.data instanceof FuelTankDestroyScheduled)
})

void test('ConsumptionSet records tank-wide and per-user consumption', async () => {
    const { block, event } = await fixture()

    const tankWide = consumptionSet(
        block,
        event('FuelTanks.ConsumptionSet', {
            tankId,
            userId: undefined,
            ruleSetId: 1,
            consumption: { totalConsumed: '12345678901234567890', lastResetBlock: 7 },
        })
    )
    const perUser = consumptionSet(
        block,
        event('FuelTanks.ConsumptionSet', {
            tankId,
            userId,
            ruleSetId: 1,
            consumption: { totalConsumed: '3', lastResetBlock: undefined },
        })
    )

    assert.ok(tankWide.data instanceof FuelTankConsumptionSet)
    assert.equal(tankWide.data.user, null)
    assert.equal(tankWide.data.totalConsumed, 12345678901234567890n)
    assert.equal(tankWide.data.lastResetBlock, 7)
    assert.ok(perUser.data instanceof FuelTankConsumptionSet)
    assert.equal(perUser.data.user, userId)
    assert.equal(perUser.data.lastResetBlock, null)
})
