import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { ClaimDetails } from '../../../model'
import { ClaimsExchangeRateSetEvent } from '../../../types/generated/events'
import { getTotalUnclaimedAmount } from '../common'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsExchangeRateSetEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function exchangeRateSet(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Claims.ExchangeRateSet', { event: { args: true; extrinsic: true } }>
) {
    const eventData = getEventData(ctx, item.event)

    const claimDetails = new ClaimDetails({
        id: '0',
        exchangeRate: eventData.exchangeRate,
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
    })

    await ctx.store.save(ClaimDetails, claimDetails as any)

    if (!eventData) return undefined

    return undefined
}
