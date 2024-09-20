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
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.listingFilled.matrixEnjinV1012.is(event)) {
        return events.marketplace.listingFilled.matrixEnjinV1012.decode(event)
    }

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
    let collectionId = listing.makeAssetId.collection.id
    let tokenId = listing.makeAssetId.id

    if (listing.data.listingType === ListingType.Offer) {
        collectionId = listing.takeAssetId.collection.id
        tokenId = listing.takeAssetId.id
    }

    const event = new EventModel({
        id: item.id,
        name: MarketplaceListingFilled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId,
        tokenId,
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
            takeAssetId: {
                collection: true,
            },
        },
    })

    if (!listing || !listing.makeAssetId) return undefined

    if (listing.state.listingType === ListingType.FixedPrice) {
        listing.state = new FixedPriceState({
            listingType: ListingType.FixedPrice,
            amountFilled: listing.amount - data.amountRemaining,
        })
    }

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

    if (listing.data.listingType !== ListingType.Offer) {
        if (listing.makeAssetId.bestListing?.id === listing.id && data.amountRemaining === 0n) {
            const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
            listing.makeAssetId.bestListing = null
            if (bestListing) {
                listing.makeAssetId.bestListing = bestListing
            }
        }
        await ctx.store.save(listing.makeAssetId)
        syncCollectionStats(listing.makeAssetId.collection.id)
    }

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                listing: {
                    id: listing.id,
                    price: listing.price.toString(),
                    amount: listing.amount.toString(),
                    highestPrice: listing.highestPrice.toString(),
                    seller: {
                        id: listing.seller.id,
                    },
                    data: listing.data.toJSON(),
                    state: listing.state.toJSON(),
                    tokenId: `${listing.makeAssetId.collection.collectionId}-${listing.makeAssetId.tokenId}`,
                },
                buyer: { id: data.buyer },
                amountFilled: data.amountFilled,
                amountRemaining: data.amountRemaining,
                protocolFee: data.protocolFee,
                royalty: data.royalty,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, data, listing)
}
