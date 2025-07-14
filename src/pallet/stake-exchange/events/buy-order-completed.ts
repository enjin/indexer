import { stakeExchange } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeBuyOrderCompleted } from '~/model'
import { BuyOrderCompleted } from '~/pallet/stake-exchange/events/types'

export function buyOrderCompleted(event: EventItem): BuyOrderCompleted {
    return match(event)
        .returnType<BuyOrderCompleted>()
        .when(
            () => stakeExchange.buyOrderCompleted.enjinV1033.is(event),
            () => stakeExchange.buyOrderCompleted.enjinV1033.decode(event)
        )
        .when(
            () => stakeExchange.buyOrderCompleted.enjinV1026.is(event),
            () => stakeExchange.buyOrderCompleted.enjinV1026.decode(event)
        )
        .when(
            () => stakeExchange.buyOrderCompleted.enjinV120.is(event),
            () => stakeExchange.buyOrderCompleted.enjinV120.decode(event)
        )
        .when(
            () => stakeExchange.buyOrderCompleted.enjinV100.is(event),
            () => stakeExchange.buyOrderCompleted.enjinV100.decode(event)
        )
        .when(
            () => stakeExchange.buyOrderCompleted.v1033.is(event),
            () => stakeExchange.buyOrderCompleted.v1033.decode(event)
        )
        .when(
            () => stakeExchange.buyOrderCompleted.v1026.is(event),
            () => stakeExchange.buyOrderCompleted.v1026.decode(event)
        )
        .when(
            () => stakeExchange.buyOrderCompleted.v120.is(event),
            () => stakeExchange.buyOrderCompleted.v120.decode(event)
        )
        .when(
            () => stakeExchange.buyOrderCompleted.v100.is(event),
            () => stakeExchange.buyOrderCompleted.v100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function buyOrderCompletedEventModel(
    item: EventItem,
    data: BuyOrderCompleted,
    offerId: bigint,
    pool: string | undefined
): EventModel | undefined {
    const rate = typeof data.rate === 'bigint' ? data.rate : BigInt(data.rate * 10 ** 9)

    return new EventModel({
        id: item.id,
        name: StakeExchangeBuyOrderCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeBuyOrderCompleted({
            offerId,
            account: data.who,
            tokenId: data.tokenId,
            amount: data.amount,
            rate,
            points: (data.amount * rate) / 10n ** 18n,
            pool,
        }),
    })
}
