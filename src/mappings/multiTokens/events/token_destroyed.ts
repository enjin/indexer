import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenDestroyedEvent } from '../../../types/generated/events'
import { Collection, Token, TokenEvent } from '../../../model'
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
    }
    throw new UnknownVersionError(event.constructor.name)
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

    if (token) {
        const events = await ctx.store.find(TokenEvent, {
            where: {
                token: {
                    id: token.id,
                },
            },
        })

        await ctx.store.remove(events)
    }

    await ctx.store.remove(token)
}
