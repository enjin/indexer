import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingFilledEvent } from '../../../types/generated/events'
import {
    Event as EventModel,
    Extrinsic,
    FixedPriceState,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingFilled,
} from '../../../model'
import { Context } from '../../../processor'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Event } from '../../../types/generated/support'

interface EventData {
    listingId: Uint8Array
    buyer: Uint8Array
    amountFilled: bigint
    amountRemaining: bigint
    protocolFee: bigint
    royalty: bigint
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MarketplaceListingFilledEvent(ctx, event)

    if (data.isEfinityV3000) {
        const { listingId, buyer, amountFilled, amountRemaining, protocolFee, royalty } = data.asEfinityV3000
        return { listingId, buyer, amountFilled, amountRemaining, protocolFee, royalty }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function listingFilled(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.ListingFilled', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
            },
        },
    })

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
            createdAt: new Date(block.timestamp),
        })
        await ctx.store.insert(listingStatus)
    }

    listing.updatedAt = new Date(block.timestamp)
    await ctx.store.save(listing)

    // new EventService(ctx, listing.makeAssetId).MarketplacePurchase(
    //     listing.seller,
    //     await getOrCreateAccount(ctx, data.buyer),
    //     listing,
    //     data.amountFilled,
    //     data.amountRemaining
    // )
    //
    // new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceListingFilled({
            listing: listing.id,
            buyer: listing.seller.id,
            amountFilled: data.amountFilled,
            amountRemaining: data.amountRemaining,
            protocolFee: Number(data.protocolFee),
            royalty: data.royalty,
        }),
    })
}
