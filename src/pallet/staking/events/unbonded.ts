import { staking } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Unbonded } from '~/pallet/staking/events/types'
import { Event as EventModel, Extrinsic, StakingBonded, StakingUnbonded } from '~/model'

export function unbonded(event: EventItem): Unbonded {
    return match(event)
        .returnType<Unbonded>()
        .when(
            () => staking.unbonded.enjinV100.is(event),
            () => staking.unbonded.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function unbondedEventModel(item: EventItem, event: Unbonded): EventModel {
    return new EventModel({
        id: item.id,
        name: StakingUnbonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakingUnbonded({
            validator: event.stash,
            amount: event.amount,
        }),
    })
}
