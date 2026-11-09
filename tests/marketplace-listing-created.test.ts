import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after, beforeEach } from 'node:test'
import type { Block, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import type { Network } from '~/decoder/types'
import {
    Account,
    AuctionData,
    AuctionState,
    Collection,
    FeeSide,
    FixedPriceData,
    FixedPriceState,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingBookState,
    MarketplaceListingNotIndexed,
    OfferData,
    OfferState,
    Token,
    TokenAccount,
} from '~/model'
import { MemoryStore, type Row } from './support/memory-store'

const testRequire = createRequire(__filename)
type Dispatch = [string, string]
const dispatched: Dispatch[] = []
const recorder = (name: string) => (id: string) => {
    dispatched.push([name, id])
    return Promise.resolve()
}
const queueStubs = {
    dispatchComputeTokenBestListing: recorder('bestListing'),
    dispatchComputeStats: recorder('stats'),
    dispatchComputeAccountStats: recorder('accountStats'),
}
const stubbed: [string, NodeJS.Module | undefined][] = []
for (const [path, exports] of [
    ['~/queue', { QueueUtils: queueStubs }],
    ['~/queue/queue-utils', queueStubs],
] as const) {
    const resolved = testRequire.resolve(path)
    stubbed.push([resolved, testRequire.cache[resolved]])
    const module = new Module(resolved)
    module.loaded = true
    module.exports = exports
    testRequire.cache[resolved] = module
}

const marketplace = testRequire('~/pallet/marketplace/processors') as typeof import('~/pallet/marketplace/processors')

after(() => {
    for (const [path, original] of stubbed) testRequire.cache[path] = original
})

beforeEach(() => {
    dispatched.length = 0
})

const sellerId = `0x${'bb'.repeat(32)}`
const holderId = `0x${'cc'.repeat(32)}`
const ownerId = `0x${'dd'.repeat(32)}`
const listingHex = `0x${'12'.repeat(32)}`
const listingId = listingHex.slice(2)
const timestamp = 1_700_000_000_000

let blockCounter = 0

async function fixture(rows: Row[], network: Network, specVersion: number, height = 500) {
    const runtime = await getRuntimeCached(network, specVersion)
    blockCounter += 1
    const block = { _runtime: runtime, height, hash: `0xlc${blockCounter}`, timestamp } as unknown as Block
    const store = new MemoryStore(rows)
    const ctx = { store, log: { warn: () => undefined } } as unknown as CommonContext
    const event = (args: unknown, extrinsic = true, id = `${height}-2`): EventItem =>
        ({
            id,
            name: 'Marketplace.ListingCreated',
            args,
            block,
            extrinsic: extrinsic ? { id: `${height}-1` } : undefined,
        }) as unknown as EventItem
    return { block, store, ctx, event }
}

/** A collection-5 NFT (the listed item) and the currency token 0-0 with 6 decimals. */
function world({ nftHolders = [holderId] }: { nftHolders?: string[] } = {}) {
    const nftCollection = new Collection({ id: '5' })
    const currencyCollection = new Collection({ id: '0' })
    const nft = new Token({ id: '5-1', collection: nftCollection, nonFungible: true, nativeMetadata: null })
    const currency = new Token({
        id: '0-0',
        collection: currencyCollection,
        nonFungible: false,
        nativeMetadata: { decimalCount: 6 } as Token['nativeMetadata'],
    })
    const holders = nftHolders.map(
        (id) => new TokenAccount({ id: `${id}-5-1`, token: nft, account: new Account({ id }) })
    )
    const currencyHolder = new TokenAccount({
        id: `${ownerId}-0-0`,
        token: currency,
        account: new Account({ id: ownerId }),
    })
    return { nft, currency, rows: [nft, currency, ...holders, currencyHolder] as Row[] }
}

const NFT = { collectionId: '5', tokenId: '1' }
const CURRENCY = { collectionId: '0', tokenId: '0' }

/** enjin-relaychain 1080 (current shape). */
function current(overrides: Record<string, unknown> = {}) {
    return {
        listingId: listingHex,
        listing: {
            creator: sellerId,
            makeAssetId: NFT,
            takeAssetId: CURRENCY,
            amount: '3',
            price: '250',
            minReceived: '200',
            feeSide: { __kind: 'Take' },
            creationBlock: 499,
            startBlock: undefined,
            whitelistedAccountCount: undefined,
            deposit: { depositor: sellerId, amount: '42' },
            salt: '0x0102',
            data: { __kind: 'FixedPrice' },
            state: { __kind: 'FixedPrice', amountFilled: '1' },
            ...overrides,
        },
    }
}

const sellerOf = (store: MemoryStore) => store.of(Account).find((a) => a.id === sellerId)

void test('fixed price listing (current runtime) is persisted with its status and links', async () => {
    const { nft, currency, rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)

    const result = await marketplace.listingCreated(ctx, block, event(current()))
    assert.ok(result)

    const [listing] = store.of(Listing)
    assert.equal(listing.id, listingId)
    assert.equal(listing.seller.id, sellerId)
    assert.equal(listing.makeAssetId, nft)
    assert.equal(listing.takeAssetId, currency)
    assert.equal(listing.amount, 3n)
    assert.equal(listing.price, 250n)
    assert.equal(listing.highestPrice, 250n)
    assert.equal(listing.minTakeValue, 200n)
    assert.equal(listing.feeSide, FeeSide.Take)
    assert.equal(listing.height, 499)
    assert.equal(listing.deposit, 42n)
    assert.equal(listing.salt, '0x0102')
    assert.deepEqual(listing.data, new FixedPriceData({ listingType: ListingType.FixedPrice }))
    assert.deepEqual(
        listing.state,
        new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 1n, amountRemaining: 2n })
    )
    assert.equal(listing.isActive, true)
    assert.equal(listing.bookState, MarketplaceListingBookState.Indexed)
    assert.equal(listing.startBlock, 510)
    assert.equal(listing.type, ListingType.FixedPrice)
    assert.equal(listing.usesWhitelist, false)
    assert.deepEqual(listing.whitelistedAccounts, [])
    assert.equal(listing.creationBlock, 500)
    assert.deepEqual(listing.createdAt, new Date(timestamp))
    assert.deepEqual(listing.updatedAt, new Date(timestamp))

    const [status] = store.of(ListingStatus)
    assert.equal(status.id, `${listingId}-500`)
    assert.equal(status.type, ListingStatusType.Active)
    assert.equal(status.listing, listing)
    assert.equal(status.height, 500)
    assert.deepEqual(status.createdAt, new Date(timestamp))

    assert.equal(nft.recentListing, listing)
    assert.ok(sellerOf(store), 'the creator account is created')
    assert.deepEqual(dispatched, [
        ['bestListing', '5-1'],
        ['stats', '5'],
        ['accountStats', holderId],
        ['accountStats', sellerId],
    ])

    const [eventModel, accountTokenEvent, sns] = result
    assert.equal(eventModel.id, '500-2')
    assert.equal(eventModel.name, 'MarketplaceListingCreated')
    assert.equal(eventModel.collectionId, '5')
    assert.equal(eventModel.tokenId, '5-1')
    assert.equal(eventModel.extrinsic?.id, '500-1')
    assert.equal((eventModel.data as { listing: string }).listing, listingId)
    assert.equal(accountTokenEvent.from.id, sellerId)
    assert.equal(accountTokenEvent.to, undefined)
    assert.equal(accountTokenEvent.token, nft)
    assert.equal(accountTokenEvent.collection, nft.collection)

    assert.deepEqual(sns, {
        id: '500-2',
        name: 'Marketplace.ListingCreated',
        body: {
            listing: {
                id: listingId,
                price: 250,
                amount: 3,
                highestPrice: 250,
                seller: { id: sellerId },
                data: { isTypeOf: 'FixedPriceData', listingType: 'FixedPrice' },
                state: {
                    isTypeOf: 'FixedPriceState',
                    listingType: 'FixedPrice',
                    amountFilled: '1',
                    amountRemaining: '2',
                },
                type: 'FixedPrice',
                makeAssetId: '5-1',
                takeAssetId: '0-0',
            },
            token: '5-1',
            decimalCount: undefined,
            extrinsic: '500-1',
            indexed: true,
        },
    })
})

