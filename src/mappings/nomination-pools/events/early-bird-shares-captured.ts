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

function getPoolShares(block: BlockHeader, poolId: number) {
    if (storage.nominationPools.earlyBirdShares.enjinV1022.is(block)) {
        return storage.nominationPools.earlyBirdShares.enjinV1022.getPairs(block, poolId)
    }

    throw new UnsupportedEventError('NominationPools.EarlyBirdShares')
}

function getEventData(event: EventItem) {
    if (nominationPools.earlyBirdSharesCaptured.enjinV1022.is(event)) {
        return nominationPools.earlyBirdSharesCaptured.enjinV1022.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.earlyBirdSharesCaptured)
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
