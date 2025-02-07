import { throwError } from '../../common/errors'
import { Attribute, Collection, Event as EventModel, Token } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { processMetadata } from '../../jobs/process-metadata'
import { computeTraits } from '../../jobs/compute-traits'
import * as mappings from './../../mappings'

export async function attributeRemoved(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.attributeRemoved(item)

    if (skipSave) return mappings.multiTokens.events.attributeRemovedEventModel(item, data)

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
                return mappings.multiTokens.events.attributeRemovedEventModel(item, data)
            }

            token.attributeCount -= 1
            await ctx.store.save(token)
            await processMetadata(token.id, 'token')
            computeTraits(data.collectionId.toString())
        } else if (attribute.collection) {
            const collection = await ctx.store.findOne<Collection>(Collection, {
                where: { id: data.collectionId.toString() },
            })

            if (!collection) {
                throwError(`[AttributeRemoved] We have not found collection ${data.collectionId}.`, 'fatal')
                return mappings.multiTokens.events.attributeRemovedEventModel(item, data)
            }

            collection.attributeCount -= 1
            await ctx.store.save(collection)
            await processMetadata(collection.id, 'collection')
        }

        await ctx.store.remove(attribute)
    } else {
        throwError(`[AttributeRemoved] call was made on a non existing collection or token`, 'warning')
    }
    return mappings.multiTokens.events.attributeRemovedEventModel(item, data)
}