void test('SNS amounts are scaled by the make asset decimals', async () => {
    const { rows } = world()
    const { ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)
    // List the 6-decimal currency token against the NFT.
    const result = await marketplace.listingCreated(
        ctx,
        block,
        event(current({ makeAssetId: CURRENCY, takeAssetId: NFT, amount: '2500000', price: '3' }))
    )
    const listing = result?.[2]?.body.listing as Record<string, unknown>
    assert.equal(listing.amount, 2.5)
    assert.equal(listing.price, 3_000_000)
    assert.equal(listing.highestPrice, 3_000_000)
    assert.equal(result?.[2]?.body.decimalCount, 6)
})

void test('offer (current runtime) targets the taken token and its owner', async () => {
    const { nft, currency, rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)
    const result = await marketplace.listingCreated(
        ctx,
        block,
        event(
            current({
                makeAssetId: CURRENCY,
                takeAssetId: NFT,
                data: { __kind: 'Offer', value: { expiration: 900 } },
                state: { __kind: 'Offer', value: { amountFilled: '0' } },
            })
        )
    )
    assert.ok(result)
    const [listing] = store.of(Listing)
    assert.deepEqual(listing.data, new OfferData({ listingType: ListingType.Offer, expiration: 900 }))
    assert.deepEqual(
        listing.state,
        new OfferState({
            listingType: ListingType.Offer,
            amountFilled: 0n,
            amountRemaining: 3n,
            counterOfferCount: 0,
            isExpired: false,
        })
    )
    assert.equal(listing.type, ListingType.Offer)
    assert.equal(currency.recentListing, undefined, 'offers do not become the recent listing of the currency')
    assert.equal(nft.recentListing, undefined)
    assert.deepEqual(dispatched, [
        ['bestListing', '5-1'],
        ['accountStats', holderId],
        ['stats', '5'],
        ['accountStats', ownerId],
        ['accountStats', sellerId],
    ])
    const [eventModel, accountTokenEvent, sns] = result
    assert.equal(eventModel.name, 'MarketplaceOfferCreated')
    assert.equal(eventModel.tokenId, '5-1')
    assert.equal(eventModel.collectionId, '5')
    assert.equal(accountTokenEvent.to?.id, holderId)
    assert.equal(accountTokenEvent.token, nft)
    assert.equal(sns?.body.token, '5-1')
})

