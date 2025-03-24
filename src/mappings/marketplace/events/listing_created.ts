import { UnsupportedEventError } from '../../../common/errors'
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
    MarketplaceOfferCreated,
    MarketplaceListingCreated,
    OfferData,
    OfferState,
    Token,
    TokenAccount,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.listingCreated.matrixEnjinV1022.is(event)) {
        return events.marketplace.listingCreated.matrixEnjinV1022.decode(event)
    }

    if (events.marketplace.listingCreated.matrixEnjinV1012.is(event)) {
        return events.marketplace.listingCreated.matrixEnjinV1012.decode(event)
    }
    if (events.marketplace.listingCreated.matrixEnjinV603.is(event)) {
        return events.marketplace.listingCreated.matrixEnjinV603.decode(event)
    }
    if (events.marketplace.listingCreated.v1020.is(event)) {
        return events.marketplace.listingCreated.v1020.decode(event)
    }
    if (events.marketplace.listingCreated.v1011.is(event)) {
        return events.marketplace.listingCreated.v1011.decode(event)
    }
    if (events.marketplace.listingCreated.v1010.is(event)) {
        return events.marketplace.listingCreated.v1010.decode(event)
    }
    if (events.marketplace.listingCreated.v500.is(event)) {
        return events.marketplace.listingCreated.v500.decode(event)
    }

    throw new UnsupportedEventError(events.marketplace.listingCreated.name)
}

async function getEvent(
    ctx: CommonContext,
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    let event: EventModel

    event = new EventModel({
        id: item.id,
        name: MarketplaceListingCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.listing.makeAssetId.collectionId.toString(),
        tokenId: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}`,
        data: new MarketplaceListingCreated({
            listing: data.listingId.substring(2),
        }),
    })

    if (data.listing.data.__kind === ListingType.Offer) {
        event = new EventModel({
            id: item.id,
            name: MarketplaceOfferCreated.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.listing.takeAssetId.collectionId.toString(),
            tokenId: `${data.listing.takeAssetId.collectionId}-${data.listing.takeAssetId.tokenId}`,
            data: new MarketplaceOfferCreated({
                listing: data.listingId.substring(2),
            }),
        })
    }

    let to = null
    if (data.listing.data.__kind === 'Offer' && listing.takeAssetId.nonFungible) {
        const tokenOwner = await ctx.store.findOne(TokenAccount, { where: { token: { id: listing.takeAssetId.id } } })
        if (tokenOwner) {
            to = tokenOwner.account
        }
    }

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: event.tokenId! }),
            from: new Account({ id: 'creator' in data.listing ? data.listing.creator : data.listing.seller }),
            to,
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

    const listingId = data.listingId.substring(2)
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
        getOrCreateAccount(ctx, 'creator' in data.listing ? data.listing.creator : data.listing.seller),
    ])

    if (!makeAssetId || !takeAssetId) return undefined

    const feeSide = data.listing.feeSide.__kind as FeeSide
    let listingData, listingState, startHeight

    switch (data.listing.data.__kind) {
        case ListingType.FixedPrice:
            listingData = new FixedPriceData({ listingType: ListingType.FixedPrice })
            break
        case ListingType.Auction:
            startHeight = 'startBlock' in data.listing.data.value ? data.listing.data.value.startBlock : null
            listingData = new AuctionData({
                listingType: ListingType.Auction,
                // TODO: There is no start block for auctions anymore
                startHeight: startHeight ?? 0,
                endHeight: data.listing.data.value.endBlock,
            })
            break
        case ListingType.Offer:
            listingData = new OfferData({
                listingType: ListingType.Offer,
                expiration: data.listing.data.value.expiration,
            })
            break
        default:
            throw new Error('Unknown listing type')
    }

    switch (data.listing.state.__kind) {
        case ListingType.FixedPrice:
            listingState = new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 0n })
            break
        case ListingType.Auction:
            listingState = new AuctionState({ listingType: ListingType.Auction })
            break
        case ListingType.Offer:
            listingState = new OfferState({ listingType: ListingType.Offer, counterOfferCount: 0 })
            break
        default:
            throw new Error('Unknown listing type')
    }

    const listing = new Listing({
        id: listingId,
        seller: account,
        makeAssetId,
        takeAssetId,
        amount: data.listing.amount,
        price: data.listing.price,
        highestPrice: data.listing.price,
        minTakeValue: 'minTakeValue' in data.listing ? data.listing.minTakeValue : data.listing.minReceived,
        feeSide,
        height: data.listing.creationBlock,
        deposit: typeof data.listing.deposit === 'bigint' ? data.listing.deposit : data.listing.deposit.amount,
        salt: data.listing.salt,
        data: listingData,
        state: listingState,
        isActive: true,
        type: listingData.listingType,
        createdAt: new Date(block.timestamp ?? 0),
        updatedAt: new Date(block.timestamp ?? 0),
        // New fields for v1020
        creationBlock: data.listing.creationBlock,
        startBlock: 'startBlock' in data.listing ? (data.listing.startBlock ?? startHeight) : null,
        usesWhitelist: 'whitelistedAccountCount' in data.listing ? data.listing.whitelistedAccountCount !== undefined : false,
    })

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Active,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    if (data.listing.data.__kind !== 'Offer') {
        if ((makeAssetId.bestListing && makeAssetId.bestListing?.highestPrice >= listing.price) || !makeAssetId.bestListing) {
            makeAssetId.bestListing = listing
        }
        makeAssetId.recentListing = listing
    }

    await Promise.all([ctx.store.insert(listing), ctx.store.insert(listingStatus), ctx.store.save(makeAssetId)])

    syncCollectionStats(data.listing.makeAssetId.collectionId.toString())

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                listing: {
                    id: listing.id,
                    price: listing.price.toString(),
                    amount: listing.amount.toString(),
                    highestPrice: listing.highestPrice.toString(),
                    seller: {
                        id: listing.seller.id,
                    },
                    data: listing.data.toJSON(),
                    state: listing.state.toJSON(),
                    type: listing.type.toString(),
                    makeAssetId: makeAssetId.id,
                    takeAssetId: takeAssetId.id,
                },
                token: listing.type === ListingType.Offer ? listing.takeAssetId.id : listing.makeAssetId.id,
                extrinsic: item.extrinsic.id,
                hash: item.extrinsic.hash,
            },
        })
    }

    return await getEvent(ctx, item, data, listing)
}
