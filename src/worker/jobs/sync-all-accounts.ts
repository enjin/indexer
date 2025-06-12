import { QueueUtils } from '../../queue'
import { Account, Collection } from '../../model'
import { connectionManager } from '../../contexts'
import { Job } from 'bullmq'

export async function syncAllAccounts(job: Job) {
    const em = await connectionManager()
    const accounts = await em.find(Account, {
        select: ['id', 'address'],
    })

    for (let i = 0; i < accounts.length; i += 50) {
        QueueUtils.dispatchFetchAccounts(accounts.slice(i, i + 50).map((account) => account.address))
    }

    await job.log(`Dispatched fetchAccountsDetail for ${accounts.length} accounts`)
}
