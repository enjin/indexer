import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensAttributeSetEvent } from '../../../types/generated/events'
import { Attribute, Collection, Metadata, MetadataMedia, Token } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    key: Uint8Array
    value: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
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
        relations: {
            owner: true,
        },
    })

    let token = null
    if (data.tokenId) {
        token = await ctx.store.findOneOrFail<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: {
                collection: true,
            },
        })
    }

    const key = Buffer.from(data.key).toString()
    const value = Buffer.from(data.value).toString()
    const id = data.tokenId ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
    const attributeId = `${id}-${Buffer.from(data.key).toString('hex')}`

    let attribute = await ctx.store.findOne<Attribute>(Attribute, {
        where: { id: attributeId },
        relations: {
            collection: true,
            token: true,
        },
    })

    if (attribute) {
        attribute.value = value
        attribute.updatedAt = new Date(ctx.block.timestamp)
        if (token) {
            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            if (attribute.key === 'name') {
                token.name = attribute.value
            }
            token.metadata = metadataParser(token.metadata, attribute)
        } else if (collection) {
            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            if (attribute.key === 'name') {
                collection.name = attribute.value
            }
            collection.metadata = metadataParser(collection.metadata, attribute)
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
            if (attribute.key === 'name') {
                token.name = attribute.value
            }
            token.metadata = metadataParser(token.metadata, attribute)
            token.attributeCount += 1
            await ctx.store.save(token)
        } else if (collection) {
            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            if (attribute.key === 'name') {
                collection.name = attribute.value
            }
            collection.metadata = metadataParser(collection.metadata, attribute)
            collection.attributeCount += 1
            await ctx.store.save(collection)
        }
    }
}

function metadataParser(metadata: Metadata, attribute: Attribute) {
    if (attribute.key === 'name') {
        metadata.name = attribute.value
    } else if (attribute.key === 'description') {
        metadata.description = attribute.value
    } else if (attribute.key === 'fallback_image') {
        metadata.fallbackImage = attribute.value
    } else if (attribute.key === 'external_uri') {
        metadata.externalUri = attribute.value
    } else if (['image', 'imageUrl', 'media', 'mediaUrl'].includes(attribute.key)) {
        let media = new MetadataMedia()
        media.uri = attribute.value
        metadata.media = [media]
    }
    return metadata
}