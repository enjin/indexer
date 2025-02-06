import { throwError } from '../../common/errors'
import { Collection, Event as EventModel } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'

export async function collectionTransferred(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionTransferred(item)
    if (!data) return undefined

    if (skipSave) return mappings.multiTokens.events.collectionTransferredEventModel(item, data)

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwError(`[CollectionTransferred] We have not found collection ${data.collectionId.toString()}`, 'fatal')
        return mappings.multiTokens.events.collectionTransferredEventModel(item, data)
    }

    collection.owner = await getOrCreateAccount(ctx, data.newOwner)

    await ctx.store.save(collection)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                owner: data.newOwner,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.multiTokens.events.collectionTransferredEventModel(item, data)
}