void test('offer on a token without an owner row has no counterparty', async () => {
    const { rows } = world({ nftHolders: [] })
    const { ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)
    const result = await marketplace.listingCreated(
        ctx,
        block,
        event(
            current({
                makeAssetId: CURRENCY,
                takeAssetId: NFT,
                data: { __kind: 'Offer', value: { expiration: undefined } },
                state: { __kind: 'Offer', value: { amountFilled: '0' } },
            })
        )
    )
    assert.equal(result?.[1].to, undefined)
    assert.deepEqual(dispatched, [
        ['bestListing', '5-1'],
        ['stats', '5'],
        ['accountStats', ownerId],
        ['accountStats', sellerId],
    ])
})

void test('offer on a fungible token does not look up an owner', async () => {
    const { rows, currency } = world()
    currency.nonFungible = false
    const { ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)
    const result = await marketplace.listingCreated(
        ctx,
        block,
        event(
            current({
                makeAssetId: NFT,
                takeAssetId: CURRENCY,
                data: { __kind: 'Offer', value: { expiration: 900 } },
                state: { __kind: 'Offer', value: { amountFilled: '0' } },
            })
        )
    )
    assert.equal(result?.[1].to, undefined)
    assert.deepEqual(dispatched, [
        ['bestListing', '0-0'],
        ['stats', '0'],
        ['accountStats', holderId],
        ['accountStats', sellerId],
    ])
})

void test('auction listing is ineligible for the order book', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)
    await marketplace.listingCreated(
        ctx,
        block,
        event(
            current({
                data: { __kind: 'Auction', value: { endBlock: 700 } },
                state: { __kind: 'Auction', value: { highBid: undefined } },
            })
        )
    )
    const [listing] = store.of(Listing)
    assert.deepEqual(listing.data, new AuctionData({ listingType: ListingType.Auction, endHeight: 700 }))
    assert.deepEqual(listing.state, new AuctionState({ listingType: ListingType.Auction, isExpired: false }))
    assert.equal(listing.bookState, MarketplaceListingBookState.Ineligible)
})

void test('whitelisted listings are ineligible for the order book', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)
    await marketplace.listingCreated(ctx, block, event(current({ whitelistedAccountCount: 0 })))
    const [listing] = store.of(Listing)
    assert.equal(listing.usesWhitelist, true)
    assert.equal(listing.bookState, MarketplaceListingBookState.Ineligible)
})

void test('an explicit future start block is kept and pends activation', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)
    await marketplace.listingCreated(ctx, block, event(current({ startBlock: 800 })))
    const [listing] = store.of(Listing)
    assert.equal(listing.startBlock, 800)
    assert.equal(listing.bookState, MarketplaceListingBookState.PendingActivation)
})

