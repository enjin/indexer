import { throwFatalError } from '../../../util/errors'
import { Attribute, Collection, Event as EventModel, Token } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'
import { QueueUtils } from '../../../queue'

export async function attributeRemoved(
    ctx: CommonContext,
    block: Block,
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
                throwFatalError(`[AttributeRemoved] We have not found token ${data.collectionId}-${data.tokenId}.`)
                return mappings.multiTokens.events.attributeRemovedEventModel(item, data)
            }

            token.attributeCount -= 1
            await ctx.store.save(token)

            QueueUtils.dispatchComputeMetadata({ id: token.id, type: 'token', traits: true })
        } else {
            const collection = await ctx.store.findOne<Collection>(Collection, {
                where: { id: data.collectionId.toString() },
            })

            if (!collection) {
                throwFatalError(`[AttributeRemoved] We have not found collection ${data.collectionId}.`)
                return mappings.multiTokens.events.attributeRemovedEventModel(item, data)
            }

            collection.attributeCount -= 1
            await ctx.store.save(collection)
            QueueUtils.dispatchComputeMetadata({ id: collection.id, type: 'collection', traits: true })
        }

        await ctx.store.remove(attribute)
    }
    return mappings.multiTokens.events.attributeRemovedEventModel(item, data)
}
