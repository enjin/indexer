import { dataHandlerContext } from '~/contexts'
import { SystemAccount } from '~/util/balance'
import { Account } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { decode } from '@subsquid/ss58'
import { fetchAllBalances } from '~/util/balance'
import { Job } from 'bullmq'

export async function syncBalances(_job: Job, ids: string[] | null) {
    const ctx = await dataHandlerContext()

    await _job.updateProgress(10)

    if (ids == null) {
        const data: SystemAccount[] = await fetchAllBalances()
        const promises: Promise<void>[] = []

        await _job.updateProgress(30)

        const totalAccounts = data.length
        let processed = 0

        for (const systemAccount of data) {
            const account: Account = await getOrCreateAccount(ctx, decode(systemAccount.address).bytes)

            account.nonce = systemAccount.nonce
            account.balance.free = BigInt(systemAccount.balance.free)
            account.balance.reserved = BigInt(systemAccount.balance.reserved)
            account.balance.miscFrozen = BigInt(systemAccount.balance.frozen)
            account.balance.transferable = account.balance.free - account.balance.miscFrozen
            account.balance.feeFrozen = 0n

            promises.push(ctx.store.save<Account>(account))
            
            processed++
            // Update progress every 100 accounts (30% -> 80%)
            if (processed % 100 === 0) {
                const progress = Math.min(80, 30 + Math.floor((processed / totalAccounts) * 50))
                await _job.updateProgress(progress)
            }
        }

        await Promise.all(promises)
        await _job.updateProgress(100)
    } else {
        await _job.updateProgress(100)
    }
}
