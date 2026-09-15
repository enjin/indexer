import {
    AccountTokenEvent,
    Event as EventModel,
    Listing,
    ListingType,
    MarketplaceListingBookState,
    Token,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import { storage } from '~/type'
import { assetId, OrderMatched } from '~/pallet/marketplace/events'

async function refreshPromotedListings(ctx: CommonContext, block: Block, data: OrderMatched): Promise<void> {
    if (!storage.marketplace.pendingActivations.matrixV1040.is(block)) return

    const pendingSide = data.side.__kind === 'Bid' ? ({ __kind: 'Ask' } as const) : ({ __kind: 'Bid' } as const)
    const pendingIds = new Set(
        (
            (await storage.marketplace.pendingActivations.matrixV1040.get(
                block,
                data.assetId,
                data.currencyId,
                pendingSide
            )) ?? []
        ).map(([, id]) => id.replace(/^0x/, ''))
    )
    const asset = assetId(data.assetId)
    const currency = assetId(data.currencyId)
    const pendingListings = await ctx.store.find<Listing>(Listing, {
        where: {
            bookState: MarketplaceListingBookState.PendingActivation,
            isActive: true,
            type: pendingSide.__kind === 'Ask' ? ListingType.FixedPrice : ListingType.Offer,
            makeAssetId: { id: pendingSide.__kind === 'Ask' ? asset : currency },
            takeAssetId: { id: pendingSide.__kind === 'Ask' ? currency : asset },
        },
    })

    for (const listing of pendingListings) {
        if (pendingIds.has(listing.id)) continue
        const expired =
            listing.data.isTypeOf === 'OfferData' &&
            listing.data.expiration !== undefined &&
            listing.data.expiration !== null &&
            listing.data.expiration <= block.height
        if (expired) {
            listing.bookState = MarketplaceListingBookState.Ineligible
        } else if (
            !listing.isActive ||
            (listing.state.isTypeOf !== 'AuctionState' && listing.state.amountRemaining === 0n)
        ) {
            listing.bookState = MarketplaceListingBookState.Removed
        } else {
            listing.bookState = MarketplaceListingBookState.Indexed
        }
        listing.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(listing)
    }
}

export async function orderMatched(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent, SnsEvent | undefined]> {
    const data = mappings.marketplace.events.orderMatched(item)
    const taker = await getOrCreateAccount(ctx, data.taker)
    const remainderListingId = data.remainderListingId?.replace(/^0x/, '')
    const [remainderListing, asset] = await Promise.all([
        remainderListingId ? ctx.store.findOneBy<Listing>(Listing, { id: remainderListingId }) : undefined,
        ctx.store.findOne<Token>(Token, {
            where: { id: assetId(data.assetId) },
            relations: { collection: true },
        }),
    ])

    try {
        await refreshPromotedListings(ctx, block, data)
    } catch (error) {
        ctx.log.warn(`[OrderMatched] Failed to refresh scheduled book membership at ${item.id}: ${String(error)}`)
    }

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            taker: { id: taker.id },
            assetId: assetId(data.assetId),
            currencyId: assetId(data.currencyId),
            side: data.side.__kind,
            amountMatched: data.amountMatched,
            ordersExamined: data.ordersExamined,
            remainderListingId,
            unrestedAmount: data.unrestedAmount,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [
        ...mappings.marketplace.events.orderMatchedEventModel(
            item,
            data,
            taker,
            remainderListing,
            asset,
            asset?.collection
        ),
        item.extrinsic ? snsEvent : undefined,
    ]
}
