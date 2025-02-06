import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import { Collection, CollectionAccount, Event as EventModel, Extrinsic, MultiTokensCollectionAccountCreated } from '../../model'
import { CommonContext, BlockHeader, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'
export async function collectionAccountCreated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionAccountCreated(item)
    if (!data) return undefined

    if (skipSave) {
        return getEvent(item, data)
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

    return getEvent(item, data)
}
