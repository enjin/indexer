import {
    EarlyBirdShares,
    EraReward,
    Event as EventModel,
    Extrinsic,
    NominationPool,
    NominationPoolsDestroyed,
    PoolMember,
    PoolMemberRewards,
    PoolValidator,
} from '../../../model'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (events.nominationPools.destroyed.enjinV100.is(event)) {
        return events.nominationPools.destroyed.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.destroyed.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsDestroyed({
            pool: data.poolId.toString(),
        }),
    })
}