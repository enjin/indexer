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
    if (nominationPools.unbonded.enjinV100.is(event)) {
        return nominationPools.unbonded.enjinV100.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.unbonded)
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
