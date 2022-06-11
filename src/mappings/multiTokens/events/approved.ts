import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensApprovedEvent } from '../../../types/generated/events'
import { CollectionAccount, TokenAccount, TokenApproval, CollectionApproval } from '../../../model'
import { encodeId } from '../../../common/helpers'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    owner: Uint8Array
    operator: Uint8Array
    amount: bigint | undefined
    expiration: number | undefined
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensApprovedEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, owner, operator, amount, expiration } = event.asV2
        return {
            collectionId,
            tokenId,
            owner,
            operator,
            amount,
            expiration,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleApproved(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = encodeId(data.owner)

    if (data.tokenId) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(
            TokenAccount,
            `${address}-${data.collectionId}-${data.tokenId}`
        )

        if (!tokenAccount) return

        const approvals = tokenAccount.approvals ?? []
        approvals.push(
            new TokenApproval({
                account: encodeId(data.operator),
                amount: data.amount,
                expiration: data.expiration,
            })
        )

        await ctx.store.update(
            TokenAccount,
            { id: tokenAccount.id },
            {
                approvals: approvals,
                updatedAt: new Date(ctx.block.timestamp),
            }
        )
    } else {
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(
            CollectionAccount,
            `${data.collectionId}-${address}`
        )

        if (!collectionAccount) return

        const approvals = collectionAccount.approvals ?? []
        approvals.push(
            new CollectionApproval({
                account: encodeId(data.operator),
                expiration: data.expiration,
            })
        )

        await ctx.store.update(
            CollectionAccount,
            { id: collectionAccount.id },
            {
                approvals: approvals,
                updatedAt: new Date(ctx.block.timestamp),
            }
        )
    }
}
