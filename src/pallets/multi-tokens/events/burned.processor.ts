import { throwFatalError } from '../../../utils/errors'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    AccountTokenEventMetaCollection,
    AccountTokenEventMetaToken,
    Event as EventModel,
    Extrinsic,
    MultiTokensBurned,
    Token,
    TokenAccount,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import { QueueUtils } from '../../../queues'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { Burned } from './burned.type'
import { multiTokens } from '../../../types/events'
import { burned } from './burned.map'

interface BurnedProcessData {
    token: Token
    tokenAccount?: TokenAccount
}

export class BurnedProcessor extends EventProcessor<Burned> {
    constructor() {
        super(multiTokens.burned.name)
    }

    protected decodeEventItem(item: EventItem): Burned {
        return burned(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: Burned): Promise<any> {
        if (data.amount === 0n) return undefined

        const token = await ctx.store.findOne(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: { collection: true },
        })

        if (!token) return undefined

        await getOrCreateAccount(ctx, data.accountId)
        return { token }
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: Burned
    ): Promise<BurnedProcessData | undefined> {
        if (data.amount === 0n) return undefined

        const token = await ctx.store.findOne(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: { collection: true },
        })

        if (!token) {
            throwFatalError(`[Burned] We have not found token ${data.collectionId}-${data.tokenId}.`)
            return undefined
        }

        const tokenAccount = await ctx.store.findOne(TokenAccount, {
            where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
            relations: { account: true },
        })

        if (!tokenAccount) {
            throwFatalError(
                `[Burned] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`
            )
            return undefined
        }

        return { token, tokenAccount }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: Burned,
        processData: BurnedProcessData
    ): Promise<BurnedProcessData> {
        const { token, tokenAccount } = processData

        if (tokenAccount) {
            tokenAccount.balance -= data.amount
            tokenAccount.totalBalance -= data.amount
            tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(tokenAccount)
        }

        token.supply -= data.amount
        if (token.supply < 1n) {
            token.infusion = 0n
        }
        await ctx.store.save(token)

        return processData
    }

    protected async dispatchTasks(ctx: CommonContext, data: Burned, result: BurnedProcessData): Promise<void> {
        QueueUtils.dispatchComputeStats(data.collectionId.toString())
        QueueUtils.dispatchComputeTraits(data.collectionId.toString())
    }

    protected getNotificationBody(item: EventItem, data: Burned, result: BurnedProcessData): any {
        return {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            account: data.accountId,
            amount: data.amount,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(
        item: EventItem,
        data: Burned,
        result?: BurnedProcessData | { token?: Token }
    ): EventResult {
        if (!result?.token) return undefined

        // Handle skipSave case
        if ('token' in result && !('tokenAccount' in result)) {
            const token = result.token
            return [
                new EventModel({
                    id: item.id,
                    name: MultiTokensBurned.name,
                    extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
                    collectionId: data.collectionId.toString(),
                    tokenId: `${data.collectionId}-${data.tokenId}`,
                    data: new MultiTokensBurned({
                        collectionId: data.collectionId,
                        tokenId: data.tokenId,
                        token: `${data.collectionId}-${data.tokenId}`,
                        account: data.accountId,
                        amount: data.amount,
                    }),
                }),
                new AccountTokenEvent({
                    id: item.id,
                    from: new Account({ id: data.accountId }),
                    event: new EventModel({ id: item.id }),
                    collectionId: data.collectionId.toString(),
                    tokenId: data.tokenId.toString(),
                    meta: new AccountTokenEventMeta({
                        collection: !token.collection
                            ? undefined
                            : new AccountTokenEventMetaCollection({
                                  createdAt: token.collection.createdAt,
                              }),
                        token: new AccountTokenEventMetaToken({
                            nonFungible: token.nonFungible,
                            createdAt: token.createdAt,
                        }),
                    }),
                }),
            ]
        }

        const processData = result as BurnedProcessData
        const { token } = processData

        const event = new EventModel({
            id: item.id,
            name: MultiTokensBurned.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.collectionId.toString(),
            tokenId: `${data.collectionId}-${data.tokenId}`,
            data: new MultiTokensBurned({
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                account: data.accountId,
                amount: data.amount,
            }),
        })

        return [
            event,
            new AccountTokenEvent({
                id: item.id,
                from: new Account({ id: data.accountId }),
                event,
                collectionId: data.collectionId.toString(),
                tokenId: data.tokenId.toString(),
                meta: new AccountTokenEventMeta({
                    collection: !token.collection
                        ? undefined
                        : new AccountTokenEventMetaCollection({
                              createdAt: token.collection.createdAt,
                          }),
                    token: new AccountTokenEventMetaToken({
                        nonFungible: token.nonFungible,
                        createdAt: token.createdAt,
                    }),
                }),
            }),
        ]
    }
}
