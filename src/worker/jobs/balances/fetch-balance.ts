import { dataHandlerContext } from '~/contexts'
import { Account, Balance } from '~/model'
import { getOrCreateAccount } from '~/util/entities'
import { decode } from '@subsquid/ss58'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { encodeAddress } from '~/util/tools'

export async function fetchBalance(_job: Job, id: string) {
    const ctx = await dataHandlerContext()
    const { api } = await Rpc.getInstance()

    await _job.updateProgress(10)

    const address = encodeAddress(id)
    
    const account: Account = await getOrCreateAccount(ctx, decode(address).bytes)
    const balance = await api.query.system.account(address)

    const balanceRes = api.createType('FrameSystemAccountInfo', balance)

    await _job.log(balanceRes.data.free.toString())
    await _job.log(balanceRes.data.reserved.toString())
    await _job.log(balanceRes.data.frozen.toString())

    account.balance.free = BigInt(balanceRes.data.free.toString())
    account.balance.reserved = BigInt(balanceRes.data.reserved.toString())
    account.balance.miscFrozen = BigInt(balanceRes.data.frozen.toString())
    account.balance.transferable = account.balance.free - account.balance.miscFrozen
    account.balance.feeFrozen = 0n

    await ctx.store.save(account)
    await _job.updateProgress(100)
}
