import { Job } from 'bullmq'
import { EraReward, PoolMemberRewards } from '~/model'
import { dataHandlerContext } from '~/contexts'
import { In, IsNull } from 'typeorm'

const ERA_REWARDS_BATCH_SIZE = 100
const MEMBER_REWARDS_SAVE_BATCH_SIZE = 500

export async function backfillPoolMemberRewardsEraIndex(job: Job): Promise<void> {
    const ctx = await dataHandlerContext()

    let offset = 0
    let totalUpdated = 0
    let hasMore = true

    await job.log(`Starting backfill of eraIndex on PoolMemberRewards`)

    while (hasMore) {
        const eraRewards = await ctx.store.find(EraReward, {
            take: ERA_REWARDS_BATCH_SIZE,
            skip: offset,
            order: { id: 'ASC' },
        })

        if (eraRewards.length === 0) {
            hasMore = false
            break
        }

        const eraRewardIds = eraRewards.map((er) => er.id)

        const memberRewards = await ctx.store.find(PoolMemberRewards, {
            where: {
                reward: { id: In(eraRewardIds) },
                eraIndex: IsNull(),
            },
            relations: { reward: true },
        })

        if (memberRewards.length > 0) {
            for (const pmr of memberRewards) {
                const eraIndexFromReward = parseInt(pmr.reward.id.split('-').pop() ?? '', 10)
                if (!Number.isNaN(eraIndexFromReward)) {
                    pmr.eraIndex = eraIndexFromReward
                }
            }

            for (let i = 0; i < memberRewards.length; i += MEMBER_REWARDS_SAVE_BATCH_SIZE) {
                const chunk = memberRewards.slice(i, i + MEMBER_REWARDS_SAVE_BATCH_SIZE)
                await ctx.store.save(chunk)
            }

            totalUpdated += memberRewards.length
        }

        offset += eraRewards.length
        hasMore = eraRewards.length === ERA_REWARDS_BATCH_SIZE

        const progress = hasMore ? Math.min(99, Math.round((offset / (offset + 1)) * 100)) : 100
        await job.updateProgress(progress)
        await job.log(`Processed ${offset} era rewards, updated ${totalUpdated} member rewards so far`)
    }

    await job.log(`Backfill complete. Total member rewards updated: ${totalUpdated}`)
}
