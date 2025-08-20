import { Block, CommonContext, EventItem } from '~/contexts'
import { StakeExchangeOffer } from '~/model'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function liquidityAdded(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const event = mappings.stakeExchange.events.liquidityAdded(item)
    const call = mappings.stakeExchange.calls.addLiquidity(item.extrinsic.call)

    const offer = await ctx.store.findOneByOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        id: event.offerId.toString(),
    })
    offer.total += call.amount
    if (offer.amount) offer.amount += call.amount

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
            amount: call.amount,
            account: event.who,
        },
    }

    await ctx.store.save(offer)

    return [mappings.stakeExchange.events.liquidityAddedEventModel(item, event, call.amount), snsEvent]
}
