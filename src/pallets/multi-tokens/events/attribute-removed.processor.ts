import { throwFatalError } from '../../../utils/errors'
import { Attribute, Collection, Token } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { QueueUtils } from '../../../queues'
import { EventProcessor } from '../../event-processor.def'
import { AttributeRemoved } from './attribute-removed.type'
import { multiTokens } from '../../../types/events'
import { attributeRemovedMap } from './attribute-removed.map'

export interface AttributeRemovedProcessData {
    attribute?: Attribute
    token?: Token
    collection?: Collection
    attributeId: string
}

export class AttributeRemovedProcessor extends EventProcessor<AttributeRemoved, AttributeRemovedProcessData> {
    constructor() {
        super(multiTokens.attributeRemoved.name, attributeRemovedMap)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: AttributeRemoved): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: AttributeRemoved
    ): Promise<AttributeRemovedProcessData | undefined> {
        const id = data.tokenId !== undefined ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
        const attributeId = `${id}-${data.key}`

        const attribute = await ctx.store.findOne<Attribute>(Attribute, {
            where: { id: attributeId },
            relations: {
                collection: true,
                token: true,
            },
        })

        if (!attribute) {
            return { attributeId }
        }

        let token: Token | undefined
        let collection: Collection | undefined

        if (attribute.token) {
            token = await ctx.store.findOne<Token>(Token, {
                where: { id: `${data.collectionId}-${data.tokenId}` },
            })

            if (!token) {
                throwFatalError(`[AttributeRemoved] We have not found token ${data.collectionId}-${data.tokenId}.`)
                return { attributeId }
            }
        } else {
            collection = await ctx.store.findOne<Collection>(Collection, {
                where: { id: data.collectionId.toString() },
            })

            if (!collection) {
                throwFatalError(`[AttributeRemoved] We have not found collection ${data.collectionId}.`)
                return { attributeId }
            }
        }

        return { attribute, token, collection, attributeId }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: AttributeRemoved,
        processData: AttributeRemovedProcessData
    ): Promise<AttributeRemovedProcessData> {
        const { attribute, token, collection } = processData

        if (attribute) {
            if (token) {
                token.attributeCount -= 1
                await ctx.store.save(token)
            } else if (collection) {
                collection.attributeCount -= 1
                await ctx.store.save(collection)
            }

            await ctx.store.remove(attribute)
        }

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: AttributeRemoved,
        result: AttributeRemovedProcessData
    ): Promise<void> {
        if (result.token) {
            QueueUtils.dispatchComputeMetadata(result.token.id, 'token')
            QueueUtils.dispatchComputeTraits(data.collectionId.toString())
        } else if (result.collection) {
            QueueUtils.dispatchComputeMetadata(result.collection.id, 'collection')
        }
    }
}
