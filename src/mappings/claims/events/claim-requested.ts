import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ClaimRequestedEvent = {
    who: string
    amountBurned: bigint
    transactionHash: string
    isEfiToken: boolean
    amountClaimable: bigint
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<ClaimRequestedEvent>()
        .when(claims.claimRequested.matrixEnjinV603.is, () => claims.claimRequested.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(claims.claimRequested)
        })
}
