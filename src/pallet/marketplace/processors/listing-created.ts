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
    MarketplaceListingBookState,
    OfferData,
    OfferState,
    Token,
    TokenAccount,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { match } from 'ts-pattern'
import Big from 'big.js'
import {
    initialBookState,
    listingCreatedSupportsOrderBook,
    rebuildFixedPriceState,
    rebuildOfferState,
} from '~/pallet/marketplace/utils/listing-state'
import { takeUnindexedListing } from '~/pallet/marketplace/processors/listing-not-indexed'
import { AssetId, Listing as ChainListing } from '~/pallet/common/types'

type ListingData = FixedPriceData | OfferData | AuctionData
type ListingState = AuctionState | OfferState | FixedPriceState

/** Blocks between creation and the start of a listing whose event does not name a start block. */
const DEFAULT_START_DELAY = 10

function findToken(ctx: CommonContext, asset: AssetId): Promise<Token | undefined> {
    return ctx.store.findOne<Token>(Token, {
        where: { id: `${asset.collectionId}-${asset.tokenId}` },
        relations: { collection: true },
    })
}

function listingDataOf(listing: ChainListing): ListingData {
    return match(listing.data)
        .returnType<ListingData>()
        .with(
            { __kind: 'Offer' },
            (offer) => new OfferData({ listingType: ListingType.Offer, expiration: offer.value.expiration })
        )
        .with(
            { __kind: 'Auction' },
            (auction) => new AuctionData({ listingType: ListingType.Auction, endHeight: auction.value.endBlock })
        )
        .with({ __kind: 'FixedPrice' }, () => new FixedPriceData({ listingType: ListingType.FixedPrice }))
        .exhaustive()
}

function listingStateOf(listing: ChainListing): ListingState {
    return match(listing.state)
        .returnType<ListingState>()
        .with({ __kind: 'Auction' }, () => new AuctionState({ listingType: ListingType.Auction, isExpired: false }))
        .with({ __kind: 'Offer' }, (offer) => {
            // v1011 tracks counterOfferCount, v1040+ amountFilled; neither is set when the listing is created.
            const state = offer.value as { amountFilled?: bigint; counterOfferCount?: number } | undefined
            return rebuildOfferState(listing.amount, {
                amountFilled: state?.amountFilled ?? 0n,
                counterOfferCount: state?.counterOfferCount ?? 0,
            })
        })
        .with({ __kind: 'FixedPrice' }, (fixedPrice) =>
            rebuildFixedPriceState(listing.amount, listing.amount - fixedPrice.amountFilled)
        )
        .exhaustive()
}

function buildListing(
    id: string,
    chainListing: ChainListing,
    seller: Account,
    makeAssetId: Token,
    takeAssetId: Token,
    bookState: MarketplaceListingBookState,
    block: Block
): Listing {
    const data = listingDataOf(chainListing)
    const createdAt = new Date(block.timestamp ?? 0)
    return new Listing({
        id,
        seller,
        makeAssetId,
        takeAssetId,
        amount: chainListing.amount,
        price: chainListing.price,
        highestPrice: chainListing.price,
        minTakeValue: chainListing.minTakeValue ?? chainListing.minReceived,
        feeSide: chainListing.feeSide.__kind as FeeSide,
        height: chainListing.creationBlock,
        deposit: typeof chainListing.deposit === 'bigint' ? chainListing.deposit : chainListing.deposit.amount,
        salt: chainListing.salt,
        data,
        state: listingStateOf(chainListing),
        isActive: true,
        bookState,
        startBlock: chainListing.startBlock ?? block.height + DEFAULT_START_DELAY,
        type: data.listingType,
        usesWhitelist: usesWhitelist(chainListing),
        whitelistedAccounts: [],
        creationBlock: block.height,
        createdAt,
        updatedAt: createdAt,
    })
}

function usesWhitelist(listing: ChainListing): boolean {
    return typeof listing.whitelistedAccountCount === 'number'
}

function bookStateOf(
    item: EventItem,
    chainListing: ChainListing,
    blockHeight: number,
    notIndexed: boolean
): MarketplaceListingBookState {
    if (notIndexed) return MarketplaceListingBookState.NotIndexed
    return initialBookState(
        listingCreatedSupportsOrderBook(item),
        listingDataOf(chainListing).listingType,
        usesWhitelist(chainListing),
        chainListing.startBlock,
        blockHeight
    )
}

/** Point a ListingNotIndexed event seen earlier in this block at the listing it was about. */
function linkUnindexedEvent(unindexedEvent: EventModel | undefined, listingId: string, token: Token): void {
    if (unindexedEvent?.data?.isTypeOf !== 'MarketplaceListingNotIndexed') return
    // The event row is persisted at the end of the block, so it can still pick up the listing relations.
    unindexedEvent.data.listing = listingId
    unindexedEvent.collectionId = token.collection.id
    unindexedEvent.tokenId = token.id
}

