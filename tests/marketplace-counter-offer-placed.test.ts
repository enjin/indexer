import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after, beforeEach } from 'node:test'
import type { Block, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import type { Network } from '~/decoder/types'
import {
    Account,
    Collection,
    CounterOffer,
    FeeSide,
    FixedPriceData,
    FixedPriceState,
    Listing,
    ListingType,
    MarketplaceCounterOfferPlaced,
    OfferData,
    OfferState,
    Token,
} from '~/model'
import { UnsupportedEventError } from '~/util/errors'
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
const offererId = `0x${'cc'.repeat(32)}`
const signerId = `0x${'ee'.repeat(32)}`
const listingHex = `0x${'12'.repeat(32)}`
const listingId = listingHex.slice(2)
const offerId = `${listingId}-${offererId}`
const timestamp = 1_700_000_000_000

type ExtrinsicShape = false | { call?: { name: string }; signature?: unknown }

let blockCounter = 0

async function fixture(rows: Row[], network: Network, specVersion: number, height = 500) {
    const runtime = await getRuntimeCached(network, specVersion)
    blockCounter += 1
    const block = { _runtime: runtime, height, hash: `0xco${blockCounter}`, timestamp } as unknown as Block
    const store = new MemoryStore(rows)
    const ctx = { store, log: { warn: () => undefined } } as unknown as CommonContext
    const event = (args: unknown, extrinsic: ExtrinsicShape = {}): EventItem =>
        ({
            id: `${height}-2`,
            name: 'Marketplace.CounterOfferPlaced',
            args,
            block,
            extrinsic: extrinsic === false ? undefined : { id: `${height}-1`, ...extrinsic },
        }) as unknown as EventItem
    return { block, store, ctx, event }
}

/** An offer listing for NFT 5-1 paid in the currency token 0-0 (6 decimals unless overridden). */
function world({
    decimalCount = 6,
    state = new OfferState({
        listingType: ListingType.Offer,
        counterOfferCount: 1,
        amountFilled: 2n,
        amountRemaining: 3n,
        isExpired: false,
    }),
}: { decimalCount?: number | null; state?: Listing['state'] } = {}) {
    const currency = new Token({
        id: '5-1',
        collection: new Collection({ id: '5' }),
        nativeMetadata: (decimalCount === null ? null : { decimalCount }) as Token['nativeMetadata'],
    })
    const seller = new Account({ id: sellerId })
    const listing = new Listing({
        id: listingId,
        seller,
        takeAssetId: currency,
        amount: 5n,
        price: 2_000_000n,
        highestPrice: 2_500_000n,
        minTakeValue: 0n,
        feeSide: FeeSide.NoFee,
        data: new OfferData({ listingType: ListingType.Offer, expiration: 900 }),
        state,
        type: ListingType.Offer,
        updatedAt: new Date(1),
    })
    return { listing, currency, seller, rows: [listing, currency, seller] as Row[] }
}

/** CounterOffer shape from matrix 1011 / enjin-matrix 1012 / relay 1031 until counter offers were removed. */
function current(overrides: Record<string, unknown> = {}) {
    return {
        listingId: listingHex,
        counterOffer: {
            sellerPrice: '3000000',
            buyerPrice: undefined,
            deposit: { depositor: offererId, amount: '7000000' },
            ...overrides,
        },
    }
}

/** CounterOffer shape on canary matrix 1010 and canary relay 1030. */
const legacy = { listingId: listingHex, counterOffer: { accountId: offererId, price: '4000000' } }

const accountOf = (store: MemoryStore, id: string) => store.of(Account).find((a) => a.id === id)

for (const [network, specVersion] of [
    ['enjin-relaychain', 1070],
    ['canary-relaychain', 1031],
    ['enjin-matrixchain', 1031],
    ['canary-matrixchain', 1011],
] as const) {
    void test(`${network} ${specVersion}: a new counter offer is persisted and announced`, async () => {
        const { listing, currency, seller, rows } = world()
        const { store, ctx, event, block } = await fixture(rows, network, specVersion)

        const result = await marketplace.counterOfferPlaced(ctx, block, event(current()))
        assert.ok(result)

        const offerer = accountOf(store, offererId)
        assert.ok(offerer, 'the depositor account is created')

        const [offer] = store.of(CounterOffer)
        assert.equal(offer.id, offerId)
        assert.equal(offer.listing, listing)
        assert.equal(offer.account, offerer)
        assert.equal(offer.lastAction, offerer)
        assert.equal(offer.buyerPrice, undefined)
        assert.equal(offer.sellerPrice, 3_000_000n)
        assert.equal(offer.amount, 7_000_000n)
        assert.deepEqual(offer.createdAt, new Date(timestamp))

        assert.deepEqual(listing.updatedAt, new Date(timestamp))
        assert.deepEqual(
            listing.state,
            new OfferState({
                listingType: ListingType.Offer,
                counterOfferCount: 2,
                amountFilled: 2n,
                amountRemaining: 3n,
                isExpired: false,
            })
        )
        assert.equal(store.of(Listing).length, 1)
        assert.deepEqual(dispatched, [], 'counter offers dispatch no queue jobs')

        const [eventModel, accountTokenEvent, sns] = result
        assert.equal(eventModel.id, '500-2')
        assert.equal(eventModel.name, 'MarketplaceCounterOfferPlaced')
        assert.equal(eventModel.extrinsic?.id, '500-1')
        assert.equal(eventModel.collectionId, '5')
        assert.equal(eventModel.tokenId, '5-1')
        assert.deepEqual(
            eventModel.data,
            new MarketplaceCounterOfferPlaced({
                listing: listingId,
                accountId: offererId,
                buyerPrice: undefined,
                depositAmount: 7_000_000n,
                sellerPrice: 3_000_000n,
            })
        )
        assert.equal(accountTokenEvent.id, '500-2')
        assert.equal(accountTokenEvent.from, offerer)
        assert.equal(accountTokenEvent.to, undefined)
        assert.equal(accountTokenEvent.event, eventModel)
        assert.equal(accountTokenEvent.token, currency)
        assert.equal(accountTokenEvent.collection, currency.collection)

        assert.equal(listing.seller, seller)
        assert.deepEqual(sns, {
            id: '500-2',
            name: 'Marketplace.CounterOfferPlaced',
            body: {
                listing: {
                    id: listingId,
                    // Known cross-processor convention: price is multiplied and amount divided by the decimals.
                    price: 2_000_000_000_000,
                    amount: 0.000005,
                    highestPrice: 2_500_000_000_000,
                    seller: { id: sellerId },
                    data: { isTypeOf: 'OfferData', listingType: 'Offer', expiration: 900 },
                    state: {
                        isTypeOf: 'OfferState',
                        listingType: 'Offer',
                        counterOfferCount: 2,
                        amountFilled: '2',
                        amountRemaining: '3',
                        isExpired: false,
                    },
                    type: 'Offer',
                    takeAssetId: '5-1',
                },
                buyerPrice: undefined,
                amount: 7,
                sellerPrice: 3_000_000_000_000,
                account: { id: offererId },
                extrinsic: '500-1',
                token: '5-1',
                decimalCount: 6,
            },
        })
    })
}

void test('a buyer price in the event is stored and scaled in the SNS payload', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1070)
    const result = await marketplace.counterOfferPlaced(ctx, block, event(current({ buyerPrice: '2500000' })))
    const [offer] = store.of(CounterOffer)
    assert.equal(offer.buyerPrice, 2_500_000n)
    assert.equal((result?.[0].data as MarketplaceCounterOfferPlaced).buyerPrice, 2_500_000n)
    assert.equal(result?.[2]?.body.buyerPrice, 2_500_000_000_000)
})

