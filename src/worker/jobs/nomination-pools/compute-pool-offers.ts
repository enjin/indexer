import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import {
    NominationPool,
    PoolsOffers,
    StakeExchangeOffer,
    StakeExchangeOfferState,
    StakeExchangeTokenFilterType,
} from '~/model'
import { EntityManager } from 'typeorm'

export async function computePoolOffers(job: Job, poolId: string): Promise<void> {
    const em: EntityManager = await connectionManager()

    const pool: NominationPool = await em.findOneByOrFail<NominationPool>(NominationPool, { id: poolId })

    const offers: StakeExchangeOffer[] = await em.find(StakeExchangeOffer, {
        where: {
            state: StakeExchangeOfferState.Active,
            tokenFilter: {
                type: StakeExchangeTokenFilterType.All,
            },
        },
    })

    for (const offer of offers) {
        const poolsOffers = new PoolsOffers({
            offer,
            pool,
        })
        await em.save(poolsOffers)
    }

    await job.log(`Created ${offers} offers for pool ${poolId}`)
}
