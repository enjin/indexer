import { Collection, CollectionAccount, Event as EventModel } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import * as mappings from '../../index'

export async function collectionAccountCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionAccountCreated(item)

    if (skipSave) {
        return mappings.multiTokens.events.collectionAccountCreatedEventModel(item, data)
    }

    const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${data.accountId}` },
    })

    if (!collectionAccount) {
        const account = await getOrCreateAccount(ctx, data.accountId)

        const newCollectionAccount = new CollectionAccount({
            id: `${data.collectionId}-${data.accountId}`,
            isFrozen: false,
            approvals: null,
            accountCount: 0,
            account,
            collection: new Collection({ id: data.collectionId.toString() }),
            createdAt: new Date(block.timestamp ?? 0),
            updatedAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.save(newCollectionAccount)
    }

    return mappings.multiTokens.events.collectionAccountCreatedEventModel(item, data)
}
