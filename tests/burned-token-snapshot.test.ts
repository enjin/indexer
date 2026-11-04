import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, EventItem } from '~/contexts'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Metadata,
    MetadataMedia,
    MultiTokensBurned,
    NativeTokenMetadata,
    Token,
    TokenAccount,
} from '~/model'
import { SnsEvent } from '~/util/sns'
import { rememberBlockEvents } from '~/util/sns-cause'

// The processors pull in the job queue; stub it so the run exits and no Redis is needed.
const testRequire = createRequire(__filename)
const stubbed = new Map<string, NodeJS.Module | undefined>()
function stubModule(specifier: string, exports: unknown): void {
    const modulePath = testRequire.resolve(specifier)
    assert.equal(testRequire.cache[modulePath], undefined, `${specifier} loaded before the test stub was installed`)
    const module = new Module(modulePath)
    module.loaded = true
    module.exports = exports
    stubbed.set(modulePath, testRequire.cache[modulePath])
    testRequire.cache[modulePath] = module
}
const noop = () => Promise.resolve()
const queueUtils = {
    dispatchComputeAccountStats: noop,
    dispatchComputeStats: noop,
    dispatchComputeTraits: noop,
    dispatchComputeTokenBestListing: noop,
}
stubModule('~/queue/queue-utils', queueUtils)
stubModule('~/queue', { QueueUtils: queueUtils })

const { burned } = testRequire(
    '~/pallet/multi-tokens/processors/burned'
) as typeof import('~/pallet/multi-tokens/processors/burned')
const { tokenDestroyed } = testRequire(
    '~/pallet/multi-tokens/processors/token-destroyed'
) as typeof import('~/pallet/multi-tokens/processors/token-destroyed')

after(() => {
    for (const [modulePath, original] of stubbed) testRequire.cache[modulePath] = original
})

type MetadataLine = { specName: string; specVersion: number; metadata: string }

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

const runtime = runtimeFor('canary-matrixchain', 1042)
const block = { _runtime: runtime, height: 13550470, hash: '0x01', timestamp: 1_000 } as Block
const holder = `0x${'11'.repeat(32)}`
const pallet = `0x${'22'.repeat(32)}`

function eventItem(id: string, name: string, args: unknown, extrinsic?: string): EventItem {
    return {
        id,
        name,
        args,
        block: { _runtime: runtime },
        extrinsic: extrinsic ? { id: extrinsic } : undefined,
    } as EventItem
}

type TokenOverrides = {
    metadata?: Metadata | null
    name?: string | null
    nativeName?: string
    decimalCount?: number
    infusion?: bigint
}

function tokenWith(overrides: TokenOverrides = {}): Token {
    const metadata =
        overrides.metadata === undefined
            ? new Metadata({
                  name: 'Golden Ticket',
                  fallbackImage: 'https://cdn.example/fallback.png',
                  media: [new MetadataMedia({ url: 'https://cdn.example/ticket.png', type: 'image/png', alt: '' })],
              })
            : overrides.metadata
    return new Token({
        id: '10-20',
        tokenId: 20n,
        collection: new Collection({ id: '10', collectionId: 10n }),
        supply: 1n,
        infusion: overrides.infusion ?? 0n,
        ephemeralExpiration: 13550470n,
        name: overrides.name === undefined ? metadata?.name : overrides.name,
        metadata: metadata ?? undefined,
        nativeMetadata:
            overrides.nativeName || overrides.decimalCount !== undefined
                ? new NativeTokenMetadata({
                      name: overrides.nativeName ?? '',
                      symbol: 'GT',
                      decimalCount: overrides.decimalCount ?? 0,
                  })
                : undefined,
    })
}

/** A store whose Token row disappears once `tokenDestroyed` removes it, the way the real store does within a block. */
/** `token: null` is a store without the Token row (deleted by an earlier run). */
function fixtures(token: Token | null = tokenWith(), storedEvents: EventModel[] = []) {
    const accounts = new Map<string, Account>()
    const events = new Map(storedEvents.map((event) => [event.id, event]))
    let tokenRow: Token | undefined = token ?? undefined
    const ctx = {
        store: {
            findOne: (entity: unknown, options: { where: { id: string } }) => {
                if (entity === Token) return Promise.resolve(tokenRow)
                if (entity === TokenAccount) {
                    return Promise.resolve(new TokenAccount({ id: options.where.id, balance: 1n, totalBalance: 1n }))
                }
                return Promise.resolve(undefined)
            },
            findOneBy: (entity: unknown, where: { id: string }) => {
                if (entity === Account) return Promise.resolve(accounts.get(where.id))
                if (entity === Token) return Promise.resolve(tokenRow)
                if (entity === EventModel) return Promise.resolve(events.get(where.id))
                return Promise.resolve(undefined)
            },
            find: () => Promise.resolve([]),
            save: (entity: unknown) => {
                if (entity instanceof Account) accounts.set(entity.id, entity)
                return Promise.resolve(entity)
            },
            insert: (entity: unknown) => Promise.resolve(entity),
            remove: (entity: unknown) => {
                if (entity instanceof Token) tokenRow = undefined
                return Promise.resolve(entity)
            },
        },
        log: { error: () => undefined, warn: () => undefined },
    } as never
    return { ctx }
}

