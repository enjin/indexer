import { Buffer } from 'buffer'
import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingCreatedEvent } from '../../../types/generated/events'
import {
    AuctionData,
    AuctionState,
    FeeSide,
    FixedPriceData,
    FixedPriceState,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    Token,
} from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Listing as EventListing, ListingData_Auction } from '../../../types/generated/v6'
import { EventService, CollectionService } from '../../../services'

interface EventData {
    listingId: Uint8Array
    listing: EventListing
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MarketplaceListingCreatedEvent(ctx)

    if (event.isEfinityV3000) {
        const { listingId, listing } = event.asEfinityV3000
        return { listingId, listing }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function handleListingCreated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const listingId = Buffer.from(data.listingId).toString('hex')
    const makeAssetId = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}` },
        relations: {
            collection: true,
        },
    })
    const takeAssetId = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.listing.takeAssetId.collectionId}-${data.listing.takeAssetId.tokenId}` },
    })

    const address = encodeId(data.listing.seller)
    const account = await getOrCreateAccount(ctx, address)

    const feeSide = data.listing.feeSide.__kind as FeeSide
    const listingData =
        data.listing.data.__kind === ListingType.FixedPrice.toString()
            ? new FixedPriceData({ listingType: ListingType.FixedPrice })
            : new AuctionData({
                  listingType: ListingType.Auction,
                  startHeight: (data.listing.data as ListingData_Auction).value.startBlock,
                  endHeight: (data.listing.data as ListingData_Auction).value.endBlock,
              })
    const listingState =
        data.listing.state.__kind === ListingType.FixedPrice.toString()
            ? new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 0n })
            : new AuctionState({ listingType: ListingType.Auction })

    const listing = new Listing({
        id: listingId,
        seller: account,
        makeAssetId,
        takeAssetId,
        amount: data.listing.amount,
        price: data.listing.price,
        highestPrice: data.listing.price,
        minTakeValue: data.listing.minTakeValue,
        feeSide,
        height: data.listing.creationBlock,
        deposit: data.listing.deposit,
        salt: Buffer.from(data.listing.salt).toString('hex'),
        data: listingData,
        state: listingState,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(Listing, listing as any)

    const listingStatus = new ListingStatus({
        id: `${listingId}-${ctx.block.height}`,
        type: ListingStatusType.Active,
        listing,
        height: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })
    await ctx.store.insert(ListingStatus, listingStatus as any)

    new EventService(ctx, listing.makeAssetId).MarketplaceList(listing.seller, listing)

    new CollectionService(ctx.store).sync(makeAssetId.collection.id)
}
