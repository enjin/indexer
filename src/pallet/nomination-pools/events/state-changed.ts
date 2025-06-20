import { nominationPools } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { StateChanged } from './types'
import { Extrinsic, Event as EventModel, NominationPoolsDestroyInitiated } from '../../../model'

export function stateChanged(event: EventItem): StateChanged {
    return match(event)
        .returnType<StateChanged>()
        .when(
            () => nominationPools.stateChanged.enjinV100.is(event),
            () => nominationPools.stateChanged.enjinV100.decode(event)
        )
        .when(
            () => nominationPools.stateChanged.v103.is(event),
            () => nominationPools.stateChanged.v103.decode(event)
        )
        .when(
            () => nominationPools.stateChanged.v100.is(event),
            () => nominationPools.stateChanged.v100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function stateChangedEventModel(item: EventItem, data: StateChanged): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsDestroyInitiated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsDestroyInitiated({
            pool: data.poolId.toString(),
        }),
    })
}
