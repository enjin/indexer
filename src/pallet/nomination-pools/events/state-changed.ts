import { nominationPools } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { StateChanged } from './types'

export function stateChanged(event: EventItem): StateChanged {
    return match(event)
        .returnType<StateChanged>()
        .when(
            () => nominationPools.stateChanged.enjinV100.is(event),
            () => nominationPools.stateChanged.enjinV100.decode(event)
        )
        .when(
            () => nominationPools.stateChanged.v103.is(event),
            () => nominationPools.stateChanged.v103.decode(event)
        )
        .when(
            () => nominationPools.stateChanged.v100.is(event),
            () => nominationPools.stateChanged.v100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
