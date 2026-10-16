import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Locked } from '~/pallet/multi-tokens/events/types'

export function locked(event: EventItem): Locked {
    return match(event)
        .returnType<Locked>()
        .when(
            () => multiTokens.locked.matrixEnjinV1041.is(event),
            () => multiTokens.locked.matrixEnjinV1041.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
