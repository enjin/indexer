import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    FixedPriceState,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingFilled,
    MarketplaceOfferSettled,
    Token,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getBestListing } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.listingFilled.enjinV1032.is(event)) {
        return events.marketplace.listingFilled.enjinV1032.decode(event)
    }

    if (events.marketplace.listingFilled.enjinV110.is(event)) {
        return events.marketplace.listingFilled.enjinV110.decode(event)
    }

    if (events.marketplace.listingFilled.v1031.is(event)) {
        return events.marketplace.listingFilled.v1031.decode(event)
    }

    if (events.marketplace.listingFilled.v110.is(event)) {
        return events.marketplace.listingFilled.v110.decode(event)
    }

    throw new UnknownVersionError(events.marketplace.listingFilled.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing
): [EventModel, AccountTokenEvent] | undefined {
    let event: EventModel

    event = new EventModel({
        id: item.id,
        name: MarketplaceListingFilled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceListingFilled({
            listing: listing.id,
            buyer: data.buyer,
            amountFilled: data.amountFilled,
            amountRemaining: data.amountRemaining,
            price: 'price' in data ? (data.price as bigint) : listing.highestPrice,
            protocolFee: data.protocolFee,
            royalty: data.royalty,
        }),
    })

    if (listing.data.listingType === ListingType.Offer) {
        event = new EventModel({
            id: item.id,
            name: MarketplaceOfferSettled.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: listing.takeAssetId.collection.id,
            tokenId: listing.takeAssetId.id,
            data: new MarketplaceOfferSettled({
                listing: listing.id,
                buyer: data.buyer,
                amount: data.amountFilled,
                price: 'price' in data ? (data.price as bigint) : listing.highestPrice,
            }),
        })
    }

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: event.tokenId! }),
            from: listing.seller,
            to: new Account({ id: data.buyer }),
            event,
        }),
    ]
}
