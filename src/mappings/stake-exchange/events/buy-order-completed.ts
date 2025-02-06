import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeBuyOrderCompleted } from '../../../model'

type BuyOrderCompletedEvent = {
    offerId: bigint
    buyer: string
    seller: string
    poolId: bigint
    points: bigint
    amount: bigint
    commission: bigint
}

function buyOrderCompleted(event: EventItem): BuyOrderCompletedEvent {
    return match(event)
        .returnType<BuyOrderCompletedEvent>()
        .when(stakeExchange.buyOrderCompleted.enjinV1033.is, () => stakeExchange.buyOrderCompleted.enjinV1033.decode(event))
        .when(stakeExchange.buyOrderCompleted.enjinV1026.is, () => stakeExchange.buyOrderCompleted.enjinV1026.decode(event))
        .when(stakeExchange.buyOrderCompleted.enjinV120.is, () => stakeExchange.buyOrderCompleted.enjinV120.decode(event))
        .when(stakeExchange.buyOrderCompleted.enjinV100.is, () => stakeExchange.buyOrderCompleted.enjinV100.decode(event))
        .when(stakeExchange.buyOrderCompleted.v1033.is, () => stakeExchange.buyOrderCompleted.v1033.decode(event))
        .when(stakeExchange.buyOrderCompleted.v1026.is, () => stakeExchange.buyOrderCompleted.v1026.decode(event))
        .when(stakeExchange.buyOrderCompleted.v120.is, () => stakeExchange.buyOrderCompleted.v120.decode(event))
        .when(stakeExchange.buyOrderCompleted.v100.is, () => stakeExchange.buyOrderCompleted.v100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof buyOrderCompleted>, offerId: bigint) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeBuyOrderCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeBuyOrderCompleted({
            buyer: data.buyer,
            seller: data.seller,
            pool: data.poolId.toString(),
            points: data.points,
            amount: data.amount,
            commission: data.commission,
            offer: offerId.toString(),
        }),
    })
}
