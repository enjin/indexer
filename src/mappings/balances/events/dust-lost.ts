import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type DustLostEvent = {
    account: string
    amount: bigint
}

function getDustLostAccount(event: EventItem) {
    return match(event)
        .returnType<DustLostEvent>()
        .when(balances.dustLost.matrixEnjinV603.is, () => balances.dustLost.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(balances.dustLost)
        })
}
