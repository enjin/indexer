import { Block, CommonContext, EventItem } from '../../../contexts'
import { Event as EventModel, StakeExchangeOffer, StakeExchangeOfferState } from '../../../model'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'

export async function offerCancelled(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const event = mappings.stakeExchange.events.offerCancelled(item)
    const stakeExchangeOffer = await ctx.store.findOneByOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        id: event.offerId.toString(),
    })

    stakeExchangeOffer.state = StakeExchangeOfferState.Cancelled

    await ctx.store.save(stakeExchangeOffer)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: stakeExchangeOffer.offerId,
        },
    })

    return mappings.stakeExchange.events.offerCancelledEventModel(item, event)
}
