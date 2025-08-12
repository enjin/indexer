import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import {
    AccountTokenEvent,
    Listing,
    ListingType,
    MarketplaceOfferCancelled,
    MarketplaceOfferCreated,
    OfferState,
} from '~/model'
import { MoreThan } from 'typeorm'

export async function syncCounterOffers(job: Job): Promise<void> {
    const em = await connectionManager()

    const listings = await em.find(Listing, {
        where: {
            type: ListingType.Offer,
            isActive: true,
        },
    })

    const promises: Promise<any>[] = []

    await job.log(`Syncing ${listings.length} counter offers`)

    for (const listing of listings) {
        listing.state = new OfferState({
            listingType: ListingType.Offer,
            counterOfferCount: (listing.state as OfferState).counterOfferCount,
            isExpired: false,
        })

        promises.push(em.save(listing))
    }

    await Promise.all(promises)

    await job.log(`Computed ${listings.length} offers, ${promises.length} listings`)
}
