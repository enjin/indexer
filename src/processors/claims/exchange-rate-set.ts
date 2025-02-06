import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { ClaimDetails } from '../../model'
import { getTotalUnclaimedAmount } from './common'
import * as mappings from './../../mappings'

export async function exchangeRateSet(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    const eventData = mappings.claims.events.exchangeRateSet(item)

    const claimDetails = new ClaimDetails({
        id: '0',
        exchangeRate: eventData.exchangeRate,
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
    })

    await ctx.store.save(claimDetails)

    if (!eventData) return undefined

    return undefined
}
