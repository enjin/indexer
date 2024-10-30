import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceCounterOfferAnswered,
    CounterOfferResponse,
    Token,
    CounterOfferResponseAccept,
    CounterOfferResponseType,
    CounterOfferResponseCounter,
    CounterOfferResponseReject,
    ListingType,
    CounterOffer,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Sns } from '../../../common/sns'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.marketplace.counterOfferAnswered.matrixEnjinV1012.is(event)) {
        return events.marketplace.counterOfferAnswered.matrixEnjinV1012.decode(event)
    }

    if (events.marketplace.counterOfferAnswered.v1011.is(event)) {
        return events.marketplace.counterOfferAnswered.v1011.decode(event)
    }
    throw new UnknownVersionError(events.marketplace.counterOfferAnswered.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing,
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    let response: CounterOfferResponse

    switch (data.response.__kind) {
        case 'Accept':
            response = new CounterOfferResponseAccept({ kind: CounterOfferResponseType.Accept })
            break
        case 'Counter':
            response = new CounterOfferResponseCounter({ kind: CounterOfferResponseType.Counter, value: data.response.value })
            break
        case 'Reject':
            response = new CounterOfferResponseReject({ kind: CounterOfferResponseType.Reject })
            break
        default:
            throw new Error('Unknown offer response type')
    }

    const event = new EventModel({
        id: item.id,
        name: MarketplaceCounterOfferAnswered.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.takeAssetId.collection.id,
        tokenId: listing.takeAssetId.id,
        data: new MarketplaceCounterOfferAnswered({
            listing: listing.id,
            creator: account.id,
            response,
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

export async function counterOfferAnswered(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    const listingId = data.listingId.substring(2)
    const listing = await ctx.store.findOneOrFail(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            takeAssetId: {
                collection: true,
                bestListing: true,
            },
        },
    })

    const account = await getOrCreateAccount(ctx, data.creator)
    assert(listing.state.listingType === ListingType.Offer, 'Listing is not an offer')
    listing.updatedAt = new Date(block.timestamp ?? 0)

    const counterOffer = await ctx.store.findOneByOrFail(CounterOffer, { id: `${listing.id}-${account.id}` })

    if (data.response.__kind === 'Counter') {
        counterOffer.buyerPrice = data.response.value
        counterOffer.sellerPrice = data.response.value

        await ctx.store.save(counterOffer)
    }

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
                lastAction: account.id,
                buyerPrice: counterOffer.buyerPrice?.toString(),
                sellerPrice: counterOffer.sellerPrice?.toString(),
                response: data.response.__kind,
                account: { id: account.id },
                extrinsic: item.extrinsic.id,
                token: listing.takeAssetId.id,
            },
        })
    }

    await Promise.all([ctx.store.save(listing)])

    return getEvent(item, data, listing, account)
}
