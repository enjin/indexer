import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeBuyOrderCompleted } from '../../../model'

type BuyOrderCompletedEvent = {
    who: string
    tokenId: bigint
    amount: bigint
    rate: number | bigint
    offerCreator?: string
    offerId?: bigint
}

export function buyOrderCompleted(event: EventItem): BuyOrderCompletedEvent {
    return match(event)
        .returnType<BuyOrderCompletedEvent>()
        .when(stakeExchange.buyOrderCompleted.enjinV1033.is, stakeExchange.buyOrderCompleted.enjinV1033.decode)
        .when(stakeExchange.buyOrderCompleted.enjinV1026.is, stakeExchange.buyOrderCompleted.enjinV1026.decode)
        .when(stakeExchange.buyOrderCompleted.enjinV120.is, stakeExchange.buyOrderCompleted.enjinV120.decode)
        .when(stakeExchange.buyOrderCompleted.enjinV100.is, stakeExchange.buyOrderCompleted.enjinV100.decode)
        .when(stakeExchange.buyOrderCompleted.v1033.is, stakeExchange.buyOrderCompleted.v1033.decode)
        .when(stakeExchange.buyOrderCompleted.v1026.is, stakeExchange.buyOrderCompleted.v1026.decode)
        .when(stakeExchange.buyOrderCompleted.v120.is, stakeExchange.buyOrderCompleted.v120.decode)
        .when(stakeExchange.buyOrderCompleted.v100.is, stakeExchange.buyOrderCompleted.v100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function buyOrderCompletedEventModel(item: EventItem, data: any, offerId: bigint): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: StakeExchangeBuyOrderCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeBuyOrderCompleted({
            offerId: data.offerId,
            account: data.who,
            tokenId: data.tokenId,
            amount: 0n, // data.amount
            rate: 0n, //data.rate,
            points: 0n, // data.points
        }),
    })
}
