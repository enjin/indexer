import { UnknownVersionError } from '../../../common/errors'
import {
    MarketplaceListingFilledEvent,
} from '../../../types/generated/events'
import { Listing } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    listingId: Uint8Array
    buyer: Uint8Array,
    amountFilled: bigint,
    amountRemaining: bigint,
    protocolFee: bigint,
    royalty: bigint
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MarketplaceListingFilledEvent(ctx);

    if (event.isV6) {
        const { listingId, buyer, amountFilled, amountRemaining, protocolFee, royalty } = event.asV6
        return { listingId, buyer, amountFilled, amountRemaining, protocolFee, royalty }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleListingFilled(ctx: EventHandlerContext) {
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
