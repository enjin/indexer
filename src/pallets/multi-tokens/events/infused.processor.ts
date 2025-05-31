import { Block, CommonContext, EventItem } from '../../../contexts'
import { Infused } from './infused.type'
import { EventProcessor, EventResult } from '../../event-processor.def'
import * as mappings from '../../index'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    Event as EventModel,
    Extrinsic,
    MultiTokensInfused,
    Token,
} from '../../../model'
import { getOrCreateAccount, unwrapAccount } from '../../../utils/entities'
import { generateAccountTokenEventCollection, generateAccountTokenEventToken } from '../../../utils/event'
import { QueueUtils } from '../../../queues'
import { multiTokens } from '../../../types/events'
import { infused } from './infused.map'

interface InfusedProcessData {
    token: Token
    infuser: Account
}

export class InfusedProcessor extends EventProcessor<Infused> {
    constructor() {
        super(multiTokens.infused.name)
    }

    protected decodeEventItem(item: EventItem): Infused {
        return infused(item)
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

    protected getNotificationBody(item: EventItem, data: Infused, result: InfusedProcessData): any {
        return {
            collectionId: result.token.collection.id,
            tokenId: result.token.id,
            amount: data.amount,
            accountId: result.infuser.id,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(item: EventItem, data: Infused, result?: InfusedProcessData): EventResult {
        if (!result) return undefined

        const { token, infuser } = result

        const event = new EventModel({
            id: item.id,
            name: MultiTokensInfused.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: token.collection.id,
            tokenId: token.id,
            data: new MultiTokensInfused({
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                amount: data.amount,
                accountId: unwrapAccount(data.accountId),
            }),
        })

        const accountEvent = new AccountTokenEvent({
            id: item.id,
            from: infuser,
            event,
            collectionId: token.collection.id,
            tokenId: token.id,
            meta: new AccountTokenEventMeta({
                collection: generateAccountTokenEventCollection(token.collection),
                token: generateAccountTokenEventToken(token),
            }),
        })

        return [event, accountEvent]
    }
}
