import { Block, CommonContext } from '../../contexts'
import * as mappings from '../../mappings'
import { Collection, Token, TokenAccount, TokenApproval, TokenLock, TokenNamedReserve } from '../../model'
import { BATCH_SIZE, getAccountMap } from '../common/common'

export async function tokenAccounts(ctx: CommonContext, block: Block) {
    ctx.log.info('Syncing token accounts...')

    const iterable = (await mappings.multiTokens.storage.tokenAccounts(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const tokenAccountPairs of iterable) {
        const accountMap = await getAccountMap(
            ctx,
            tokenAccountPairs.map(([k]) => k[2])
        )

        const tokenAccounts = tokenAccountPairs.map(([k, data]) => {
            if (!data) {
                throw new Error('Token Account Data not found')
            }
            const collectionId = k[0]
            const tokenId = k[1]
            const accountId = k[2]
            const account = accountMap.get(accountId)

            let namedReserves = null
            if (data.namedReserves && data.namedReserves.length > 0) {
                namedReserves = data.namedReserves.map((namedReserve) => {
                    return new TokenNamedReserve({
                        pallet: namedReserve[0],
                        amount: namedReserve[1],
                    })
                })
            }

            let locks = null
            if (data.locks.length > 0) {
                locks = data.locks.map((lock) => {
                    return new TokenLock({
                        pallet: lock[0],
                        amount: lock[1],
                    })
                })
            }

            let approvals = null
            if (data.approvals.length > 0) {
                approvals = data.approvals.map((approval) => {
                    return new TokenApproval({
                        accountId: approval[0],
                        amount: approval[1].amount,
                        expiration: approval[1].expiration,
                    })
                })
            }

            return new TokenAccount({
                id: `${accountId}-${collectionId}-${tokenId}`,
                balance: data.balance,
                reservedBalance: data.reservedBalance,
                totalBalance: data.balance + data.reservedBalance,
                lockedBalance: data.lockedBalance,
                namedReserves,
                locks,
                approvals,
                isFrozen: data.isFrozen,
                account,
                collection: new Collection({ id: collectionId.toString() }),
                token: new Token({ id: `${collectionId}-${tokenId}` }),
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })
        })

        await ctx.store.insert(tokenAccounts)
    }

    ctx.log.info(`Successfully imported ${await ctx.store.count(TokenAccount)} token accounts`)
}
