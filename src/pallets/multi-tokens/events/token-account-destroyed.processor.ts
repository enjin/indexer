import { throwFatalError } from '../../../utils/errors'
import {
    CollectionAccount,
    PoolMember,
    TokenAccount,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { EventProcessor } from '../../event-processor.def'
import { TokenAccountDestroyed } from './token-account-destroyed.type'
import { multiTokens } from '../../../types/events'
import { tokenAccountDestroyedMap, TokenAccountDestroyedProcessData } from './token-account-destroyed.map'

export class TokenAccountDestroyedProcessor extends EventProcessor<TokenAccountDestroyed, TokenAccountDestroyedProcessData> {
    constructor() {
        super(multiTokens.tokenAccountDestroyed.name, tokenAccountDestroyedMap)
    }

    protected decodeEventItem(item: EventItem): TokenAccountDestroyed {
        return tokenAccountDestroyedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: TokenAccountDestroyed): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: TokenAccountDestroyed
    ): Promise<TokenAccountDestroyedProcessData | undefined> {
        const collectionAccount = await ctx.store.findOneBy<CollectionAccount>(CollectionAccount, {
            id: `${data.collectionId}-${data.accountId}`,
        })

        if (!collectionAccount) {
            throwFatalError(
                `[TokenAccountDestroyed] We have not found collection account ${data.collectionId}-${data.accountId}.`
            )
            return undefined
        }

        const tokenAccount = await ctx.store.findOneBy<TokenAccount>(TokenAccount, {
            id: `${data.accountId}-${data.collectionId}-${data.tokenId}`,
        })

        if (!tokenAccount) {
            throwFatalError(
                `[TokenAccountDestroyed] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`
            )
            return undefined
        }

        const poolMembers = await ctx.store.find(PoolMember, {
            where: { tokenAccount: { id: tokenAccount.id } },
        })

        return { collectionAccount, tokenAccount, poolMembers }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: TokenAccountDestroyed,
        processData: TokenAccountDestroyedProcessData
    ): Promise<TokenAccountDestroyedProcessData> {
        const { collectionAccount, tokenAccount, poolMembers } = processData

        collectionAccount.accountCount -= 1
        await ctx.store.save(collectionAccount)

        if (poolMembers && poolMembers.length > 0) {
            for (const member of poolMembers) {
                member.tokenAccount = null
            }
            await ctx.store.save(poolMembers)
        }

        if (tokenAccount) {
            await ctx.store.remove(tokenAccount)
        }

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: TokenAccountDestroyed,
        result: TokenAccountDestroyedProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }

}
