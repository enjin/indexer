import { AccountTokenEvent, CounterOffer, Event as EventModel, Listing } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { getOrCreateAccount } from '~/util/entities'
import Big from 'big.js'
import { rebuildOfferState } from '~/pallet/marketplace/utils/listing-state'

export async function counterOfferRemoved(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent | undefined, SnsEvent | undefined] | undefined> {
    const event = mappings.marketplace.events.counterOfferRemoved(item)
    const listingId = event.listingId.substring(2)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            takeAssetId: {
                collection: true,
            },
        },
    })
    const creator = await getOrCreateAccount(ctx, event.creator)
    const offer = await ctx.store.findOneBy<CounterOffer>(CounterOffer, { id: `${listingId}-${creator.id}` })

    if (offer) {
        await ctx.store.remove(offer)
    }

    if (!listing) {
        return [...mappings.marketplace.events.counterOfferRemovedEventModel(item, event, creator), undefined]
    }

    const takeAssetId = listing.takeAssetId

    listing.updatedAt = new Date(block.timestamp ?? 0)
    if (listing.state.isTypeOf === 'OfferState' && offer) {
        listing.state = rebuildOfferState(listing.amount, listing.state, {
            counterOfferDelta: -1,
        })
    }

    await ctx.store.save(listing)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            listing: {
                id: listing.id,
                price: Big(listing.price.toString())
                    .mul(10 ** (takeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                amount: Big(listing.amount.toString())
                    .div(10 ** (takeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                highestPrice: Big(listing.highestPrice.toString())
                    .mul(10 ** (takeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                seller: {
                    id: listing.seller.id,
                },
                data: listing.data.toJSON(),
                state: listing.state.toJSON(),
                type: listing.type.toString(),
                takeAssetId: takeAssetId.id,
            },
            account: { id: creator.id },
            extrinsic: item.extrinsic?.id,
            token: takeAssetId.id,
            decimalCount: takeAssetId.nativeMetadata?.decimalCount,
        },
    }

    return [
        ...mappings.marketplace.events.counterOfferRemovedEventModel(item, event, creator, {
            listing,
            collection: takeAssetId.collection,
            token: takeAssetId,
        }),
        item.extrinsic ? snsEvent : undefined,
    ]
}
