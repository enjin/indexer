import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensUnapprovedEvent } from '../../../types/generated/events'
import { CollectionAccount, TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    owner: Uint8Array
    operator: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensUnapprovedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, owner, operator } = event.asEfinityV2
        return {
            collectionId,
            tokenId,
            owner,
            operator,
        }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function unapproved(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = encodeId(data.owner)

    if (data.tokenId) {
        const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        tokenAccount.approvals = tokenAccount.approvals?.filter(
            (approval) => approval.account !== encodeId(data.operator)
        )
        tokenAccount.updatedAt = new Date(ctx.block.timestamp)

        await ctx.store.save(tokenAccount)
    } else {
        const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        collectionAccount.approvals = collectionAccount.approvals?.filter(
            (approval) => approval.account !== encodeId(data.operator)
        )
        collectionAccount.updatedAt = new Date(ctx.block.timestamp)

        await ctx.store.save(collectionAccount)
    }
}
