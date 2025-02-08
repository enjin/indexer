import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Event as EventModel, StakeExchangeOffer, StakeExchangeOfferState } from '../../model'
import { Sns } from '../../common/sns'
import * as mappings from '../../mappings'

export async function offerCancelled(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.stakeExchange.events.offerCancelled(item)
    const offer = await ctx.store.findOneByOrFail<StakeExchangeOffer>(StakeExchangeOffer, { id: eventData.offerId.toString() })

    offer.state = StakeExchangeOfferState.Cancelled
    await ctx.store.save(offer)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
        },
    })

    return mappings.stakeExchange.events.offerCancelledEventModel(item, eventData)
}
