import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, StakeExchangeOffer } from '~/model'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'

export async function liquidityAdded(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.extrinsic || !item.extrinsic.call) return undefined

    const event = mappings.stakeExchange.events.liquidityAdded(item)
    const call = mappings.stakeExchange.calls.addLiquidity(item.extrinsic.call)

    const offer = await ctx.store.findOneByOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        id: event.offerId.toString(),
    })
    offer.total += call.amount
    if (offer.amount) offer.amount += call.amount

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
            amount: call.amount,
            account: event.who,
        },
    })

    await ctx.store.save(offer)

    return mappings.stakeExchange.events.liquidityAddedEventModel(item, event, call.amount)
}
