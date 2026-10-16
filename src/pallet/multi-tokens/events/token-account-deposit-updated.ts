import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { TokenAccountDepositUpdated } from '~/pallet/multi-tokens/events/types'

export function tokenAccountDepositUpdated(event: EventItem): TokenAccountDepositUpdated {
    return match(event)
        .returnType<TokenAccountDepositUpdated>()
        .when(
            () => multiTokens.tokenAccountDepositUpdated.matrixEnjinV1012.is(event),
            () => multiTokens.tokenAccountDepositUpdated.matrixEnjinV1012.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
