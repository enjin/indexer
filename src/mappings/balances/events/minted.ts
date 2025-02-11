import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Minted } from './types'

export function minted(event: EventItem): Minted {
    return match(event)
        .returnType<Minted>()
        .when(balances.minted.matrixEnjinV603.is, balances.minted.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
