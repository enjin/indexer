import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import { NominationPool } from '~/model'
import { QueueUtils } from '~/queue'

export async function syncPoolRewards(job: Job): Promise<void> {
    const em = await connectionManager()

    const pools = await em.find(NominationPool, {
        relations: {
            members: true,
        },
        order: {
            id: 'ASC',
        },
    })

    for (const pool of pools) {
        for (const member of pool.members) {
            QueueUtils.dispatchComputePoolRewards(member.id)
        }
    }

    await job.log(`Dispatched ${pools.length} jobs to sync pool rewards`)
}
