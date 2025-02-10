import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Event as EventModel, StakeExchangeOffer, StakeExchangeOfferState } from '../../model'
import { Sns } from '../../common/sns'
import * as mappings from '../../mappings'

export async function offerCompleted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    const event = mappings.stakeExchange.events.offerCompleted(item)
    const stakeExchangeOffer = await ctx.store.findOneOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        where: { id: event.offerId.toString() },
    })

    stakeExchangeOffer.state = StakeExchangeOfferState.Completed

    await ctx.store.save(stakeExchangeOffer)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: stakeExchangeOffer.offerId,
        },
    })

    return mappings.stakeExchange.events.offerCompletedEventModel(item, event)
}
