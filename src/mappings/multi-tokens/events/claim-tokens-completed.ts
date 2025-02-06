import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ClaimTokensCompletedEvent = {
    destination: string
    ethereumAddress: string
}

export function claimTokensCompleted(event: EventItem): ClaimTokensCompletedEvent {
    return match(event)
        .returnType<ClaimTokensCompletedEvent>()
        .when(multiTokens.claimTokensCompleted.matrixEnjinV1000.is, multiTokens.claimTokensCompleted.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
