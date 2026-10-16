import { connectionManager } from '~/contexts'
import { AuctionState, Listing, ListingType } from '~/model'
import { Brackets } from 'typeorm'
import { Job } from 'bullmq'
import { rebuildOfferState } from '~/pallet/marketplace/utils/listing-state'
import { QueueUtils } from '~/queue'
import { notExpiredListingSql } from '~/util/listing-availability'

/**
 * Whether an active listing is past the block it can be traded in: an auction stops taking bids at its end block
 * and an offer stops being fillable at its expiration block (both half-open on chain).
 */
export function hasLapsed(listing: Pick<Listing, 'data'>, height: number): boolean {
    if (listing.data.isTypeOf === 'AuctionData') {
        return listing.data.endHeight > 0 && listing.data.endHeight <= height
    }
    if (listing.data.isTypeOf === 'OfferData') {
        return listing.data.expiration != null && listing.data.expiration <= height
    }
    return false
}

/**
 * Flags lapsed listings as expired and nothing else. Removing them is the chain's job: the on_idle sweep settles due
 * auctions and offers and emits AuctionFinalized, ExpiredListingRemoved or ListingCancelled, whose processors write
 * the terminal status, deactivate the listing and take it off the book. Writing a Cancelled status here would
 * misreport auctions that are about to be finalized with a winner, and could overwrite the status those events write
 * under the same `${listingId}-${height}` id.
 */
export function markExpired(listing: Listing): boolean {
    if (listing.state.isTypeOf === 'AuctionState') {
        if (listing.state.isExpired === true) return false
        listing.state = new AuctionState({
            listingType: ListingType.Auction,
            highBid: listing.state.highBid,
            isExpired: true,
        })
        return true
    }
    if (listing.state.isTypeOf === 'OfferState') {
        if (listing.state.isExpired === true) return false
        listing.state = rebuildOfferState(listing.amount, listing.state, { isExpired: true })
        return true
    }
    return false
}

/**
 * Flags every lapsed listing in `listings` as expired and returns the expired listings plus the tokens whose cached
 * best listing may have pointed at one of them. Only auctions sell the token they make, so offers (which make the
 * currency) never feed a token's best listing.
 */
export function expireLapsedListings(
    listings: Listing[],
    height: number
): { expired: Listing[]; bestListingTokenIds: Set<string> } {
    const expired: Listing[] = []
    const bestListingTokenIds = new Set<string>()
    for (const listing of listings) {
        if (!hasLapsed(listing, height) || !markExpired(listing)) continue
        expired.push(listing)
        if (listing.type === ListingType.Auction && listing.makeAssetId?.id) {
            bestListingTokenIds.add(listing.makeAssetId.id)
        }
    }
    return { expired, bestListingTokenIds }
}

export async function computeListings(_job: Job) {
    const con = await connectionManager()

    await _job.updateProgress(10)

    let bestListingTokenIds = new Set<string>()

    await con.transaction('READ COMMITTED', async (em) => {
        const status: { height: number }[] = await em.query(`SELECT height FROM squid_processor.status WHERE id = 0`)

        await _job.updateProgress(20)

        if (status.length === 0) {
            await _job.updateProgress(100)
            return
        }

        const { height } = status[0]

        // Only listings still live on chain: finalized, filled, cancelled and removed ones are inactive.
        const candidates = await em
            .getRepository(Listing)
            .createQueryBuilder('listing')
            .leftJoin('listing.makeAssetId', 'makeAsset')
            .addSelect('makeAsset.id')
            .where('listing.isActive = true')
            .andWhere(
                new Brackets((qb) => {
                    qb.where(
                        "listing.type = :auctionType AND (listing.data->>'endHeight')::int <= :height AND (listing.data->>'endHeight')::int > 0",
                        { auctionType: ListingType.Auction, height }
                    ).orWhere("listing.type = :offerType AND (listing.data->>'expiration')::int <= :height", {
                        offerType: ListingType.Offer,
                        height,
                    })
                })
            )
            .andWhere(notExpiredListingSql('listing.state'))
            .getMany()

        await _job.updateProgress(60)

        const now = new Date()
        const result = expireLapsedListings(candidates, height)
        for (const listing of result.expired) {
            listing.updatedAt = now
            await em.save(listing)
        }
        bestListingTokenIds = result.bestListingTokenIds

        await _job.log(`Marked ${result.expired.length} listings as expired (height: ${height})`)
        await _job.updateProgress(90)
    })

    // Expired listings no longer qualify as a token's best listing, so recompute the cached price once committed.
    await Promise.all(Array.from(bestListingTokenIds, (id) => QueueUtils.dispatchComputeTokenBestListing(id)))

    await _job.updateProgress(100)
}
