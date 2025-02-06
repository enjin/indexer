import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type TransferEvent = {
    from: string
    to: string
    amount: bigint
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<TransferEvent>()
        .when(balances.transfer.matrixEnjinV603.is, () => balances.transfer.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(balances.transfer)
        })
}
