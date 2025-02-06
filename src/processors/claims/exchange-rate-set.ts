import { UnsupportedEventError } from '../../common/errors'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { ClaimDetails } from '../../model'
import { claims } from '../../types/generated/events'
import { getTotalUnclaimedAmount } from './common'

export async function exchangeRateSet(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    const eventData = getEventData(item)

    const claimDetails = new ClaimDetails({
        id: '0',
        exchangeRate: eventData.exchangeRate,
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
    })

    await ctx.store.save(claimDetails)

    if (!eventData) return undefined

    return undefined
}
