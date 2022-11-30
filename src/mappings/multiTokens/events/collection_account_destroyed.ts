import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionAccountDestroyedEvent } from '../../../types/generated/events'
import { CollectionAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensCollectionAccountDestroyedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, accountId } = event.asEfinityV2
        return { collectionId, accountId }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function collectionAccountDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = u8aToHex(data.accountId)
    const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${address}` },
    })

    await ctx.store.remove(collectionAccount)
}
