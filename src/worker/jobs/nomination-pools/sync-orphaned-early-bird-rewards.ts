import { Job } from 'bullmq'
import { PoolMemberRewards, EraReward } from '~/model'
import { dataHandlerContext } from '~/contexts'
import { IsNull } from 'typeorm'

/**
 * Syncs orphaned early bird rewards with their corresponding era rewards.
 * 
 * Early bird rewards create PoolMemberRewards entries with null reward_id when users
 * receive bonuses. If users unstake before era rewards are processed, these records
 * remain orphaned. This job links them to their EraReward once it becomes available.
 */
export async function syncOrphanedEarlyBirdRewards(job: Job): Promise<void> {
    const ctx = await dataHandlerContext()

    // Find all PoolMemberRewards with null reward_id
    const orphanedRewards = await ctx.store.find(PoolMemberRewards, {
        where: { reward: IsNull() },
        relations: { member: { pool: true }, pool: true },
    })

    await job.log(`Found ${orphanedRewards.length} orphaned records`)

    if (orphanedRewards.length === 0) return

    let fixed = 0
    let noEraReward = 0
    const updates: PoolMemberRewards[] = []

    for (const pmr of orphanedRewards) {
        // Extract era index from ID (format: {memberId}-{eraIndex})
        const eraIndex = pmr.id.split('-').pop()
        const poolId = pmr.pool?.id || pmr.member?.pool?.id

        if (!eraIndex || !poolId) continue

        // Check if corresponding EraReward exists
        const eraRewardId = `${poolId}-${eraIndex}`
        const eraReward = await ctx.store.findOneBy(EraReward, { id: eraRewardId })

        if (eraReward) {
            pmr.reward = eraReward
            updates.push(pmr)
            fixed++
        } else {
            noEraReward++
        }
    }

    // Save all fixes in batch
    if (updates.length > 0) {
        await ctx.store.save(updates)
    }

    await job.log(`Fixed: ${fixed}, Valid orphans: ${noEraReward}`)
}
