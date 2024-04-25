import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    FixedPriceState,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingFilled,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getBestListing } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.listingFilled.matrixEnjinV603.is(event)) {
        return events.marketplace.listingFilled.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.marketplace.listingFilled.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceListingFilled({
            listing: listing.id,
            buyer: data.buyer,
            amountFilled: data.amountFilled,
            amountRemaining: data.amountRemaining,
            protocolFee: data.protocolFee,
            royalty: data.royalty,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: listing.makeAssetId,
            from: listing.seller,
            to: new Account({ id: data.buyer }),
            event,
        }),
    ]
}

export async function listingFilled(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(ctx, item)
    if (!data) return undefined

    const listingId = data.listingId.substring(2)
    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
                bestListing: true,
            },
        },
    })

    if (!listing || !listing.makeAssetId) return undefined

    listing.state = new FixedPriceState({
        listingType: ListingType.FixedPrice,
        amountFilled: listing.amount - data.amountRemaining,
    })

    if (data.amountRemaining === 0n) {
        const listingStatus = new ListingStatus({
            id: `${listingId}-${block.height}`,
            type: ListingStatusType.Finalized,
            listing,
            height: block.height,
            createdAt: new Date(block.timestamp ?? 0),
        })
        await ctx.store.insert(listingStatus)
        listing.isActive = false
    }

    listing.updatedAt = new Date(block.timestamp ?? 0)

    const sale = new ListingSale({
        id: `${listingId}-${item.id}`,
        amount: data.amountFilled,
        buyer: new Account({ id: data.buyer }),
        price: listing.price,
        listing,
        createdAt: new Date(block.timestamp ?? 0),
    })

    listing.makeAssetId.lastSale = sale

    await Promise.all([ctx.store.save(listing), ctx.store.save(sale)])

    if (listing.makeAssetId.bestListing?.id === listing.id && data.amountRemaining === 0n) {
        const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
        listing.makeAssetId.bestListing = null
        if (bestListing) {
            listing.makeAssetId.bestListing = bestListing
        }
    }

    await ctx.store.save(listing.makeAssetId)

    syncCollectionStats(listing.makeAssetId.collection.id)

    return getEvent(item, data, listing)
}
