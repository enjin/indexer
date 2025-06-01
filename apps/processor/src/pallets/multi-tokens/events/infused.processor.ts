import { Block, CommonContext, EventItem } from '../../../contexts'
import { Infused } from './infused.type'
import { EventProcessor } from '../../event-processor.def'
import * as mappings from '../../index'
import { Account, Token } from '../../../model'
import { getOrCreateAccount } from '../../../utils/entities'
import { QueueUtils } from '../../../queues'
import { multiTokens } from '../../../types/events'
import { infusedMap, InfusedProcessData } from './infused.map'

export class InfusedProcessor extends EventProcessor<Infused, InfusedProcessData> {
    constructor() {
        super(multiTokens.infused.name, infusedMap)
    }

    protected decodeEventItem(item: EventItem): Infused {
        return infusedMap.decode(item)
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: Infused
    ): Promise<InfusedProcessData | undefined> {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: { collection: true },
        })

        if (!token) return undefined

        const infuser = await getOrCreateAccount(ctx, data.accountId)

        return { token, infuser }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: Infused,
        processData: InfusedProcessData
    ): Promise<InfusedProcessData> {
        const { token } = processData

        // Update token infusion from storage
        const storage = await mappings.multiTokens.storage.tokens(block, {
            collectionId: token.collection.collectionId,
            tokenId: token.tokenId,
        })

        if (storage) {
            token.infusion = storage.infusion ?? 0n
            await ctx.store.save(token)
        }

        return processData
    }

    protected async dispatchTasks(ctx: CommonContext, data: Infused, result: InfusedProcessData): Promise<void> {
        QueueUtils.dispatchComputeStats(result.token.collection.id)
    }
}
