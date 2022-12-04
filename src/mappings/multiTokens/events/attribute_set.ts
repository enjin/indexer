import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensAttributeSetEvent } from '../../../types/generated/events'
import { Attribute, Collection, Event as EventModel, Metadata, MultiTokensAttributeSet, Token } from '../../../model'
import { getMetadata } from '../../util/metadata'
import { Context } from '../../../processor'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    key: Uint8Array
    value: Uint8Array
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensAttributeSetEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, key, value } = data.asEfinityV2
        return { collectionId, tokenId, key, value }
    }
    throw new UnknownVersionError(data.constructor.name)
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function attributeSet(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.AttributeSet', { event: { args: true; extrinsic: true; call: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

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
        attribute.updatedAt = new Date(block.timestamp)
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
            key,
            value,
            deposit: 0n, // TODO: Change fixed for now
            collection,
            token,
            createdAt: new Date(block.timestamp),
            updatedAt: new Date(block.timestamp),
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

    return new EventModel({
        id: item.event.id,
        data: new MultiTokensAttributeSet({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key,
            value,
        }),
    })
}
