import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Listing,
    ListingSale,
    MarketplaceListingBookState,
    ListingStatus,
    ListingStatusType,
    ListingType,
    TokenAccount,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { assetId, ListingFilled } from '~/pallet/marketplace/events'
import { findSiblingEvent } from '~/util/sns-cause'
import { marketplace } from '~/type/events'
import { dispatchComputeAccountStats } from '~/queue/queue-utils'
import { listingFillParties, rebuildFixedPriceState, rebuildOfferState } from '~/pallet/marketplace/utils/listing-state'
import { listingFilledSnsEvent } from '~/pallet/marketplace/processors/listing-filled-sns'
import { accrueWhitelistUsage } from '~/pallet/marketplace/utils/whitelist'

export async function listingFilled(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent, SnsEvent | undefined] | undefined> {
    const event: ListingFilled = mappings.marketplace.events.listingFilled(item)
    const listingId: string = event.listingId.substring(2)

    const listing: Listing | undefined = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
            },
            takeAssetId: {
                collection: true,
            },
        },
    })
    if (!listing) return undefined

    const makeAssetId = listing.makeAssetId
    const takeAssetId = listing.takeAssetId
    const filler: Account = await getOrCreateAccount(ctx, event.buyer)
    const listingCreator: Account = await getOrCreateAccount(ctx, listing.seller.id)
    const isOffer: boolean = listing.type === ListingType.Offer
    const { buyer, seller } = listingFillParties(listing.type, listingCreator, filler)

    const sale = new ListingSale({
        id: `${listingId}-${item.id}`,
        amount: event.amountFilled,
        buyer,
        price: 'price' in event ? event.price : listing.highestPrice,
        listing,
        createdAt: new Date(block.timestamp ?? 0),
    })
    await ctx.store.save(sale)

    if (listing.usesWhitelist) {
        await accrueWhitelistUsage(ctx, listingId, filler.id, event.amountFilled, new Date(block.timestamp ?? 0))
    }

    await dispatchComputeAccountStats(buyer.id)
    await dispatchComputeAccountStats(seller.id)
    const tokenOwners = await ctx.store.find<TokenAccount>(TokenAccount, {
        where: { token: { id: makeAssetId.id } },
        relations: {
            account: true,
        },
    })
    if (tokenOwners.length > 0) {
        for (const tokenOwner of tokenOwners) {
            await QueueUtils.dispatchComputeAccountStats(tokenOwner.account.id)
        }
    }

    if (isOffer) {
        takeAssetId.lastSale = sale
        await ctx.store.save(takeAssetId)
    }

    if (event.amountRemaining === 0n) {
        const listingStatus = new ListingStatus({
            id: `${listingId}-${block.height}`,
            type: ListingStatusType.Finalized,
            listing,
            height: block.height,
            createdAt: new Date(block.timestamp ?? 0),
        })

        listing.isActive = false
        listing.bookState = MarketplaceListingBookState.Removed
        await ctx.store.save(listingStatus)
    }

    if (listing.state.listingType === ListingType.FixedPrice) {
        listing.state = rebuildFixedPriceState(listing.amount, event.amountRemaining)
    } else if (listing.state.listingType === ListingType.Offer) {
        listing.state = rebuildOfferState(listing.amount, listing.state, {
            amountRemaining: event.amountRemaining,
        })
    }

    listing.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(listing)

    if (!isOffer) {
        makeAssetId.lastSale = sale
        await ctx.store.save(makeAssetId)
    }

    await QueueUtils.dispatchComputeTokenBestListing(!isOffer ? makeAssetId.id : takeAssetId.id)

    const match = findSiblingEvent(
        block,
        item,
        marketplace.orderMatched.name,
        mappings.marketplace.events.orderMatched,
        (e) => assetId(e.assetId) === (isOffer ? takeAssetId.id : makeAssetId.id),
        true
    )
    const snsEvent = listingFilledSnsEvent(item, event, listing, makeAssetId, takeAssetId, match)

    await QueueUtils.dispatchComputeStats(isOffer ? takeAssetId.collection.id : makeAssetId.collection.id)

    return [
        ...mappings.marketplace.events.listingFilledEventModel(
            item,
            event,
            listing,
            seller,
            buyer,
            isOffer ? takeAssetId.collection : makeAssetId.collection,
            isOffer ? takeAssetId : makeAssetId
        ),
        item.extrinsic ? snsEvent : undefined,
    ]
}
