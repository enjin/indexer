import { stakeExchange } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeOffer, StakeExchangeOfferCompleted } from '~/model'
import { OfferCompleted } from '~/pallet/stake-exchange/events/types'

export function offerCompleted(event: EventItem): OfferCompleted {
    return match(event)
        .returnType<OfferCompleted>()
        .when(
            () => stakeExchange.offerCompleted.enjinV110.is(event),
            () => stakeExchange.offerCompleted.enjinV110.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function offerCompletedEventModel(
    item: EventItem,
    stakeExchangeOffer: StakeExchangeOffer
): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCompleted({
            offer: stakeExchangeOffer.id.toString(),
            offerId: stakeExchangeOffer.offerId,
            amount: stakeExchangeOffer.amount ?? 0n,
            account: stakeExchangeOffer.account.id,
        }),
    })
}
