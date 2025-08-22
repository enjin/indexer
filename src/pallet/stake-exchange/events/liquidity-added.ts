import { stakeExchange } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeLiquidityAdded } from '~/model'
import { LiquidityAdded } from '~/pallet/stake-exchange/events/types'

export function liquidityAdded(event: EventItem): LiquidityAdded {
    return match(event)
        .returnType<LiquidityAdded>()
        .when(
            () => stakeExchange.liquidityAdded.enjinV100.is(event),
            () => stakeExchange.liquidityAdded.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function liquidityAddedEventModel(item: EventItem, data: LiquidityAdded, amount: bigint): EventModel {
    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityAdded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityAdded({
            offer: data.offerId.toString(),
            offerId: data.offerId,
            account: data.who,
            amount,
        }),
    })
}
