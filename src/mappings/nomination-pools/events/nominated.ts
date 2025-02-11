import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsNominated } from '../../../model'
import { Nominated } from './types'

export function nominated(event: EventItem): Nominated {
    return match(event)
        .returnType<Nominated>()
        .when(
            () => nominationPools.nominated.enjinV101.is(event),
            () => nominationPools.nominated.enjinV101.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function nominatedEventModel(item: EventItem, data: Nominated): EventModel | undefined {
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
