import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensAttributeRemovedEvent } from '../../../types/generated/events'
import { Attribute, Collection, Token } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

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
                const token = await ctx.store.findOneOrFail<Token>(Token, attribute.token.id)
                token.name = null
                await ctx.store.save(token)
            } else if (attribute.collection) {
                const collection = await ctx.store.findOneOrFail<Collection>(Collection, attribute.collection.id)
                collection.name = null
                await ctx.store.save(collection)
            }
        }

        await ctx.store.remove(Attribute)
    }
}
