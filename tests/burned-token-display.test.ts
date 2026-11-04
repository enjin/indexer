import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, EventItem } from '~/contexts'
import {
    Account,
    Collection,
    Event as EventModel,
    Metadata,
    MetadataMedia,
    MultiTokensBurned,
    Token,
    TokenAccount,
} from '~/model'
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

type TokenOverrides = { metadata?: Metadata | null; name?: string | null; nativeName?: string }

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
        infusion: 0n,
        ephemeralExpiration: 13550470n,
        name: overrides.name === undefined ? metadata?.name : overrides.name,
        metadata: metadata ?? undefined,
        nativeMetadata: overrides.nativeName
            ? { name: overrides.nativeName, symbol: 'GT', decimalCount: 0 }
            : undefined,
    } as never)
}

/** A store whose Token row disappears once `tokenDestroyed` removes it, the way the real store does within a block. */
function fixtures(token: Token = tokenWith()) {
    const accounts = new Map<string, Account>()
    let tokenRow: Token | undefined = token
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

// Canary block 13550470: TokenAccountDestroyed (2), TokenDestroyed (4), Burned (5), EphemeralTokenDestroyed (6).
void test('an expiry burn in a block where the token was destroyed first still stores the name and image', async () => {
    const { ctx } = fixtures()
    const destroyedItem = eventItem('13550470-4', 'MultiTokens.TokenDestroyed', destroyedArgs)
    const burnedItem = eventItem('13550470-5', 'MultiTokens.Burned', burnedArgs)
    const expiryItem = eventItem('13550470-6', 'MultiTokens.EphemeralTokenDestroyed', expiryArgs)
    rememberBlockEvents(block.hash, [destroyedItem, burnedItem, expiryItem])

    await tokenDestroyed(ctx, block, destroyedItem, false)
    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.cause, 'ephemeralExpiry')
    assert.equal(data.token, '10-20')
    assert.equal(data.tokenName, 'Golden Ticket')
    assert.equal(data.tokenImage, 'https://cdn.example/fallback.png')
})

void test('a plain burn of a surviving token stores the name and image', async () => {
    const { ctx } = fixtures()
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
    rememberBlockEvents(block.hash, [burnedItem])

    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.cause, 'burn')
    assert.equal(data.tokenName, 'Golden Ticket')
    assert.equal(data.tokenImage, 'https://cdn.example/fallback.png')
})

void test('a burn whose state changes are skipped still stores the name and image', async () => {
    const { ctx } = fixtures()
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
    rememberBlockEvents(block.hash, [burnedItem])

    const data = storedBurn(await burned(ctx, block, burnedItem, true))

    assert.equal(data.tokenName, 'Golden Ticket')
    assert.equal(data.tokenImage, 'https://cdn.example/fallback.png')
})

// The wallet (walletapi app/EnjinChain/Asset.php) shows the native name before the metadata name, and the metadata fallback
// image, never a media url; the stored event follows it so the expired row looks like the asset did.
void test('the on-chain native name wins over the metadata name, as the wallet shows it', async () => {
    const { ctx } = fixtures(tokenWith({ nativeName: 'Gold' }))
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
    rememberBlockEvents(block.hash, [burnedItem])

    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.tokenName, 'Gold')
})

void test('an empty or 0x native name falls back to the metadata name', async () => {
    for (const nativeName of ['', '0x']) {
        const token = tokenWith()
        token.nativeMetadata = { name: nativeName, symbol: 'GT', decimalCount: 0 } as never
        const { ctx } = fixtures(token)
        const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
        rememberBlockEvents(block.hash, [burnedItem])

        const data = storedBurn(await burned(ctx, block, burnedItem, false))

        assert.equal(data.tokenName, 'Golden Ticket', `native name ${JSON.stringify(nativeName)}`)
    }
})

void test('a token with media but no fallback image stores no image', async () => {
    const { ctx } = fixtures(
        tokenWith({
            metadata: new Metadata({
                name: 'Clip',
                media: [new MetadataMedia({ url: 'https://cdn.example/clip.mp4', type: 'video/mp4', alt: '' })],
            }),
        })
    )
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
    rememberBlockEvents(block.hash, [burnedItem])

    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.tokenName, 'Clip')
    assert.equal(data.tokenImage, null)
})

void test('a token without metadata stores its native name and no image', async () => {
    const { ctx } = fixtures(tokenWith({ metadata: null, name: null, nativeName: 'Gold' }))
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', burnedArgs, '13550470-0')
    rememberBlockEvents(block.hash, [burnedItem])

    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.tokenName, 'Gold')
    assert.equal(data.tokenImage, null)
})

void test('a burn of a token the indexer never had stores no name or image', async () => {
    const { ctx } = fixtures()
    const burnedItem = eventItem('13550470-1', 'MultiTokens.Burned', { ...burnedArgs, tokenId: '21' }, '13550470-0')
    rememberBlockEvents(block.hash, [burnedItem])
    ;(ctx as { store: { findOne: unknown } }).store.findOne = () => Promise.resolve(undefined)

    const data = storedBurn(await burned(ctx, block, burnedItem, false))

    assert.equal(data.token, '10-21')
    assert.equal(data.tokenName, null)
    assert.equal(data.tokenImage, null)
})

void test('a destroyed token display does not leak into another block', async () => {
    const { ctx } = fixtures()
    const destroyedItem = eventItem('13550470-4', 'MultiTokens.TokenDestroyed', destroyedArgs)
    rememberBlockEvents(block.hash, [destroyedItem])
    await tokenDestroyed(ctx, block, destroyedItem, false)

    const laterBlock = { ...block, height: 13550471, hash: '0x02' }
    const burnedItem = eventItem('13550471-1', 'MultiTokens.Burned', burnedArgs, '13550471-0')
    rememberBlockEvents(laterBlock.hash, [burnedItem])

    const data = storedBurn(await burned(ctx, laterBlock, burnedItem, false))

    assert.equal(data.tokenName, null)
    assert.equal(data.tokenImage, null)
})
