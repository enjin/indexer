import { PoolMember } from '~/model'
import { dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'
import { Big } from 'big.js'

export async function computePoolRewards(_job: Job, id?: string): Promise<void> {
    const ctx = await dataHandlerContext()

    const members = await ctx.store.find(PoolMember, {
        where: { pool: { id } },
        relations: {
            rewards: {
                reward: {
                    era: true,
                },
            },
        },
        order: {
            rewards: {
                reward: {
                    era: {
                        index: 'ASC',
                    },
                },
            },
        },
    })

    for (const member of members) {
        const totalRewards = member.rewards.reduce((acc, reward) => {
            return acc.plus(Big(reward.points.toString()).times(reward.reward.changeInRate.toString()))
        }, Big(0))

        member.accumulatedRewards = BigInt(totalRewards.toString())

        await ctx.store.save(member)
    }

    await _job.log(`Computed rewards for ${members.length} members`)
}
