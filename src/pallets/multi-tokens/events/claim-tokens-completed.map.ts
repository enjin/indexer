import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { ClaimTokensCompleted } from './claim-tokens-completed.type'

export function claimTokensCompleted(event: EventItem): ClaimTokensCompleted {
    return match(event)
        .returnType<ClaimTokensCompleted>()
        .when(
            () => multiTokens.claimTokensCompleted.matrixEnjinV1000.is(event),
            () => multiTokens.claimTokensCompleted.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
