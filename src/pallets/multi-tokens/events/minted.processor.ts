import { Block, CommonContext, EventItem } from '../../../contexts'
import { Minted } from './minted.type'
import { EventProcessor, EventResult } from '../../event-processor.def'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    Event as EventModel,
    Extrinsic,
    MultiTokensMinted,
    PoolMember,
    Token,
    TokenAccount,
} from '../../../model'
import { getOrCreateAccount, unwrapAccount } from '../../../utils/entities'
import { generateAccountTokenEventCollection, generateAccountTokenEventToken } from '../../../utils/event'
import { QueueUtils } from '../../../queues'
import { isNonFungible } from '../../../utils/helpers'
import { multiTokens } from '../../../types/events'
import { throwFatalError } from '../../../utils/errors'
import { minted, mintedEventModel } from './minted.map'

interface MintedProcessData {
    token: Token
    recipient: Account
    issuer: Account
    tokenAccount: TokenAccount
    poolMember?: PoolMember
    promises: Promise<void>[]
}

export class MintedProcessor extends EventProcessor<Minted> {
    constructor() {
        super(multiTokens.minted.name)
    }

    protected decodeEventItem(item: EventItem): Minted {
        return minted(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: Minted): Promise<any> {
        const token = await ctx.store.findOne(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: { collection: true },
        })

        return { token: token }
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: Minted
    ): Promise<MintedProcessData | undefined> {
        const promises: Promise<void>[] = []

        // Skip if amount is 0
        if (data.amount === 0n) {
            return undefined
        }

        const token = await ctx.store.findOne(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: { collection: true },
        })

        if (!token) {
            throwFatalError(`[Minted] We have not found token ${data.collectionId}-${data.tokenId}.`)
            return undefined
        }

        const recipient = await getOrCreateAccount(ctx, data.recipient)
        const issuer = await getOrCreateAccount(ctx, data.issuer)

        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${data.recipient}-${data.collectionId}-${data.tokenId}` },
        })

        if (!tokenAccount) {
            throwFatalError(
                `[Minted] We have not found token account ${data.recipient}-${data.collectionId}-${data.tokenId}.`
            )
            return undefined
        }

        let poolMember: PoolMember | undefined
        if (data.collectionId === 1n) {
            poolMember = await ctx.store.findOneBy<PoolMember>(PoolMember, {
                id: `${data.tokenId}-${data.recipient}`,
            })
        }

        return { token, recipient, issuer, tokenAccount, poolMember, promises }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: Minted,
        processData: MintedProcessData
    ): Promise<MintedProcessData> {
        const { token, tokenAccount, poolMember, promises } = processData

        // Update token
        token.supply += data.amount
        token.nonFungible = isNonFungible(token)
        promises.push(ctx.store.save(token))

        // Update token account
        tokenAccount.balance += data.amount
        tokenAccount.totalBalance += data.amount
        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        promises.push(ctx.store.save(tokenAccount))

        // Handle pool member if applicable
        if (poolMember) {
            ctx.log.warn(`Adding tokenAccount ${tokenAccount.id} to poolMember ${poolMember.id}.`)
            poolMember.tokenAccount = tokenAccount
            await ctx.store.save(poolMember)
        }

        // Wait for all database operations to complete
        await Promise.all(promises)

        return processData
    }

    protected async dispatchTasks(ctx: CommonContext, data: Minted, result: MintedProcessData): Promise<void> {
        QueueUtils.dispatchComputeMetadata(result.token.id, 'token')
        QueueUtils.dispatchComputeTraits(data.collectionId.toString())
        QueueUtils.dispatchComputeStats(data.collectionId.toString())
    }

    protected getNotificationBody(item: EventItem, data: Minted, result: MintedProcessData): any {
        return {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: result.token.id,
            issuer: result.issuer.id,
            recipient: result.recipient.id,
            amount: data.amount,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(
        item: EventItem,
        data: Minted,
        result?: MintedProcessData | { token?: Token }
    ): EventResult {
        if (!result?.token) return undefined

        // Handle skipSave case
        if ('token' in result && !('recipient' in result)) {
            return mintedEventModel(item, data, result.token?.collection, result.token)
        }

        const processData = result as MintedProcessData
        const { token, recipient, issuer } = processData

        const event = new EventModel({
            id: item.id,
            name: MultiTokensMinted.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.collectionId.toString(),
            tokenId: `${data.collectionId}-${data.tokenId}`,
            data: new MultiTokensMinted({
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                issuer: unwrapAccount(data.issuer),
                recipient: data.recipient,
                amount: data.amount,
            }),
        })

        const accountEvent = new AccountTokenEvent({
            id: item.id,
            from: issuer,
            to: recipient,
            event,
            collectionId: data.collectionId.toString(),
            tokenId: `${data.collectionId}-${data.tokenId}`,
            meta: new AccountTokenEventMeta({
                collection: token.collection ? generateAccountTokenEventCollection(token.collection) : undefined,
                token: generateAccountTokenEventToken(token),
            }),
        })

        return [event, accountEvent]
    }
}
