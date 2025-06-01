import { MultiTokensClaims } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { EventProcessor } from '../../event-processor.def'
import { ClaimTokensCompleted } from './claim-tokens-completed.type'
import { multiTokens } from '../../../types/events'
import { claimTokensCompletedMap, ClaimTokensCompletedProcessData } from './claim-tokens-completed.map'

export class ClaimTokensCompletedProcessor extends EventProcessor<
    ClaimTokensCompleted,
    ClaimTokensCompletedProcessData
> {
    constructor() {
        super(multiTokens.claimTokensCompleted.name, claimTokensCompletedMap)
    }

    protected decodeEventItem(item: EventItem): ClaimTokensCompleted {
        return claimTokensCompletedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: ClaimTokensCompleted): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: ClaimTokensCompleted
    ): Promise<ClaimTokensCompletedProcessData | undefined> {
        const claim = await ctx.store.findOneByOrFail(MultiTokensClaims, {
            id: `${data.destination}-${data.ethereumAddress}`,
        })

        return { claim }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: ClaimTokensCompleted,
        processData: ClaimTokensCompletedProcessData
    ): Promise<ClaimTokensCompletedProcessData> {
        const { claim } = processData

        claim.completed = true
        await ctx.store.save(claim)

        return processData
    }

    protected async dispatchTasks(
        ctx: CommonContext,
        data: ClaimTokensCompleted,
        result: ClaimTokensCompletedProcessData
    ): Promise<void> {
        // No tasks to dispatch
    }
}
