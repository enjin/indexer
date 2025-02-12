import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { dataHandlerContext } from '../../../../connection'
import { fetchBalances, SystemAccount } from '../../../../common/util/balance'
import { Account } from '../../../../model'
import { getOrCreateAccount } from '../../../../common/util/entities'
import { decodeAddress } from '@polkadot/util-crypto'

export default class FetchBalanceProcessor implements ProcessorDef {
    async handle(job: Job) {
        const ctx = dataHandlerContext()

        const { ids } = job.data
        const data: SystemAccount[] = await fetchBalances(ids)

        for (const systemAccount of data) {
            const account: Account = await getOrCreateAccount(ctx, decodeAddress(systemAccount.address))

            account.nonce = systemAccount.nonce
            account.balance.free = BigInt(systemAccount.balance.free)
            account.balance.reserved = BigInt(systemAccount.balance.reserved)
            account.balance.miscFrozen = BigInt(systemAccount.balance.frozen)
            account.balance.transferable = account.balance.free - account.balance.miscFrozen
            account.balance.feeFrozen = 0n

            await ctx.store.save<Account>(account)
        }
    }
}
