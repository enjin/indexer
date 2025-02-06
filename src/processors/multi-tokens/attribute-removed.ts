import { UnsupportedEventError, throwError } from '../../common/errors'
import { events } from '../../types/generated'
import { Attribute, Collection, Event as EventModel, Extrinsic, MultiTokensAttributeRemoved, Token } from '../../model'
import { CommonContext, EventItem, BlockHeader } from '../../common/types/contexts'
import { processMetadata } from '../../jobs/process-metadata'
import { computeTraits } from '../../jobs/compute-traits'

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensAttributeRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensAttributeRemoved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key: data.key,
        }),
    })
}

export async function attributeRemoved(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.(ctx, item)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const id = data.tokenId !== undefined ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
    const attributeId = `${id}-${data.key}`
    const attribute = await ctx.store.findOne<Attribute>(Attribute, {
        where: { id: attributeId },
        relations: {
            collection: true,
            token: true,
        },
    })

    if (attribute) {
        if (attribute.token) {
            const token = await ctx.store.findOne<Token>(Token, {
                where: { id: `${data.collectionId}-${data.tokenId}` },
            })

            if (!token) {
                throwError(`[AttributeRemoved] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
                return getEvent(item, data)
            }

            token.attributeCount -= 1
            await ctx.store.save(token)
            processMetadata(token.id, 'token')
            computeTraits(data.collectionId.toString())
        } else if (attribute.collection) {
            const collection = await ctx.store.findOne<Collection>(Collection, {
                where: { id: data.collectionId.toString() },
            })

            if (!collection) {
                throwError(`[AttributeRemoved] We have not found collection ${data.collectionId}.`, 'fatal')
                return getEvent(item, data)
            }

            collection.attributeCount -= 1
            await ctx.store.save(collection)
            processMetadata(collection.id, 'collection')
        }

        await ctx.store.remove(attribute)
    } else {
        throwError(`[AttributeRemoved] call was made on a non existing collection or token`, 'warning')
    }
    return getEvent(item, data)
}
