import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsPoolSlashed } from '../../../model'

type PoolSlashedEvent = {
    poolId: number
    balance: bigint
}

function poolSlashed(event: EventItem): PoolSlashedEvent {
    return match(event)
        .returnType<PoolSlashedEvent>()
        .when(nominationPools.poolSlashed.enjinV100.is, () => nominationPools.poolSlashed.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof poolSlashed>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsPoolSlashed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsPoolSlashed({
            pool: data.poolId.toString(),
            balance: 0n, // data.balance,
        }),
    })
}
