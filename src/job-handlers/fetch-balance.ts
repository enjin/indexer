import Queue from 'bull'
import { decodeAddress } from '@polkadot/util-crypto'
import connection from '../connection'
import { JobData } from '../jobs/fetch-account'
import { getOrCreateAccount } from '../mappings/util/entities'
import { fetchBalances, SystemAccount } from '../mappings/util/balance'
import { Account } from '../model'

export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    const em = connection.manager
    const { ids } = job.data
    const data: SystemAccount[] = await fetchBalances(ids)

    // eslint-disable-next-line no-restricted-syntax
    for (const systemAccount of data) {
        // eslint-disable-next-line no-await-in-loop
        const account: Account = await getOrCreateAccount({ store: em } as any, decodeAddress(systemAccount.address))

        account.nonce = systemAccount.nonce
        account.balance.free = BigInt(systemAccount.balance.free)
        account.balance.reserved = BigInt(systemAccount.balance.reserved)
        account.balance.miscFrozen = BigInt(systemAccount.balance.frozen)
        account.balance.transferable = account.balance.free - account.balance.miscFrozen
        account.balance.feeFrozen = 0n

        // eslint-disable-next-line no-await-in-loop
        await em.save<Account>(account)
    }

    done(null, data)
}