for (const [network, specVersion] of [
    ['canary-matrixchain', 1010],
    ['canary-relaychain', 1030],
] as const) {
    void test(`${network} ${specVersion} legacy shape: price becomes the buyer price, amount and seller price 1`, async () => {
        const { rows } = world()
        const { store, ctx, event, block } = await fixture(rows, network, specVersion)
        const result = await marketplace.counterOfferPlaced(ctx, block, event(legacy))
        assert.ok(result)
        const [offer] = store.of(CounterOffer)
        assert.equal(offer.account.id, offererId)
        // Suspect, pinned as-is: legacy `price` is the token owner's counter price, yet it lands in buyerPrice
        // while sellerPrice and amount are filled with a placeholder 1.
        assert.equal(offer.buyerPrice, 4_000_000n)
        assert.equal(offer.sellerPrice, 1n)
        assert.equal(offer.amount, 1n)
        assert.deepEqual(
            result[0].data,
            new MarketplaceCounterOfferPlaced({
                listing: listingId,
                accountId: offererId,
                buyerPrice: 4_000_000n,
                depositAmount: 1n,
                sellerPrice: 1n,
            })
        )
        const sns = result[2]
        assert.ok(sns)
        assert.equal(sns.body.buyerPrice, 4_000_000_000_000)
        assert.equal(sns.body.sellerPrice, 1_000_000)
        assert.equal(sns.body.amount, 0.000001)
        assert.deepEqual(sns.body.account, { id: offererId })
    })
}

