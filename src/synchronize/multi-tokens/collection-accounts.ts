import { Block, CommonContext } from '../../contexts'
import * as mappings from '../../mappings'
import { Collection, CollectionAccount, CollectionApproval } from '../../model'
import { BATCH_SIZE, getAccountMap } from '../common/common'

export async function collectionAccounts(ctx: CommonContext, block: Block) {
    ctx.log.info('Syncing collection accounts...')

    const iterable = (await mappings.multiTokens.storage.collectionAccounts(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const collectionAccountPairs of iterable) {
        const accountMap = await getAccountMap(
            ctx,
            collectionAccountPairs.map(([k]) => k[1])
        )

        const collectionAccounts = collectionAccountPairs.map(([k, data]) => {
            if (!data) {
                throw new Error('Collection Account Data not found')
            }
            const collectionId = k[0].toString()
            const accountId = k[1]
            const account = accountMap.get(accountId)

            let approvals = null

            if (data.approvals.length > 0) {
                approvals = data.approvals.map((approval) => {
                    return new CollectionApproval({
                        accountId: approval[0],
                        expiration: approval[1],
                    })
                })
            }

            return new CollectionAccount({
                id: `${collectionId}-${accountId}`,
                isFrozen: data.isFrozen,
                approvals,
                accountCount: data.accountCount,
                account,
                collection: new Collection({ id: collectionId }),
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })
        })

        await ctx.store.insert(collectionAccounts)
    }

    ctx.log.info(`Successfully imported ${await ctx.store.count(CollectionAccount)} collection accounts`)
}
