import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionDestroyedEvent } from '../../../types/generated/events'
import { Collection } from '../../../model'

interface EventData {
    collectionId: bigint
    caller: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensCollectionDestroyedEvent(ctx)

    if (event.isV4) {
        const { collectionId, caller } = event.asV4
        return { collectionId, caller }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCollectionDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOne<Collection>(Collection, data.collectionId.toString())
    if (collection) {
        await ctx.store.delete(Collection, { id: collection.id })
    }
}
