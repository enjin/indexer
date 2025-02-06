import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import {
    Event as EventModel,
    Extrinsic,
    NominationPool,
    NominationPoolsNominated,
    PoolValidator,
    Validator,
} from '../../../model'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.nominationPools.nominated.enjinV101.is(event)) {
        return events.nominationPools.nominated.enjinV101.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.nominated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsNominated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsNominated({
            pool: data.poolId.toString(),
            validators: data.validators.map((id) => id),
        }),
    })
}
