import { EraReward, NominationPool } from '~/model'
import { dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'
import { computeEraApy } from '~/pallet/nomination-pools/processors'

export async function computePoolRewards(_job: Job, id?: string): Promise<void> {
    const ctx = await dataHandlerContext()

    const pool = await ctx.store.findOne(NominationPool, {
        where: { id },
        relations: {
            eraRewards: {
                era: true,
            },
        },
        order: {
            eraRewards: {
                era: {
                    index: 'DESC',
                },
            },
        },
    })

    if (!pool) {
        throw new Error(`Pool not found: ${id}`)
    }

    const eraRewards = pool.eraRewards.slice(0, 46)

    for (const [index, eraReward] of eraRewards.entries()) {
        if (index < 30) {
            const rewardRange = eraRewards.slice(index, index + 15)
            const apy = computeEraApy(rewardRange, pool.apy).toNumber()
            eraReward.averageApy = apy
            await ctx.store.save(eraReward)
        }
    }

    pool.apy = computeEraApy(eraRewards.slice(0, 15), pool.apy).toNumber()

    await ctx.store.save(pool)

    await _job.log(`Computed rewards for ${pool.id}`)
}
