import { stakeExchange } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeLiquidityWithdrawn } from '~/model'
import { LiquidityWithdrawn } from '~/pallet/stake-exchange/events/types'

export function liquidityWithdrawn(event: EventItem): LiquidityWithdrawn {
    return match(event)
        .returnType<LiquidityWithdrawn>()
        .when(
            () => stakeExchange.liquidityWithdrawn.enjinV100.is(event),
            () => stakeExchange.liquidityWithdrawn.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function liquidityWithdrawnEventModel(
    item: EventItem,
    data: LiquidityWithdrawn,
    amount: bigint
): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityWithdrawn({
            offerId: data.offerId,
            account: data.who,
            amount,
        }),
    })
}
