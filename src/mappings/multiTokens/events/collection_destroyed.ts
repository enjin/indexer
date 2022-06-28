import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionDestroyedEvent } from '../../../types/generated/events'
import { Collection } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    caller: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensCollectionDestroyedEvent(ctx)

    if (event.isV2) {
        const { collectionId, caller } = event.asV2
        return { collectionId, caller }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCollectionDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    await ctx.store.remove(collection)
}
