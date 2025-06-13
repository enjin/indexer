import { dataHandlerContext } from '../../contexts'
import { SystemAccount } from '../../util/balance'
import { Account } from '../../model'
import { getOrCreateAccount } from '../../util/entities'
import { decode } from '@subsquid/ss58'
import { fetchAllBalances } from '../../util/balance'
import { Job } from 'bullmq'

export async function syncBalances(_job: Job, ids: string[] | null) {
    const ctx = await dataHandlerContext()

    if (ids == null) {
        const data: SystemAccount[] = await fetchAllBalances()
        const promises: Promise<void>[] = []

        for (const systemAccount of data) {
            const account: Account = await getOrCreateAccount(ctx, decode(systemAccount.address).bytes)

            account.nonce = systemAccount.nonce
            account.balance.free = BigInt(systemAccount.balance.free)
            account.balance.reserved = BigInt(systemAccount.balance.reserved)
            account.balance.miscFrozen = BigInt(systemAccount.balance.frozen)
            account.balance.transferable = account.balance.free - account.balance.miscFrozen
            account.balance.feeFrozen = 0n

            promises.push(ctx.store.save<Account>(account))
        }

        await Promise.all(promises)
    }
}
