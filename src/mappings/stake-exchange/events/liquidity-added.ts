import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeLiquidityAdded } from '../../../model'

type LiquidityAddedEvent = {
    who: string
    offerId: bigint
}

function liquidityAdded(event: EventItem) {
    return match(event)
        .returnType<LiquidityAddedEvent>()
        .when(stakeExchange.liquidityAdded.enjinV100.is, () => stakeExchange.liquidityAdded.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(stakeExchange.liquidityAdded)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof liquidityAdded>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityAdded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityAdded({
            account: data.who,
            pool: data.poolId.toString(),
            amount: data.amount,
        }),
    })
}
