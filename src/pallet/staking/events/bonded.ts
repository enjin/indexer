import { staking } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Bonded } from '~/pallet/staking/events/types'
import { Event as EventModel, Extrinsic, StakingBonded } from '~/model'

export function bonded(event: EventItem): Bonded {
    return match(event)
        .returnType<Bonded>()
        .when(
            () => staking.bonded.enjinV100.is(event),
            () => staking.bonded.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function bondedEventModel(item: EventItem, event: Bonded): EventModel {
    return new EventModel({
        id: item.id,
        name: StakingBonded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakingBonded({
            validator: event.stash,
            amount: event.amount,
        }),
    })
}
