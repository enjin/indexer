import {
    AccountTokenEvent,
    AuctionData,
    AuctionState,
    Event as EventModel,
    FeeSide,
    FixedPriceData,
    FixedPriceState,
    Listing,
    ListingStatus,
    MarketplaceListingData,
    OfferData,
    OfferState,
    Status,
    Token,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { QueueUtils } from '../../../queue'

export async function listingCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const event = mappings.marketplace.events.listingCreated(item)
    const listingId = event.listingId.substring(2)
    const [makeAssetId, takeAssetId, creatorOrSeller] = await Promise.all([
        ctx.store.findOne<Token>(Token, {
            where: { id: `${event.listing.makeAssetId.collectionId}-${event.listing.makeAssetId.tokenId}` },
            relations: {
                bestListing: true,
            },
        }),
        ctx.store.findOne<Token>(Token, {
            where: { id: `${event.listing.takeAssetId.collectionId}-${event.listing.takeAssetId.tokenId}` },
        }),
        getOrCreateAccount(ctx, 'creator' in event.listing ? event.listing.creator : event.listing.seller),
    ])

    if (!makeAssetId || !takeAssetId) return undefined

    const feeSide = event.listing.feeSide.__kind as FeeSide
    let listingData
    let listingState

    switch (event.listing.data.__kind) {
        case 'FixedPrice':
            listingData = new FixedPriceData({ listingType: MarketplaceListingData.FixedPrice })
            break
        case 'Auction': {
            let endBlock = 0
            let startBlock = 0

            if (event.listing.startBlock != undefined) {
                startBlock = event.listing.startBlock
            }
            endBlock = 'endBlock' in event.listing.data.value ? event.listing.data.value.endBlock : 0
            startBlock = ('startBlock' in event.listing.data.value ? event.listing.data.value.startBlock : 0) ?? 0

            listingData = new AuctionData({
                listingType: MarketplaceListingData.Auction,
                startHeight: startBlock,
                endHeight: endBlock,
            })
            break
        }
        case 'Offer': {
            let expiration: number | undefined = undefined
            if (event.listing.data.expiration != undefined) {
                expiration = event.listing.data.expiration
            }

            listingData = new OfferData({
                listingType: MarketplaceListingData.Offer,
                expiration: expiration,
            })
            break
        }
        default:
            throw new Error('Unknown listing type')
    }

    switch (event.listing.state.__kind) {
        case 'FixedPrice':
            listingState = new FixedPriceState({ listingType: MarketplaceListingData.FixedPrice, amountFilled: 0n })
            break
        case 'Auction':
            listingState = new AuctionState({ listingType: MarketplaceListingData.Auction })
            break
        case 'Offer':
            listingState = new OfferState({ listingType: MarketplaceListingData.Offer, counterOfferCount: 0 })
            break
        default:
            throw new Error('Unknown listing type')
    }

    const usesWhitelist = typeof event.listing.whitelistedAccountCount === 'number'

    const listing = new Listing({
        id: listingId,
        seller: creatorOrSeller,
        makeAssetId,
        takeAssetId,
        amount: event.listing.amount,
        price: event.listing.price,
        highestPrice: event.listing.price,
        minTakeValue: event.listing.minTakeValue ?? event.listing.minReceived,
        feeSide,
        height: event.listing.creationBlock,
        deposit: typeof event.listing.deposit === 'bigint' ? event.listing.deposit : event.listing.deposit.amount,
        salt: event.listing.salt,
        data: listingData,
        state: listingState,
        isActive: true,
        usesWhitelist,
        creationBlock: block.height,
        createdAt: new Date(block.timestamp ?? 0),
        updatedAt: new Date(block.timestamp ?? 0),
    })

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: Status.Active,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    if (event.listing.data.__kind !== 'Offer') {
        if (
            (makeAssetId.bestListing && makeAssetId.bestListing.highestPrice >= listing.price) ||
            !makeAssetId.bestListing
        ) {
            makeAssetId.bestListing = listing
        }
        makeAssetId.recentListing = listing
    }

    await ctx.store.insert(listing)
    await ctx.store.insert(listingStatus)
    // await ctx.store.save(makeAssetId)

    QueueUtils.dispatchComputeStats(event.listing.makeAssetId.collectionId.toString())

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
                    makeAssetId: makeAssetId.id,
                    takeAssetId: takeAssetId.id,
                },
                token:
                    listing.data.listingType === MarketplaceListingData.Offer
                        ? listing.takeAssetId.id
                        : listing.makeAssetId.id,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.marketplace.events.listingCreatedEventModel(
        item,
        event,
        listing.makeAssetId.collection,
        listing.makeAssetId
    )
}
