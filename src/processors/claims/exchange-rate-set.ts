import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import { ClaimDetails } from '../../model'
import * as mappings from './../../mappings'

export async function exchangeRateSet(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    const event = mappings.claims.events.exchangeRateSet(item)

    const claimDetails = new ClaimDetails({
        id: '0',
        exchangeRate: event.exchangeRate,
        totalUnclaimedAmount: await mappings.claims.storage.totalUnclaimedAmount(block),
    })

    await ctx.store.save(claimDetails)
}
