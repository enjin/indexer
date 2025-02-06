import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getReserveRepatriatedAccounts(event: EventItem) {
    if (balances.reserveRepatriated.matrixEnjinV603.is(event)) {
        return [
            balances.reserveRepatriated.matrixEnjinV603.decode(event).from,
            balances.reserveRepatriated.matrixEnjinV603.decode(event).to,
        ]
    }
    throw new UnsupportedEventError(balances.reserveRepatriated)
}
