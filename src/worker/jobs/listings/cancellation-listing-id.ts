import { Event as EventModel, MarketplaceListingCancelled, MarketplaceOfferCancelled } from '~/model'

export function stripCancellationListingIdPrefix(event: EventModel): boolean {
    if (!(event.data instanceof MarketplaceListingCancelled || event.data instanceof MarketplaceOfferCancelled)) {
        return false
    }

    const listingId = event.data.listing
    if (!listingId?.startsWith('0x')) return false

    event.data.listing = listingId.substring(2)
    return true
}
