import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (identity.identitySet.matrixEnjinV1000.is(event)) {
        return identity.identitySet.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(identity.identitySet)
}
