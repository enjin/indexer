import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensAttributeRemovedEvent } from '../../../types/generated/events'
import { Attribute, Collection, Token } from '../../../model'

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

    const id = data.tokenId ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
    const attributeId = `${id}-${Buffer.from(data.key).toString('hex')}`
    const attribute = await ctx.store.findOne<Attribute>(Attribute, attributeId)

    if (attribute) {
        if (attribute.key === 'name') {
            if (attribute.token) {
                await ctx.store.update(Token, { id: attribute.token.id }, { name: null })
            } else if (attribute.collection) {
                await ctx.store.update(Collection, { id: attribute.collection.id }, { name: null })
            }
        }

        await ctx.store.delete(Attribute, { id: attribute.id })
    }
}
