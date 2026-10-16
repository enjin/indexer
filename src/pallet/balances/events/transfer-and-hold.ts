import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { TransferAndHold } from '~/pallet/balances/events/types'

export function transferAndHold(event: EventItem): TransferAndHold {
    return match(event)
        .returnType<TransferAndHold>()
        .when(
            () => balances.transferAndHold.matrixEnjinV1041.is(event),
            () => balances.transferAndHold.matrixEnjinV1041.decode(event)
        )
        .when(
            () => balances.transferAndHold.enjinV1070.is(event),
            () => balances.transferAndHold.enjinV1070.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
