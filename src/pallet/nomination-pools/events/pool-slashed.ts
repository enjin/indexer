import { nominationPools } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsPoolSlashed } from '../../../model'
import { PoolSlashed } from './types'

export function poolSlashed(event: EventItem): PoolSlashed {
    return match(event)
        .returnType<PoolSlashed>()
        .when(
            () => nominationPools.poolSlashed.enjinV100.is(event),
            () => nominationPools.poolSlashed.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function poolSlashedEventModel(item: EventItem, data: PoolSlashed): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsPoolSlashed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsPoolSlashed({
            pool: data.poolId.toString(),
            balance: data.balance,
        }),
    })
}
