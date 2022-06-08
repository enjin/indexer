import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenAccountDestroyedEvent } from '../../../types/generated/events'
import { TokenAccount } from '../../../model'
import { encodeId } from '../../../common/helpers'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensTokenAccountDestroyedEvent(ctx)

    if (event.isV4) {
        const { collectionId, tokenId, accountId } = event.asV4
        return { collectionId, tokenId, accountId }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleTokenAccountDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = encodeId(data.accountId)
    const tokenAccount = await ctx.store.findOne<TokenAccount>(
        TokenAccount,
        `${address}-${data.collectionId}-${data.tokenId}`
    )

    if (tokenAccount) {
        await ctx.store.delete(TokenAccount, { id: tokenAccount.id })
    }
}
