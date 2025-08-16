import { staking } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { EraPaid } from '~/pallet/staking/events/types'
import { Event as EventModel, Extrinsic, StakingEraPaid } from '~/model'

export function eraPaid(event: EventItem): EraPaid {
    return match(event)
        .returnType<EraPaid>()
        .when(
            () => staking.eraPaid.enjinV100.is(event),
            () => staking.eraPaid.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function eraPaidEventModel(item: EventItem, event: EraPaid, validator?: string | null): EventModel {
    return new EventModel({
        id: item.id,
        name: StakingEraPaid.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakingEraPaid({
            eraIndex: event.eraIndex,
            validatorPayout: event.validatorPayout,
            remainder: event.remainder,
            validator: validator ?? null,
        }),
    })
}
