import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionAccountDestroyedEvent } from '../../../types/generated/events'
import { CollectionAccount, Event as EventModel, Extrinsic, MultiTokensCollectionAccountDestroyed } from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensCollectionAccountDestroyedEvent(ctx, event)

    if (data.isEfinityV3014) {
        return data.asEfinityV3014
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function collectionAccountDestroyed(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionAccountDestroyed', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const address = u8aToHex(data.accountId)
    const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${address}` },
    })
    if (collectionAccount) {
        await ctx.store.remove(collectionAccount)
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionAccountDestroyed({
            collectionId: data.collectionId,
            account: address,
        }),
    })
}
