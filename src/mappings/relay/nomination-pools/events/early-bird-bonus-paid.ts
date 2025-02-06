import { events, storage } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Event as EventModel, EarlyBirdBonus, Extrinsic, NominationPoolsEarlyBirdBonusPaid } from '../../../model'
import { updateEarlyBirdInfo, updatePool } from '../pool'
import { Sns } from '../../../common/sns'


function getEventData(event: EventItem) {
    if (events.nominationPools.earlyBirdBonusPaid.enjinV1023.is(event)) {
        return events.nominationPools.earlyBirdBonusPaid.enjinV1023.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.earlyBirdBonusPaid.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdBonusPaid.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdBonusPaid({
            pool: data.poolId.toString(),
            paymentId: data.paymentId,
            totalAccounts: data.totalAccounts,
        }),
    })
}