import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsCommissionUpdated } from '~/model'
import { CommissionUpdated } from '~/pallet/nomination-pools/events/types'

export function commissionUpdated(event: EventItem): CommissionUpdated {
    return match(event)
        .returnType<CommissionUpdated>()
        .when(
            () => nominationPools.commissionUpdated.enjinV100.is(event),
            () => nominationPools.commissionUpdated.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function commissionUpdatedEventModel(item: EventItem, data: CommissionUpdated): EventModel {
    return new EventModel({
        id: item.id,
        name: NominationPoolsCommissionUpdated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsCommissionUpdated({
            pool: data.poolId.toString(),
            poolId: data.poolId.toString(),
            current: data.current ?? null,
        }),
    })
}
