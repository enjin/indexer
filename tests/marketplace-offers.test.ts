import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import { TypeKind } from '@subsquid/scale-codec'
import { Runtime } from '@subsquid/substrate-runtime'
import { EventItem } from '~/contexts'
import {
    Account,
    Collection,
    FixedPriceData,
    Listing,
    ListingType,
    MarketplaceListingBookState,
    MarketplaceListingCancelled,
    MarketplaceListingFilled,
    MarketplaceListingRemovedUnderMinimum,
    MarketplaceOfferCancelled,
    MarketplaceOfferSettled,
    MarketplaceOrderMatched,
    OfferData,
    Token,
} from '~/model'
import {
    listingNotIndexed,
    listingNotIndexedEventModel,
    migrationCompleted,
    migrationCompletedEventModel,
    orderMatched,
    orderMatchedEventModel,
} from '~/pallet/marketplace/events'
import { counterOfferRemovedEventModel } from '~/pallet/marketplace/events/counter-offer-removed'
import { listingCancelledEventModel } from '~/pallet/marketplace/events/listing-cancelled'
import { listingFilledEventModel } from '~/pallet/marketplace/events/listing-filled'
import { listingRemovedUnderMinimumEventModel } from '~/pallet/marketplace/events/listing-removed-under-minimum'
import {
    initialBookState,
    listingFillParties,
    migratedBookState,
    rebuildFixedPriceState,
    rebuildOfferState,
} from '~/pallet/marketplace/utils/listing-state'

type MetadataLine = {
    specName: string
    specVersion: number
    metadata: string
}

function runtime1040(): Runtime {
    const metadata = fs
        .readFileSync('typegen/canary-matrixchain.jsonl', 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line) as MetadataLine)
        .find((line) => line.specVersion === 1040)

    assert(metadata)
    return new Runtime(
        { specName: metadata.specName, specVersion: metadata.specVersion, implName: '', implVersion: 0 },
        metadata.metadata
    )
}

function eventItem(runtime: Runtime, id: string, name: string, args: unknown): EventItem {
    return { id, name, args, block: { _runtime: runtime }, extrinsic: { id: '190-1' } } as EventItem
}

function marketplaceVariants(runtime: Runtime, rootType: number): Set<string> {
    const root = runtime.description.types[rootType]
    assert.equal(root.kind, TypeKind.Variant)
    const pallet = root.variants.find((variant) => variant.name === 'Marketplace')
    assert(pallet?.fields[0])
    const nested = runtime.description.types[pallet.fields[0].type]
    assert.equal(nested.kind, TypeKind.Variant)
    return new Set(nested.variants.map((variant) => variant.name))
}

const taker = `0x${'11'.repeat(32)}`

void test('v1040 metadata exposes order-book matching, observability, and migration lifecycle', () => {
    const runtime = runtime1040()
    const calls = marketplaceVariants(runtime, runtime.description.call)
    const events = marketplaceVariants(runtime, runtime.description.event)

    assert(calls.has('create_listing_and_match'))
    for (const name of ['OrderMatched', 'ListingNotIndexed', 'MigrationCompleted']) assert(events.has(name))
    assert(runtime.description.storage.Marketplace.items.PriceIndex)
    assert(runtime.description.storage.Marketplace.items.PriceLevelQueues)
    assert(runtime.description.storage.Marketplace.items.PendingActivations)
})

