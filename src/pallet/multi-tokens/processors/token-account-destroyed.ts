import { CollectionAccount, PoolMember, TokenAccount } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { dispatchComputeAccountStats } from '~/queue/queue-utils'

export async function tokenAccountDestroyed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.tokenAccountDestroyed(item)

    if (skipSave) return mappings.multiTokens.events.tokenAccountDestroyedEventModel(item, data)

    const [collectionAccount, tokenAccount] = await Promise.all([
        ctx.store.findOneBy<CollectionAccount>(CollectionAccount, {
            id: `${data.collectionId}-${data.accountId}`,
        }),
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
            relations: { account: true },
        }),
    ])

    if (!tokenAccount) {
        ctx.log.warn(
            `[TokenAccountDestroyed] Token account ${data.accountId}-${data.collectionId}-${data.tokenId} was absent`
        )
        return mappings.multiTokens.events.tokenAccountDestroyedEventModel(item, data)
    }

    if (!collectionAccount) {
        ctx.log.warn(`[TokenAccountDestroyed] Collection account ${data.collectionId}-${data.accountId} was absent`)
        return mappings.multiTokens.events.tokenAccountDestroyedEventModel(item, data)
    }

    collectionAccount.accountCount -= 1
    await ctx.store.save(collectionAccount)

    await dispatchComputeAccountStats(tokenAccount.account.id)

    const poolMembers = await ctx.store.find(PoolMember, {
        where: { tokenAccount: { id: tokenAccount.id } },
    })
    for (const member of poolMembers) {
        member.tokenAccount = null
        if (member.unbondingEras === null) {
            member.isActive = false
        }
    }

    await ctx.store.save(poolMembers)
    await ctx.store.remove(tokenAccount)

    return mappings.multiTokens.events.tokenAccountDestroyedEventModel(item, data)
}
