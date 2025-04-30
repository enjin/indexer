import { Block, CommonContext, EventItem } from '../../../contexts'
import { ClaimDetails } from '../../../model'
import * as mappings from '../../index'

export async function exchangeRateSet(ctx: CommonContext, block: Block, item: EventItem): Promise<undefined> {
    const event = mappings.claims.events.exchangeRateSet(item)

    const totalUnclaimedAmount = await mappings.claims.storage.totalUnclaimedAmount(block)
    const claimDetails = new ClaimDetails({
        id: '0',
        exchangeRate: event.exchangeRate,
        totalUnclaimedAmount: totalUnclaimedAmount ?? 0n,
    })

    await ctx.store.save(claimDetails)
}
