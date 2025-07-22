import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import { NominationPool, PoolState } from '~/model'
import { QueueUtils } from '~/queue'
import { Not } from 'typeorm'

export async function syncPoolRewards(job: Job): Promise<void> {
    const em = await connectionManager()

    const pools = await em.find(NominationPool, {
        where: {
            state: Not(PoolState.Destroyed),
        },
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
