import { Block, CommonContext, EventItem } from '../../../contexts'
import { Event as EventModel, StakeExchangeOffer } from '../../../model'
import { Sns } from '../../../utils/sns'
import * as mappings from '../../index'

export async function liquidityWithdrawn(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const event = mappings.stakeExchange.events.liquidityWithdrawn(item)
    const call = mappings.stakeExchange.calls.withdrawLiquidity(item.extrinsic.call)

    const offer = await ctx.store.findOneByOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        id: event.offerId.toString(),
    })
    offer.total -= call.amount

    await ctx.store.save(offer)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
            amount: call.amount,
            account: event.who,
        },
    })

    return mappings.stakeExchange.events.liquidityWithdrawnEventModel(item, event)
}
