import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingFilledEvent } from '../../../types/generated/events'
import { Collection, FinalizedListing, FixedPriceState, Listing, ListingStatusType, ListingType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { encodeId } from '../../../common/tools'
import { Event } from '../../../event'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    listingId: Uint8Array
    buyer: Uint8Array
    amountFilled: bigint
    amountRemaining: bigint
    protocolFee: bigint
    royalty: bigint
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MarketplaceListingFilledEvent(ctx)

    if (event.isEfinityV3000) {
        const { listingId, buyer, amountFilled, amountRemaining, protocolFee, royalty } = event.asEfinityV3000
        return { listingId, buyer, amountFilled, amountRemaining, protocolFee, royalty }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleListingFilled(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: true,
            takeAssetId: true,
        },
    })

    listing.state = new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: data.amountFilled })

    if (data.amountRemaining === 0n) {
        listing.status = new FinalizedListing({
            listingStatus: ListingStatusType.Finalized,
            height: ctx.block.height,
            createdAt: new Date(ctx.block.timestamp),
        })
    }

    listing.updatedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(listing)

    new Event(ctx, listing.makeAssetId).MarketplacePurchase(
        listing.seller,
        await getOrCreateAccount(ctx, encodeId(data.buyer)),
        listing,
        data.amountFilled,
        data.amountRemaining
    )

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: listing.makeAssetId.collection.id.toString() },
        relations: {
            owner: true,
            floorListing: true,
            tokens: true,
            collectionAccounts: true,
            tokenAccounts: true,
            attributes: true,
        }
    })

    if (collection.floorListing?.id === listing.id) {
        const floorListing = await ctx.store.findOne<Listing>(Listing, {
            where: {
                makeAssetId: { collection: { id: collection.id } },
                status: { listingStatus: ListingStatusType.Active },
            },
            order: {
                highestPrice: "DESC",
            },
        })

        if (floorListing && floorListing.id !== listing.id) {
            collection.floorListing = floorListing
            await ctx.store.save(collection)
        } else {
            collection.floorListing = null
            await ctx.store.save(collection)
        }
    }
}
