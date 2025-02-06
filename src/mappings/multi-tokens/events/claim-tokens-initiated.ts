import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function claimTokensInitiated(event: EventItem) {
    if (multiTokens.claimTokensInitiated.matrixEnjinV1000.is(event)) {
        return multiTokens.claimTokensInitiated.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.claimTokensInitiated)
}
