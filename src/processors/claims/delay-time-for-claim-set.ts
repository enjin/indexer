import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { ClaimDetails } from '../../model'
import * as mappings from './../../mappings'

export async function delayTimeForClaimSet(ctx: CommonContext, block: BlockHeader, item: EventItem) {
    const eventData = mappings.claims.events.delayTimeForClaimSet(item)

    const claimDetails = new ClaimDetails({
        id: '0',
        delayClaimsPeriod: eventData.delayTime,
        totalUnclaimedAmount: await mappings.claims.storage.totalUnclaimedAmount(block),
    })

    await ctx.store.save(claimDetails)
}
