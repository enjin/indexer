import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import {
    Collection,
    Era,
    Event as EventModel,
    Extrinsic,
    NominationPoolsBonded,
    PoolMember,
    Token,
    TokenAccount,
} from '../../../model'

function getEventData(event: EventItem) {
    if (nominationPools.created.enjinV100.is(event)) {
        return nominationPools.created.enjinV100.decode(event)
    }

    if (nominationPools.created.v101.is(event)) {
        return nominationPools.created.v101.decode(event)
    }

    if (nominationPools.created.v100.is(event)) {
        return nominationPools.created.v100.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.created)
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
