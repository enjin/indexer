import { multiTokens } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { ClaimTokensCompleted } from './types'

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
