import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeOfferCancelled } from '../../../model'

type OfferCancelledEvent = {
    offerId: bigint
}

export function offerCancelled(event: EventItem): OfferCancelledEvent {
    return match(event)
        .returnType<OfferCancelledEvent>()
        .when(stakeExchange.offerCancelled.enjinV100.is, stakeExchange.offerCancelled.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function offerCancelledEventModel(item: EventItem, data: any): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCancelled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCancelled({
            offerId: data.offerId,
        }),
    })
}
