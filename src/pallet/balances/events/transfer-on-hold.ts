import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { TransferOnHold } from '~/pallet/balances/events/types'

export function transferOnHold(event: EventItem): TransferOnHold {
    return match(event)
        .returnType<TransferOnHold>()
        .when(
            () => balances.transferOnHold.matrixEnjinV1041.is(event),
            () => balances.transferOnHold.matrixEnjinV1041.decode(event)
        )
        .when(
            () => balances.transferOnHold.enjinV1070.is(event),
            () => balances.transferOnHold.enjinV1070.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
