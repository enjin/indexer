import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import {
    MultiTokensAttributeSetEvent,
} from '../../../types/generated/events'
import { Attribute, Collection, Token } from '../../../model'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    key: Uint8Array
    value: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensAttributeSetEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, key, value } = event.asV2
        return { collectionId, tokenId, key, value }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleAttributeSet(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOne<Collection>(Collection, data.collectionId.toString())
    let token = null

    if (data.tokenId) {
        token = await ctx.store.findOne<Token>(Token, `${data.collectionId}-${data.tokenId}`)
    }

    const key = Buffer.from(data.key).toString()
    const value = Buffer.from(data.value).toString()

    const attribute = new Attribute({
        id: data.tokenId ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString(),
        key: key,
        value: value,
        deposit: 0n, // TODO: Change fixed for now
        collection: collection,
        token: token,
    })

    await ctx.store.insert(Attribute, attribute)
}
