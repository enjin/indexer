import { throwFatalError } from '../../../utils/errors'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensTokenAccountCreated,
    Token,
    TokenAccount,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { TokenAccountCreated } from './token-account-created.type'
import { multiTokens } from '../../../types/events'
import { tokenAccountCreated } from './token-account-created.map'

interface TokenAccountCreatedProcessData {
    tokenAccount?: TokenAccount
    token?: Token
    account?: any
    collectionAccount?: CollectionAccount
    collection?: Collection
}

export class TokenAccountCreatedProcessor extends EventProcessor<TokenAccountCreated> {
    constructor() {
        super(multiTokens.tokenAccountCreated.name)
    }

    protected decodeEventItem(item: EventItem): TokenAccountCreated {
        return tokenAccountCreated(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: TokenAccountCreated): Promise<any> {
        const tokenAccount = await ctx.store.findOne(TokenAccount, {
            where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
        })

        return { tokenAccount }
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: TokenAccountCreated
    ): Promise<TokenAccountCreatedProcessData | undefined> {
        // Handle skipSave case
        const tokenAccount = await ctx.store.findOne(TokenAccount, {
            where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
        })

        if (tokenAccount) {
            return { tokenAccount }
        }

        const collection = new Collection({ id: data.collectionId.toString() })
        const token = await ctx.store.findOneBy(Token, { id: `${data.collectionId}-${data.tokenId}` })

        if (!token) {
            throwFatalError(`[TokenAccountCreated] We have not found token ${data.collectionId}-${data.tokenId}.`)
            return undefined
        }

        const account = await getOrCreateAccount(ctx, data.accountId)
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${data.accountId}` },
        })

        return { token, account, collectionAccount, collection }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: TokenAccountCreated,
        processData: TokenAccountCreatedProcessData
    ): Promise<TokenAccountCreatedProcessData> {
        const { tokenAccount, token, account, collectionAccount, collection } = processData
        const timestamp = new Date(block.timestamp ?? 0)

        // Handle skipSave case
        if (tokenAccount) {
            tokenAccount.createdAt = timestamp
            tokenAccount.updatedAt = timestamp
            await ctx.store.save(tokenAccount)
            return processData
        }

        if (collectionAccount) {
            collectionAccount.accountCount += 1
            await ctx.store.save(collectionAccount)
        } else {
            const newCollectionAccount = new CollectionAccount({
                id: `${data.collectionId}-${data.accountId}`,
                isFrozen: false,
                approvals: null,
                accountCount: 1,
                account,
                collection,
                createdAt: timestamp,
                updatedAt: timestamp,
            })
            await ctx.store.insert(newCollectionAccount)
        }

        const newTokenAccount = new TokenAccount({
            id: `${data.accountId}-${data.collectionId}-${data.tokenId}`,
            balance: 0n, // The balance is updated on Mint event
            reservedBalance: 0n,
            totalBalance: 0n,
            lockedBalance: 0n,
            namedReserves: null,
            locks: null,
            approvals: null,
            isFrozen: false,
            account,
            collection,
            token,
            createdAt: timestamp,
            updatedAt: timestamp,
        })

        await ctx.store.save(newTokenAccount)
        processData.tokenAccount = newTokenAccount

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: TokenAccountCreated,
        result: TokenAccountCreatedProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }

    protected getNotificationBody(
        item: EventItem,
        data: TokenAccountCreated,
        result: TokenAccountCreatedProcessData
    ): any {
        return {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            account: data.accountId,
            balance: data.balance,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(
        item: EventItem,
        data: TokenAccountCreated,
        result?: TokenAccountCreatedProcessData
    ): EventResult {
        return new EventModel({
            id: item.id,
            name: MultiTokensTokenAccountCreated.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.collectionId.toString(),
            tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
            data: new MultiTokensTokenAccountCreated({
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                account: data.accountId,
                balance: data.balance,
            }),
        })
    }
}
