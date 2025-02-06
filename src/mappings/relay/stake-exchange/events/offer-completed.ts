import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import {
    Event as EventModel,
    Extrinsic,
    StakeExchangeOffer,
    StakeExchangeOfferCompleted,
    StakeExchangeOfferState,
} from '../../../model'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.stakeExchange.offerCompleted.enjinV110.is(event)) {
        return events.stakeExchange.offerCompleted.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.stakeExchange.offerCompleted.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCompleted({
            offerId: data.offerId,
        }),
    })
}

export async function offerCompleted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(item)

    if (!eventData) return undefined

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

    return getEvent(item, eventData)
}
