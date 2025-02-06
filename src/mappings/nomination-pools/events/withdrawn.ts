import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsWithdrawn } from '../../../model'

type WithdrawnEvent = {
    member: string
    poolId: number
    balance: bigint
    points: bigint
}

export function withdrawn(event: EventItem): WithdrawnEvent {
    return match(event)
        .returnType<WithdrawnEvent>()
        .when(nominationPools.withdrawn.enjinV100.is, () => nominationPools.withdrawn.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function withdrawnEventModel(item: EventItem, data: any): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: NominationPoolsWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsWithdrawn({
            account: data.member,
            balance: 0n, // data.balance,
            points: 0n, // data.points,
            numSlashingSpans: 0, // data.numSlashingSpans,
            pool: data.poolId.toString(),
        }),
    })
}
