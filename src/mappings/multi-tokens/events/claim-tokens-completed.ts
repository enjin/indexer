import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ClaimTokensCompletedEvent = {
    destination: string
    ethereumAddress: string
}

export function claimTokensCompleted(event: EventItem): ClaimTokensCompleted {
    return match(event)
        .returnType<ClaimTokensCompleted>()
        .when(multiTokens.claimTokensCompleted.matrixEnjinV1000.is, multiTokens.claimTokensCompleted.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
