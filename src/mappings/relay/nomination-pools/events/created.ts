import { hexToString } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import {
    BonusCycle,
    Commission,
    Event as EventModel,
    Extrinsic,
    NominationPool,
    NominationPoolsCreated,
    PoolBalance,
    PoolState,
    Token,
} from '../../../model'
import { events, calls, storage } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'


function getEventData(event: EventItem) {
    if (events.nominationPools.created.enjinV100.is(event)) {
        return events.nominationPools.created.enjinV100.decode(event)
    }

    if (events.nominationPools.created.v101.is(event)) {
        return events.nominationPools.created.v101.decode(event)
    }

    if (events.nominationPools.created.v100.is(event)) {
        return events.nominationPools.created.v100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.created.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsCreated({
            pool: data.poolId.toString(),
        }),
    })
}