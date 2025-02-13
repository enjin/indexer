import assert from 'assert'
import { AccountTokenEvent, CounterOffer, Event as EventModel, Listing, OfferState } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import { Sns } from '../../utils/sns'
import * as mappings from './../../mappings'
import { getOrCreateAccount } from '../../utils/entities'

export async function counterOfferPlaced(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const event = mappings.marketplace.events.counterOfferPlaced(item)
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

    const accountId =
        event.counterOffer.deposit != undefined ? event.counterOffer.deposit.depositor : event.counterOffer.accountId
    const buyerPrice = event.counterOffer.price != undefined ? event.counterOffer.price : event.counterOffer.buyerPrice
    const depositAmount = event.counterOffer.deposit != undefined ? event.counterOffer.deposit.amount : 1n
    const sellerPrice = event.counterOffer.sellerPrice != undefined ? event.counterOffer.sellerPrice : 1n

    listing.updatedAt = new Date(block.timestamp ?? 0)
    const account = await getOrCreateAccount(ctx, accountId)
    assert(listing.state.isTypeOf === 'OfferState', 'Listing is not an offer')

    listing.state = new OfferState({
        listingType: listing.state.listingType,
        counterOfferCount: listing.state.counterOfferCount + 1,
    })

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
                buyerPrice: buyerPrice?.toString(),
                amount: depositAmount.toString(),
                sellerPrice: sellerPrice.toString(),
                account: { id: account.id },
                extrinsic: item.extrinsic.id,
                token: listing.takeAssetId.id,
            },
        })
    }

    await Promise.all([ctx.store.save(offer), ctx.store.save(listing)])

    return mappings.marketplace.events.counterOfferPlacedEventModel(item, event, listing, account)
}
