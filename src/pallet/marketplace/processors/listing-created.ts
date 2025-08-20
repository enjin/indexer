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
    OfferData,
    OfferState,
    Token,
    TokenAccount,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getBestListing, getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { match } from 'ts-pattern'

export async function listingCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent, SnsEvent | undefined] | undefined> {
    const data = mappings.marketplace.events.listingCreated(item)
    const listingId = data.listingId.substring(2)

    const makeAssetId = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}` },
        relations: {
            collection: true,
            bestListing: true,
        },
    })
    const takeAssetId = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.listing.takeAssetId.collectionId}-${data.listing.takeAssetId.tokenId}` },
        relations: {
            collection: true,
        },
    })
    if (!makeAssetId || !takeAssetId) return undefined

    const listingCreator = await getOrCreateAccount(ctx, data.listing.creator ?? data.listing.seller)
    const listingData = match(data.listing.data)
        .returnType<FixedPriceData | OfferData | AuctionData>()
        .with(
            { __kind: 'Offer' },
            (offer) =>
                new OfferData({
                    listingType: ListingType.Offer,
                    expiration: offer.value.expiration,
                })
        )
        .with(
            { __kind: 'Auction' },
            (auction) =>
                new AuctionData({
                    listingType: ListingType.Auction,
                    endHeight: auction.value.endBlock,
                })
        )
        .with({ __kind: 'FixedPrice' }, () => new FixedPriceData({ listingType: ListingType.FixedPrice }))
        .exhaustive()

    const listingState = match(data.listing.state)
        .returnType<AuctionState | OfferState | FixedPriceState>()
        .with({ __kind: 'Auction' }, () => new AuctionState({ listingType: ListingType.Auction, isExpired: false }))
        .with(
            { __kind: 'Offer' },
            () => new OfferState({ listingType: ListingType.Offer, counterOfferCount: 0, isExpired: false })
        )
        .with(
            { __kind: 'FixedPrice' },
            () => new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 0n })
        )
        .exhaustive()

    const feeSide = data.listing.feeSide.__kind as FeeSide
    const usesWhitelist = typeof data.listing.whitelistedAccountCount === 'number'
    const startBlock = data.listing.startBlock ?? 0

    const listing = new Listing({
        id: listingId,
        seller: listingCreator,
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
        startBlock,
        type: listingData.listingType,
        usesWhitelist,
        creationBlock: block.height,
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

    await ctx.store.save(listing)
    await ctx.store.save(listingStatus)

    const isOffer = listing.type === ListingType.Offer
    if (!isOffer) {
        const bestListing = await getBestListing(ctx, makeAssetId.id)
        makeAssetId.bestListing = null
        if (bestListing) {
            makeAssetId.bestListing = bestListing
        }
        makeAssetId.recentListing = listing
        await ctx.store.save(makeAssetId)
    }

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            id: item.id,
            name: item.name,
            body: {
                listing: {
                    id: listing.id,
                    price: listing.price.toString(),
                    amount: listing.amount.toString(),
                    highestPrice: listing.highestPrice.toString(),
                    seller: {
                        id: listingCreator.id,
                    },
                    data: listing.data.toJSON(),
                    state: listing.state.toJSON(),
                    type: listing.type.toString(),
                    makeAssetId: makeAssetId.id,
                    takeAssetId: takeAssetId.id,
                },
                token: isOffer ? takeAssetId.id : makeAssetId.id,
                extrinsic: item.extrinsic?.id,
            },
        },
    }

    let toAccount: Account | undefined
    if (isOffer && takeAssetId.nonFungible) {
        const tokenOwner = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { token: { id: takeAssetId.id } },
            relations: {
                account: true,
            },
        })
        if (tokenOwner) {
            toAccount = tokenOwner.account
        }
    }

    QueueUtils.dispatchComputeStats(makeAssetId.collection.id)

    return [
        ...mappings.marketplace.events.listingCreatedEventModel(
            item.id,
            {
                collectionId: isOffer ? data.listing.takeAssetId.collectionId : data.listing.makeAssetId.collectionId,
                tokenId: isOffer ? data.listing.takeAssetId.tokenId : data.listing.makeAssetId.tokenId,
                listingId,
                isOffer,
            },
            {
                extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : undefined,
                fromAccount: listingCreator,
                collection: isOffer ? takeAssetId.collection : makeAssetId.collection,
                token: isOffer ? takeAssetId : makeAssetId,
                toAccount,
            }
        ),
        item.extrinsic ? snsEvent : undefined,
    ]
}
