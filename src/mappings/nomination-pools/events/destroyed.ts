import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsDestroyed } from '../../../model'

type DestroyedEvent = {
    poolId: number
}

export function destroyed(event: EventItem): DestroyedEvent {
    return match(event)
        .returnType<DestroyedEvent>()
        .when(nominationPools.destroyed.enjinV100.is, nominationPools.destroyed.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function destroyedEventModel(item: EventItem, data: any): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsDestroyed({
            pool: data.poolId.toString(),
        }),
    })
}
