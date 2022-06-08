import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import {
    MultiTokensAttributeRemovedEvent,
} from '../../../types/generated/events'
import { Attribute } from '../../../model'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    key: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensAttributeRemovedEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, key } = event.asV2
        return { collectionId, tokenId, key }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleAttributeRemoved(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const attributeId = data.tokenId ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
    const attribute = await ctx.store.findOne<Attribute>(Attribute, attributeId)

    if (attribute) {
        await ctx.store.delete(Attribute, { id: attribute.id })
    }
}
