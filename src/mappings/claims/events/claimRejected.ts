import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { ClaimsClaimRejectedEvent } from '../../../types/generated/events'
import { ClaimRequest, ClaimDetails, Event as EventModel } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getTotalUnclaimedAmount } from '../common'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsClaimRejectedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function claimRejected(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.ClaimRejected', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    if (!eventData) return undefined

    const claimREeq = await ctx.store.findOneByOrFail(ClaimRequest, { hash: u8aToHex(eventData.transactionHash).toString() })

    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
    })

    claimREeq.isRejected = true

    await Promise.all([ctx.store.save(claimREeq), ctx.store.save(claimDetails)])

    return undefined
}
