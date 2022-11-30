import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenAccountDestroyedEvent } from '../../../types/generated/events'
import { CollectionAccount, TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensTokenAccountDestroyedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, accountId } = event.asEfinityV2
        return { collectionId, tokenId, accountId }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function tokenAccountDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${u8aToHex(data.accountId)}` },
    })
    collectionAccount.accountCount -= 1
    await ctx.store.save(collectionAccount)

    const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
        where: { id: `${u8aToHex(data.accountId)}-${data.collectionId}-${data.tokenId}` },
    })

    await ctx.store.remove(tokenAccount)
}
