import { dataHandlerContext } from '../../contexts'
import { EraReward, PoolMemberRewards, NominationPool } from '../../model'
import { Job } from 'bullmq'
import { In } from 'typeorm'
import Big from 'big.js'
import processorConfig from '../../util/config'

export async function computeEraRewards(_job: Job): Promise<void> {
    const ctx = await dataHandlerContext()

    const rewardIds = ['55-741', '55-742', '55-740']

    const eraRewards = await ctx.store.find(EraReward, {
        where: {
            id: In(rewardIds),
        },
    })

    const memberRewards = await ctx.store.find(PoolMemberRewards, {
        where: {
            reward: In(rewardIds),
        },
    })

    if (memberRewards.length > 0) {
        await ctx.store.remove(memberRewards)
    }

    if (eraRewards.length > 0) {
        await ctx.store.remove(eraRewards)
    }

    // recalculate apy
    const pool = await ctx.store.findOne(NominationPool, {
        where: {
            id: '55',
        },
    })

    if (!pool) {
        return
    }

    const lastEraRewards = await ctx.store.find(EraReward, {
        where: { pool: { id: pool.id } },
        relations: {
            era: true,
        },
        order: { era: { index: 'desc' } },
        take: 14,
    })

    // take the average apy of the last n eras
    const sumOfRewards = lastEraRewards.reduce((acc, era) => {
        return acc + era.apy
    }, 0)
    // add the current apy to the sum because the current apy is 0 in the eraRewards
    const apy = new Big(sumOfRewards).plus(lastEraRewards[0].apy).div(lastEraRewards.length)
    pool.apy = Math.max(apy.toNumber(), 0)

    await ctx.store.save(pool)
}
