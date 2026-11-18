import { staking } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Kicked } from '~/pallet/staking/events/types'

export function kicked(event: EventItem): Kicked {
    return match(event)
        .returnType<Kicked>()
        .when(
            () => staking.kicked.enjinV100.is(event),
            () => staking.kicked.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
