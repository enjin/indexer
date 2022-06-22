import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenAccountDestroyedEvent } from '../../../types/generated/events'
import { TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensTokenAccountDestroyedEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, accountId } = event.asV2
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
        await ctx.store.remove(tokenAccount)
    }
}
