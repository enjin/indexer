import { Block, CommonContext, EventItem } from '~/contexts'
import { StakeExchangeOffer, StakeExchangeOfferState } from '~/model'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { EventHandlerResult } from '~/processor.handler'

export async function offerCancelled(ctx: CommonContext, block: Block, item: EventItem): Promise<EventHandlerResult> {
    const event = mappings.stakeExchange.events.offerCancelled(item)
    const stakeExchangeOffer = await ctx.store.findOneOrFail<StakeExchangeOffer>(StakeExchangeOffer, {
        where: {
            offerId: event.offerId,
        },
        relations: {
            tokenFilter: true,
            account: true,
        },
    })

    stakeExchangeOffer.state = StakeExchangeOfferState.Cancelled

    await ctx.store.save(stakeExchangeOffer)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            offerId: stakeExchangeOffer.offerId,
        },
    }

    return [mappings.stakeExchange.events.offerCancelledEventModel(item, stakeExchangeOffer), snsEvent]
}
