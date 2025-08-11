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
            state: {
                counterOfferCount: MoreThan(0),
            },
            isActive: true,
        },
    })

    const promises: Promise<any>[] = []

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
