import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import { Account, AccountTokenEvent, Listing, ListingType, MarketplaceOfferSettled, OfferState } from '~/model'

export async function syncOfferEvents(job: Job): Promise<void> {
    const em = await connectionManager()

    const accountTokenEvents = await em.find(AccountTokenEvent, {
        where: {
            event: {
                name: MarketplaceOfferSettled.name,
            },
        },
        relations: {
            event: true,
        },
    })

    const promises: Promise<any>[] = []

    for (const accountTokenEvent of accountTokenEvents) {
        const { event } = accountTokenEvent

        if (event?.data instanceof MarketplaceOfferSettled) {
            const listing = await em.findOneOrFail(Listing, {
                where: { id: event?.data.listing },
                relations: {
                    seller: true,
                },
            })

            accountTokenEvent.to = listing.seller
            promises.push(em.save(accountTokenEvent))
        }
    }

    await Promise.all(promises)

    await job.log(`Computed ${accountTokenEvents.length} offers, synced ${promises.length} events`)
}
