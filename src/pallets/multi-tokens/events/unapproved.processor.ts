import { throwFatalError } from '../../../utils/errors'
import { CollectionAccount, Event as EventModel, Extrinsic, MultiTokensUnapproved, TokenAccount } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { encodeAddress } from '../../../utils/tools'
import { EventProcessor, EventResult } from '../../event-processor.def'
import { Unapproved } from './unapproved.type'
import { multiTokens } from '../../../types/events'
import { unapprovedMap } from './unapproved.map'

export interface UnapprovedProcessData {
    tokenAccount?: TokenAccount
    collectionAccount?: CollectionAccount
    address: string
    kind: 'token' | 'collection'
}

export class UnapprovedProcessor extends EventProcessor<Unapproved> {
    constructor() {
        super(multiTokens.unapproved.name, unapprovedMap)
    }

    protected decodeEventItem(item: EventItem): Unapproved {
        return unapprovedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: Unapproved): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: Unapproved
    ): Promise<UnapprovedProcessData | undefined> {
        const address = data.owner
        const kind = data.tokenId !== undefined ? 'token' : 'collection'

        if (kind === 'token') {
            const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
                where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
            })

            if (!tokenAccount) {
                throwFatalError(
                    `[Unapproved] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`
                )
                return undefined
            }

            return { tokenAccount, address, kind }
        } else {
            const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
                where: { id: `${data.collectionId}-${address}` },
            })

            if (!collectionAccount) {
                throwFatalError(`[Unapproved] We have not found collection account ${data.collectionId}-${address}.`)
                return undefined
            }

            return { collectionAccount, address, kind }
        }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: Unapproved,
        processData: UnapprovedProcessData
    ): Promise<UnapprovedProcessData> {
        const { tokenAccount, collectionAccount } = processData
        const timestamp = new Date(block.timestamp ?? 0)
        const encodedOperator = encodeAddress(data.operator)

        if (tokenAccount) {
            tokenAccount.approvals = tokenAccount.approvals?.filter(
                (approval) => approval.accountId !== encodedOperator
            )
            tokenAccount.updatedAt = timestamp
            await ctx.store.save(tokenAccount)
        } else if (collectionAccount) {
            collectionAccount.approvals = collectionAccount.approvals?.filter(
                (approval) => approval.accountId !== encodedOperator
            )
            collectionAccount.updatedAt = timestamp
            await ctx.store.save(collectionAccount)
        }

        return processData
    }

    protected getNotificationBody(item: EventItem, data: Unapproved, result: UnapprovedProcessData): any {
        return unapprovedMap.notification(item, data, result)
    }

    protected getEventModel(item: EventItem, data: Unapproved, result?: UnapprovedProcessData): EventResult {
        return unapprovedMap.event(item, data, result)
    }
}
