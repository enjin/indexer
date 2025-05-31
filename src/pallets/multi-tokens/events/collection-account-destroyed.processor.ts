import { throwFatalError } from '../../../utils/errors'
import {
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensCollectionAccountDestroyed,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { CollectionAccountDestroyed } from './collection-account-destroyed.type'
import { multiTokens } from '../../../types/events'
import { collectionAccountDestroyed } from './collection-account-destroyed.map'

interface CollectionAccountDestroyedProcessData {
    collectionAccount?: CollectionAccount
}

export class CollectionAccountDestroyedProcessor extends EventProcessor<CollectionAccountDestroyed> {
    constructor() {
        super(multiTokens.collectionAccountDestroyed.name)
    }

    protected decodeEventItem(item: EventItem): CollectionAccountDestroyed {
        return collectionAccountDestroyed(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: CollectionAccountDestroyed): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: CollectionAccountDestroyed
    ): Promise<CollectionAccountDestroyedProcessData | undefined> {
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${data.accountId}` },
        })

        if (!collectionAccount) {
            throwFatalError(
                `[CollectionAccountDestroyed] We have not found collection account ${data.collectionId}-${data.accountId}.`
            )
            return undefined
        }

        return { collectionAccount }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: CollectionAccountDestroyed,
        processData: CollectionAccountDestroyedProcessData
    ): Promise<CollectionAccountDestroyedProcessData> {
        const { collectionAccount } = processData

        if (collectionAccount) {
            await ctx.store.remove(collectionAccount)
        }

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: CollectionAccountDestroyed,
        result: CollectionAccountDestroyedProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }

    protected getNotificationBody(
        item: EventItem,
        data: CollectionAccountDestroyed,
        result: CollectionAccountDestroyedProcessData
    ): any {
        return {
            collectionId: data.collectionId.toString(),
            account: data.accountId,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(
        item: EventItem,
        data: CollectionAccountDestroyed,
        result?: CollectionAccountDestroyedProcessData
    ): EventResult {
        return new EventModel({
            id: item.id,
            name: MultiTokensCollectionAccountDestroyed.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            data: new MultiTokensCollectionAccountDestroyed({
                collectionId: data.collectionId,
                account: data.accountId,
            }),
        })
    }
}
