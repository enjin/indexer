import { AccountTokenEvent, CounterOffer, Event as EventModel, Listing, OfferState } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { getOrCreateAccount } from '../../../util/entities'

export async function counterOfferPlaced(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const event = mappings.marketplace.events.counterOfferPlaced(item)
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
    const accountId =
        event.counterOffer.deposit != undefined ? event.counterOffer.deposit.depositor : event.counterOffer.accountId
    const buyerPrice = event.counterOffer.price != undefined ? event.counterOffer.price : event.counterOffer.buyerPrice
    const depositAmount = event.counterOffer.deposit != undefined ? event.counterOffer.deposit.amount : 1n
    const sellerPrice = event.counterOffer.sellerPrice != undefined ? event.counterOffer.sellerPrice : 1n
    const account = await getOrCreateAccount(ctx, accountId)

    const offer = new CounterOffer({
        id: `${listing.id}-${account.id}`,
        listing,
        buyerPrice,
        amount: depositAmount,
        sellerPrice,
        account,
        createdAt: new Date(block.timestamp ?? 0),
        lastAction: account,
    })

    listing.updatedAt = new Date(block.timestamp ?? 0)
    listing.state = new OfferState({
        listingType: listing.state.listingType,
        counterOfferCount: listing.state.counterOfferCount + 1,
    })

    await ctx.store.save(offer)
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
                buyerPrice: buyerPrice?.toString(),
                amount: depositAmount.toString(),
                sellerPrice: sellerPrice.toString(),
                account: { id: account.id },
                extrinsic: item.extrinsic.id,
                token: takeAssetId.id,
            },
        })
    }

    return mappings.marketplace.events.counterOfferPlacedEventModel(
        item,
        event,
        listing,
        account,
        takeAssetId.collection,
        takeAssetId
    )
}
