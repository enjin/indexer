import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingCreatedEvent } from '../../../types/generated/events'
import {
    ActiveListing,
    AuctionData,
    AuctionState,
    FeeSide,
    FixedPriceData,
    FixedPriceState,
    Listing,
    ListingStatusType,
    ListingType,
    Token,
} from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Listing as EventListing, ListingData_Auction } from '../../../types/generated/v6'
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

    const feeSide =  data.listing.feeSide.__kind as FeeSide
    const listingData = data.listing.data.__kind === ListingType.FixedPrice.toString()
        ? new FixedPriceData({listingType: ListingType.FixedPrice})
        : new AuctionData({
            listingType: ListingType.Auction,
            startHeight: (data.listing.data as ListingData_Auction).value.startBlock,
            endHeight: (data.listing.data as ListingData_Auction).value.endBlock,
        })
    const listingState = data.listing.state.__kind === FixedPriceState.toString()
        ? new FixedPriceState({listingType: ListingType.FixedPrice, amountFilled: 0n})
        : new AuctionState({listingType: ListingType.Auction})

    const listing = new Listing({
        id: Buffer.from(data.listingId).toString("hex"),
        seller: account,
        makeAssetId: makeAssetId,
        takeAssetId: takeAssetId,
        amount: data.listing.amount,
        price: data.listing.price,
        minTakeValue: data.listing.minTakeValue,
        feeSide: feeSide,
        height: data.listing.creationBlock,
        deposit: data.listing.deposit,
        salt: Buffer.from(data.listing.salt).toString("hex"),
        data: listingData,
        state: listingState,
        status: new ActiveListing({listingStatus: ListingStatusType.Active}),
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
    });

    await ctx.store.insert(listing)
}
