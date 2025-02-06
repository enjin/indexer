import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeLiquidityWithdrawn } from '../../../model'

type LiquidityWithdrawnEvent = {
    who: string
    offerId: bigint
}

function liquidityWithdrawn(event: EventItem): LiquidityWithdrawnEvent {
    return match(event)
        .returnType<LiquidityWithdrawnEvent>()
        .when(stakeExchange.liquidityWithdrawn.enjinV100.is, () => stakeExchange.liquidityWithdrawn.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof liquidityWithdrawn>) {
    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityWithdrawn({
            offerId: data.offerId,
            account: data.who,
            amount: 0n, // data.amount
        }),
    })
}
