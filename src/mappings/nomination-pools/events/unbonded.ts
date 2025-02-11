import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsUnbonded } from '../../../model'
import { Unbonded } from './types'

export function unbonded(event: EventItem): Unbonded {
    return match(event)
        .returnType<Unbonded>()
        .when(
            () => nominationPools.unbonded.enjinV100.is(event),
            () => nominationPools.unbonded.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function unbondedEventModel(item: EventItem, data: Unbonded): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsUnbonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsUnbonded({
            pool: data.poolId.toString(),
            account: data.member,
            unbondingPoints: data.points,
            balance: data.balance,
            era: data.era,
        }),
    })
}
