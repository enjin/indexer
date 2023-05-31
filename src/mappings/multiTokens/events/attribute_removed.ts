import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/data-selection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensAttributeRemovedEvent } from '../../../types/generated/events'
import {
    Attribute,
    Collection,
    Event as EventModel,
    Extrinsic,
    Metadata,
    MultiTokensAttributeRemoved,
    Token,
} from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { computeTraits } from '../../../jobs/compute-traits'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    key: Uint8Array
}

function metadataParser(metadata: Metadata, attribute: Attribute) {
    if (attribute.key === 'name') {
        metadata.name = null
    } else if (attribute.key === 'description') {
        metadata.description = null
    } else if (attribute.key === 'fallback_image') {
        metadata.fallbackImage = null
    } else if (attribute.key === 'external_url') {
        metadata.externalUrl = null
    } else if (['image', 'imageUrl', 'media', 'mediaUrl'].includes(attribute.key)) {
        metadata.media = null
    }
    return metadata
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensAttributeRemovedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, key } = data.asEfinityV2
        return { collectionId, tokenId, key }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function attributeRemoved(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.AttributeRemoved', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const id = data.tokenId ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
    const attributeId = `${id}-${Buffer.from(data.key).toString('hex')}`
    const attribute = await ctx.store.findOne<Attribute>(Attribute, {
        where: { id: attributeId },
        relations: {
            collection: true,
            token: true,
        },
    })

    if (attribute) {
        if (attribute.token) {
            const token = await ctx.store.findOneOrFail<Token>(Token, {
                where: { id: `${data.collectionId}-${data.tokenId}` },
            })

            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            token.metadata = metadataParser(token.metadata, attribute)
            token.attributeCount -= 1
            await ctx.store.save(token)

            computeTraits(data.collectionId.toString())
        } else if (attribute.collection) {
            const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
                where: { id: data.collectionId.toString() },
            })

            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            collection.metadata = metadataParser(collection.metadata, attribute)
            collection.attributeCount -= 1
            await ctx.store.save(collection)
        }

        await ctx.store.remove(attribute)
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensAttributeRemoved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key: Buffer.from(data.key).toString(),
        }),
    })
}
