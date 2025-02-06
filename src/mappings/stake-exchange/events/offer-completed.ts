import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeOfferCompleted } from '../../../model'

type OfferCompletedEvent = {
    offerId: bigint
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<OfferCompletedEvent>()
        .when(stakeExchange.offerCompleted.enjinV110.is, () => stakeExchange.offerCompleted.enjinV110.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(stakeExchange.offerCompleted)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCompleted({
            offer: data.offerId.toString(),
        }),
    })
}
