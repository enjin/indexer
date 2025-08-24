import { AccountTokenEvent, CounterOffer, Event as EventModel, Listing, OfferState } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { getOrCreateAccount } from '~/util/entities'

export async function counterOfferRemoved(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
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
    if (!listing || listing.state.isTypeOf !== 'OfferState') return undefined

    const takeAssetId = listing.takeAssetId
    const creator = await getOrCreateAccount(ctx, event.creator)
    const offer = await ctx.store.findOneBy<CounterOffer>(CounterOffer, { id: `${listing.id}-${creator.id}` })

    if (offer) {
        await ctx.store.remove(offer)
    }

    listing.updatedAt = new Date(block.timestamp ?? 0)
    listing.state = new OfferState({
        listingType: listing.state.listingType,
        counterOfferCount: listing.state.counterOfferCount - 1,
        isExpired: false,
    })

    await ctx.store.save(listing)

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
                    takeAssetId: takeAssetId.id,
                },
                account: { id: creator.id },
                extrinsic: item.extrinsic.id,
                token: takeAssetId.id,
            },
        })
    }

    return mappings.marketplace.events.counterOfferRemovedEventModel(
        item,
        event,
        listing,
        creator,
        takeAssetId.collection,
        takeAssetId
    )
}
