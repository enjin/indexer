import { throwError } from '../../common/errors'
import { CollectionAccount, Event as EventModel } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function collectionAccountDestroyed(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionAccountDestroyed(item)
    if (!data) return undefined

    if (skipSave) return mappings.multiTokens.events.collectionAccountDestroyedEventModel(item, data)

    const address = data.accountId
    const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${address}` },
    })
    if (collectionAccount) {
        await ctx.store.remove(collectionAccount)
    } else {
        throwError(`[CollectionAccountDestroyed] We have not found collection account ${data.collectionId}-${address}.`, 'fatal')
    }

    return mappings.multiTokens.events.collectionAccountDestroyedEventModel(item, data)
}
