import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, EventItem } from '~/contexts'
import { Account, Collection, Token, TokenAccount } from '~/model'
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
const { transferred } = testRequire(
    '~/pallet/multi-tokens/processors/transferred'
) as typeof import('~/pallet/multi-tokens/processors/transferred')
const { ephemeralTokenDestroyed } = testRequire(
    '~/pallet/multi-tokens/processors/ephemeral-token-destroyed'
) as typeof import('~/pallet/multi-tokens/processors/ephemeral-token-destroyed')

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
const block = { _runtime: runtime, height: 500, hash: '0x01', timestamp: 1_000 } as Block
const holder = `0x${'11'.repeat(32)}`
const lender = `0x${'22'.repeat(32)}`

function eventItem(id: string, name: string, args: unknown, extrinsic?: string): EventItem {
    return {
        id,
        name,
        args,
        block: { _runtime: runtime },
        extrinsic: extrinsic ? { id: extrinsic } : undefined,
    } as EventItem
}

function fixtures() {
    const accounts = new Map<string, Account>()
    const token = new Token({
        id: '10-20',
        tokenId: 20n,
        collection: new Collection({ id: '10', collectionId: 10n }),
        supply: 1n,
        infusion: 0n,
        ephemeralExpiration: 500n,
    })
    const ctx = {
        store: {
            findOne: (entity: unknown, options: { where: { id: string } }) => {
                if (entity === Token) return Promise.resolve(token)
                if (entity === TokenAccount) {
                    return Promise.resolve(new TokenAccount({ id: options.where.id, balance: 1n, totalBalance: 1n }))
                }
                return Promise.resolve(undefined)
            },
            findOneBy: (entity: unknown, where: { id: string }) =>
                Promise.resolve(entity === Account ? accounts.get(where.id) : undefined),
            find: () => Promise.resolve([]),
            save: (entity: unknown) => {
                if (entity instanceof Account) accounts.set(entity.id, entity)
                return Promise.resolve(entity)
            },
            insert: (entity: unknown) => Promise.resolve(entity),
        },
        log: { error: () => undefined, warn: () => undefined },
    } as never
    return { ctx, token }
}

function snsOf(result: readonly unknown[] | undefined): SnsEvent | undefined {
    assert(result)
    return result[result.length - 1] as SnsEvent | undefined
}

const burnedArgs = { collectionId: '10', tokenId: '20', accountId: holder, amount: '1' }
const expiryArgs = { collectionId: '10', tokenId: '20', expiration: 500 }

void test('a burn of an expired ephemeral token is published as Burned with cause ephemeralExpiry', async () => {
    const { ctx } = fixtures()
    const burnedItem = eventItem('500-1', 'MultiTokens.Burned', burnedArgs)
    const expiryItem = eventItem('500-2', 'MultiTokens.EphemeralTokenDestroyed', expiryArgs)
    rememberBlockEvents(block.hash, [burnedItem, expiryItem])

    const sns = snsOf(await burned(ctx, block, burnedItem, false))

    assert(sns)
    assert.equal(sns.name, 'MultiTokens.Burned')
    assert.equal(sns.body.cause, 'ephemeralExpiry')
    assert.equal(sns.body.expiration, 500)
    assert.equal(sns.body.account, holder)
    assert.equal(sns.body.extrinsic, undefined)
})

void test('the EphemeralTokenDestroyed event itself is persisted but not published', () => {
    const result = ephemeralTokenDestroyed(
        {} as never,
        block,
        eventItem('500-2', 'MultiTokens.EphemeralTokenDestroyed', expiryArgs)
    )

    assert(!Array.isArray(result))
    assert.equal(result?.name, 'MultiTokensEphemeralTokenDestroyed')
})

