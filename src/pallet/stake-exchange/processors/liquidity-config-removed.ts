import { CommonContext, EventItem } from '~/contexts'
import { StakeExchangeTokenFilter } from '~/model'
import { stakeExchange } from '~/type/events'

export async function liquidityConfigRemoved(ctx: CommonContext, item: EventItem): Promise<undefined> {
    const { who } = stakeExchange.liquidityConfigRemoved.v1082.decode(item)
    const filter = await ctx.store.findOneBy(StakeExchangeTokenFilter, { account: { id: who } })
    if (!filter) return undefined

    // Historical LiquidityConfigUpdated events still refer to the filter by ID.
    filter.account = null
    await ctx.store.save(filter)
    return undefined
}
