import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getBurnedAccount(event: EventItem) {
    if (balances.burned.matrixEnjinV603.is(event)) {
        return balances.burned.matrixEnjinV603.decode(event).who
    }
    throw new UnsupportedEventError(balances.burned)
}
