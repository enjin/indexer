import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenAccountDestroyedEvent } from '../../../types/generated/events'
import { CollectionAccount, Event as EventModel, Extrinsic, MultiTokensTokenAccountDestroyed, TokenAccount } from '../../../model'
import { Context } from '../../../processor'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensTokenAccountDestroyedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, accountId } = data.asEfinityV2
        return { collectionId, tokenId, accountId }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function tokenAccountDestroyed(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenAccountDestroyed', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${u8aToHex(data.accountId)}` },
    })
    collectionAccount.accountCount -= 1
    await ctx.store.save(collectionAccount)

    const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
        where: { id: `${u8aToHex(data.accountId)}-${data.collectionId}-${data.tokenId}` },
    })

    await ctx.store.remove(tokenAccount)

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensTokenAccountDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            accountId: u8aToHex(data.accountId),
        }),
    })
}
