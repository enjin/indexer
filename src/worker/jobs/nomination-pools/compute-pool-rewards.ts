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
                    index: 'ASC',
                },
            },
        },
    })

    if (!pool) {
        throw new Error(`Pool not found: ${id}`)
    }

    const eraRewards = pool.eraRewards
    let poolApy = eraRewards[15].averageApy

    for (const [index, eraReward] of eraRewards.entries()) {
        if (index > 15) {
            poolApy = eraRewards[index - 1].averageApy
            const rewardRange = eraRewards.slice(index - 15, index)
            const apy = computeEraApy(rewardRange, poolApy).toNumber()
            eraReward.averageApy = apy
            poolApy = apy
            await ctx.store.save(eraReward)
        }
    }

    pool.apy = poolApy

    await ctx.store.save(pool)

    await _job.log(`Computed rewards for ${pool.id}`)
}
