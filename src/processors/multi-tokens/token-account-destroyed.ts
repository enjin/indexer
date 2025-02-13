import { throwError } from '../../utils/errors'
import { CollectionAccount, Event as EventModel, TokenAccount } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import * as mappings from './../../mappings'

export async function tokenAccountDestroyed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenAccountDestroyed(item)

    if (skipSave) return mappings.multiTokens.events.tokenAccountDestroyedEventModel(item, data)

    const collectionAccount = await ctx.store.findOneBy<CollectionAccount>(CollectionAccount, {
        id: `${data.collectionId}-${data.accountId}`,
    })

    if (!collectionAccount) {
        throwError(
            `[TokenAccountDestroyed] We have not found collection account ${data.collectionId}-${data.accountId}.`,
            'fatal'
        )

        return mappings.multiTokens.events.tokenAccountDestroyedEventModel(item, data)
    }

    collectionAccount.accountCount -= 1
    await ctx.store.save(collectionAccount)

    const tokenAccount = await ctx.store.findOneBy<TokenAccount>(TokenAccount, {
        id: `${data.accountId}-${data.collectionId}-${data.tokenId}`,
    })

    if (tokenAccount) {
        await ctx.store.remove(tokenAccount)
    } else {
        throwError(
            `[TokenAccountDestroyed] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`,
            'fatal'
        )
    }

    return mappings.multiTokens.events.tokenAccountDestroyedEventModel(item, data)
}
