import { stakeExchange } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeOfferCreated } from '~/model'
import { OfferCreated } from '~/pallet/stake-exchange/events/types'

export function offerCreated(event: EventItem): OfferCreated {
    return match(event)
        .returnType<OfferCreated>()
        .when(
            () => stakeExchange.offerCreated.enjinV1023.is(event),
            () => stakeExchange.offerCreated.enjinV1023.decode(event)
        )
        .when(
            () => stakeExchange.offerCreated.enjinV1021.is(event),
            () => stakeExchange.offerCreated.enjinV1021.decode(event)
        )
        .when(
            () => stakeExchange.offerCreated.enjinV120.is(event),
            () => stakeExchange.offerCreated.enjinV120.decode(event)
        )
        .when(
            () => stakeExchange.offerCreated.enjinV100.is(event),
            () => stakeExchange.offerCreated.enjinV100.decode(event)
        )
        .when(
            () => stakeExchange.offerCreated.v1023.is(event),
            () => stakeExchange.offerCreated.v1023.decode(event)
        )
        .when(
            () => stakeExchange.offerCreated.v1021.is(event),
            () => stakeExchange.offerCreated.v1021.decode(event)
        )
        .when(
            () => stakeExchange.offerCreated.v120.is(event),
            () => stakeExchange.offerCreated.v120.decode(event)
        )
        .when(
            () => stakeExchange.offerCreated.v101.is(event),
            () => stakeExchange.offerCreated.v101.decode(event)
        )
        .when(
            () => stakeExchange.offerCreated.v100.is(event),
            () => stakeExchange.offerCreated.v100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function offerCreatedEventModel(
    item: EventItem,
    data: OfferCreated,
    rewardRateAsFixedu128: bigint
): EventModel | undefined {
    const rate = typeof data.offer.rate === 'bigint' ? data.offer.rate : BigInt(data.offer.rate * 10 ** 9)
    return new EventModel({
        id: item.id,
        name: StakeExchangeOfferCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeOfferCreated({
            offerId: data.offerId,
            account: data.offer.account,
            total: data.offer.total,
            minAverageCommission: 0,
            rate,
            minAverageRewardRate: rewardRateAsFixedu128,
        }),
    })
}
