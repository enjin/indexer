import { events, storage } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import {
    Account,
    EarlyBirdShares,
    Event as EventModel,
    Extrinsic,
    NominationPool,
    NominationPoolsEarlyBirdSharesCaptured,
} from '../../../model'
import { Sns } from '../../../common/sns'

function getPoolShares(block: BlockHeader, poolId: number) {
    if (storage.nominationPools.earlyBirdShares.enjinV1022.is(block)) {
        return storage.nominationPools.earlyBirdShares.enjinV1022.getPairs(block, poolId)
    }

    throw new UnknownVersionError('NominationPools.EarlyBirdShares')
}

function getEventData(event: EventItem) {
    if (events.nominationPools.earlyBirdSharesCaptured.enjinV1022.is(event)) {
        return events.nominationPools.earlyBirdSharesCaptured.enjinV1022.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.earlyBirdSharesCaptured.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsEarlyBirdSharesCaptured.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEarlyBirdSharesCaptured({
            pool: data.poolId.toString(),
            totalAccounts: data.totalAccounts,
        }),
    })
}