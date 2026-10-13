import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import type { Block, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import {
    Account,
    FuelTank,
    FuelTankAccountRules,
    FuelTankDestroyed,
    FuelTankRuleSet,
    FuelTankUserAccounts,
    PermittedExtrinsics,
} from '~/model'

const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined)
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = { QueueUtils: {} }
testRequire.cache[queueModulePath] = queueModule
const { fuelTankDestroyed } = testRequire(
    '~/pallet/fuel-tanks/processors/fuel-tank-destroyed'
) as typeof import('~/pallet/fuel-tanks/processors/fuel-tank-destroyed')
const { accountRemoved } = testRequire(
    '~/pallet/fuel-tanks/processors/account-removed'
) as typeof import('~/pallet/fuel-tanks/processors/account-removed')
assert.equal(testRequire.cache[testRequire.resolve('bullmq')], undefined)
after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type Row = FuelTank | FuelTankUserAccounts | FuelTankRuleSet | FuelTankAccountRules | PermittedExtrinsics | Account
type RowClass = new (...args: never[]) => Row

function parentTank(row: Row): string | undefined {
    if (row instanceof PermittedExtrinsics) return row.ruleSet.tank.id
    if (row instanceof FuelTankUserAccounts || row instanceof FuelTankRuleSet || row instanceof FuelTankAccountRules) {
        return row.tank.id
    }
    return undefined
}

// These NO ACTION relationships are present in the generated PostgreSQL migration.
// Delaying permission deletion exposes concurrent parent deletion, rather than relying on call order.
class ConstraintStore {
    rows: Row[]
    removed: string[] = []
    beforeRemove?: (row: Row) => Promise<void>

    constructor(rows: Row[]) {
        this.rows = [...rows]
    }

    find(
        entity: RowClass,
        options: { where: { tank?: { id: string }; ruleSet?: { tank: { id: string } } } }
    ): Promise<Row[]> {
        const id = options.where.tank?.id ?? options.where.ruleSet?.tank.id
        assert.ok(id)
        return Promise.resolve(this.rows.filter((row) => row instanceof entity && parentTank(row) === id))
    }

    findOneByOrFail(entity: RowClass, where: { id: string }): Promise<Row> {
        const row = this.rows.find((item) => item instanceof entity && item.id === where.id)
        if (!row) return Promise.reject(new Error('Missing entity'))
        return Promise.resolve(row)
    }

    save(row: Row): Promise<void> {
        this.rows = this.rows.filter((item) => !(item.constructor === row.constructor && item.id === row.id))
        this.rows.push(row)
        return Promise.resolve()
    }

    async remove(value: Row | Row[] | RowClass, id?: string): Promise<void> {
        const rows =
            typeof value === 'function'
                ? this.rows.filter((row) => row instanceof value && row.id === id)
                : Array.isArray(value)
                  ? value
                  : [value]
        for (const row of rows) {
            if (row instanceof PermittedExtrinsics) await new Promise<void>((resolve) => setImmediate(resolve))
            await this.beforeRemove?.(row)
            if (row instanceof FuelTankRuleSet) {
                assert.equal(
                    this.rows.some((item) => item instanceof PermittedExtrinsics && item.ruleSet.id === row.id),
                    false,
                    'rule-set foreign key violation'
                )
            }
            if (row instanceof FuelTank) {
                assert.equal(
                    this.rows.some((item) => parentTank(item) === row.id),
                    false,
                    'tank foreign key violation'
                )
            }
            this.removed.push(`${row.constructor.name}:${row.id}`)
            this.rows = this.rows.filter((item) => !(item.constructor === row.constructor && item.id === row.id))
        }
    }
}

const tankId = `0x${'11'.repeat(32)}`
const otherTankId = `0x${'22'.repeat(32)}`
const account = new Account({ id: `0x${'33'.repeat(32)}` })

