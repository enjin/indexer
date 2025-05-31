import { staking } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { EraPaid } from './types'

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
