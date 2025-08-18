import { staking } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, StakingWithdrawn } from '~/model'
import { Withdrawn } from './types/withdrawn'

export function withdrawn(event: EventItem): Withdrawn {
    return match(event)
        .returnType<Withdrawn>()
        .when(
            () => staking.withdrawn.enjinV100.is(event),
            () => staking.withdrawn.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function withdrawnEventModel(item: EventItem, event: Withdrawn): EventModel {
    return new EventModel({
        id: item.id,
        name: StakingWithdrawn.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new StakingWithdrawn({
            validator: event.stash,
            amount: event.amount,
        }),
    })
}
