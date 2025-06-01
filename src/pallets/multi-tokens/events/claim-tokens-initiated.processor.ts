import { MultiTokensClaims } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import { EventProcessor } from '../../event-processor.def'
import { ClaimTokensInitiated } from './claim-tokens-initiated.type'
import { multiTokens } from '../../../types/events'
import { claimTokensInitiatedMap, ClaimTokensInitiatedProcessData } from './claim-tokens-initiated.map'

export class ClaimTokensInitiatedProcessor extends EventProcessor<
    ClaimTokensInitiated,
    ClaimTokensInitiatedProcessData
> {
    constructor() {
        super(multiTokens.claimTokensInitiated.name, claimTokensInitiatedMap)
    }

    protected decodeEventItem(item: EventItem): ClaimTokensInitiated {
        return claimTokensInitiatedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: ClaimTokensInitiated): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: ClaimTokensInitiated
    ): Promise<ClaimTokensInitiatedProcessData | undefined> {
        const account = await getOrCreateAccount(ctx, data.accountId)
        const claimExists = await ctx.store.findOne(MultiTokensClaims, {
            where: { id: `${data.accountId}-${data.ethereumAddress}` },
        })

        return { account, claimExists }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: ClaimTokensInitiated,
        processData: ClaimTokensInitiatedProcessData
    ): Promise<ClaimTokensInitiatedProcessData> {
        const { account, claimExists } = processData

        if (!claimExists) {
            const claim = new MultiTokensClaims({
                id: `${data.accountId}-${data.ethereumAddress}`,
                account,
                ethAccount: data.ethereumAddress,
                completed: false,
                createdAt: new Date(block.timestamp ?? 0),
            })

            await ctx.store.save(claim)
        }

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: ClaimTokensInitiated,
        result: ClaimTokensInitiatedProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }
}