function storedBurn(result: readonly unknown[] | undefined): MultiTokensBurned {
    assert(result)
    const event = result[0] as EventModel
    assert(event.data instanceof MultiTokensBurned)
    return event.data
}

const burnedArgs = { collectionId: '10', tokenId: '20', accountId: holder, amount: '1' }
const destroyedArgs = { collectionId: '10', tokenId: '20', caller: pallet }
const expiryArgs = { collectionId: '10', tokenId: '20', expiration: 13550470 }

// The stored burn keeps a snapshot of the token's metadata only when the burn destroys the token: afterwards the Token
// row is gone and the event is the only place history can read it from. Consumers apply their own display rules.

function snapshotJson(data: MultiTokensBurned) {
    const json = data.toJSON() as { tokenMetadata?: unknown; tokenNativeMetadata?: unknown }
    return { metadata: json.tokenMetadata, nativeMetadata: json.tokenNativeMetadata }
}

// Canary block 13550470: TokenAccountDestroyed (2), TokenDestroyed (4), Burned (5), EphemeralTokenDestroyed (6).
void test('an expiry burn in a block where the token was destroyed first stores the metadata snapshot', async () => {
    const token = tokenWith({ nativeName: 'Gold', decimalCount: 0 })
    const { ctx } = fixtures(token)
    const destroyedItem = eventItem('13550470-4', 'MultiTokens.TokenDestroyed', destroyedArgs)
    const burnedItem = eventItem('13550470-5', 'MultiTokens.Burned', burnedArgs)
    const expiryItem = eventItem('13550470-6', 'MultiTokens.EphemeralTokenDestroyed', expiryArgs)
    rememberBlockEvents(block.hash, [destroyedItem, burnedItem, expiryItem])

    await tokenDestroyed(ctx, block, destroyedItem, false)
    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.cause, 'ephemeralExpiry')
    assert.equal(data.token, '10-20')
    assert(token.metadata && token.nativeMetadata)
    assert.deepEqual(snapshotJson(data), {
        metadata: token.metadata.toJSON(),
        nativeMetadata: token.nativeMetadata.toJSON(),
    })
})

// A holder's burn that removes the token storage: Burned first, TokenDestroyed later in the same extrinsic.
void test('a burn followed by TokenDestroyed of the same token in its block stores the metadata snapshot', async () => {
    const token = tokenWith({ nativeName: 'Gold', decimalCount: 0 })
    const { ctx } = fixtures(token)
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
    const destroyedItem = eventItem('13550470-2', 'MultiTokens.TokenDestroyed', destroyedArgs, '13550470-0')
    rememberBlockEvents(block.hash, [burnedItem, destroyedItem])

    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.cause, 'burn')
    assert(token.metadata && token.nativeMetadata)
    assert.deepEqual(snapshotJson(data), {
        metadata: token.metadata.toJSON(),
        nativeMetadata: token.nativeMetadata.toJSON(),
    })
})

void test('a token without metadata keeps only its native metadata in the snapshot', async () => {
    const token = tokenWith({ metadata: null, name: null, nativeName: 'Gold', decimalCount: 6 })
    const { ctx } = fixtures(token)
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
    const destroyedItem = eventItem('13550470-2', 'MultiTokens.TokenDestroyed', destroyedArgs, '13550470-0')
    rememberBlockEvents(block.hash, [burnedItem, destroyedItem])

    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.tokenMetadata, null)
    assert(data.tokenNativeMetadata)
    assert.equal(data.tokenNativeMetadata.name, 'Gold')
    assert.equal(data.tokenNativeMetadata.decimalCount, 6)
})

void test('a burn of a surviving token stores no snapshot', async () => {
    const { ctx } = fixtures(tokenWith({ nativeName: 'Gold' }))
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
    const otherDestroyed = eventItem('13550470-2', 'MultiTokens.TokenDestroyed', { ...destroyedArgs, tokenId: '21' })
    rememberBlockEvents(block.hash, [burnedItem, otherDestroyed])

    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.tokenMetadata, null)
    assert.equal(data.tokenNativeMetadata, null)
    assert.deepEqual(snapshotJson(data), { metadata: undefined, nativeMetadata: undefined })
})

