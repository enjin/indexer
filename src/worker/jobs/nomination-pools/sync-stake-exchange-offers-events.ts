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
        select: ['id', 'data', 'name'],
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
        if (
            event.data &&
            (event.data instanceof StakeExchangeOfferCancelled ||
                event.data instanceof StakeExchangeOfferCreated ||
                event.data instanceof StakeExchangeOfferCompleted ||
                event.data instanceof StakeExchangeBuyOrderCompleted)
        ) {
            const offer: StakeExchangeOffer | null = await em.findOne(StakeExchangeOffer, {
                select: ['rate'],
                where: {
                    offerId: event.data.offerId,
                },
            })
            if (offer) {
                event.data.rate = offer.rate
                promises.push(em.save(event))
            }
        }
    }

    await Promise.all(promises)

    await job.log(`Synced stake exchange offer rates`)
}
