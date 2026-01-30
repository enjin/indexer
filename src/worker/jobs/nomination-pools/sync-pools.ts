import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import { NominationPool } from '~/model'
import { QueueUtils } from '~/queue'

export async function syncPools(job: Job): Promise<void> {
    const em = await connectionManager()

    await job.updateProgress(10)

    const pools = await em.find(NominationPool, {
        relations: {
            members: true,
        },
        order: {
            id: 'ASC',
        },
    })

    await job.updateProgress(30)

    const totalPools = pools.length
    let processed = 0

    for (const pool of pools) {
        // QueueUtils.dispatchRefreshPool(pool.id)
        QueueUtils.dispatchComputePoolRewards(pool.id)
        // for (const member of pool.members) {
        // QueueUtils.dispatchComputePoolMemberRewards(member.id)
        // }

        processed++
        // Update progress (30% -> 90%)
        if (processed % 10 === 0) {
            const progress = Math.min(90, 30 + Math.floor((processed / totalPools) * 60))
            await job.updateProgress(progress)
        }
    }

    await job.log(`Dispatched ${pools.length} jobs to sync pool rewards`)
    await job.updateProgress(100)
}