void test('a burn whose state changes are skipped stores no snapshot for a surviving token', async () => {
    const { ctx } = fixtures()
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
    rememberBlockEvents(block.hash, [burnedItem])

    const data = storedBurn(await burned(ctx, block, burnedItem, true))

    assert.equal(data.tokenMetadata, null)
    assert.equal(data.tokenNativeMetadata, null)
})

void test('a burn of a token the indexer never had stores no snapshot', async () => {
    const { ctx } = fixtures()
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', { ...burnedArgs, tokenId: '21' }, '13550470-0')
    const destroyedItem = eventItem('13550470-2', 'MultiTokens.TokenDestroyed', { ...destroyedArgs, tokenId: '21' })
    rememberBlockEvents(block.hash, [burnedItem, destroyedItem])
    ;(ctx as { store: { findOne: unknown } }).store.findOne = () => Promise.resolve(undefined)

    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.token, '10-21')
    assert.equal(data.tokenMetadata, null)
    assert.equal(data.tokenNativeMetadata, null)
})

// Another holder destroys the token in a different extrinsic of the same block; this holder's partial burn does not.
void test('a burn in another extrinsic than the TokenDestroyed of its token stores no snapshot', async () => {
    const { ctx } = fixtures()
    const partialBurn = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
    const destroyingBurn = eventItem(
        '13550470-3',
        'MultiTokens.Burned',
        { ...burnedArgs, accountId: pallet },
        '13550470-2'
    )
    const destroyedItem = eventItem('13550470-4', 'MultiTokens.TokenDestroyed', destroyedArgs, '13550470-2')
    rememberBlockEvents(block.hash, [partialBurn, destroyingBurn, destroyedItem])

    const data = storedBurn(await burned(ctx, block, partialBurn, false))

    assert.equal(data.tokenMetadata, null)
    assert.equal(data.tokenNativeMetadata, null)
})

// A replay (block at or below the configured state block) runs with skipSave: TokenDestroyed returns before it stashes
// anything and the Token row was deleted by the original run, yet the Event row is saved again by id.
void test('a replay of the expiry order keeps the snapshot the original run stored', async () => {
    const original = tokenWith({ nativeName: 'Gold', decimalCount: 0 })
    assert(original.metadata && original.nativeMetadata)
    const stored = new EventModel({
        id: '13550470-5',
        name: MultiTokensBurned.name,
        data: new MultiTokensBurned({
            collectionId: 10n,
            tokenId: 20n,
            token: '10-20',
            account: holder,
            amount: 1n,
            cause: 'ephemeralExpiry',
            expirationBlock: 13550470n,
            tokenMetadata: original.metadata,
            tokenNativeMetadata: original.nativeMetadata,
        }),
    })
    const { ctx } = fixtures(null, [stored])
    // A block of its own: the TokenDestroyed stash of an earlier test in this file must not stand in for the replay.
    const replayBlock = { ...block, hash: '0x5e01' }
    const destroyedItem = eventItem('13550470-4', 'MultiTokens.TokenDestroyed', destroyedArgs)
    const burnedItem = eventItem('13550470-5', 'MultiTokens.Burned', burnedArgs)
    const expiryItem = eventItem('13550470-6', 'MultiTokens.EphemeralTokenDestroyed', expiryArgs)
    rememberBlockEvents(replayBlock.hash, [destroyedItem, burnedItem, expiryItem])

    await tokenDestroyed(ctx, replayBlock, destroyedItem, true)
    const data = storedBurn(await burned(ctx, replayBlock, burnedItem, true))

    assert.deepEqual(snapshotJson(data), {
        metadata: original.metadata.toJSON(),
        nativeMetadata: original.nativeMetadata.toJSON(),
    })
})

void test('a replay with no earlier Event row stores no snapshot', async () => {
    const { ctx } = fixtures(null)
    const replayBlock = { ...block, hash: '0x5e02' }
    const burnedItem = eventItem('13550470-5', 'MultiTokens.Burned', burnedArgs)
    rememberBlockEvents(replayBlock.hash, [burnedItem])

    const data = storedBurn(await burned(ctx, replayBlock, burnedItem, true))

    assert.equal(data.tokenMetadata, null)
    assert.equal(data.tokenNativeMetadata, null)
})

