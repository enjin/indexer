import { staking } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { EraPaid } from '~/pallet/staking/events/types' 

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
