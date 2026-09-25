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
    const priceMultiplier = Big(10).pow(priceAsset.nativeMetadata?.decimalCount ?? 0)
    const tokenDivisor = Big(10).pow(tokenAsset.nativeMetadata?.decimalCount ?? 0)

    // Preserve the established SNS contract: for offers, seller is still the offer maker and buyer is the filler.
    return {
        id: item.id,
        name: item.name,
        body: {
            listing: {
                id: listing.id,
                price: Big(listing.price.toString()).mul(priceMultiplier).toFixed(),
                amount: Big(listing.amount.toString()).div(tokenDivisor).toFixed(),
                highestPrice: Big(listing.highestPrice.toString()).mul(priceMultiplier).toFixed(),
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
