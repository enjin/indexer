import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsNominated } from '../../../model'

type NominatedEvent = {
    poolId: number
    validators: any
}

export function nominated(event: EventItem): NominatedEvent {
    return match(event)
        .returnType<NominatedEvent>()
        .when(nominationPools.nominated.enjinV101.is, () => nominationPools.nominated.enjinV101.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function getEvent(item: EventItem, data: ReturnType<typeof nominated>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsNominated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsNominated({
            pool: data.poolId.toString(),
            validators: data.validators,
        }),
    })
}
