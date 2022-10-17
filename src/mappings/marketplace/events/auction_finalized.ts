import { UnknownVersionError } from '../../../common/errors'
import {
    MarketplaceBidPlacedEvent,
} from '../../../types/generated/events'
import { Listing } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { Bid } from '../../../types/generated/v6'

interface EventData {
    listingId: Uint8Array
    bid: Bid,
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MarketplaceBidPlacedEvent(ctx);

    if (event.isV6) {
        const { listingId, bid } = event.asV6
        return { listingId, bid }
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

    // listing.cancelled = true
    // listing.cancelledAt = new Date(ctx.block.timestamp)
    //
    // await ctx.store.save(listing)
}
