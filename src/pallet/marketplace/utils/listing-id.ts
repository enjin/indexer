export function normalizeListingId(listingId: string): string {
    return listingId.startsWith('0x') ? listingId.slice(2) : listingId
}
