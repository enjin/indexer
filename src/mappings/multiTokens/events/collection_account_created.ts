import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionAccountCreatedEvent } from '../../../types/generated/events'
import { Collection, CollectionAccount } from '../../../model'
import { encodeId } from '../../../common/helpers'

interface EventData {
    collectionId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensCollectionAccountCreatedEvent(ctx)

    if (event.isV4) {
        const { collectionId, accountId } = event.asV4
        return { collectionId, accountId }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCollectionAccountCreated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOne<Collection>(Collection, data.collectionId.toString())
    const address = encodeId(data.accountId)

    const collectionAccount = new CollectionAccount({
        id: `${data.collectionId}-${address}`,
        isFrozen: false,
        approvals: null,
        accountCount: 0, // TODO: Change fixed for now
        collection: collection,
    })

    await ctx.store.insert(CollectionAccount, collectionAccount)
}
