import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    FixedPriceState,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    ListingType,
    TokenAccount,
    WhitelistedAccount,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getBestListing, getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { ListingFilled } from '~/pallet/marketplace/events'
import { dispatchComputeAccountStats } from '~/queue/queue-utils'

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
                bestListing: true,
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
    const buyer: Account = await getOrCreateAccount(ctx, event.buyer)
    const seller: Account = await getOrCreateAccount(ctx, listing.seller.id)
    const isOffer: boolean = listing.type === ListingType.Offer

    const sale = new ListingSale({
        id: `${listingId}-${item.id}`,
        amount: event.amountFilled,
        buyer,
        price: 'price' in event ? (event.price as bigint) : listing.highestPrice,
        listing,
        createdAt: new Date(block.timestamp ?? 0),
    })
    await ctx.store.save(sale)

    if (listing.usesWhitelist) {
        const whitelistAccount = await ctx.store.findOne<WhitelistedAccount>(WhitelistedAccount, {
            where: { listing: { id: listingId }, account: { id: buyer.id } },
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
        await ctx.store.save(listingStatus)
    }

    if (listing.state.listingType === ListingType.FixedPrice) {
        listing.state = new FixedPriceState({
            listingType: ListingType.FixedPrice,
            amountFilled: listing.amount - event.amountRemaining,
        })
    }

    listing.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(listing)

    if (!isOffer) {
        const bestListing = await getBestListing(ctx, makeAssetId.id)
        makeAssetId.bestListing = null
        if (bestListing) {
            makeAssetId.bestListing = bestListing
        }

        makeAssetId.lastSale = sale
        await ctx.store.save(makeAssetId)
    }

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            listing: {
                id: listing.id,
                price: listing.price.toString(),
                amount: listing.amount.toString(),
                highestPrice: listing.highestPrice.toString(),
                seller: {
                    id: seller.id,
                },
                type: listing.type.toString(),
                data: listing.data.toJSON(),
                state: listing.state.toJSON(),
            },
            token: isOffer ? takeAssetId.id : makeAssetId.id,
            buyer: {
                id: buyer.id,
            },
            amountFilled: event.amountFilled,
            price: 'price' in event ? (event.price as bigint) : listing.highestPrice,
            amountRemaining: event.amountRemaining,
            protocolFee: event.protocolFee,
            royalty: event.royalty,
            extrinsic: item.extrinsic?.id,
        },
    }

    await QueueUtils.dispatchComputeStats(isOffer ? takeAssetId.collection.id : makeAssetId.collection.id)

    return [
        ...mappings.marketplace.events.listingFilledEventModel(
            item,
            event,
            listing,
            isOffer ? buyer : seller,
            isOffer ? takeAssetId.collection : makeAssetId.collection,
            isOffer ? takeAssetId : makeAssetId
        ),
        item.extrinsic ? snsEvent : undefined,
    ]
}
