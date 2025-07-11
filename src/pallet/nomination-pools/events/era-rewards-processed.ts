import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsEraRewardsProcessed } from '~/model'
import { EraRewardsProcessed } from '~/pallet/nomination-pools/events/types'

export function eraRewardsProcessed(event: EventItem): EraRewardsProcessed {
    return match(event)
        .returnType<EraRewardsProcessed>()
        .when(
            () => nominationPools.eraRewardsProcessed.enjinV101.is(event),
            () => nominationPools.eraRewardsProcessed.enjinV101.decode(event)
        )
        .when(
            () => nominationPools.eraRewardsProcessed.enjinV100.is(event),
            () => nominationPools.eraRewardsProcessed.enjinV100.decode(event)
        )
        .when(
            () => nominationPools.eraRewardsProcessed.v104.is(event),
            () => nominationPools.eraRewardsProcessed.v104.decode(event)
        )
        .when(
            () => nominationPools.eraRewardsProcessed.v102.is(event),
            () => nominationPools.eraRewardsProcessed.v102.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function eraRewardsProcessedEventModel(
    item: EventItem,
    data: EraRewardsProcessed,
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
