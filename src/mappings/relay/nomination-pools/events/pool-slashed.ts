import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, NominationPoolsPoolSlashed, PoolSlash } from '../../../model'
import { Sns } from '../../../common/sns'
import { updatePool } from '../pool'

function getEventData(event: EventItem) {
    if (events.nominationPools.poolSlashed.enjinV100.is(event)) {
        return events.nominationPools.poolSlashed.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.poolSlashed.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsPoolSlashed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsPoolSlashed({
            pool: data.poolId.toString(),
            balance: data.balance,
        }),
    })
}