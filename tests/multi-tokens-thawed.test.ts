import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after, beforeEach } from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, EventItem } from '~/contexts'
import { Collection, CollectionAccount, FreezeState, Token, TokenAccount, TransferPolicy } from '~/model'

const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined, 'queue module loaded before the test stub was installed')
const statsDispatched: string[] = []
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = {
    QueueUtils: {
        dispatchComputeStats: (id: string) => {
            statsDispatched.push(id)
            return Promise.resolve()
        },
    },
}
testRequire.cache[queueModulePath] = queueModule

const { thawed } = testRequire(
    '~/pallet/multi-tokens/processors/thawed'
) as typeof import('~/pallet/multi-tokens/processors/thawed')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type MetadataLine = { specName: string; specVersion: number; metadata: string }

const runtimes = new Map<number, Runtime>()

/** Canary Matrixchain 500 emits `freezeType`; 1040 emits `thawType` (the shape used since v1070). */
function runtime(specVersion: 500 | 1040): Runtime {
    let cached = runtimes.get(specVersion)
    if (!cached) {
        const line = fs
            .readFileSync('typegen/canary-matrixchain.jsonl', 'utf8')
            .split('\n')
            .filter(Boolean)
            .map((l) => JSON.parse(l) as MetadataLine)
            .find((l) => l.specVersion === specVersion)
        assert(line)
        cached = new Runtime(
            { specName: line.specName, specVersion: line.specVersion, implName: '', implVersion: 0 },
            line.metadata
        )
        runtimes.set(specVersion, cached)
    }
    return cached
}

const account = `0x${'11'.repeat(32)}`
const timestamp = 1_700_000_000_000

function thawEvent(specVersion: 500 | 1040, kind: Record<string, unknown>, extrinsic = true): EventItem {
    const field = specVersion === 500 ? 'freezeType' : 'thawType'
    return {
        id: '10-2',
        name: 'MultiTokens.Thawed',
        args: { collectionId: '7', [field]: kind },
        block: { _runtime: runtime(specVersion) },
        ...(extrinsic ? { extrinsic: { id: '10-1' } } : {}),
    } as unknown as EventItem
}

function fakeStore(entities: unknown[]) {
    const byId = new Map(entities.map((e) => [(e as { id: string }).id, e]))
    const saved: unknown[] = []
    const lookedUp: string[] = []
    const ctx = {
        store: {
            findOne: (_entity: unknown, options: { where: { id: string } }) => {
                lookedUp.push(options.where.id)
                return Promise.resolve(byId.get(options.where.id))
            },
            save: (entity: unknown) => {
                saved.push(entity)
                return Promise.resolve()
            },
        },
    } as never
    return { ctx, saved, lookedUp }
}

const block = { timestamp } as Block

beforeEach(() => {
    statsDispatched.length = 0
    delete process.env.APP_ENV
})

const kinds = {
    tokenAccount: { __kind: 'TokenAccount', tokenId: '5', accountId: account },
    collectionAccount: { __kind: 'CollectionAccount', value: account },
    token: { __kind: 'Token', tokenId: '5' },
    collection: { __kind: 'Collection' },
}

function entitiesFor() {
    return {
        tokenAccount: new TokenAccount({ id: `${account}-7-5`, isFrozen: true }),
        collectionAccount: new CollectionAccount({ id: `7-${account}`, isFrozen: true }),
        token: new Token({ id: '7-5', isFrozen: true, freezeState: FreezeState.Permanent }),
        collection: new Collection({ id: '7', transferPolicy: new TransferPolicy({ isFrozen: true }) }),
    }
}

