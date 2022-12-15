import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionDestroyedEvent } from '../../../types/generated/events'
import { Collection, Event as EventModel, Extrinsic, MultiTokensCollectionDestroyed, RoyaltyCurrency } from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    caller: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensCollectionDestroyedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, caller } = data.asEfinityV2
        return { collectionId, caller }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function collectionDestroyed(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionDestroyed', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })
    const royaltyCurrencies = await ctx.store.find<RoyaltyCurrency>(RoyaltyCurrency, {
        where: { collection: { id: collection.id } },
    })

    await ctx.store.remove(royaltyCurrencies)
    await ctx.store.remove(collection)

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionDestroyed({
            collectionId: data.collectionId,
            caller: u8aToHex(data.caller),
        }),
    })
}
