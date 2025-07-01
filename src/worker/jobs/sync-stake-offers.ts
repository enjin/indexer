import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import {
    AccountTokenEvent,
    Event,
    Listing,
    MarketplaceOfferCancelled,
    MarketplaceOfferCreated,
    StakeExchangeLiquidityAdded,
    StakeExchangeLiquidityWithdrawn,
    StakeExchangeOffer,
    StakeExchangeOfferCancelled,
    StakeExchangeOfferCreated,
} from '~/model'
import { In } from 'typeorm'

export async function syncStakeOffers(job: Job): Promise<void> {
    const em = await connectionManager()

    const stakeExchangeOffers = await em.find(StakeExchangeOffer, {
        select: ['id', 'offerId', 'amount'],
    })

    const promises: Promise<any>[] = []

    for (const stakeExchangeOffer of stakeExchangeOffers) {
        const offerEvents = await em.find(Event, {
            where: {
                data: {
                    offerId: stakeExchangeOffer.offerId,
                },
                name: In([
                    StakeExchangeOfferCreated.name,
                    StakeExchangeLiquidityAdded.name,
                    StakeExchangeLiquidityWithdrawn.name,
                ]),
            },
        })

        for (const offerEvent of offerEvents) {
            if (offerEvent.data instanceof StakeExchangeOfferCreated) {
                stakeExchangeOffer.amount = offerEvent.data.total
            }

            if (offerEvent.data instanceof StakeExchangeLiquidityAdded && stakeExchangeOffer.amount) {
                stakeExchangeOffer.amount += offerEvent.data.amount
            }

            if (offerEvent.data instanceof StakeExchangeLiquidityWithdrawn && stakeExchangeOffer.amount) {
                stakeExchangeOffer.amount -= offerEvent.data.amount
            }
        }

        promises.push(em.save(stakeExchangeOffer))
    }

    await Promise.all(promises)

    await job.log(`Synced ${stakeExchangeOffers.length} stake exchange offers`)
}
