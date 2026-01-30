import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import { AccountTokenEvent, Listing, MarketplaceOfferCancelled, MarketplaceOfferCreated } from '~/model'

export async function syncOffers(job: Job): Promise<void> {
    const em = await connectionManager()
    
    await job.updateProgress(10)
    
    const accountTokenEvents = await em.find(AccountTokenEvent, {
        select: ['id', 'event'],
        where: [
            {
                event: {
                    name: MarketplaceOfferCreated.name,
                },
            },
            {
                event: {
                    name: MarketplaceOfferCancelled.name,
                },
            },
        ],
        relations: {
            event: true,
        },
    })

    await job.updateProgress(30)

    const promises: Promise<any>[] = []
    const totalEvents = accountTokenEvents.length
    let processed = 0

    for (const accountEvent of accountTokenEvents) {
        const { event } = accountEvent

        if (
            event &&
            (event.data instanceof MarketplaceOfferCreated || event.data instanceof MarketplaceOfferCancelled)
        ) {
            const listingId = event.data.listing

            const listing = await em.findOne(Listing, {
                select: ['id', 'takeAssetId'],
                where: { id: listingId },
                relations: {
                    takeAssetId: {
                        collection: true,
                    },
                },
            })
            if (!listing) {
                continue
            }

            accountEvent.collection = listing.takeAssetId.collection
            accountEvent.token = listing.takeAssetId
            event.collectionId = listing.takeAssetId.collection.id
            event.tokenId = listing.takeAssetId.id

            promises.push(em.save(accountEvent))
            promises.push(em.save(event))
        }
        
        processed++
        // Update progress every 10 items (30% -> 80%)
        if (processed % 10 === 0) {
            const progress = Math.min(80, 30 + Math.floor((processed / totalEvents) * 50))
            await job.updateProgress(progress)
        }
    }

    await Promise.all(promises)

    await job.log(`Computed ${accountTokenEvents.length} offers, ${promises.length} events`)
    await job.updateProgress(100)
}
