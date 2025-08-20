import { Block, CommonContext, EventItem } from '~/contexts'
import { StakeExchangeOffer } from '~/model'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function liquidityWithdrawn(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventHandlerResult> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const event = mappings.stakeExchange.events.liquidityWithdrawn(item)
    const call = mappings.stakeExchange.calls.withdrawLiquidity(item.extrinsic.call)

    const offer = await ctx.store.findOneByOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        id: event.offerId.toString(),
    })
    if (offer.amount) offer.amount -= call.amount
    offer.total -= call.amount

    await ctx.store.save(offer)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
            amount: call.amount,
            account: event.who,
        },
    }

    return [mappings.stakeExchange.events.liquidityWithdrawnEventModel(item, event, call.amount), snsEvent]
}
