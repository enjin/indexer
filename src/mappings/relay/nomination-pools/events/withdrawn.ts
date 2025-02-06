import { events, calls } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Era, Event as EventModel, Extrinsic, NominationPoolsWithdrawn, PoolMember, PoolMemberRewards } from '../../../model'
import { getOrCreateAccount } from '../../util/entities'
import { updatePool } from '../pool'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.nominationPools.withdrawn.enjinV100.is(event)) {
        return events.nominationPools.withdrawn.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.withdrawn.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsWithdrawn({
            account: data.member,
            pool: data.poolId.toString(),
            balance: data.balance,
            points: data.points,
        }),
    })
}
