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
    console.log(ctx.event.name)
    const event = new MultiTokensUnapprovedEvent(ctx)

    if (event.isV5) {
        const { collectionId, tokenId, owner, operator } = event.asV5
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
        const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
            relations: {
                account: true,
                collection: true,
                token: true,
            },
        })

        tokenAccount.approvals = tokenAccount.approvals?.filter(
            (approval) => approval.account != encodeId(data.operator)
        )
        tokenAccount.updatedAt = new Date(ctx.block.timestamp)

        await ctx.store.save(tokenAccount)
    } else {
        const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
            relations: {
                account: true,
                collection: true,
            },
        })

        collectionAccount.approvals = collectionAccount.approvals?.filter(
            (approval) => approval.account != encodeId(data.operator)
        )
        collectionAccount.updatedAt = new Date(ctx.block.timestamp)

        await ctx.store.save(collectionAccount)
    }
}
