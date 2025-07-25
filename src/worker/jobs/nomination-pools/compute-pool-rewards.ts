import { NominationPool } from '~/model'
import { dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'
import { discardEra } from '~/pallet/nomination-pools/processors'

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
    let sumOfRewards = 0
    let previousCountedApy = 0
    // discard the eras that have apy difference of more than 50% from the previous era
    for (let i = 0; i < eraRewards.length; i++) {
        const era = eraRewards[i]

        if (
            era.apy > 0 &&
            ((i !== 0 && !discardEra(era.apy, previousCountedApy)) ||
                (i === 0 && !discardEra(era.apy, eraRewards[i + 1].apy)))
        ) {
            await _job.log(`Adding era ${era.id} to the sum of rewards ${era.apy}`)
            previousCountedApy = era.apy
            sumOfRewards += era.apy
        } else {
            await _job.log(
                `Discarding era ${era.id} because of apy difference of more than 50% from the previous era, added ${previousCountedApy}`
            )
            sumOfRewards += previousCountedApy
        }
    }

    await _job.log(`Sum of rewards: ${sumOfRewards}`)
    pool.apy = sumOfRewards / 15

    await ctx.store.save(pool)

    await _job.log(`Computed rewards for ${pool.id}`)
}
