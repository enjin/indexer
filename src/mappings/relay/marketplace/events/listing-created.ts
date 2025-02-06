import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    AuctionData,
    AuctionState,
    Event as EventModel,
    Extrinsic,
    FeeSide,
    FixedPriceData,
    FixedPriceState,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingCreated,
    MarketplaceOfferCreated,
    OfferData,
    OfferState,
    Token,
    TokenAccount,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.listingCreated.enjinV1032.is(event)) {
        return events.marketplace.listingCreated.enjinV1032.decode(event)
    }

    if (events.marketplace.listingCreated.enjinV110.is(event)) {
        return events.marketplace.listingCreated.enjinV110.decode(event)
    }

    if (events.marketplace.listingCreated.v1050.is(event)) {
        return events.marketplace.listingCreated.v1050.decode(event)
    }

    if (events.marketplace.listingCreated.v1031.is(event)) {
        return events.marketplace.listingCreated.v1031.decode(event)
    }

    if (events.marketplace.listingCreated.v1030.is(event)) {
        return events.marketplace.listingCreated.v1030.decode(event)
    }

    if (events.marketplace.listingCreated.v110.is(event)) {
        return events.marketplace.listingCreated.v110.decode(event)
    }

    throw new UnknownVersionError(events.marketplace.listingCreated.name)
}

async function getEvent(
    ctx: CommonContext,
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    let event: EventModel

    event = new EventModel({
        id: item.id,
        name: MarketplaceListingCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.listing.makeAssetId.collectionId.toString(),
        tokenId: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}`,
        data: new MarketplaceListingCreated({
            listing: data.listingId.substring(2),
        }),
    })

    if (data.listing.data.__kind === ListingType.Offer) {
        event = new EventModel({
            id: item.id,
            name: MarketplaceOfferCreated.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.listing.takeAssetId.collectionId.toString(),
            tokenId: `${data.listing.takeAssetId.collectionId}-${data.listing.takeAssetId.tokenId}`,
            data: new MarketplaceOfferCreated({
                listing: data.listingId.substring(2),
            }),
        })
    }

    let to = null
    if (data.listing.data.__kind === 'Offer' && listing.takeAssetId.nonFungible) {
        const tokenOwner = await ctx.store.findOne(TokenAccount, { where: { token: { id: listing.takeAssetId.id } } })
        if (tokenOwner) {
            to = tokenOwner.account
        }
    }

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: event.tokenId! }),
            from: new Account({ id: 'creator' in data.listing ? data.listing.creator : data.listing.seller }),
            to,
            event,
        }),
    ]
}
