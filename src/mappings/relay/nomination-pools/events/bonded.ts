import { UnknownVersionError } from '../../../common/errors'
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
import { Sns } from '../../../common/sns'
import { events } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { updatePool } from '../pool'

function getEventData(event: EventItem) {
    if (events.nominationPools.bonded.enjinV101.is(event)) {
        return events.nominationPools.bonded.enjinV101.decode(event)
    }

    if (events.nominationPools.bonded.enjinV100.is(event)) {
        return events.nominationPools.bonded.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.bonded.name)
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
