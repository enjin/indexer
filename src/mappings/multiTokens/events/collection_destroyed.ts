import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionDestroyedEvent } from '../../../types/generated/events'
import { Collection, RoyaltyCurrency } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    caller: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensCollectionDestroyedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, caller } = event.asEfinityV2
        return { collectionId, caller }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function collectionDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })
    const royaltyCurrencies = await ctx.store.find<RoyaltyCurrency>(RoyaltyCurrency, {
        where: { collection: { id: collection.id } },
    })

    await ctx.store.remove(royaltyCurrencies)
    await ctx.store.remove(collection)
}
