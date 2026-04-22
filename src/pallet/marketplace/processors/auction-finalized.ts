import {
    AccountTokenEvent,
    Event as EventModel,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    TokenAccount,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { dispatchComputeAccountStats } from '~/queue/queue-utils'
import Big from 'big.js'

export async function auctionFinalized(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent, SnsEvent | undefined] | undefined> {
    const data = mappings.marketplace.events.auctionFinalized(item)
    const listingId = data.listingId.substring(2)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
            },
        },
    })
    if (!listing) return undefined

    const makeAssetId = listing.makeAssetId
    const status = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Finalized,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })
    await ctx.store.save(status)

    if (data.winningBid) {
        const buyer = await getOrCreateAccount(ctx, data.winningBid.bidder)
        const sale = new ListingSale({
            id: `${listingId}-${item.id}`,
            amount: listing.amount,
            price: data.winningBid.price,
            buyer,
            listing,
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.save(sale)
        makeAssetId.lastSale = sale

        await dispatchComputeAccountStats(buyer.id)
        await dispatchComputeAccountStats(listing.seller.id)
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
    }

    listing.isActive = false
    listing.updatedAt = new Date(block.timestamp ?? 0)

    await ctx.store.save(listing)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            listing: {
                seller: {
                    id: listing.seller.id,
                },
                id: listing.id,
                highestPrice: Big(listing.highestPrice.toString())
                    .mul(10 ** (makeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                amount: Big(listing.amount.toString())
                    .div(10 ** (makeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                price: Big(listing.price.toString())
                    .mul(10 ** (makeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                data: listing.data.toJSON(),
            },
            winningBid: data.winningBid
                ? {
                      bidder: {
                          id: data.winningBid.bidder,
                      },
                      price: Big(data.winningBid.price.toString())
                          .mul(10 ** (makeAssetId.nativeMetadata?.decimalCount ?? 0))
                          .toNumber(),
                  }
                : null,
            protocolFee: data.protocolFee,
            royalty: data.royalty,
            token: listing.makeAssetId.id,
            decimalCount: makeAssetId.nativeMetadata?.decimalCount,
            extrinsic: item.extrinsic?.id,
        },
    }

    await QueueUtils.dispatchComputeStats(makeAssetId.collection.id)
    QueueUtils.dispatchComputeTokenBestListing(makeAssetId.id)

    return [
        ...mappings.marketplace.events.auctionFinalizedEventModel(
            item,
            data,
            listing,
            makeAssetId.collection,
            makeAssetId
        ),
        item.extrinsic ? snsEvent : undefined,
    ]
}
