import { Block, CommonContext, EventItem } from '../../contexts'
import { ClaimDetails } from '../../model'
import * as mappings from './../../mappings'

export async function delayTimeForClaimSet(ctx: CommonContext, block: Block, item: EventItem): Promise<undefined> {
    const event = mappings.claims.events.delayTimeForClaimSet(item)

    const claimDetails = new ClaimDetails({
        id: '0',
        delayClaimsPeriod: event.delayTime,
        totalUnclaimedAmount: await mappings.claims.storage.totalUnclaimedAmount(block),
    })

    await ctx.store.save(claimDetails)
}
