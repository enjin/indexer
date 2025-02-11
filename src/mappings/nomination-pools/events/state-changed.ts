import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
