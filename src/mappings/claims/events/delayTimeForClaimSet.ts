import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { ClaimDetails } from '../../../model'
import { ClaimsDelayTimeForClaimSetEvent } from '../../../types/generated/events'
import { getEarlyBirdRewardRate, getMinEarlyBirdDelay, getTotalUnclaimedAmount } from '../common'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsDelayTimeForClaimSetEvent(ctx, event)

    if (data.isV602) {
        return data.asV602
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function delayTimeForClaimSet(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.DelayTimeForClaimSet', { event: { args: true; extrinsic: true } }>
) {
    if (!item.event.extrinsic) return undefined

    const eventData = getEventData(ctx, item.event)

    const claimDetails = new ClaimDetails({
        id: '0',
        delayClaimsPeriod: eventData.delayTime,
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
        minEarlyBirdDelay: getMinEarlyBirdDelay(ctx),
        earlyBirdRewardRate: getEarlyBirdRewardRate(ctx),
    })

    await ctx.store.save(ClaimDetails, claimDetails as any)

    if (!eventData) return undefined

    return undefined
}
