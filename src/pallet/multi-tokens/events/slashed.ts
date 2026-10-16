import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Slashed } from '~/pallet/multi-tokens/events/types'

export function slashed(event: EventItem): Slashed {
    return match(event)
        .returnType<Slashed>()
        .when(
            () => multiTokens.slashed.matrixEnjinV603.is(event),
            () => multiTokens.slashed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
