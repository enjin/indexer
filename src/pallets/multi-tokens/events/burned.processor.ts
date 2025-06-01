import { throwFatalError } from '../../../utils/errors'
import { Token, TokenAccount } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import { QueueUtils } from '../../../queues'
import { EventProcessor } from '../../event-processor.def'
import { Burned } from './burned.type'
import { multiTokens } from '../../../types/events'
import { burnedMap } from './burned.map'

export interface BurnedProcessData {
    token: Token
    tokenAccount?: TokenAccount
}

export class BurnedProcessor extends EventProcessor<Burned> {
    constructor() {
        super(multiTokens.burned.name, burnedMap)
    }

    protected decodeEventItem(item: EventItem): Burned {
        return burnedMap.decode(item)
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
}
