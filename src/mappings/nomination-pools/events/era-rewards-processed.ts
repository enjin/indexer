import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsEraRewardsProcessed } from '../../../model'

type EraRewardsProcessedEvent = {
    poolId: number
    era: number
    commission?: any
    bonus: bigint
    reinvested: bigint
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<EraRewardsProcessedEvent>()
        .when(nominationPools.eraRewardsProcessed.enjinV101.is, () => nominationPools.eraRewardsProcessed.enjinV101.decode(event))
        .when(nominationPools.eraRewardsProcessed.enjinV100.is, () => nominationPools.eraRewardsProcessed.enjinV100.decode(event))
        .when(nominationPools.eraRewardsProcessed.v104.is, () => nominationPools.eraRewardsProcessed.v104.decode(event))
        .when(nominationPools.eraRewardsProcessed.v102.is, () => nominationPools.eraRewardsProcessed.v102.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(nominationPools.eraRewardsProcessed)
        })
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
