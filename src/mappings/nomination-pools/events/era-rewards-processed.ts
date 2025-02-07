import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsEraRewardsProcessed } from '../../../model'

type EraRewardsProcessedEvent = {
    poolId: number
    era: number
    commission?: {
        beneficiary: string
        amount: bigint
    }
    bonus: bigint
    reinvested: bigint
}

export function eraRewardsProcessed(event: EventItem): EraRewardsProcessedEvent {
    return match(event)
        .returnType<EraRewardsProcessedEvent>()
        .when(nominationPools.eraRewardsProcessed.enjinV101.is, nominationPools.eraRewardsProcessed.enjinV101.decode)
        .when(nominationPools.eraRewardsProcessed.enjinV100.is, nominationPools.eraRewardsProcessed.enjinV100.decode)
        .when(nominationPools.eraRewardsProcessed.v104.is, nominationPools.eraRewardsProcessed.v104.decode)
        .when(nominationPools.eraRewardsProcessed.v102.is, nominationPools.eraRewardsProcessed.v102.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function eraRewardsProcessedEventModel(
    item: EventItem,
    data: EraRewardsProcessedEvent,
    rate: bigint = 0n
): EventModel | undefined {
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
