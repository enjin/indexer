import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsNominated } from '../../../model'

type NominatedEvent = {
    poolId: number
    validators: string[]
}

export function nominated(event: EventItem): NominatedEvent {
    return match(event)
        .returnType<NominatedEvent>()
        .when(nominationPools.nominated.enjinV101.is, nominationPools.nominated.enjinV101.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function nominatedEventModel(item: EventItem, data: NominatedEvent): EventModel | undefined {
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
