import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block, EventItem } from '~/contexts'
import {
    Account,
    AuctionData,
    AuctionState,
    Collection,
    FixedPriceData,
    FixedPriceState,
    Listing,
    ListingType,
    MarketplaceListingBookState,
    Token,
} from '~/model'
import { SnsEvent } from '~/util/sns'

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
    dispatchComputeTokenBestListing: noop,
}
stubModule('~/queue/queue-utils', queueUtils)
stubModule('~/queue', { QueueUtils: queueUtils })

const { auctionFinalized } = testRequire(
    '~/pallet/marketplace/processors/auction-finalized'
) as typeof import('~/pallet/marketplace/processors/auction-finalized')
const { listingCancelled } = testRequire(
    '~/pallet/marketplace/processors/listing-cancelled'
) as typeof import('~/pallet/marketplace/processors/listing-cancelled')
const { expiredListingRemoved } = testRequire(
    '~/pallet/marketplace/processors/expired-listing-removed'
) as typeof import('~/pallet/marketplace/processors/expired-listing-removed')

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

const seller = `0x${'11'.repeat(32)}`
const bidder = `0x${'22'.repeat(32)}`
const listingId = 'aa'.repeat(32)

function fixtures(type: ListingType) {
    const sellerAccount = new Account({ id: seller, address: seller })
    const collection = new Collection({ id: '10', collectionId: 10n })
    const token = new Token({ id: '10-20', tokenId: 20n, collection })
    const currency = new Token({ id: '0-0', tokenId: 0n, collection: new Collection({ id: '0', collectionId: 0n }) })
    const listing = new Listing({
        id: listingId,
        type,
        seller: sellerAccount,
        makeAssetId: token,
        takeAssetId: currency,
        amount: 1n,
        price: 10n,
        highestPrice: 12n,
        isActive: true,
        bookState: MarketplaceListingBookState.Resting,
        data:
            type === ListingType.Auction
                ? new AuctionData({ listingType: type, startHeight: 1, endHeight: 100 })
                : new FixedPriceData({ listingType: type }),
        state:
            type === ListingType.Auction
                ? new AuctionState({ listingType: type, highBid: null })
                : new FixedPriceState({ listingType: type, amountFilled: 0n, amountRemaining: 1n }),
    })
    const saved: unknown[] = []
    const ctx = {
        store: {
            findOne: (entity: unknown) => Promise.resolve(entity === Listing ? listing : undefined),
            findOneBy: (entity: unknown, where: { id: string }) =>
                Promise.resolve(entity === Account && where.id === seller ? sellerAccount : undefined),
            find: () => Promise.resolve([]),
            save: (entity: unknown) => Promise.resolve(saved.push(entity)),
            insert: (entity: unknown) => Promise.resolve(saved.push(entity)),
        },
    } as never
    return { listing, ctx, saved }
}

// Sweep events come from `on_idle` (matrix 1040 BLOCK-3433, 1041 BLOCK-3527): there is no extrinsic.
function sweepItem(runtime: Runtime, id: string, name: string, args: unknown): EventItem {
    return { id, name, args, block: { _runtime: runtime }, extrinsic: undefined } as EventItem
}

const runtime = runtimeFor('canary-matrixchain', 1042)
const block = { _runtime: runtime, height: 500, hash: '0x01', timestamp: 1_000 } as Block

function snsOf(result: readonly unknown[] | undefined): SnsEvent {
    assert(result)
    const sns = result[result.length - 1] as SnsEvent | undefined
    assert(sns, 'the SNS message must be published even though the event has no extrinsic')
    return sns
}

void test('AuctionFinalized from the on_idle sweep still publishes the SNS message NFTio uses for SOLD / AUCTION_WON', async () => {
    const { listing, ctx } = fixtures(ListingType.Auction)

    const sns = snsOf(
        await auctionFinalized(
            ctx,
            block,
            sweepItem(runtime, '500-3', 'Marketplace.AuctionFinalized', {
                listingId: `0x${listingId}`,
                winningBid: { bidder, price: '15', blockNumber: 480 },
                protocolFee: '1',
                royalty: '0',
            })
        )
    )

    assert.equal(sns.name, 'Marketplace.AuctionFinalized')
    assert.equal(sns.id, '500-3')
    assert.deepEqual(sns.body.winningBid, { bidder: { id: bidder }, price: 15 })
    assert.equal((sns.body.listing as { seller: { id: string } }).seller.id, seller)
    assert.equal(sns.body.extrinsic, undefined)
    assert.equal(listing.isActive, false)
})

void test('ListingCancelled from the on_idle sweep still publishes the SNS message', async () => {
    const { ctx } = fixtures(ListingType.FixedPrice)

    const sns = snsOf(
        await listingCancelled(
            ctx,
            block,
            sweepItem(runtime, '500-4', 'Marketplace.ListingCancelled', { listingId: `0x${listingId}` })
        )
    )

    assert.equal(sns.name, 'Marketplace.ListingCancelled')
    assert.equal((sns.body.listing as { id: string; type: string }).id, listingId)
    assert.equal((sns.body.listing as { type: string }).type, 'FixedPrice')
    assert.equal(sns.body.extrinsic, undefined)
})

void test('ExpiredListingRemoved from the on_idle sweep still publishes the SNS message', async () => {
    const { ctx } = fixtures(ListingType.FixedPrice)

    const sns = snsOf(
        await expiredListingRemoved(
            ctx,
            block,
            sweepItem(runtime, '500-5', 'Marketplace.ExpiredListingRemoved', { listingId: `0x${listingId}` })
        )
    )

    assert.equal(sns.name, 'Marketplace.ExpiredListingRemoved')
    assert.equal((sns.body.listing as { id: string }).id, listingId)
    assert.equal(sns.body.extrinsic, undefined)
})

void test('a signed cancellation keeps carrying its extrinsic id', async () => {
    const { ctx } = fixtures(ListingType.FixedPrice)
    const item = {
        ...sweepItem(runtime, '501-2', 'Marketplace.ListingCancelled', { listingId: `0x${listingId}` }),
        extrinsic: { id: '501-1' },
    } as EventItem

    const sns = snsOf(await listingCancelled(ctx, block, item))
    assert.equal(sns.body.extrinsic, '501-1')
})
