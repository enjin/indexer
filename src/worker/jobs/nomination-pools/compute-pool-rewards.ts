import { NominationPool, PoolMember } from '~/model'
import { dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'

export async function computePoolRewards(_job: Job, id?: string): Promise<void> {
    const ctx = await dataHandlerContext()

    const pool = await ctx.store.findOne(NominationPool, {
        where: { id },
        relations: {
            eraRewards: true,
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

    const totalRewards = pool.eraRewards.reduce((acc, reward) => {
        return acc + (reward.commission?.amount ?? 0n)
    }, 0n)

    pool.accumulatedCommission = totalRewards
    await ctx.store.save(pool)

    await _job.log(`Computed rewards for ${pool.id}`)
}
