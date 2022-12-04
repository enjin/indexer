import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionDestroyedEvent } from '../../../types/generated/events'
import { Collection, RoyaltyCurrency } from '../../../model'
// eslint-disable-next-line import/no-cycle
import { Context } from '../../../processor'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    caller: Uint8Array
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensCollectionDestroyedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, caller } = data.asEfinityV2
        return { collectionId, caller }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function collectionDestroyed(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionDestroyed', { event: { args: true; extrinsic: true; call: true } }>
) {
    const data = getEventData(ctx, item.event)
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
