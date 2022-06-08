import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensUnapprovedEvent } from '../../../types/generated/events'
import { CollectionAccount, TokenAccount } from '../../../model'
import { encodeId } from '../../../common/helpers'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    owner: Uint8Array
    operator: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensUnapprovedEvent(ctx)

    if (event.isV4) {
        const { collectionId, tokenId, owner, operator } = event.asV4
        return {
            collectionId,
            tokenId,
            owner,
            operator,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleUnapproved(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = encodeId(data.owner)

    if (data.tokenId) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(
            TokenAccount,
            `${address}-${data.collectionId}-${data.tokenId}`
        )

        if (!tokenAccount) return

        const approvals = tokenAccount.approvals?.filter((approval) => approval.account != encodeId(data.operator))
        await ctx.store.update(
            TokenAccount,
            { id: tokenAccount.id },
            {
                approvals: approvals,
            }
        )
    } else {
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(
            CollectionAccount,
            `${data.collectionId}-${address}`
        )

        if (!collectionAccount) return

        const approvals = collectionAccount.approvals?.filter((approval) => approval.account != encodeId(data.operator))

        await ctx.store.update(
            CollectionAccount,
            { id: collectionAccount.id },
            {
                approvals: approvals,
            }
        )
    }
}
