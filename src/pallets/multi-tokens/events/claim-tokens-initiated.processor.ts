import { Event as EventModel, Extrinsic, MultiTokensClaims, MultiTokensClaimTokensInitiated } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../utils/entities'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { ClaimTokensInitiated } from './claim-tokens-initiated.type'
import { multiTokens } from '../../../types/events'
import { claimTokensInitiated } from './claim-tokens-initiated.map'

interface ClaimTokensInitiatedProcessData {
    account: any
    claimExists?: MultiTokensClaims
}

export class ClaimTokensInitiatedProcessor extends EventProcessor<ClaimTokensInitiated> {
    constructor() {
        super(multiTokens.claimTokensInitiated.name)
    }

    protected decodeEventItem(item: EventItem): ClaimTokensInitiated {
        return claimTokensInitiated(item)
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

    protected getNotificationBody(
        item: EventItem,
        data: ClaimTokensInitiated,
        result: ClaimTokensInitiatedProcessData
    ): any {
        return {
            account: data.accountId,
            ethAccount: data.ethereumAddress,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(
        item: EventItem,
        data: ClaimTokensInitiated,
        result?: ClaimTokensInitiatedProcessData
    ): EventResult {
        return new EventModel({
            id: item.id,
            name: MultiTokensClaimTokensInitiated.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            data: new MultiTokensClaimTokensInitiated({
                account: data.accountId,
                ethAccount: data.ethereumAddress,
            }),
        })
    }
}
