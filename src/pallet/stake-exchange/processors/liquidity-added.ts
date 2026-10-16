import { Block, CommonContext, EventItem } from '~/contexts'
import { StakeExchangeOffer } from '~/model'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { liquidityAmountFor } from '~/pallet/stake-exchange/liquidity-calls'

export async function liquidityAdded(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    if (!item.extrinsic) return undefined

    const event = mappings.stakeExchange.events.liquidityAdded(item)
    // `LiquidityAdded` carries no amount; read it from the call that emitted this event, not the extrinsic's
    // top-level call, which is a wrapper under batch/proxy/multisig/fuel-tank dispatch.
    const amount = liquidityAmountFor(item, 'add_liquidity', event.offerId)

    if (amount === undefined) {
        ctx.log.warn(`[LiquidityAdded] No add_liquidity call found for offer ${event.offerId} in ${item.id}`)
        return mappings.stakeExchange.events.liquidityAddedEventModel(item, event, 0n)
    }

    const offer = await ctx.store.findOneByOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        id: event.offerId.toString(),
    })
    offer.total += amount
    if (offer.amount) offer.amount += amount

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
            amount,
            account: event.who,
        },
    }

    await ctx.store.save(offer)

    return [mappings.stakeExchange.events.liquidityAddedEventModel(item, event, amount), snsEvent]
}
