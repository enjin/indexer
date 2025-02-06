import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function claimTokensCompleted(event: EventItem) {
    if (multiTokens.claimTokensCompleted.matrixEnjinV1000.is(event)) {
        return multiTokens.claimTokensCompleted.matrixEnjinV1000.decode(event)
    }
    throw new UnsupportedEventError(multiTokens.claimTokensCompleted)
}
