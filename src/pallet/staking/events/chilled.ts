import { staking } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Chilled } from '~/pallet/staking/events/types'
import { Event as EventModel, Extrinsic, StakingChilled } from '~/model'

export function chilled(event: EventItem): Chilled {
    return match(event)
        .returnType<Chilled>()
        .when(
            () => staking.chilled.enjinV100.is(event),
            () => staking.chilled.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function chilledEventModel(item: EventItem, event: Chilled): EventModel {
    return new EventModel({
        id: item.id,
        name: StakingChilled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakingChilled({
            validator: event.stash,
        }),
    })
}
