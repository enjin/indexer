import { Block, CommonContext } from '~/contexts'
import { ClaimDetails } from '~/model'
import * as mappings from '~/pallet/index'

export async function updateClaimDetails(ctx: CommonContext, block: Block) {
    const exchangeRate = await mappings.claims.storage.exchangeRate(block)
    if (exchangeRate === undefined) return

    const claimDetails = new ClaimDetails({
        id: '0',
        totalUnclaimedAmount: await mappings.claims.storage.totalUnclaimedAmount(block),
        delayClaimsPeriod: await mappings.claims.storage.delayClaimsPeriod(block),
        exchangeRate: typeof exchangeRate === 'bigint' ? null : exchangeRate,
    })

    await ctx.store.save(claimDetails)
}
