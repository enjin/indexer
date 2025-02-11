import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeOfferCompleted } from '../../../model'
import { OfferCompleted } from './types'

export function offerCompleted(event: EventItem): OfferCompleted {
    return match(event)
        .returnType<OfferCompleted>()
        .when(stakeExchange.offerCompleted.enjinV110.is, stakeExchange.offerCompleted.enjinV110.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function offerCompletedEventModel(item: EventItem, data: OfferCompleted): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCompleted({
            offerId: data.offerId,
        }),
    })
}