for (const specVersion of [500, 1040] as const) {
    void test(`v${specVersion}: thawing a token account unfreezes it and stamps updatedAt`, async () => {
        const { tokenAccount } = entitiesFor()
        const { ctx, saved } = fakeStore([tokenAccount])
        const [model] = await thawed(ctx, block, thawEvent(specVersion, kinds.tokenAccount), false)
        assert.deepEqual(saved, [tokenAccount])
        assert.equal(tokenAccount.isFrozen, false)
        assert.deepEqual(tokenAccount.updatedAt, new Date(timestamp))
        assert.equal(model?.tokenId, '7-5')
        assert.equal(model?.collectionId, '7')
        assert.deepEqual(statsDispatched, ['7'])
    })

    void test(`v${specVersion}: thawing a collection account unfreezes it and stamps updatedAt`, async () => {
        const { collectionAccount } = entitiesFor()
        const { ctx, saved } = fakeStore([collectionAccount])
        const [model] = await thawed(ctx, block, thawEvent(specVersion, kinds.collectionAccount), false)
        assert.deepEqual(saved, [collectionAccount])
        assert.equal(collectionAccount.isFrozen, false)
        assert.deepEqual(collectionAccount.updatedAt, new Date(timestamp))
        assert.equal(model?.tokenId, null)
        assert.deepEqual(statsDispatched, ['7'])
    })

    void test(`v${specVersion}: thawing a token unfreezes it and clears its freeze state`, async () => {
        const { token } = entitiesFor()
        const { ctx, saved } = fakeStore([token])
        const [model] = await thawed(ctx, block, thawEvent(specVersion, kinds.token), false)
        assert.deepEqual(saved, [token])
        assert.equal(token.isFrozen, false)
        assert.equal(token.freezeState, null)
        assert.equal(model?.tokenId, '7-5')
        assert.deepEqual(statsDispatched, ['7'])
    })

    void test(`v${specVersion}: thawing a collection resets its transfer policy`, async () => {
        const { collection } = entitiesFor()
        const { ctx, saved } = fakeStore([collection])
        await thawed(ctx, block, thawEvent(specVersion, kinds.collection), false)
        assert.deepEqual(saved, [collection])
        assert.deepEqual(collection.transferPolicy, new TransferPolicy({ isFrozen: false }))
        assert.deepEqual(statsDispatched, ['7'])
    })

    for (const [kind, id, message] of [
        ['tokenAccount', `${account}-7-5`, `[Thawed] We have not found token account ${account}-7-5.`],
        ['collectionAccount', `7-${account}`, `[Thawed] We have not found collection account 7-${account}.`],
        // Pinned as-is: the Token branch reports a collection account.
        ['token', '7-5', '[Thawed] We have not found collection account 7-5.'],
        ['collection', '7', '[Thawed] We have not found collection 7.'],
    ] as const) {
        void test(`v${specVersion}: a missing ${kind} is reported and nothing is saved or dispatched`, async () => {
            const { ctx, saved, lookedUp } = fakeStore([])
            const [model, sns] = await thawed(ctx, block, thawEvent(specVersion, kinds[kind]), false)
            assert.deepEqual(lookedUp, [id])
            assert.equal(model?.id, '10-2')
            assert.equal(sns, undefined)
            assert.deepEqual(saved, [])
            assert.deepEqual(statsDispatched, [])

            process.env.APP_ENV = 'development'
            await assert.rejects(thawed(ctx, block, thawEvent(specVersion, kinds[kind]), false), { message })
        })
    }

    void test(`v${specVersion}: skipSave returns only the event model`, async () => {
        const { ctx, lookedUp } = fakeStore([])
        const [model, sns] = await thawed(ctx, block, thawEvent(specVersion, kinds.token), true)
        assert.equal(model?.name, 'MultiTokensThawed')
        assert.equal(sns, undefined)
        assert.deepEqual(lookedUp, [])
        assert.deepEqual(statsDispatched, [])
    })

    void test(`v${specVersion}: no SNS event without an extrinsic`, async () => {
        const { token } = entitiesFor()
        const { ctx } = fakeStore([token])
        const [, sns] = await thawed(ctx, block, thawEvent(specVersion, kinds.token, false), false)
        assert.equal(sns, undefined)
        assert.deepEqual(statsDispatched, ['7'])
    })
}

void test('v500: SNS event describes the frozen target', async () => {
    const entities = entitiesFor()
    const expected = {
        tokenAccount: {
            kind: { __kind: 'TokenAccount', tokenId: 5n, accountId: account },
            address: account,
            tokenId: 5n,
            token: '7-5',
        },
        collectionAccount: {
            kind: { __kind: 'CollectionAccount', value: account },
            address: account,
            tokenId: null,
            token: null,
        },
        token: {
            kind: { __kind: 'Token', tokenId: 5n, freezeState: undefined },
            address: null,
            tokenId: 5n,
            token: '7-5',
        },
        collection: { kind: { __kind: 'Collection' }, address: null, tokenId: null, token: null },
    }
    for (const kind of Object.keys(kinds) as (keyof typeof kinds)[]) {
        const { ctx } = fakeStore([entities[kind]])
        const [, sns] = await thawed(ctx, block, thawEvent(500, kinds[kind]), false)
        assert.deepEqual(
            sns,
            {
                id: '10-2',
                name: 'MultiTokens.Thawed',
                body: { ...expected[kind], collectionId: '7', extrinsic: '10-1' },
            },
            kind
        )
    }
})

void test('v500: SNS event for token 0 (pinned: token is dropped)', async () => {
    const tokenZero = new Token({ id: '7-0', isFrozen: true })
    const { ctx } = fakeStore([tokenZero])
    const [, sns] = await thawed(ctx, block, thawEvent(500, { __kind: 'Token', tokenId: '0' }), false)
    assert.deepEqual(sns?.body, {
        kind: { __kind: 'Token', tokenId: 0n, freezeState: undefined },
        address: null,
        collectionId: '7',
        tokenId: 0n,
        token: null,
        extrinsic: '10-1',
    })
})

void test('v1040: SNS event (pinned: built from the absent freezeType, so it carries no target)', async () => {
    const entities = entitiesFor()
    for (const kind of Object.keys(kinds) as (keyof typeof kinds)[]) {
        const { ctx } = fakeStore([entities[kind]])
        const [, sns] = await thawed(ctx, block, thawEvent(1040, kinds[kind]), false)
        assert.deepEqual(
            sns?.body,
            { kind: undefined, address: null, collectionId: '7', tokenId: null, token: null, extrinsic: '10-1' },
            kind
        )
    }
})
