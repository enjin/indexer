import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { FindOperator } from 'typeorm'
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
    ListingType,
    MarketplaceAbandonedListingReleased,
    MarketplaceListingBookState,
    MarketplaceListingNotIndexed,
    MarketplaceListingSettlementAbandoned,
    MarketplaceProtocolFeeSet,
    OfferData,
    OfferState,
    Token,
    WhitelistedAccount,
} from '~/model'
import { accruedWhitelistUsage } from '~/pallet/marketplace/utils/whitelist'

// The processors pull in the queue helpers, which open BullMQ connections; stub them so the run exits.
const testRequire = createRequire(__filename)
const noop = () => Promise.resolve()
const queueStubs = {
    dispatchComputeTokenBestListing: noop,
    dispatchComputeStats: noop,
    dispatchComputeAccountStats: noop,
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
const { expireLapsedListings, hasLapsed, markExpired } = testRequire(
    '~/worker/jobs/listings/compute-listings'
) as typeof import('~/worker/jobs/listings/compute-listings')
const { getBestListing } = testRequire('~/util/entities') as typeof import('~/util/entities')

after(() => {
    for (const [path, original] of stubbed) testRequire.cache[path] = original
})

type Row = { id: string }
type RowClass = new (...args: never[]) => Row

function matches(value: unknown, where: unknown): boolean {
    if (where instanceof FindOperator) {
        assert.equal(where.type, 'lessThanOrEqual')
        return value !== null && value !== undefined && (value as number) <= (where.value as number)
    }
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

    find(entity: RowClass, options: { where?: unknown; take?: number }): Promise<Row[]> {
        const rows = this.rows.filter(
            (row) => row instanceof entity && (options.where === undefined || matches(row, options.where))
        )
        return Promise.resolve(rows.slice(0, options.take ?? rows.length))
    }

    findOne(entity: RowClass, options: { where: unknown }): Promise<Row | undefined> {
        return this.findOneBy(entity, options.where)
    }

    findOneBy(entity: RowClass, where: unknown): Promise<Row | undefined> {
        return Promise.resolve(this.rows.find((row) => row instanceof entity && matches(row, where)))
    }

    save(value: Row | Row[]): Promise<void> {
        for (const row of Array.isArray(value) ? value : [value]) {
            this.rows = this.rows.filter((item) => !(item.constructor === row.constructor && item.id === row.id))
            this.rows.push(row)
        }
        return Promise.resolve()
    }
}

const sellerId = `0x${'bb'.repeat(32)}`
const buyerId = `0x${'cc'.repeat(32)}`
const listingHex = `0x${'12'.repeat(32)}`
const listingId = listingHex.slice(2)

let blockCounter = 0

async function fixture(rows: Row[] = [], height = 500, network: Network = 'enjin-relaychain', specVersion = 1080) {
    const runtime = await getRuntimeCached(network, specVersion)
    blockCounter += 1
    const block = { _runtime: runtime, height, hash: `0x${blockCounter}`, timestamp: 0 } as unknown as Block
    const store = new MemoryStore(rows)
    const ctx = { store, log: { warn: () => undefined } } as unknown as CommonContext
    const event = (name: string, args: unknown, id = `${height}-1`): EventItem =>
        ({ id, name, args, block, extrinsic: undefined }) as unknown as EventItem
    return { block, store, ctx, event }
}

function tokens() {
    const collection = new Collection({ id: '5' })
    return [
        new Token({ id: '5-1', collection, nativeMetadata: null }),
        new Token({ id: '0-0', collection: new Collection({ id: '0' }), nativeMetadata: null }),
    ]
}

function listingRow(extra: Partial<Listing> = {}) {
    const [make, take] = tokens()
    return new Listing({
        id: listingId,
        seller: new Account({ id: sellerId }),
        makeAssetId: make,
        takeAssetId: take,
        amount: 10n,
        price: 100n,
        highestPrice: 100n,
        minTakeValue: 0n,
        feeSide: FeeSide.NoFee,
        height: 400,
        deposit: 0n,
        salt: '0x',
        data: new FixedPriceData({ listingType: ListingType.FixedPrice }),
        state: new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 0n, amountRemaining: 10n }),
        isActive: true,
        bookState: MarketplaceListingBookState.Indexed,
        startBlock: 410,
        type: ListingType.FixedPrice,
        usesWhitelist: false,
        creationBlock: 400,
        createdAt: new Date(0),
        updatedAt: new Date(0),
        ...extra,
    })
}

