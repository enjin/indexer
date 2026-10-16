import { connectionManager } from '~/contexts'
import { AuctionState, Listing, ListingType } from '~/model'
import { Brackets } from 'typeorm'
import { Job } from 'bullmq'
import { rebuildOfferState } from '~/pallet/marketplace/utils/listing-state'

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

export async function computeListings(_job: Job) {
    const con = await connectionManager()

    await _job.updateProgress(10)

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
            .andWhere("COALESCE((listing.state->>'isExpired')::boolean, false) = false")
            .getMany()

        await _job.updateProgress(60)

        const now = new Date()
        let processed = 0

        for (const listing of candidates) {
            if (!hasLapsed(listing, height) || !markExpired(listing)) continue
            listing.updatedAt = now
            await em.save(listing)
            processed++
        }

        await _job.log(`Marked ${processed} listings as expired (height: ${height})`)
        await _job.updateProgress(90)
    })

    await _job.updateProgress(100)
}
