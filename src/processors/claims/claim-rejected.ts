import { claims } from '../../types/generated/events'
import { UnsupportedEventError } from '../../common/errors'
import { ClaimRequest, ClaimDetails, Event as EventModel } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getTotalUnclaimedAmount } from './common'

function getEventData(event: EventItem) {
    if (claims.claimRejected.matrixEnjinV603.is(event)) {
        return claims.claimRejected.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(claims.claimRejected.matrixEnjinV603.name)
}

export async function claimRejected(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const eventData = getEventData(item)

    if (!eventData) return undefined

    const claimREeq = await ctx.store.findOneByOrFail(ClaimRequest, { hash: eventData.transactionHash.toString() })

    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
    })

    claimREeq.isRejected = true

    await Promise.all([ctx.store.save(claimREeq), ctx.store.save(claimDetails)])

    return undefined
}
