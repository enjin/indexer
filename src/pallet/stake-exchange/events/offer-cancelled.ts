import { stakeExchange } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeOffer, StakeExchangeOfferCancelled } from '~/model'
import { OfferCancelled } from '~/pallet/stake-exchange/events/types'

export function offerCancelled(event: EventItem): OfferCancelled {
    return match(event)
        .returnType<OfferCancelled>()
        .when(
            () => stakeExchange.offerCancelled.enjinV100.is(event),
            () => stakeExchange.offerCancelled.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function offerCancelledEventModel(
    item: EventItem,
    stakeExchangeOffer: StakeExchangeOffer
): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCancelled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCancelled({
            offerId: stakeExchangeOffer.offerId,
            total: stakeExchangeOffer.total,
            account: stakeExchangeOffer.account.id,
            tokenFilter: stakeExchangeOffer.tokenFilter?.id,
        }),
    })
}
