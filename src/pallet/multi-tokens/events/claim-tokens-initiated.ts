import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { ClaimTokensInitiated } from '~/pallet/multi-tokens/events/types' 

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
