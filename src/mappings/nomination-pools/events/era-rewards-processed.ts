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
    if (nominationPools.eraRewardsProcessed.enjinV101.is(event)) {
        return nominationPools.eraRewardsProcessed.enjinV101.decode(event)
    }

    if (nominationPools.eraRewardsProcessed.enjinV100.is(event)) {
        return nominationPools.eraRewardsProcessed.enjinV100.decode(event)
    }

    if (nominationPools.eraRewardsProcessed.v104.is(event)) {
        return nominationPools.eraRewardsProcessed.v104.decode(event)
    }

    if (nominationPools.eraRewardsProcessed.v102.is(event)) {
        return nominationPools.eraRewardsProcessed.v102.decode(event)
    }

    throw new UnsupportedEventError(nominationPools.eraRewardsProcessed)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>, rate: bigint = 0n) {
    return new EventModel({
        id: item.id,
        name: NominationPoolsEraRewardsProcessed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsEraRewardsProcessed({
            pool: data.poolId.toString(),
            era: data.era,
            eraReward: `${data.poolId}-${data.era}`,
            rate,
        }),
    })
}
