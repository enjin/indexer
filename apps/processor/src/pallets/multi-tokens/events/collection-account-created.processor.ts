import { Collection, CollectionAccount } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import { EventProcessor } from '../../event-processor.def'
import { CollectionAccountCreated } from './collection-account-created.type'
import { multiTokens } from '../../../types/events'
import { collectionAccountCreatedMap } from './collection-account-created.map'

export interface CollectionAccountCreatedProcessData {
    collectionAccount?: CollectionAccount
}

export class CollectionAccountCreatedProcessor extends EventProcessor<
    CollectionAccountCreated,
    CollectionAccountCreatedProcessData
> {
    constructor() {
        super(multiTokens.collectionAccountCreated.name, collectionAccountCreatedMap)
    }

    protected decodeEventItem(item: EventItem): CollectionAccountCreated {
        return collectionAccountCreatedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: CollectionAccountCreated): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: CollectionAccountCreated
    ): Promise<CollectionAccountCreatedProcessData | undefined> {
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${data.accountId}` },
        })

        return { collectionAccount }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: CollectionAccountCreated,
        processData: CollectionAccountCreatedProcessData
    ): Promise<CollectionAccountCreatedProcessData> {
        const { collectionAccount } = processData

        if (!collectionAccount) {
            const account = await getOrCreateAccount(ctx, data.accountId)

            const newCollectionAccount = new CollectionAccount({
                id: `${data.collectionId}-${data.accountId}`,
                isFrozen: false,
                approvals: null,
                accountCount: 0,
                account,
                collection: new Collection({ id: data.collectionId.toString() }),
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })

            await ctx.store.save(newCollectionAccount)
        }

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: CollectionAccountCreated,
        result: CollectionAccountCreatedProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }
}
