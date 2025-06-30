import { throwFatalError } from '../../../util/errors'
import { Collection, Event as EventModel } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'

export async function collectionTransferCancelled(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.collectionTransferCancelled(item)
    if (skipSave) return mappings.multiTokens.events.collectionTransferCancelledEventModel(item, data)

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwFatalError(`[CollectionTransferCancelled] We have not found collection ${data.collectionId.toString()}`)
        return mappings.multiTokens.events.collectionTransferCancelledEventModel(item, data)
    }

    collection.isTransferPending = false

    await ctx.store.save(collection)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.multiTokens.events.collectionTransferCancelledEventModel(item, data)
}
