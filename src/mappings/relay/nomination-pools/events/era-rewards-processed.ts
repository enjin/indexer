import Big from 'big.js'
import * as Sentry from '@sentry/node'
import { groupBy } from 'lodash'
import {
    BonusCycle,
    CommissionPayment,
    Era,
    EraReward,
    Event as EventModel,
    Extrinsic,
    NominationPoolsEraRewardsProcessed,
    PoolMember,
    PoolMemberRewards,
} from '../../../model'
import { updatePool } from '../pool'
import { events, storage } from '../../../types/generated'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { Sns } from '../../../common/sns'
import config from '../../../config'

function getEventData(event: EventItem) {
    if (events.nominationPools.eraRewardsProcessed.enjinV101.is(event)) {
        return events.nominationPools.eraRewardsProcessed.enjinV101.decode(event)
    }

    if (events.nominationPools.eraRewardsProcessed.enjinV100.is(event)) {
        return events.nominationPools.eraRewardsProcessed.enjinV100.decode(event)
    }

    if (events.nominationPools.eraRewardsProcessed.v104.is(event)) {
        return events.nominationPools.eraRewardsProcessed.v104.decode(event)
    }

    if (events.nominationPools.eraRewardsProcessed.v102.is(event)) {
        return events.nominationPools.eraRewardsProcessed.v102.decode(event)
    }

    throw new UnknownVersionError(events.nominationPools.eraRewardsProcessed.name)
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
