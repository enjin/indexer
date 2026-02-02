import { QueueUtils } from '~/queue'
import { Account } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'

export async function syncAllAccounts(job: Job) {
    const em = await connectionManager()

    await job.updateProgress(10)

    const accounts = await em.find(Account, {
        select: ['id'],
    })

    await job.updateProgress(30)

    const totalBatches = Math.ceil(accounts.length / 50)
    let processed = 0

    for (let i = 0; i < accounts.length; i += 50) {
        QueueUtils.dispatchFetchAccounts(accounts.slice(i, i + 50).map((account) => account.id))

        processed++
        // Update progress (30% -> 90%)
        const progress = Math.min(90, 30 + Math.floor((processed / totalBatches) * 60))
        await job.updateProgress(progress)
    }

    await job.log(`Dispatched fetchAccountsDetail for ${accounts.length} accounts`)
    await job.updateProgress(100)
}
