import { Buffer } from 'buffer'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
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
import { Listing as EventListing, ListingData_Auction } from '../../../types/generated/v6'
import { Event } from '../../../types/generated/support'
import { Context, getAccount } from '../../../processor'

interface EventData {
    listingId: Uint8Array
    listing: EventListing
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MarketplaceListingCreatedEvent(ctx, event)

    if (data.isEfinityV3000) {
        const { listingId, listing } = data.asEfinityV3000
        return { listingId, listing }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function listingCreated(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.ListingCreated', { event: { args: true; extrinsic: true; call: true } }>
) {
    const data = getEventData(ctx, item.event)
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

    const account = await getAccount(ctx, data.listing.seller)
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
        createdAt: new Date(block.timestamp),
        updatedAt: new Date(block.timestamp),
    })

    await ctx.store.insert(listing)

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Active,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp),
    })
    await ctx.store.insert(listingStatus)

    // new EventService(ctx, listing.makeAssetId).MarketplaceList(listing.seller, listing)
    // new CollectionService(ctx.store).sync(makeAssetId.collection.id)
}