void test('a destroyed token snapshot does not leak into another block', async () => {
    const { ctx } = fixtures()
    const destroyedItem = eventItem('13550470-4', 'MultiTokens.TokenDestroyed', destroyedArgs)
    rememberBlockEvents(block.hash, [destroyedItem])
    await tokenDestroyed(ctx, block, destroyedItem, false)

    const laterBlock = { ...block, height: 13550471, hash: '0x02' }
    const burnedItem = eventItem('13550471-1', 'MultiTokens.Burned', burnedArgs, '13550471-0')
    rememberBlockEvents(laterBlock.hash, [burnedItem])

    const data = storedBurn(await burned(ctx, laterBlock, burnedItem, false))

    assert.equal(data.tokenMetadata, null)
    assert.equal(data.tokenNativeMetadata, null)
})

function snsOf(result: readonly unknown[] | undefined): SnsEvent | undefined {
    assert(result)
    return result[2] as SnsEvent | undefined
}

function historyOf(result: readonly unknown[] | undefined): AccountTokenEvent | undefined {
    assert(result)
    return result[1] as AccountTokenEvent | undefined
}

// The same canary order: the Token row is gone when Burned runs, yet the expiry must still reach SNS consumers
// (PLA-2649) and the holder's history.
void test('an expiry burn in a block where the token was destroyed first is still published with its cause', async () => {
    const { ctx } = fixtures(tokenWith({ decimalCount: 2, infusion: 5n }))
    const destroyedItem = eventItem('13550470-4', 'MultiTokens.TokenDestroyed', destroyedArgs)
    const burnedItem = eventItem('13550470-5', 'MultiTokens.Burned', { ...burnedArgs, amount: '100' })
    const expiryItem = eventItem('13550470-6', 'MultiTokens.EphemeralTokenDestroyed', expiryArgs)
    rememberBlockEvents(block.hash, [destroyedItem, burnedItem, expiryItem])

    await tokenDestroyed(ctx, block, destroyedItem, false)
    const sns = snsOf(await burned(ctx, block, burnedItem, false))

    assert(sns)
    assert.equal(sns.id, '13550470-5')
    assert.equal(sns.name, 'MultiTokens.Burned')
    assert.equal(sns.body.cause, 'ephemeralExpiry')
    assert.equal(sns.body.expiration, 13550470)
    assert.equal(sns.body.collectionId, 10n)
    assert.equal(sns.body.tokenId, 20n)
    assert.equal(sns.body.token, '10-20')
    assert.equal(sns.body.account, holder)
    assert.equal(sns.body.amount, 1)
    assert.equal(sns.body.decimalCount, 2)
    assert.equal(sns.body.infusion, 5n)
    assert.equal(sns.body.totalBurntInfusion, 500n)
    assert.equal(sns.body.extrinsic, undefined)
})

void test('an expiry burn in a block where the token was destroyed first stays in the holder history', async () => {
    const { ctx } = fixtures()
    const destroyedItem = eventItem('13550470-4', 'MultiTokens.TokenDestroyed', destroyedArgs)
    const burnedItem = eventItem('13550470-5', 'MultiTokens.Burned', burnedArgs)
    const expiryItem = eventItem('13550470-6', 'MultiTokens.EphemeralTokenDestroyed', expiryArgs)
    rememberBlockEvents(block.hash, [destroyedItem, burnedItem, expiryItem])

    await tokenDestroyed(ctx, block, destroyedItem, false)
    const history = historyOf(await burned(ctx, block, burnedItem, false))

    assert(history)
    assert.equal(history.id, '13550470-5')
    assert.equal(history.from.id, holder)
    assert.equal(history.event.id, '13550470-5')
    assert.equal(history.collection?.id, '10')
    assert.equal(history.token, null)
})

void test('a skipped burn in a block where the token was destroyed first is not published', async () => {
    const { ctx } = fixtures()
    const destroyedItem = eventItem('13550470-4', 'MultiTokens.TokenDestroyed', destroyedArgs)
    const burnedItem = eventItem('13550470-5', 'MultiTokens.Burned', burnedArgs)
    const expiryItem = eventItem('13550470-6', 'MultiTokens.EphemeralTokenDestroyed', expiryArgs)
    rememberBlockEvents(block.hash, [destroyedItem, burnedItem, expiryItem])

    await tokenDestroyed(ctx, block, destroyedItem, false)
    const result = await burned(ctx, block, burnedItem, true)

    assert.equal(snsOf(result), undefined)
    assert.equal(historyOf(result), undefined)
})

void test('a burn of a token the indexer never had is neither published nor added to history', async () => {
    const { ctx } = fixtures()
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', { ...burnedArgs, tokenId: '21' }, '13550470-0')
    rememberBlockEvents(block.hash, [burnedItem])
    ;(ctx as { store: { findOne: unknown } }).store.findOne = () => Promise.resolve(undefined)

    const result = await burned(ctx, block, burnedItem, false)

    assert.equal(snsOf(result), undefined)
    assert.equal(historyOf(result), undefined)
})