void test('a burn with no expiry in its block is published with cause burn', async () => {
    const { ctx } = fixtures()
    const burnedItem = eventItem('500-1', 'MultiTokens.Burned', burnedArgs, '500-0')
    const otherToken = eventItem('500-2', 'MultiTokens.EphemeralTokenDestroyed', { ...expiryArgs, tokenId: '21' })
    rememberBlockEvents(block.hash, [burnedItem, otherToken])

    const sns = snsOf(await burned(ctx, block, burnedItem, false))

    assert(sns)
    assert.equal(sns.body.cause, 'burn')
    assert.equal(sns.body.expiration, undefined)
    assert.equal(sns.body.extrinsic, '500-0')
})

const transferArgs = { collectionId: '10', tokenId: '20', operator: holder, from: holder, to: lender, amount: '1' }
const returnedArgs = { collectionId: '10', tokenId: '20', lender, borrower: holder }

void test('a transfer that returns a loan is published as Transferred with cause loanReturn', async () => {
    const { ctx } = fixtures()
    const returnedItem = eventItem('500-1', 'MultiTokens.TokenReturned', returnedArgs)
    const transferItem = eventItem('500-2', 'MultiTokens.Transferred', transferArgs)
    rememberBlockEvents(block.hash, [returnedItem, transferItem])

    const sns = snsOf(await transferred(ctx, block, transferItem, false))

    assert(sns)
    assert.equal(sns.name, 'MultiTokens.Transferred')
    assert.equal(sns.body.cause, 'loanReturn')
    assert.equal(sns.body.lender, lender)
    assert.equal(sns.body.borrower, holder)
    assert.equal(sns.body.from, holder)
    assert.equal(sns.body.to, lender)
})

void test('a transfer with no return in its block is published with cause transfer', async () => {
    const { ctx } = fixtures()
    const transferItem = eventItem('500-2', 'MultiTokens.Transferred', transferArgs, '500-0')
    rememberBlockEvents(block.hash, [transferItem])

    const sns = snsOf(await transferred(ctx, block, transferItem, false))

    assert(sns)
    assert.equal(sns.body.cause, 'transfer')
    assert.equal(sns.body.lender, undefined)
    assert.equal(sns.body.borrower, undefined)
})

void test('a fill from create_listing_and_match carries cause match with the taker and side', () => {
    const { listingFilledSnsEvent } = testRequire(
        '~/pallet/marketplace/processors/listing-filled-sns'
    ) as typeof import('~/pallet/marketplace/processors/listing-filled-sns')
    const { Listing, ListingType, FixedPriceData, FixedPriceState } = testRequire('~/model') as typeof import('~/model')
    const { token } = fixtures()
    const currency = new Token({ id: '0-0', tokenId: 0n, collection: new Collection({ id: '0', collectionId: 0n }) })
    const listing = new Listing({
        id: 'aa'.repeat(32),
        type: ListingType.FixedPrice,
        seller: new Account({ id: holder }),
        makeAssetId: token,
        takeAssetId: currency,
        amount: 1n,
        price: 10n,
        highestPrice: 10n,
        data: new FixedPriceData({ listingType: ListingType.FixedPrice }),
        state: new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 1n, amountRemaining: 0n }),
    })
    const fill = {
        listingId: `0x${listing.id}`,
        buyer: lender,
        price: 10n,
        amountFilled: 1n,
        amountRemaining: 0n,
        protocolFee: 0n,
        royalty: 0n,
    }

    const matched = listingFilledSnsEvent(
        eventItem('500-3', 'Marketplace.ListingFilled', {}, '500-0'),
        fill,
        listing,
        token,
        currency,
        {
            taker: lender,
            side: { __kind: 'Bid' },
        }
    )
    assert.equal(matched.body.cause, 'match')
    assert.deepEqual(matched.body.taker, { id: lender })
    assert.equal(matched.body.side, 'Bid')

    const plain = listingFilledSnsEvent(
        eventItem('500-3', 'Marketplace.ListingFilled', {}, '500-0'),
        fill,
        listing,
        token,
        currency
    )
    assert.equal(plain.body.cause, 'fill')
    assert.equal(plain.body.taker, undefined)
    assert.equal(plain.body.side, undefined)
})
