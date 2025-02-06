import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsCreated } from '../../../model'

type CreatedEvent = {
    creator?: string
    poolId: number
    capacity: bigint
}

export function created(event: EventItem): CreatedEvent {
    return match(event)
        .returnType<CreatedEvent>()
        .when(nominationPools.created.enjinV100.is, () => nominationPools.created.enjinV100.decode(event))
        .when(nominationPools.created.v101.is, () => nominationPools.created.v101.decode(event))
        .when(nominationPools.created.v100.is, () => nominationPools.created.v100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function getEvent(item: EventItem, data: ReturnType<typeof created>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsCreated({
            pool: data.poolId.toString(),
        }),
    })
}
