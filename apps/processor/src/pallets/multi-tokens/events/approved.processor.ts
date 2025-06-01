import { throwFatalError } from '../../../utils/errors'
import { CollectionAccount, CollectionApproval, TokenAccount, TokenApproval } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { encodeAddress } from '../../../utils/tools'
import { EventProcessor } from '../../event-processor.def'
import { multiTokens } from '../../../types/events'
import { Approved } from './approved.type'
import { approvedMap } from './approved.map'

export interface ApprovedProcessData {
    tokenAccount?: TokenAccount
    collectionAccount?: CollectionAccount
    address: string
    kind: 'token' | 'collection'
}

export class ApprovedProcessor extends EventProcessor<Approved, ApprovedProcessData> {
    constructor() {
        super(multiTokens.approved.name, approvedMap)
    }

    protected decodeEventItem(item: EventItem): Approved {
        return approvedMap.decode(item)
    }

    protected async prepareSkipSaveData(ctx: CommonContext, data: Approved): Promise<any> {
        return undefined
    }

    protected async loadRequiredData(
        ctx: CommonContext,
        item: EventItem,
        data: Approved
    ): Promise<ApprovedProcessData | undefined> {
        const address = data.owner
        const kind = data.tokenId !== undefined ? 'token' : 'collection'

        if (kind === 'token') {
            const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
                where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
            })

            if (!tokenAccount) {
                throwFatalError(
                    `[Approved] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`
                )
                return undefined
            }

            return { tokenAccount, address, kind }
        } else {
            const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
                where: { id: `${data.collectionId}-${address}` },
            })

            if (!collectionAccount) {
                throwFatalError(`[Approved] We have not found collection account ${data.collectionId}-${address}.`)
                return undefined
            }

            return { collectionAccount, address, kind }
        }
    }

    protected async processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: Approved,
        processData: ApprovedProcessData
    ): Promise<ApprovedProcessData> {
        const { tokenAccount, collectionAccount } = processData
        const timestamp = new Date(block.timestamp ?? 0)

        if (tokenAccount) {
            const approvals = tokenAccount.approvals ?? []
            approvals.push(
                new TokenApproval({
                    accountId: encodeAddress(data.operator),
                    amount: data.amount,
                    expiration: data.expiration,
                })
            )

            tokenAccount.approvals = approvals
            tokenAccount.updatedAt = timestamp
            await ctx.store.save(tokenAccount)
        } else if (collectionAccount) {
            const approvals = collectionAccount.approvals ?? []
            approvals.push(
                new CollectionApproval({
                    accountId: encodeAddress(data.operator),
                    expiration: data.expiration,
                })
            )

            collectionAccount.approvals = approvals
            collectionAccount.updatedAt = timestamp
            await ctx.store.save(collectionAccount)
        }

        return processData
    }
}
