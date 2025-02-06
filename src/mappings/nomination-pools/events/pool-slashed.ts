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
    if (nominationPools.poolSlashed.enjinV100.is(event)) {
        return nominationPools.poolSlashed.enjinV100.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.poolSlashed)
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
