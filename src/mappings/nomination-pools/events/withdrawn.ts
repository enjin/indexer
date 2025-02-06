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

function getEventData(event: EventItem) {
    return match(event)
        .returnType<WithdrawnEvent>()
        .when(nominationPools.withdrawn.enjinV100.is, () => nominationPools.withdrawn.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(nominationPools.withdrawn)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsWithdrawn({
            pool: data.poolId.toString(),
            member: data.member,
            balance: data.balance,
            points: data.points,
        }),
    })
}