function listingSnsEvent(
    item: EventItem,
    listing: Listing,
    seller: Account,
    makeAssetId: Token,
    takeAssetId: Token,
    token: Token
): SnsEvent {
    const decimalCount = makeAssetId.nativeMetadata?.decimalCount
    const scale = 10 ** (decimalCount ?? 0)
    const toPrice = (value: bigint) => Big(value.toString()).mul(scale).toNumber()
    return {
        id: item.id,
        name: item.name,
        body: {
            listing: {
                id: listing.id,
                price: toPrice(listing.price),
                amount: Big(listing.amount.toString()).div(scale).toNumber(),
                highestPrice: toPrice(listing.highestPrice),
                seller: { id: seller.id },
                data: listing.data.toJSON(),
                state: listing.state.toJSON(),
                type: listing.type.toString(),
                makeAssetId: makeAssetId.id,
                takeAssetId: takeAssetId.id,
            },
            token: token.id,
            decimalCount,
            extrinsic: item.extrinsic?.id,
            // false when the ListingNotIndexed before this event left the listing out of the order book
            indexed: listing.bookState !== MarketplaceListingBookState.NotIndexed,
        },
    }
}

/**
 * Queue the recomputations a new listing affects, in order. For an offer on an NFT, returns the token's owner,
 * who is the counterparty of the offer.
 */
async function dispatchListingJobs(
    ctx: CommonContext,
    isOffer: boolean,
    makeAssetId: Token,
    takeAssetId: Token,
    seller: Account
): Promise<Account | undefined> {
    const token = isOffer ? takeAssetId : makeAssetId
    await QueueUtils.dispatchComputeTokenBestListing(token.id)

    let owner: Account | undefined
    if (isOffer && takeAssetId.nonFungible) {
        const tokenOwner = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { token: { id: takeAssetId.id } },
            relations: { account: true },
        })
        if (tokenOwner) {
            owner = tokenOwner.account
            await QueueUtils.dispatchComputeAccountStats(owner.id)
        }
    }

    await QueueUtils.dispatchComputeStats(token.collection.id)

    const makeAssetHolders = await ctx.store.find<TokenAccount>(TokenAccount, {
        where: { token: { id: makeAssetId.id } },
        relations: { account: true },
    })
    for (const holder of makeAssetHolders) {
        await QueueUtils.dispatchComputeAccountStats(holder.account.id)
    }
    await QueueUtils.dispatchComputeAccountStats(seller.id)

    return owner
}

export async function listingCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent, SnsEvent | undefined] | undefined> {
    const data = mappings.marketplace.events.listingCreated(item)
    const listingId = data.listingId.substring(2)

    const makeAssetId = await findToken(ctx, data.listing.makeAssetId)
    const takeAssetId = await findToken(ctx, data.listing.takeAssetId)
    if (!makeAssetId || !takeAssetId) return undefined

    const seller = await getOrCreateAccount(ctx, data.listing.creator ?? data.listing.seller)
    const unindexedEvent = takeUnindexedListing(listingId, block.hash)
    const bookState = bookStateOf(item, data.listing, block.height, unindexedEvent !== undefined)
    const listing = buildListing(listingId, data.listing, seller, makeAssetId, takeAssetId, bookState, block)

    await ctx.store.save(listing)
    await ctx.store.save(
        new ListingStatus({
            id: `${listingId}-${block.height}`,
            type: ListingStatusType.Active,
            listing,
            height: block.height,
            createdAt: listing.createdAt,
        })
    )

    const isOffer = listing.type === ListingType.Offer
    const token = isOffer ? takeAssetId : makeAssetId
    const asset = isOffer ? data.listing.takeAssetId : data.listing.makeAssetId
    linkUnindexedEvent(unindexedEvent, listingId, token)

    if (!isOffer) {
        makeAssetId.recentListing = listing
        await ctx.store.save(makeAssetId)
    }

    const counterparty = await dispatchListingJobs(ctx, isOffer, makeAssetId, takeAssetId, seller)

    const [eventModel, accountTokenEvent] = mappings.marketplace.events.listingCreatedEventModel(
        item.id,
        { collectionId: asset.collectionId, tokenId: asset.tokenId, listingId, isOffer },
        {
            extrinsic: extrinsicOf(item),
            fromAccount: seller,
            collection: token.collection,
            token,
            toAccount: counterparty,
        }
    )
    const snsEvent = item.extrinsic
        ? listingSnsEvent(item, listing, seller, makeAssetId, takeAssetId, token)
        : undefined
    return [eventModel, accountTokenEvent, snsEvent]
}

function extrinsicOf(item: EventItem): Extrinsic | undefined {
    return item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : undefined
}
