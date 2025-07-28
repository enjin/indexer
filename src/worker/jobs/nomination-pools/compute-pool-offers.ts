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
        relations: {
            tokenFilter: true,
        },
    })

    const existingOffers: PoolsOffers[] = await em.find(PoolsOffers, {
        where: { pool: { id: pool.id } },
        relations: { offer: true },
    })

    const existingOfferIds = new Set(existingOffers.map(({ offer }: PoolsOffers): string => offer.id))

    const newPoolsOffers: PoolsOffers[] = offers
        .filter((offer: StakeExchangeOffer): boolean => !existingOfferIds.has(offer.id))
        .map((offer: StakeExchangeOffer): PoolsOffers => new PoolsOffers({ pool, offer }))

    if (newPoolsOffers.length > 0) {
        await em.save(newPoolsOffers)
    }

    await job.log(`Created ${offers} offers for pool ${poolId}`)
}
