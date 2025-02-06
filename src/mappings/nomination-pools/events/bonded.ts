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
    if (nominationPools.bonded.enjinV101.is(event)) {
        return nominationPools.bonded.enjinV101.decode(event)
    }

    if (nominationPools.bonded.enjinV100.is(event)) {
        return nominationPools.bonded.enjinV100.decode(event)
    }

    if (nominationPools.bonded.v104.is(event)) {
        return nominationPools.bonded.v104.decode(event)
    }

    if (nominationPools.bonded.v100.is(event)) {
        return nominationPools.bonded.v100.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.bonded)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsBonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsBonded({
            pool: data.poolId.toString(),
            account: data.member,
            bonded: data.bonded,
        }),
    })
}
