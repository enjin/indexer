import { throwFatalError } from '../../../utils/errors'
import { Collection, Event as EventModel, Extrinsic, MultiTokensCollectionTransferred } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { CollectionTransferred } from './collection-transferred.type'
import { multiTokens } from '../../../types/events'
import { collectionTransferred } from './collection-transferred.map'

interface CollectionTransferredProcessData {
    collection: Collection
}

export class CollectionTransferredProcessor extends EventProcessor<CollectionTransferred> {
    constructor() {
        super(multiTokens.collectionTransferred.name)
    }

    protected decodeEventItem(item: EventItem): CollectionTransferred {
        return collectionTransferred(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: CollectionTransferred): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: CollectionTransferred
    ): Promise<CollectionTransferredProcessData | undefined> {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        })

        if (!collection) {
            throwFatalError(`[CollectionTransferred] We have not found collection ${data.collectionId.toString()}`)
            return undefined
        }

        return { collection }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: CollectionTransferred,
        processData: CollectionTransferredProcessData
    ): Promise<CollectionTransferredProcessData> {
        const { collection } = processData

        collection.owner = await getOrCreateAccount(ctx, data.newOwner)
        await ctx.store.save(collection)

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: CollectionTransferred,
        result: CollectionTransferredProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }

    protected getNotificationBody(
        item: EventItem,
        data: CollectionTransferred,
        result: CollectionTransferredProcessData
    ): any {
        return {
            collectionId: data.collectionId,
            owner: data.newOwner,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(
        item: EventItem,
        data: CollectionTransferred,
        result?: CollectionTransferredProcessData
    ): EventResult {
        return new EventModel({
            id: item.id,
            name: MultiTokensCollectionTransferred.name,
            collectionId: data.collectionId.toString(),
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            data: new MultiTokensCollectionTransferred({
                collectionId: data.collectionId,
                owner: data.newOwner,
            }),
        })
    }
}
