import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import {
    Event,
    StakeExchangeLiquidityAdded,
    StakeExchangeLiquidityWithdrawn,
    StakeExchangeOffer,
    StakeExchangeOfferCreated,
} from '~/model'
import { In } from 'typeorm'

export async function syncStakeOffers(job: Job): Promise<void> {
    const em = await connectionManager()

    const stakeExchangeOffers = await em.find(StakeExchangeOffer, {
        select: ['id', 'offerId', 'amount'],
    })

    await job.log(`Found ${stakeExchangeOffers.length} stake exchange offers`)

    const promises: Promise<any>[] = []

    const offerEvents = await em.find(Event, {
        where: {
            name: In([
                StakeExchangeOfferCreated.name,
                StakeExchangeLiquidityAdded.name,
                StakeExchangeLiquidityWithdrawn.name,
            ]),
        },
        order: {
            id: 'ASC',
        },
    })

    for (const stakeExchangeOffer of stakeExchangeOffers) {
        const offerIdEvents = offerEvents.filter(
            // @ts-ignore
            (offerEvent) => offerEvent.data?.offerId === stakeExchangeOffer.offerId
        )
        await job.log(`Found ${offerIdEvents.length} offer events for stake exchange offer ${stakeExchangeOffer.offerId}`)
        stakeExchangeOffer.amount = 0n

        for (const offerEvent of offerIdEvents) {
            if (offerEvent.data?.isTypeOf === StakeExchangeOfferCreated.name) {
                stakeExchangeOffer.amount = (offerEvent.data as StakeExchangeOfferCreated).total
            }

            if (offerEvent.data?.isTypeOf === StakeExchangeLiquidityAdded.name && stakeExchangeOffer.amount) {
                stakeExchangeOffer.amount += (offerEvent.data as StakeExchangeLiquidityAdded).amount
            }

            if (offerEvent.data?.isTypeOf === StakeExchangeLiquidityWithdrawn.name && stakeExchangeOffer.amount) {
                stakeExchangeOffer.amount -= (offerEvent.data as StakeExchangeLiquidityWithdrawn).amount
            }
        }

        promises.push(em.save(stakeExchangeOffer))
    }

    await Promise.all(promises)

    await job.log(`Synced ${stakeExchangeOffers.length} stake exchange offers`)
}
