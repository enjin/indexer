import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type MintedEvent = {
    who: string
    amount: bigint
}

export function minted(event: EventItem): MintedEvent {
    return match(event)
        .returnType<MintedEvent>()
        .when(balances.minted.matrixEnjinV603.is, () => balances.minted.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
