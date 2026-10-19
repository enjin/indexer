import { nominationPools } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, NominationPoolsUnbondingMemberRemoved } from '~/model'
import { UnbondingMemberRemoved } from '~/pallet/nomination-pools/events/types'

export function unbondingMemberRemoved(event: EventItem): UnbondingMemberRemoved {
    return match(event)
        .returnType<UnbondingMemberRemoved>()
        .when(
            () => nominationPools.unbondingMemberRemoved.enjinV1062.is(event),
            () => nominationPools.unbondingMemberRemoved.enjinV1062.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function unbondingMemberRemovedEventModel(
    item: EventItem,
    data: UnbondingMemberRemoved,
    account: string
): EventModel {
    return new EventModel({
        id: item.id,
        name: NominationPoolsUnbondingMemberRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new NominationPoolsUnbondingMemberRemoved({
            pool: data.poolId.toString(),
            poolId: data.poolId.toString(),
            account,
        }),
    })
}
