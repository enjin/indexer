import assert from 'assert'
import { AccountTokenEvent, CounterOffer, Event as EventModel, Listing, OfferState } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { getOrCreateAccount } from '../../../util/entities'

export async function counterOfferRemoved(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const event = mappings.marketplace.events.counterOfferRemoved(item)
    const listingId = event.listingId.substring(2)
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            takeAssetId: {
                collection: true,
                bestListing: true,
            },
        },
    })

    const creator = await getOrCreateAccount(ctx, event.creator)
    assert(listing.state.isTypeOf === 'OfferState', 'Listing is not an offer')
    listing.updatedAt = new Date(block.timestamp ?? 0)

    listing.state = new OfferState({
        listingType: listing.state.listingType,
        counterOfferCount: listing.state.counterOfferCount - 1,
    })

    const offer = await ctx.store.findOneByOrFail<CounterOffer>(CounterOffer, { id: `${listing.id}-${creator.id}` })

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
                    takeAssetId: listing.takeAssetId.id,
                },
                account: { id: creator.id },
                extrinsic: item.extrinsic.id,
                token: listing.takeAssetId.id,
            },
        })
    }

    await Promise.all([ctx.store.remove(offer), ctx.store.save(listing)])

    return mappings.marketplace.events.counterOfferRemovedEventModel(item, event, listing, creator)
}
