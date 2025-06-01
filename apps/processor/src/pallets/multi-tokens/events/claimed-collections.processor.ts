import { Collection } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import { EventProcessor } from '../../event-processor.def'
import { ClaimedCollections } from './claimed-collections.type'
import { multiTokens } from '../../../types/events'
import { claimedCollectionsMap, ClaimedCollectionsProcessData } from './claimed-collections.map'

export class ClaimedCollectionsProcessor extends EventProcessor<ClaimedCollections, ClaimedCollectionsProcessData> {
    constructor() {
        super(multiTokens.claimedCollections.name, claimedCollectionsMap)
    }

    protected decodeEventItem(item: EventItem): ClaimedCollections {
        return claimedCollectionsMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: ClaimedCollections): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: ClaimedCollections
    ): Promise<ClaimedCollectionsProcessData | undefined> {
        const account = await getOrCreateAccount(ctx, data.accountId)

        const promises = data.collectionIds.map((id) => {
            const collectionId = typeof id == 'bigint' ? id : id.native
            return ctx.store.findOneBy<Collection>(Collection, { id: collectionId.toString() })
        })

        const collections = (await Promise.all(promises)).filter(Boolean) as Collection[]

        return { account, collections }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: ClaimedCollections,
        processData: ClaimedCollectionsProcessData
    ): Promise<ClaimedCollectionsProcessData> {
        const { account, collections } = processData

        const savePromises = collections.map((collection) => {
            collection.owner = account
            return ctx.store.save(collection)
        })

        await Promise.all(savePromises)

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: ClaimedCollections,
        result: ClaimedCollectionsProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }
}
