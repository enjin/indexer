import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsCreated } from '~/model'
import { Created } from '~/pallet/nomination-pools/events/types'

export function created(event: EventItem): Created {
    return match(event)
        .returnType<Created>()
        .when(
            () => nominationPools.created.enjinV100.is(event),
            () => nominationPools.created.enjinV100.decode(event)
        )
        .when(
            () => nominationPools.created.v101.is(event),
            () => nominationPools.created.v101.decode(event)
        )
        .when(
            () => nominationPools.created.v100.is(event),
            () => nominationPools.created.v100.decode(event)
        )
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
