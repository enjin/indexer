import assert from 'assert'
import { AccountTokenEvent, CounterOffer, Event as EventModel, Listing, ListingType } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { getOrCreateAccount, unwrapSigner } from '../../../util/entities'

export async function counterOfferAnswered(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    assert(item.extrinsic, 'Extrinsic is required')

    const event = mappings.marketplace.events.counterOfferAnswered(item)

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

    assert(listing.state.listingType === ListingType.Offer, 'Listing is not an offer')

    const creator = await getOrCreateAccount(ctx, event.creator)
    const signer = await getOrCreateAccount(ctx, unwrapSigner(item.extrinsic))

    listing.updatedAt = new Date(block.timestamp ?? 0)

    const counterOffer = await ctx.store.findOneByOrFail<CounterOffer>(CounterOffer, {
        id: `${listing.id}-${creator.id}`,
    })

    if (event.response != undefined && event.response.__kind === 'Counter') {
        if (signer.id !== creator.id) {
            assert(signer.id === listing.seller.id, 'Only the seller can counter offer')
            counterOffer.lastAction = signer
            counterOffer.buyerPrice = event.response.value
        } else {
            counterOffer.lastAction = creator
            counterOffer.sellerPrice = event.response.value
        }

        await ctx.store.save(counterOffer)
    }

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
            lastAction: counterOffer.lastAction,
            buyerPrice: counterOffer.buyerPrice?.toString(),
            sellerPrice: counterOffer.sellerPrice?.toString(),
            response: event.response != undefined ? event.response.__kind : null,
            account: { id: creator.id },
            extrinsic: item.extrinsic.id,
            token: listing.takeAssetId.id,
        },
    })

    await Promise.all([ctx.store.save(listing)])

    return mappings.marketplace.events.counterOfferAnsweredEventModel(item, event, listing, creator)
}
