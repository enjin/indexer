import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensAttributeRemovedEvent } from '../../../types/generated/events'
import { Attribute, Collection, Event as EventModel, Extrinsic, MultiTokensAttributeRemoved, Token } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { processMetadata } from '../../../jobs/process-metadata'
import { computeTraits } from '../../../jobs/compute-traits'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    key: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensAttributeRemovedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.AttributeRemoved', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
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

export async function attributeRemoved(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.AttributeRemoved', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const id = data.tokenId !== undefined ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
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

            token.attributeCount -= 1
            await ctx.store.save(token)
            processMetadata(token.id, 'token', true)
            computeTraits(data.collectionId.toString())
        } else if (attribute.collection) {
            const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
                where: { id: data.collectionId.toString() },
            })

            collection.attributeCount -= 1
            await ctx.store.save(collection)
            processMetadata(collection.id, 'collection', true)
        }

        await ctx.store.remove(attribute)
    }
    return getEvent(item, data)
}
