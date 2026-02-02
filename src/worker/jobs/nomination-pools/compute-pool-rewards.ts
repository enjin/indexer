import { NominationPool } from '~/model'
import { dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'
import { computeEraApy } from '~/pallet/nomination-pools/processors'

export async function computePoolRewards(_job: Job, id?: string): Promise<void> {
    const ctx = await dataHandlerContext()

    await _job.updateProgress(10)

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

    await _job.updateProgress(30)

    if (!pool) {
        throw new Error(`Pool not found: ${id}`)
    }

    const eraRewards = pool.eraRewards
    let poolApy = 0

    await _job.updateProgress(40)

    const totalRewards = eraRewards.length
    let processed = 0

    for (const [index, eraReward] of eraRewards.entries()) {
        if (index > 30) {
            poolApy = eraRewards[index - 1].averageApy
            const rewardRange = eraRewards.slice(index - 30, index)
            const apy = computeEraApy(rewardRange, poolApy)
            eraReward.averageApy = apy.toNumber()
            poolApy = apy.toNumber()
            await ctx.store.save(eraReward)
        }

        processed++
        // Update progress (40% -> 80%)
        if (processed % 10 === 0) {
            const progress = Math.min(80, 40 + Math.floor((processed / totalRewards) * 40))
            await _job.updateProgress(progress)
        }
    }

    pool.apy = poolApy

    await ctx.store.save(pool)

    await _job.log(`Computed rewards for ${pool.id}`)
    await _job.updateProgress(100)
}
