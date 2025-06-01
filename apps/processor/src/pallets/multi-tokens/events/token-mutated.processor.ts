import { throwFatalError } from '../../../utils/errors'
import { NativeTokenMetadata, Token } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { isNonFungible } from '../../../utils/helpers'
import { QueueUtils } from '../../../queues'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { TokenMutated } from './token-mutated.type'
import { multiTokens } from '../../../types/events'
import { tokenMutatedMap } from './token-mutated.map'

export interface TokenMutatedProcessData {
    token: Token
}

export class TokenMutatedProcessor extends EventProcessor<TokenMutated> {
    constructor() {
        super(multiTokens.tokenMutated.name, tokenMutatedMap)
    }

    protected decodeEventItem(item: EventItem): TokenMutated {
        return tokenMutatedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: TokenMutated): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: TokenMutated
    ): Promise<TokenMutatedProcessData | undefined> {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: {
                collection: true,
            },
        })

        if (!token) {
            throwFatalError(`[TokenMutated] We have not found token ${data.collectionId}-${data.tokenId}.`)
            return undefined
        }

        return { token }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: TokenMutated,
        processData: TokenMutatedProcessData
    ): Promise<TokenMutatedProcessData> {
        const { token } = processData

        if (data.mutation.listingForbidden.__kind === 'SomeMutation') {
            token.listingForbidden = data.mutation.listingForbidden.value
        }

        if (data.mutation.name !== undefined && data.mutation.name.__kind === 'SomeMutation') {
            token.nativeMetadata = new NativeTokenMetadata({
                decimalCount: token.nativeMetadata?.decimalCount ?? 0,
                symbol: token.nativeMetadata?.symbol ?? '',
                name: data.mutation.name.value,
            })
        }

        if (data.mutation.anyoneCanInfuse !== undefined && data.mutation.anyoneCanInfuse.__kind === 'SomeMutation') {
            token.anyoneCanInfuse = data.mutation.anyoneCanInfuse.value
        }

        if (data.mutation.behavior.__kind === 'SomeMutation') {
            // TODO: Fix this
            // token.behavior = data.mutation.behavior.value === undefined ? null : await getBehavior(ctx, data.mutation.behavior.value)
        }

        token.nonFungible = isNonFungible(token)
        token.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(token)

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: TokenMutated,
        result: TokenMutatedProcessData
    ): Promise<void> {
        QueueUtils.dispatchComputeStats(data.collectionId.toString())
    }

    protected getNotificationBody(item: EventItem, data: TokenMutated, result: TokenMutatedProcessData): any {
        return tokenMutatedMap.notification(item, data, result)
    }

    protected getEventModel(item: EventItem, data: TokenMutated, result?: TokenMutatedProcessData): EventResult {
        return tokenMutatedMap.event(item, data, result)
    }
}
