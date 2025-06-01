import { hexToString } from '@polkadot/util'
import { TokenAccount } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { throwFatalError } from '../../../utils/errors'
import { match, P } from 'ts-pattern'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { Unreserved } from './unreserved.type'
import { multiTokens } from '../../../types/events'
import { unreservedMap } from './unreserved.map'

export interface UnreservedProcessData {
    tokenAccount: TokenAccount
    reserveId: string
}

export class UnreservedProcessor extends EventProcessor<Unreserved> {
    constructor() {
        super(multiTokens.unreserved.name, unreservedMap)
    }

    protected decodeEventItem(item: EventItem): Unreserved {
        return unreservedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: Unreserved): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: Unreserved
    ): Promise<UnreservedProcessData | undefined> {
        const tokenAccount = await ctx.store.findOne(TokenAccount, {
            where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
            relations: { account: true },
        })

        if (!tokenAccount) {
            throwFatalError(
                `[Unreserved] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`
            )
            return undefined
        }

        const reserveId = match(data.reserveId)
            .with(P.string, (v) => hexToString(v))
            .with({ __kind: P.string }, (v) => v.__kind)
            .otherwise(() => {
                throw new Error('Unknown reserve id')
            })

        return { tokenAccount, reserveId }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: Unreserved,
        processData: UnreservedProcessData
    ): Promise<UnreservedProcessData> {
        const { tokenAccount, reserveId } = processData

        tokenAccount.balance += data.amount
        tokenAccount.reservedBalance -= data.amount
        const pallet = tokenAccount.namedReserves?.find((nr) => nr.pallet === reserveId)

        if (pallet) {
            pallet.amount -= data.amount

            if (pallet.amount <= BigInt(0)) {
                tokenAccount.namedReserves = tokenAccount.namedReserves?.filter((nr) => nr.pallet !== pallet.pallet)
            }
        }

        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)

        return processData
    }

    protected async dispatchTasks(ctx: CommonContext, data: Unreserved, result: UnreservedProcessData): Promise<void> {
        // No tasks to dispatch
    }

    protected getNotificationBody(item: EventItem, data: Unreserved, result: UnreservedProcessData): any {
        return unreservedMap.notification(item, data, result)
    }

    protected getEventModel(item: EventItem, data: Unreserved, result?: UnreservedProcessData): EventResult {
        return unreservedMap.event(item, data, result)
    }
}
