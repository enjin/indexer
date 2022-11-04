import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenDestroyedEvent } from '../../../types/generated/events'
import { Collection, Token } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    caller: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensTokenDestroyedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, caller } = event.asEfinityV2
        return { collectionId, tokenId, caller }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleTokenDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })
    collection.tokenCount -= 1
    await ctx.store.save(collection)

    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })
    await ctx.store.remove(token)
}
