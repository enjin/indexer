import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (balances.withdraw.matrixEnjinV603.is(event)) {
        return balances.withdraw.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(balances.withdraw)
}
