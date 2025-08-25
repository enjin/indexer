import { EraReward, NominationPool } from '~/model'
import { dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'
import Big from 'big.js'

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
            await _job.log(`Pool APY: ${poolApy} Index: ${index} Era: ${eraReward.era.index}`)
            const rewardRange = eraRewards.slice(index - 15, index)
            const apy = await computeEraApy(rewardRange, poolApy, _job)
            eraReward.averageApy = apy.toNumber()
            poolApy = apy.toNumber()
            await ctx.store.save(eraReward)
        }
    }

    pool.apy = poolApy

    await ctx.store.save(pool)

    await _job.log(`Computed rewards for ${pool.id}`)
}

const discardEra = (apy: number, totalApy: number) => {
    if (totalApy === 0) {
        return false
    }

    return Math.abs(apy - totalApy) >= 50
}

const computeEraApy = async (eraRewards: EraReward[], poolApy: number, _job: Job): Promise<Big> => {
    if (eraRewards.length === 1) {
        return Big(eraRewards[0].apy)
    }

    const validApys = eraRewards.filter((reward) => !discardEra(reward.apy, poolApy))
    const sumOfApy = validApys.reduce((acc, reward) => acc + reward.apy, 0)

    if (validApys.length === 0) {
        return Big(poolApy)
    }

    const finalApy = Big(sumOfApy).div(validApys.length)

    if (finalApy.minus(poolApy).gt(50)) {
        await _job.log(`Discarding APY: ${finalApy.toNumber()} Setting to: ${validApys[0].averageApy}`)
        return Big(validApys[0].averageApy)
    }

    await _job.log(`Not Discarding APY: ${finalApy.toNumber()}`)

    return finalApy
}
