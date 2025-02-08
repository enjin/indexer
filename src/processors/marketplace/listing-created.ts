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
    ListingStatusType,
    ListingType,
    OfferData,
    OfferState,
    Token,
} from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { syncCollectionStats } from '../../jobs/collection-stats'

export async function listingCreated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = mappings.marketplace.events.listingCreated(item)

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
    let listingData
    let listingState

    switch (data.listing.data.__kind) {
        case 'FixedPrice':
            listingData = new FixedPriceData({ listingType: ListingType.FixedPrice })
            break
        case 'Auction': {
            let endBlock = 0
            let startBlock = 0

            if (data.listing.startBlock != undefined) {
                startBlock = data.listing.startBlock
            }
            if (data.listing.data.value != undefined) {
                endBlock = 'endBlock' in data.listing.data.value ? data.listing.data.value.endBlock : 0
                startBlock = ('startBlock' in data.listing.data.value ? data.listing.data.value.startBlock : 0) ?? 0
            }

            listingData = new AuctionData({
                listingType: ListingType.Auction,
                startHeight: startBlock,
                endHeight: endBlock,
            })
            break
        }
        case 'Offer': {
            let expiration: number | undefined = undefined
            if (data.listing.data.value != undefined && 'expiration' in data.listing.data.value) {
                expiration = data.listing.data.value.expiration
            }

            listingData = new OfferData({
                listingType: ListingType.Offer,
                expiration: expiration,
            })
            break
        }
        default:
            throw new Error('Unknown listing type')
    }

    switch (data.listing.state.__kind) {
        case 'FixedPrice':
            listingState = new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 0n })
            break
        case 'Auction':
            listingState = new AuctionState({ listingType: ListingType.Auction })
            break
        case 'Offer':
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
        minTakeValue: data.listing.minTakeValue ?? data.listing.minReceived,
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
    })

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Active,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    if (data.listing.data.__kind !== 'Offer') {
        if ((makeAssetId.bestListing && makeAssetId.bestListing.highestPrice >= listing.price) || !makeAssetId.bestListing) {
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
            },
        })
    }

    return await mappings.marketplace.events.listingCreatedEventModel(item, data, listing)
}
