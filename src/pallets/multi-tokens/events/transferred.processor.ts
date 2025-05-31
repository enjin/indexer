import { throwFatalError } from '../../../utils/errors'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    Event as EventModel,
    Extrinsic,
    MultiTokensTransferred,
    Token,
    TokenAccount,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import { QueueUtils } from '../../../queues'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { Transferred } from './transferred.type'
import { multiTokens } from '../../../types/events'
import { generateAccountTokenEventCollection, generateAccountTokenEventToken } from '../../../utils/event'
import { transferred } from './transferred.map'

interface TransferredProcessData {
    token: Token
    fromTokenAccount?: TokenAccount
    toTokenAccount?: TokenAccount
    fromAccount: Account
    toAccount: Account
}

export class TransferredProcessor extends EventProcessor<Transferred> {
    constructor() {
        super(multiTokens.transferred.name)
    }

    protected decodeEventItem(item: EventItem): Transferred {
        return transferred(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: Transferred): Promise<any> {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: { collection: true },
        })

        if (!token) return undefined

        const [fromAccount, toAccount] = await Promise.all([
            getOrCreateAccount(ctx, data.from),
            getOrCreateAccount(ctx, data.to),
        ])

        return { token, fromAccount, toAccount }
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: Transferred
    ): Promise<TransferredProcessData | undefined> {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: { collection: true },
        })

        if (!token) {
            throwFatalError(`[Transferred] We have not found token ${data.collectionId}-${data.tokenId}.`)
            return undefined
        }

        const [fromAccount, toAccount] = await Promise.all([
            getOrCreateAccount(ctx, data.from),
            getOrCreateAccount(ctx, data.to),
        ])

        const [fromTokenAccount, toTokenAccount] = await Promise.all([
            ctx.store.findOne<TokenAccount>(TokenAccount, {
                where: { id: `${data.from}-${data.collectionId}-${data.tokenId}` },
            }),
            ctx.store.findOne<TokenAccount>(TokenAccount, {
                where: { id: `${data.to}-${data.collectionId}-${data.tokenId}` },
            }),
        ])

        if (!fromTokenAccount) {
            throwFatalError(
                `[Transferred] We have not found token account ${data.from}-${data.collectionId}-${data.tokenId}.`
            )
            return undefined
        }

        if (!toTokenAccount) {
            throwFatalError(
                `[Transferred] We have not found token account ${data.to}-${data.collectionId}-${data.tokenId}.`
            )
            return undefined
        }

        return { token, fromTokenAccount, toTokenAccount, fromAccount, toAccount }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: Transferred,
        processData: TransferredProcessData
    ): Promise<TransferredProcessData> {
        const { fromTokenAccount, toTokenAccount } = processData
        const timestamp = new Date(block.timestamp ?? 0)

        if (fromTokenAccount) {
            fromTokenAccount.balance -= data.amount
            fromTokenAccount.totalBalance -= data.amount
            fromTokenAccount.updatedAt = timestamp
            await ctx.store.save(fromTokenAccount)
        }

        if (toTokenAccount) {
            toTokenAccount.balance += data.amount
            toTokenAccount.totalBalance += data.amount
            toTokenAccount.updatedAt = timestamp
            await ctx.store.save(toTokenAccount)
        }

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: Transferred,
        result: TransferredProcessData
    ): Promise<void> {
        QueueUtils.dispatchComputeStats(data.collectionId.toString())
    }

    protected getNotificationBody(item: EventItem, data: Transferred, result: TransferredProcessData): any {
        return {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            operator: data.operator,
            from: data.from,
            to: data.to,
            amount: data.amount,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(
        item: EventItem,
        data: Transferred,
        result?: TransferredProcessData | { token?: Token; fromAccount?: Account; toAccount?: Account }
    ): EventResult {
        if (!result?.token) return undefined

        // Handle skipSave case
        if ('token' in result && !('fromTokenAccount' in result)) {
            const { token, fromAccount, toAccount } = result

            const event = new EventModel({
                id: item.id,
                name: MultiTokensTransferred.name,
                extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
                collectionId: data.collectionId.toString(),
                tokenId: `${data.collectionId}-${data.tokenId}`,
                data: new MultiTokensTransferred({
                    collectionId: data.collectionId,
                    tokenId: data.tokenId,
                    token: `${data.collectionId}-${data.tokenId}`,
                    operator: data.operator,
                    from: data.from,
                    to: data.to,
                    amount: data.amount,
                }),
            })

            return [
                event,
                new AccountTokenEvent({
                    id: item.id,
                    from: fromAccount,
                    to: toAccount,
                    event,
                    collectionId: data.collectionId.toString(),
                    tokenId: `${data.collectionId}-${data.tokenId}`,
                    meta: new AccountTokenEventMeta({
                        collection: !token.collection
                            ? undefined
                            : generateAccountTokenEventCollection(token.collection),
                        token: !token ? undefined : generateAccountTokenEventToken(token),
                    }),
                }),
            ]
        }

        const processData = result as TransferredProcessData
        const { token, fromAccount, toAccount } = processData

        const event = new EventModel({
            id: item.id,
            name: MultiTokensTransferred.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.collectionId.toString(),
            tokenId: `${data.collectionId}-${data.tokenId}`,
            data: new MultiTokensTransferred({
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                operator: data.operator,
                from: data.from,
                to: data.to,
                amount: data.amount,
            }),
        })

        return [
            event,
            new AccountTokenEvent({
                id: item.id,
                from: fromAccount,
                to: toAccount,
                event,
                collectionId: data.collectionId.toString(),
                tokenId: `${data.collectionId}-${data.tokenId}`,
                meta: new AccountTokenEventMeta({
                    collection: !token.collection ? undefined : generateAccountTokenEventCollection(token.collection),
                    token: !token ? undefined : generateAccountTokenEventToken(token),
                }),
            }),
        ]
    }
}
