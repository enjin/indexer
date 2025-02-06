import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getThawedAccount(event: EventItem) {
    if (balances.thawed.matrixEnjinV603.is(event)) {
        return balances.thawed.matrixEnjinV603.decode(event).who
    }
    throw new UnsupportedEventError(balances.thawed)
}
