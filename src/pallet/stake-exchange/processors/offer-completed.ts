import { Block, CommonContext, EventItem } from '~/contexts'
import { Event as EventModel, StakeExchangeOffer, StakeExchangeOfferState } from '~/model'
import { Sns } from '~/util/sns'
import * as mappings from '~/pallet/index'

export async function offerCompleted(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const event = mappings.stakeExchange.events.offerCompleted(item)
    const stakeExchangeOffer = await ctx.store.findOneOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        where: { id: event.offerId.toString() },
        relations: {
            tokenFilter: true,
            account: true,
        },
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

    return mappings.stakeExchange.events.offerCompletedEventModel(item, stakeExchangeOffer)
}
