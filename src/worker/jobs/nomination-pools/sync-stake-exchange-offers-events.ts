import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import {
    Event,
    StakeExchangeBuyOrderCompleted,
    StakeExchangeOffer,
    StakeExchangeOfferCancelled,
    StakeExchangeOfferCompleted,
    StakeExchangeOfferCreated,
} from '~/model'
import { EntityManager, In } from 'typeorm'

export async function syncStakeExchangeOffersEvents(job: Job): Promise<void> {
    const em: EntityManager = await connectionManager()
    const promises: Promise<any>[] = []

    const events: Event[] = await em.find(Event, {
        select: ['data', 'name'],
        where: {
            name: In([
                StakeExchangeOfferCancelled.name,
                StakeExchangeOfferCompleted.name,
                StakeExchangeOfferCreated.name,
                StakeExchangeBuyOrderCompleted.name,
            ]),
        },
    })

    for (const event of events) {
        if (event.data && typeof event.data === 'object') {
            const data = event.data as Record<string, any>

            const offer: StakeExchangeOffer | null = await em.findOne(StakeExchangeOffer, {
                select: ['rate'],
                where: {
                    offerId: data.offerId,
                },
            })

            if (offer) {
                data.rate = offer.rate

                promises.push(em.save(Event, { ...offer, data }))
            }
        }
    }

    await Promise.all(promises)

    await job.log(`Synced stake exchange offer rates`)
}
