import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionAccountDestroyedEvent } from '../../../types/generated/events'
import { CollectionAccount } from '../../../model'
import { encodeId } from '../../../common/helpers'

interface EventData {
    collectionId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensCollectionAccountDestroyedEvent(ctx)

    if (event.isV2) {
        const { collectionId, accountId } = event.asV2
        return { collectionId, accountId }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCollectionAccountDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = encodeId(data.accountId)
    const collectionAccount = await ctx.store.findOne<CollectionAccount>(
        CollectionAccount,
        `${data.collectionId}-${address}`
    )

    if (collectionAccount) {
        await ctx.store.delete(CollectionAccount, { id: collectionAccount.id })
    }
}
