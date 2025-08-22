import { throwFatalError } from '~/util/errors'
import { Collection } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function collectionTransferCancelled(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const data = mappings.multiTokens.events.collectionTransferCancelled(item)
    if (skipSave) return [mappings.multiTokens.events.collectionTransferCancelledEventModel(item, data), undefined]

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwFatalError(`[CollectionTransferCancelled] We have not found collection ${data.collectionId.toString()}`)
        return [mappings.multiTokens.events.collectionTransferCancelledEventModel(item, data), undefined]
    }

    collection.isTransferPending = false

    await ctx.store.save(collection)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            collectionId: data.collectionId,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [mappings.multiTokens.events.collectionTransferCancelledEventModel(item, data), snsEvent]
}
