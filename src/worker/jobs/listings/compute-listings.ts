import { connectionManager } from '~/contexts'
import {
    AuctionState,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    OfferState,
} from '~/model'
import { Brackets } from 'typeorm'
import { Job } from 'bullmq'

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

        // Listings that already have a Cancelled status – we skip them
        const cancelledStatuses = await em.getRepository(ListingStatus).find({
            where: { type: ListingStatusType.Cancelled },
            relations: { listing: true },
        })
        const cancelledListingIds = [...new Set(cancelledStatuses.map((s) => s.listing.id))]

        await _job.updateProgress(40)

        const qb = em
            .getRepository(Listing)
            .createQueryBuilder('listing')
            .where('listing.type IN (:...types)', { types: [ListingType.Auction, ListingType.Offer] })
            .andWhere(
                new Brackets((qb) => {
                    qb.where("listing.type = :auctionType AND (listing.data->>'endHeight')::int < :height AND (listing.data->>'endHeight')::int > 0", {
                        auctionType: ListingType.Auction,
                        height,
                    }).orWhere("listing.type = :offerType AND (listing.data->>'expiration')::int < :height", {
                        offerType: ListingType.Offer,
                        height,
                    })
                })
            )

        if (cancelledListingIds.length > 0) {
            qb.andWhere('listing.id NOT IN (:...cancelledIds)', { cancelledIds: cancelledListingIds })
        }

        const expiredListings = await qb.getMany()

        await _job.updateProgress(60)

        const now = new Date()
        let processed = 0

        for (const listing of expiredListings) {
            if (listing.data.isTypeOf === 'AuctionData') {
                const auctionData = listing.data
                if (
                    auctionData.endHeight < height &&
                    auctionData.endHeight > 0 &&
                    listing.state.isTypeOf === 'AuctionState' &&
                    (listing.state.isExpired === false || listing.state.isExpired === undefined)
                ) {
                    const highBid = listing.state.highBid
                    listing.state = new AuctionState({
                        listingType: ListingType.Auction,
                        highBid,
                        isExpired: true,
                    })
                    const listingStatus = new ListingStatus({
                        id: `${listing.id}-${height}`,
                        type: ListingStatusType.Cancelled,
                        listing,
                        height,
                        createdAt: now,
                    })
                    listing.isActive = false
                    listing.updatedAt = now
                    await em.save(listingStatus)
                    await em.save(listing)
                    processed++
                }
            }

            if (listing.data.isTypeOf === 'OfferData') {
                const offerData = listing.data
                if (
                    listing.state.isTypeOf === 'OfferState' &&
                    ((offerData.expiration != null && offerData.expiration < height) || listing.state.isExpired === true)
                ) {
                    listing.state = new OfferState({
                        listingType: ListingType.Offer,
                        counterOfferCount: listing.state.counterOfferCount,
                        isExpired: true,
                    })
                    const listingStatus = new ListingStatus({
                        id: `${listing.id}-${height}`,
                        type: ListingStatusType.Cancelled,
                        listing,
                        height,
                        createdAt: now,
                    })
                    listing.isActive = false
                    listing.updatedAt = now
                    await em.save(listingStatus)
                    await em.save(listing)
                    processed++
                }
            }
        }

        await _job.log(`Expired ${processed} listings (height: ${height})`)
        await _job.updateProgress(90)
    })

    await _job.updateProgress(100)
}
