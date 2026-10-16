import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import type { Block, CallItem, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import { Identity, Registration } from '~/model'

// The processors pull in the pallet mappings, which open the job queue; stub it so the run exits.
const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = { QueueUtils: {} }
testRequire.cache[queueModulePath] = queueModule

const { setSubs, signedOrigin, subIdentitiesSet } = testRequire(
    '~/pallet/identity/processors/set-subs'
) as typeof import('~/pallet/identity/processors/set-subs')
const { renameSub, subIdentityRenamed } = testRequire(
    '~/pallet/identity/processors/rename-sub'
) as typeof import('~/pallet/identity/processors/rename-sub')

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
    rows: Row[] = []

    find(entity: RowClass, options: { where: unknown }): Promise<Row[]> {
        return Promise.resolve(this.rows.filter((row) => row instanceof entity && matches(row, options.where)))
    }

    findOneBy(entity: RowClass, where: unknown): Promise<Row | undefined> {
        return Promise.resolve(this.rows.find((row) => row instanceof entity && matches(row, where)))
    }

    findOneByOrFail(): Promise<Row> {
        throw new Error('findOneByOrFail must not be used')
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

    identity(id: string): Identity | undefined {
        return this.rows.find((row): row is Identity => row instanceof Identity && row.id === id)
    }
}

const main = `0x${'aa'.repeat(32)}`
const signer = `0x${'bb'.repeat(32)}`
const subA = `0x${'01'.repeat(32)}`
const subB = `0x${'02'.repeat(32)}`
const subC = `0x${'03'.repeat(32)}`
const subD = `0x${'04'.repeat(32)}`

const raw = (text: string) => ({ __kind: `Raw${text.length}`, value: `0x${Buffer.from(text).toString('hex')}` })
const json = (value: unknown) => JSON.stringify(value)

async function fixture(specVersion: number) {
    const real = await getRuntimeCached('enjin-matrixchain', specVersion)
    const chain = new Map<string, unknown>()
    const runtime = Object.create(real) as typeof real & Record<string, unknown>
    runtime.getStorage = (_hash: string, name: string, ...key: unknown[]) =>
        Promise.resolve(chain.get(`${name}|${json(key)}`))
    runtime.queryStorage = (_hash: string, name: string, keys: unknown[]) =>
        Promise.resolve(keys.map((key) => chain.get(`${name}|${json(Array.isArray(key) ? key : [key])}`)))

    const block = { _runtime: runtime, height: 10, hash: '0x10', timestamp: 0 } as unknown as Block
    const set = (name: string, key: unknown[], value: unknown) => chain.set(`${name}|${json(key)}`, value)

    const store = new MemoryStore()
    const warnings: string[] = []
    const ctx = { store, log: { warn: (message: string) => warnings.push(message) } } as unknown as CommonContext

    const event = (name: string, args: unknown) => ({ id: '10-1', name, args, block }) as unknown as EventItem
    const call = (name: string, args: unknown, origin: unknown) =>
        ({
            id: '10-0',
            name,
            args,
            block,
            origin,
            extrinsic: { id: '10-0', signature: { address: { __kind: 'Id', value: signer } } },
        }) as unknown as CallItem

    return { block, store, ctx, warnings, set, event, call }
}

function sub(id: string, name: string | null, extra: Partial<Identity> = {}) {
    return new Identity({
        id,
        name,
        isSub: true,
        super: new Identity({ id: main }),
        info: new Registration({ id: main }),
        ...extra,
    })
}

void test('signedOrigin reads the dispatching account of a system Signed origin only', () => {
    assert.equal(signedOrigin({ __kind: 'system', value: { __kind: 'Signed', value: main } }), main)
    assert.equal(signedOrigin({ __kind: 'system', value: { __kind: 'Root' } }), null)
    assert.equal(signedOrigin({ __kind: 'FuelTanks', value: { __kind: 'Signed', value: main } }), null)
    assert.equal(signedOrigin(undefined), null)
})

void test('SubIdentitiesSet makes the stored SubsOf list the complete set of subs, names from SuperOf', async () => {
    const { block, store, ctx, set, event } = await fixture(1041)
    const ownIdentity = new Registration({ id: subB, display: 'Bee', legal: null })
    store.rows.push(
        sub(subA, 'gone'),
        sub(subB, 'old', { isSub: false, info: ownIdentity }),
        sub(subC, 'old-c'),
        new Identity({ id: main, isSub: false, name: 'Main', info: new Registration({ id: main }) })
    )
    set('Identity.SubsOf', [main], [10n, [subC, subD]])
    set('Identity.SuperOf', [subC], [main, raw('cee')])
    set('Identity.SuperOf', [subD], [main, { __kind: 'None' }])

    await subIdentitiesSet(ctx, block, event('Identity.SubIdentitiesSet', { main, numberOfSubs: 2, newDeposit: '10' }))

    assert.equal(store.identity(subA), undefined, 'a plain sub no longer listed is removed')
    assert.equal(store.identity(subB)?.super, null, 'an account with its own identity is detached')
    assert.equal(store.identity(subB)?.name, 'Bee')
    assert.equal(store.identity(subC)?.name, 'cee')
    assert.equal(store.identity(subC)?.super?.id, main)
    assert.equal(store.identity(subD)?.isSub, true)
    assert.equal(store.identity(subD)?.name, null)
    assert.equal(store.identity(subD)?.super?.id, main)
})

void test('set_subs is left to SubIdentitiesSet on runtimes that emit it', async () => {
    const { block, store, ctx, call } = await fixture(1041)

    await setSubs(
        ctx,
        block,
        call(
            'Identity.set_subs',
            { subs: [[subA, raw('a')]] },
            { __kind: 'system', value: { __kind: 'Signed', value: main } }
        )
    )

    assert.equal(store.rows.length, 0)
})

void test('set_subs on older runtimes attaches the subs to the call origin, not the extrinsic signer', async () => {
    const { block, store, ctx, call } = await fixture(1022)

    await setSubs(
        ctx,
        block,
        call(
            'Identity.set_subs',
            { subs: [[subA, raw('a')]] },
            { __kind: 'system', value: { __kind: 'Signed', value: main } }
        )
    )

    assert.equal(store.identity(subA)?.super?.id, main)
    assert.equal(store.identity(subA)?.name, 'a')
})

void test('SubIdentityRenamed takes the name from SuperOf and creates a missing sub', async () => {
    const { block, store, ctx, set, event } = await fixture(1041)
    store.rows.push(sub(subA, 'old'))
    set('Identity.SuperOf', [subA], [main, raw('new')])
    set('Identity.SuperOf', [subD], [main, raw('dee')])

    await subIdentityRenamed(ctx, block, event('Identity.SubIdentityRenamed', { sub: subA, main }))
    await subIdentityRenamed(ctx, block, event('Identity.SubIdentityRenamed', { sub: subD, main }))

    assert.equal(store.identity(subA)?.name, 'new')
    assert.equal(store.identity(subD)?.name, 'dee')
    assert.equal(store.identity(subD)?.super?.id, main)
})

void test('rename_sub on older runtimes skips an unindexed sub instead of crashing', async () => {
    const { block, store, ctx, warnings, call } = await fixture(1022)
    const origin = { __kind: 'system', value: { __kind: 'Signed', value: main } }

    await renameSub(
        ctx,
        block,
        call('Identity.rename_sub', { sub: { __kind: 'Id', value: subA }, data: raw('x') }, origin)
    )
    assert.equal(store.rows.length, 0)
    assert.equal(warnings.length, 1)

    store.rows.push(sub(subA, 'old'))
    await renameSub(
        ctx,
        block,
        call('Identity.rename_sub', { sub: { __kind: 'Id', value: subA }, data: raw('x') }, origin)
    )
    assert.equal(store.identity(subA)?.name, 'x')
})
