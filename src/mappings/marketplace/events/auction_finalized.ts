import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceAuctionFinalizedEvent } from '../../../types/generated/events'
import { Listing, ListingStatus, ListingStatusType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { Bid } from '../../../types/generated/v6'
import { EventService, CollectionService } from '../../../services'
import { encodeId } from '../../../common/tools'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    listingId: Uint8Array
    winningBid: Bid | undefined
    protocolFee: bigint
    royalty: bigint
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MarketplaceAuctionFinalizedEvent(ctx)

    if (event.isEfinityV3000) {
        const { listingId, winningBid, protocolFee, royalty } = event.asEfinityV3000
        return { listingId, winningBid, protocolFee, royalty }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function auctionFinalized(ctx: EventHandlerContext) {
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

    listing.updatedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(listing)

    const listingStatus = new ListingStatus({
        id: `${listingId}-${ctx.block.height}`,
        type: ListingStatusType.Finalized,
        listing,
        height: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })
    await ctx.store.insert(ListingStatus, listingStatus as any)

    if (data.winningBid) {
        new EventService(ctx, listing.makeAssetId).MarketplacePurchase(
            listing.seller,
            await getOrCreateAccount(ctx, data.winningBid.bidder),
            listing,
            1n
        )

        new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)
    }
}
