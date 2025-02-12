import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { ClaimTokensInitiated } from './types'

export function claimTokensInitiated(event: EventItem): ClaimTokensInitiated {
    return match(event)
        .returnType<ClaimTokensInitiated>()
        .when(
            () => multiTokens.claimTokensInitiated.matrixEnjinV1000.is(event),
            () => multiTokens.claimTokensInitiated.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
