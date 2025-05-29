import { AccountTokenEvent, CounterOffer, Event as EventModel, Listing, Token } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { getOrCreateAccount, unwrapSigner } from '../../../util/entities'

export async function counterOfferAnswered(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const event = mappings.marketplace.events.counterOfferAnswered(item)
    const listingId = event.listingId.substring(2)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
    })
    if (!listing || !item.extrinsic) return undefined

    const creator = await getOrCreateAccount(ctx, event.creator)
    const signer = await getOrCreateAccount(ctx, unwrapSigner(item.extrinsic))

    const takeAssetId = await ctx.store.findOne<Token>(Token, {
        where: { id: listing.takeAssetId.id },
        relations: {
            collection: true,
        },
    })
    if (!takeAssetId) return undefined

    const counterOffer = await ctx.store.findOneBy<CounterOffer>(CounterOffer, {
        id: `${listing.id}-${creator.id}`,
    })
    if (!counterOffer) return undefined

    if (event.response != undefined && event.response.__kind === 'Counter') {
        if (signer.id !== creator.id) {
            counterOffer.lastAction = signer
            counterOffer.buyerPrice = event.response.value
        } else {
            counterOffer.lastAction = creator
            counterOffer.sellerPrice = event.response.value
        }

        await ctx.store.save(counterOffer)
    }

    listing.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(listing)

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
                    id: creator.id,
                },
                data: listing.data.toJSON(),
                state: listing.state.toJSON(),
                type: listing.type.toString(),
                takeAssetId: takeAssetId.id,
            },
            lastAction: counterOffer.lastAction,
            buyerPrice: counterOffer.buyerPrice?.toString(),
            sellerPrice: counterOffer.sellerPrice?.toString(),
            response: event.response != undefined ? event.response.__kind : null,
            account: { id: creator.id },
            extrinsic: item.extrinsic.id,
            token: takeAssetId.id,
        },
    })

    return mappings.marketplace.events.counterOfferAnsweredEventModel(
        item,
        event,
        listing,
        creator,
        takeAssetId.collection,
        takeAssetId
    )
}
