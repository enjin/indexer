import { balances } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { Minted } from './types'

export function minted(event: EventItem): Minted {
    return match(event)
        .returnType<Minted>()
        .when(
            () => balances.minted.matrixEnjinV603.is(event),
            () => balances.minted.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