const listingCreatedArgs = (startBlock: number | undefined) => ({
    listingId: listingHex,
    listing: {
        creator: sellerId,
        makeAssetId: { collectionId: '5', tokenId: '1' },
        takeAssetId: { collectionId: '0', tokenId: '0' },
        amount: '10',
        price: '100',
        minReceived: '0',
        feeSide: { __kind: 'NoFee' },
        creationBlock: 500,
        startBlock,
        whitelistedAccountCount: undefined,
        deposit: { depositor: sellerId, amount: '0' },
        salt: '0x',
        data: { __kind: 'FixedPrice' },
        state: { __kind: 'FixedPrice', amountFilled: '0' },
    },
})

void test('M1: lapse boundaries follow the chain (auction end and offer expiration are exclusive)', () => {
    const auction = { data: new AuctionData({ listingType: ListingType.Auction, endHeight: 100 }) }
    assert.equal(hasLapsed(auction as Listing, 99), false)
    assert.equal(hasLapsed(auction as Listing, 100), true)
    const offer = { data: new OfferData({ listingType: ListingType.Offer, expiration: 100 }) }
    assert.equal(hasLapsed(offer as Listing, 99), false)
    assert.equal(hasLapsed(offer as Listing, 100), true)
    const open = { data: new OfferData({ listingType: ListingType.Offer }) }
    assert.equal(hasLapsed(open as Listing, 10_000), false)
})

void test('M1: expiry only flags the state and never touches status, activity or book state', () => {
    const auction = listingRow({
        type: ListingType.Auction,
        data: new AuctionData({ listingType: ListingType.Auction, endHeight: 450 }),
        state: new AuctionState({ listingType: ListingType.Auction, highBid: 'bid-1' }),
        bookState: MarketplaceListingBookState.Ineligible,
    })
    assert.equal(markExpired(auction), true)
    assert.equal(auction.state.isTypeOf, 'AuctionState')
    assert.equal(auction.state.isExpired, true)
    assert.equal(auction.state.highBid, 'bid-1')
    assert.equal(auction.isActive, true)
    assert.equal(auction.bookState, MarketplaceListingBookState.Ineligible)
    assert.equal(markExpired(auction), false, 'already expired listings are left alone')

    const offer = listingRow({
        type: ListingType.Offer,
        data: new OfferData({ listingType: ListingType.Offer, expiration: 450 }),
        state: new OfferState({
            listingType: ListingType.Offer,
            amountFilled: 4n,
            amountRemaining: 6n,
            counterOfferCount: 2,
            isExpired: false,
        }),
    })
    assert.equal(markExpired(offer), true)
    const state = offer.state as OfferState
    assert.deepEqual([state.isExpired, state.amountFilled, state.amountRemaining], [true, 4n, 6n])
    assert.equal(offer.isActive, true)
    assert.equal(markExpired(listingRow()), false, 'fixed-price listings never expire')
})

void test('M1: expiring an auction refreshes its token best listing; expiring an offer does not', () => {
    const auction = listingRow({
        id: 'auction',
        type: ListingType.Auction,
        data: new AuctionData({ listingType: ListingType.Auction, endHeight: 450 }),
        state: new AuctionState({ listingType: ListingType.Auction, isExpired: false }),
    })
    const offer = listingRow({
        id: 'offer',
        type: ListingType.Offer,
        makeAssetId: new Token({ id: '0-0' }),
        data: new OfferData({ listingType: ListingType.Offer, expiration: 450 }),
        state: new OfferState({
            listingType: ListingType.Offer,
            amountFilled: 0n,
            amountRemaining: 10n,
            counterOfferCount: 0,
            isExpired: false,
        }),
    })
    const live = listingRow({
        id: 'live',
        type: ListingType.Auction,
        data: new AuctionData({ listingType: ListingType.Auction, endHeight: 600 }),
        state: new AuctionState({ listingType: ListingType.Auction, isExpired: false }),
    })

    const { expired, bestListingTokenIds } = expireLapsedListings([auction, offer, live], 500)
    assert.deepEqual(
        expired.map((listing) => listing.id),
        ['auction', 'offer']
    )
    assert.deepEqual([...bestListingTokenIds], ['5-1'])
})

