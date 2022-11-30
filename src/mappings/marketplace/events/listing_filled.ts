import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingFilledEvent } from '../../../types/generated/events'
import { FixedPriceState, Listing, ListingStatus, ListingStatusType, ListingType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { encodeId } from '../../../common/tools'
import { EventService, CollectionService } from '../../../services'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    listingId: Uint8Array
    buyer: Uint8Array
    amountFilled: bigint
    amountRemaining: bigint
    protocolFee: bigint
    royalty: bigint
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MarketplaceListingFilledEvent(ctx)

    if (event.isEfinityV3000) {
        const { listingId, buyer, amountFilled, amountRemaining, protocolFee, royalty } = event.asEfinityV3000
        return { listingId, buyer, amountFilled, amountRemaining, protocolFee, royalty }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function listingFilled(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

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
            id: `${listingId}-${ctx.block.height}`,
            type: ListingStatusType.Finalized,
            listing,
            height: ctx.block.height,
            createdAt: new Date(ctx.block.timestamp),
        })
        await ctx.store.insert(ListingStatus, listingStatus as any)
    }

    listing.updatedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(listing)

    new EventService(ctx, listing.makeAssetId).MarketplacePurchase(
        listing.seller,
        await getOrCreateAccount(ctx, data.buyer),
        listing,
        data.amountFilled,
        data.amountRemaining
    )

    new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)
}