void test('order-book events decode every matching outcome and keep per-call identity', () => {
    const runtime = runtime1040()
    const args = {
        taker,
        assetId: { collectionId: '10', tokenId: '20' },
        currencyId: { collectionId: '0', tokenId: '0' },
        side: { __kind: 'Bid' },
        amountMatched: '3',
        ordersExamined: 2,
        remainderListingId: `0x${'ab'.repeat(32)}`,
        unrestedAmount: '1',
    }
    const firstItem = eventItem(runtime, '190-2', 'Marketplace.OrderMatched', args)
    const secondItem = eventItem(runtime, '190-3', 'Marketplace.OrderMatched', {
        ...args,
        remainderListingId: undefined,
    })
    const first = orderMatched(firstItem)
    const second = orderMatched(secondItem)
    const account = new Account({ id: taker, address: taker })
    const firstModel = orderMatchedEventModel(firstItem, first, account, undefined, undefined, undefined)[0]
    const secondModel = orderMatchedEventModel(secondItem, second, account, undefined, undefined, undefined)[0]

    assert.equal(first.amountMatched, 3n)
    assert.equal(first.ordersExamined, 2)
    assert.equal(first.unrestedAmount, 1n)
    assert.equal(first.remainderListingId, args.remainderListingId)
    assert.equal(second.remainderListingId, undefined)
    assert.equal(firstModel.id, '190-2')
    assert.equal(secondModel.id, '190-3')
    assert.equal(firstModel.extrinsic?.id, secondModel.extrinsic?.id)
    assert(firstModel.data instanceof MarketplaceOrderMatched)
    assert.equal(firstModel.data.assetId, '10-20')
    assert.equal(firstModel.data.currencyId, '0-0')
    assert.equal(firstModel.data.side, 'Bid')
})

void test('migration observability survives missing listing relations', () => {
    const runtime = runtime1040()
    const missingId = `0x${'cd'.repeat(32)}`
    const notIndexedItem = eventItem(runtime, '191-1', 'Marketplace.ListingNotIndexed', { listingId: missingId })
    const completedItem = eventItem(runtime, '191-2', 'Marketplace.MigrationCompleted', { storageVersion: 8 })
    const notIndexed = listingNotIndexed(notIndexedItem)
    const completed = migrationCompleted(completedItem)
    const notIndexedModel = listingNotIndexedEventModel(notIndexedItem, notIndexed)[0]
    const completedModel = migrationCompletedEventModel(completedItem, completed)
    const creator = new Account({ id: taker, address: taker })
    const removedModel = counterOfferRemovedEventModel(
        eventItem(runtime, '191-3', 'Marketplace.CounterOfferRemoved', {}),
        { listingId: missingId, creator: taker },
        creator
    )[0]

    assert.equal(notIndexedModel.data.isTypeOf, 'MarketplaceListingNotIndexed')
    assert.equal(notIndexedModel.data.listingId, missingId.substring(2))
    assert.equal(completedModel.data.isTypeOf, 'MarketplaceMigrationCompleted')
    assert.equal(completedModel.data.storageVersion, 8)
    assert.equal(removedModel.data.isTypeOf, 'MarketplaceCounterOfferRemoved')
    assert.equal(removedModel.data.listing, undefined)
})

void test('marketplace removal events use canonical listing relation IDs', () => {
    const account = new Account({ id: taker, address: taker })
    const collection = new Collection({ id: '10', collectionId: 10n })
    const token = new Token({ id: '10-20', tokenId: 20n, collection })
    const fixedPrice = new Listing({ id: 'aa'.repeat(32), type: ListingType.FixedPrice })
    const offer = new Listing({ id: 'bb'.repeat(32), type: ListingType.Offer })
    const fixedPriceEvent = listingCancelledEventModel(
        { id: '191-4', name: 'Marketplace.ListingCancelled' } as EventItem,
        `0x${fixedPrice.id}`,
        { listing: fixedPrice, account, collection, token }
    )[0]
    const offerEvent = listingCancelledEventModel(
        { id: '191-5', name: 'Marketplace.ListingCancelled' } as EventItem,
        `0x${offer.id}`,
        { listing: offer, account, collection, token }
    )[0]
    const underMinimumEvent = listingRemovedUnderMinimumEventModel(
        { id: '191-6', name: 'Marketplace.ListingRemovedUnderMinimum' } as EventItem,
        `0x${fixedPrice.id}`,
        { listing: fixedPrice, account, collection, token }
    )[0]

    assert(fixedPriceEvent.data instanceof MarketplaceListingCancelled)
    assert.equal(fixedPriceEvent.data.listing, fixedPrice.id)
    assert(offerEvent.data instanceof MarketplaceOfferCancelled)
    assert.equal(offerEvent.data.listing, offer.id)
    assert(underMinimumEvent.data instanceof MarketplaceListingRemovedUnderMinimum)
    assert.equal(underMinimumEvent.data.listing, fixedPrice.id)
})