void test('no SNS event without an extrinsic', async () => {
    const { rows } = world()
    const { ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)
    const result = await marketplace.listingCreated(ctx, block, event(current(), false))
    assert.equal(result?.[2], undefined)
    assert.equal(result?.[0].extrinsic, undefined)
})

void test('a block without a timestamp stamps the epoch', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)
    await marketplace.listingCreated(ctx, { ...block, timestamp: undefined }, event(current()))
    const [listing] = store.of(Listing)
    const [status] = store.of(ListingStatus)
    assert.deepEqual(listing.createdAt, new Date(0))
    assert.deepEqual(listing.updatedAt, new Date(0))
    assert.deepEqual(status.createdAt, new Date(0))
})

for (const missing of ['5-1', '0-0']) {
    void test(`a missing ${missing} token skips the event without side effects`, async () => {
        const { rows } = world()
        const { store, ctx, event, block } = await fixture(
            rows.filter((row) => row.id !== missing),
            'enjin-relaychain',
            1080
        )
        const result = await marketplace.listingCreated(ctx, block, event(current()))
        assert.equal(result, undefined)
        assert.deepEqual(store.of(Listing), [])
        assert.deepEqual(store.of(ListingStatus), [])
        assert.equal(sellerOf(store), undefined)
        assert.deepEqual(dispatched, [])
    })
}

void test('legacy runtime (canary 500): seller, minTakeValue and a bare deposit', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'canary-matrixchain', 500)
    await marketplace.listingCreated(
        ctx,
        block,
        event({
            listingId: listingHex,
            listing: {
                seller: sellerId,
                makeAssetId: NFT,
                takeAssetId: CURRENCY,
                amount: '3',
                price: '250',
                minTakeValue: '150',
                feeSide: { __kind: 'NoFee' },
                creationBlock: 499,
                deposit: '7',
                salt: '0x',
                data: { __kind: 'FixedPrice' },
                state: { __kind: 'FixedPrice', amountFilled: '0' },
            },
        })
    )
    const [listing] = store.of(Listing)
    assert.equal(listing.seller.id, sellerId)
    assert.equal(listing.minTakeValue, 150n)
    assert.equal(listing.deposit, 7n)
    assert.equal(listing.feeSide, FeeSide.NoFee)
    assert.equal(listing.startBlock, 510)
    assert.equal(listing.bookState, MarketplaceListingBookState.Unknown, 'pre-order-book runtimes')
})

void test('canary 1011 offer state carries the counter offer count', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'canary-matrixchain', 1011)
    await marketplace.listingCreated(
        ctx,
        block,
        event({
            listingId: listingHex,
            listing: {
                creator: sellerId,
                makeAssetId: CURRENCY,
                takeAssetId: NFT,
                amount: '3',
                price: '250',
                minReceived: '0',
                feeSide: { __kind: 'NoFee' },
                creationBlock: 499,
                deposit: { depositor: sellerId, amount: '0' },
                salt: '0x',
                data: { __kind: 'Offer', value: { expiration: undefined } },
                state: { __kind: 'Offer', value: { counterOfferCount: 2 } },
            },
        })
    )
    const [listing] = store.of(Listing)
    assert.deepEqual(
        listing.state,
        new OfferState({
            listingType: ListingType.Offer,
            amountFilled: 0n,
            amountRemaining: 3n,
            counterOfferCount: 2,
            isExpired: false,
        })
    )
})

void test('ListingNotIndexed before an offer points at the taken token', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1080)
    const [notIndexedEvent] = await marketplace.listingNotIndexed(ctx, block, {
        ...event({ listingId: listingHex }, true, '500-1'),
        name: 'Marketplace.ListingNotIndexed',
    })
    const result = await marketplace.listingCreated(
        ctx,
        block,
        event(
            current({
                makeAssetId: CURRENCY,
                takeAssetId: NFT,
                data: { __kind: 'Offer', value: { expiration: 900 } },
                state: { __kind: 'Offer', value: { amountFilled: '0' } },
            })
        )
    )
    const [listing] = store.of(Listing)
    assert.equal(listing.bookState, MarketplaceListingBookState.NotIndexed)
    assert.equal((notIndexedEvent.data as MarketplaceListingNotIndexed).listing, listingId)
    assert.equal(notIndexedEvent.tokenId, '5-1')
    assert.equal(notIndexedEvent.collectionId, '5')
    assert.equal(result?.[2]?.body.indexed, false)
})
