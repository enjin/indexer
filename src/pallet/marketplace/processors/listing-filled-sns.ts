import Big from 'big.js'
import { Listing, ListingType, Token } from '~/model'
import { EventItem } from '~/contexts'
import { ListingFilled } from '~/pallet/marketplace/events'
import { SnsEvent } from '~/util/sns'

export function listingFilledSnsEvent(
    item: EventItem,
    event: ListingFilled,
    listing: Listing,
    makeAssetId: Token,
    takeAssetId: Token
): SnsEvent {
    const isOffer = listing.type === ListingType.Offer
    const tokenAsset = isOffer ? takeAssetId : makeAssetId
    const priceAsset = isOffer ? makeAssetId : takeAssetId

    // Preserve the established SNS contract: for offers, seller is still the offer maker and buyer is the filler.
    return {
        id: item.id,
        name: item.name,
        body: {
            listing: {
                id: listing.id,
                price: Big(listing.price.toString())
                    .mul(10 ** (priceAsset.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                amount: Big(listing.amount.toString())
                    .div(10 ** (tokenAsset.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                highestPrice: Big(listing.highestPrice.toString())
                    .mul(10 ** (priceAsset.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                seller: {
                    id: listing.seller.id,
                },
                type: listing.type.toString(),
                data: listing.data.toJSON(),
                state: listing.state.toJSON(),
            },
            token: tokenAsset.id,
            buyer: {
                id: event.buyer,
            },
            amountFilled: event.amountFilled,
            price: 'price' in event ? event.price : listing.highestPrice,
            amountRemaining: event.amountRemaining,
            protocolFee: event.protocolFee,
            royalty: event.royalty,
            decimalCount: tokenAsset.nativeMetadata?.decimalCount,
            extrinsic: item.extrinsic?.id,
        },
    }
}
