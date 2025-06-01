import { throwFatalError } from '../../../utils/errors'
import { CollectionAccount } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { EventProcessor } from '../../event-processor.def'
import { CollectionAccountDestroyed } from './collection-account-destroyed.type'
import { multiTokens } from '../../../types/events'
import { collectionAccountDestroyedMap } from './collection-account-destroyed.map'

export interface CollectionAccountDestroyedProcessData {
    collectionAccount?: CollectionAccount
}

export class CollectionAccountDestroyedProcessor extends EventProcessor<
    CollectionAccountDestroyed,
    CollectionAccountDestroyedProcessData
> {
    constructor() {
        super(multiTokens.collectionAccountDestroyed.name, collectionAccountDestroyedMap)
    }

    protected decodeEventItem(item: EventItem): CollectionAccountDestroyed {
        return collectionAccountDestroyedMap.decode(item)
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
}
