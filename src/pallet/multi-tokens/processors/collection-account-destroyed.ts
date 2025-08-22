import { throwFatalError } from '~/util/errors'
import { CollectionAccount } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function collectionAccountDestroyed(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.collectionAccountDestroyed(item)
    if (skipSave) return mappings.multiTokens.events.collectionAccountDestroyedEventModel(item, data)

    const address = data.accountId
    const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${address}` },
    })
    if (collectionAccount) {
        await ctx.store.remove(collectionAccount)
    } else {
        throwFatalError(
            `[CollectionAccountDestroyed] We have not found collection account ${data.collectionId}-${address}.`
        )
    }

    return mappings.multiTokens.events.collectionAccountDestroyedEventModel(item, data)
}