void test('M1: best listing lookups skip listings flagged expired', async () => {
    let captured: Record<string, unknown> | undefined
    const ctx = {
        store: {
            findOne: (_entity: unknown, options: { where: Record<string, unknown> }) => {
                captured = options.where
                return Promise.resolve(undefined)
            },
        },
    } as unknown as CommonContext

    await getBestListing(ctx, '5-1')
    const state = captured?.state as FindOperator<unknown>
    assert.ok(state instanceof FindOperator)
    assert.equal(state.type, 'raw')
    assert.equal(state.getSql?.('"state"'), `COALESCE(("state"->>'isExpired')::boolean, false) = false`)
})

void test('M3: PendingActivation listings are promoted once the processed height reaches their start block', async () => {
    const due = listingRow({ id: 'due', bookState: MarketplaceListingBookState.PendingActivation, startBlock: 500 })
    const later = listingRow({ id: 'later', bookState: MarketplaceListingBookState.PendingActivation, startBlock: 501 })
    const removed = listingRow({ id: 'removed', bookState: MarketplaceListingBookState.Removed, startBlock: 450 })
    const { store, ctx, block } = await fixture([due, later, removed])

    assert.equal(await marketplace.promoteActivatedListings(ctx, block), 1)
    const state = (id: string) => store.of(Listing).find((listing) => listing.id === id)?.bookState
    assert.equal(state('due'), MarketplaceListingBookState.Indexed)
    assert.equal(state('later'), MarketplaceListingBookState.PendingActivation)
    assert.equal(state('removed'), MarketplaceListingBookState.Removed)
})

void test('M3: legacy PendingActivations runtimes are not promoted by height alone', async () => {
    const due = listingRow({ id: 'due', bookState: MarketplaceListingBookState.PendingActivation, startBlock: 500 })
    const { store, ctx, block } = await fixture([due], 500, 'canary-matrixchain', 1040)

    assert.equal(await marketplace.promoteActivatedListings(ctx, block), 0)
    assert.equal(store.of(Listing)[0].bookState, MarketplaceListingBookState.PendingActivation)
})

void test('M3: listings created on enjin relay 1080 participate in the book', async () => {
    const { store, ctx, block, event } = await fixture(tokens())
    await marketplace.listingCreated(ctx, block, event('Marketplace.ListingCreated', listingCreatedArgs(600)))
    const [listing] = store.of(Listing)
    assert.equal(listing.bookState, MarketplaceListingBookState.PendingActivation)
    assert.equal(listing.startBlock, 600)
})

void test('M4: ListingNotIndexed emitted before ListingCreated leaves the listing NotIndexed', async () => {
    const { store, ctx, block, event } = await fixture(tokens())
    const notIndexed = await marketplace.listingNotIndexed(
        ctx,
        block,
        event('Marketplace.ListingNotIndexed', { listingId: listingHex }, '500-1')
    )
    const notIndexedEvent = notIndexed[0]
    assert.equal((notIndexedEvent.data as MarketplaceListingNotIndexed).listing, undefined)

    await marketplace.listingCreated(
        ctx,
        block,
        event('Marketplace.ListingCreated', listingCreatedArgs(undefined), '500-2')
    )

    const [listing] = store.of(Listing)
    assert.equal(listing.bookState, MarketplaceListingBookState.NotIndexed)
    assert.equal((notIndexedEvent.data as MarketplaceListingNotIndexed).listing, listingId)
    assert.equal(notIndexedEvent.tokenId, '5-1')
    assert.equal(notIndexedEvent.collectionId, '5')
})

void test('M4: a pending ListingNotIndexed from another block is not applied', async () => {
    const first = await fixture(tokens())
    await marketplace.listingNotIndexed(
        first.ctx,
        first.block,
        first.event('Marketplace.ListingNotIndexed', { listingId: listingHex })
    )
    const second = await fixture(tokens())
    await marketplace.listingCreated(
        second.ctx,
        second.block,
        second.event('Marketplace.ListingCreated', listingCreatedArgs(undefined))
    )
    assert.equal(second.store.of(Listing)[0].bookState, MarketplaceListingBookState.Indexed)
})

