import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import {
    Event as EventModel,
    Extrinsic,
    StakeExchangeOffer,
    StakeExchangeOfferCancelled,
    StakeExchangeOfferState,
} from '../../../model'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.stakeExchange.offerCancelled.enjinV100.is(event)) {
        return events.stakeExchange.offerCancelled.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.offerCancelled.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCancelled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCancelled({
            offerId: data.offerId,
        }),
    })
}

export async function offerCancelled(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

    const offer = await ctx.store.findOneByOrFail(StakeExchangeOffer, { id: eventData.offerId.toString() })
    offer.state = StakeExchangeOfferState.Cancelled
    await ctx.store.save(offer)

    await Sns.getInstance().send({
        id: item.id,
        name: item.name,
        body: {
            offerId: offer.offerId,
        },
    })

    return getEvent(item, eventData)
}
