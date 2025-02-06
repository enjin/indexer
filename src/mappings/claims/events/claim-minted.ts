import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ClaimMintedEvent = {
    who: string
    amount: bigint
}

export function claimMinted(event: EventItem) {
    return match(event)
        .returnType<ClaimMintedEvent>()
        .when(claims.claimMinted.matrixEnjinV603.is, () => claims.claimMinted.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(claims.claimMinted)
        })
}
