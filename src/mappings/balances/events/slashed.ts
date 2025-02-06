import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type SlashedEvent = {
    who: string
    amount: bigint
}

function getSlashedAccount(event: EventItem) {
    return match(event)
        .returnType<SlashedEvent>()
        .when(balances.slashed.matrixEnjinV603.is, () => balances.slashed.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(balances.slashed)
        })
}