function tankRows(id: string, withChildren: boolean): Row[] {
    const tank = new FuelTank({ id, accountCount: withChildren ? 1 : 0, owner: account, tankAccount: account })
    if (!withChildren) return [tank]
    const rule = new FuelTankRuleSet({ id: `${id}-rule`, tank })
    return [
        tank,
        rule,
        new FuelTankUserAccounts({ id: `${id}-${account.id}`, tank, account, tankDeposit: 1n, userDeposit: 2n }),
        new FuelTankAccountRules({ id: `${id}-account-rule`, tank }),
        new PermittedExtrinsics({
            id: `${id}-permission`,
            ruleSet: rule,
            palletName: 'System',
            extrinsicName: 'remark',
        }),
    ]
}

async function fixture(rows: Row[], extrinsic = true) {
    const runtime = await getRuntimeCached('canary-matrixchain', 1041)
    const block = { _runtime: runtime, height: 42 } as Block
    const store = new ConstraintStore(rows)
    const ctx = { store } as unknown as CommonContext
    const item = {
        id: '42-1',
        name: 'FuelTanks.FuelTankDestroyed',
        args: { tankId },
        block,
        extrinsic: extrinsic ? { id: '42-0' } : undefined,
    } as EventItem
    return { block, store, ctx, item }
}

void test('real destruction handler removes descendants before parents and preserves other tanks and accounts', async () => {
    const otherRows = tankRows(otherTankId, true)
    const f = await fixture([...tankRows(tankId, true), ...otherRows, account])
    const result = await fuelTankDestroyed(f.ctx, f.block, f.item)
    assert.deepEqual(f.store.rows, [...otherRows, account])
    assert.ok(result)
    assert.equal(result.id, f.item.id)
    assert.equal(result.extrinsic?.id, '42-0')
    assert.equal(result.name, FuelTankDestroyed.name)
    assert.equal((result.data as FuelTankDestroyed).tank, tankId)
    assert.ok(
        f.store.removed.indexOf(`PermittedExtrinsics:${tankId}-permission`) <
            f.store.removed.indexOf(`FuelTankRuleSet:${tankId}-rule`)
    )
    assert.equal(f.store.removed.at(-1), `FuelTank:${tankId}`)
})

void test('hook-driven destruction succeeds when the chain already removed all accounts', async () => {
    const f = await fixture(tankRows(tankId, false), false)
    const result = await fuelTankDestroyed(f.ctx, f.block, f.item)
    assert.ok(result)
    assert.equal(result.extrinsic, null)
    assert.equal(f.store.rows.length, 0)
})

void test('normal AccountRemoved then FuelTankDestroyed lifecycle uses both production handlers', async () => {
    const rows = tankRows(tankId, true).filter((row) => row instanceof FuelTank || row instanceof FuelTankUserAccounts)
    const f = await fixture(rows, false)
    await accountRemoved(f.ctx, f.block, {
        ...f.item,
        name: 'FuelTanks.AccountRemoved',
        args: { tankId, userId: account.id },
    })
    const tank = f.store.rows.find((row) => row instanceof FuelTank) as FuelTank
    assert.equal(tank.accountCount, 0)
    await fuelTankDestroyed(f.ctx, f.block, f.item)
    assert.equal(f.store.rows.length, 0)
})

void test('destruction waits for membership deletion to complete before removing its tank', async () => {
    const f = await fixture(tankRows(tankId, true))
    let release!: () => void
    let started!: () => void
    const ready = new Promise<void>((resolve) => {
        started = resolve
    })
    const gate = new Promise<void>((resolve) => {
        release = resolve
    })
    f.store.beforeRemove = async (row) => {
        if (row instanceof FuelTankUserAccounts) {
            started()
            await gate
        }
    }
    const processing = fuelTankDestroyed(f.ctx, f.block, f.item)
    await ready
    assert.ok(f.store.rows.some((row) => row instanceof FuelTank && row.id === tankId))
    release()
    await processing
    assert.equal(f.store.rows.length, 0)
})

void test('a failed membership deletion leaves the parent and propagates to the batch transaction', async () => {
    const f = await fixture(tankRows(tankId, true))
    f.store.beforeRemove = (row) =>
        row instanceof FuelTankUserAccounts
            ? Promise.reject(new Error('membership deletion failed'))
            : Promise.resolve()
    await assert.rejects(fuelTankDestroyed(f.ctx, f.block, f.item), /membership deletion failed/)
    assert.ok(f.store.rows.some((row) => row instanceof FuelTank && row.id === tankId))
})
