import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ClaimTokensInitiatedEvent = {
    accountId: string
    ethereumAddress: string
}

export function claimTokensInitiated(event: EventItem): ClaimTokensInitiated {
    return match(event)
        .returnType<ClaimTokensInitiated>()
        .when(multiTokens.claimTokensInitiated.matrixEnjinV1000.is, multiTokens.claimTokensInitiated.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
