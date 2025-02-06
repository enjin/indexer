import { nominationPools } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type StateChangedEvent = {
    poolId: number
    newState: any
}

function stateChanged(event: EventItem) {
    return match(event)
        .returnType<StateChangedEvent>()
        .when(nominationPools.stateChanged.enjinV100.is, () => nominationPools.stateChanged.enjinV100.decode(event))
        .when(nominationPools.stateChanged.v103.is, () => nominationPools.stateChanged.v103.decode(event))
        .when(nominationPools.stateChanged.v100.is, () => nominationPools.stateChanged.v100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(nominationPools.stateChanged)
        })
}
