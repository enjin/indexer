import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsUnbonded } from '../../../model'

type UnbondedEvent = {
    member: string
    poolId: number
    balance: bigint
    points: bigint
    era: number
}

export function unbonded(event: EventItem): UnbondedEvent {
    return match(event)
        .returnType<UnbondedEvent>()
        .when(nominationPools.unbonded.enjinV100.is, () => nominationPools.unbonded.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof unbonded>) {
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
