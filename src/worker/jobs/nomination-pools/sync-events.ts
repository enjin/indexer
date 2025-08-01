import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import {
    Event,
    StakeExchangeBuyOrderCompleted,
    StakeExchangeLiquidityAdded,
    StakeExchangeLiquidityWithdrawn,
    StakeExchangeOfferCancelled,
    StakeExchangeOfferCompleted,
    StakeExchangeOfferCreated,
} from '~/model'
import { In } from 'typeorm'

export async function syncEvents(job: Job): Promise<void> {
    const em = await connectionManager()

    await job.log('Syncing events...')

    const events = await em.find(Event, {
        where: [
            { name: StakeExchangeBuyOrderCompleted.name },
            { name: StakeExchangeLiquidityWithdrawn.name },
            { name: StakeExchangeLiquidityAdded.name },
            { name: StakeExchangeOfferCancelled.name },
            { name: StakeExchangeOfferCompleted.name },
            { name: StakeExchangeOfferCreated.name },
        ],
    })

    await job.log(`Found ${events.length} events to sync`)

    let syncedCount = 0

    for (const event of events) {
        const data = event.data as
            | StakeExchangeOfferCreated
            | StakeExchangeOfferCancelled
            | StakeExchangeLiquidityWithdrawn
            | StakeExchangeLiquidityAdded
            | StakeExchangeBuyOrderCompleted
            | StakeExchangeOfferCompleted

        if (data.offerId) {
            data.offer = data.offerId.toString()
            event.data = data
            await em.save(event)
            syncedCount++
        }
    }

    await job.log(`Synced ${syncedCount} events`)
}
