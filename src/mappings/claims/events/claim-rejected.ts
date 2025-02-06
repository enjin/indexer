import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ClaimRejectedEvent = {
    account: string
    transactionHash: string
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<ClaimRejectedEvent>()
        .when(claims.claimRejected.matrixEnjinV603.is, () => claims.claimRejected.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(claims.claimRejected.matrixEnjinV603)
        })
}
