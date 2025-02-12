// import Queue from 'bullmq'
// import { redisConfig } from '../../config'
// import { BlockHeader, CommonContext } from '../../../../common/types/contexts'
// import { system } from '../../../../types/generated/storage'
// import { addAccountsToSet, saveAccounts } from '../../../../processors/balances/save'
//
// export type JobData = { ids: `0x${string}`[] }
//
// export const fetchBalanceQueue = new Queue<JobData>('fetchBalanceQueue', {
//     defaultJobOptions: { attempts: 3, removeOnComplete: 50 },
//     redis: redisConfig,
//     settings: {
//         maxStalledCount: 2,
//     },
// })
//
// export const fetchBalances = (ids: `0x${string}`[]) => {
//     fetchBalanceQueue.add({ ids }).catch(async () => {
//         console.log('Closing connection as Redis is not available')
//         await fetchBalanceQueue.close(true)
//     })
// }
//
// export async function syncAllBalances(ctx: CommonContext, block: BlockHeader) {
//     const getStorage = () => {
//         if (system.account.matrixEnjinV603.is(block)) {
//             return system.account.matrixEnjinV603
//         }
//
//         if (system.account.matrixV602.is(block)) {
//             return system.account.matrixV602
//         }
//
//         if (system.account.matrixV500.is(block)) {
//             return system.account.matrixV500
//         }
//
//         throw new Error('Unknown storage version')
//     }
//
//     for await (const keys of getStorage().getKeysPaged(1000, block)) {
//         addAccountsToSet(keys)
//         await saveAccounts(ctx, block)
//     }
// }
