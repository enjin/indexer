import Queue from 'bull'
import { redisConfig } from './common'
import { BlockHeader, CommonContext } from '../mappings/types/contexts'
import { system } from '../types/generated/storage'
import { addAccountsToSet, saveAccounts } from '../mappings/balances/processor'

export type JobData = { ids: `0x${string}`[] }

export const fetchBalanceQueue = new Queue<JobData>('fetchBalanceQueue', {
    defaultJobOptions: { attempts: 3, removeOnComplete: 100 },
    redis: redisConfig,
    settings: {
        maxStalledCount: 2,
    },
})

export const fetchBalances = async (ids: `0x${string}`[]) => {
    fetchBalanceQueue.add({ ids }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('Closing connection as Redis is not available')
        fetchBalanceQueue.close(true)
    })
}

export async function syncAllBalances(ctx: CommonContext, block: BlockHeader) {
    const getStorage = () => {
        if (system.account.matrixEnjinV603.is(block)) {
            return system.account.matrixEnjinV603
        }

        if (system.account.v602.is(block)) {
            return system.account.v602
        }

        if (system.account.v500.is(block)) {
            return system.account.v500
        }

        throw new Error('Unknown storage version')
    }

    for await (const keys of getStorage().getKeysPaged(1000, block)) {
        addAccountsToSet(keys)
        await saveAccounts(ctx, block)
    }
}
