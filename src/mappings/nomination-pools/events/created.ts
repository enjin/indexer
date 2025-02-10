import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsCreated } from '../../../model'
import { Created } from './types'

export function created(event: EventItem): Created {
    return match(event)
        .returnType<Created>()
        .when(nominationPools.created.enjinV100.is, nominationPools.created.enjinV100.decode)
        .when(nominationPools.created.v101.is, nominationPools.created.v101.decode)
        .when(nominationPools.created.v100.is, nominationPools.created.v100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function createdEventModel(item: EventItem, data: Created): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsCreated({
            pool: data.poolId.toString(),
        }),
    })
}
