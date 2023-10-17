import { u8aToHex, u8aToString } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { TokenAccount, TokenNamedReserve } from '../../../model'
import { MultiTokensReservedEvent } from '../../../types/generated/events'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(ctx: CommonContext, eventItem: Event) {
    const event = new MultiTokensReservedEvent(ctx, eventItem)

    if (event.isMatrixEnjinV603) {
        return event.asMatrixEnjinV603
    }

    return null
}

export async function reserved(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Reserved', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
) {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined
    if (skipSave) return undefined

    const tokenAccount = await ctx.store.findOneOrFail(TokenAccount, {
        where: { id: `${u8aToHex(data.accountId)}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.reservedBalance += data.amount
        const pallet = tokenAccount.namedReserves?.find((nr) => nr.pallet === u8aToString(data.reserveId))

        if (pallet) {
            pallet.amount += data.amount
        } else if (tokenAccount.namedReserves) {
            tokenAccount.namedReserves.push(new TokenNamedReserve({ pallet: u8aToString(data.reserveId), amount: data.amount }))
        } else {
            tokenAccount.namedReserves = [new TokenNamedReserve({ pallet: u8aToString(data.reserveId), amount: data.amount })]
        }

        tokenAccount.updatedAt = new Date(block.timestamp)

        ctx.store.save(tokenAccount)
    }

    syncCollectionStats(data.collectionId.toString())

    return undefined
}
