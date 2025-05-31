import { hexToString } from '@polkadot/util'
import { TokenAccount, TokenNamedReserve } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { QueueUtils } from '../../../queues'
import { throwFatalError } from '../../../utils/errors'
import { match, P } from 'ts-pattern'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { Reserved } from './reserved.type'
import { multiTokens } from '../../../types/events'
import { reserved } from './reserved.map'

interface ReservedProcessData {
    tokenAccount: TokenAccount
    reserveId: string
}

export class ReservedProcessor extends EventProcessor<Reserved> {
    constructor() {
        super(multiTokens.reserved.name)
    }

    protected decodeEventItem(item: EventItem): Reserved {
        return reserved(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: Reserved): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: Reserved
    ): Promise<ReservedProcessData | undefined> {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${data.accountId}-${data.collectionId}-${data.tokenId}` },
            relations: { account: true },
        })

        if (!tokenAccount) {
            throwFatalError(
                `[Reserved] We have not found token account ${data.accountId}-${data.collectionId}-${data.tokenId}.`
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
        data: Reserved,
        processData: ReservedProcessData
    ): Promise<ReservedProcessData> {
        const { tokenAccount, reserveId } = processData

        tokenAccount.balance -= data.amount
        tokenAccount.reservedBalance += data.amount
        const pallet = tokenAccount.namedReserves?.find((nr) => nr.pallet === reserveId)

        if (pallet) {
            pallet.amount += data.amount
        } else if (tokenAccount.namedReserves) {
            tokenAccount.namedReserves.push(new TokenNamedReserve({ pallet: reserveId, amount: data.amount }))
        } else {
            tokenAccount.namedReserves = [new TokenNamedReserve({ pallet: reserveId, amount: data.amount })]
        }

        tokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(tokenAccount)

        return processData
    }

    protected async dispatchTasks(ctx: CommonContext, data: Reserved, result: ReservedProcessData): Promise<void> {
        QueueUtils.dispatchComputeStats(data.collectionId.toString())
    }

    protected getNotificationBody(item: EventItem, data: Reserved, result: ReservedProcessData): any {
        return {
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            account: data.accountId,
            amount: data.amount,
            reserveId: result.reserveId,
            extrinsic: item.extrinsic?.id,
        }
    }

    protected getEventModel(item: EventItem, data: Reserved, result?: ReservedProcessData): EventResult {
        return undefined
    }
}
