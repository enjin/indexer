import { UnknownVersionError } from '../../../common/errors'
import {
    MarketplaceAuctionFinalizedEvent,
} from '../../../types/generated/events'
import {
    FinalizedListing,
    Listing,
    ListingStatusType,
} from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { Bid } from '../../../types/generated/v6'

interface EventData {
    listingId: Uint8Array
    winningBid: Bid|undefined,
    protocolFee: BigInt,
    royalty: BigInt
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MarketplaceAuctionFinalizedEvent(ctx);

    if (event.isEfinityV3000) {
        const { listingId, winningBid, protocolFee, royalty } = event.asEfinityV3000
        return { listingId, winningBid, protocolFee, royalty }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleAuctionFinalized(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: Buffer.from(data.listingId).toString("hex") },
        relations: {
            seller: true,
            makeAssetId: true,
            takeAssetId: true,
        }
    })

    listing.status = new FinalizedListing({
        listingStatus: ListingStatusType.Finalized,
        height: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    });

    await ctx.store.save(listing)
}
