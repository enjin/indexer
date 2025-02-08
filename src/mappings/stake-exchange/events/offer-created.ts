import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeOfferCreated } from '../../../model'

type TokenFilter_All = {
    __kind: 'All'
}

type TokenFilter_Whitelist = {
    __kind: 'Whitelist'
    value: bigint[]
}

type TokenFilter_BlockList = {
    __kind: 'BlockList'
    value: bigint[]
}

export type TokenFilter = TokenFilter_All | TokenFilter_Whitelist | TokenFilter_BlockList

export type OfferCreatedEvent = {
    offerId: bigint
    offer: {
        account: string
        total: bigint
        rate: bigint | number
        minAverageRewardRate?: bigint | number // Same as minAverageCommission
        minAverageCommission?: number // It was replaced on v120 by minAverageRewardRate
        deposit?: bigint // It was added on v120
        tokenFilter?: TokenFilter
    }
}

export function offerCreated(event: EventItem): OfferCreatedEvent {
    return match(event)
        .returnType<OfferCreatedEvent>()
        .when(stakeExchange.offerCreated.enjinV1023.is, stakeExchange.offerCreated.enjinV1023.decode)
        .when(stakeExchange.offerCreated.enjinV1021.is, stakeExchange.offerCreated.enjinV1021.decode)
        .when(stakeExchange.offerCreated.enjinV120.is, stakeExchange.offerCreated.enjinV120.decode)
        .when(stakeExchange.offerCreated.enjinV100.is, stakeExchange.offerCreated.enjinV100.decode)
        .when(stakeExchange.offerCreated.v1023.is, stakeExchange.offerCreated.v1023.decode)
        .when(stakeExchange.offerCreated.v1021.is, stakeExchange.offerCreated.v1021.decode)
        .when(stakeExchange.offerCreated.v120.is, stakeExchange.offerCreated.v120.decode)
        .when(stakeExchange.offerCreated.v101.is, stakeExchange.offerCreated.v101.decode)
        .when(stakeExchange.offerCreated.v100.is, stakeExchange.offerCreated.v100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function offerCreatedEventModel(
    item: EventItem,
    data: OfferCreatedEvent,
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
