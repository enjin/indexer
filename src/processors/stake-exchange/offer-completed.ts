import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Event as EventModel, StakeExchangeOffer, StakeExchangeOfferState } from '../../model'
import { Sns } from '../../common/sns'
import * as mappings from '../../mappings'

export async function offerCompleted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = mappings.stakeExchange.events.offerCompleted(item)

    const offer = await ctx.store.findOneOrFail(StakeExchangeOffer, {
        where: { id: eventData.offerId.toString() },
    })
    offer.state = StakeExchangeOfferState.Completed

    await ctx.store.save(offer)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
        },
    })

    return mappings.stakeExchange.events.offerCompletedEventModel(item, eventData)
}
