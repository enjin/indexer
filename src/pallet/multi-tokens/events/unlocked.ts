import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Unlocked } from '~/pallet/multi-tokens/events/types'

export function unlocked(event: EventItem): Unlocked {
    return match(event)
        .returnType<Unlocked>()
        .when(
            () => multiTokens.unlocked.matrixEnjinV1041.is(event),
            () => multiTokens.unlocked.matrixEnjinV1041.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
