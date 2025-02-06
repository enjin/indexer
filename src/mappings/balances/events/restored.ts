import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getRestoredAccount(event: EventItem) {
    if (balances.restored.matrixEnjinV603.is(event)) {
        return balances.restored.matrixEnjinV603.decode(event).who
    }
    throw new UnsupportedEventError(balances.restored)
}
