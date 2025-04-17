import { dataHandlerContext } from '../../contexts'
import { SystemAccount } from '../../utils/balance'
import { Account } from '../../model'
import { getOrCreateAccount } from '../../utils/entities'
import { decode } from '@subsquid/ss58'
import { fetchBalances as utilsFetchBalances } from '../../utils/balance'

export async function fetchBalances(ids: string[]) {
    const ctx = await dataHandlerContext()

    const data: SystemAccount[] = await utilsFetchBalances(ids)
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
