import assert from 'assert'
import { AccountTokenEvent, CounterOffer, Event as EventModel, Listing, ListingType } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { getOrCreateAccount, unwrapSignatureSigner } from '../../common/util/entities'

export async function counterOfferAnswered(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    assert(item.extrinsic, 'Extrinsic is required')

    const data = mappings.marketplace.events.counterOfferAnswered(item)

    const listingId = data.listingId.substring(2)
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

    const account = await getOrCreateAccount(ctx, data.creator)
    const signer = await getOrCreateAccount(ctx, unwrapSignatureSigner(item.extrinsic.signature))

    listing.updatedAt = new Date(block.timestamp ?? 0)

    const counterOffer = await ctx.store.findOneByOrFail<CounterOffer>(CounterOffer, { id: `${listing.id}-${account.id}` })

    if (data.response.__kind === 'Counter') {
        if (signer.id !== account.id) {
            assert(signer.id === listing.seller.id, 'Only the seller can counter offer')
            counterOffer.lastAction = signer
            counterOffer.buyerPrice = data.response.value
        } else {
            counterOffer.lastAction = account
            counterOffer.sellerPrice = data.response.value
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
            response: data.response.__kind,
            account: { id: account.id },
            extrinsic: item.extrinsic.id,
            token: listing.takeAssetId.id,
        },
    })

    await Promise.all([ctx.store.save(listing)])

    return mappings.marketplace.events.counterOfferAnsweredEventModel(item, data, listing, account)
}
