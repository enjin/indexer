import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (identity.judgementUnrequested.matrixEnjinV1000.is(event)) {
        return identity.judgementUnrequested.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(identity.judgementUnrequested)
}
