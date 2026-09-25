import { Account, FixedPriceState, Listing, ListingType, MarketplaceListingBookState, OfferState } from '~/model'

type OfferStateSource = {
    amountFilled?: bigint
    counterOfferCount?: number
    isExpired?: boolean | null
}

type OfferStateChanges = {
    amountRemaining?: bigint
    counterOfferDelta?: number
    isExpired?: boolean
}

function clamp(value: bigint, minimum: bigint, maximum: bigint): bigint {
    return value < minimum ? minimum : value > maximum ? maximum : value
}

export function rebuildOfferState(
    amount: bigint,
    current: OfferStateSource = {},
    changes: OfferStateChanges = {}
): OfferState {
    const amountRemaining =
        changes.amountRemaining === undefined
            ? clamp(amount - (current.amountFilled ?? 0n), 0n, amount)
            : clamp(changes.amountRemaining, 0n, amount)
    const counterOfferCount = Math.max(0, (current.counterOfferCount ?? 0) + (changes.counterOfferDelta ?? 0))

    return new OfferState({
        listingType: ListingType.Offer,
        counterOfferCount,
        amountFilled: amount - amountRemaining,
        amountRemaining,
        isExpired: changes.isExpired ?? current.isExpired ?? false,
    })
}

export function rebuildFixedPriceState(amount: bigint, amountRemaining: bigint): FixedPriceState {
    const remaining = clamp(amountRemaining, 0n, amount)
    return new FixedPriceState({
        listingType: ListingType.FixedPrice,
        amountFilled: amount - remaining,
        amountRemaining: remaining,
    })
}

export function listingFillParties(
    listingType: ListingType,
    listingCreator: Account,
    filler: Account
): { buyer: Account; seller: Account } {
    return listingType === ListingType.Offer
        ? { buyer: listingCreator, seller: filler }
        : { buyer: filler, seller: listingCreator }
}

export function initialBookState(
    supportsOrderBook: boolean,
    listingType: ListingType,
    usesWhitelist: boolean,
    explicitStartBlock: number | undefined,
    blockHeight: number
): MarketplaceListingBookState {
    if (!supportsOrderBook) return MarketplaceListingBookState.Unknown
    if (listingType === ListingType.Auction || usesWhitelist) return MarketplaceListingBookState.Ineligible
    if (explicitStartBlock !== undefined && explicitStartBlock > blockHeight) {
        return MarketplaceListingBookState.PendingActivation
    }
    return MarketplaceListingBookState.Indexed
}

export function migratedBookState(listing: Listing, blockHeight: number): MarketplaceListingBookState {
    if (listing.type === ListingType.Auction || listing.usesWhitelist) {
        return MarketplaceListingBookState.Ineligible
    }
    if (
        listing.data.isTypeOf === 'OfferData' &&
        listing.data.expiration !== undefined &&
        listing.data.expiration !== null &&
        listing.data.expiration <= blockHeight
    ) {
        return MarketplaceListingBookState.Ineligible
    }
    if (listing.startBlock !== undefined && listing.startBlock !== null && listing.startBlock > blockHeight) {
        return MarketplaceListingBookState.PendingActivation
    }
    return MarketplaceListingBookState.Indexed
}
