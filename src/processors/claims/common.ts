import { BlockHeader, CommonContext } from '../../common/types/contexts'
import { ClaimDetails } from '../../model'
import * as mappings from './../../mappings'

export async function updateClaimDetails(ctx: CommonContext, block: BlockHeader) {
    const rate = await mappings.claims.storage.exchangeRate(block)
    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await mappings.claims.storage.totalUnclaimedAmount(block),
        delayClaimsPeriod: await mappings.claims.storage.delayClaimsPeriod(block),
        exchangeRate: typeof rate === 'bigint' ? null : rate,
    })

    await ctx.store.save(claimDetails)
}
