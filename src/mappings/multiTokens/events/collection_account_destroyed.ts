import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionAccountDestroyedEvent } from '../../../types/generated/events'
import { CollectionAccount } from '../../../model'
// eslint-disable-next-line import/no-cycle
import { Context } from '../../../processor'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensCollectionAccountDestroyedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, accountId } = data.asEfinityV2
        return { collectionId, accountId }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function collectionAccountDestroyed(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionAccountDestroyed', { event: { args: true; extrinsic: true; call: true } }>
) {
    const data = getEventData(ctx, item.event)
    if (!data) return

    const address = u8aToHex(data.accountId)
    const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${address}` },
    })

    await ctx.store.remove(collectionAccount)
}