void test('M5: settlement abandonment flags the listing and keeps it live', async () => {
    const { store, ctx, block, event } = await fixture([listingRow()])
    const [model] = await marketplace.listingSettlementAbandoned(
        ctx,
        block,
        event('Marketplace.ListingSettlementAbandoned', { listingId: listingHex, attempts: 10 })
    )
    const data = model.data as MarketplaceListingSettlementAbandoned
    assert.deepEqual([data.listingId, data.listing, data.attempts], [listingId, listingId, 10])
    const [listing] = store.of(Listing)
    assert.equal(listing.settlementAbandoned, true)
    assert.equal(listing.isActive, true)
})

void test('M5: abandoned release and protocol fee changes are recorded', async () => {
    const { ctx, event } = await fixture([listingRow()])
    const [released] = await marketplace.abandonedListingReleased(
        ctx,
        event('Marketplace.AbandonedListingReleased', {
            listingId: listingHex,
            returnedBid: { bidder: buyerId, price: '123456789012345678901', blockNumber: 480 },
        })
    )
    const data = released.data as MarketplaceAbandonedListingReleased
    assert.equal(data.listing, listingId)
    assert.equal(data.returnedBidder, buyerId)
    assert.equal(data.returnedBidPrice, 123456789012345678901n)

    const fee = marketplace.protocolFeeSet(event('Marketplace.ProtocolFeeSet', { protocolFee: 25_000_000 }))
    assert.equal((fee.data as MarketplaceProtocolFeeSet).protocolFeePerbill, 25_000_000)
})

void test('M6: whitelist usage accrues only with an allowance, as bigint', () => {
    assert.equal(accruedWhitelistUsage({ allowance: 0n, amountUsed: 0n }, 5n), 0n)
    const big = 2n ** 80n
    assert.equal(accruedWhitelistUsage({ allowance: big * 2n, amountUsed: big }, big), big * 2n)
})

function whitelisted(allowance: bigint, amountUsed = 0n) {
    return new WhitelistedAccount({
        id: `${listingId}-${buyerId}`,
        allowance,
        amountUsed,
        deposit: 0n,
        account: new Account({ id: buyerId }),
        listing: new Listing({ id: listingId }),
        createdAt: new Date(0),
        updatedAt: new Date(0),
    })
}

void test('M6: fills accrue the filled amount only for entries with an allowance', async () => {
    for (const [allowance, expected] of [
        [0n, 0n],
        [10n, 3n],
    ] as const) {
        const { store, ctx, block, event } = await fixture([
            listingRow({ usesWhitelist: true }),
            new Account({ id: buyerId }),
            whitelisted(allowance),
        ])
        await marketplace.listingFilled(
            ctx,
            block,
            event('Marketplace.ListingFilled', {
                listingId: listingHex,
                buyer: buyerId,
                price: '100',
                amountFilled: '3',
                amountRemaining: '7',
                protocolFee: '0',
                royalty: '0',
            })
        )
        assert.equal(store.of(WhitelistedAccount)[0].amountUsed, expected)
    }
})

void test('M6: auction bids count the whole auction amount against the allowance', async () => {
    const { store, ctx, block, event } = await fixture([
        listingRow({
            usesWhitelist: true,
            type: ListingType.Auction,
            data: new AuctionData({ listingType: ListingType.Auction, endHeight: 900 }),
            state: new AuctionState({ listingType: ListingType.Auction }),
        }),
        new Account({ id: buyerId }),
        whitelisted(20n, 10n),
    ])
    await marketplace.bidPlaced(
        ctx,
        block,
        event('Marketplace.BidPlaced', {
            listingId: listingHex,
            bid: { bidder: buyerId, price: '150', blockNumber: 500 },
        })
    )
    assert.equal(store.of(WhitelistedAccount)[0].amountUsed, 20n)
})

void test('M6: re-adding a whitelisted account replaces its allowance and keeps its usage', async () => {
    const { store, ctx, block, event } = await fixture([
        listingRow({ usesWhitelist: true }),
        new Account({ id: buyerId }),
        whitelisted(10n, 4n),
    ])
    await marketplace.whitelistedAccountsAdded(
        ctx,
        block,
        event('Marketplace.WhitelistedAccountsAdded', {
            listingId: listingHex,
            accounts: [{ accountId: buyerId, allowance: '15' }],
        })
    )
    const [entry] = store.of(WhitelistedAccount)
    assert.deepEqual([entry.allowance, entry.amountUsed], [15n, 4n])
})
