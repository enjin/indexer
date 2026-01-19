import { marketplace } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { ExpiredListingRemoved } from '~/pallet/marketplace/events/types'

export function expiredListingRemoved(event: EventItem): ExpiredListingRemoved {
    return match(event)
        .returnType<ExpiredListingRemoved>()
        .when(
            () => marketplace.expiredListingRemoved.matrixEnjinV1012.is(event),
            () => marketplace.expiredListingRemoved.matrixEnjinV1012.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
