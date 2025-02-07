import assert from 'assert'
import { AccountTokenEvent, CounterOffer, Event as EventModel, Listing, OfferState } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { getOrCreateAccount } from '../../common/util/entities'

export async function counterOfferPlaced(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = mappings.marketplace.events.counterOfferPlaced(item)

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

    const accountId = 'deposit' in data.counterOffer ? data.counterOffer.deposit.depositor : data.counterOffer.accountId
    const buyerPrice = 'price' in data.counterOffer ? data.counterOffer.price : data.counterOffer.buyerPrice
    const depositAmount = 'deposit' in data.counterOffer ? data.counterOffer.deposit.amount : 1n
    const sellerPrice = 'sellerPrice' in data.counterOffer ? data.counterOffer.sellerPrice : 1n

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

    return mappings.marketplace.events.counterOfferPlacedEventModel(item, data, listing, account)
}
