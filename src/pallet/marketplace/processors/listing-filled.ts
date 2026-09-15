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
    WhitelistedAccount,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { ListingFilled } from '~/pallet/marketplace/events'
import { dispatchComputeAccountStats } from '~/queue/queue-utils'
import { listingFillParties, rebuildFixedPriceState, rebuildOfferState } from '~/pallet/marketplace/utils/listing-state'
import { listingFilledSnsEvent } from '~/pallet/marketplace/processors/listing-filled-sns'

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
        const whitelistAccount = await ctx.store.findOne<WhitelistedAccount>(WhitelistedAccount, {
            where: { listing: { id: listingId }, account: { id: filler.id } },
        })

        if (whitelistAccount) {
            whitelistAccount.amountUsed += Number(event.amountFilled)
            await ctx.store.save(whitelistAccount)
        }
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

    const snsEvent = listingFilledSnsEvent(item, event, listing, makeAssetId, takeAssetId)

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
