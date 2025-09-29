import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { Account } from '~/model'
import { QueueUtils } from '~/queue'

export async function syncAccountsStats(job: Job) {
    const em = await connectionManager()
    const accounts = await em.find(Account, {
        select: ['id'],
    })

    for (let i = 0; i < accounts.length; i++) {
        QueueUtils.dispatchComputeAccountStats(accounts[i].id)
    }

    await job.log(`Dispatched computeAccountStats for ${accounts.length} accounts`)
}
