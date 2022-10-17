import { UnknownVersionError } from '../../../common/errors'
import {
    MarketplaceListingCreatedEvent,
} from '../../../types/generated/events'
import { ActiveListing, Listing, Token } from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Listing as EventListing } from '../../../types/generated/v6'
import { Buffer } from 'buffer'

interface EventData {
    listingId: Uint8Array
    listing: EventListing
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MarketplaceListingCreatedEvent(ctx);

    if (event.isV6) {
        const { listingId, listing } = event.asV6
        return { listingId, listing }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleListingCreated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const makeAssetId = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}` },
    })
    const takeAssetId = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.listing.takeAssetId.collectionId}-${data.listing.takeAssetId.tokenId}` },
    })

    const address = encodeId(data.listing.seller)
    const account = await getOrCreateAccount(ctx, address)

    const listing = new Listing({
        id: Buffer.from(data.listingId).toString("hex"),
        seller: account,
        makeAssetId: makeAssetId,
        takeAssetId: takeAssetId,
        amount: data.listing.amount,
        price: data.listing.price,
        minTakeValue: data.listing.minTakeValue,
        // feeSide: data.listing.feeSide,
        height: data.listing.creationBlock,
        deposit: data.listing.deposit,
        salt: Buffer.from(data.listing.salt).toString("hex"),
        // data: data.listing.data,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
    });

    await ctx.store.insert(listing)
}
