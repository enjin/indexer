import { Event as EventModel, Extrinsic, MultiTokensClaims, MultiTokensClaimTokensCompleted } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { ClaimTokensCompleted } from './claim-tokens-completed.type'
import { multiTokens } from '../../../types/events'
import { claimTokensCompleted } from './claim-tokens-completed.map'

interface ClaimTokensCompletedProcessData {
    claim: MultiTokensClaims
}

export class ClaimTokensCompletedProcessor extends EventProcessor<ClaimTokensCompleted> {
    constructor() {
        super(multiTokens.claimTokensCompleted.name)
    }

    protected decodeEventItem(item: EventItem): ClaimTokensCompleted {
        return claimTokensCompleted(item)
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

    protected getNotificationBody(
        item: EventItem,
        data: ClaimTokensCompleted,
        result: ClaimTokensCompletedProcessData
    ): any {
        return {
            account: data.destination,
            ethAccount: data.ethereumAddress,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(
        item: EventItem,
        data: ClaimTokensCompleted,
        result?: ClaimTokensCompletedProcessData
    ): EventResult {
        return new EventModel({
            id: item.id,
            name: MultiTokensClaimTokensCompleted.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            data: new MultiTokensClaimTokensCompleted({
                account: data.destination,
                ethAccount: data.ethereumAddress,
            }),
        })
    }
}
