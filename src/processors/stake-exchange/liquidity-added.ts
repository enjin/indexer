import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { Event as EventModel, StakeExchangeOffer } from '../../model'
import { Sns } from '../../common/sns'
import * as mappings from '../../mappings'

export async function liquidityAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined
    if (!item.extrinsic.call) return undefined

    const eventData = mappings.stakeExchange.events.liquidityAdded(item)
    const callData = mappings.stakeExchange.calls.addLiquidity(item.extrinsic.call)

    const offer = await ctx.store.findOneByOrFail<StakeExchangeOffer>(StakeExchangeOffer, { id: eventData.offerId.toString() })
    offer.total += callData.amount

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
            amount: callData.amount,
            account: eventData.who,
        },
    })

    await ctx.store.save(offer)

    return mappings.stakeExchange.events.liquidityAddedEventModel(item, eventData)
}
