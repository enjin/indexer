import { Block, CommonContext, EventItem } from '~/contexts'
import { StakeExchangeOffer } from '~/model'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'
import { liquidityAmountFor } from '~/pallet/stake-exchange/liquidity-calls'

export async function liquidityWithdrawn(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    if (!item.extrinsic) return undefined

    const event = mappings.stakeExchange.events.liquidityWithdrawn(item)
    // `LiquidityWithdrawn` carries no amount; read it from the call that emitted this event, not the extrinsic's
    // top-level call, which is a wrapper under batch/proxy/multisig/fuel-tank dispatch.
    const amount = liquidityAmountFor(item, 'withdraw_liquidity', event.offerId)

    if (amount === undefined) {
        ctx.log.warn(`[LiquidityWithdrawn] No withdraw_liquidity call found for offer ${event.offerId} in ${item.id}`)
        return mappings.stakeExchange.events.liquidityWithdrawnEventModel(item, event, 0n)
    }

    const offer = await ctx.store.findOneByOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        id: event.offerId.toString(),
    })
    if (offer.amount) offer.amount -= amount
    offer.total -= amount

    await ctx.store.save(offer)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
            amount,
            account: event.who,
        },
    }

    return [mappings.stakeExchange.events.liquidityWithdrawnEventModel(item, event, amount), snsEvent]
}
