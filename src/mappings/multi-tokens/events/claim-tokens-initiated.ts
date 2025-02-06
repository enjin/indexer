import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ClaimTokensInitiatedEvent = {
    accountId: string
    ethereumAddress: string
}

function claimTokensInitiated(event: EventItem) {
    return match(event)
        .returnType<ClaimTokensInitiatedEvent>()
        .when(multiTokens.claimTokensInitiated.matrixEnjinV1000.is, multiTokens.claimTokensInitiated.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.claimTokensInitiated)
        })
}
