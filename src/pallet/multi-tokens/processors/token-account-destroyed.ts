import { throwFatalError } from '~/util/errors'
import { CollectionAccount, Event as EventModel, PoolMember, TokenAccount } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'

export async function tokenAccountDestroyed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenAccountDestroyed(item)

    if (skipSave) return mappings.multiTokens.events.tokenAccountDestroyedEventModel(item, data)

    const collectionAccount = await ctx.store.findOneBy<CollectionAccount>(CollectionAccount, {
        id: `${data.collectionId}-${data.accountId}`,
    })

    if (!collectionAccount) {
        throwFatalError(
            `[TokenAccountDestroyed] We have not found collection account ${data.collectionId}-${data.accountId}.`
        )

        return mappings.multiTokens.events.tokenAccountDestroyedEventModel(item, data)
    }

    collectionAccount.accountCount -= 1
    await ctx.store.save(collectionAccount)

    const tokenAccount = await ctx.store.findOneBy<TokenAccount>(TokenAccount, {
        id: `${data.accountId}-${data.collectionId}-${data.tokenId}`,
    })

    if (tokenAccount) {
        const poolMembers = await ctx.store.find(PoolMember, {
            where: { tokenAccount: { id: tokenAccount.id } },
        })
        for (const member of poolMembers) {
            member.tokenAccount = null
        }

        await ctx.store.save(poolMembers)
        await ctx.store.remove(tokenAccount)
    } else {
        throwFatalError(
            `[TokenAccountDestroyed] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`
        )
    }

    return mappings.multiTokens.events.tokenAccountDestroyedEventModel(item, data)
}
