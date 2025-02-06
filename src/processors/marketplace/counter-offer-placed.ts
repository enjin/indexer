import assert from 'assert'
import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import {
    Account,
    AccountTokenEvent,
    CounterOffer,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceCounterOfferPlaced,
    OfferState,
    Token,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

function getEventData(event: EventItem) {
    if (events.marketplace.counterOfferPlaced.matrixEnjinV1012.is(event)) {
        return events.marketplace.counterOfferPlaced.matrixEnjinV1012.decode(event)
    }

    if (events.marketplace.counterOfferPlaced.v1010.is(event)) {
        return events.marketplace.counterOfferPlaced.v1010.decode(event)
    }

    if (events.marketplace.counterOfferPlaced.v1011.is(event)) {
        return events.marketplace.counterOfferPlaced.v1011.decode(event)
    }

    throw new UnsupportedEventError(events.marketplace.counterOfferPlaced.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing,
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceCounterOfferPlaced.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.takeAssetId.collection.id,
        tokenId: listing.takeAssetId.id,
        data: new MarketplaceCounterOfferPlaced({
            listing: listing.id,
            accountId: 'deposit' in data.counterOffer ? data.counterOffer.deposit.depositor : data.counterOffer.accountId,
            buyerPrice: 'price' in data.counterOffer ? data.counterOffer.price : data.counterOffer.buyerPrice,
            depositAmount: 'deposit' in data.counterOffer ? data.counterOffer.deposit.amount : 1n,
            sellerPrice: 'sellerPrice' in data.counterOffer ? data.counterOffer.sellerPrice : 1n,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: listing.takeAssetId.id }),
            from: account,
            event,
        }),
    ]
}

export async function counterOfferPlaced(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

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

    return getEvent(item, data, listing, account)
}
