import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { IsNull } from 'typeorm'
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
import { metadataParser } from '../../util/metadata'

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
                relations: {
                    attributes: true,
                },
            })

            if (!token.metadata || attribute.key === 'uri') {
                token.metadata = new Metadata()
            }

            // eslint-disable-next-line no-restricted-syntax
            for (const a of token.attributes) {
                if (a.key === attribute.key) {
                    // eslint-disable-next-line no-continue
                    continue
                }
                token.metadata = metadataParser(token.metadata, a, null)
            }

            token.attributeCount -= 1
            await ctx.store.save(token)

            computeTraits(data.collectionId.toString())
        } else if (attribute.collection) {
            const [collection, attributes] = await Promise.all([
                ctx.store.findOneOrFail<Collection>(Collection, {
                    where: { id: data.collectionId.toString() },
                }),
                await ctx.store.find(Attribute, {
                    where: { collection: { id: data.collectionId.toString() }, token: IsNull() },
                }),
            ])

            if (!collection.metadata || attribute.key === 'uri') {
                collection.metadata = new Metadata()
            }

            // eslint-disable-next-line no-restricted-syntax
            for (const a of attributes) {
                if (a.key === attribute.key) {
                    // eslint-disable-next-line no-continue
                    continue
                }
                collection.metadata = metadataParser(collection.metadata, a, null)
            }
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
