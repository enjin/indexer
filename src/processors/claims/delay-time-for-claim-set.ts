import { UnsupportedEventError } from '../../common/errors'
import { CommonContext, BlockHeader, EventItem } from '../../common/types/contexts'
import { ClaimDetails } from '../../model'
import { claims } from '../../types/generated/events'
import { getTotalUnclaimedAmount } from './common'
import * as mappings from './../../mappings'
export async function delayTimeForClaimSet(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    const eventData = mappings.claims.events.delayTimeForClaimSet(item)

    const claimDetails = new ClaimDetails({
        id: '0',
        delayClaimsPeriod: eventData.delayTime,
        totalUnclaimedAmount: await getTotalUnclaimedAmount(ctx, block),
    })

    await ctx.store.save(claimDetails)

    if (!eventData) return undefined

    return undefined
}