void test('re-placing a counter offer updates the existing row without counting it twice', async () => {
    const { listing, rows } = world()
    const previousAccount = new Account({ id: offererId })
    const previousLastAction = new Account({ id: sellerId })
    const otherListing = new Listing({ id: 'other' })
    const existing = new CounterOffer({
        id: offerId,
        listing: otherListing,
        account: previousAccount,
        buyerPrice: 9n,
        sellerPrice: 9n,
        amount: 9n,
        createdAt: new Date(5),
        lastAction: previousLastAction,
    })
    const { store, ctx, event, block } = await fixture([...rows, previousAccount, existing], 'enjin-relaychain', 1070)
    await marketplace.counterOfferPlaced(ctx, block, event(current({ buyerPrice: '2500000' })))

    const offers = store.of(CounterOffer)
    assert.equal(offers.length, 1)
    assert.equal(offers[0], existing, 'the stored row is reused')
    assert.equal(existing.listing, otherListing, 'listing and account relations are left untouched')
    assert.equal(existing.account, previousAccount)
    assert.equal(existing.lastAction, previousAccount)
    assert.equal(existing.buyerPrice, 2_500_000n)
    assert.equal(existing.sellerPrice, 3_000_000n)
    assert.equal(existing.amount, 7_000_000n)
    // Pinned as-is: createdAt is overwritten when an existing counter offer is replaced.
    assert.deepEqual(existing.createdAt, new Date(timestamp))
    assert.equal((listing.state as OfferState).counterOfferCount, 1)
    assert.deepEqual(listing.updatedAt, new Date(timestamp))
})

void test('a missing listing skips the event without side effects', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(
        rows.filter((row) => !(row instanceof Listing)),
        'enjin-relaychain',
        1070
    )
    const result = await marketplace.counterOfferPlaced(ctx, block, event(current()))
    assert.equal(result, undefined)
    assert.equal(accountOf(store, offererId), undefined)
    assert.deepEqual(store.of(CounterOffer), [])
})

void test('a listing that is not an offer skips the event without side effects', async () => {
    const state = new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 0n, amountRemaining: 5n })
    const { listing, rows } = world({ state })
    listing.data = new FixedPriceData({ listingType: ListingType.FixedPrice })
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1070)
    const result = await marketplace.counterOfferPlaced(ctx, block, event(current()))
    assert.equal(result, undefined)
    assert.equal(accountOf(store, offererId), undefined)
    assert.deepEqual(store.of(CounterOffer), [])
    assert.equal(listing.state, state)
    assert.deepEqual(listing.updatedAt, new Date(1))
})

for (const [label, signature] of [
    ['an Id-wrapped signer', { address: { __kind: 'Id', value: signerId } }],
    ['a bare signer', { address: signerId }],
] as const) {
    void test(`a fuel tank dispatch_and_touch with ${label} credits the extrinsic signer`, async () => {
        const { rows } = world()
        const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1070)
        const result = await marketplace.counterOfferPlaced(
            ctx,
            block,
            event(current(), { call: { name: 'FuelTanks.dispatch_and_touch' }, signature })
        )
        const [offer] = store.of(CounterOffer)
        assert.equal(offer.id, `${listingId}-${signerId}`)
        assert.equal(offer.account.id, signerId)
        assert.equal(offer.lastAction?.id, signerId)
        assert.equal(accountOf(store, offererId), undefined, 'the depositor account is not created')
        assert.ok(result)
        const [eventModel, accountTokenEvent, sns] = result
        assert.ok(sns)
        assert.equal(accountTokenEvent.from.id, signerId)
        assert.deepEqual(sns.body.account, { id: signerId })
        // Pinned as-is: the event model keeps the depositor from the event, not the signer.
        assert.equal((eventModel.data as MarketplaceCounterOfferPlaced).accountId, offererId)
    })
}

