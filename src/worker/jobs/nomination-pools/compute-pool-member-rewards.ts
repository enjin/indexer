import { PoolMember } from '~/model'
import { dataHandlerContext } from '~/contexts'
import { Job } from 'bullmq'

export async function computePoolMemberRewards(_job: Job, id?: string): Promise<void> {
    const ctx = await dataHandlerContext()

    const member = await ctx.store.findOne(PoolMember, {
        where: { id },
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

    if (!member) {
        throw new Error(`Member not found: ${id}`)
    }

    const totalRewards = member.rewards.reduce((acc, reward) => {
        return acc + (reward.points * reward.reward.changeInRate) / 10n ** 18n
    }, 0n)

    member.accumulatedRewards = totalRewards
    await ctx.store.save(member)

    await _job.log(`Computed rewards for ${member.id}`)
}
