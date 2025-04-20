import { Block, CommonContext } from '../../contexts'
import { system, balances as balance } from '../../pallets'
import { BATCH_SIZE, getAccountMap } from '../common'
import { Account } from '../../model'

export async function balances(ctx: CommonContext, block: Block) {
    ctx.log.info('Syncing balances...')

    const iterable = await system.storage.accounts(block, { batchSize: BATCH_SIZE })

    for await (const keys of iterable) {
        await getAccountMap(ctx, keys)
        balance.processors.addAccountsToSet(keys)
        await balance.processors.saveAccounts(ctx, block)
    }

    ctx.log.info(`Successfully synced balances of ${await ctx.store.count(Account)} accounts`)
}
