import { Event as EventModel, MarketplaceListingCancelled, MarketplaceOfferCancelled } from '~/model'
import { normalizeListingId } from '~/pallet/marketplace/utils/listing-id'

export function stripCancellationListingIdPrefix(event: EventModel): boolean {
    if (!(event.data instanceof MarketplaceListingCancelled || event.data instanceof MarketplaceOfferCancelled)) {
        return false
    }

    const listingId = event.data.listing
    if (!listingId?.startsWith('0x')) return false

    event.data.listing = normalizeListingId(listingId)
    return true
}
