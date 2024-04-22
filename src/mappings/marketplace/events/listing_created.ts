import { Buffer } from 'buffer'
import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    AuctionData,
    AuctionState,
    Event as EventModel,
    Extrinsic,
    FeeSide,
    FixedPriceData,
    FixedPriceState,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingCreated,
    Token,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.listingCreated.matrixEnjinV603.is(event)) {
        return events.marketplace.listingCreated.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.marketplace.listingCreated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.listing.makeAssetId.collectionId.toString(),
        tokenId: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}`,
        data: new MarketplaceListingCreated({
            listing: Buffer.from(data.listingId).toString('hex'),
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}` }),
            from: new Account({ id: data.listing.seller }),
            event,
        }),
    ]
}

export async function listingCreated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(ctx, item)
    if (!data) return undefined
    const listingId = Buffer.from(data.listingId).toString('hex')
    const [makeAssetId, takeAssetId, account] = await Promise.all([
        ctx.store.findOne<Token>(Token, {
            where: { id: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}` },
            relations: {
                bestListing: true,
            },
        }),
        ctx.store.findOne<Token>(Token, {
            where: { id: `${data.listing.takeAssetId.collectionId}-${data.listing.takeAssetId.tokenId}` },
        }),
        getOrCreateAccount(ctx, data.listing.seller),
    ])

    if (!makeAssetId || !takeAssetId) return undefined

    const feeSide = data.listing.feeSide.__kind as FeeSide
    const listingData =
        data.listing.data.__kind === ListingType.FixedPrice
            ? new FixedPriceData({ listingType: ListingType.FixedPrice })
            : new AuctionData({
                  listingType: ListingType.Auction,
                  startHeight: data.listing.data.value.startBlock,
                  endHeight: data.listing.data.value.endBlock,
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
        isActive: true,
        type: listingData.listingType,
        createdAt: new Date(block.timestamp ?? 0),
        updatedAt: new Date(block.timestamp ?? 0),
    })

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Active,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    // update best listing
    if ((makeAssetId.bestListing && makeAssetId.bestListing?.highestPrice >= listing.price) || !makeAssetId.bestListing) {
        makeAssetId.bestListing = listing
    }
    makeAssetId.recentListing = listing

    await Promise.all([ctx.store.insert(listing), ctx.store.insert(listingStatus), ctx.store.save(makeAssetId)])

    syncCollectionStats(data.listing.makeAssetId.collectionId.toString())

    return getEvent(item, data)
}
