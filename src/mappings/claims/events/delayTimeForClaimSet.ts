import { UnsupportedEventError } from '../../../common/errors'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { ClaimDetails } from '../../../model'
import { claims } from '../../../types/generated/events'
import { getTotalUnclaimedAmount } from '../common'

function getEventData(event: EventItem) {
    if (claims.delayTimeForClaimSet.matrixEnjinV603.is(event)) {
        return claims.delayTimeForClaimSet.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(claims.delayTimeForClaimSet.name)
}

export async function delayTimeForClaimSet(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    const eventData = getEventData(item)

    const claimDetails = new ClaimDetails({
        id: '0',
        delayClaimsPeriod: eventData.delayTime,
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
    })

    await ctx.store.save(claimDetails)

    if (!eventData) return undefined

    return undefined
}
