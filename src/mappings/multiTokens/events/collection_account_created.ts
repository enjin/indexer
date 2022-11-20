import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionAccountCreatedEvent } from '../../../types/generated/events'
import { Collection, CollectionAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    collectionId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensCollectionAccountCreatedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, accountId } = event.asEfinityV2
        return { collectionId, accountId }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function handleCollectionAccountCreated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })
    const address = encodeId(data.accountId)
    const account = await getOrCreateAccount(ctx, address)

    const collectionAccount = new CollectionAccount({
        id: `${data.collectionId}-${address}`,
        isFrozen: false,
        approvals: null,
        accountCount: 0, // TODO: Change fixed for now
        account,
        collection,
        createdAt: new Date(ctx.block.timestamp),
        updatedAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(CollectionAccount, collectionAccount as any)
}
