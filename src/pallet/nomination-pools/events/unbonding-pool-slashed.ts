import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsUnbondingPoolSlashed } from '~/model'
import { UnbondingPoolSlashed } from '~/pallet/nomination-pools/events/types'

export function unbondingPoolSlashed(event: EventItem): UnbondingPoolSlashed {
    return match(event)
        .returnType<UnbondingPoolSlashed>()
        .when(
            () => nominationPools.unbondingPoolSlashed.enjinV100.is(event),
            () => nominationPools.unbondingPoolSlashed.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function unbondingPoolSlashedEventModel(item: EventItem, data: UnbondingPoolSlashed): EventModel {
    return new EventModel({
        id: item.id,
        name: NominationPoolsUnbondingPoolSlashed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsUnbondingPoolSlashed({
            pool: data.poolId.toString(),
            poolId: data.poolId.toString(),
            era: data.era,
            balance: data.balance,
        }),
    })
}
