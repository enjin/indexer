import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeLiquidityWithdrawn } from '../../../model'
import { LiquidityWithdrawn } from './types'

export function liquidityWithdrawn(event: EventItem): LiquidityWithdrawn {
    return match(event)
        .returnType<LiquidityWithdrawn>()
        .when(stakeExchange.liquidityWithdrawn.enjinV100.is, stakeExchange.liquidityWithdrawn.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function liquidityWithdrawnEventModel(item: EventItem, data: LiquidityWithdrawn): EventModel | undefined {
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
