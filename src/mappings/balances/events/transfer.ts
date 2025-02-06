import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (balances.transfer.matrixEnjinV603.is(event)) {
        return balances.transfer.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(balances.transfer)
}
