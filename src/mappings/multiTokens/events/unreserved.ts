import { u8aToHex, u8aToString } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { TokenAccount } from '../../../model'
import { MultiTokensUnreservedEvent } from '../../../types/generated/events'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'

function getEventData(ctx: CommonContext, eventItem: Event) {
    const data = new MultiTokensUnreservedEvent(ctx, eventItem)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function unreserved(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Unreserved', { event: { args: true; extrinsic: true } }>,
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
        tokenAccount.balance += data.amount
        tokenAccount.reservedBalance -= data.amount
        const pallet = tokenAccount.namedReserves?.find((nr) => nr.pallet === u8aToString(data.reserveId))

        if (pallet) {
            pallet.amount -= data.amount

            if (pallet.amount <= BigInt(0)) {
                tokenAccount.namedReserves = tokenAccount.namedReserves?.filter((nr) => nr.pallet !== pallet.pallet)
            }
        }

        tokenAccount.updatedAt = new Date(block.timestamp)

        await ctx.store.save(tokenAccount)
    }

    return undefined
}
