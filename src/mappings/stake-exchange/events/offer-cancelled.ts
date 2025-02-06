import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeOfferCancelled } from '../../../model'

type OfferCancelledEvent = {
    offerId: bigint
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<OfferCancelledEvent>()
        .when(stakeExchange.offerCancelled.enjinV100.is, () => stakeExchange.offerCancelled.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(stakeExchange.offerCancelled)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCancelled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCancelled({
            offer: data.offerId.toString(),
        }),
    })
}