void test('other fuel tank calls credit the depositor from the event', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1070)
    await marketplace.counterOfferPlaced(
        ctx,
        block,
        event(current(), { call: { name: 'FuelTanks.dispatch' }, signature: { address: signerId } })
    )
    const [offer] = store.of(CounterOffer)
    assert.equal(offer.account.id, offererId)
})

void test('without an extrinsic there is no SNS event and no extrinsic link', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1070)
    const result = await marketplace.counterOfferPlaced(ctx, block, event(current(), false))
    assert.ok(result)
    assert.equal(result[2], undefined)
    assert.equal(result[0].extrinsic, null)
    assert.equal(store.of(CounterOffer).length, 1, 'the offer is still persisted')
})

void test('a block without a timestamp stamps the epoch', async () => {
    const { listing, rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1070)
    await marketplace.counterOfferPlaced(ctx, { ...block, timestamp: undefined }, event(current()))
    const [offer] = store.of(CounterOffer)
    assert.deepEqual(offer.createdAt, new Date(0))
    assert.deepEqual(listing.updatedAt, new Date(0))
})

void test('a currency without native metadata is not scaled', async () => {
    const { rows } = world({ decimalCount: null })
    const { ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1070)
    const result = await marketplace.counterOfferPlaced(ctx, block, event(current({ buyerPrice: '2500000' })))
    const body = result?.[2]?.body as Record<string, unknown>
    const listing = body.listing as Record<string, unknown>
    assert.equal(listing.price, 2_000_000)
    assert.equal(listing.amount, 5)
    assert.equal(listing.highestPrice, 2_500_000)
    assert.equal(body.buyerPrice, 2_500_000)
    assert.equal(body.sellerPrice, 3_000_000)
    assert.equal(body.amount, 7_000_000)
    assert.equal(body.decimalCount, undefined)
})

void test('zero prices are reported as missing in the SNS payload', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1070)
    const result = await marketplace.counterOfferPlaced(
        ctx,
        block,
        event(current({ sellerPrice: '0', buyerPrice: '0' }))
    )
    const [offer] = store.of(CounterOffer)
    assert.equal(offer.sellerPrice, 0n)
    assert.equal(offer.buyerPrice, 0n)
    // Pinned as-is: the truthiness check turns a 0 price into `undefined` in the SNS body.
    assert.equal(result?.[2]?.body.sellerPrice, undefined)
    assert.equal(result?.[2]?.body.buyerPrice, undefined)
})

for (const [network, specVersion] of [
    ['enjin-relaychain', 1080],
    ['enjin-matrixchain', 1041],
] as const) {
    void test(`${network} ${specVersion} no longer has counter offers and rejects the event`, async () => {
        const { rows } = world()
        const { store, ctx, event, block } = await fixture(rows, network, specVersion)
        await assert.rejects(marketplace.counterOfferPlaced(ctx, block, event(current())), UnsupportedEventError)
        assert.deepEqual(store.of(CounterOffer), [])
    })
}

void test('zero legacy price and zero deposit are stored as 0, not replaced by fallbacks', async () => {
    const legacyWorld = world()
    const legacyRun = await fixture(legacyWorld.rows, 'canary-matrixchain', 1010)
    await marketplace.counterOfferPlaced(
        legacyRun.ctx,
        legacyRun.block,
        legacyRun.event({ listingId: listingHex, counterOffer: { accountId: offererId, price: '0' } })
    )
    assert.equal(legacyRun.store.of(CounterOffer)[0].buyerPrice, 0n)

    const currentWorld = world()
    const currentRun = await fixture(currentWorld.rows, 'enjin-relaychain', 1070)
    await marketplace.counterOfferPlaced(
        currentRun.ctx,
        currentRun.block,
        currentRun.event(current({ deposit: { depositor: offererId, amount: '0' } }))
    )
    assert.equal(currentRun.store.of(CounterOffer)[0].amount, 0n)
})

void test('the listing is loaded with its seller and take asset collection', async () => {
    const { rows } = world()
    const { store, ctx, event, block } = await fixture(rows, 'enjin-relaychain', 1070)
    const queries: unknown[] = []
    const findOne = store.findOne.bind(store)
    store.findOne = (entity, options) => {
        queries.push(options)
        return findOne(entity, options)
    }
    await marketplace.counterOfferPlaced(ctx, block, event(current()))
    assert.deepEqual(queries, [
        { where: { id: listingId }, relations: { seller: true, takeAssetId: { collection: true } } },
    ])
})
