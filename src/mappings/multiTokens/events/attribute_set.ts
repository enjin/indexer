import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensAttributeSetEvent } from '../../../types/generated/events'
import { Attribute, Collection, Metadata, MetadataMedia, Token } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { getMetadata } from '../../util/metadata'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    key: Uint8Array
    value: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensAttributeSetEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, key, value } = event.asEfinityV2
        return { collectionId, tokenId, key, value }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleAttributeSet(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    let token = null
    if (data.tokenId) {
        token = await ctx.store.findOneOrFail<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })
    }

    const key = Buffer.from(data.key).toString()
    const value = Buffer.from(data.value).toString()
    const id = data.tokenId ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
    const attributeId = `${id}-${Buffer.from(data.key).toString('hex')}`

    let attribute = await ctx.store.findOne<Attribute>(Attribute, {
        where: { id: attributeId },
    })

    if (attribute) {
        attribute.value = value
        attribute.updatedAt = new Date(ctx.block.timestamp)
        if (token) {
            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            token.metadata = await getMetadata(token.metadata, attribute)
            await ctx.store.save(token)
        } else if (collection) {
            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            collection.metadata = await getMetadata(collection.metadata, attribute)
            await ctx.store.save(collection)
        }
        await ctx.store.save(attribute)
    } else {
        attribute = new Attribute({
            id: attributeId,
            key: key,
            value: value,
            deposit: 0n, // TODO: Change fixed for now
            collection: collection,
            token: token,
            createdAt: new Date(ctx.block.timestamp),
            updatedAt: new Date(ctx.block.timestamp),
        })

        await ctx.store.insert(attribute)

        if (token) {
            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            token.metadata = await getMetadata(token.metadata, attribute)
            token.attributeCount += 1
            await ctx.store.save(token)
        } else if (collection) {
            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            collection.metadata = await getMetadata(collection.metadata, attribute)
            collection.attributeCount += 1
            await ctx.store.save(collection)
        }
    }
}
