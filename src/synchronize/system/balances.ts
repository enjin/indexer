import { Block, CommonContext } from '../../contexts'
import * as mappings from '../../mappings'
import { addAccountsToSet, saveAccounts } from '../../processors/balances/save'
import { BATCH_SIZE, getAccountMap } from '../common/common'
import { Account } from '../../model'

export async function balances(ctx: CommonContext, block: Block) {
    ctx.log.info('Syncing balances...')

    const iterable = await mappings.system.storage.accounts(block, { batchSize: BATCH_SIZE })

    for await (const keys of iterable) {
        await getAccountMap(ctx, keys)
        addAccountsToSet(keys)
        await saveAccounts(ctx, block)
    }

    ctx.log.info(`Successfully synced balances of ${await ctx.store.count(Account)} accounts`)
}
