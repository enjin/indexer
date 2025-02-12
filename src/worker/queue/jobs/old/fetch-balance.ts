// import Queue from 'bullmq'
// import { decodeAddress } from '@polkadot/util-crypto'
// import connection from '../../../../connection'
// import { JobData } from '../../queues/old/fetch-account'
// import { getOrCreateAccount } from '../../../../common/util/entities'
// import { fetchBalances, SystemAccount } from '../../../../common/util/balance'
// import { Account } from '../../../../model'
//
// export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
//     if (!connection.isInitialized) {
//         await connection.initialize().catch((err) => {
//             throw err
//         })
//     }
//
//     const em = connection.manager
//     const { ids } = job.data
//     const data: SystemAccount[] = await fetchBalances(ids)
//
//     for (const systemAccount of data) {
//         const account: Account = await getOrCreateAccount({ store: em } as any, decodeAddress(systemAccount.address))
//
//         account.nonce = systemAccount.nonce
//         account.balance.free = BigInt(systemAccount.balance.free)
//         account.balance.reserved = BigInt(systemAccount.balance.reserved)
//         account.balance.miscFrozen = BigInt(systemAccount.balance.frozen)
//         account.balance.transferable = account.balance.free - account.balance.miscFrozen
//         account.balance.feeFrozen = 0n
//
//         await em.save<Account>(account)
//     }
//
//     done(null, data)
// }
