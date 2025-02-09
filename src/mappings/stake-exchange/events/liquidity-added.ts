import { stakeExchange } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakeExchangeLiquidityAdded } from '../../../model'
import { LiquidityAdded } from '@enjin/indexer/mappings/stake-exchange/events/types'

export function liquidityAdded(event: EventItem): LiquidityAdded {
    return match(event)
        .returnType<LiquidityAdded>()
        .when(stakeExchange.liquidityAdded.enjinV100.is, stakeExchange.liquidityAdded.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function liquidityAddedEventModel(item: EventItem, data: LiquidityAdded): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: StakeExchangeLiquidityAdded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakeExchangeLiquidityAdded({
            offerId: data.offerId,
            account: data.who,
            amount: 0n, // data.amount
        }),
    })
}