void test('partial-fill state preserves progress and clamps stale counters', () => {
    const partial = rebuildOfferState(10n, { amountFilled: 2n, counterOfferCount: 1 }, { amountRemaining: 4n })
    const removed = rebuildOfferState(10n, partial, { counterOfferDelta: -9 })
    const fixed = rebuildFixedPriceState(10n, 7n)
    const overfilled = rebuildOfferState(10n, partial, { amountRemaining: -1n })

    assert.deepEqual(
        { filled: partial.amountFilled, remaining: partial.amountRemaining, counters: partial.counterOfferCount },
        { filled: 6n, remaining: 4n, counters: 1 }
    )
    assert.equal(removed.amountFilled, 6n)
    assert.equal(removed.amountRemaining, 4n)
    assert.equal(removed.counterOfferCount, 0)
    assert.equal(fixed.amountFilled, 3n)
    assert.equal(fixed.amountRemaining, 7n)
    assert.equal(overfilled.amountFilled, 10n)
    assert.equal(overfilled.amountRemaining, 0n)
})

void test('book state distinguishes scheduled, ineligible, migrated, and removed listings', () => {
    assert.equal(initialBookState(false, ListingType.Offer, false, undefined, 100), MarketplaceListingBookState.Unknown)
    assert.equal(
        initialBookState(true, ListingType.FixedPrice, false, 120, 100),
        MarketplaceListingBookState.PendingActivation
    )
    assert.equal(
        initialBookState(true, ListingType.Auction, false, undefined, 100),
        MarketplaceListingBookState.Ineligible
    )
    assert.equal(
        migratedBookState(
            new Listing({
                type: ListingType.Offer,
                usesWhitelist: false,
                startBlock: 120,
                data: new OfferData({ listingType: ListingType.Offer, expiration: 200 }),
            }),
            100
        ),
        MarketplaceListingBookState.PendingActivation
    )
})

void test('maker fills retain independent prices and offer fills assign the economic buyer', () => {
    const collection = new Collection({ id: '10', collectionId: 10n })
    const token = new Token({ id: '10-20', tokenId: 20n, collection })
    const creator = new Account({ id: 'creator', address: 'creator' })
    const filler = new Account({ id: 'filler', address: 'filler' })
    const runtime = runtime1040()
    const firstListing = new Listing({
        id: 'aa',
        type: ListingType.FixedPrice,
        highestPrice: 10n,
        data: new FixedPriceData({ listingType: ListingType.FixedPrice }),
    })
    const secondListing = new Listing({
        id: 'bb',
        type: ListingType.FixedPrice,
        highestPrice: 11n,
        data: new FixedPriceData({ listingType: ListingType.FixedPrice }),
    })
    const fill = {
        listingId: '',
        buyer: taker,
        amountFilled: 1n,
        amountRemaining: 0n,
        protocolFee: 0n,
        royalty: 0n,
    }
    const first = listingFilledEventModel(
        eventItem(runtime, '192-1', 'Marketplace.ListingFilled', {}),
        { ...fill, listingId: firstListing.id },
        firstListing,
        creator,
        filler,
        collection,
        token
    )[0]
    const second = listingFilledEventModel(
        eventItem(runtime, '192-2', 'Marketplace.ListingFilled', {}),
        { ...fill, listingId: secondListing.id },
        secondListing,
        creator,
        filler,
        collection,
        token
    )[0]

    assert(first.data instanceof MarketplaceListingFilled)
    assert(second.data instanceof MarketplaceListingFilled)
    assert.equal(first.data.price, 10n)
    assert.equal(second.data.price, 11n)
    assert.notEqual(first.id, second.id)

    const parties = listingFillParties(ListingType.Offer, creator, filler)
    const offer = new Listing({
        id: 'cc',
        type: ListingType.Offer,
        highestPrice: 12n,
        data: new OfferData({ listingType: ListingType.Offer }),
    })
    const [offerEvent, activity] = listingFilledEventModel(
        eventItem(runtime, '192-3', 'Marketplace.ListingFilled', {}),
        { ...fill, listingId: offer.id },
        offer,
        parties.seller,
        parties.buyer,
        collection,
        token
    )

    assert(offerEvent.data instanceof MarketplaceOfferSettled)
    assert.equal(offerEvent.data.buyer, creator.id)
    assert.equal(activity.from.id, filler.id)
    assert.equal(activity.to?.id, creator.id)
})
