import { Attribute, Collection, RoyaltyCurrency, Trait } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { EventProcessor } from '../../event-processor.def'
import { CollectionDestroyed } from './collection-destroyed.type'
import { multiTokens } from '../../../types/events'
import { collectionDestroyedMap } from './collection-destroyed.map'

export interface CollectionDestroyedProcessData {
    collection: Collection
    traits: Trait[]
    royaltyCurrencies: RoyaltyCurrency[]
    attributes: Attribute[]
}

export class CollectionDestroyedProcessor extends EventProcessor<CollectionDestroyed, CollectionDestroyedProcessData> {
    constructor() {
        super(multiTokens.collectionDestroyed.name, collectionDestroyedMap)
    }

    protected decodeEventItem(item: EventItem): CollectionDestroyed {
        return collectionDestroyedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: CollectionDestroyed): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: CollectionDestroyed
    ): Promise<CollectionDestroyedProcessData | undefined> {
        const collectionId = data.collectionId.toString()

        const collection = await ctx.store.findOneByOrFail(Collection, { id: collectionId })

        const [traits, royaltyCurrencies, attributes] = await Promise.all([
            ctx.store.find(Trait, { where: { collection: { id: collectionId } } }),
            ctx.store.find(RoyaltyCurrency, { where: { collection: { id: collectionId } } }),
            ctx.store.find(Attribute, { where: { collection: { id: collectionId } } }),
        ])

        return { collection, traits, royaltyCurrencies, attributes }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: CollectionDestroyed,
        processData: CollectionDestroyedProcessData
    ): Promise<CollectionDestroyedProcessData> {
        const { collection, traits, royaltyCurrencies, attributes } = processData

        await Promise.all([ctx.store.remove(traits), ctx.store.remove(royaltyCurrencies), ctx.store.remove(attributes)])
        await ctx.store.remove(collection)

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: CollectionDestroyed,
        result: CollectionDestroyedProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }
}
