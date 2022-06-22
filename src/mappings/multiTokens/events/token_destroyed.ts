import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenDestroyedEvent } from '../../../types/generated/events'
import { Token } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    caller: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensTokenDestroyedEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, caller } = event.asV2
        return { collectionId, tokenId, caller }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleTokenDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const token = await ctx.store.findOne<Token>(Token, `${data.collectionId}-${data.tokenId}`)
    if (token) {
        await ctx.store.remove(token)
    }
}
