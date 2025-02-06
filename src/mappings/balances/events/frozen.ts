import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type FrozenEvent = {
    who: string
    amount: bigint
}

export function frozen(event: EventItem): FrozenEvent {
    return match(event)
        .returnType<FrozenEvent>()
        .when(balances.frozen.matrixEnjinV603.is, () => balances.frozen.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
