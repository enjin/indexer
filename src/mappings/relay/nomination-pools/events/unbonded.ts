import { events, calls } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, PoolMember, UnbondingEras, NominationPoolsUnBonded } from '../../../model'
import { getOrCreateAccount } from '../../util/entities'
import { updatePool } from '../pool'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.nominationPools.unbonded.enjinV100.is(event)) {
        return events.nominationPools.unbonded.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.unbonded.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsUnBonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsUnBonded({
            pool: data.poolId.toString(),
            account: data.member,
            unbondingPoints: data.points,
            balance: data.balance,
            era: data.era,
        }),
    })
}
