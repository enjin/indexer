import { BlockHeader, CommonContext, EventItem } from '../../contexts'
import { Event as EventModel, StakeExchangeOffer, StakeExchangeOfferState } from '../../model'
import { Sns } from '../../utils/sns'
import * as mappings from '../../mappings'

export async function offerCancelled(
    ctx: CommonContext,
    block: BlockHeader,
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
