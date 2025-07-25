import { NominationPool } from '~/model'
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

    const totalRewards = pool.eraRewards.reduce((acc, reward) => {
        return acc + (reward.commission?.amount ?? 0n)
    }, 0n)

    pool.accumulatedCommission = totalRewards

    // count the last 15 eras
    const eraRewards = pool.eraRewards.slice(0, 15)

    let { sumOfRewards } = computeEraApy(eraRewards)

    pool.apy = sumOfRewards / (eraRewards.length < 15 ? eraRewards.length : 15)

    await ctx.store.save(pool)

    await _job.log(`Computed rewards for ${pool.id}`)
}
