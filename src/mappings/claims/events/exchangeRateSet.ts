import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { ClaimDetails } from '../../../model'
import { ClaimsExchangeRateSetEvent } from '../../../types/generated/events'
import { getEarlyBirdRewardRate, getMinEarlyBirdDelay, getTotalUnclaimedAmount } from '../common'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsExchangeRateSetEvent(ctx, event)

    if (data.isV104) {
        return data.asV104
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function exchangeRateSet(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.ExchangeRateSet', { event: { args: true; extrinsic: true } }>
) {
    if (!item.event.extrinsic) return undefined

    const eventData = getEventData(ctx, item.event)

    const claimDetails = new ClaimDetails({
        id: '0',
        exchangeRate: eventData.exchangeRate,
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
        minEarlyBirdDelay: getMinEarlyBirdDelay(ctx),
        earlyBirdRewardRate: getEarlyBirdRewardRate(ctx),
    })

    await ctx.store.save(ClaimDetails, claimDetails as any)

    if (!eventData) return undefined

    return undefined
}
